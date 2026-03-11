import { getGeminiClient, GENERATION_MODEL } from "./gemini";
import { generateEmbeddings, queryIndex } from "./pinecone";

// ─── Types ───────────────────────────────────────────────────

export interface ChunkResult {
  content: string;
  chunkIndex: number;
}

export interface SearchResult {
  id: string;
  document_id: string;
  chunk_index: number;
  content: string;
  similarity: number;
  document_name: string;
  document_category: string;
}

export interface RAGResponse {
  answer: string;
  sources: Array<{ documentName: string; category: string }>;
  hasContext: boolean;
}

export interface StaffMember {
  name: string;
  department: string;
  role: string;
  email: string;
  phone: string;
  whatsapp: string;
  office_location: string;
  office_hours?: string;
  languages?: string[];
  urgency_level?: string;
}

export interface EscalationResult {
  shouldEscalate: boolean;
  category?: string;
  reason?: string;
  isUrgent?: boolean;
  language?: string;
  staff?: StaffMember[];
}

// ─── Enhanced Escalation Detection ───────────────────────────────────
const QUERY_CATEGORIES = [
  'admissions', 'enrollment', 'fee', 'accounts', 'payments', 'examinations',
  'results', 'academic', 'placements', 'internships', 'career', 'hostel',
  'student affairs', 'welfare', 'computer science', 'technical'
];

const EXPLICIT_CONTACT_TRIGGERS = [
  'contact', 'talk to', 'speak with', 'reach out', 'get in touch',
  'staff member', 'officer', 'administration', 'office', 'call', 'email',
  'who can help', 'who handles', 'department', 'person responsible'
];

const SENSITIVE_TRIGGERS = [
  'complaint', 'approval', 'verification', 'personal record', 'payment issue',
  'refund', 'certificate', 'transcript', 'grievance', 'appeal'
];

const URGENCY_TRIGGERS = ['urgent', 'emergency', 'asap', 'immediately', 'crisis', 'critical'];

const LANGUAGE_INDICATORS = {
  hindi: ['hindi', 'हिंदी', 'मुझे', 'क्या', 'कैसे', 'है', 'के', 'में'],
  telugu: ['telugu', 'తెలుగు', 'నాకు', 'ఎలా', 'ఎక్కడ', 'ఏమి', 'గురించి'],
};

function detectLanguage(query: string): string {
  const lowerQuery = query.toLowerCase();

  for (const [language, indicators] of Object.entries(LANGUAGE_INDICATORS)) {
    if (indicators.some(indicator => lowerQuery.includes(indicator))) {
      return language;
    }
  }

  return 'english';
}

function detectUrgency(query: string): boolean {
  const lowerQuery = query.toLowerCase();
  return URGENCY_TRIGGERS.some(trigger => lowerQuery.includes(trigger));
}

function isWithinOfficeHours(currentTime: Date = new Date()): boolean {
  const hour = currentTime.getHours();
  const day = currentTime.getDay(); // 0 = Sunday, 6 = Saturday

  // Mon-Fri 9AM-5PM (adjust as needed)
  return day >= 1 && day <= 5 && hour >= 9 && hour < 17;
}

export function detectQueryCategory(query: string): string | null {
  const lowerQuery = query.toLowerCase();

  for (const category of QUERY_CATEGORIES) {
    if (lowerQuery.includes(category)) {
      return category;
    }
  }

  // Additional category mappings
  if (lowerQuery.includes('fees') || lowerQuery.includes('payment')) return 'fee';
  if (lowerQuery.includes('exam') || lowerQuery.includes('test')) return 'examinations';
  if (lowerQuery.includes('admission') || lowerQuery.includes('apply')) return 'admissions';
  if (lowerQuery.includes('placement') || lowerQuery.includes('job')) return 'placements';
  if (lowerQuery.includes('room') || lowerQuery.includes('accommodation')) return 'hostel';

  return null;
}

