import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { personalizedCareItems } from "@/lib/data/personalized-care-items";

export function PersonalizedCareSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          title="مراقبت اختصاصی شما"
          subtitle="ابزارها و خدماتی که تجربه‌ی درمان را شخصی‌سازی‌شده، پیوسته و قابل‌پیگیری می‌کنند"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {personalizedCareItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={index * 0.08}>
                <Card className="flex h-full flex-col items-center gap-4 p-7 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                  <p className="flex-1 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link href={item.href}>
                      {item.buttonLabel}
                      <ArrowLeft className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}