"use client";

import type { UseFormReturn } from "react-hook-form";
import { cn } from "@/lib/utils/cn";
import { skinConcernOptions, type CustomRoutineFormValues } from "@/lib/validation/custom-routine-schema";
import { FileUpload, type UploadedFile } from "@/components/shared/file-upload";

/*
  One component per wizard step, all sharing the same RHF instance
  (passed down as `form`) rather than each owning separate state —
  this is what lets step 7 review and back-navigation work without
  resetting previously entered values.
*/
type FormProps = { form: UseFormReturn<CustomRoutineFormValues> };

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <span className="text-xs text-destructive">{message}</span>;
}

const inputClass =
  "h-11 rounded-xl border border-border bg-white px-4 text-sm focus-visible:border-primary focus-visible:outline-none";
const textareaClass =
  "rounded-xl border border-border bg-white px-4 py-3 text-sm focus-visible:border-primary focus-visible:outline-none";
const labelClass = "text-sm font-medium text-foreground";

export function StepBasicInfo({ form }: FormProps) {
  const { register, formState } = form;
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>نام و نام خانوادگی</label>
        <input {...register("fullName")} className={inputClass} placeholder="مثلاً مریم احمدی" />
        <FieldError message={formState.errors.fullName?.message} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>سن</label>
        <input {...register("age")} type="number" className={inputClass} placeholder="مثلاً ۲۸" />
        <FieldError message={formState.errors.age?.message} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>جنسیت</label>
        <select {...register("gender")} defaultValue="" className={inputClass}>
          <option value="" disabled>انتخاب کنید</option>
          <option value="female">زن</option>
          <option value="male">مرد</option>
        </select>
        <FieldError message={formState.errors.gender?.message} />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>شماره موبایل</label>
        <input {...register("phone")} dir="ltr" className={cn(inputClass, "text-right")} placeholder="09123456789" />
        <FieldError message={formState.errors.phone?.message} />
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label className={labelClass}>ایمیل (اختیاری)</label>
        <input {...register("email")} dir="ltr" className={cn(inputClass, "text-right")} placeholder="example@email.com" />
        <FieldError message={formState.errors.email?.message} />
      </div>
    </div>
  );
}

