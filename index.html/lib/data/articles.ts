/*
  Article content lives entirely in this file, separate from every
  rendering component (ArticleDetail, ArticleGrid, etc.) — swapping this
  local array for a CMS/database call later means only this file (or its
  import) changes; no UI component needs to know the difference.
  `content` is an ordered block array so ArticleDetail can render
  semantic HTML (headings, paragraphs, images) without dangerouslySetInnerHTML.
*/
export type ArticleContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "list"; items: string[] };

export interface ArticleData {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readingTime: string;
  coverImage: string;
  featured: boolean;
  content: ArticleContentBlock[];
  metaDescription: string;
}

export const articles: ArticleData[] = [
  {
    id: "1",
    slug: "how-to-identify-skin-type",
    title: "چگونه نوع پوست خود را به‌درستی تشخیص دهیم؟",
    excerpt:
      "شناخت دقیق نوع پوست، پایه‌ی هر روتین مراقبتی درست است. در این مقاله روش‌های ساده تشخیص نوع پوست را می‌آموزید.",
    category: "skin-care",
    author: "دکتر متخصص پوست و مو",
    authorRole: "متخصص پوست، مو و زیبایی",
    date: "۱۴۰۵/۰۴/۰۵",
    readingTime: "۶ دقیقه",
    coverImage:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    metaDescription:
      "روش‌های علمی و ساده برای تشخیص نوع پوست (چرب، خشک، مختلط، حساس) و اهمیت آن در انتخاب محصولات مراقبتی.",
    content: [
      {
        type: "paragraph",
        text: "پیش از انتخاب هر محصول مراقبتی، دانستن نوع پوست ضروری است. بسیاری از مشکلات پوستی از استفاده نادرست محصولات نامتناسب با نوع پوست ناشی می‌شود.",
      },
      { type: "heading", text: "انواع اصلی پوست" },
      {
        type: "list",
        items: [
          "پوست چرب: براقیت بیش‌ازحد، منافذ باز و استعداد آکنه",
          "پوست خشک: احساس کشیدگی، پوسته‌پوسته‌شدن و کدری",
          "پوست مختلط: چربی در ناحیه T و خشکی در گونه‌ها",
          "پوست حساس: قرمزی، سوزش و واکنش سریع به محصولات جدید",
        ],
      },
      { type: "heading", text: "روش ساده تشخیص در خانه" },
      {
        type: "paragraph",
        text: "صورت خود را با یک پاک‌کننده ملایم بشویید و به مدت یک ساعت هیچ محصولی استفاده نکنید. سپس وضعیت پوست را از نظر چربی، خشکی یا کشیدگی بررسی کنید.",
      },
      {
        type: "paragraph",
        text: "توجه داشته باشید که این روش صرفاً یک ارزیابی اولیه است و برای تشخیص دقیق و برنامه‌ریزی درمانی، مراجعه به متخصص پوست توصیه می‌شود.",
      },
    ],
  },
  {
    id: "2",
    slug: "common-skincare-mistakes",
    title: "۵ اشتباه رایج در مراقبت پوستی که باید بشناسید",
    excerpt: "بسیاری از مشکلات پوستی نتیجه‌ی عادت‌های نادرست روزمره هستند، نه کمبود محصول مناسب.",
    category: "skin-care",
    author: "دکتر متخصص پوست و مو",
    authorRole: "متخصص پوست، مو و زیبایی",
    date: "۱۴۰۵/۰۳/۲۲",
    readingTime: "۵ دقیقه",
    coverImage:
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    metaDescription: "پنج اشتباه رایج در روتین مراقبت پوستی و راهکار اصلاح هرکدام.",
    content: [
      {
        type: "paragraph",
        text: "خیلی از افراد با وجود استفاده از محصولات باکیفیت، همچنان از نتیجه‌ی مراقبت پوستی خود راضی نیستند. دلیل اصلی معمولاً عادت‌های نادرست است، نه خودِ محصولات.",
      },
      { type: "heading", text: "اشتباهات رایج" },
      {
        type: "list",
        items: [
          "عدم استفاده روزانه از ضدآفتاب، حتی در هوای ابری",
          "استفاده بیش‌ازحد از لایه‌بردار و آسیب به سد پوستی",
          "نادیده گرفتن مرطوب‌کننده در پوست‌های چرب",
          "تغییر مکرر محصولات پیش از دیدن نتیجه واقعی",
          "دست‌زدن مکرر به صورت در طول روز",
        ],
      },
      {
        type: "paragraph",
        text: "اصلاح این عادت‌ها معمولاً تاثیر بیشتری نسبت به افزودن محصول جدید به روتین دارد.",
      },
    ],
  },
  {
    id: "3",
    slug: "acne-causes-and-management",
    title: "علل آکنه و اصول کلی مدیریت آن",
    excerpt: "آکنه یک بیماری پوستی چندعاملی است. آشنایی با علل آن به انتخاب رویکرد درمانی مناسب کمک می‌کند.",
    category: "acne",
    author: "دکتر متخصص پوست و مو",
    authorRole: "متخصص پوست، مو و زیبایی",
    date: "۱۴۰۵/۰۳/۱۰",
    readingTime: "۷ دقیقه",
    coverImage:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    metaDescription: "بررسی علل شایع آکنه و اصول کلی مدیریت آن با رویکرد علمی.",
    content: [
      {
        type: "paragraph",
        text: "آکنه نتیجه ترکیبی از افزایش ترشح چربی، انسداد منافذ، فعالیت باکتریایی و التهاب است. عوامل هورمونی، ژنتیکی و محیطی نیز در شدت آن نقش دارند.",
      },
      { type: "heading", text: "عوامل موثر" },
      {
        type: "list",
        items: [
          "نوسانات هورمونی به‌ویژه در دوران بلوغ و قاعدگی",
          "استفاده از محصولات کومدوژنیک",
          "استرس و کیفیت پایین خواب",
          "برخی عادات غذایی در افراد مستعد",
        ],
      },
      {
        type: "paragraph",
        text: "درمان آکنه باید بر اساس شدت و نوع آن و توسط پزشک تعیین شود. خوددرمانی طولانی‌مدت می‌تواند منجر به بدتر شدن وضعیت پوست یا ایجاد اسکار شود.",
      },
    ],
  },
  {
    id: "4",
    slug: "hair-loss-early-signs",
    title: "علائم اولیه ریزش مو که نباید نادیده گرفت",
    excerpt: "تشخیص زودهنگام ریزش مو، شانس موفقیت درمان را به‌طور قابل‌توجهی افزایش می‌دهد.",
    category: "hair",
    author: "دکتر متخصص پوست و مو",
    authorRole: "متخصص پوست، مو و زیبایی",
    date: "۱۴۰۵/۰۲/۲۸",
    readingTime: "۶ دقیقه",
    coverImage:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    metaDescription: "شناخت علائم اولیه ریزش مو و اهمیت مراجعه زودهنگام به متخصص.",
    content: [
      {
        type: "paragraph",
        text: "ریزش طبیعی روزانه مو (حدود ۵۰ تا ۱۰۰ تار) طبیعی است، اما برخی الگوها می‌توانند نشانه‌ی یک مشکل زمینه‌ای باشند.",
      },
      { type: "heading", text: "نشانه‌های قابل‌توجه" },
      {
        type: "list",
        items: [
          "نازک‌شدن تدریجی موها در نواحی خاص",
          "افزایش محسوس مو روی بالش یا حین شانه‌زدن",
          "بزرگ‌شدن فرق سر",
          "ریزش موضعی و ناگهانی",
        ],
      },
      {
        type: "paragraph",
        text: "علل ریزش مو متنوع است، از عوامل ژنتیکی تا کمبودهای تغذیه‌ای و بیماری‌های زمینه‌ای. تشخیص دقیق نیازمند معاینه تخصصی و در صورت لزوم آزمایش است.",
      },
    ],
  },
  {
    id: "5",
    slug: "sunscreen-guide-everything-to-know",
    title: "راهنمای کامل ضدآفتاب: هرآنچه باید بدانید",
    excerpt: "ضدآفتاب یکی از موثرترین ابزارهای پیشگیری از پیری زودرس پوست و برخی مشکلات پوستی است.",
    category: "anti-aging",
    author: "دکتر متخصص پوست و مو",
    authorRole: "متخصص پوست، مو و زیبایی",
    date: "۱۴۰۵/۰۲/۱۵",
    readingTime: "۸ دقیقه",
    coverImage:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1200&auto=format&fit=crop",
    featured: true,
    metaDescription: "راهنمای جامع انتخاب و استفاده صحیح از ضدآفتاب برای انواع پوست.",
    content: [
      {
        type: "paragraph",
        text: "اشعه فرابنفش خورشید یکی از اصلی‌ترین عوامل پیری زودرس پوست، لک و افزایش خطر برخی مشکلات پوستی است. استفاده روزانه از ضدآفتاب مناسب، ساده‌ترین اقدام پیشگیرانه است.",
      },
      { type: "heading", text: "نکات انتخاب ضدآفتاب" },
      {
        type: "list",
        items: [
          "SPF حداقل ۳۰ برای استفاده روزمره",
          "پوشش طیف‌گسترده (UVA و UVB)",
          "فرمولاسیون متناسب با نوع پوست (ژلی، فلوئید یا کرمی)",
          "تمدید مصرف هر ۲ تا ۳ ساعت در مواجهه طولانی با آفتاب",
        ],
      },
      {
        type: "paragraph",
        text: "هیچ ضدآفتابی محافظت صددرصدی ایجاد نمی‌کند؛ ترکیب آن با سایر روش‌های محافظت مانند پوشش مناسب و اجتناب از ساعات پیک تابش توصیه می‌شود.",
      },
    ],
  },
  {
    id: "6",
    slug: "melasma-and-hyperpigmentation-basics",
    title: "ملاسما و پیگمانتاسیون: علل و اصول مواجهه با آن",
    excerpt: "لکه‌های پوستی می‌توانند دلایل متعددی داشته باشند؛ شناخت نوع لک، اولین گام رویکرد درمانی درست است.",
    category: "pigmentation",
    author: "دکتر متخصص پوست و مو",
    authorRole: "متخصص پوست، مو و زیبایی",
    date: "۱۴۰۵/۰۱/۳۰",
    readingTime: "۷ دقیقه",
    coverImage:
      "https://images.unsplash.com/photo-1591343395902-1adfb1a3e94b?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    metaDescription: "آشنایی با علل ملاسما و پیگمانتاسیون پوستی و رویکردهای کلی مواجهه با آن.",
    content: [
      {
        type: "paragraph",
        text: "ملاسما نوعی تیرگی پوستی است که معمولاً در نواحی در معرض آفتاب مانند صورت دیده می‌شود و در برخی افراد با نوسانات هورمونی ارتباط دارد.",
      },
      { type: "heading", text: "عوامل تشدیدکننده" },
      {
        type: "list",
        items: [
          "قرارگیری در معرض نور خورشید بدون محافظت",
          "تغییرات هورمونی (بارداری، مصرف قرص‌های ضدبارداری)",
          "التهاب یا آسیب پوستی قبلی",
        ],
      },
      {
        type: "paragraph",
        text: "درمان لک‌های پوستی زمان‌بر است و نتیجه در افراد مختلف متفاوت خواهد بود. ارزیابی تخصصی برای تعیین نوع دقیق لک، پیش از شروع هر رویکرد درمانی ضروری است.",
      },
    ],
  },
];