import { Pencil } from "lucide-react";

export interface ReviewGroup {
  title: string;
  stepIndex: number;
  items: { label: string; value: string }[];
}

/*
  Generic read-only "review before submit" block for any multi-step
  form. Takes pre-formatted groups so it stays form-agnostic; the page
  using it is responsible for turning raw form values into display text.
*/
export function ReviewSummary({
  groups,
  onEditStep,
}: {
  groups: ReviewGroup[];
  onEditStep: (stepIndex: number) => void;
}) {
  return (
    <div className="flex flex-col gap-4">
      {groups.map((group) => (
        <div key={group.title} className="rounded-2xl border border-border bg-white p-5">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-bold text-foreground">{group.title}</h3>
            <button
              type="button"
              onClick={() => onEditStep(group.stepIndex)}
              className="flex items-center gap-1 text-xs font-medium text-primary hover:underline"
            >
              <Pencil className="h-3 w-3" aria-hidden="true" />
              ویرایش
            </button>
          </div>
          <dl className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {group.items.map((item) => (
              <div key={item.label} className="flex flex-col gap-0.5">
                <dt className="text-[11px] text-muted-foreground">{item.label}</dt>
                <dd className="text-sm text-foreground">{item.value || "—"}</dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
}