import { Check } from "lucide-react";
import { cn } from "@/lib/utils/cn";

/*
  Generic numbered progress indicator for any multi-step flow — used by
  the Custom Skin Routine wizard, reusable by any future multi-step form
  without modification (just pass different `labels`).
*/
export function StepIndicator({
  labels,
  currentStep,
}: {
  labels: string[];
  currentStep: number;
}) {
  return (
    <div className="mb-8">
      <div className="hidden items-center justify-between sm:flex">
        {labels.map((label, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          return (
            <div key={label} className="flex flex-1 items-center">
              <div className="flex flex-col items-center gap-2">
                <span
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-colors",
                    isCompleted && "bg-primary text-primary-foreground",
                    isCurrent && "border-2 border-primary bg-white text-primary",
                    !isCompleted && !isCurrent && "border border-border bg-white text-muted-foreground"
                  )}
                >
                  {isCompleted ? <Check className="h-4 w-4" aria-hidden="true" /> : index + 1}
                </span>
                <span
                  className={cn(
                    "max-w-[80px] text-center text-[11px] leading-4",
                    isCurrent ? "font-bold text-foreground" : "text-muted-foreground"
                  )}
                >
                  {label}
                </span>
              </div>
              {index < labels.length - 1 && (
                <span
                  className={cn(
                    "mx-1 h-0.5 flex-1 rounded-full",
                    index < currentStep ? "bg-primary" : "bg-border"
                  )}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between sm:hidden">
        <span className="text-xs font-bold text-primary">
          مرحله {currentStep + 1} از {labels.length}
        </span>
        <span className="text-xs text-muted-foreground">{labels[currentStep]}</span>
      </div>
      <div className="mt-2 h-1.5 w-full rounded-full bg-border sm:hidden">
        <div
          className="h-full rounded-full bg-primary transition-all duration-300"
          style={{ width: `${((currentStep + 1) / labels.length) * 100}%` }}
        />
      </div>
    </div>
  );
}