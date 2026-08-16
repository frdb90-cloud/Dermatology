"use client";

import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/shared/fade-in";

export function NewsletterSection() {
  return (
    <Section tone="cream">
      <Container>
        <FadeIn className="mx-auto flex max-w-2xl flex-col items-center gap-5 rounded-3xl bg-primary-700 px-6 py-14 text-center text-white sm:px-14">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
            <Mail className="h-6 w-6" aria-hidden="true" />
          </span>
          <h2 className="text-2xl font-bold sm:text-3xl">در جریان جدیدترین مطالب باشید</h2>
          <p className="max-w-md text-sm leading-7 text-white/75">
            با عضویت در خبرنامه، آموزش‌های تخصصی پوست و مو، تخفیف‌های ویژه و اخبار آکادمی را زودتر از همه دریافت کنید.
          </p>
          <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <label htmlFor="newsletter-hero-email" className="sr-only">
              ایمیل
            </label>
            <input
              id="newsletter-hero-email"
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              className="h-12 flex-1 rounded-full border border-white/20 bg-white/10 px-5 text-sm text-white placeholder:text-white/60 focus-visible:border-white/60 focus-visible:outline-none"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-white text-primary-700 hover:bg-white/90"
            >
              عضویت در خبرنامه
            </Button>
          </form>
        </FadeIn>
      </Container>
    </Section>
  );
}