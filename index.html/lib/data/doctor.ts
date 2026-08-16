import type { LucideIcon } from "lucide-react";
import { GraduationCap, Award, Stethoscope, Heart } from "lucide-react";

/*
  Centralized doctor profile data — every field the real clinic owner
  will eventually fill in with verified information lives here, in one
  place, instead of being scattered across JSX in the About page.
  No real credentials/awards are invented (Phase 7 rule 1 & 13);
  fields without confirmed real content use an explicit placeholder
  string so it's obvious to both future editors and site visitors that
  this is not yet finalized information.
*/
export interface DoctorEducationItem {
  degree: string;
  institution: string;
  year: string;
}

export interface DoctorExpertiseItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const doctorProfile = {
  name: "[نام و نام خانوادگی پزشک]",
  title: "متخصص پوست، مو و زیبایی",
  photo: "", // TODO: real professional photograph to be added by the clinic
  introduction:
    "این متن معرفی، جایگزین موقت است. معرفی نهایی پزشک شامل مسیر تخصصی، رویکرد درمانی و سابقه فعالیت، پس از تأیید کلینیک در این بخش قرار خواهد گرفت.",
  philosophy:
    "رویکرد این کلینیک بر پایه ارزیابی دقیق، آموزش بیمار و انتخاب درمان متناسب با شرایط فردی هر فرد است؛ نه ارائه راه‌حل یکسان برای همه.",
};

export const doctorEducation: DoctorEducationItem[] = [
  { degree: "دکترای پزشکی عمومی", institution: "[نام دانشگاه]", year: "[سال]" },
  { degree: "تخصص پوست، مو و زیبایی", institution: "[نام دانشگاه]", year: "[سال]" },
];

export const doctorExpertise: DoctorExpertiseItem[] = [
  {
    icon: Stethoscope,
    title: "پوست درمانی",
    description: "تشخیص و مدیریت بیماری‌های پوستی مانند آکنه، اگزما و مشکلات التهابی",
  },
  {
    icon: Heart,
    title: "پوست زیبایی",
    description: "درمان‌های زیبایی پوست شامل لک، پیری زودرس و بهبود بافت پوست",
  },
  {
    icon: GraduationCap,
    title: "مو و ریزش مو",
    description: "ارزیابی و مدیریت انواع ریزش مو و مشکلات پوست سر",
  },
  {
    icon: Award,
    title: "لیزر و زیبایی",
    description: "روش‌های لیزری و زیبایی مبتنی بر ارزیابی تخصصی پوست",
  },
];

export const doctorCertifications = [
  "[گواهی/عضویت حرفه‌ای — در انتظار تأیید و درج اطلاعات رسمی]",
];