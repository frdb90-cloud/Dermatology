"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { StepIndicator } from "@/components/shared/step-indicator";
import { FormNavigation } from "@/components/shared/form-navigation";
import { ReviewSummary, type ReviewGroup } from "@/components/shared/review-summary";
import { MedicalDisclaimer } from "@/components/shared/medical-disclaimer";
import type { UploadedFile } from "@/components/shared/file-upload";
import {
  StepBasicInfo,
  StepSkinProfile,
  StepCurrentRoutine,
  StepMedicalHistory,
  StepLifestyle,
  StepPhotos,
} from "@/components/shared/custom-routine-steps";
import {
  customRoutineSchema,
  stepFieldGroups,
  skinConcernOptions,
  type CustomRoutineFormValues,
} from "@/lib/validation/custom-routine-schema";

/*
  NOTE: this page is a Client Component ("use client" at the top), so it
  intentionally carries NO `export const metadata` (Next.js only reads
  metadata from Server Components). SEO for this route is provided by
  the sibling layout.tsx shipped in this same batch — that keeps the
  wizard's interactive state here while still satisfying Phase 5 rule 12.
*/
const stepLabels = [
  "اطلاعات پایه",
  "پروفایل پوستی",
  "روتین فعلی",
  "سابقه پزشکی",
  "سبک زندگی",
  "تصاویر",
  "بازبینی نهایی",
];

const genderLabel: Record<string, string> = { female: "زن", male: "مرد" };
const levelLabel: Record<string, string> = { low: "کم", medium: "متوسط", high: "زیاد" };
const skinTypeLabel: Record<string, string> = {
  oily: "چرب",
  dry: "خشک",
  combination: "مختلط",
  normal: "نرمال",
  sensitive: "حساس",
};
const sleepLabel: Record<string, string> = {
  "less-than-6": "کمتر از ۶ ساعت",
  "6-to-8": "۶ تا ۸ ساعت",
  "more-than-8": "بیشتر از ۸ ساعت",
};
const pregnancyLabel: Record<string, string> = {
  none: "مربوط به من نیست",
  pregnant: "بارداری",
  breastfeeding: "شیردهی",
};

type Status = "idle" | "submitting" | "success" | "error";

