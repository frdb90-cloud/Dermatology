import { BookOpen } from "lucide-react";
import { FadeIn } from "@/components/shared/fade-in";

/*
  Static hero for /blog — same visual rhythm as the Academy/Clinic
  overview heroes (icon badge + heading + subtext), no new layout
  primitives introduced.
*/
export function BlogHero() {
  return (
    <FadeIn className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <BookOpen className="h-6 w-6" aria-hidden="true" />
      </span>
      <h1 className="text-2xl font-bold leading-[1.5] text-foreground sm:text-3xl lg:text-4xl">
        مجله پوست و مو
      </h1>
      <p className="max-w-xl text-sm leading-8 text-muted-foreground sm:text-base">
        مقالات علمی و کاربردی درباره مراقبت از پوست و مو، نوشته‌شده با رویکرد پزشکی و مسئولانه —
        برای افزایش آگاهی، نه جایگزینی تشخیص تخصصی.
      </p>
    </FadeIn>
  );
}