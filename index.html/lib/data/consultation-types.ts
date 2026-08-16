import type { LucideIcon } from "lucide-react";
import { MessageCircle, Video, Users } from "lucide-react";

/*
  Structured data for the consultation type selector on
  /personalized-care/consultation. Kept separate from the booking form
  component so pricing/duration can be adjusted without touching UI code.
*/
export interface ConsultationTypeData {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  duration: string;
  price: number;
}

export const consultationTypes: ConsultationTypeData[] = [
  {
    id: "text",
    title: "مشاوره متنی",
    icon: MessageCircle,
    description: "پرسش و پاسخ نوشتاری با بررسی تصاویر ارسالی",
    duration: "پاسخ تا ۲۴ ساعت",
    price: 250000,
  },
  {
    id: "video",
    title: "مشاوره ویدیویی",
    icon: Video,
    description: "گفتگوی تصویری آنلاین با پزشک در زمان رزرو‌شده",
    duration: "۲۰ دقیقه",
    price: 480000,
  },
  {
    id: "in-person",
    title: "مشاوره حضوری",
    icon: Users,
    description: "مراجعه حضوری به کلینیک برای بررسی دقیق‌تر",
    duration: "۳۰ دقیقه",
    price: 550000,
  },
];

export const availableDates = ["۱۴۰۵/۰۵/۲۰", "۱۴۰۵/۰۵/۲۱", "۱۴۰۵/۰۵/۲۲", "۱۴۰۵/۰۵/۲۳"];

export const availableTimes = ["۱۰:۰۰", "۱۱:۳۰", "۱۴:۰۰", "۱۶:۳۰", "۱۸:۰۰"];