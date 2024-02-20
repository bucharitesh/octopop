**@octopop/utils v0.0.1** • [Readme](../README.md) \| [API](../globals.md)

***

[@octopop/utils v0.0.1](../README.md) / getParamsFromURL

# Function: getParamsFromURL()

> **getParamsFromURL**(`url`): `Record`\<`string`, `string`\>

Extracts search parameters from a URL string and returns them as an object, excluding empty values.

## Parameters

• **url**: `string`

The URL string.

## Returns

`Record`\<`string`, `string`\>

An object containing non-empty search parameters.

## Example

```ts
getParamsFromURL('https://example.com?query=hello&sort=&page=1');
// { query: 'hello', page: '1' }
```

## Source

[functions/urls.ts:70](https://github.com/bucharitesh/octopop/blob/d1ccec1/packages/utils/src/functions/urls.ts#L70)
