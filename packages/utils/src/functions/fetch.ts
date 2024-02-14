/**
 * Performs a fetch operation with a timeout.
 * @param {RequestInfo | URL} input - The URL or Request object.
 * @param {RequestInit} [init] - Optional. The options for the fetch request.
 * @param {number} [timeout=5000] - Optional. The timeout duration in milliseconds (default is 5000ms).
 * @returns {Promise<Response>} A Promise that resolves with a Response object if the fetch is successful, or rejects with an error if the fetch fails or times out.
 * @example
 * // Perform a fetch request with a timeout of 3000ms
 * fetchWithTimeout("https://api.example.com/data", { method: "GET" }, 3000)
 *   .then(response => {
 *     console.log("Success:", response);
 *   })
 *   .catch(error => {
 *     console.error("Error:", error);
 *   });
 */
export function fetchWithTimeout(
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
  timeout: number = 5000,
) {
  return new Promise<Response>((resolve, reject) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
      reject(new Error("Request timed out"));
    }, timeout);
    fetch(input, { ...init, signal: controller.signal })
      .then((response) => {
        clearTimeout(timeoutId);
        resolve(response);
      })
      .catch((error) => {
        clearTimeout(timeoutId);
        reject(error);
      });
  });
}
