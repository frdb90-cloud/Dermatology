export interface ArticleData {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  slug: string;
}

export const latestArticles: ArticleData[] = [
  {
    title: "چگونه ضد آفتاب مناسب پوست خود را انتخاب کنیم؟",
    excerpt: "راهنمای کامل انتخاب SPF مناسب برای انواع پوست در فصل‌های مختلف سال.",
    image:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=800&auto=format&fit=crop",
    category: "مراقبت از پوست",
    slug: "how-to-choose-sunscreen",
  },
  {
    title: "همه چیز درباره ریزش مو",
    excerpt: "علل شایع ریزش مو در زنان و مردان و روش‌های علمی درمان آن.",
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop",
    category: "درمان مو",
    slug: "everything-about-hair-loss",
  },
  {
    title: "رتینول چیست و چگونه استفاده کنیم؟",
    excerpt: "نحوه‌ی صحیح شروع روتین رتینول بدون آسیب به پوست.",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop",
    category: "مراقبت از پوست",
    slug: "retinol-guide",
  },
  {
    title: "۵ اشتباه رایج در مراقبت از پوست",
    excerpt: "اشتباهاتی که ممکن است بدون آگاهی، به پوست شما آسیب بزنند.",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop",
    category: "نکات تخصصی",
    slug: "common-skincare-mistakes",
  },
];