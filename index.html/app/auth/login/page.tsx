"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { loginSchema, type LoginFormValues } from "@/lib/validation/auth-schema";

/*
  UI-only login form (Phase 5 rule 7: no real authentication yet).
  onSubmit is a mock async call with a TODO marking exactly where a
  real /api/auth/login call replaces it — form shape/validation stays
  identical once that's wired in.
*/
export default function LoginPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (_values: LoginFormValues) => {
    setStatus("submitting");
    try {
      // TODO(backend): call real /api/auth/login here and redirect on success.
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("error"); // no real backend exists yet — always surfaces this state
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section>
      <Container className="flex justify-center">
        <Card className="w-full max-w-md p-8">
          <h1 className="mb-1 text-center text-lg font-bold text-foreground">ورود اعضا</h1>
          <p className="mb-6 text-center text-xs text-muted-foreground">
            برای دسترسی به پنل کاربری خود وارد شوید
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

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground">رمز عبور</label>
              <input
                type="password"
                {...register("password")}
                className="h-11 rounded-xl border border-border bg-white px-4 text-sm focus-visible:border-primary focus-visible:outline-none"
                placeholder="••••••••"
              />
              {errors.password && <span className="text-xs text-destructive">{errors.password.message}</span>}
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-muted-foreground">
                <input type="checkbox" {...register("rememberMe")} className="h-4 w-4 rounded border-border" />
                مرا به خاطر بسپار
              </label>
              <Link href="/auth/forgot-password" className="font-medium text-primary hover:underline">
                فراموشی رمز عبور
              </Link>
            </div>

            {status === "error" && (
              <div className="flex items-center gap-2 rounded-xl bg-destructive/10 px-3 py-2.5 text-xs text-destructive">
                <XCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                سامانه احراز هویت هنوز فعال نشده است. این فرم در حال حاضر نمایشی است.
              </div>
            )}

            <Button type="submit" size="lg" disabled={status === "submitting"}>
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  در حال ورود...
                </>
              ) : (
                "ورود"
              )}
            </Button>
          </form>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            حساب کاربری ندارید؟{" "}
            <Link href="/auth/register" className="font-medium text-primary hover:underline">
              ثبت‌نام کنید
            </Link>
          </p>
        </Card>
      </Container>
    </Section>
  );
}