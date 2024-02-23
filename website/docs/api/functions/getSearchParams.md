# Function: getSearchParams()

> **getSearchParams**(`url`): `Record`\< `string`, `string` \>

Extracts search parameters from a URL string and returns them as an object.

## Parameters

• **url**: `string`

The URL string.

## Returns

`Record`\< `string`, `string` \>

An object containing the search parameters.

## Example

```ts
getSearchParams('https://example.com?query=hello&sort=asc');
// { query: 'hello', sort: 'asc' }
```

## Source

[functions/urls.ts:52](https://github.com/bucharitesh/octopop/blob/79bf9c3/packages/utils/src/functions/urls.ts#L52)
