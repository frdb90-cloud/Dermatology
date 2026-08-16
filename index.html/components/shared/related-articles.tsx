import Link from "next/link";
import { ArticleGrid } from "@/components/shared/article-grid";
import { articles, type ArticleData } from "@/lib/data/articles";

/*
  Automatic related-article selection, mirroring the Academy pattern
  (Phase 4's course/product related-items logic): same category,
  excluding the current article, capped at 3 — computed here so no
  article page ever hard-codes a manual related list.
*/
export function RelatedArticles({ current }: { current: ArticleData }) {
  const related = articles
    .filter((a) => a.category === current.category && a.slug !== current.slug)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-lg font-bold text-foreground">مقالات مرتبط</h2>
      <ArticleGrid articles={related} />
      <Link
        href="/blog/articles"
        className="mx-auto text-sm font-medium text-primary hover:underline"
      >
        مشاهده همه مقالات
      </Link>
    </div>
  );
}