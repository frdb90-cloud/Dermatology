import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BookOpen, Sparkles, Award, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { CourseCard } from "@/components/shared/course-card";
import { ProductCard } from "@/components/shared/product-card";
import { AcademyHero } from "@/components/shared/academy-hero";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { courses } from "@/lib/data/courses";
import { digitalProducts } from "@/lib/data/products";
import { courseCategories } from "@/lib/data/academy-categories";

export const metadata: Metadata = {
  title: "آکادمی آموزشی | دوره‌ها و محصولات دیجیتال پوست و مو",
  description:
    "دوره‌های آموزشی و محصولات دیجیتال تخصصی مراقبت از پوست و مو، طراحی‌شده توسط متخصص پوست و مو.",
  openGraph: {
    title: "آکادمی آموزشی پوست و مو",
    description: "دوره‌ها، راهنماها و محصولات دیجیتال آموزشی برای مراقبت اصولی از پوست و مو.",
    type: "website",
  },
};

const learningBenefits = [
  {
    icon: ShieldCheck,
    title: "محتوای علمی و معتبر",
    description: "تمام محتوا بر پایه اصول علمی روز و بدون ادعای اغراق‌آمیز تدوین شده است",
  },
  {
    icon: Sparkles,
    title: "تدریس توسط متخصص",
    description: "دوره‌ها مستقیماً توسط متخصص پوست و مو طراحی و ارائه می‌شوند",
  },
  {
    icon: BookOpen,
    title: "محتوای کاربردی",
    description: "تمرکز بر نکات عملی و قابل‌اجرا در زندگی روزمره",
  },
  {
    icon: Award,
    title: "یادگیری در هر زمان",
    description: "دسترسی به محتوا مطابق برنامه و زمان‌بندی شخصی شما",
  },
];

/*
  /academy — overview page. Featured courses/products are derived from
  the `featured` flag already present on each data item, so promoting a
  different course/product later only means flipping that flag in the
  data file — no page code changes.
*/
export default function AcademyPage() {
  const featuredCourses = courses.filter((c) => c.featured);
  const featuredProducts = digitalProducts.filter((p) => p.featured);

  return (
    <>
      <AcademyHero />

      <Section>
        <Container>
          <SectionHeading
            title="دوره‌های ویژه"
            subtitle="شروع کنید با دوره‌هایی که بیشترین استقبال را داشته‌اند"
          />
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {(featuredCourses.length > 0 ? featuredCourses : courses.slice(0, 4)).map(
              (course, index) => (
                <FadeIn key={course.slug} delay={(index % 4) * 0.08}>
                  <CourseCard
                    title={course.title}
                    image={course.image}
                    price={course.price}
                    originalPrice={course.originalPrice}
                    duration={course.duration}
                    level={course.level}
                    href={`/academy/courses/${course.slug}`}
                  />
                </FadeIn>
              )
            )}
          </div>
          <div className="mt-10 flex justify-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/academy/courses">
                مشاهده همه دوره‌ها
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading
            title="دسته‌بندی‌های آموزشی"
            subtitle="بر اساس نیاز و علاقه خود، مسیر یادگیری را انتخاب کنید"
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {courseCategories
              .filter((c) => c.value !== "all")
              .map((category, index) => (
                <FadeIn key={category.value} delay={index * 0.06}>
                  <Link
                    href={`/academy/courses?category=${encodeURIComponent(category.value)}`}
                    className="flex h-full flex-col items-center justify-center gap-2 rounded-2xl bg-white p-6 text-center shadow-soft transition-shadow hover:shadow-card-hover"
                  >
                    <BookOpen className="h-5 w-5 text-primary" aria-hidden="true" />
                    <span className="text-sm font-bold text-foreground">{category.label}</span>
                  </Link>
                </FadeIn>
              ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            title="چرا از یک متخصص پوست بیاموزیم؟"
            subtitle="یادگیری اصولی، پایه‌ای‌ترین قدم برای مراقبت درست از پوست و مو است"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {learningBenefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={index * 0.08}>
                  <Card className="flex h-full flex-col items-center gap-4 p-7 text-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section tone="cream">
        <Container>
          <SectionHeading
            title="محصولات دیجیتال"
            subtitle="راهنماها، پلنرها و چک‌لیست‌های قابل‌دانلود برای استفاده روزمره"
          />
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {(featuredProducts.length > 0 ? featuredProducts : digitalProducts.slice(0, 4)).map(
              (product, index) => (
                <FadeIn key={product.slug} delay={(index % 4) * 0.08}>
                  <ProductCard
                    title={product.title}
                    image={product.image}
                    price={product.price}
                    href={`/academy/products/${product.slug}`}
                  />
                </FadeIn>
              )
            )}
          </div>
          <div className="mt-10 flex justify-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/academy/products">
                مشاهده همه محصولات
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      <NewsletterSection />
    </>
  );
}