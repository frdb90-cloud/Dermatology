import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

/*
  Design decision: error state is a boolean prop rather than reading
  form-state internally, so this component stays framework-agnostic
  and works the same whether it's wired to react-hook-form or plain state.
*/
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", error, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        aria-invalid={error || undefined}
        className={cn(
          "flex h-12 w-full rounded-lg border border-input bg-white px-4 text-sm text-foreground placeholder:text-muted-foreground transition-colors",
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
Input.displayName = "Input";

export { Input };