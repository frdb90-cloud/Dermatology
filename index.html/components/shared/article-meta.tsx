import { CalendarDays, Clock, User } from "lucide-react";

/*
  Small metadata row (author / date / reading time) shared between the
  article grid cards' hover state (if needed later) and the article
  detail page header — keeps this formatting logic in one place instead
  of repeating three <span> blocks everywhere an article is referenced.
*/
export function ArticleMeta({
  author,
  date,
  readingTime,
  className,
}: {
  author: string;
  date: string;
  readingTime: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-4 text-xs text-muted-foreground ${className ?? ""}`}>
      <span className="flex items-center gap-1.5">
        <User className="h-3.5 w-3.5" aria-hidden="true" />
        {author}
      </span>
      <span className="flex items-center gap-1.5">
        <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
        {date}
      </span>
      <span className="flex items-center gap-1.5">
        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
        {readingTime}
      </span>
    </div>
  );
}