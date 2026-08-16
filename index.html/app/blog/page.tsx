import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { BlogHero } from "@/components/shared/blog-hero";
import { ArticleGrid } from "@/components/shared/article-grid";
import { NewsletterSection } from "@/components/shared/newsletter-section";
import { MedicalDisclaimer } from "@/components/shared/medical-disclaimer";
import { blogCategories } from "@/lib/data/blog-categories";
import { articles } from "@/lib/data/articles";

export const metadata: Metadata = {
  title: "مجله پوست و مو | مقالات تخصصی پوست، مو و زیبایی",
  description:
    "مقالات علمی و آموزشی درباره مراقبت پوستی، آکنه، ریزش مو، ضدپیری و درمان‌های تخصصی پوست.",
  openGraph: {
    title: "مجله پوست و مو",
    description: "منبع آموزشی و علمی مراقبت از پوست و مو.",
    type: "website",
  },
};

/*
  AUDIT FIX (Phase 8, Design System item 8): the category icon badge
  below used the invalid arbitrary-looking class `h-4.5 w-4.5`, which
  is not part of Tailwind's default scale and does not compile to a
  real utility without either the `h-[1.125rem]` bracket syntax or a
  theme.extend entry (confirmed against Tailwind's spacing docs — the
  default scale only has 4, 5, 6... no "4.5" step). Replaced with the
  valid `h-5 w-5`, which also now matches the icon size used in every
  other category/expertise card across the site (Clinic, Academy,
  About). No other logic in this file changed.
*/
export default function BlogOverviewPage() {
  const featuredArticle = articles.find((a) => a.featured) ?? articles[0];
  const latestArticles = articles.filter((a) => a.slug !== featuredArticle.slug).slice(0, 6);
  const popularArticles = articles.filter((a) => a.featured && a.slug !== featuredArticle.slug).slice(0, 3);

  return (
    <>
      <Section className="pb-0">
        <Container>
          <BlogHero />
        </Container>
      </Section>

      <Section>
        <Container>
          <FadeIn>
            <Link
              href={`/blog/${featuredArticle.slug}`}
              className="group grid grid-cols-1 overflow-hidden rounded-3xl bg-white shadow-card-hover lg:grid-cols-2"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden lg:aspect-auto">
                <Image
                  src={featuredArticle.coverImage}
                  alt={featuredArticle.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center gap-4 p-8 sm:p-10">
                <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary">
                  مقاله ویژه
                </span>
                <h2 className="text-xl font-bold leading-8 text-foreground sm:text-2xl">
                  {featuredArticle.title}
                </h2>
                <p className="line-clamp-3 text-sm leading-7 text-muted-foreground">
                  {featuredArticle.excerpt}
                </p>
                <span className="flex items-center gap-1.5 text-sm font-medium text-primary">
                  ادامه مطلب
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </FadeIn>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading title="دسته‌بندی مقالات" subtitle="موضوع مورد نظر خود را انتخاب کنید" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {blogCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.value}
                  href={`/blog/articles?category=${category.value}`}
                  className="flex flex-col items-center gap-2.5 rounded-2xl bg-white p-5 text-center shadow-soft transition-shadow hover:shadow-card-hover"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-medium text-foreground">{category.label}</span>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading title="جدیدترین مقالات" subtitle="تازه‌ترین محتوای منتشرشده در مجله" />
          <ArticleGrid articles={latestArticles} />
          <div className="mt-8 flex justify-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/blog/articles">
                مشاهده همه مقالات
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      {popularArticles.length > 0 && (
        <Section tone="muted">
          <Container>
            <div className="mb-6 flex items-center gap-2.5">
              <TrendingUp className="h-5 w-5 text-primary" aria-hidden="true" />
              <h2 className="text-xl font-bold text-foreground">مقالات پرمخاطب</h2>
            </div>
            <ArticleGrid articles={popularArticles} />
          </Container>
        </Section>
      )}

      <Section>
        <Container>
          <NewsletterSection />
        </Container>
      </Section>

      <Section tone="cream">
        <Container className="mx-auto max-w-2xl">
          <MedicalDisclaimer />
        </Container>
      </Section>
    </>
  );
}