import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/shared/product-detail";
import { digitalProducts } from "@/lib/data/products";

export function generateStaticParams() {
  return digitalProducts.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = digitalProducts.find((p) => p.slug === params.slug);
  if (!product) return {};

  return {
    title: `${product.title} | محصولات دیجیتال آکادمی`,
    description: product.metaDescription,
    openGraph: {
      title: product.title,
      description: product.metaDescription,
      type: "website",
    },
  };
}

export default function AcademyProductDetailPage({ params }: { params: { slug: string } }) {
  const product = digitalProducts.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const relatedProducts = digitalProducts
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  return <ProductDetail product={product} relatedProducts={relatedProducts} />;
}