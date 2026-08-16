import type { LucideIcon } from "lucide-react";
import { BookOpen, Gift, Sparkles, Clock, Percent, MessageSquare } from "lucide-react";

export interface MembershipBenefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const membershipBenefits: MembershipBenefit[] = [
  {
    icon: BookOpen,
    title: "محتوای آموزشی اختصاصی",
    description: "دسترسی به مقالات و ویدیوهای آموزشی که فقط برای اعضا منتشر می‌شود",
  },
  {
    icon: Percent,
    title: "تخفیف در دوره‌ها و محصولات",
    description: "تخفیف ویژه اعضا برای خرید دوره‌های آکادمی و محصولات دیجیتال",
  },
  {
    icon: Clock,
    title: "اولویت در رزرو نوبت",
    description: "دسترسی زودتر به زمان‌های خالی مشاوره و نوبت‌دهی",
  },
  {
    icon: Sparkles,
    title: "منابع شخصی‌سازی‌شده",
    description: "روتین و پیشنهادهای مراقبتی متناسب با پروفایل پوستی شما",
  },
  {
    icon: Gift,
    title: "محصولات ویژه اعضا",
    description: "دسترسی به برخی محصولات دیجیتال که فقط برای اعضای باشگاه منتشر می‌شود",
  },
  {
    icon: MessageSquare,
    title: "پیگیری اختصاصی‌تر",
    description: "امکان ثبت یادداشت و پیگیری روند درمان در پنل کاربری اختصاصی",
  },
];