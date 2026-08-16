/*
  MOCK DATA ONLY — none of this represents a real user or real medical
  record. Every dashboard section reads from here so the eventual
  real-backend integration only means replacing these exports with API
  calls; no dashboard component needs to change shape.
*/
export const mockProfile = {
  name: "مریم احمدی",
  email: "maryam.ahmadi@example.com",
  phone: "0912***4567",
  avatar:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
  memberSince: "۱۴۰۴/۰۲/۱۰",
  membershipTier: "عضو باشگاه",
};

export const mockMyCourses = [
  { title: "دوره مراقبت از پوست", progress: 80, slug: "skincare-routine" },
  { title: "دوره درمان آکنه", progress: 35, slug: "acne-treatment" },
];

export const mockMyProducts = [
  { title: "راهنمای کامل ضد آفتاب", slug: "sunscreen-guide" },
  { title: "پلنر روتین پوستی", slug: "skincare-planner" },
];

export const mockSavedArticles = [
  { title: "چگونه نوع پوست خود را تشخیص دهیم؟", slug: "skin-type-guide" },
  { title: "۵ اشتباه رایج در مراقبت پوستی", slug: "common-mistakes" },
];

export const mockConsultationHistory = [
  { date: "۱۴۰۵/۰۴/۱۲", type: "مشاوره متنی", status: "پاسخ‌داده‌شده" },
  { date: "۱۴۰۵/۰۳/۰۲", type: "مشاوره ویدیویی", status: "برگزار‌شده" },
];

export const mockNotifications = [
  { title: "نوبت بعدی پیگیری شما نزدیک است", date: "۲ روز پیش" },
  { title: "محتوای آموزشی جدید منتشر شد", date: "۵ روز پیش" },
];