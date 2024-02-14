/**
 * Truncates a string to a specified length, adding ellipsis if necessary.
 * @param {string | null} str - The string to truncate.
 * @param {number} length - The maximum length of the truncated string.
 * @returns {string | null} The truncated string or the original string if its length is less than or equal to the specified length.
 * @example
 * // Truncate a string to a maximum length of 10 characters
 * const truncatedString = truncate("Lorem ipsum dolor sit amet", 10);
 * console.log(truncatedString); // Output: "Lorem ipsu..."
 */
export const truncate = (str: string | null, length: number): string | null => {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length - 3)}...`;
};
