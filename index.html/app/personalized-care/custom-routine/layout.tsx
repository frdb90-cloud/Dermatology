import type { Metadata } from "next";

/*
  custom-routine/page.tsx is a Client Component (the wizard needs
  useState/useForm), and Next.js cannot read `metadata` from Client
  Components. This sibling layout.tsx is a Server Component whose only
  job is to carry the route's SEO metadata — satisfies Phase 5 rule 12
  without turning the wizard page itself into a Server Component.
*/
export const metadata: Metadata = {
  title: "روتین شخصی‌سازی‌شده پوست | مراقبت اختصاصی",
  description:
    "تکمیل فرم چندمرحله‌ای ارزیابی پوست برای دریافت روتین مراقبتی شخصی‌سازی‌شده توسط تیم درمانی.",
  openGraph: {
    title: "روتین شخصی‌سازی‌شده پوست",
    description: "فرم ارزیابی پوست برای طراحی روتین اختصاصی توسط متخصص.",
    type: "website",
  },
};

export default function CustomRoutineLayout({ children }: { children: React.ReactNode }) {
  return children;
}