**@octopop/utils v0.0.1** • [Readme](../README.md) \| [API](../globals.md)

***

[@octopop/utils v0.0.1](../README.md) / capitalize

# Function: capitalize()

> **capitalize**(`str`?): `undefined` \| `null` \| `string`

Capitalizes the first letter of a string.
If the input is not a string or is null, returns it as is.

## Parameters

• **str?**: `null` \| `string`

The input string.

## Returns

`undefined` \| `null` \| `string`

The capitalized string or null if the input is null.

## Example

```ts
// Returns "Hello"
capitalize("hello");

// Returns "World"
capitalize("World");

// Returns null
capitalize(null);
```

## Source

[functions/capitalize.ts:17](https://github.com/bucharitesh/octopop/blob/d1ccec1/packages/utils/src/functions/capitalize.ts#L17)
