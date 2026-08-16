import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd, buildMedicalBusinessJsonLd, buildPhysicianJsonLd } from "@/components/shared/json-ld";
import { siteConfig, SITE_URL } from "@/lib/config/site-config";
import "./globals.css";

/*
  AUDIT FIX (Phase 8): root layout now also renders the site-wide
  MedicalClinic + Physician JSON-LD (Phase 8 rule 7) once, globally —
  rather than repeating it on every page. `metadataBase` is added so
  every page's relative OG image/canonical resolves against the real
  SITE_URL automatically, instead of each page needing to build a full
  absolute URL by hand (the exact class of bug already found and fixed
  in the blog [slug] page).

  IMPORTANT: this file already existed from Phase 1 with the font
  setup (Vazirmatn), <html dir="rtl" lang="fa">, and the Header/Footer
  wiring. Only the metadataBase field and the two JsonLd tags are new
  in this version — the font/provider setup from Phase 1 is preserved
  exactly as before and must not be re-typed differently by whichever
  file already holds it in the real repository. If your actual Phase 1
  root layout differs from this simplified reconstruction in any way
  (e.g. ThemeProvider, additional font variables), keep those parts and
  only merge in metadataBase + the JsonLd additions shown here.
*/
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: SITE_URL,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen bg-background font-sans antialiased">
        <JsonLd data={buildMedicalBusinessJsonLd()} />
        <JsonLd data={buildPhysicianJsonLd()} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}