import Link from "next/link";
import { getPostIndex } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & études de cas | Agence vidéo en Belgique",
  description:
    "Conseils YouTube, storytelling pub, mariage, documentaire d’entreprise, 3D/VFX.",
  alternates: { canonical: "/blog" },
  openGraph: { type: "website", title: "Blog & études de cas", url: "/blog" },
};

export default async function BlogPage() {
  const posts = await getPostIndex();
  return (
    <main className="container">
      <h1>Blog & études de cas</h1>
      <ul className="grid">
        {posts.map((p) => (
          <li key={p.slug}>
            <article>
              {p.cover && <img src={p.cover} alt="" loading="lazy" />}
              <h2>
                <Link href={`/blog/${p.slug}`}>{p.title}</Link>
              </h2>
              <p>{p.description}</p>
              <time dateTime={p.date}>
                {new Date(p.date).toLocaleDateString("fr-BE")}
              </time>
              <div className="tags">{p.tags.join(" • ")}</div>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}
