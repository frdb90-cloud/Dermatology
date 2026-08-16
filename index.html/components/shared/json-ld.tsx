import { SITE_URL, siteConfig } from "@/lib/config/site-config";
import { doctorProfile } from "@/lib/data/doctor";
import { contactInfo } from "@/lib/data/contact";
import type { ArticleData } from "@/lib/data/articles";

/*
  Reusable JSON-LD builders (Phase 8 rule 7). Each function returns a
  plain object rendered through a single <JsonLd> component as a
  <script type="application/ld+json">. Only real, already-existing data
  is referenced — doctorProfile/contactInfo are the exact same
  Phase 7 data sources the About/Contact pages render, so nothing here
  invents a rating, award, address, or credential that isn't already
  visible (and placeholder-marked) elsewhere on the site.
*/
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function buildMedicalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: siteConfig.name,
    url: SITE_URL,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: contactInfo.address,
    },
    telephone: contactInfo.phone,
    email: contactInfo.email,
  };
}

export function buildPhysicianJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctorProfile.name,
    medicalSpecialty: "Dermatology",
    description: doctorProfile.introduction,
    url: `${SITE_URL}/about`,
  };
}

export function buildArticleJsonLd(article: ArticleData) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: article.title,
    description: article.metaDescription,
    image: article.coverImage,
    author: { "@type": "Person", name: article.author },
    datePublished: article.date,
    url: `${SITE_URL}/blog/${article.slug}`,
  };
}