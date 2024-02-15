/**
 * Constructs a link based on the provided parameters.
 * @category urls
 * @param {object} options - The options object.
 * @param {string} options.domain - The domain to use in the link.
 * @param {string} [options.key] - Optional. The key to append to the link.
 * @param {boolean} [options.localhost] - Optional. Whether to use localhost in the link.
 * @param {boolean} [options.pretty] - Optional. Whether to format the link to remove the protocol.
 * @param {boolean} [options.noDomain] - Optional. Whether to omit the domain from the link.
 * @returns {string} The constructed link.
 * @example
 * // Construct a link with domain "example.com" and key "page1"
 * linkConstructor({ domain: "example.com", key: "page1" });
 *
 * // Construct a link with domain "example.com" and key "_root"
 * linkConstructor({ domain: "example.com", key: "_root" });
 *
 * // Construct a link with localhost and key "page1"
 * linkConstructor({ domain: "example.com", key: "page1", localhost: true });
 */
export function linkConstructor({
  domain,
  key,
  localhost,
  pretty,
  noDomain,
}: {
  domain: string;
  key?: string;
  localhost?: boolean;
  pretty?: boolean;
  noDomain?: boolean;
}): string {
  const link = `${
    localhost ? "http://home.localhost:8888" : `https://${domain}`
  }${key && key !== "_root" ? `/${key}` : ""}`;

  if (noDomain) return `/${key}`;
  return pretty ? link.replace(/^https?:\/\//, "") : link;
}
