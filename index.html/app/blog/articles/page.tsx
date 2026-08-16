"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ArticleSearch } from "@/components/shared/article-search";
import { BlogCategoryFilter } from "@/components/shared/blog-category-filter";
import { ArticleGrid } from "@/components/shared/article-grid";
import { Button } from "@/components/ui/button";
import { articles } from "@/lib/data/articles";

/*
  Client Component: search + category filtering is client-side for now
  (Phase 6 rule 3), with a "load more" slice instead of full pagination
  since the dataset is a small static array — swapping to real
  server-side pagination later means replacing `visibleCount`/`useMemo`
  with a fetch call keyed on the same `query`/`category` state, no
  markup changes needed. Metadata for this route lives in the sibling
  layout.tsx (same pattern as custom-routine/consultation in Phase 5).
*/
const PAGE_SIZE = 6;

export default function ArticlesListingPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory = category === "all" || article.category === category;
      const matchesQuery =
        query.trim().length === 0 ||
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  return (
    <Section>
      <Container>
        <SectionHeading title="همه مقالات" subtitle="جستجو کنید یا از دسته‌بندی‌ها استفاده کنید" />

        <div className="mb-8 flex flex-col gap-5">
          <ArticleSearch
            value={query}
            onChange={(value) => {
              setQuery(value);
              setVisibleCount(PAGE_SIZE);
            }}
          />
          <BlogCategoryFilter
            active={category}
            onChange={(value) => {
              setCategory(value);
              setVisibleCount(PAGE_SIZE);
            }}
          />
        </div>

        <ArticleGrid articles={visibleArticles} />

        {hasMore && (
          <div className="mt-8 flex justify-center">
            <Button variant="outline" size="lg" onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}>
              نمایش مقالات بیشتر
            </Button>
          </div>
        )}
      </Container>
    </Section>
  );
}