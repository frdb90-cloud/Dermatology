import { cn } from "@/lib/utils/cn";

/*
  Simple max-width + horizontal padding wrapper, matching Tailwind's
  `container` config in tailwind.config.ts. Centralizing it here (rather
  than repeating `container mx-auto px-5` everywhere) keeps page margins
  consistent if we ever need to tweak breakpoints project-wide.
*/
export function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}) {
  return <Tag className={cn("container", className)}>{children}</Tag>;
}