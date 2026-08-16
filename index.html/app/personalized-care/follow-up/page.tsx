import type { Metadata } from "next";
import Link from "next/link";
import { CalendarClock, StickyNote, ImageIcon, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { TreatmentTimeline } from "@/components/shared/treatment-timeline";
import { MedicalDisclaimer } from "@/components/shared/medical-disclaimer";
import { mockTreatmentTimeline, mockNextAppointment } from "@/lib/data/treatment-timeline-mock";

export const metadata: Metadata = {
  title: "پیگیری درمان | مراقبت اختصاصی",
  description: "پیگیری روند درمان، یادداشت‌های پزشک، تصاویر پیشرفت و نوبت‌های بعدی.",
  openGraph: {
    title: "پیگیری درمان",
    description: "نمونه‌ی تجربه‌ی پیگیری درمان در پنل مراقبت اختصاصی.",
    type: "website",
  },
};

/*
  Public-facing PROTOTYPE of the follow-up experience — explicitly
  built on mock data (Phase 5 rule 4: "do not store real medical
  information... clearly mark mock/demo information"). The real,
  per-patient version of this UI will live behind auth inside the
  member dashboard, reusing this same TreatmentTimeline component.
*/
export default function FollowUpPage() {
  return (
    <Section>
      <Container>
        <SectionHeading
          title="پیگیری درمان"
          subtitle="نمونه‌ای از تجربه‌ی پیگیری روند درمان در مراقبت اختصاصی"
        />

        <div className="mx-auto mb-8 flex max-w-3xl items-center gap-3 rounded-2xl bg-accent/15 px-5 py-4 text-xs text-foreground">
          <Info className="h-4 w-4 shrink-0 text-accent-foreground" aria-hidden="true" />
          اطلاعات نمایش‌داده‌شده در این صفحه صرفاً نمونه (Demo) است و هیچ ارتباطی با پرونده‌ی پزشکی
          واقعی ندارد. نسخه‌ی واقعی این بخش پس از ورود به حساب کاربری و برای هر بیمار به‌صورت
          اختصاصی نمایش داده می‌شود.
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <FadeIn>
              <Card className="p-6 sm:p-8">
                <h2 className="mb-6 text-sm font-bold text-foreground">خط زمانی درمان (نمونه)</h2>
                <TreatmentTimeline steps={mockTreatmentTimeline} />
              </Card>
            </FadeIn>
          </div>

          <div className="flex flex-col gap-6">
            <FadeIn>
              <Card className="flex flex-col gap-4 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <CalendarClock className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-sm font-bold text-foreground">نوبت بعدی (نمونه)</h3>
                <dl className="flex flex-col gap-1.5 text-xs">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">تاریخ</dt>
                    <dd className="font-medium text-foreground">{mockNextAppointment.date}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">ساعت</dt>
                    <dd className="font-medium text-foreground">{mockNextAppointment.time}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">نوع نوبت</dt>
                    <dd className="font-medium text-foreground">{mockNextAppointment.type}</dd>
                  </div>
                </dl>
              </Card>
            </FadeIn>

            <FadeIn>
              <Card className="flex flex-col gap-3 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <StickyNote className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-sm font-bold text-foreground">یادداشت پزشک (نمونه)</h3>
                <p className="text-xs leading-6 text-muted-foreground">
                  «روند بهبود مطابق برنامه پیش می‌رود. تا جلسه بعد همان روتین تجویزی را ادامه دهید.»
                </p>
              </Card>
            </FadeIn>

            <FadeIn>
              <Card className="flex flex-col gap-3 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ImageIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-sm font-bold text-foreground">تصاویر روند پیشرفت (نمونه)</h3>
                <p className="text-xs leading-6 text-muted-foreground">
                  در نسخه‌ی نهایی، تصاویر مراحل مختلف درمان شما در این بخش قابل مشاهده خواهد بود.
                </p>
              </Card>
            </FadeIn>
          </div>
        </div>

        <FadeIn className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-5 rounded-3xl bg-primary-700 px-6 py-14 text-center text-white sm:px-14">
          <h2 className="text-2xl font-bold sm:text-3xl">می‌خواهید پیگیری اختصاصی داشته باشید؟</h2>
          <p className="max-w-md text-sm leading-7 text-white/75">
            با رزرو مشاوره یا عضویت در باشگاه اعضا، به پنل پیگیری درمان اختصاصی خود دسترسی پیدا کنید.
          </p>
          <Button size="lg" className="bg-white text-primary-700 hover:bg-white/90" asChild>
            <Link href="/personalized-care/consultation">رزرو مشاوره</Link>
          </Button>
        </FadeIn>

        <div className="mx-auto mt-10 max-w-2xl">
          <MedicalDisclaimer />
        </div>
      </Container>
    </Section>
  );
}