"use client";

import Link from "next/link";
import {
  LayoutGrid,
  GraduationCap,
  Package,
  Bookmark,
  Sparkles,
  MessageCircle,
  Activity,
  Bell,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";

const sidebarItems = [
  { id: "overview", label: "نمای کلی", icon: LayoutGrid },
  { id: "courses", label: "دوره‌های من", icon: GraduationCap },
  { id: "products", label: "محصولات دیجیتال من", icon: Package },
  { id: "articles", label: "مقالات ذخیره‌شده", icon: Bookmark },
  { id: "routine", label: "روتین پوستی", icon: Sparkles },
  { id: "consultations", label: "تاریخچه مشاوره", icon: MessageCircle },
  { id: "follow-up", label: "پیگیری درمان", icon: Activity },
  { id: "notifications", label: "اعلان‌ها", icon: Bell },
  { id: "settings", label: "تنظیمات حساب", icon: Settings },
];

/*
  Client Component: the active section is local UI state (in-page
  scroll-to/tab switch), not a route change — dashboard sections are
  anchors within one page rather than separate routes, matching a
  typical member-dashboard UX. Fully collapses to a horizontal
  scrollable bar on mobile instead of an off-canvas drawer, since the
  dashboard already has its own distinct chrome (MemberHeader) rather
  than reusing the public site's mobile Modal nav.
*/
export function DashboardSidebar({
  activeSection,
  onSectionChange,
}: {
  activeSection: string;
  onSectionChange: (id: string) => void;
}) {
  return (
    <nav
      aria-label="منوی پنل کاربری"
      className="flex gap-1 overflow-x-auto rounded-2xl bg-white p-2 shadow-soft lg:flex-col lg:overflow-visible"
    >
      {sidebarItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSectionChange(item.id)}
            className={cn(
              "flex shrink-0 items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-xs font-medium transition-colors lg:text-sm",
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="whitespace-nowrap">{item.label}</span>
          </button>
        );
      })}
      <Link
        href="/personalized-care"
        className="mt-2 hidden rounded-xl px-3.5 py-2.5 text-xs text-muted-foreground transition-colors hover:bg-muted lg:block"
      >
        بازگشت به مراقبت اختصاصی
      </Link>
    </nav>
  );
}