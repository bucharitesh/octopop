**@octopop/utils v0.0.1** • [Readme](../README.md) \| [API](../globals.md)

***

[@octopop/utils v0.0.1](../README.md) / nanoid

# Function: nanoid()

> **nanoid**(`chars`?): `string`

Generates a random alphanumeric string using the nanoid library.

## Parameters

• **chars?**: `number`

Optional. The number of characters in the generated string (default is 7).

## Returns

`string`

A random alphanumeric string.

## Example

```ts
// Generate a 7-character random string
const randomString = nanoid();
console.log(randomString);

// Generate a 10-character random string
const longerRandomString = nanoid(10);
console.log(longerRandomString);
```

## Source

[functions/nanoid.ts:17](https://github.com/bucharitesh/octopop/blob/d1ccec1/packages/utils/src/functions/nanoid.ts#L17)
