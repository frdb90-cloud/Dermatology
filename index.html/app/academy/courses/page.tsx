import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { CourseFilters } from "@/components/shared/course-filters";
import { courses } from "@/lib/data/courses";

export const metadata: Metadata = {
  title: "دوره‌های آموزشی پوست و مو | آکادمی",
  description:
    "کاتالوگ کامل دوره‌های آموزشی مراقبت از پوست و مو، همراه با امکان جستجو و فیلتر بر اساس دسته‌بندی.",
  openGraph: {
    title: "دوره‌های آموزشی آکادمی",
    description: "مشاهده و جستجوی دوره‌های آموزشی تخصصی پوست و مو.",
    type: "website",
  },
};

/*
  /academy/courses — thin Server Component wrapper. All interactive
  search/filter state lives in the Client Component CourseFilters; this
  page only owns metadata and passes the full `courses` array down.
*/
export default function AcademyCoursesPage() {
  return (
    <Section>
      <Container>
        <SectionHeading
          title="دوره‌های آموزشی"
          subtitle="دوره مناسب خود را بر اساس دسته‌بندی یا جستجو پیدا کنید"
        />
        <CourseFilters courses={courses} />
      </Container>
    </Section>
  );
}