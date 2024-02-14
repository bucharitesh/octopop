/**
 * Interface representing an error object with an additional status property.
 */
interface SWRError extends Error {
  /**
   * The HTTP status code associated with the error.
   */
  status: number;
}

/**
 * Performs a fetch operation and returns the response data as JSON.
 * Throws an error if the response is not successful (HTTP status code other than 2xx).
 * @param {RequestInfo} input - The URL or Request object.
 * @param {RequestInit} [init] - Optional. The options for the fetch request.
 * @returns {Promise<JSON>} A Promise that resolves with the response data as JSON if the fetch is successful, or rejects with a SWRError if the fetch fails or the response is not successful.
 * @template JSON - The type of the JSON response data.
 * @example
 * // Perform a fetch request to retrieve JSON data
 * fetcher<Data>("https://api.example.com/data", { method: "GET" })
 *   .then(data => {
 *     console.log("Data:", data);
 *   })
 *   .catch(error => {
 *     console.error("Error:", error);
 *   });
 */
export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const res = await fetch(input, init);

  if (!res.ok) {
    const error = await res.text();
    const err = new Error(error) as SWRError;
    err.status = res.status;
    throw err;
  }

  return res.json();
}
