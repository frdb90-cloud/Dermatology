import { z } from "zod";

/*
  Single Zod schema covering ALL 6 data-collecting steps of the Custom
  Skin Routine wizard (step 7 is review-only, no new fields). One
  `useForm` instance in the page will use this whole schema, validating
  only the current step's field subset via `trigger()` on "Next" —
  the standard pattern for RHF multi-step wizards (single form instance,
  partial per-step validation, no per-step resets).
*/
export const customRoutineSchema = z.object({
  // Step 1 — Basic Information
  fullName: z.string().min(3, "نام و نام خانوادگی را کامل وارد کنید"),
  age: z
    .string()
    .min(1, "سن را وارد کنید")
    .refine((val) => Number(val) >= 12 && Number(val) <= 100, "سن را به‌درستی وارد کنید"),
  gender: z.enum(["female", "male"], { errorMap: () => ({ message: "جنسیت را انتخاب کنید" }) }),
  phone: z.string().regex(/^09\d{9}$/, "شماره موبایل معتبر نیست"),
  email: z.string().email("ایمیل معتبر نیست").optional().or(z.literal("")),

  // Step 2 — Skin Profile
  skinType: z.enum(["oily", "dry", "combination", "normal", "sensitive"], {
    errorMap: () => ({ message: "نوع پوست را انتخاب کنید" }),
  }),
  sensitivity: z.enum(["low", "medium", "high"], {
    errorMap: () => ({ message: "میزان حساسیت پوست را انتخاب کنید" }),
  }),
  mainConcerns: z.array(z.string()).min(1, "حداقل یک مورد را انتخاب کنید"),
  skinGoals: z.string().min(5, "هدف خود از این روتین را کمی توضیح دهید"),

  // Step 3 — Current Routine
  currentCleanser: z.string().optional(),
  currentMoisturizer: z.string().optional(),
  currentSunscreen: z.string().optional(),
  currentSerums: z.string().optional(),
  otherProducts: z.string().optional(),

  // Step 4 — Medical / Skin History
  previousTreatments: z.string().optional(),
  allergies: z.string().optional(),
  currentMedications: z.string().optional(),
  skinConditions: z.string().optional(),
  pregnancyStatus: z.enum(["none", "pregnant", "breastfeeding"]).optional(),

  // Step 5 — Lifestyle
  sunExposure: z.enum(["low", "medium", "high"], {
    errorMap: () => ({ message: "میزان مواجهه با آفتاب را انتخاب کنید" }),
  }),
  sleepHours: z.enum(["less-than-6", "6-to-8", "more-than-8"], {
    errorMap: () => ({ message: "میانگین ساعت خواب را انتخاب کنید" }),
  }),
  hydration: z.enum(["low", "medium", "high"], {
    errorMap: () => ({ message: "میزان مصرف آب روزانه را انتخاب کنید" }),
  }),
  stressLevel: z.enum(["low", "medium", "high"], {
    errorMap: () => ({ message: "سطح استرس روزمره را انتخاب کنید" }),
  }),
  dailyHabits: z.string().optional(),
});

export type CustomRoutineFormValues = z.infer<typeof customRoutineSchema>;

export const stepFieldGroups: (keyof CustomRoutineFormValues)[][] = [
  ["fullName", "age", "gender", "phone", "email"],
  ["skinType", "sensitivity", "mainConcerns", "skinGoals"],
  ["currentCleanser", "currentMoisturizer", "currentSunscreen", "currentSerums", "otherProducts"],
  ["previousTreatments", "allergies", "currentMedications", "skinConditions", "pregnancyStatus"],
  ["sunExposure", "sleepHours", "hydration", "stressLevel", "dailyHabits"],
  [], // step 6 — photo upload, handled outside RHF fields (see FileUpload)
];

export const skinConcernOptions = [
  { value: "acne", label: "آکنه" },
  { value: "pigmentation", label: "لک و پیگمنتیشن" },
  { value: "aging", label: "چین‌وچروک / پیری پوست" },
  { value: "dryness", label: "خشکی پوست" },
  { value: "redness", label: "قرمزی و التهاب" },
  { value: "large-pores", label: "منافذ باز" },
];