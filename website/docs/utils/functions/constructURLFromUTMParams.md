**Utils v0.0.1** • [Readme](../README.md) \| [API](../globals.md)

***

[Utils v0.0.1](../README.md) / constructURLFromUTMParams

# Function: constructURLFromUTMParams()

> **constructURLFromUTMParams**(`url`, `utmParams`): `string`

Constructs a new URL string by updating or removing specified UTM parameters from an existing URL string.

## Parameters

• **url**: `string`

The original URL string.

• **utmParams**: `Record`\<`string`, `string`\>

The UTM parameters to update or remove.

## Returns

`string`

The modified URL string with updated or removed UTM parameters.

## Example

```ts
constructURLFromUTMParams('https://example.com', { utm_source: 'twitter', utm_campaign: 'summer_sale' });
// 'https://example.com?utm_source=twitter&utm_campaign=summer_sale'
```

## Source

[functions/urls.ts:96](https://github.com/bucharitesh/octopop/blob/2bf71a1/packages/utils/src/functions/urls.ts#L96)
