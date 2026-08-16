import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, rows = 4, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        aria-invalid={error || undefined}
        className={cn(
          "flex w-full rounded-lg border border-input bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors resize-y leading-7",
          "focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/15",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-destructive focus-visible:ring-destructive/15",
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };