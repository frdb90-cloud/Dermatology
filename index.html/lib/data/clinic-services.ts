import type { LucideIcon } from "lucide-react";
import {
  Sparkle,
  Scissors,
  Syringe,
  Award,
  Droplets,
  Zap,
  MessageCircle,
  Gem,
} from "lucide-react";

export interface ClinicServiceData {
  icon: LucideIcon;
  title: string;
  slug: string;
}

export const clinicServices: ClinicServiceData[] = [
  { icon: Sparkle, title: "درمان جای جوش و اسکار", slug: "acne-scars" },
  { icon: Scissors, title: "درمان لک و پیگمنتیشن", slug: "pigmentation" },
  { icon: Droplets, title: "جوانسازی و لیفت", slug: "skin-rejuvenation" },
  { icon: Syringe, title: "تزریق ژل و بوتاکس", slug: "botox-filler" },
  { icon: Award, title: "درمان ریزش مو", slug: "hair-loss" },
  { icon: Gem, title: "درمان آکنه", slug: "acne" },
  { icon: Zap, title: "لیزر درمانی", slug: "laser" },
  { icon: MessageCircle, title: "مشاوره پوستی", slug: "consultation" },
];