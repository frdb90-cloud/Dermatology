import { Clock } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import type { ConsultationTypeData } from "@/lib/data/consultation-types";

/*
  Selectable card for a single consultation type. Pure controlled
  component (isSelected + onSelect) so the booking page owns all state
  — reusable anywhere a consultation type needs to be picked or simply
  displayed (e.g. a future order-summary screen).
*/
export function ConsultationCard({
  data,
  isSelected,
  onSelect,
}: {
  data: ConsultationTypeData;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const Icon = data.icon;
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "flex flex-col items-start gap-3 rounded-2xl border p-6 text-right transition-colors",
        isSelected ? "border-primary bg-primary/5" : "border-border bg-white hover:border-primary/40"
      )}
    >
      <span
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-xl",
          isSelected ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
        )}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="text-sm font-bold text-foreground">{data.title}</h3>
      <p className="text-xs leading-6 text-muted-foreground">{data.description}</p>
      <div className="mt-1 flex w-full items-center justify-between border-t border-border/70 pt-3">
        <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          {data.duration}
        </span>
        <span className="text-sm font-bold text-foreground">
          {data.price.toLocaleString("fa-IR")} <span className="text-[11px] font-normal text-muted-foreground">تومان</span>
        </span>
      </div>
    </button>
  );
}