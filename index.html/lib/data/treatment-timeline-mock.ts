/*
  MOCK DEMO DATA — clearly not real patient records. Powers both the
  public-facing /personalized-care/follow-up prototype and the
  dashboard's follow-up preview card from one shared source.
*/
export interface TimelineStep {
  date: string;
  title: string;
  status: "completed" | "current" | "upcoming";
  note?: string;
}

export const mockTreatmentTimeline: TimelineStep[] = [
  {
    date: "۱۴۰۵/۰۳/۰۱",
    title: "جلسه ارزیابی اولیه",
    status: "completed",
    note: "بررسی وضعیت پوست و تدوین برنامه اولیه درمان",
  },
  {
    date: "۱۴۰۵/۰۳/۲۰",
    title: "شروع دوره درمانی",
    status: "completed",
    note: "آغاز مصرف محصولات تجویزی طبق برنامه",
  },
  {
    date: "۱۴۰۵/۰۴/۱۵",
    title: "پیگیری میان‌دوره",
    status: "current",
    note: "بررسی روند بهبود و تنظیم برنامه در صورت نیاز",
  },
  {
    date: "۱۴۰۵/۰۵/۱۰",
    title: "جلسه ارزیابی نهایی",
    status: "upcoming",
  },
];

export const mockNextAppointment = {
  date: "۱۴۰۵/۰۵/۱۰",
  time: "۱۶:۳۰",
  type: "پیگیری حضوری",
};