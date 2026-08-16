import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/shared/fade-in";
import { ProductIncludes } from "@/components/shared/product-includes";
import { ProductCard } from "@/components/shared/product-card";
import type { DigitalProductData } from "@/lib/data/products";

/*
  Single reusable template for every /academy/products/[slug] page.
  The "preview" section reuses the product cover image itself rather
  than inventing a second placeholder image field — keeps the data
  model minimal until a real preview asset (e.g. sample pages) exists.
*/
export function ProductDetail({
  product,
  relatedProducts,
}: {
  product: DigitalProductData;
  relatedProducts: DigitalProductData[];
}) {
  return (
    <>
      <Section className="pb-0">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <FadeIn className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl shadow-card-hover">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover"
            />
          </FadeIn>

          <FadeIn className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-right">
            <span className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              {product.category}
            </span>
            <h1 className="max-w-lg text-2xl font-bold leading-[1.5] text-foreground sm:text-3xl">
              {product.title}
            </h1>
            <p className="max-w-md text-sm leading-8 text-muted-foreground sm:text-base">
              {product.shortDescription}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground lg:justify-start">
              <span className="flex items-center gap-1.5">
                <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                {product.format}
              </span>
              <span className="flex items-center gap-1.5">
                <Download className="h-3.5 w-3.5" aria-hidden="true" />
                {product.fileCount}
              </span>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section>
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="flex flex-col gap-10 lg:col-span-2">
            <FadeIn>
              <h2 className="mb-3 text-xl font-bold text-foreground">توضیحات محصول</h2>
              <p className="text-sm leading-8 text-muted-foreground sm:text-base">
                {product.description}
              </p>
            </FadeIn>

            <FadeIn>
              <ProductIncludes title="این محصول شامل چه چیزی است؟" items={product.whatsIncluded} />
            </FadeIn>

            <FadeIn>
              <ProductIncludes title="این محصول برای چه کسانی مناسب است؟" items={product.whoIsItFor} />
            </FadeIn>

            <FadeIn>
              <h2 className="mb-3 text-xl font-bold text-foreground">پیش‌نمایش</h2>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
                <Image
                  src={product.image}
                  alt={`پیش‌نمایش ${product.title}`}
                  fill
                  sizes="(max-width: 1024px) 90vw, 700px"
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>

          <div className="flex flex-col gap-6">
            <FadeIn>
              <Card className="flex flex-col gap-4 p-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-foreground">
                    {product.price.toLocaleString("fa-IR")}
                  </span>
                  <span className="text-xs text-muted-foreground">تومان</span>
                </div>
                {/* Frontend placeholder — real checkout/download wired in a later phase */}
                <Button size="lg" className="w-full">
                  خرید و دانلود
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  درگاه پرداخت و دانلود آنلاین در فاز بعدی فعال می‌شود
                </p>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {relatedProducts.length > 0 && (
        <Section tone="muted">
          <Container>
            <h2 className="mb-6 text-xl font-bold text-foreground">محصولات مرتبط</h2>
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {relatedProducts.map((related) => (
                <ProductCard
                  key={related.slug}
                  title={related.title}
                  image={related.image}
                  price={related.price}
                  href={`/academy/products/${related.slug}`}
                />
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section>
        <Container>
          <FadeIn className="mx-auto flex max-w-2xl flex-col items-center gap-5 rounded-3xl bg-primary-700 px-6 py-14 text-center text-white sm:px-14">
            <h2 className="text-2xl font-bold sm:text-3xl">به‌دنبال محتوای بیشتر هستید؟</h2>
            <p className="max-w-md text-sm leading-7 text-white/75">
              مجموعه کامل محصولات دیجیتال آکادمی را مشاهده کنید.
            </p>
            <Button size="lg" className="bg-white text-primary-700 hover:bg-white/90" asChild>
              <Link href="/academy/products">
                مشاهده همه محصولات
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}