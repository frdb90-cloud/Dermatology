import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

/*
  Generic Previous/Next/Submit control bar for multi-step forms.
  Reusable across any future wizard: just pass the step booleans and
  handlers, no form-specific logic lives here.
*/
export function FormNavigation({
  isFirstStep,
  isLastStep,
  isSubmitting,
  onBack,
  onNext,
}: {
  isFirstStep: boolean;
  isLastStep: boolean;
  isSubmitting: boolean;
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <div className="mt-8 flex items-center justify-between gap-3 border-t border-border pt-6">
      <Button type="button" variant="outline" onClick={onBack} disabled={isFirstStep || isSubmitting}>
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
        مرحله قبل
      </Button>

      <Button type="button" onClick={onNext} disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            در حال ارسال...
          </>
        ) : isLastStep ? (
          "ثبت نهایی"
        ) : (
          <>
            مرحله بعد
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </Button>
    </div>
  );
}