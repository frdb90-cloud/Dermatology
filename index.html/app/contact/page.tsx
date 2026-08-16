"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  XCircle,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { MapPlaceholder } from "@/components/shared/map-placeholder";
import { contactInfo, socialLinks } from "@/lib/data/contact";
import { contactFormSchema, type ContactFormValues } from "@/lib/validation/contact-schema";

/*
  AUDIT FIX (Phase 8): the four contact-detail icon badges used the
  invalid `h-4.5 w-4.5` class — same defect class as the two files
  above, same fix (→ `h-5 w-5`). No other logic changed.
*/
type Status = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactFormSchema) });

  const onSubmit = async (_values: ContactFormValues) => {
    setStatus("submitting");
    try {
      // TODO(backend): POST to a real /api/contact endpoint here.
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section>
      <Container>
        <SectionHeading title="تماس با ما" subtitle="در ارتباط با هر سوال یا درخواستی در کنار شما هستیم" />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <FadeIn>
              <Card className="flex flex-col gap-5 p-6">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-medium text-foreground">آدرس کلینیک</p>
                    <p className="mt-0.5 text-xs leading-6 text-muted-foreground">{contactInfo.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-medium text-foreground">تلفن تماس</p>
                    <p className="mt-0.5 text-xs text-muted-foreground" dir="ltr">{contactInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-medium text-foreground">ایمیل</p>
                    <p className="mt-0.5 text-xs text-muted-foreground" dir="ltr">{contactInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="text-xs font-medium text-foreground">ساعات کاری</p>
                    {contactInfo.workingHours.map((item) => (
                      <p key={item.day} className="text-xs text-muted-foreground">
                        {item.day}: {item.hours}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 border-t border-border pt-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </a>
                    );
                  })}
                </div>
              </Card>
            </FadeIn>

            <FadeIn>
              <MapPlaceholder addressLabel={contactInfo.mapAddressLabel} />
            </FadeIn>

            <FadeIn>
              <div className="flex flex-col gap-3 rounded-2xl bg-primary/5 p-6 text-center">
                <p className="text-xs leading-6 text-muted-foreground">
                  برای رزرو سریع‌تر می‌توانید مستقیماً اقدام کنید
                </p>
                <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
                  <Button size="sm" asChild>
                    <Link href="/clinic/appointment">رزرو نوبت حضوری</Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/personalized-care/consultation">مشاوره آنلاین</Link>
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-3">
            <FadeIn>
              <Card className="p-6 sm:p-8">
                {status === "success" ? (
                  <div className="flex flex-col items-center gap-4 py-10 text-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-success/10 text-success">
                      <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <h2 className="text-base font-bold text-foreground">پیام شما ارسال شد</h2>
                    <p className="max-w-sm text-xs leading-6 text-muted-foreground">
                      تیم پشتیبانی در اسرع وقت با شما تماس خواهد گرفت.
                    </p>
                    <Button variant="outline" onClick={() => setStatus("idle")}>
                      ارسال پیام دیگر
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    <h2 className="text-sm font-bold text-foreground">فرم تماس</h2>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-foreground">نام و نام خانوادگی</label>
                        <input
                          {...register("name")}
                          className="h-11 rounded-xl border border-border bg-white px-4 text-sm focus-visible:border-primary focus-visible:outline-none"
                          placeholder="نام خود را وارد کنید"
                        />
                        {errors.name && <span className="text-xs text-destructive">{errors.name.message}</span>}
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-foreground">شماره موبایل</label>
                        <input
                          {...register("phone")}
                          dir="ltr"
                          className="h-11 rounded-xl border border-border bg-white px-4 text-right text-sm focus-visible:border-primary focus-visible:outline-none"
                          placeholder="09123456789"
                        />
                        {errors.phone && <span className="text-xs text-destructive">{errors.phone.message}</span>}
                      </div>
                      <div className="flex flex-col gap-1.5 sm:col-span-2">
                        <label className="text-sm font-medium text-foreground">ایمیل</label>
                        <input
                          {...register("email")}
                          dir="ltr"
                          className="h-11 rounded-xl border border-border bg-white px-4 text-right text-sm focus-visible:border-primary focus-visible:outline-none"
                          placeholder="example@email.com"
                        />
                        {errors.email && <span className="text-xs text-destructive">{errors.email.message}</span>}
                      </div>
                      <div className="flex flex-col gap-1.5 sm:col-span-2">
                        <label className="text-sm font-medium text-foreground">موضوع</label>
                        <input
                          {...register("subject")}
                          className="h-11 rounded-xl border border-border bg-white px-4 text-sm focus-visible:border-primary focus-visible:outline-none"
                          placeholder="موضوع پیام شما"
                        />
                        {errors.subject && <span className="text-xs text-destructive">{errors.subject.message}</span>}
                      </div>
                      <div className="flex flex-col gap-1.5 sm:col-span-2">
                        <label className="text-sm font-medium text-foreground">پیام</label>
                        <textarea
                          {...register("message")}
                          rows={5}
                          className="rounded-xl border border-border bg-white px-4 py-3 text-sm focus-visible:border-primary focus-visible:outline-none"
                          placeholder="متن پیام خود را بنویسید"
                        />
                        {errors.message && <span className="text-xs text-destructive">{errors.message.message}</span>}
                      </div>
                    </div>

                    {status === "error" && (
                      <div className="flex items-center gap-2 rounded-xl bg-destructive/10 px-4 py-3 text-xs text-destructive">
                        <XCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                        ارسال پیام با خطا مواجه شد. لطفاً دوباره تلاش کنید.
                      </div>
                    )}

                    <Button type="submit" size="lg" disabled={status === "submitting"}>
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                          در حال ارسال...
                        </>
                      ) : (
                        "ارسال پیام"
                      )}
                    </Button>
                  </form>
                )}
              </Card>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}