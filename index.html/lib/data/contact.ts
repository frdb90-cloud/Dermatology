import type { LucideIcon } from "lucide-react";
import { Instagram, Send, Phone as PhoneIcon } from "lucide-react";

/*
  Single centralized source for all clinic contact details (Phase 7
  rule 4) — Header/Footer/ClinicInfo/Contact page all read from here,
  so updating the real phone/address/hours later means editing exactly
  this one file.
*/
export interface SocialLink {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const contactInfo = {
  address: "[آدرس کلینیک — استان، شهر، خیابان، پلاک]",
  phone: "[شماره تلفن کلینیک]",
  mobile: "[شماره موبایل/پیامکی کلینیک]",
  email: "info@example.com",
  workingHours: [
    { day: "شنبه تا چهارشنبه", hours: "۹:۰۰ تا ۱۸:۰۰" },
    { day: "پنجشنبه", hours: "۹:۰۰ تا ۱۴:۰۰" },
    { day: "جمعه", hours: "تعطیل" },
  ],
  mapAddressLabel: "[آدرس کلینیک روی نقشه]",
};

export const socialLinks: SocialLink[] = [
  { icon: Instagram, label: "اینستاگرام", href: "https://instagram.com" },
  { icon: Send, label: "تلگرام", href: "https://t.me" },
  { icon: PhoneIcon, label: "واتساپ", href: "https://wa.me" },
];