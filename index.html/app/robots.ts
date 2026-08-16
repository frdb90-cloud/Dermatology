import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config/site-config";

/*
  app/robots.ts — Next.js special file, served automatically at
  /robots.txt. Disallows the mock auth pages and the member dashboard
  (Phase 8 rule 6) — these have no real backend/session guard yet, so
  the ONLY protection they currently have against being indexed is
  this directive plus the `noindex` meta already set inline on the
  dashboard page (Phase 5). Both must stay in sync if these routes
  change; when real auth ships, this file should be revisited together
  with whatever server-side redirect gets added.
*/
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/auth/", "/personalized-care/members/dashboard"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}