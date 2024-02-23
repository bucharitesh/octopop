# Function: getParamsFromURL()

> **getParamsFromURL**(`url`): `Record`\< `string`, `string` \>

Extracts search parameters from a URL string and returns them as an object, excluding empty values.

## Parameters

• **url**: `string`

The URL string.

## Returns

`Record`\< `string`, `string` \>

An object containing non-empty search parameters.

## Example

```ts
getParamsFromURL('https://example.com?query=hello&sort=&page=1');
// { query: 'hello', page: '1' }
```

## Source

[functions/urls.ts:70](https://github.com/bucharitesh/octopop/blob/79bf9c3/packages/utils/src/functions/urls.ts#L70)
