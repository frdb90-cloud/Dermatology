import { z } from "zod";

/*
  UI-only validation schema for the contact form (Phase 7 rule 3 & the
  roadmap rule: no real submission backend yet). Shape is stable and
  ready to be posted to a real /api/contact endpoint later without
  changing the form fields.
*/
export const contactFormSchema = z.object({
  name: z.string().min(3, "نام و نام خانوادگی را کامل وارد کنید"),
  email: z.string().email("ایمیل معتبر نیست"),
  phone: z.string().regex(/^09\d{9}$/, "شماره موبایل معتبر نیست"),
  subject: z.string().min(3, "موضوع پیام را وارد کنید"),
  message: z.string().min(10, "پیام باید حداقل ۱۰ کاراکتر باشد"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;