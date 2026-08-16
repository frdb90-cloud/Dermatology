/*
  AUDIT FINDING (Phase 8, item 4/17 — code quality / SEO):
  The Phase 6 file `app/blog/[slug]/page.tsx` declared its own local
  `const SITE_URL = "https://example.com"` instead of reading from a
  shared constant. That is harmless on its own, but it means the real
  production domain would need to be hunted down and edited in every
  file that builds an absolute URL (article canonical, OG url, share
  buttons, sitemap, robots, JSON-LD) instead of in one place — exactly
  the kind of scattered-config problem Phase 7 rule 4 already fixed for
  contact info. This file is the single centralized fix: every file
  that needs the site's base URL (sitemap.ts, robots.ts, blog [slug]
  metadata, JSON-LD) now imports SITE_URL from here instead of
  re-declaring it. Replace this one value once the real domain is live.
*/
export const SITE_URL = "https://example.com";

export const siteConfig = {
  name: "کلینیک پوست، مو و زیبایی",
  shortName: "کلینیک پوست و مو",
  url: SITE_URL,
  description:
    "کلینیک تخصصی پوست، مو و زیبایی — ارائه خدمات درمانی، آموزشی و مراقبت اختصاصی با رویکردی علمی و مسئولانه.",
};