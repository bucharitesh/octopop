# Function: getSubdomain()

> **getSubdomain**(`name`, `apexName`): `null` \| `string`

Gets the subdomain from a domain name.

## Parameters

• **name**: `string`

The domain name.

• **apexName**: `string`

The apex domain name.

## Returns

`null` \| `string`

The subdomain, or null if the name is equal to the apexName.

## Example

```ts
getSubdomain('sub.example.com', 'example.com'); // 'sub'
getSubdomain('example.com', 'example.com'); // null
getSubdomain('www.example.com', 'example.com'); // 'www'
```

## Source

[functions/domains.ts:37](https://github.com/bucharitesh/octopop/blob/79bf9c3/packages/utils/src/functions/domains.ts#L37)
