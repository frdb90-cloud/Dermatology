import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils/cn";

/*
  Generic titled card shell for dashboard sections — every section
  (courses, products, articles, notifications, ...) renders its own
  list inside `children`, so this component only owns the
  icon+title+optional-footer chrome, not any list-rendering logic.
*/
export function DashboardCard({
  icon: Icon,
  title,
  footer,
  children,
  className,
}: {
  icon: LucideIcon;
  title: string;
  footer?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div id={title} className={cn("flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-soft", className)}>
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
        <h3 className="text-sm font-bold text-foreground">{title}</h3>
      </div>
      <div className="flex flex-col gap-2.5">{children}</div>
      {footer}
    </div>
  );
}