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

async function extractPdfText(file: File): Promise<string> {
  const mod = await import("pdf-parse");
  const pdfParse = ((mod as any).default ?? mod) as unknown as (buf: Buffer) => Promise<{ text: string }>;
  const buffer = Buffer.from(await file.arrayBuffer());
  const data = await pdfParse(buffer);
  return data.text;
}

async function extractDocxText(file: File): Promise<string> {
  const mammoth = await import("mammoth");
  const buffer = Buffer.from(await file.arrayBuffer());
  const result = await mammoth.extractRawText({ buffer });
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

export async function embedText(texts: string[]): Promise<number[][]> {
  return generateEmbeddings(texts, "passage");
}

export async function embedSingleText(text: string): Promise<number[]> {
  const results = await generateEmbeddings([text], "query");
  return results[0];
}

// ─── 4. Search Chunks (Vector Similarity via Pinecone) ──────

export async function searchChunks(
  queryEmbedding: number[],
  matchThreshold: number = 0.5,
  matchCount: number = 5
): Promise<SearchResult[]> {
  return queryIndex(queryEmbedding, matchCount, matchThreshold);
}

// ─── 5. Generate Response with RAG ──────────────────────────

const SYSTEM_PROMPT = `You are DeskMate, an AI assistant for college students. You MUST follow these rules:

1. SCOPE: You ONLY answer questions related to college life, academics, administration, fees, hostel, library, placements, scholarships, exams, and campus services. If a question is not related to college topics, politely decline: "I can only help with college-related queries. Please ask me about fees, academics, hostel, or other campus services!"

2. KNOWLEDGE BASE: When context from official college documents is provided below, use it to give accurate, specific answers. Always prefer information from the provided context over your general knowledge.

3. CITATIONS: When your answer uses information from the provided context, mention the source document name naturally in your response (e.g., "According to the Fee Structure 2024-25..."). List all source documents used at the end of your answer in the format: [Sources: Document Name 1, Document Name 2].

4. NO CONTEXT: If no relevant context is provided or the context doesn't contain the answer, you may still answer general college-related questions using your knowledge, but clearly state that the answer is based on general knowledge and suggest the student verify with the relevant department.

5. TONE: Be helpful, concise, and professional. Use bullet points for lists. Keep answers focused and actionable.

6. LANGUAGE: Respond in the same language the student uses (English, Hindi, or Telugu).`;

// ─── 5a. Streaming Response ──────────────────────────────────

export type StreamChunk =
  | { type: 'chunk'; text: string }
  | { type: 'done'; sources: Array<{ documentName: string; category: string }>; hasContext: boolean }
  | { type: 'error'; error: string };

export async function* generateResponseStream(
  query: string,
  context: SearchResult[],
  agentHint?: string
): AsyncGenerator<StreamChunk> {
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
    contextBlock = "\n\n[No relevant documents found in the knowledge base for this query.]\n";
  }

  let userPrompt = query;
  if (agentHint && agentHint !== "general") {
    userPrompt = `[Student is asking in the context of: ${agentHint}]\n\n${query}`;
  }

  const responseStream = await ai.models.generateContentStream({
    model: GENERATION_MODEL,
    contents: [
      {
        role: "user",
        parts: [{ text: contextBlock + "\n\nStudent question: " + userPrompt }],
      },
    ],
    config: {
      systemInstruction: SYSTEM_PROMPT,
      temperature: 0.3,
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
      temperature: 0.3,
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
