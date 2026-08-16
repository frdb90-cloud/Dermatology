import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config/site-config";
import { articles } from "@/lib/data/articles";

/*
  app/sitemap.ts — Next.js special file, served automatically at
  /sitemap.xml. Includes only real public, indexable routes.
  Deliberately EXCLUDES (per Phase 8 rule 5):
    /auth/login, /auth/register, /auth/forgot-password
    /personalized-care/members/dashboard (mock member area)
  Dynamic content (blog articles) is included from the same `articles`
  data source the pages themselves render from, so a new article added
  to lib/data/articles.ts automatically appears here with no extra step.
  Course/product detail pages (Academy) are intentionally left out for
  now since Phase 4's course/product slugs are illustrative sample data,
  not final catalog content — add them here once real catalog data
  replaces the Phase 4 placeholders.
*/
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "yearly", priority: 1 },
    { url: `${SITE_URL}/clinic`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/clinic/services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/clinic/appointment`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/academy`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/academy/courses`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/academy/products`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/personalized-care`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/personalized-care/custom-routine`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/personalized-care/consultation`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/personalized-care/follow-up`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${SITE_URL}/personalized-care/members`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/blog/articles`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/about`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/faq`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.6 },
  ];

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE_URL}/blog/${article.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...articleRoutes];
}