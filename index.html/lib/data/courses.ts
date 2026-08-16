import type { LucideIcon } from "lucide-react";
import { Sparkles, Award, Droplets, ShieldCheck } from "lucide-react";

/*
  Replaces/extends Phase 2's popular-courses.ts. Same slugs and core
  fields are preserved (title, image, price, originalPrice, duration,
  level, slug) so the homepage AcademySection and the Phase 2 course
  stub page keep working untouched — only new optional fields were
  added for the full course-detail template in this phase.
*/
export interface CourseFaqItem {
  question: string;
  answer: string;
}

export interface CourseCurriculumItem {
  title: string;
  lessonsCount: number;
}

export interface CourseData {
  title: string;
  slug: string;
  image: string;
  category: string;
  price: number;
  originalPrice?: number;
  duration: string;
  level: string;
  format: string;
  lessonsCount: number;
  instructor: string;
  shortDescription: string;
  metaDescription: string;
  overview: string;
  learningPoints: string[];
  curriculum: CourseCurriculumItem[];
  requirements: string[];
  faqs: CourseFaqItem[];
  icon: LucideIcon;
  featured?: boolean;
}

export const courses: CourseData[] = [
  {
    title: "دوره مراقبت از پوست",
    slug: "skincare-routine",
    image:
      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=800&auto=format&fit=crop",
    category: "مراقبت از پوست",
    price: 980000,
    duration: "۶ ساعت",
    level: "مقدماتی",
    format: "ویدیویی + کتابچه همراه",
    lessonsCount: 12,
    instructor: "دکتر سارا رفیعی",
    shortDescription: "اصول علمی ساخت روتین پوستی متناسب با نوع پوست",
    metaDescription:
      "دوره آموزشی مراقبت از پوست شامل اصول علمی روتین روزانه، انتخاب محصول و مراقبت پوستی متناسب با نوع پوست.",
    overview:
      "این دوره برای افرادی طراحی شده که می‌خواهند یک روتین مراقبت پوستی اصولی و متناسب با نوع پوست خود بسازند، بدون نیاز به آزمون‌وخطای مکرر.",
    learningPoints: [
      "شناخت نوع پوست خود",
      "ترتیب صحیح استفاده از محصولات",
      "انتخاب محصولات متناسب با نیاز پوست",
      "اصلاح اشتباهات رایج در مراقبت روزانه",
    ],
    curriculum: [
      { title: "آشنایی با انواع پوست", lessonsCount: 3 },
      { title: "اصول پاکسازی و مرطوب‌کردن", lessonsCount: 4 },
      { title: "محافظت در برابر آفتاب", lessonsCount: 2 },
      { title: "ساخت روتین شخصی‌سازی‌شده", lessonsCount: 3 },
    ],
    requirements: ["نیازی به دانش قبلی نیست", "دسترسی به اینترنت برای مشاهده ویدیوها"],
    faqs: [
      {
        question: "این دوره برای چه سطحی مناسب است؟",
        answer: "این دوره برای مبتدیان طراحی شده و نیازی به دانش قبلی ندارد.",
      },
      {
        question: "آیا گواهی پایان دوره ارائه می‌شود؟",
        answer: "بله، پس از تکمیل دوره گواهی شرکت در دوره صادر می‌شود.",
      },
    ],
    icon: Sparkles,
    featured: true,
  },
  {
    title: "دوره درمان آکنه",
    slug: "acne-treatment",
    image:
      "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=800&auto=format&fit=crop",
    category: "درمان‌های تخصصی",
    price: 780000,
    originalPrice: 980000,
    duration: "۴ ساعت",
    level: "پیشرفته",
    format: "ویدیویی",
    lessonsCount: 9,
    instructor: "دکتر سارا رفیعی",
    shortDescription: "شناخت علمی انواع آکنه و رویکردهای مراقبتی",
    metaDescription:
      "دوره آموزشی تخصصی آکنه شامل شناخت علل، انواع و رویکردهای مراقبتی علمی برای مدیریت بهتر آکنه.",
    overview:
      "در این دوره به‌صورت علمی و کاربردی با علل شایع آکنه و رویکردهای مراقبتی روزمره آشنا می‌شوید.",
    learningPoints: [
      "شناخت انواع آکنه",
      "عوامل تشدیدکننده آکنه",
      "اصول مراقبتی روزانه برای پوست مستعد آکنه",
      "زمان مناسب برای مراجعه به متخصص",
    ],
    curriculum: [
      { title: "آشنایی با آکنه و انواع آن", lessonsCount: 3 },
      { title: "عوامل تشدیدکننده و سبک زندگی", lessonsCount: 3 },
      { title: "اصول مراقبتی روزانه", lessonsCount: 3 },
    ],
    requirements: ["آشنایی مقدماتی با مفاهیم مراقبت پوستی توصیه می‌شود"],
    faqs: [
      {
        question: "آیا این دوره جایگزین ویزیت پزشک است؟",
        answer:
          "خیر، این دوره صرفاً جنبه آموزشی دارد و جایگزین معاینه و تشخیص پزشک متخصص نیست.",
      },
    ],
    icon: ShieldCheck,
  },
  {
    title: "دوره مراقبت از مو",
    slug: "hair-care",
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop",
    category: "مراقبت از مو",
    price: 480000,
    duration: "۳ ساعت",
    level: "مقدماتی",
    format: "ویدیویی",
    lessonsCount: 7,
    instructor: "دکتر سارا رفیعی",
    shortDescription: "اصول علمی نگهداری و تقویت سلامت مو",
    metaDescription: "دوره آموزشی مراقبت از مو با رویکرد علمی برای بهبود سلامت و ظاهر مو.",
    overview: "این دوره اصول اولیه و علمی مراقبت روزانه از مو را آموزش می‌دهد.",
    learningPoints: [
      "شناخت انواع مو و کف سر",
      "انتخاب محصولات مناسب مو",
      "اشتباهات رایج در شست‌وشو و نگهداری مو",
    ],
    curriculum: [
      { title: "آشنایی با ساختار مو و کف سر", lessonsCount: 2 },
      { title: "اصول شست‌وشو و مراقبت روزانه", lessonsCount: 3 },
      { title: "تغذیه و سبک زندگی مؤثر بر سلامت مو", lessonsCount: 2 },
    ],
    requirements: ["نیازی به دانش قبلی نیست"],
    faqs: [
      {
        question: "آیا این دوره ریزش مو را درمان می‌کند؟",
        answer:
          "این دوره جنبه آموزشی دارد و برای درمان اختصاصی ریزش مو باید با پزشک متخصص مشورت شود.",
      },
    ],
    icon: Droplets,
  },
  {
    title: "دوره ضد پیری",
    slug: "anti-aging",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    category: "زیبایی و ضدپیری",
    price: 1380000,
    duration: "۸ ساعت",
    level: "تکمیلی",
    format: "ویدیویی + کتابچه همراه",
    lessonsCount: 15,
    instructor: "دکتر سارا رفیعی",
    shortDescription: "رویکردهای علمی به کاهش نشانه‌های پیری پوست",
    metaDescription:
      "دوره تکمیلی ضدپیری پوست با رویکرد علمی برای شناخت و کاهش نشانه‌های پیری پوست.",
    overview:
      "این دوره تکمیلی به بررسی علمی نشانه‌های پیری پوست و رویکردهای مراقبتی و درمانی مرتبط می‌پردازد.",
    learningPoints: [
      "شناخت مکانیسم پیری پوست",
      "نقش آنتی‌اکسیدان‌ها و ترکیبات مؤثر",
      "آشنایی با روش‌های درمانی رایج",
    ],
    curriculum: [
      { title: "مکانیسم‌های پیری پوست", lessonsCount: 5 },
      { title: "ترکیبات مؤثر در مراقبت ضدپیری", lessonsCount: 5 },
      { title: "آشنایی با روش‌های درمانی تکمیلی", lessonsCount: 5 },
    ],
    requirements: ["گذراندن دوره مراقبت از پوست توصیه می‌شود"],
    faqs: [
      {
        question: "آیا نتایج این دوره برای همه یکسان است؟",
        answer: "خیر، نتایج بسته به شرایط فردی متفاوت است و این دوره جنبه آموزشی دارد.",
      },
    ],
    icon: Award,
  },
];