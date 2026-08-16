export interface CourseData {
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  duration: string;
  level: string;
  slug: string;
}

export const popularCourses: CourseData[] = [
  {
    title: "دوره مراقبت از پوست",
    image:
      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=800&auto=format&fit=crop",
    price: 980000,
    duration: "۶ ساعت",
    level: "مقدماتی",
    slug: "skincare-routine",
  },
  {
    title: "دوره درمان آکنه",
    image:
      "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=800&auto=format&fit=crop",
    price: 780000,
    originalPrice: 980000,
    duration: "۴ ساعت",
    level: "پیشرفته",
    slug: "acne-treatment",
  },
  {
    title: "دوره مراقبت از مو",
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop",
    price: 480000,
    duration: "۳ ساعت",
    level: "مقدماتی",
    slug: "hair-care",
  },
  {
    title: "دوره ضد پیری",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    price: 1380000,
    duration: "۸ ساعت",
    level: "تکمیلی",
    slug: "anti-aging",
  },
];