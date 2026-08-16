"use client";

import { cn } from "@/lib/utils/cn";
import type { AcademyCategory } from "@/lib/data/academy-categories";

/*
  Shared pill-style filter bar for both /academy/courses and
  /academy/products. Pure controlled component (value + onChange) with
  no fetching logic, so wiring it to a real API/DB later only means
  changing what the parent page does inside onChange.
*/
export function CategoryFilter({
  categories,
  value,
  onChange,
}: {
  categories: AcademyCategory[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {categories.map((category) => {
        const isActive = category.value === value;
        return (
          <button
            key={category.value}
            type="button"
            onClick={() => onChange(category.value)}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-medium transition-colors",
              isActive
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-white text-muted-foreground hover:border-primary/40 hover:text-foreground"
            )}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}