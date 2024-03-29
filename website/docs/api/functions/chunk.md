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

[functions/chunk.ts:14](https://github.com/bucharitesh/octopop/blob/79bf9c3/packages/utils/src/functions/chunk.ts#L14)
