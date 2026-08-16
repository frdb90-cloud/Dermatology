import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "رزرو مشاوره آنلاین | مراقبت اختصاصی",
  description: "رزرو مشاوره متنی، ویدیویی یا حضوری با متخصص پوست و مو.",
  openGraph: {
    title: "رزرو مشاوره آنلاین",
    description: "انتخاب نوع مشاوره، زمان و ثبت اطلاعات برای دریافت مشاوره تخصصی.",
    type: "website",
  },
};

export default function ConsultationLayout({ children }: { children: React.ReactNode }) {
  return children;
}