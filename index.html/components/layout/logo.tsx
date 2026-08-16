import Link from "next/link";
import { Sparkle } from "lucide-react";

/*
  Standalone Logo component so Header (and future Footer/mobile-nav)
  reuse the exact same mark instead of duplicating markup.
*/
export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="دکتر سارا رفیعی - صفحه اصلی">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Sparkle className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="hidden flex-col leading-tight sm:flex">
        <span className="text-base font-bold text-foreground">دکتر سارا رفیعی</span>
        <span className="text-xs text-muted-foreground">متخصص پوست، مو و زیبایی</span>
      </span>
    </Link>
  );
}