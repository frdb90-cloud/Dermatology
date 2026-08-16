export interface DigitalProductData {
  title: string;
  image: string;
  price: number;
  slug: string;
}

export const digitalProducts: DigitalProductData[] = [
  {
    title: "راهنمای کامل ضد آفتاب",
    image:
      "https://images.unsplash.com/photo-1556228720-da4e83b57739?q=80&w=800&auto=format&fit=crop",
    price: 149000,
    slug: "sunscreen-guide",
  },
  {
    title: "پلنر روتین پوستی",
    image:
      "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800&auto=format&fit=crop",
    price: 169000,
    slug: "skincare-planner",
  },
  {
    title: "راهنمای درمان لک",
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=800&auto=format&fit=crop",
    price: 219000,
    slug: "pigmentation-guide",
  },
  {
    title: "چک‌لیست مراقبت پوست",
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35bc9430c3?q=80&w=800&auto=format&fit=crop",
    price: 99000,
    slug: "skincare-checklist",
  },
];