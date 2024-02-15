/**
 * This is the doc comment for file1.ts
 *
 * @packageDocumentation
 */

import { isValidUrl } from "./urls";

/**
 * Regular expression for validating a domain.
 */
export const validDomainRegex = new RegExp(
  /^([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
);

/**
 * Regular expression for validating a key.
 */
export const validKeyRegex = new RegExp(/^[0-9A-Za-z\u0080-\uFFFF\/\-]*$/u);

/**
 * Regular expression for validating a slug.
 */
export const validSlugRegex = new RegExp(/^[a-zA-Z0-9\-]+$/);

/**
 * Gets the subdomain from a domain name.
 * @category domain
 * @param {string} name - The domain name.
 * @param {string} apexName - The apex domain name.
 * @returns {string | null} The subdomain, or null if the name is equal to the apexName.
 * @example
 * getSubdomain('sub.example.com', 'example.com'); // 'sub'
 * getSubdomain('example.com', 'example.com'); // null
 * getSubdomain('www.example.com', 'example.com'); // 'www'
 */
export const getSubdomain = (name: string, apexName: string): string | null => {
  if (name === apexName) return null;
  return name.slice(0, name.length - apexName.length - 1);
};

/**
 * Gets the domain without "www." from a URL.
 * @category domain
 * @param {string} url - The URL.
 * @returns {string | null} The domain without "www.", or null if the URL is not valid.
 * @example
 * getDomainWithoutWWW('https://www.example.com'); // 'example.com'
 * getDomainWithoutWWW('http://sub.example.com'); // 'sub.example.com'
 * getDomainWithoutWWW('invalid url'); // null
 */
export const getDomainWithoutWWW = (url: string) => {
  if (isValidUrl(url)) {
    return new URL(url).hostname.replace(/^www\./, "");
  }
  try {
    if (url.includes(".") && !url.includes(" ")) {
      return new URL(`https://${url}`).hostname.replace(/^www\./, "");
    }
  } catch (e) {
    return null;
  }
};
