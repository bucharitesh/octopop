**Utils v0.0.1** • [Readme](../README.md) \| [API](../globals.md)

***

[Utils v0.0.1](../README.md) / chunk

# Function: chunk()

> **chunk**\<`T`\>(`array`, `chunk_size`): `T`[][]

Splits an array into chunks of a specified size.

## Type parameters

• **T**

## Parameters

• **array**: `T`[]

The array to be split into chunks.

• **chunk\_size**: `number`

The size of each chunk.

## Returns

`T`[][]

An array of arrays, each containing elements of the original array split into chunks.

## Example

```ts
// Returns [[1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5], 2);

// Returns [['a', 'b', 'c'], ['d', 'e', 'f']]
chunk(['a', 'b', 'c', 'd', 'e', 'f'], 3);
```

## Source

[functions/chunk.ts:14](https://github.com/bucharitesh/octopop/blob/2bf71a1/packages/utils/src/functions/chunk.ts#L14)
