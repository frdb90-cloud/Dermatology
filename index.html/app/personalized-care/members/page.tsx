import type { Metadata } from "next";
import Link from "next/link";
import { LayoutDashboard, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { membershipBenefits } from "@/lib/data/membership-benefits";

export const metadata: Metadata = {
  title: "باشگاه اعضا | مراقبت اختصاصی",
  description:
    "عضویت در باشگاه اعضا برای دسترسی به محتوای اختصاصی، تخفیف‌ها و منابع شخصی‌سازی‌شده.",
  openGraph: {
    title: "باشگاه اعضا",
    description: "مزایای عضویت در باشگاه اعضا و دسترسی به پنل کاربری اختصاصی.",
    type: "website",
  },
};

/*
  Premium landing page for the Members Club. No real auth here (per
  Phase 5 rule 5) — CTAs point to /auth/register and /auth/login (built
  in this same phase) and to the mock dashboard preview.
*/
export default function MembersPage() {
  return (
    <>
      <Section className="pb-0">
        <Container>
          <FadeIn className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
            <span className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              باشگاه اعضا
            </span>
            <h1 className="text-2xl font-bold leading-[1.5] text-foreground sm:text-3xl lg:text-4xl">
              عضوی از یک تجربه‌ی مراقبتی اختصاصی‌تر شوید
            </h1>
            <p className="max-w-xl text-sm leading-8 text-muted-foreground sm:text-base">
              باشگاه اعضا امکاناتی فراتر از خدمات عمومی سایت را در اختیار شما قرار می‌دهد؛ از محتوای
              اختصاصی تا اولویت در رزرو نوبت.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/auth/register">عضویت رایگان</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/auth/login">ورود اعضا</Link>
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading title="مزایای عضویت" subtitle="آنچه با عضویت در باشگاه اعضا به آن دسترسی دارید" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {membershipBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <FadeIn key={benefit.title} delay={index * 0.06}>
                  <Card className="flex h-full flex-col items-start gap-3 p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-sm font-bold text-foreground">{benefit.title}</h3>
                    <p className="text-xs leading-6 text-muted-foreground">{benefit.description}</p>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <FadeIn className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <LayoutDashboard className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">پیش‌نمایش پنل کاربری</h2>
            <p className="max-w-lg text-sm leading-7 text-muted-foreground">
              پس از عضویت، در پنل اختصاصی خود به دوره‌ها، محصولات، پیگیری درمان و تنظیمات حساب
              کاربری دسترسی خواهید داشت.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link href="/personalized-care/members/dashboard">
                مشاهده نمونه پنل کاربری
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>
        </Container>
      </Section>

      <Section>
        <Container>
          <FadeIn className="mx-auto flex max-w-2xl flex-col items-center gap-5 rounded-3xl bg-primary-700 px-6 py-14 text-center text-white sm:px-14">
            <h2 className="text-2xl font-bold sm:text-3xl">همین امروز عضو شوید</h2>
            <p className="max-w-md text-sm leading-7 text-white/75">
              عضویت رایگان است و در کمتر از یک دقیقه تکمیل می‌شود.
            </p>
            <Button size="lg" className="bg-white text-primary-700 hover:bg-white/90" asChild>
              <Link href="/auth/register">عضویت رایگان</Link>
            </Button>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}