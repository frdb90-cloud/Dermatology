"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import {
  forgotPasswordSchema,
  type ForgotPasswordFormValues,
} from "@/lib/validation/auth-schema";

export default function ForgotPasswordPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>({ resolver: zodResolver(forgotPasswordSchema) });

  const onSubmit = async (_values: ForgotPasswordFormValues) => {
    setStatus("submitting");
    // TODO(backend): call real /api/auth/forgot-password here.
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <Section>
        <Container className="flex justify-center">
          <Card className="flex w-full max-w-md flex-col items-center gap-4 p-8 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-success/10 text-success">
              <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
            </span>
            <h1 className="text-base font-bold text-foreground">درخواست شما ثبت شد</h1>
            <p className="text-xs leading-6 text-muted-foreground">
              در نسخه‌ی نهایی، لینک بازیابی رمز عبور برای شما ارسال خواهد شد.
            </p>
            <Button asChild size="lg">
              <Link href="/auth/login">بازگشت به ورود</Link>
            </Button>
          </Card>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container className="flex justify-center">
        <Card className="w-full max-w-md p-8">
          <h1 className="mb-1 text-center text-lg font-bold text-foreground">فراموشی رمز عبور</h1>
          <p className="mb-6 text-center text-xs text-muted-foreground">
            شماره موبایل یا ایمیل خود را وارد کنید
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground">موبایل یا ایمیل</label>
              <input
                {...register("identifier")}
                className="h-11 rounded-xl border border-border bg-white px-4 text-sm focus-visible:border-primary focus-visible:outline-none"
                placeholder="09123456789"
              />
              {errors.identifier && <span className="text-xs text-destructive">{errors.identifier.message}</span>}
            </div>

            <Button type="submit" size="lg" disabled={status === "submitting"}>
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  در حال ارسال...
                </>
              ) : (
                "ارسال لینک بازیابی"
              )}
            </Button>
          </form>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            <Link href="/auth/login" className="font-medium text-primary hover:underline">
              بازگشت به ورود
            </Link>
          </p>
        </Card>
      </Container>
    </Section>
  );
}