/**
 * Formats a number into a short representation with optional decimal digits and full formatting.
 * @param {number} [num] - Optional. The number to format.
 * @param {{ digits?: number; full?: boolean }} [opts] - Optional. Options for formatting.
 * @param {number} [opts.digits=1] - Optional. The number of decimal digits to display (default is 1).
 * @param {boolean} [opts.full=false] - Optional. Whether to use full number formatting (default is false).
 * @returns {string} The formatted number string.
 * @example
 * // Format a number with default options
 * const shortNumber = nFormatter(1000);
 * console.log(shortNumber); // Output: "1K"
 *
 * // Format a number with 2 decimal digits and full formatting
 * const fullNumber = nFormatter(12345678, { digits: 2, full: true });
 * console.log(fullNumber); // Output: "12,345,678.00"
 */
export function nFormatter(
  num?: number,
  opts: { digits?: number; full?: boolean } = { digits: 1 },
): string {
  if (!num) return "0";
  if (opts.full) {
    return Intl.NumberFormat("en-US").format(num);
  }
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(opts.digits).replace(rx, "$1") + item.symbol
    : "0";
}
