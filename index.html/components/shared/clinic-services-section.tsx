import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ServiceCard } from "@/components/shared/service-card";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { clinicServices } from "@/lib/data/clinic-services";

export function ClinicServicesSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          title="خدمات تخصصی مطب"
          subtitle="مجموعه‌ای از خدمات درمانی و زیبایی تخصصی پوست، مو و صورت با بهره‌گیری از دستگاه‌های روز دنیا"
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {clinicServices.map((service, index) => (
            <FadeIn key={service.slug} delay={(index % 4) * 0.06}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                href={`/clinic/services/${service.slug}`}
              />
            </FadeIn>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/clinic/services">
              مشاهده همه خدمات
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}