import { z } from "zod";

/*
  UI-only auth schemas for Phase 5. No real authentication call exists
  yet — these validate form shape only, ready to be reused as-is once
  a real /api/auth/* backend is connected (per Phase 5 rule: prepare
  the architecture without implementing real auth).
*/
export const loginSchema = z.object({
  identifier: z.string().min(5, "شماره موبایل یا ایمیل را وارد کنید"),
  password: z.string().min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
  rememberMe: z.boolean().optional(),
});
export type LoginFormValues = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    fullName: z.string().min(3, "نام و نام خانوادگی را کامل وارد کنید"),
    identifier: z.string().min(5, "شماره موبایل یا ایمیل را وارد کنید"),
    password: z.string().min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
    confirmPassword: z.string().min(6, "تکرار رمز عبور را وارد کنید"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "رمز عبور و تکرار آن یکسان نیستند",
    path: ["confirmPassword"],
  });
export type RegisterFormValues = z.infer<typeof registerSchema>;

export const forgotPasswordSchema = z.object({
  identifier: z.string().min(5, "شماره موبایل یا ایمیل را وارد کنید"),
});
export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;