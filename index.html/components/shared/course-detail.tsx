import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, BarChart3, PlayCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/shared/fade-in";
import { FAQSection } from "@/components/shared/faq-section";
import { MedicalDisclaimer } from "@/components/shared/medical-disclaimer";
import { CourseCurriculum } from "@/components/shared/course-curriculum";
import { CourseCard } from "@/components/shared/course-card";
import type { CourseData } from "@/lib/data/courses";

/*
  Single reusable template for every /academy/courses/[slug] page —
  same pattern as Phase 3's ServiceDetail: the dynamic route only
  resolves the slug and passes the matching CourseData object here.
  `relatedCourses` is computed by the route (same category, different
  slug) and passed in, keeping this component free of data-lookup logic.
*/
export function CourseDetail({
  course,
  relatedCourses,
}: {
  course: CourseData;
  relatedCourses: CourseData[];
}) {
  return (
    <>
      <Section className="pb-0">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <FadeIn className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-right">
            <span className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              {course.category}
            </span>
            <h1 className="max-w-lg text-2xl font-bold leading-[1.5] text-foreground sm:text-3xl">
              {course.title}
            </h1>
            <p className="max-w-md text-sm leading-8 text-muted-foreground sm:text-base">
              {course.shortDescription}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground lg:justify-start">
              <span className="flex items-center gap-1.5">
                <User className="h-3.5 w-3.5" aria-hidden="true" />
                {course.instructor}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {course.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <BarChart3 className="h-3.5 w-3.5" aria-hidden="true" />
                {course.level}
              </span>
              <span className="flex items-center gap-1.5">
                <PlayCircle className="h-3.5 w-3.5" aria-hidden="true" />
                {course.lessonsCount} درس
              </span>
            </div>
          </FadeIn>

          <FadeIn className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl shadow-card-hover">
            <Image
              src={course.image}
              alt={course.title}
              fill
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover"
            />
          </FadeIn>
        </Container>
      </Section>

      <Section>
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="flex flex-col gap-10 lg:col-span-2">
            <FadeIn>
              <h2 className="mb-3 text-xl font-bold text-foreground">معرفی دوره</h2>
              <p className="text-sm leading-8 text-muted-foreground sm:text-base">
                {course.overview}
              </p>
            </FadeIn>

            <FadeIn>
              <h2 className="mb-4 text-xl font-bold text-foreground">در این دوره چه می‌آموزید؟</h2>
              <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {course.learningPoints.map((point) => (
                  <li
                    key={point}
                    className="rounded-xl bg-secondary/30 px-4 py-3 text-sm leading-6 text-foreground"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn>
              <h2 className="mb-4 text-xl font-bold text-foreground">سرفصل‌های دوره</h2>
              <CourseCurriculum items={course.curriculum} />
            </FadeIn>

            <FadeIn>
              <h2 className="mb-4 text-xl font-bold text-foreground">پیش‌نیازها</h2>
              <ul className="flex flex-col gap-2.5">
                {course.requirements.map((req) => (
                  <li key={req} className="text-sm leading-7 text-muted-foreground">
                    • {req}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn>
              <h2 className="mb-4 text-xl font-bold text-foreground">سوالات متداول</h2>
              <FAQSection items={course.faqs} />
            </FadeIn>
          </div>

          <div className="flex flex-col gap-6">
            <FadeIn>
              <Card className="flex flex-col gap-4 p-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-foreground">
                    {course.price.toLocaleString("fa-IR")}
                  </span>
                  <span className="text-xs text-muted-foreground">تومان</span>
                  {course.originalPrice && (
                    <span className="text-xs text-muted-foreground line-through">
                      {course.originalPrice.toLocaleString("fa-IR")}
                    </span>
                  )}
                </div>
                {/* Frontend placeholder — enrollment/payment wired in a later phase */}
                <Button size="lg" className="w-full">
                  ثبت‌نام در دوره
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  پرداخت و ثبت‌نام آنلاین در فاز بعدی فعال می‌شود
                </p>
              </Card>
            </FadeIn>

            <FadeIn>
              <MedicalDisclaimer />
            </FadeIn>
          </div>
        </Container>
      </Section>

      {relatedCourses.length > 0 && (
        <Section tone="muted">
          <Container>
            <h2 className="mb-6 text-xl font-bold text-foreground">دوره‌های مرتبط</h2>
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {relatedCourses.map((related) => (
                <CourseCard
                  key={related.slug}
                  title={related.title}
                  image={related.image}
                  price={related.price}
                  originalPrice={related.originalPrice}
                  duration={related.duration}
                  level={related.level}
                  href={`/academy/courses/${related.slug}`}
                />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section>
        <Container>
          <FadeIn className="mx-auto flex max-w-2xl flex-col items-center gap-5 rounded-3xl bg-primary-700 px-6 py-14 text-center text-white sm:px-14">
            <h2 className="text-2xl font-bold sm:text-3xl">آماده شروع یادگیری هستید؟</h2>
            <p className="max-w-md text-sm leading-7 text-white/75">
              همین امروز در دوره‌ی «{course.title}» ثبت‌نام کنید و مسیر یادگیری خود را آغاز کنید.
            </p>
            <Button size="lg" className="bg-white text-primary-700 hover:bg-white/90" asChild>
              <Link href="/academy/courses">
                مشاهده سایر دوره‌ها
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}