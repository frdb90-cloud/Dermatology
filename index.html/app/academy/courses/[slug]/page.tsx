import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseDetail } from "@/components/shared/course-detail";
import { courses } from "@/lib/data/courses";

/*
  /academy/courses/[slug] — routing-only, mirrors Phase 3's
  clinic-service-detail-page pattern exactly. Resolves the slug against
  `courses`, computes related courses (same category, excluding self,
  max 4) and delegates all rendering to CourseDetail.
*/
export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) return {};

  return {
    title: `${course.title} | آکادمی`,
    description: course.metaDescription,
    openGraph: {
      title: course.title,
      description: course.metaDescription,
      type: "website",
    },
  };
}

export default function AcademyCourseDetailPage({ params }: { params: { slug: string } }) {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) notFound();

  const relatedCourses = courses
    .filter((c) => c.category === course.category && c.slug !== course.slug)
    .slice(0, 4);

  return <CourseDetail course={course} relatedCourses={relatedCourses} />;
}