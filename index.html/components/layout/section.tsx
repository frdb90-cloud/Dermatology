import { cn } from "@/lib/utils/cn";

/*
  Vertical rhythm wrapper for homepage/page sections (py spacing that
  matches the generous whitespace in the reference screenshot).
*/
export function Section({
  children,
  className,
  id,
  tone = "default",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "muted" | "cream";
}) {
  const toneClass =
    tone === "muted" ? "bg-muted/50" : tone === "cream" ? "bg-cream" : "bg-background";

  return (
    <section id={id} className={cn("py-14 sm:py-20", toneClass, className)}>
      {children}
    </section>
  );
}