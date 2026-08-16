import type { Metadata } from "next";
import Link from "next/link";
import { User, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { MedicalDisclaimer } from "@/components/shared/medical-disclaimer";
import { JsonLd, buildPhysicianJsonLd } from "@/components/shared/json-ld";
import {
  doctorProfile,
  doctorEducation,
  doctorExpertise,
  doctorCertifications,
} from "@/lib/data/doctor";

export const metadata: Metadata = {
  title: "درباره پزشک | معرفی، تخصص و رویکرد درمانی",
  description: "آشنایی با تخصص، تحصیلات، حوزه‌های فعالیت و رویکرد درمانی پزشک کلینیک.",
  openGraph: {
    title: "درباره پزشک",
    description: "معرفی تخصصی پزشک کلینیک و رویکرد درمانی.",
    type: "website",
  },
};

/*
  AUDIT FIX (Phase 8): the expertise-card icon badge used the invalid
  `h-4.5 w-4.5` class from Phase 7 — same defect as the blog overview
  page, fixed the same way (→ `h-5 w-5`), now consistent with every
  other icon-badge card across the site.
  Also added the page-level Physician JSON-LD here (Phase 8 rule 7) in
  addition to the site-wide one in the root layout, since /about is the
  most relevant page for a Physician entity to be scoped to.
*/
export default function AboutPage() {
  return (
    <>
      <JsonLd data={buildPhysicianJsonLd()} />

      <Section className="pb-0">
        <Container>
          <FadeIn className="flex flex-col items-center gap-6 text-center">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-primary/10 text-primary">
              <User className="h-10 w-10" aria-hidden="true" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground sm:text-2xl">{doctorProfile.name}</h1>
              <p className="mt-1 text-sm text-primary">{doctorProfile.title}</p>
            </div>
            <p className="max-w-xl text-sm leading-8 text-muted-foreground sm:text-base">
              {doctorProfile.introduction}
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section>
        <Container className="mx-auto max-w-3xl">
          <FadeIn>
            <Card className="p-8">
              <h2 className="mb-3 text-lg font-bold text-foreground">فلسفه درمانی کلینیک</h2>
              <p className="text-sm leading-8 text-muted-foreground">{doctorProfile.philosophy}</p>
            </Card>
          </FadeIn>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading title="حوزه‌های تخصصی" subtitle="زمینه‌های اصلی فعالیت پزشک" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {doctorExpertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={index * 0.06}>
                  <Card className="flex h-full flex-col items-start gap-3 p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                    <p className="text-xs leading-6 text-muted-foreground">{item.description}</p>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="mx-auto max-w-3xl">
          <SectionHeading title="تحصیلات و سوابق تخصصی" subtitle="مسیر آموزشی و تخصصی پزشک" />
          <FadeIn>
            <Card className="flex flex-col gap-5 p-8">
              {doctorEducation.map((item) => (
                <div key={item.degree} className="flex items-start justify-between gap-4 border-b border-border/70 pb-5 last:border-0 last:pb-0">
                  <div>
                    <h3 className="text-sm font-bold text-foreground">{item.degree}</h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">{item.institution}</p>
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground">{item.year}</span>
                </div>
              ))}
            </Card>
          </FadeIn>
        </Container>
      </Section>

      <Section tone="muted">
        <Container className="mx-auto max-w-3xl">
          <FadeIn>
            <Card className="flex flex-col gap-4 p-8">
              <div className="flex items-center gap-2.5">
                <Award className="h-5 w-5 text-primary" aria-hidden="true" />
                <h2 className="text-base font-bold text-foreground">گواهی‌ها و عضویت‌های حرفه‌ای</h2>
              </div>
              <ul className="flex flex-col gap-2">
                {doctorCertifications.map((cert) => (
                  <li key={cert} className="text-xs leading-6 text-muted-foreground">
                    {cert}
                  </li>
                ))}
              </ul>
            </Card>
          </FadeIn>
        </Container>
      </Section>

      <Section>
        <Container>
          <FadeIn className="mx-auto flex max-w-2xl flex-col items-center gap-5 rounded-3xl bg-primary-700 px-6 py-14 text-center text-white sm:px-14">
            <h2 className="text-2xl font-bold sm:text-3xl">آماده شروع مسیر درمانی خود هستید؟</h2>
            <p className="max-w-md text-sm leading-7 text-white/75">
              می‌توانید نوبت حضوری رزرو کنید یا مسیر مراقبت اختصاصی خود را آنلاین آغاز کنید.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="bg-white text-primary-700 hover:bg-white/90" asChild>
                <Link href="/clinic/appointment">رزرو نوبت حضوری</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10" asChild>
                <Link href="/personalized-care">مراقبت اختصاصی</Link>
              </Button>
            </div>
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