import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ArticleDetail } from "@/components/shared/article-detail";
import { JsonLd, buildArticleJsonLd } from "@/components/shared/json-ld";
import { articles } from "@/lib/data/articles";
import { SITE_URL } from "@/lib/config/site-config";

/*
  AUDIT FIX (Phase 8): this file previously declared its own local
  `const SITE_URL = "https://example.com"` (Phase 6). It now imports the
  single centralized SITE_URL from lib/config/site-config.ts (Phase 8,
  Part 1) — no other logic in this file changes. Also now renders the
  article's JSON-LD (Phase 8 rule 7) right beside the page content,
  using only fields already present on the article (title, excerpt,
  image, author, date) — nothing invented.
*/
export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return {};

  const url = `${SITE_URL}/blog/${article.slug}`;

  return {
    title: `${article.title} | مجله پوست و مو`,
    description: article.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      type: "article",
      url,
      images: [{ url: article.coverImage }],
      publishedTime: article.date,
      authors: [article.author],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.metaDescription,
      images: [article.coverImage],
    },
  };
}

export default function BlogArticleDetailPage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const pageUrl = `${SITE_URL}/blog/${article.slug}`;

  return (
    <Section>
      <Container className="mx-auto max-w-3xl">
        <JsonLd data={buildArticleJsonLd(article)} />
        <ArticleDetail article={article} pageUrl={pageUrl} />
      </Container>
    </Section>
  );
}