import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import Link from "next/link";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Blog`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      images: post.cover ? [{ url: post.cover }] : undefined,
    },
  };
}

type Block =
  | { type: "h2" | "h3" | "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "img"; src: string; alt: string }
  | { type: "cta"; href: string; label: string };

function renderBlock(block: Block) {
  switch (block.type) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "p":
      return <p>{block.text}</p>;
    case "ul":
      return (
        <ul>
          {block.items.map((i: string, idx: number) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>
      );
    case "img":
      return <img src={block.src} alt={block.alt} loading="lazy" />;
    case "cta":
      return (
        <a className="btn" href={block.href}>
          {block.label}
        </a>
      );
    default:
      return null;
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <main className="container">
      <article>
        <header>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("fr-BE")}
          </time>
          {post.cover && <img src={post.cover} alt="" />}
        </header>

        <section className="prose">
          {post.content.map((b, i) => (
            <div key={i}>{renderBlock(b)}</div>
          ))}
        </section>
      </article>
      {/* Fil d’Ariane pour SEO */}
      <nav aria-label="breadcrumb">
        <ol>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li aria-current="page">{post.title}</li>
        </ol>
      </nav>

      {/* JSON-LD Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: post.author?.name,
            image: post.cover,
          }),
        }}
      />
    </main>
  );
}
