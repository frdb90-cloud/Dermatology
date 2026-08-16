import { CheckCircle2 } from "lucide-react";

/*
  Small reusable checklist block for "what's included" / "who is it
  for" style lists on the product detail page. Kept generic (just a
  title + string[]) so it can render either list without two components.
*/
export function ProductIncludes({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="mb-4 text-xl font-bold text-foreground">{title}</h2>
      <ul className="flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
            <span className="text-sm leading-7 text-muted-foreground sm:text-base">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}