import type { LucideIcon } from "lucide-react";
import {
  Droplet,
  Flame,
  Scissors,
  Clock3,
  Sparkles,
  Zap,
  CircleDot,
  HeartPulse,
  Stethoscope,
  Leaf,
} from "lucide-react";

/*
  Single source of truth for blog categories — same pattern as
  courseCategories/productCategories in Academy (Phase 4). The `value`
  field doubles as both the filter key and the category label stored on
  each ArticleData item, so adding a category here is the only step
  needed before it can be assigned to articles and appear in filters.
*/
export interface BlogCategoryData {
  value: string;
  label: string;
  icon: LucideIcon;
}

export const blogCategories: BlogCategoryData[] = [
  { value: "skin-care", label: "مراقبت پوستی", icon: Droplet },
  { value: "acne", label: "آکنه", icon: Flame },
  { value: "hair", label: "مو و ریزش مو", icon: Scissors },
  { value: "anti-aging", label: "ضدپیری", icon: Clock3 },
  { value: "cosmetic-dermatology", label: "پوست زیبایی", icon: Sparkles },
  { value: "laser-aesthetic", label: "لیزر و زیبایی", icon: Zap },
  { value: "pigmentation", label: "لک و پیگمنتیشن", icon: CircleDot },
  { value: "skin-health", label: "سلامت پوست", icon: HeartPulse },
  { value: "medical-dermatology", label: "پوست درمانی", icon: Stethoscope },
  { value: "lifestyle", label: "سبک زندگی و پوست", icon: Leaf },
];

export const categoryFilterOptions = [
  { value: "all", label: "همه" },
  ...blogCategories.map((c) => ({ value: c.value, label: c.label })),
];