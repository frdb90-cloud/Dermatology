import type { LucideIcon } from "lucide-react";
import { Sparkles, GraduationCap, ShoppingBag } from "lucide-react";

export interface FeatureCardData {
  icon: LucideIcon;
  title: string;
  points: string[];
  buttonLabel: string;
  href: string;
  variant: "primary" | "accent" | "secondary";
}

export const homeFeatureCards: FeatureCardData[] = [
  {
    icon: Sparkles,
    title: "مراقبت اختصاصی",
    points: ["روتین پوستی اختصاصی شما", "مشاوره آنلاین", "پیگیری درمان", "باشگاه اعضا"],
    buttonLabel: "شروع کنید",
    href: "/personalized-care",
    variant: "primary",
  },
  {
    icon: GraduationCap,
    title: "آکادمی",
    points: ["دوره‌های آموزشی آنلاین", "محصولات دیجیتال", "مقالات و آموزش‌های رایگان"],
    buttonLabel: "مشاهده دوره‌ها",
    href: "/academy",
    variant: "accent",
  },
  {
    icon: ShoppingBag,
    title: "کلینیک",
    points: ["معرفی دکتر و تیم درمان", "خدمات تخصصی مطب", "رزرو نوبت حضوری"],
    buttonLabel: "مشاهده خدمات",
    href: "/clinic/services",
    variant: "secondary",
  },
];