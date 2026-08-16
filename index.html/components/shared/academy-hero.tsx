import Link from "next/link";
import { ArrowLeft, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/shared/fade-in";

/*
  Academy-specific hero, visually consistent with HeroSection (same
  radial-gradient cream background, same heading/paragraph/CTA rhythm)
  but not a copy-paste: no doctor photo panel, since the Academy's
  identity is educational content rather than the doctor herself.
*/
export function AcademyHero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_25%,hsl(var(--accent))_0%,transparent_45%),radial-gradient(circle_at_80%_75%,hsl(var(--secondary))_0%,transparent_45%)] opacity-60" />

      <Container className="flex flex-col items-center gap-6 py-16 text-center sm:py-20 lg:py-24">
        <FadeIn className="flex flex-col items-center gap-6">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-accent-foreground">
            <GraduationCap className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            آکادمی آموزشی
          </span>
          <h1 className="max-w-2xl text-2xl font-bold leading-[1.5] text-foreground sm:text-3xl lg:text-4xl">
            یادگیری علمی مراقبت از پوست و مو، مستقیم از یک متخصص
          </h1>
          <p className="max-w-xl text-sm leading-8 text-muted-foreground sm:text-base">
            دوره‌های آموزشی و محصولات دیجیتال، طراحی‌شده برای کمک به شما در ساخت روتین اصولی و
            درک درست‌تر از نیازهای پوست و موی خود.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/academy/courses">
                مشاهده دوره‌ها
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/academy/products">محصولات دیجیتال</Link>
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}