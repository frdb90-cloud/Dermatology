export interface NavLinkItem {
  label: string;
  href: string;
}

/*
  PHASE 5 UPDATE — Personalized Care now has real pages, so its nav
  entry stays pointed at /personalized-care (already correct since
  Phase 3) and no longer needs any placeholder. This file replaces the
  Phase 3 version at the same path (lib/data/nav-links.ts); Header.tsx
  needs no changes since it already imports NAV_LINKS from here.
*/
export const NAV_LINKS: NavLinkItem[] = [
  { label: "خانه", href: "/" },
  { label: "کلینیک", href: "/clinic" },
  { label: "خدمات کلینیک", href: "/clinic/services" },
  { label: "رزرو نوبت", href: "/clinic/appointment" },
  { label: "آکادمی", href: "/academy" },
  { label: "مراقبت اختصاصی", href: "/personalized-care" },
  { label: "مجله", href: "/blog" },
  { label: "درباره ما", href: "/about" },
  { label: "تماس با ما", href: "/contact" },
];