export function StepSkinProfile({ form }: FormProps) {
  const { register, formState, watch, setValue } = form;
  const selectedConcerns = watch("mainConcerns") || [];

  const toggleConcern = (value: string) => {
    const next = selectedConcerns.includes(value)
      ? selectedConcerns.filter((v) => v !== value)
      : [...selectedConcerns, value];
    setValue("mainConcerns", next, { shouldValidate: true });
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>نوع پوست</label>
          <select {...register("skinType")} defaultValue="" className={inputClass}>
            <option value="" disabled>انتخاب کنید</option>
            <option value="oily">چرب</option>
            <option value="dry">خشک</option>
            <option value="combination">مختلط</option>
            <option value="normal">نرمال</option>
            <option value="sensitive">حساس</option>
          </select>
          <FieldError message={formState.errors.skinType?.message} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>میزان حساسیت پوست</label>
          <select {...register("sensitivity")} defaultValue="" className={inputClass}>
            <option value="" disabled>انتخاب کنید</option>
            <option value="low">کم</option>
            <option value="medium">متوسط</option>
            <option value="high">زیاد</option>
          </select>
          <FieldError message={formState.errors.sensitivity?.message} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className={labelClass}>مهم‌ترین دغدغه‌های پوستی شما</label>
        <div className="flex flex-wrap gap-2">
          {skinConcernOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => toggleConcern(opt.value)}
              className={cn(
                "rounded-full border px-4 py-2 text-xs font-medium transition-colors",
                selectedConcerns.includes(opt.value)
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-white text-muted-foreground hover:border-primary/40"
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
        <FieldError message={formState.errors.mainConcerns?.message as string | undefined} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>هدف شما از این روتین چیست؟</label>
        <textarea {...register("skinGoals")} rows={3} className={textareaClass} placeholder="مثلاً کاهش جوش‌های التهابی و یکنواخت‌شدن رنگ پوست" />
        <FieldError message={formState.errors.skinGoals?.message} />
      </div>
    </div>
  );
}

export function StepCurrentRoutine({ form }: FormProps) {
  const { register } = form;
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>پاک‌کننده فعلی</label>
        <input {...register("currentCleanser")} className={inputClass} placeholder="نام محصول (اختیاری)" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>مرطوب‌کننده فعلی</label>
        <input {...register("currentMoisturizer")} className={inputClass} placeholder="نام محصول (اختیاری)" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>ضدآفتاب فعلی</label>
        <input {...register("currentSunscreen")} className={inputClass} placeholder="نام محصول (اختیاری)" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>سرم‌های فعلی</label>
        <input {...register("currentSerums")} className={inputClass} placeholder="نام محصول (اختیاری)" />
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label className={labelClass}>سایر محصولات مورد استفاده</label>
        <textarea {...register("otherProducts")} rows={3} className={textareaClass} placeholder="هر محصول دیگری که استفاده می‌کنید (اختیاری)" />
      </div>
    </div>
  );
}

export function StepMedicalHistory({ form }: FormProps) {
  const { register } = form;
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>درمان‌های قبلی</label>
          <textarea {...register("previousTreatments")} rows={3} className={textareaClass} placeholder="در صورت وجود، ذکر کنید (اختیاری)" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>حساسیت‌های شناخته‌شده</label>
          <textarea {...register("allergies")} rows={3} className={textareaClass} placeholder="در صورت وجود، ذکر کنید (اختیاری)" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>داروهای مصرفی فعلی</label>
          <textarea {...register("currentMedications")} rows={3} className={textareaClass} placeholder="در صورت وجود، ذکر کنید (اختیاری)" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>بیماری‌های پوستی مرتبط</label>
          <textarea {...register("skinConditions")} rows={3} className={textareaClass} placeholder="در صورت وجود، ذکر کنید (اختیاری)" />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>وضعیت بارداری / شیردهی</label>
        <select {...register("pregnancyStatus")} defaultValue="none" className={cn(inputClass, "max-w-xs")}>
          <option value="none">مربوط به من نیست</option>
          <option value="pregnant">بارداری</option>
          <option value="breastfeeding">شیردهی</option>
        </select>
      </div>
    </div>
  );
}

export function StepLifestyle({ form }: FormProps) {
  const { register, formState } = form;
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>میزان مواجهه با آفتاب</label>
          <select {...register("sunExposure")} defaultValue="" className={inputClass}>
            <option value="" disabled>انتخاب کنید</option>
            <option value="low">کم</option>
            <option value="medium">متوسط</option>
            <option value="high">زیاد</option>
          </select>
          <FieldError message={formState.errors.sunExposure?.message} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>میانگین ساعت خواب</label>
          <select {...register("sleepHours")} defaultValue="" className={inputClass}>
            <option value="" disabled>انتخاب کنید</option>
            <option value="less-than-6">کمتر از ۶ ساعت</option>
            <option value="6-to-8">۶ تا ۸ ساعت</option>
            <option value="more-than-8">بیشتر از ۸ ساعت</option>
          </select>
          <FieldError message={formState.errors.sleepHours?.message} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>میزان مصرف آب روزانه</label>
          <select {...register("hydration")} defaultValue="" className={inputClass}>
            <option value="" disabled>انتخاب کنید</option>
            <option value="low">کم</option>
            <option value="medium">متوسط</option>
            <option value="high">زیاد</option>
          </select>
          <FieldError message={formState.errors.hydration?.message} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>سطح استرس روزمره</label>
          <select {...register("stressLevel")} defaultValue="" className={inputClass}>
            <option value="" disabled>انتخاب کنید</option>
            <option value="low">کم</option>
            <option value="medium">متوسط</option>
            <option value="high">زیاد</option>
          </select>
          <FieldError message={formState.errors.stressLevel?.message} />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className={labelClass}>سایر عادت‌های روزانه مرتبط</label>
        <textarea {...register("dailyHabits")} rows={3} className={textareaClass} placeholder="هر نکته دیگری که فکر می‌کنید مرتبط است (اختیاری)" />
      </div>
    </div>
  );
}

export function StepPhotos({
  files,
  onFilesChange,
}: {
  files: UploadedFile[];
  onFilesChange: (files: UploadedFile[]) => void;
}) {
  return <FileUpload files={files} onChange={onFilesChange} />;
}