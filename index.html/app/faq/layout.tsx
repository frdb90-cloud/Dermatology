import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "سوالات متداول | کلینیک پوست، مو و زیبایی",
  description: "پاسخ به پرتکرارترین سوالات درباره نوبت‌دهی، درمان‌های پوستی، مو، مشاوره آنلاین و خدمات کلینیک.",
  openGraph: {
    title: "سوالات متداول",
    description: "پاسخ به سوالات رایج مراجعان کلینیک.",
    type: "website",
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}