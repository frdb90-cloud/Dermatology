import { Check, Clock, Circle } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import type { TimelineStep } from "@/lib/data/treatment-timeline-mock";

/*
  Vertical timeline for treatment follow-up. Purely presentational —
  takes a TimelineStep[] so it works for both the public prototype
  page and (later) a real authenticated dashboard feed without any
  change to this component.
*/
export function TreatmentTimeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <div className="flex flex-col">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        return (
          <div key={step.title} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
                  step.status === "completed" && "bg-primary text-primary-foreground",
                  step.status === "current" && "border-2 border-primary bg-white text-primary",
                  step.status === "upcoming" && "border border-border bg-white text-muted-foreground"
                )}
              >
                {step.status === "completed" && <Check className="h-4 w-4" aria-hidden="true" />}
                {step.status === "current" && <Clock className="h-4 w-4" aria-hidden="true" />}
                {step.status === "upcoming" && <Circle className="h-3 w-3" aria-hidden="true" />}
              </span>
              {!isLast && (
                <span
                  className={cn(
                    "mt-1 w-0.5 flex-1",
                    step.status === "completed" ? "bg-primary" : "bg-border"
                  )}
                />
              )}
            </div>
            <div className={cn("flex flex-col gap-1 pb-8", isLast && "pb-0")}>
              <span className="text-[11px] text-muted-foreground">{step.date}</span>
              <h3
                className={cn(
                  "text-sm font-bold",
                  step.status === "upcoming" ? "text-muted-foreground" : "text-foreground"
                )}
              >
                {step.title}
              </h3>
              {step.note && <p className="text-xs leading-6 text-muted-foreground">{step.note}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}