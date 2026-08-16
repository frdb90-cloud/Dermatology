import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind class names safely, resolving conflicts
 * (e.g. "p-2" vs "p-4") in favor of the last one.
 * Used by every UI primitive to allow className overrides from parents.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}