import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Concatenates multiple class values into a single string, using Tailwind CSS and clsx.
 * @category css
 * @param {...ClassValue[]} inputs - The class values to be concatenated.
 * @returns {string} A string containing the concatenated class names.
 * @example
 * // Returns "text-red-500 font-bold"
 * cn("text-red-500", { "font-bold": true });
 *
 * // Returns "text-lg text-green-500"
 * cn("text-lg", "text-green-500");
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
