**@octopop/utils v0.0.1** • [Readme](../README.md) \| [API](../globals.md)

***

[@octopop/utils v0.0.1](../README.md) / truncate

# Function: truncate()

> **truncate**(`str`, `length`): `null` \| `string`

Truncates a string to a specified length, adding ellipsis if necessary.

## Parameters

• **str**: `null` \| `string`

The string to truncate.

• **length**: `number`

The maximum length of the truncated string.

## Returns

`null` \| `string`

The truncated string or the original string if its length is less than or equal to the specified length.

## Example

```ts
// Truncate a string to a maximum length of 10 characters
const truncatedString = truncate("Lorem ipsum dolor sit amet", 10);
console.log(truncatedString); // Output: "Lorem ipsu..."
```

## Source

[functions/truncate.ts:12](https://github.com/bucharitesh/octopop/blob/d1ccec1/packages/utils/src/functions/truncate.ts#L12)