export function shouldEscalate(
  query: string,
  contextLength: number,
  confidenceScore?: number
): { shouldEscalate: boolean; reason: string; isUrgent: boolean; language: string } {
  const lowerQuery = query.toLowerCase();
  const language = detectLanguage(query);
  const isUrgent = detectUrgency(query);

  // Check explicit contact requests
  for (const trigger of EXPLICIT_CONTACT_TRIGGERS) {
    if (lowerQuery.includes(trigger)) {
      return { shouldEscalate: true, reason: 'explicit_request', isUrgent, language };
    }
  }

  // Check sensitive topics
  for (const trigger of SENSITIVE_TRIGGERS) {
    if (lowerQuery.includes(trigger)) {
      return { shouldEscalate: true, reason: 'sensitive_topic', isUrgent, language };
    }
  }

  // Time-aware escalation for urgent requests outside office hours
  if (isUrgent && !isWithinOfficeHours()) {
    return { shouldEscalate: true, reason: 'urgent_after_hours', isUrgent, language };
  }

  // Knowledge gap (no context found)
  if (contextLength === 0) {
    return { shouldEscalate: true, reason: 'knowledge_gap', isUrgent, language };
  }

  // Check confidence threshold (if provided)
  if (confidenceScore !== undefined && confidenceScore < 0.3) {
    return { shouldEscalate: true, reason: 'low_confidence', isUrgent, language };
  }

  return { shouldEscalate: false, reason: 'sufficient_context', isUrgent, language };
}

// ─── 1. Text Extraction ─────────────────────────────────────

export async function extractText(
  file: File,
  fileType: string
): Promise<string> {
  switch (fileType) {
    case "application/pdf":
      return extractPdfText(file);
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return extractDocxText(file);
    case "text/plain":
      return file.text();
    default:
      if (fileType.startsWith("image/")) {
        return extractImageText(file);
      }
      throw new Error(`Unsupported file type: ${fileType}`);
  }
}

// Cached module references to avoid re-importing heavy libs on every request
let _pdfParse: ((buf: Buffer) => Promise<{ text: string }>) | null = null;
let _mammoth: typeof import("mammoth") | null = null;

async function extractPdfText(file: File): Promise<string> {
  if (!_pdfParse) {
    const mod = await import("pdf-parse");
    _pdfParse = ((mod as any).default ?? mod) as (buf: Buffer) => Promise<{ text: string }>;
  }
  const buffer = Buffer.from(await file.arrayBuffer());
  const data = await _pdfParse(buffer);
  return data.text;
}

async function extractDocxText(file: File): Promise<string> {
  if (!_mammoth) {
    _mammoth = await import("mammoth");
  }
  const buffer = Buffer.from(await file.arrayBuffer());
  const result = await _mammoth.extractRawText({ buffer });
  return result.value;
}

async function extractImageText(file: File): Promise<string> {
  const ai = getGeminiClient();
  const base64 = Buffer.from(await file.arrayBuffer()).toString("base64");
  const response = await ai.models.generateContent({
    model: GENERATION_MODEL,
    contents: [
      {
        role: "user",
        parts: [
          {
            inlineData: {
              mimeType: file.type,
              data: base64,
            },
          },
          {
            text: "Extract ALL text from this image. Return only the extracted text, no commentary.",
          },
        ],
      },
    ],
  });
  return response.text ?? "";
}

// ─── 2. Text Chunking ───────────────────────────────────────

export function chunkText(
  text: string,
  chunkSize: number = 1000,
  overlap: number = 200
): ChunkResult[] {
  const cleaned = text.replace(/\s+/g, " ").trim();

  if (cleaned.length === 0) return [];
  if (cleaned.length <= chunkSize) {
    return [{ content: cleaned, chunkIndex: 0 }];
  }

  const chunks: ChunkResult[] = [];
  let start = 0;
  let index = 0;

  while (start < cleaned.length) {
    let end = start + chunkSize;

    // Try to break at a sentence boundary
    if (end < cleaned.length) {
      const lastPeriod = cleaned.lastIndexOf(". ", end);
      const lastNewline = cleaned.lastIndexOf("\n", end);
      const breakPoint = Math.max(lastPeriod, lastNewline);
      if (breakPoint > start + chunkSize * 0.5) {
        end = breakPoint + 1;
      }
    } else {
      end = cleaned.length;
    }

    chunks.push({
      content: cleaned.slice(start, end).trim(),
      chunkIndex: index,
    });

    start = end - overlap;
    if (start >= cleaned.length) break;
    index++;
  }

  return chunks;
}

// ─── 3. Generate Embeddings ─────────────────────────────────

const EMBED_BATCH_SIZE = 20;

export async function embedText(texts: string[]): Promise<number[][]> {
  // Batch to avoid sending too many texts at once (memory + API limits)
  const allEmbeddings: number[][] = [];
  for (let i = 0; i < texts.length; i += EMBED_BATCH_SIZE) {
    const batch = texts.slice(i, i + EMBED_BATCH_SIZE);
    const batchEmbeddings = await generateEmbeddings(batch, "passage");
    allEmbeddings.push(...batchEmbeddings);
  }
  return allEmbeddings;
}

export async function embedSingleText(text: string): Promise<number[]> {
  const results = await generateEmbeddings([text], "query");
  return results[0];
}

