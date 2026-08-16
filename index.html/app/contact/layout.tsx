import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تماس با ما | کلینیک پوست، مو و زیبایی",
  description: "اطلاعات تماس، آدرس، ساعات کاری و فرم ارتباط با کلینیک پوست، مو و زیبایی.",
  openGraph: {
    title: "تماس با ما",
    description: "راه‌های ارتباطی با کلینیک و ارسال پیام مستقیم.",
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}