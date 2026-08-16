"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { CategoryFilter } from "@/components/shared/category-filter";
import { ProductCard } from "@/components/shared/product-card";
import { productCategories } from "@/lib/data/academy-categories";
import type { DigitalProductData } from "@/lib/data/products";

export function ProductFilters({ products }: { products: DigitalProductData[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = category === "all" || product.category === category;
      const matchesSearch = product.title.toLowerCase().includes(search.trim().toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, search, category]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-center gap-5">
        <div className="relative w-full max-w-md">
          <Search
            className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="جستجوی محصول..."
            className="h-11 w-full rounded-full border border-border bg-white pr-11 pl-4 text-sm focus-visible:border-primary focus-visible:outline-none"
          />
        </div>
        <CategoryFilter categories={productCategories} value={category} onChange={setCategory} />
      </div>

      {filtered.length === 0 ? (
        <p className="py-10 text-center text-sm text-muted-foreground">
          محصولی با این مشخصات پیدا نشد.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard
              key={product.slug}
              title={product.title}
              image={product.image}
              price={product.price}
              href={`/academy/products/${product.slug}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}