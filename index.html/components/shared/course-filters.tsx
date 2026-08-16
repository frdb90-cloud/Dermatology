"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { CategoryFilter } from "@/components/shared/category-filter";
import { CourseCard } from "@/components/shared/course-card";
import { courseCategories } from "@/lib/data/academy-categories";
import type { CourseData } from "@/lib/data/courses";

/*
  Client-side search + category filter over the full `courses` array.
  Kept as plain useState/useMemo (no external state lib, no fetch) —
  when a real backend arrives, the two filter values here become the
  query params sent to an API route, and this component's rendered
  list just becomes the API response instead of a local .filter() call.
*/
export function CourseFilters({ courses }: { courses: CourseData[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory = category === "all" || course.category === category;
      const matchesSearch = course.title.toLowerCase().includes(search.trim().toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [courses, search, category]);

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
            placeholder="جستجوی دوره..."
            className="h-11 w-full rounded-full border border-border bg-white pr-11 pl-4 text-sm focus-visible:border-primary focus-visible:outline-none"
          />
        </div>
        <CategoryFilter categories={courseCategories} value={category} onChange={setCategory} />
      </div>

      {filtered.length === 0 ? (
        <p className="py-10 text-center text-sm text-muted-foreground">
          دوره‌ای با این مشخصات پیدا نشد.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((course) => (
            <CourseCard
              key={course.slug}
              title={course.title}
              image={course.image}
              price={course.price}
              originalPrice={course.originalPrice}
              duration={course.duration}
              level={course.level}
              href={`/academy/courses/${course.slug}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}