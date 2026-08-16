"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { ConsultationCard } from "@/components/shared/consultation-card";
import { DoctorInfo } from "@/components/shared/doctor-info";
import { MedicalDisclaimer } from "@/components/shared/medical-disclaimer";
import { FileUpload, type UploadedFile } from "@/components/shared/file-upload";
import { consultationTypes, availableDates, availableTimes } from "@/lib/data/consultation-types";
import { cn } from "@/lib/utils/cn";

/*
  Metadata for this route lives in the sibling layout.tsx in this same
  batch, since this page must be a Client Component (booking state,
  file upload, submit flow) and Next.js ignores `metadata` exports from
  Client Components — same pattern used for custom-routine.
*/
type Status = "idle" | "submitting" | "success" | "error";

export default function ConsultationPage() {
  const [selectedType, setSelectedType] = useState(consultationTypes[0].id);
  const [selectedDate, setSelectedDate] = useState(availableDates[0]);
  const [selectedTime, setSelectedTime] = useState(availableTimes[0]);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState("");

  const activeType = consultationTypes.find((t) => t.id === selectedType) ?? consultationTypes[0];

  const handleSubmit = async () => {
    if (fullName.trim().length < 3 || !/^09\d{9}$/.test(phone)) {
      setFormError("نام و شماره موبایل معتبر را وارد کنید");
      return;
    }
    setFormError("");
    setStatus("submitting");
    try {
      // TODO(backend): send booking payload + `files` to a real
      // /api/personalized-care/consultation endpoint and connect a real
      // payment/calendar provider here later.
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <Section>
        <Container className="flex justify-center">
          <Card className="flex max-w-lg flex-col items-center gap-4 p-10 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-success/10 text-success">
              <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
            </span>
            <h1 className="text-lg font-bold text-foreground">درخواست مشاوره شما ثبت شد</h1>
            <p className="text-sm leading-7 text-muted-foreground">
              کارشناسان کلینیک برای هماهنگی نهایی زمان و پرداخت با شما تماس خواهند گرفت.
            </p>
            <Button asChild size="lg">
              <Link href="/personalized-care">بازگشت به مراقبت اختصاصی</Link>
            </Button>
          </Card>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container>
        <SectionHeading title="رزرو مشاوره آنلاین" subtitle="نوع مشاوره، زمان و اطلاعات خود را وارد کنید" />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="flex flex-col gap-8 lg:col-span-2">
            <FadeIn>
              <h2 className="mb-4 text-sm font-bold text-foreground">نوع مشاوره</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {consultationTypes.map((type) => (
                  <ConsultationCard
                    key={type.id}
                    data={type}
                    isSelected={selectedType === type.id}
                    onSelect={() => setSelectedType(type.id)}
                  />
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <h2 className="mb-4 text-sm font-bold text-foreground">انتخاب زمان</h2>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="mb-2 text-xs text-muted-foreground">تاریخ</p>
                  <div className="flex flex-wrap gap-2">
                    {availableDates.map((date) => (
                      <button
                        key={date}
                        type="button"
                        onClick={() => setSelectedDate(date)}
                        className={cn(
                          "rounded-full border px-4 py-2 text-xs font-medium transition-colors",
                          selectedDate === date
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-white text-muted-foreground hover:border-primary/40"
                        )}
                      >
                        {date}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-xs text-muted-foreground">ساعت</p>
                  <div className="flex flex-wrap gap-2">
                    {availableTimes.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={cn(
                          "rounded-full border px-4 py-2 text-xs font-medium transition-colors",
                          selectedTime === time
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-white text-muted-foreground hover:border-primary/40"
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <h2 className="mb-4 text-sm font-bold text-foreground">اطلاعات بیمار</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="نام و نام خانوادگی"
                  className="h-11 rounded-xl border border-border bg-white px-4 text-sm focus-visible:border-primary focus-visible:outline-none"
                />
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  dir="ltr"
                  placeholder="09123456789"
                  className="h-11 rounded-xl border border-border bg-white px-4 text-right text-sm focus-visible:border-primary focus-visible:outline-none"
                />
                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  rows={4}
                  placeholder="دلیل مشاوره یا توضیح مختصر (اختیاری)"
                  className="rounded-xl border border-border bg-white px-4 py-3 text-sm focus-visible:border-primary focus-visible:outline-none sm:col-span-2"
                />
              </div>
            </FadeIn>

            <FadeIn>
              <h2 className="mb-4 text-sm font-bold text-foreground">
                تصاویر یا مستندات پشتیبان (اختیاری)
              </h2>
              <FileUpload files={files} onChange={setFiles} maxFiles={4} />
            </FadeIn>
          </div>

          <div className="flex flex-col gap-6">
            <FadeIn>
              <div className="rounded-2xl border border-border bg-white p-6">
                <DoctorInfo />
              </div>
            </FadeIn>

            <FadeIn>
              <Card className="flex flex-col gap-4 p-6">
                <h3 className="text-sm font-bold text-foreground">خلاصه رزرو</h3>
                <dl className="flex flex-col gap-2 text-xs">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">نوع مشاوره</dt>
                    <dd className="font-medium text-foreground">{activeType.title}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">تاریخ</dt>
                    <dd className="font-medium text-foreground">{selectedDate}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">ساعت</dt>
                    <dd className="font-medium text-foreground">{selectedTime}</dd>
                  </div>
                  <div className="flex justify-between border-t border-border pt-2">
                    <dt className="text-muted-foreground">هزینه</dt>
                    <dd className="font-bold text-foreground">
                      {activeType.price.toLocaleString("fa-IR")} تومان
                    </dd>
                  </div>
                </dl>

                {formError && (
                  <div className="flex items-center gap-2 rounded-xl bg-destructive/10 px-3 py-2 text-xs text-destructive">
                    <XCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    {formError}
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-xl bg-destructive/10 px-3 py-2 text-xs text-destructive">
                    <XCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    ثبت درخواست با خطا مواجه شد. دوباره تلاش کنید.
                  </div>
                )}

                {/* Frontend placeholder — real payment/calendar wired later */}
                <Button size="lg" onClick={handleSubmit} disabled={status === "submitting"}>
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      در حال ثبت...
                    </>
                  ) : (
                    "رزرو و پرداخت"
                  )}
                </Button>
                <p className="text-center text-[11px] text-muted-foreground">
                  درگاه پرداخت آنلاین در فاز بعدی متصل می‌شود
                </p>
              </Card>
            </FadeIn>

            <FadeIn>
              <MedicalDisclaimer />
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}