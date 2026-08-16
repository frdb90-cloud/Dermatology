import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Sparkles,
  MessageCircle,
  Activity,
  Crown,
  ClipboardList,
  UserCheck,
  CalendarCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { MedicalDisclaimer } from "@/components/shared/medical-disclaimer";

export const metadata: Metadata = {
  title: "مراقبت اختصاصی | روتین، مشاوره، پیگیری درمان و باشگاه اعضا",
  description:
    "خدمات مراقبت اختصاصی شامل روتین شخصی‌سازی‌شده پوست، مشاوره آنلاین، پیگیری درمان و باشگاه اعضا.",
  openGraph: {
    title: "مراقبت اختصاصی",
    description: "چهار خدمت اصلی مراقبت اختصاصی، طراحی‌شده حول نیاز فردی هر کاربر.",
    type: "website",
  },
};

const mainServices = [
  {
    icon: Sparkles,
    title: "روتین شخصی‌سازی‌شده پوست",
    description: "تکمیل یک ارزیابی کامل و دریافت روتین مراقبتی متناسب با پوست شما",
    href: "/personalized-care/custom-routine",
    cta: "شروع ارزیابی",
  },
  {
    icon: MessageCircle,
    title: "مشاوره آنلاین",
    description: "رزرو مشاوره متنی، ویدیویی یا حضوری با تیم درمانی",
    href: "/personalized-care/consultation",
    cta: "رزرو مشاوره",
  },
  {
    icon: Activity,
    title: "پیگیری درمان",
    description: "مشاهده روند درمان، یادداشت‌های پزشک و نوبت‌های بعدی",
    href: "/personalized-care/follow-up",
    cta: "مشاهده پیگیری",
  },
  {
    icon: Crown,
    title: "باشگاه اعضا",
    description: "دسترسی به محتوای اختصاصی، تخفیف‌ها و منابع شخصی‌سازی‌شده",
    href: "/personalized-care/members",
    cta: "عضویت در باشگاه",
  },
];

const howItWorks = [
  { icon: ClipboardList, step: "۱", title: "ثبت اطلاعات", text: "تکمیل فرم ارزیابی یا رزرو مشاوره مورد نیاز" },
  { icon: UserCheck, step: "۲", title: "بررسی تخصصی", text: "بررسی اطلاعات شما توسط تیم درمانی" },
  { icon: CalendarCheck, step: "۳", title: "پیگیری اختصاصی", text: "دریافت برنامه یا پاسخ متناسب با شرایط شما" },
];

/*
  /personalized-care — Overview page for the third pillar. Same visual
  rhythm as /clinic and /academy (Section/Container/SectionHeading/
  FadeIn), no new layout primitives introduced.
*/
export default function PersonalizedCarePage() {
  return (
    <>
      <Section className="pb-0">
        <Container>
          <FadeIn className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
            <span className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              مراقبت اختصاصی
            </span>
            <h1 className="text-2xl font-bold leading-[1.5] text-foreground sm:text-3xl lg:text-4xl">
              مراقبتی که دقیقاً متناسب با شرایط شماست
            </h1>
            <p className="max-w-xl text-sm leading-8 text-muted-foreground sm:text-base">
              مراقبت اختصاصی به شما این امکان را می‌دهد که فارغ از عمومی‌سازی، مسیر مراقبتی و
              درمانی خود را بر اساس نیاز واقعی پوست و شرایط زندگی‌تان دنبال کنید.
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading title="خدمات مراقبت اختصاصی" subtitle="چهار مسیر اصلی برای همراهی در کنار شما" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <FadeIn key={service.title} delay={index * 0.08}>
                  <Card className="flex h-full flex-col items-start gap-4 p-7">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-base font-bold text-foreground">{service.title}</h3>
                    <p className="flex-1 text-sm leading-7 text-muted-foreground">{service.description}</p>
                    <Button variant="outline" asChild>
                      <Link href={service.href}>
                        {service.cta}
                        <ArrowLeft className="h-4 w-4" />
                      </Link>
                    </Button>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading title="فرایند دریافت خدمات" subtitle="مسیری ساده و شفاف از ثبت اطلاعات تا پیگیری" />
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-3">
            {howItWorks.map((item) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.step}>
                  <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-soft">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                    <p className="text-xs leading-6 text-muted-foreground">{item.text}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <FadeIn className="mx-auto flex max-w-2xl flex-col items-center gap-5 rounded-3xl bg-primary-700 px-6 py-14 text-center text-white sm:px-14">
            <h2 className="text-2xl font-bold sm:text-3xl">اولین قدم را همین امروز بردارید</h2>
            <p className="max-w-md text-sm leading-7 text-white/75">
              با تکمیل فرم ارزیابی پوست، مسیر مراقبتی اختصاصی خود را آغاز کنید.
            </p>
            <Button size="lg" className="bg-white text-primary-700 hover:bg-white/90" asChild>
              <Link href="/personalized-care/custom-routine">شروع ارزیابی رایگان</Link>
            </Button>
          </FadeIn>
        </Container>
      </Section>

      <Section tone="cream">
        <Container className="mx-auto max-w-2xl">
          <FadeIn>
            <MedicalDisclaimer />
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}