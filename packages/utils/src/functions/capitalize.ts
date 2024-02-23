/**
 * Capitalizes the first letter of a string.
 * If the input is not a string or is null, returns it as is.
 * @category string_utils
 * @param {string | null} [str] - The input string.
 * @returns {string | null} The capitalized string or null if the input is null.
 * @example
 * // Returns "Hello"
 * capitalize("hello");
 *
 * // Returns "World"
 * capitalize("World");
 *
 * // Returns null
 * capitalize(null);
 */
export function capitalize(str?: string | null) {
  if (!str || typeof str !== "string") return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}
