// lib/posts.ts
import fs from "node:fs/promises";
import path from "node:path";
import { PostIndexItem, PostFull, type PostFull as TPostFull, type PostIndexItem as TPostIndexItem } from "./schema";

const postsDir = path.join(process.cwd(), "data", "posts");

export async function getPostIndex(): Promise<TPostIndexItem[]> {
  const raw = await fs.readFile(path.join(postsDir, "index.json"), "utf8");
  const arr = JSON.parse(raw);
  const parsed = arr.map((x: unknown) => PostIndexItem.parse(x));
  // tri du plus récent au plus ancien
  return parsed.sort((a: TPostIndexItem, b: TPostIndexItem) => b.date.localeCompare(a.date));
}

export async function getAllSlugs(): Promise<string[]> {
  const index = await getPostIndex();
  return index.map(p => p.slug);
}

export async function getPostBySlug(slug: string): Promise<TPostFull | null> {
  try {
    const filepath = path.join(postsDir, `${slug}.json`);
    const raw = await fs.readFile(filepath, "utf8");
    return PostFull.parse(JSON.parse(raw));
  } catch {
    return null;
  }
}