export default function CustomRoutinePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [status, setStatus] = useState<Status>("idle");

  const form = useForm<CustomRoutineFormValues>({
    resolver: zodResolver(customRoutineSchema),
    mode: "onSubmit",
    defaultValues: {
      fullName: "",
      age: "",
      phone: "",
      email: "",
      mainConcerns: [],
      skinGoals: "",
      pregnancyStatus: "none",
    },
  });

  const isLastDataStep = currentStep === stepLabels.length - 2; // step 6 (photos)
  const isReviewStep = currentStep === stepLabels.length - 1; // step 7

  const goNext = async () => {
    if (isReviewStep) {
      setStatus("submitting");
      try {
        // TODO(backend): POST form.getValues() + uploaded files to a real
        // /api/personalized-care/custom-routine endpoint here.
        await new Promise((resolve) => setTimeout(resolve, 1200));
        setStatus("success");
      } catch {
        setStatus("error");
      }
      return;
    }

    if (isLastDataStep) {
      setCurrentStep((s) => s + 1);
      return;
    }

    const fields = stepFieldGroups[currentStep];
    const valid = await form.trigger(fields);
    if (valid) setCurrentStep((s) => s + 1);
  };

  const goBack = () => setCurrentStep((s) => Math.max(0, s - 1));

  if (status === "success") {
    return (
      <Section>
        <Container className="flex justify-center">
          <Card className="flex max-w-lg flex-col items-center gap-4 p-10 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-success/10 text-success">
              <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
            </span>
            <h1 className="text-lg font-bold text-foreground">اطلاعات شما با موفقیت ثبت شد</h1>
            <p className="text-sm leading-7 text-muted-foreground">
              این اطلاعات صرفاً برای جمع‌آوری داده در اختیار تیم درمانی قرار می‌گیرد و توسط پزشک
              بررسی خواهد شد. این فرم جایگزین تشخیص یا معاینه پزشکی نیست و روتین نهایی پس از بررسی
              تخصصی برای شما ارسال می‌شود.
            </p>
            <Button asChild size="lg">
              <Link href="/personalized-care">بازگشت به مراقبت اختصاصی</Link>
            </Button>
          </Card>
        </Container>
      </Section>
    );
  }

  const values = form.watch();
  const reviewGroups: ReviewGroup[] = [
    {
      title: "اطلاعات پایه",
      stepIndex: 0,
      items: [
        { label: "نام و نام خانوادگی", value: values.fullName },
        { label: "سن", value: values.age },
        { label: "جنسیت", value: genderLabel[values.gender] ?? "" },
        { label: "موبایل", value: values.phone },
        { label: "ایمیل", value: values.email ?? "" },
      ],
    },
    {
      title: "پروفایل پوستی",
      stepIndex: 1,
      items: [
        { label: "نوع پوست", value: skinTypeLabel[values.skinType] ?? "" },
        { label: "حساسیت", value: levelLabel[values.sensitivity] ?? "" },
        {
          label: "دغدغه‌های اصلی",
          value: (values.mainConcerns || [])
            .map((v) => skinConcernOptions.find((o) => o.value === v)?.label)
            .filter(Boolean)
            .join("، "),
        },
        { label: "هدف از روتین", value: values.skinGoals },
      ],
    },
    {
      title: "روتین فعلی",
      stepIndex: 2,
      items: [
        { label: "پاک‌کننده", value: values.currentCleanser ?? "" },
        { label: "مرطوب‌کننده", value: values.currentMoisturizer ?? "" },
        { label: "ضدآفتاب", value: values.currentSunscreen ?? "" },
        { label: "سرم‌ها", value: values.currentSerums ?? "" },
      ],
    },
    {
      title: "سابقه پزشکی",
      stepIndex: 3,
      items: [
        { label: "درمان‌های قبلی", value: values.previousTreatments ?? "" },
        { label: "حساسیت‌ها", value: values.allergies ?? "" },
        { label: "داروهای فعلی", value: values.currentMedications ?? "" },
        { label: "بارداری/شیردهی", value: pregnancyLabel[values.pregnancyStatus ?? "none"] },
      ],
    },
    {
      title: "سبک زندگی",
      stepIndex: 4,
      items: [
        { label: "مواجهه با آفتاب", value: levelLabel[values.sunExposure] ?? "" },
        { label: "ساعت خواب", value: sleepLabel[values.sleepHours] ?? "" },
        { label: "مصرف آب", value: levelLabel[values.hydration] ?? "" },
        { label: "سطح استرس", value: levelLabel[values.stressLevel] ?? "" },
      ],
    },
    {
      title: "تصاویر",
      stepIndex: 5,
      items: [{ label: "تعداد تصاویر بارگذاری‌شده", value: String(files.length) }],
    },
  ];

  return (
    <Section>
      <Container className="mx-auto max-w-3xl">
        <SectionHeading
          title="روتین شخصی‌سازی‌شده پوست"
          subtitle="با تکمیل این فرم، اطلاعات شما توسط تیم درمانی بررسی و روتین متناسب طراحی می‌شود"
        />

        <Card className="p-6 sm:p-8">
          <StepIndicator labels={stepLabels} currentStep={currentStep} />

          {currentStep === 0 && <StepBasicInfo form={form} />}
          {currentStep === 1 && <StepSkinProfile form={form} />}
          {currentStep === 2 && <StepCurrentRoutine form={form} />}
          {currentStep === 3 && <StepMedicalHistory form={form} />}
          {currentStep === 4 && <StepLifestyle form={form} />}
          {currentStep === 5 && <StepPhotos files={files} onFilesChange={setFiles} />}
          {currentStep === 6 && (
            <div className="flex flex-col gap-5">
              <p className="text-sm text-muted-foreground">
                پیش از ثبت نهایی، اطلاعات وارد‌شده را بررسی کنید. در صورت نیاز به ویرایش هر بخش، روی
                «ویرایش» بزنید.
              </p>
              <ReviewSummary groups={reviewGroups} onEditStep={setCurrentStep} />
            </div>
          )}

          {status === "error" && (
            <div className="mt-6 flex items-center gap-2.5 rounded-xl bg-destructive/10 px-4 py-3 text-destructive">
              <XCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="text-sm">ثبت اطلاعات با خطا مواجه شد. لطفاً دوباره تلاش کنید.</span>
            </div>
          )}

          <FormNavigation
            isFirstStep={currentStep === 0}
            isLastStep={isReviewStep}
            isSubmitting={status === "submitting"}
            onBack={goBack}
            onNext={goNext}
          />
        </Card>

        <div className="mt-8">
          <MedicalDisclaimer />
        </div>
      </Container>
    </Section>
  );
}