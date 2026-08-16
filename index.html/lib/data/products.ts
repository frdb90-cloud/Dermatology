/*
  Replaces/extends Phase 2's digital-products.ts. Core fields (title,
  image, price, slug) are unchanged so any existing usage keeps working;
  new fields support the full product-detail template.
*/
export interface DigitalProductData {
  title: string;
  slug: string;
  image: string;
  category: string;
  price: number;
  format: string;
  fileCount: string;
  shortDescription: string;
  metaDescription: string;
  description: string;
  whatsIncluded: string[];
  whoIsItFor: string[];
  featured?: boolean;
}

export const digitalProducts: DigitalProductData[] = [
  {
    title: "راهنمای کامل ضد آفتاب",
    slug: "sunscreen-guide",
    image:
      "https://images.unsplash.com/photo-1556228720-da4e83b57739?q=80&w=800&auto=format&fit=crop",
    category: "راهنمای PDF",
    price: 149000,
    format: "PDF قابل‌دانلود",
    fileCount: "۲۴ صفحه",
    shortDescription: "راهنمای انتخاب و استفاده صحیح از ضد آفتاب",
    metaDescription: "راهنمای PDF کامل انتخاب ضد آفتاب مناسب بر اساس نوع پوست و نیاز روزانه.",
    description:
      "این راهنما به‌صورت ساده و کاربردی، اصول انتخاب و استفاده‌ی صحیح از ضد آفتاب را برای انواع پوست توضیح می‌دهد.",
    whatsIncluded: [
      "معرفی انواع SPF و کاربرد هرکدام",
      "راهنمای انتخاب بر اساس نوع پوست",
      "نکات استفاده صحیح روزانه",
    ],
    whoIsItFor: ["افرادی که در انتخاب ضد آفتاب مناسب مردد هستند", "علاقه‌مندان به مراقبت پوستی اصولی"],
    featured: true,
  },
  {
    title: "پلنر روتین پوستی",
    slug: "skincare-planner",
    image:
      "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800&auto=format&fit=crop",
    category: "پلنر قابل‌چاپ",
    price: 169000,
    format: "PDF قابل‌چاپ",
    fileCount: "۱۲ صفحه",
    shortDescription: "پلنر هفتگی برای پیگیری روتین مراقبت پوستی",
    metaDescription: "پلنر قابل‌چاپ پیگیری روزانه و هفتگی روتین مراقبت از پوست.",
    description:
      "این پلنر به شما کمک می‌کند روتین صبح و شب خود را به‌صورت منظم پیگیری کرده و در طول زمان تغییرات پوست را رصد کنید.",
    whatsIncluded: ["جدول پیگیری روزانه روتین", "بخش یادداشت تغییرات پوست", "چک‌لیست هفتگی"],
    whoIsItFor: ["افرادی که به‌دنبال نظم‌دهی به روتین پوستی خود هستند"],
  },
  {
    title: "راهنمای درمان لک",
    slug: "pigmentation-guide",
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=800&auto=format&fit=crop",
    category: "راهنمای PDF",
    price: 219000,
    format: "PDF قابل‌دانلود",
    fileCount: "۳۲ صفحه",
    shortDescription: "آشنایی با انواع لک پوستی و مراقبت‌های مرتبط",
    metaDescription: "راهنمای جامع PDF آشنایی با انواع لک‌های پوستی و اصول مراقبتی مرتبط.",
    description:
      "در این راهنما انواع رایج لک‌های پوستی، علل بروز آن‌ها و اصول کلی مراقبتی به‌زبان ساده توضیح داده شده است.",
    whatsIncluded: [
      "معرفی انواع لک پوستی",
      "عوامل تشدیدکننده رایج",
      "اصول کلی مراقبت روزانه",
    ],
    whoIsItFor: ["افرادی که به‌دنبال شناخت اولیه لک‌های پوستی خود هستند"],
  },
  {
    title: "چک‌لیست مراقبت پوست",
    slug: "skincare-checklist",
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35bc9430c3?q=80&w=800&auto=format&fit=crop",
    category: "چک‌لیست",
    price: 99000,
    format: "PDF قابل‌چاپ",
    fileCount: "۶ صفحه",
    shortDescription: "چک‌لیست سریع مراحل مراقبت روزانه و شبانه",
    metaDescription: "چک‌لیست قابل‌چاپ مراحل مراقبت روزانه و شبانه پوست.",
    description: "یک چک‌لیست کوتاه و کاربردی برای یادآوری مراحل روتین صبح و شب.",
    whatsIncluded: ["چک‌لیست روتین صبح", "چک‌لیست روتین شب", "یادآوری‌های هفتگی"],
    whoIsItFor: ["افرادی که به دنبال ابزاری ساده برای پیگیری روتین هستند"],
  },
];