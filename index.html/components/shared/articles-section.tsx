import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ArticleCard } from "@/components/shared/article-card";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { latestArticles } from "@/lib/data/latest-articles";

export function ArticlesSection() {
  return (
    <Section tone="muted">
      <Container>
        <SectionHeading
          title="آخرین مقالات"
          subtitle="نکات علمی و کاربردی درباره‌ی مراقبت از پوست و مو، نوشته‌شده توسط دکتر سارا رفیعی"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {latestArticles.map((article, index) => (
            <FadeIn key={article.slug} delay={index * 0.08}>
              <ArticleCard
                title={article.title}
                excerpt={article.excerpt}
                image={article.image}
                category={article.category}
                href={`/blog/${article.slug}`}
              />
            </FadeIn>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/blog">
              مشاهده همه مقالات
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}