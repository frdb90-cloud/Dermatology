export interface TestimonialData {
  name: string;
  image: string;
  rating: number;
  text: string;
}

export const testimonials: TestimonialData[] = [
  {
    name: "مریم احمدی",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    text: "بعد از سال‌ها دست‌وپنجه نرم کردن با آکنه، بالاخره با دکتر رفیعی درمان شدم. برخورد حرفه‌ای و نتیجه فوق‌العاده بود.",
  },
  {
    name: "نگار حسینی",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    text: "مشاوره آنلاین خیلی دقیق و قابل‌اعتماد بود. روتین پیشنهادی دقیقاً برای پوست من طراحی شده بود.",
  },
  {
    name: "علی کریمی",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    text: "دوره‌های آکادمی دکتر رفیعی محتوای بسیار علمی و کاربردی دارند. یکی از بهترین سرمایه‌گذاری‌هایم بود.",
  },
];