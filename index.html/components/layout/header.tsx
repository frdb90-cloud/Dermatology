"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, User } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { Modal, ModalTrigger, ModalContent } from "@/components/ui/modal";
import { cn } from "@/lib/utils/cn";
import { NAV_LINKS } from "@/lib/data/nav-links";

/*
  PHASE 3 UPDATE — the Phase 1 local NAV_LINKS array has been removed.
  Links now come from lib/data/nav-links.ts (the single source of truth
  also usable by other parts of the app), so every Clinic route added
  in Phase 3 (services catalog, appointment) is live in both the
  desktop nav and the mobile drawer without touching this file's JSX,
  styling, scroll behavior, or Modal structure — all of which are
  unchanged from Phase 1.
*/
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-border/60 bg-background/95 backdrop-blur-sm transition-shadow",
        scrolled && "shadow-header"
      )}
    >
      <div className="container flex h-20 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="منوی اصلی" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="primary" size="md" asChild>
            <Link href="/personalized-care/consultation">رزرو نوبت</Link>
          </Button>
          <Button variant="outline" size="md" asChild>
            <Link href="/personalized-care/members">
              <User className="h-4 w-4" aria-hidden="true" />
              ورود اعضا
            </Link>
          </Button>
        </div>

        <Modal>
          <ModalTrigger asChild>
            <button
              className="flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted lg:hidden"
              aria-label="باز کردن منو"
            >
              <Menu className="h-6 w-6" />
            </button>
          </ModalTrigger>
          <ModalContent className="right-0 top-0 h-full max-h-none w-[86vw] max-w-sm -translate-x-0 -translate-y-0 rounded-none rounded-l-2xl sm:right-0 left-auto data-[state=open]:animate-fade-in">
            <nav aria-label="منوی موبایل" className="mt-10 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
              <Button asChild size="lg">
                <Link href="/personalized-care/consultation">رزرو نوبت</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/personalized-care/members">
                  <User className="h-4 w-4" aria-hidden="true" />
                  ورود اعضا
                </Link>
              </Button>
            </div>
          </ModalContent>
        </Modal>
      </div>
    </header>
  );
}