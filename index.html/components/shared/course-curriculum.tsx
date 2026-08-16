import { BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { CourseCurriculumItem } from "@/lib/data/courses";

/*
  Read-only curriculum list for the course detail page. A simple
  numbered/lesson-count list rather than an accordion — curriculum
  items don't have expandable sub-content yet, so an accordion here
  would be an unnecessary abstraction (per Phase 4 rule 11).
*/
export function CourseCurriculum({ items }: { items: CourseCurriculumItem[] }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => (
        <Card key={item.title} className="flex items-center gap-4 p-5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
            {index + 1}
          </span>
          <div className="flex flex-1 items-center justify-between gap-3">
            <span className="text-sm font-medium text-foreground">{item.title}</span>
            <span className="flex shrink-0 items-center gap-1.5 text-xs text-muted-foreground">
              <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
              {item.lessonsCount} درس
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
}