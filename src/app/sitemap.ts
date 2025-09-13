import { MetadataRoute } from "next";
import { getPostIndex } from "@/lib/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://norde.be";
  const posts = await getPostIndex();
  const staticRoutes = [
    "", "/a-propos", "/services", "/services/agence-youtube", "/services/publicite-storytelling",
    "/services/mariage-documentaire", "/services/documentaire-entreprise", "/services/3d-vfx",
    "/portfolio", "/blog", "/contact"
  ].map((p) => ({
    url: `${base}${p}`,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.7
  }));

  const blogRoutes = posts.map(p => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  return [...staticRoutes, ...blogRoutes];
}
