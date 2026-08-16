import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProductFilters } from "@/components/shared/product-filters";
import { digitalProducts } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "محصولات دیجیتال پوست و مو | آکادمی",
  description:
    "راهنماها، پلنرها و چک‌لیست‌های دیجیتال قابل‌دانلود برای مراقبت اصولی از پوست و مو.",
  openGraph: {
    title: "محصولات دیجیتال آکادمی",
    description: "کاتالوگ کامل محصولات دیجیتال آموزشی قابل‌دانلود.",
    type: "website",
  },
};

export default function AcademyProductsPage() {
  return (
    <Section>
      <Container>
        <SectionHeading
          title="محصولات دیجیتال"
          subtitle="راهنما، پلنر و چک‌لیست مناسب خود را پیدا کنید"
        />
        <ProductFilters products={digitalProducts} />
      </Container>
    </Section>
  );
}