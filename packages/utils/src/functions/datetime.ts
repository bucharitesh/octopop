/**
 * Returns a string representing the local date and time in ISO format, based on the provided timestamp or the current date and time if no timestamp is provided.
 * @category datetime
 * @param {Date} [timestamp] - Optional. The timestamp for which to retrieve the local date and time.
 * @returns {string} A string representing the local date and time in ISO format (e.g., "2022-02-17T12:30").
 * @example
 * // Returns the current date and time in ISO format
 * getDateTimeLocal();
 *
 * // Returns the local date and time in ISO format for the provided timestamp
 * getDateTimeLocal(new Date("2022-02-17T12:30:00Z"));
 */
export const getDateTimeLocal = (timestamp?: Date): string => {
  const d = timestamp ? new Date(timestamp) : new Date();
  if (d.toString() === "Invalid Date") return "";
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000)
    .toISOString()
    .split(":")
    .slice(0, 2)
    .join(":");
};

/**
 * Formats the provided date string to a localized date format.
 * @category datetime

 * @param {string} dateString - The date string to format (in ISO format).
 * @returns {string} The formatted date string in the "month day, year" format (e.g., "February 17, 2022").
 * @example
 * // Returns "February 17, 2022"
 * formatDate("2022-02-17");
 */
export const formatDate = (dateString: string): string => {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
};

/**
 * Calculates the first and last day of the current month based on the provided day.
 * @category datetime

 * @param {number} day - The day of the month to use for calculation.
 * @returns {{ firstDay: Date, lastDay: Date }} An object containing the first and last day of the month.
 * @example
 * // Returns the first and last day of the current month based on the provided day
 * getFirstAndLastDay(15);
 */
export const getFirstAndLastDay = (
  day: number,
): { firstDay: Date; lastDay: Date } => {
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  if (currentDay >= day) {
    // if the current day is greater than the target day, it means that we just passed it
    return {
      firstDay: new Date(currentYear, currentMonth, day),
      lastDay: new Date(currentYear, currentMonth + 1, day - 1),
    };
  } else {
    // if the current day is less than the target day, it means that we haven't passed it yet
    const lastYear = currentMonth === 0 ? currentYear - 1 : currentYear; // if the current month is January, we need to go back a year
    const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1; // if the current month is January, we need to go back to December
    return {
      firstDay: new Date(lastYear, lastMonth, day),
      lastDay: new Date(currentYear, currentMonth, day - 1),
    };
  }
};

/**
 * Returns the last day of the current month.
 * @category datetime

 * @returns {number} The last day of the current month.
 * @example
 * // Returns the last day of the current month
 * getLastDayOfMonth();
 */
export const getLastDayOfMonth = (): number => {
  const today = new Date();
  const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0); // This will give the last day of the current month
  return lastDay.getDate();
};
