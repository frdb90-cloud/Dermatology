import Link from "next/link";
import { SearchX, Home, Stethoscope, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

/*
  app/not-found.tsx — Next.js special file, automatically rendered for
  any unmatched route (App Router convention, no manual wiring needed
  anywhere else). Uses only existing design-system primitives
  (Button/Section/Container) so it visually matches every other page.
*/
const helpfulLinks = [
  { label: "صفحه اصلی", href: "/", icon: Home },
  { label: "کلینیک", href: "/clinic", icon: Stethoscope },
  { label: "مجله", href: "/blog", icon: BookOpen },
];

export default function NotFound() {
  return (
    <Section>
      <Container className="flex flex-col items-center gap-6 py-16 text-center">
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
          <SearchX className="h-9 w-9" aria-hidden="true" />
        </span>
        <div>
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">۴۰۴</h1>
          <h2 className="mt-2 text-lg font-bold text-foreground sm:text-xl">صفحه مورد نظر پیدا نشد</h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-muted-foreground">
          ممکن است آدرس اشتباه وارد شده باشد یا این صفحه حذف یا جابه‌جا شده باشد. می‌توانید از طریق
          لینک‌های زیر به بخش‌های اصلی سایت بروید.
        </p>

        <Button size="lg" asChild>
          <Link href="/">بازگشت به صفحه اصلی</Link>
        </Button>

        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {helpfulLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                {link.label}
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}