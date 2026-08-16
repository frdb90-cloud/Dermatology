import { SectionHeading } from "@/components/shared/section-heading";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";

/*
  PHASE 1 PLACEHOLDER — the real Hero, Feature cards, About, Services grid,
  Academy/Product rails, Testimonials and Newsletter sections are built in
  Phase 2 (Homepage) using the primitives and cards created in this phase.
  This stub exists only so the app boots and Header/Footer are visible
  in context.
*/
export default function HomePage() {
  return (
    <Section>
      <Container>
        <SectionHeading
          title="فاز ۱: پایه‌گذاری با موفقیت انجام شد"
          subtitle="کامپوننت‌های پایه، دیزاین‌سیستم و لایه‌بندی اصلی سایت آماده شد. محتوای کامل صفحه اصلی در فاز بعد ساخته می‌شود."
        />
      </Container>
    </Section>
  );
}