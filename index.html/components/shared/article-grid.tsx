import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Clock } from "lucide-react";
import { blogCategories } from "@/lib/data/blog-categories";
import type { ArticleData } from "@/lib/data/articles";

/*
  ArticleCard + ArticleGrid, kept in one file since neither is used
  independently elsewhere. This IS the project's reusable ArticleCard
  referenced across Phase 6 (blog listing, homepage "latest articles",
  dashboard "saved articles" links) — no separate duplicate is created.
*/
function CategoryBadge({ category }: { category: string }) {
  const data = blogCategories.find((c) => c.value === category);
  if (!data) return null;
  return (
    <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary">
      {data.label}
    </span>
  );
}

export function ArticleCard({ article }: { article: ArticleData }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-soft transition-shadow hover:shadow-card-hover"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, 380px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <CategoryBadge category={article.category} />
        <h3 className="line-clamp-2 text-sm font-bold leading-6 text-foreground">{article.title}</h3>
        <p className="line-clamp-2 flex-1 text-xs leading-6 text-muted-foreground">{article.excerpt}</p>
        <div className="flex items-center gap-3 border-t border-border/70 pt-3 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            {article.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {article.readingTime}
          </span>
        </div>
      </div>
    </Link>
  );
}

export function ArticleGrid({ articles }: { articles: ArticleData[] }) {
  if (articles.length === 0) {
    return (
      <p className="py-16 text-center text-sm text-muted-foreground">
        مقاله‌ای با این مشخصات پیدا نشد.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </div>
  );
}