// ─── 4. Search Chunks (Vector Similarity via Pinecone) ──────

export async function searchChunks(
  queryEmbedding: number[],
  matchThreshold: number = 0.5,
  matchCount: number = 5,
  collegeName?: string
): Promise<SearchResult[]> {
  return queryIndex(queryEmbedding, matchCount, matchThreshold, collegeName);
}

// ─── 5. Generate Response with RAG ──────────────────────────

const SYSTEM_PROMPT = `You are DeskMate, an AI-powered College Query Assistant designed to help students, parents, and visitors get accurate information about their college.

Your purpose is to answer questions related to:
* Admissions and enrollment procedures
* Courses, departments, and academic programs
* Fee structures and payment details
* Faculty and administrative staff
* Events and announcements
* Campus facilities (library, hostels, labs, cafeteria)
* Placements and internships
* Academic policies and examination procedures
* Contact information and office hours
* Student services and support systems

## BEHAVIOR RULES

1. **Accuracy First**
   Only provide information that exists in the knowledge base or provided documents.
   Do not guess or invent information.
   If information is unavailable, politely say that the information is not currently available and suggest contacting the college administration.

2. **Context Awareness**
   If the user asks about an event or announcement, check whether it is still valid.
   If the event has already passed, respond that the event has already concluded.

3. **Clear and Helpful Responses**
   Explain information in a simple and student-friendly way.
   Avoid complex technical language.
   Use short paragraphs for readability.
   Never copy-paste raw document text — always paraphrase and synthesize information.

4. **Structured Formatting**
   When appropriate, format responses using:
   * Bullet points for lists
   * Numbered steps for procedures
   * Bold formatting for important figures, dates, and amounts (e.g. **₹45,000**, **15th October**)
   * Short sections to help users quickly understand information

5. **Streaming Response Style**
   Your responses will be streamed word-by-word to the interface.
   Therefore:
   * Start answering immediately
   * Avoid long internal reasoning before responding
   * Write naturally so the response appears smoothly as it streams

6. **Professional Tone**
   Maintain a friendly, professional, and helpful tone suitable for students and parents.

7. **Query Clarification**
   If a question is unclear, politely ask the user to clarify what they mean.
   Example: "Could you please specify which course or department you are referring to?"

8. **Scope Limitation**
   If a user asks something unrelated to the college (general knowledge, entertainment, politics, etc.), politely explain that the assistant only answers college-related questions.
   Example: "I'm designed to assist with college-related information. Please ask about admissions, courses, campus facilities, or other college services."

9. **Source Attribution**
   When using information from college documents, mention the source naturally in your response.
   At the end of responses using document context, include: *Source: Document Name*

10. **Language Matching**
    Always respond in the same language the student uses (English, Hindi, Telugu, etc.).

## ESCALATION HANDLING

When you encounter queries that require human assistance, respond professionally:
- Acknowledge the request warmly
- Explain that you'll connect them with the appropriate staff member
- Present staff contact information clearly
- Remain available for other questions

## GOAL
Provide accurate, fast, and helpful college-related information to students while maintaining a smooth conversational experience similar to modern AI assistants.`;


// ─── 5a. Streaming Response ──────────────────────────────────

export type StreamChunk =
  | { type: 'chunk'; text: string }
  | { type: 'done'; sources: Array<{ documentName: string; category: string }>; hasContext: boolean }
  | { type: 'error'; error: string };

