/**
 * Checks if a given string is a valid URL.
 * @param {string} url - The URL to validate.
 * @returns {boolean} true if the URL is valid, false otherwise.
 * @example
 * isValidUrl('https://example.com'); // true
 * isValidUrl('not-a-url'); // false
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};

/**
 * Converts a string to a URL and returns its string representation.
 * If the string is not a valid URL, attempts to prepend "https://" before converting.
 * @param {string} str - The string to convert to a URL.
 * @returns {string | null} The URL string representation or null if the string cannot be converted to a valid URL.
 * @example
 * getUrlFromString('example.com'); // 'https://example.com'
 * getUrlFromString('https://example.com'); // 'https://example.com'
 * getUrlFromString('not a url'); // null
 */
export const getUrlFromString = (str: string) => {
  if (isValidUrl(str)) return new URL(str).toString();
  try {
    if (str.includes(".") && !str.includes(" ")) {
      return new URL(`https://${str}`).toString();
    }
  } catch (e) {
    return null;
  }
};

/**
 * Extracts search parameters from a URL string and returns them as an object.
 * @param {string} url - The URL string.
 * @returns {Record<string, string>} An object containing the search parameters.
 * @example
 * getSearchParams('https://example.com?query=hello&sort=asc');
 * // { query: 'hello', sort: 'asc' }
 */
export const getSearchParams = (url: string): Record<string, string> => {
  let params = {} as Record<string, string>;
  new URL(url).searchParams.forEach(function (val, key) {
    params[key] = val;
  });
  return params;
};

/**
 * Extracts search parameters from a URL string and returns them as an object, excluding empty values.
 * @param {string} url - The URL string.
 * @returns {Record<string, string>} An object containing non-empty search parameters.
 * @example
 * getParamsFromURL('https://example.com?query=hello&sort=&page=1');
 * // { query: 'hello', page: '1' }
 */
export const getParamsFromURL = (url: string): Record<string, string> => {
  if (!url) return {};
  try {
    const params = new URL(url).searchParams;
    const paramsObj: Record<string, string> = {};
    for (const [key, value] of params.entries()) {
      if (value && value !== "") {
        paramsObj[key] = value;
      }
    }
    return paramsObj;
  } catch (e) {
    return {};
  }
};

/**
 * Constructs a new URL string by updating or removing specified UTM parameters from an existing URL string.
 * @param {string} url - The original URL string.
 * @param {Record<string, string>} utmParams - The UTM parameters to update or remove.
 * @returns {string} The modified URL string with updated or removed UTM parameters.
 * @example
 * constructURLFromUTMParams('https://example.com', { utm_source: 'twitter', utm_campaign: 'summer_sale' });
 * // 'https://example.com?utm_source=twitter&utm_campaign=summer_sale'
 */
export const constructURLFromUTMParams = (
  url: string,
  utmParams: Record<string, string>,
): string => {
  if (!url) return "";
  try {
    const newURL = new URL(url);
    for (const [key, value] of Object.entries(utmParams)) {
      if (value === "") {
        newURL.searchParams.delete(key);
      } else {
        newURL.searchParams.set(key, value);
      }
    }
    return newURL.toString();
  } catch (e) {
    return "";
  }
};

/**
 * Metadata describing common URL parameters for tracking and analytics.
 * @type {Array<{ display: string, key: string, examples: string }>}
 * @example
 * paramsMetadata.forEach(param => console.log(param.display));
 */
export const paramsMetadata = [
  { display: "Referral (ref)", key: "ref", examples: "twitter, facebook" },
  { display: "UTM Source", key: "utm_source", examples: "twitter, facebook" },
  { display: "UTM Medium", key: "utm_medium", examples: "social, email" },
  { display: "UTM Campaign", key: "utm_campaign", examples: "summer_sale" },
  { display: "UTM Term", key: "utm_term", examples: "blue_shoes" },
  { display: "UTM Content", key: "utm_content", examples: "logolink" },
];

/**
 * Removes UTM parameters from a given URL string.
 * @param {string} url - The URL string.
 * @returns {string} The URL string with UTM parameters removed.
 * @example
 * getUrlWithoutUTMParams('https://example.com?utm_source=twitter&utm_campaign=summer_sale');
 * // 'https://example.com'
 */
export const getUrlWithoutUTMParams = (url: string): string => {
  try {
    const newURL = new URL(url);
    paramsMetadata.forEach((param) => newURL.searchParams.delete(param.key));
    return newURL.toString();
  } catch (e) {
    return url;
  }
};
