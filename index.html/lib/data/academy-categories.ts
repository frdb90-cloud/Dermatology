/*
  Shared category list for both Courses and Products filtering UIs.
  Kept independent from the two content arrays (rather than deriving
  categories only from existing items) so a category can be introduced
  before any course/product using it is added.
*/
export interface AcademyCategory {
  label: string;
  value: string;
}

export const courseCategories: AcademyCategory[] = [
  { label: "همه دسته‌ها", value: "all" },
  { label: "مراقبت از پوست", value: "مراقبت از پوست" },
  { label: "درمان‌های تخصصی", value: "درمان‌های تخصصی" },
  { label: "مراقبت از مو", value: "مراقبت از مو" },
  { label: "زیبایی و ضدپیری", value: "زیبایی و ضدپیری" },
];

export const productCategories: AcademyCategory[] = [
  { label: "همه دسته‌ها", value: "all" },
  { label: "راهنمای PDF", value: "راهنمای PDF" },
  { label: "پلنر قابل‌چاپ", value: "پلنر قابل‌چاپ" },
  { label: "چک‌لیست", value: "چک‌لیست" },
];