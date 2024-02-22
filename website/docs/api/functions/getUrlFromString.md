# Function: getUrlFromString()

> **getUrlFromString**(`str`): `undefined` \| `null` \| `string`

Converts a string to a URL and returns its string representation.
If the string is not a valid URL, attempts to prepend "https://" before converting.

## Parameters

• **str**: `string`

The string to convert to a URL.

## Returns

`undefined` \| `null` \| `string`

The URL string representation or null if the string cannot be converted to a valid URL.

## Example

```ts
getUrlFromString('example.com'); // 'https://example.com'
getUrlFromString('https://example.com'); // 'https://example.com'
getUrlFromString('not a url'); // null
```

## Source

[functions/urls.ts:31](https://github.com/bucharitesh/octopop/blob/79bf9c3/packages/utils/src/functions/urls.ts#L31)
