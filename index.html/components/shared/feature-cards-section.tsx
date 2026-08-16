import { FeatureCard } from "@/components/shared/feature-card";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/shared/fade-in";
import { homeFeatureCards } from "@/lib/data/home-feature-cards";

export function FeatureCardsSection() {
  return (
    <Section className="relative -mt-8 sm:-mt-12">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {homeFeatureCards.map((card, index) => (
            <FadeIn key={card.title} delay={index * 0.1}>
              <FeatureCard {...card} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}