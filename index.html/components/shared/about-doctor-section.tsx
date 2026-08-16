import Link from "next/link";
import Image from "next/image";
import { Award, ShieldCheck, Gem, Clock, ArrowLeft, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/shared/fade-in";
import { doctor } from "@/lib/data/doctor";

const CREDENTIAL_ICONS: Record<string, LucideIcon> = {
  award: Award,
  "shield-check": ShieldCheck,
  gem: Gem,
  clock: Clock,
};

export function AboutDoctorSection() {
  return (
    <Section tone="muted">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <FadeIn className="relative order-2 mx-auto aspect-[4/5] w-full max-w-md lg:order-1">
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-secondary/50" />
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-card-hover">
            <Image
              src={doctor.photo}
              alt={doctor.name}
              fill
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover"
            />
          </div>
        </FadeIn>

        <FadeIn className="order-1 flex flex-col items-center gap-6 text-center lg:order-2 lg:items-start lg:text-right">
          <span className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            درباره دکتر
          </span>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{doctor.name}</h2>
          <p className="text-sm font-medium text-muted-foreground">{doctor.title}</p>
          <p className="max-w-lg text-sm leading-8 text-muted-foreground sm:text-base">
            {doctor.bio}
          </p>

          <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
            {doctor.credentials.map((item) => {
              const Icon = CREDENTIAL_ICONS[item.icon];
              return (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2 rounded-xl bg-white p-4 text-center shadow-soft"
                >
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span className="text-xs font-medium text-foreground">{item.label}</span>
                </div>
              );
            })}
          </div>

          <Button variant="outline" size="lg" asChild>
            <Link href="/about">
              بیشتر بدانید
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
        </FadeIn>
      </Container>
    </Section>
  );
}