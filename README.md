# دکتر سارا رفیعی — پلتفرم پوست و زیبایی

وب‌سایت production-ready برای کلینیک تخصصی پوست، مو و زیبایی، ساخته‌شده با Next.js (App Router)، TypeScript و TailwindCSS.

## وضعیت فعلی: فاز ۱ — پایه‌گذاری و دیزاین‌سیستم

این فاز شامل معماری پروژه، توکن‌های طراحی، و کتابخانه‌ی کامپوننت‌های پایه است. صفحه‌ی اصلی نهایی، صفحات کلینیک/آکادمی/بلاگ و فرم‌ها در فازهای بعدی اضافه می‌شوند.

## نصب

```bash
npm install
```

فونت Vazirmatn از طریق next/font/google به‌صورت خودکار self-host می‌شود و نیاز به دانلود دستی فایل فونت نیست.

## اجرا در حالت توسعه

```bash
npm run dev
```

سایت روی `http://localhost:3000` بالا می‌آید.

## ساختار پوشه‌ها (تا پایان فاز ۱)

```
src/
  app/
    layout.tsx
    globals.css
    page.tsx
  components/
    ui/
      button.tsx
      input.tsx
      textarea.tsx
      label.tsx
      select.tsx
      card.tsx
      badge.tsx
      modal.tsx
      accordion.tsx
      tabs.tsx
      toast.tsx
      skeleton.tsx
    shared/
      feature-card.tsx
      service-card.tsx
      product-card.tsx
      course-card.tsx
      article-card.tsx
      section-heading.tsx
    layout/
      header.tsx
      footer.tsx
      logo.tsx
      container.tsx
      section.tsx
  lib/
    utils/
      cn.ts
      format.ts
```

## دیزاین‌سیستم

- رنگ‌ها به‌صورت CSS variable (HSL) در globals.css، پالت primary/secondary/accent نرم و پریمیوم
- فونت Vazirmatn، line-height بالا برای خوانایی فارسی، جلوگیری از شکستن حروف
- کامپوننت‌های UI با الگوی class-variance-authority (شبیه shadcn)

## دیپلوی

```bash
npm run build
npm run start
```

سازگار با Vercel، Netlify یا هر سرور Node.js.