async function* generateEscalationResponse(
  query: string,
  reason: string,
  collegeName?: string,
  isUrgent: boolean = false,
  language: string = 'english',
  request?: Request,
  cookies?: import('astro').AstroCookies
): AsyncGenerator<StreamChunk> {
  try {
    const category = detectQueryCategory(query);
    const currentTime = new Date();

    let escalationText = '';

    // Context-aware messaging
    if (reason === 'urgent_after_hours') {
      escalationText = "I understand this is urgent. While our regular staff may not be available right now, let me provide you with the appropriate contact information. ";
    } else if (isUrgent) {
      escalationText = "I understand this is urgent. Let me connect you with priority staff members who can help immediately. ";
    } else if (reason === 'explicit_request') {
      escalationText = "I'll connect you with the right staff member for your request. ";
    } else if (reason === 'sensitive_topic') {
      escalationText = "This matter requires official assistance. Let me provide you with the appropriate staff contact. ";
    } else {
      escalationText = "I don't have specific information about this. Let me connect you with staff who can help. ";
    }

    // Yield introduction with typing simulation
    for (const word of escalationText.split(' ')) {
      yield { type: 'chunk', text: word + ' ' };
      await new Promise(resolve => setTimeout(resolve, 30));
    }

    if (category && collegeName) {
      const staffMembers = await getStaffFromCategory(category, collegeName, language, isUrgent, currentTime, request, cookies);

      if (staffMembers.length > 0) {
        let staffText = `\n\n**Available Staff:**\n\n`;

        for (const staff of staffMembers) {
          staffText += `**${staff.name}**\n`;
          staffText += `${staff.role}, ${staff.department}\n`;

          if (isUrgent && staff.urgency_level === 'emergency') {
            staffText += `🚨 **Emergency Contact** 🚨\n`;
          } else if (isUrgent && staff.urgency_level === 'urgent') {
            staffText += `⚡ **Priority Contact** ⚡\n`;
          }

          staffText += `\n**Contact Information:**\n`;
          if (staff.email) staffText += `📧 Email: ${staff.email}\n`;
          if (staff.phone) staffText += `📞 Phone: ${staff.phone}\n`;
          if (staff.whatsapp) staffText += `💬 WhatsApp: ${staff.whatsapp}\n`;
          if (staff.office_location) staffText += `📍 Office: ${staff.office_location}\n`;
          if (staff.office_hours) staffText += `🕒 Hours: ${staff.office_hours}\n`;

          // Show languages if multiple are supported
          if (staff.languages && staff.languages.length > 1) {
            const languages = staff.languages.map(lang =>
              lang.charAt(0).toUpperCase() + lang.slice(1)
            ).join(', ');
            staffText += `🗣️  Languages: ${languages}\n`;
          }

          staffText += '\n---\n\n';
        }

        // Stream staff information
        for (const char of staffText) {
          yield { type: 'chunk', text: char };
          await new Promise(resolve => setTimeout(resolve, 10));
        }
      } else {
        // Enhanced fallback for no staff found
        let fallbackText = "\n\nI couldn't find specific staff for this category. ";

        if (!isWithinOfficeHours()) {
          fallbackText += "Since it's outside regular office hours, you may want to try again during business hours (9 AM - 5 PM, Monday-Friday). ";
        }

        if (isUrgent) {
          fallbackText += "For urgent matters, please contact the main college office or emergency helpline. ";
        } else {
          fallbackText += "Please contact the main college administration for assistance. ";
        }

        for (const char of fallbackText) {
          yield { type: 'chunk', text: char };
          await new Promise(resolve => setTimeout(resolve, 15));
        }
      }
    } else {
      const fallbackText = "\n\nPlease contact the main college office for assistance with your query.";
      for (const char of fallbackText) {
        yield { type: 'chunk', text: char };
        await new Promise(resolve => setTimeout(resolve, 20));
      }
    }

    const continuityText = "\n\nI'm still here to help with any other questions about your college!";
    for (const char of continuityText) {
      yield { type: 'chunk', text: char };
      await new Promise(resolve => setTimeout(resolve, 15));
    }

    yield { type: 'done', sources: [], hasContext: false };

  } catch (error) {
    console.error('Escalation response error:', error);
    yield { type: 'error', error: 'Failed to connect you with staff. Please try again or contact the main office.' };
  }
}

// Enhanced staff fetching with real database integration
async function getStaffFromCategory(
  category: string,
  collegeName: string,
  userLanguage?: string,
  isUrgent?: boolean,
  currentTime?: Date,
  request?: Request,
  cookies?: import('astro').AstroCookies
): Promise<StaffMember[]> {
  try {
    let supabase;
    if (request && cookies) {
      // Use authenticated server client (respects RLS with user session)
      const { createSupabaseServerClient } = await import('./supabase');
      supabase = createSupabaseServerClient(request, cookies);
    } else {
      // Fallback to service client
      const { createSupabaseServiceClient } = await import('./supabase');
      supabase = createSupabaseServiceClient();
    }

    let query = supabase
      .from('staff_members')
      .select('name, department, role, email, phone, whatsapp, office_location, office_hours, languages, urgency_level')
      .eq('college_name', collegeName)
      .eq('status', 'active')
      .contains('query_categories', [category.toLowerCase()]);

    // Language-based filtering
    if (userLanguage && userLanguage !== 'english') {
      query = query.contains('languages', [userLanguage.toLowerCase()]);
    }

    // Urgency-based filtering
    if (isUrgent) {
      query = query.in('urgency_level', ['urgent', 'emergency']);
    }

    const { data: staff, error } = await query
      .order('urgency_level', { ascending: false })
      .order('name')
      .limit(3);

    if (error) {
      console.error('Error fetching staff:', error);
      return [];
    }

    return staff || [];
  } catch (error) {
    console.error('Error in getStaffFromCategory:', error);
    return [];
  }
}

