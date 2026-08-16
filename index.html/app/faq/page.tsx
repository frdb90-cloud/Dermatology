"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { ArticleSearch } from "@/components/shared/article-search";
import { MedicalDisclaimer } from "@/components/shared/medical-disclaimer";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { faqCategories } from "@/lib/data/faq";

/*
  Client Component only because of the optional search box (Phase 7
  rule 2: "only if it improves UX without unnecessary complexity") —
  filtering is a simple client-side substring match over the static
  faqCategories array, no separate state per category needed.
  Reuses the existing Accordion primitive as required; metadata for
  this route lives in the sibling layout.tsx.
*/
export default function FaqPage() {
  const [query, setQuery] = useState("");

  const filteredCategories = useMemo(() => {
    if (query.trim().length === 0) return faqCategories;
    const q = query.toLowerCase();
    return faqCategories
      .map((category) => ({
        ...category,
        items: category.items.filter(
          (item) => item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q)
        ),
      }))
      .filter((category) => category.items.length > 0);
  }, [query]);

  return (
    <Section>
      <Container className="mx-auto max-w-3xl">
        <SectionHeading title="سوالات متداول" subtitle="پاسخ به پرتکرارترین سوالات درباره خدمات کلینیک" />

        <div className="mb-8">
          <ArticleSearch value={query} onChange={setQuery} placeholder="جستجو در سوالات..." />
        </div>

        {filteredCategories.length === 0 ? (
          <p className="py-16 text-center text-sm text-muted-foreground">نتیجه‌ای پیدا نشد.</p>
        ) : (
          <div className="flex flex-col gap-10">
            {filteredCategories.map((category) => (
              <div key={category.id}>
                <h2 className="mb-4 text-base font-bold text-foreground">{category.title}</h2>
                <Accordion type="single" collapsible className="flex flex-col gap-3">
                  {category.items.map((item, index) => (
                    <AccordionItem
                      key={item.question}
                      value={`${category.id}-${index}`}
                      className="rounded-2xl border border-border bg-white px-5"
                    >
                      <AccordionTrigger className="text-right text-sm font-medium text-foreground">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-xs leading-7 text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12">
          <MedicalDisclaimer />
        </div>
      </Container>
    </Section>
  );
}