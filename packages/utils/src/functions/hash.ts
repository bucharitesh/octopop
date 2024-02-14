/**
 * Generates an MD5 hash for the given message.
 * @param {string} message - The message to hash.
 * @returns {Promise<string>} A Promise that resolves with the hexadecimal MD5 hash of the message.
 * @example
 * // Generate an MD5 hash for a message
 * generateMD5Hash("Hello, world!")
 *   .then(hash => {
 *     console.log("MD5 Hash:", hash);
 *   })
 *   .catch(error => {
 *     console.error("Error:", error);
 *   });
 */
export async function generateMD5Hash(message: string): Promise<string> {
  // Convert the message string to a Uint8Array
  const encoder = new TextEncoder();
  const data = encoder.encode(message);

  // Generate the hash using the SubtleCrypto interface
  const hashBuffer = await crypto.subtle.digest("MD5", data);

  // Convert the hash to a hexadecimal string
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  return hashHex;
}
