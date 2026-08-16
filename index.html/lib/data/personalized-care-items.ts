import type { LucideIcon } from "lucide-react";
import { Crown, ClipboardCheck, Video, UserCircle2 } from "lucide-react";

export interface PersonalizedCareItem {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
}

export const personalizedCareItems: PersonalizedCareItem[] = [
  {
    icon: Crown,
    title: "باشگاه اعضا",
    description: "محتوای اختصاصی، تخفیف‌ها و وبینارهای ویژه اعضا",
    buttonLabel: "عضویت در باشگاه",
    href: "/personalized-care/members",
  },
  {
    icon: ClipboardCheck,
    title: "پیگیری درمان",
    description: "ارسال وضعیت و دریافت توصیه‌های درمانی از پزشک",
    buttonLabel: "پیگیری درمان",
    href: "/personalized-care/follow-up",
  },
  {
    icon: Video,
    title: "مشاوره آنلاین",
    description: "مشاوره تصویری با دکتر از طریق تماس ویدیویی امن",
    buttonLabel: "رزرو مشاوره",
    href: "/personalized-care/consultation",
  },
  {
    icon: UserCircle2,
    title: "روتین پوستی اختصاصی",
    description: "روتینی بر اساس نوع پوست و نیاز شما طراحی می‌شود",
    buttonLabel: "شروع روتین من",
    href: "/personalized-care/custom-routine",
  },
];