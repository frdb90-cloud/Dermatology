"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CourseCard } from "@/components/shared/course-card";
import { ProductCard } from "@/components/shared/product-card";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { popularCourses } from "@/lib/data/popular-courses";
import { digitalProducts } from "@/lib/data/digital-products";

/*
  Tabs (rather than two stacked grids) let "دوره‌های آموزشی" and
  "محصولات دیجیتال" share one section without doubling its vertical
  footprint on the homepage — full listings still live on their own
  /academy/courses and /academy/products pages.
*/
export function AcademySection() {
  return (
    <Section tone="cream">
      <Container>
        <SectionHeading
          title="آکادمی آموزشی"
          subtitle="دوره‌های تخصصی و محصولات دیجیتال برای یادگیری اصول علمی مراقبت از پوست و مو"
        />

        <Tabs defaultValue="courses" className="flex flex-col items-center">
          <TabsList>
            <TabsTrigger value="courses">دوره‌های آموزشی</TabsTrigger>
            <TabsTrigger value="products">محصولات دیجیتال</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="w-full">
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {popularCourses.map((course, index) => (
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
              ))}
            </div>
          </TabsContent>

          <TabsContent value="products" className="w-full">
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {digitalProducts.map((product, index) => (
                <FadeIn key={product.slug} delay={(index % 4) * 0.08}>
                  <ProductCard
                    title={product.title}
                    image={product.image}
                    price={product.price}
                    href={`/academy/products/${product.slug}`}
                  />
                </FadeIn>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-10 flex justify-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/academy">
              مشاهده همه آکادمی
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}