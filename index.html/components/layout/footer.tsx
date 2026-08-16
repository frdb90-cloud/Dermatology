import Link from "next/link";
import { Instagram, Send, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/layout/logo";

/*
  PHASE 1 NOTE — foundational (v1) Footer:
  - Structure (columns, newsletter bar, bottom bar) is final and matches
    the reference screenshot's layout.
  - Link lists are wired to real routes already since those routes are
    part of this project's sitemap — only the Newsletter form submission
    logic is a placeholder until the forms phase (react-hook-form + zod).
*/
const QUICK_LINKS = [
  { label: "کلینیک", href: "/clinic" },
  { label: "آکادمی", href: "/academy" },
  { label: "مراقبت اختصاصی", href: "/personalized-care" },
  { label: "مقالات", href: "/blog" },
];

const USEFUL_LINKS = [
  { label: "سوالات متداول", href: "/faq" },
  { label: "شرایط و قوانین", href: "/terms" },
  { label: "حریم خصوصی", href: "/privacy" },
  { label: "مجله سلامت پوست", href: "/blog" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary-700 text-white">
      <div className="container flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-center sm:text-right">
          <h3 className="text-lg font-bold">نکات مراقبت از پوست را دریافت کنید</h3>
          <p className="mt-1 text-sm text-white/70">
            با عضویت در خبرنامه، جدیدترین آموزش‌ها و تخفیف‌ها را از دست ندهید.
          </p>
        </div>
        <form className="flex w-full max-w-md items-center gap-2 sm:w-auto">
          <label htmlFor="newsletter-email" className="sr-only">
            ایمیل
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="ایمیل خود را وارد کنید"
            className="h-12 flex-1 rounded-full border border-white/20 bg-white/10 px-5 text-sm text-white placeholder:text-white/60 focus-visible:border-white/60 focus-visible:outline-none"
          />
          <button
            type="submit"
            className="h-12 shrink-0 rounded-full bg-white px-6 text-sm font-bold text-primary-700 transition-colors hover:bg-white/90"
          >
            عضویت
          </button>
        </form>
      </div>

      <div className="border-t border-white/10">
        <div className="container grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <div className="[&_a]:text-white [&_span:last-child]:text-white/70">
              <Logo />
            </div>
            <p className="text-sm leading-7 text-white/70">
              ما را دنبال کنید و از آخرین مطالب پوست و زیبایی مطلع شوید.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="#"
                aria-label="اینستاگرام"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="تلگرام"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <Send className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="یوتیوب"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold text-white">لینک‌های مفید</h4>
            <ul className="flex flex-col gap-3">
              {USEFUL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold text-white">دسترسی سریع</h4>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold text-white">اطلاعات تماس</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@drrafiei.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>تهران، خیابان ولیعصر، ساختمان مهر، طبقه ۳</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container flex flex-col items-center justify-between gap-3 text-center text-xs text-white/60 sm:flex-row sm:text-right">
          <p>© تمامی حقوق محفوظ است — دکتر سارا رفیعی</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="transition-colors hover:text-white">
              حریم خصوصی
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              شرایط استفاده
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}