"use client";

import { Search } from "lucide-react";

/*
  Controlled search input, fully generic — the consuming page owns the
  `value` state and filtering logic (client-side for now, per Phase 6
  rule 3: "prepare the architecture for future API/database
  integration" — swapping this for a debounced API call later only
  touches the parent page, not this input).
*/
export function ArticleSearch({
  value,
  onChange,
  placeholder = "جستجوی مقاله...",
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="relative w-full">
      <Search
        className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        aria-hidden="true"
      />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="جستجوی مقاله"
        className="h-12 w-full rounded-full border border-border bg-white pr-11 pl-4 text-sm focus-visible:border-primary focus-visible:outline-none"
      />
    </div>
  );
}