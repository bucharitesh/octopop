import { customAlphabet } from "nanoid";

/**
 * Generates a random alphanumeric string using the nanoid library.
 * @param {number} [chars=7] - Optional. The number of characters in the generated string (default is 7).
 * @returns {string} A random alphanumeric string.
 * @example
 * // Generate a 7-character random string
 * const randomString = nanoid();
 * console.log(randomString);
 *
 * // Generate a 10-character random string
 * const longerRandomString = nanoid(10);
 * console.log(longerRandomString);
 */
export const nanoid = (chars?: number): string => {
  return customAlphabet(
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    chars || 7, // 7-character random string by default
  )();
};
