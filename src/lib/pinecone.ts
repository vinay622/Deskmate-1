import { Pinecone } from "@pinecone-database/pinecone";

let _pinecone: Pinecone | null = null;

function getPineconeClient(): Pinecone {
  if (!_pinecone) {
    const apiKey = import.meta.env.PINECONE_API_KEY;
    if (!apiKey) throw new Error("PINECONE_API_KEY is not set");
    _pinecone = new Pinecone({ apiKey });
  }
  return _pinecone;
}

function getPineconeIndex() {
  const pc = getPineconeClient();
  const indexName = import.meta.env.PINECONE_INDEX;
  if (!indexName) throw new Error("PINECONE_INDEX is not set");
  return pc.index(indexName);
}

// Pinecone Inference — no external embedding API key needed
export const PINECONE_EMBED_MODEL = "multilingual-e5-large";

export async function generateEmbeddings(
  texts: string[],
  inputType: "passage" | "query" = "passage"
): Promise<number[][]> {
  const pc = getPineconeClient();
  const result = await pc.inference.embed({
    model: PINECONE_EMBED_MODEL,
    inputs: texts,
    parameters: { inputType, truncate: "END" },
  });

  // SDK v7: EmbeddingsList.data is optional — the list may be iterable directly
  const items: any[] = result.data
    ? result.data
    : Array.from(result as any);

  if (items.length === 0 && texts.length > 0) {
    throw new Error(
      `Pinecone Inference returned no embeddings. Raw response: ${JSON.stringify(result)}`
    );
  }

  return items.map((e: any, i: number) => {
    const values = e.values ?? e.embedding;
    if (!Array.isArray(values)) {
      throw new Error(
        `Unexpected embedding shape at index ${i}: ${JSON.stringify(e)}`
      );
    }
    return values as number[];
  });
}

export async function upsertDocumentChunks(
  docId: string,
  docName: string,
  docCategory: string,
  chunks: Array<{ content: string; chunkIndex: number }>,
  embeddings: number[][]
): Promise<void> {
  const index = getPineconeIndex();
  const vectors = chunks.map((chunk, i) => ({
    id: `${docId}_${chunk.chunkIndex}`,
    values: embeddings[i],
    metadata: {
      documentId: docId,
      documentName: docName,
      documentCategory: docCategory,
      content: chunk.content,
      chunkIndex: chunk.chunkIndex,
    },
  }));
  // Upsert in batches of 100 (Pinecone limit)
  for (let i = 0; i < vectors.length; i += 100) {
    await index.upsert({ records: vectors.slice(i, i + 100) });
  }
}

export async function deleteDocumentVectors(docId: string): Promise<void> {
  const index = getPineconeIndex();

  // Delete all vectors whose metadata.documentId matches this document
  await index.deleteMany({
    filter: { documentId: { $eq: docId } },
  });
}

export async function queryIndex(
  queryEmbedding: number[],
  topK: number = 5,
  scoreThreshold: number = 0.5
): Promise<Array<{
  id: string;
  document_id: string;
  chunk_index: number;
  content: string;
  similarity: number;
  document_name: string;
  document_category: string;
}>> {
  const index = getPineconeIndex();
  const results = await index.query({
    vector: queryEmbedding,
    topK,
    includeMetadata: true,
  });
  return (results.matches ?? [])
    .filter((m) => (m.score ?? 0) >= scoreThreshold)
    .map((m) => ({
      id: m.id,
      document_id: (m.metadata?.documentId as string) ?? "",
      chunk_index: (m.metadata?.chunkIndex as number) ?? 0,
      content: (m.metadata?.content as string) ?? "",
      similarity: m.score ?? 0,
      document_name: (m.metadata?.documentName as string) ?? "",
      document_category: (m.metadata?.documentCategory as string) ?? "",
    }));
}
