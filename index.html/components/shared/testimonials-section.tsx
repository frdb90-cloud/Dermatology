import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { testimonials } from "@/lib/data/testimonials";

export function TestimonialsSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          title="نظرات بیماران"
          subtitle="تجربه‌ی واقعی افرادی که مسیر درمان و مراقبت پوستی خود را با ما طی کرده‌اند"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.1}>
              <Card className="flex h-full flex-col gap-5 p-7">
                <Quote className="h-7 w-7 text-primary/25" aria-hidden="true" />
                <p className="flex-1 text-sm leading-8 text-muted-foreground">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-3 border-t border-border pt-5">
                  <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 text-right">
                    <p className="text-sm font-bold text-foreground">{testimonial.name}</p>
                    <div className="mt-0.5 flex items-center gap-0.5">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}