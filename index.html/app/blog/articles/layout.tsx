import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "همه مقالات | مجله پوست و مو",
  description: "جستجو و مرور تمام مقالات تخصصی مجله پوست و مو بر اساس دسته‌بندی موضوعی.",
  openGraph: {
    title: "همه مقالات مجله پوست و مو",
    description: "آرشیو کامل مقالات آموزشی پوست، مو و زیبایی.",
    type: "website",
  },
};

export default function ArticlesListingLayout({ children }: { children: React.ReactNode }) {
  return children;
}