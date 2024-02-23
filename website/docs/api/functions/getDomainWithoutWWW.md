# Function: getDomainWithoutWWW()

> **getDomainWithoutWWW**(`url`): `undefined` \| `null` \| `string`

Gets the domain without "www." from a URL.

## Parameters

• **url**: `string`

The URL.

## Returns

`undefined` \| `null` \| `string`

The domain without "www.", or null if the URL is not valid.

## Example

```ts
getDomainWithoutWWW('https://www.example.com'); // 'example.com'
getDomainWithoutWWW('http://sub.example.com'); // 'sub.example.com'
getDomainWithoutWWW('invalid url'); // null
```

## Source

[functions/domains.ts:52](https://github.com/bucharitesh/octopop/blob/79bf9c3/packages/utils/src/functions/domains.ts#L52)
