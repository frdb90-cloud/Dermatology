"use client";

import { cn } from "@/lib/utils/cn";
import { categoryFilterOptions } from "@/lib/data/blog-categories";

/*
  Blog-specific category filter — a deliberate sibling to Academy's
  CategoryFilter (Phase 4), not a duplicate: that component is typed
  against AcademyCategoryData and Academy's own filter options. Forcing
  one shared component across two different data shapes would mean
  either a generic prop-drilling abstraction or unsafe type-casting;
  a small dedicated component per data domain (Courses/Products vs
  Blog) matches the existing CourseFilters/ProductFilters precedent.
*/
export function BlogCategoryFilter({
  active,
  onChange,
}: {
  active: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {categoryFilterOptions.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={cn(
            "rounded-full border px-4 py-2 text-xs font-medium transition-colors",
            active === option.value
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-white text-muted-foreground hover:border-primary/40"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}