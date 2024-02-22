# Function: linkConstructor()

> **linkConstructor**(`options`): `string`

Constructs a link based on the provided parameters.

## Parameters

• **options**

The options object.

• **options\.domain**: `string`

The domain to use in the link.

• **options\.key?**: `string`

Optional. The key to append to the link.

• **options\.localhost?**: `boolean`

Optional. Whether to use localhost in the link.

• **options\.noDomain?**: `boolean`

Optional. Whether to omit the domain from the link.

• **options\.pretty?**: `boolean`

Optional. Whether to format the link to remove the protocol.

## Returns

`string`

The constructed link.

## Example

```ts
// Construct a link with domain "example.com" and key "page1"
linkConstructor({ domain: "example.com", key: "page1" });

// Construct a link with domain "example.com" and key "_root"
linkConstructor({ domain: "example.com", key: "_root" });

// Construct a link with localhost and key "page1"
linkConstructor({ domain: "example.com", key: "page1", localhost: true });
```

## Source

[functions/link-constructor.ts:21](https://github.com/bucharitesh/octopop/blob/79bf9c3/packages/utils/src/functions/link-constructor.ts#L21)
