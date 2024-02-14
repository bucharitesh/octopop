import ms from "ms";

/**
 * Returns a string representing the time elapsed since the provided timestamp.
 * @param {Date | null} timestamp - The timestamp to calculate the time ago from.
 * @param {{ withAgo?: boolean }} [options] - Optional. Options for formatting.
 * @param {boolean} [options.withAgo] - Optional. Whether to include "ago" in the output (default is false).
 * @returns {string} A string representing the time elapsed.
 * @example
 * // Get the time elapsed since a timestamp without "ago"
 * const timeElapsed = timeAgo(new Date("2022-02-17T12:30:00Z"));
 * console.log(timeElapsed); // Output: "1d"
 *
 * // Get the time elapsed since a timestamp with "ago"
 * const timeElapsedWithAgo = timeAgo(new Date("2022-02-17T12:30:00Z"), { withAgo: true });
 * console.log(timeElapsedWithAgo); // Output: "1d ago"
 */
export const timeAgo = (
  timestamp: Date | null,
  {
    withAgo,
  }: {
    withAgo?: boolean;
  } = {},
): string => {
  if (!timestamp) return "Never";
  const diff = Date.now() - new Date(timestamp).getTime();
  if (diff < 1000) {
    // less than 1 second
    return "Just now";
  } else if (diff > 82800000) {
    // more than 23 hours – similar to how Twitter displays timestamps
    return new Date(timestamp).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year:
        new Date(timestamp).getFullYear() !== new Date().getFullYear()
          ? "numeric"
          : undefined,
    });
  }
  return `${ms(diff)}${withAgo ? " ago" : ""}`;
};
