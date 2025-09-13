// lib/schema.ts
import { z } from "zod";

export const PostIndexItem = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  tags: z.array(z.string()).default([]),
  cover: z.string().optional()
});
export type PostIndexItem = z.infer<typeof PostIndexItem>;

export const PostFull = PostIndexItem.extend({
  author: z.object({ name: z.string(), url: z.string().url() }).optional(),
  readingTime: z.number().optional(),
  content: z.array(z.union([
    z.object({ type: z.literal("h2"), text: z.string() }),
    z.object({ type: z.literal("h3"), text: z.string() }),
    z.object({ type: z.literal("p"), text: z.string() }),
    z.object({ type: z.literal("ul"), items: z.array(z.string()) }),
    z.object({ type: z.literal("img"), src: z.string(), alt: z.string() }),
    z.object({ type: z.literal("cta"), href: z.string(), label: z.string() })
  ]))
});
export type PostFull = z.infer<typeof PostFull>;
