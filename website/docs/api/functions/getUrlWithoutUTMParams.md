# Function: getUrlWithoutUTMParams()

> **getUrlWithoutUTMParams**(`url`): `string`

Removes UTM parameters from a given URL string.

## Parameters

• **url**: `string`

The URL string.

## Returns

`string`

The URL string with UTM parameters removed.

## Example

```ts
getUrlWithoutUTMParams('https://example.com?utm_source=twitter&utm_campaign=summer_sale');
// 'https://example.com'
```

## Source

[functions/urls.ts:141](https://github.com/bucharitesh/octopop/blob/79bf9c3/packages/utils/src/functions/urls.ts#L141)
