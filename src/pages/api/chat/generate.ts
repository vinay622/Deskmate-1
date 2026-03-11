import type { APIRoute } from 'astro';
import { embedSingleText, searchChunks, generateResponseStream } from '../../../lib/rag';
import type { SearchResult } from '../../../lib/rag';

export const POST: APIRoute = async ({ request, cookies, locals }) => {
  if (!locals.user) {
    return new Response(JSON.stringify({ ok: false, error: 'Unauthorized' }), {
      status: 401, headers: { 'Content-Type': 'application/json' },
    });
  }

  let body: any;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ ok: false, error: 'Invalid JSON body' }), {
      status: 400, headers: { 'Content-Type': 'application/json' },
    });
  }

  const query = (body.query as string)?.trim();
  const agent = (body.agent as string) || 'general';
  const history: Array<{ role: string; content: string }> = Array.isArray(body.history) ? body.history : [];

  if (!query) {
    return new Response(JSON.stringify({ ok: false, error: 'query is required' }), {
      status: 400, headers: { 'Content-Type': 'application/json' },
    });
  }

  // Embedding + vector search (non-fatal if it fails)
  let chunks: SearchResult[] = [];
  try {
    const queryEmbedding = await embedSingleText(query);
    chunks = await searchChunks(queryEmbedding, 0.45, 5, locals.collegeName ?? undefined);
  } catch (embErr: any) {
    console.error('Embedding/search error (continuing without context):', embErr?.message || embErr);
  }

  // Stream the Gemini response as newline-delimited JSON
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of generateResponseStream(query, chunks, agent, history, locals.collegeName ?? undefined, request, cookies)) {
          controller.enqueue(encoder.encode(JSON.stringify(chunk) + '\n'));
        }
      } catch (err: any) {
        console.error('Stream generation error:', err);
        const errChunk = { type: 'error', error: err?.message || 'Unknown error' };
        controller.enqueue(encoder.encode(JSON.stringify(errChunk) + '\n'));
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache, no-store',
      'X-Accel-Buffering': 'no',
    },
  });
};