export async function* generateResponseStream(
  query: string,
  context: SearchResult[],
  agentHint?: string,
  history?: Array<{ role: string; content: string }>,
  collegeName?: string,
  request?: Request,
  cookies?: import('astro').AstroCookies
): AsyncGenerator<StreamChunk> {
  const ai = getGeminiClient();
  const hasContext = context.length > 0;

  // Check for escalation triggers
  const escalationCheck = shouldEscalate(query, context.length);
  if (escalationCheck.shouldEscalate) {
    // Generate enhanced escalation response
    yield* generateEscalationResponse(
      query,
      escalationCheck.reason,
      collegeName,
      escalationCheck.isUrgent,
      escalationCheck.language,
      request,
      cookies
    );
    return;
  }

  let contextBlock = "";
  if (hasContext) {
    contextBlock = "\n\n--- RETRIEVED COLLEGE DOCUMENTS ---\n";
    context.forEach((chunk) => {
      contextBlock += `\n[Source: ${chunk.document_name} | Category: ${chunk.document_category}]\n${chunk.content}\n`;
    });
    contextBlock += "\n--- END OF DOCUMENTS ---\n";
  } else {
    contextBlock = "\n\n[No relevant documents found in the knowledge base for this query.]\n";
  }

  let userPrompt = query;
  if (agentHint && agentHint !== "general") {
    userPrompt = `[Student is asking in the context of: ${agentHint}]\n\n${query}`;
  }

  // Build multi-turn contents from conversation history
  const contents: Array<{ role: "user" | "model"; parts: Array<{ text: string }> }> = [];

  if (history && history.length > 0) {
    for (const msg of history) {
      const geminiRole = msg.role === "assistant" ? "model" : "user";
      contents.push({
        role: geminiRole as "user" | "model",
        parts: [{ text: msg.content }],
      });
    }
  }

  // Current user message with RAG context
  contents.push({
    role: "user",
    parts: [{ text: contextBlock + "\n\nStudent question: " + userPrompt }],
  });

  const responseStream = await ai.models.generateContentStream({
    model: GENERATION_MODEL,
    contents,
    config: {
      systemInstruction: SYSTEM_PROMPT,
      temperature: 0.5,
      maxOutputTokens: 1024,
    },
  });

  for await (const chunk of responseStream) {
    if (chunk.text) {
      yield { type: 'chunk', text: chunk.text };
    }
  }

  const sourceNames = [...new Set(context.map((c) => c.document_name))];
  const sources = sourceNames.map((name) => {
    const match = context.find((c) => c.document_name === name);
    return { documentName: name, category: match?.document_category ?? "General" };
  });

  yield { type: 'done', sources, hasContext };
}

// ─── 5b. Non-streaming Response (kept for reference) ────────

export async function generateResponse(
  query: string,
  context: SearchResult[],
  agentHint?: string
): Promise<RAGResponse> {
  const ai = getGeminiClient();
  const hasContext = context.length > 0;

  let contextBlock = "";
  if (hasContext) {
    contextBlock = "\n\n--- RETRIEVED COLLEGE DOCUMENTS ---\n";
    context.forEach((chunk) => {
      contextBlock += `\n[Source: ${chunk.document_name} | Category: ${chunk.document_category}]\n${chunk.content}\n`;
    });
    contextBlock += "\n--- END OF DOCUMENTS ---\n";
  } else {
    contextBlock =
      "\n\n[No relevant documents found in the knowledge base for this query.]\n";
  }

  let userPrompt = query;
  if (agentHint && agentHint !== "general") {
    userPrompt = `[Student is asking in the context of: ${agentHint}]\n\n${query}`;
  }

  const response = await ai.models.generateContent({
    model: GENERATION_MODEL,
    contents: [
      {
        role: "user",
        parts: [
          { text: contextBlock + "\n\nStudent question: " + userPrompt },
        ],
      },
    ],
    config: {
      systemInstruction: SYSTEM_PROMPT,
      temperature: 0.5,
      maxOutputTokens: 1024,
    },
  });

  const answer =
    response.text ??
    "I'm sorry, I couldn't generate a response. Please try again.";

  const sourceNames = [...new Set(context.map((c) => c.document_name))];
  const sources = sourceNames.map((name) => {
    const match = context.find((c) => c.document_name === name);
    return {
      documentName: name,
      category: match?.document_category ?? "General",
    };
  });

  return { answer, sources, hasContext };
}
