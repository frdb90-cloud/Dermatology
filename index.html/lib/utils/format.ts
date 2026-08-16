/**
 * Formats a number as Persian digits with thousands separators,
 * e.g. 149000 -> "۱۴۹,۰۰۰". Used across price displays (Product/Course cards).
 */
export function toPersianDigits(input: string | number): string {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return String(input).replace(/[0-9]/g, (d) => persianDigits[Number(d)]);
}

export function formatToman(amount: number): string {
  const withSeparators = amount.toLocaleString("en-US");
  return `${toPersianDigits(withSeparators)} تومان`;
}