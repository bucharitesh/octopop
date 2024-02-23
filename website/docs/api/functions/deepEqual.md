# Function: deepEqual()

> **deepEqual**(`obj1`, `obj2`): `boolean`

A function that compares two objects deeply for equality.

## Parameters

• **obj1**: `Record`\< `string`, `any` \>

The first object to compare.

• **obj2**: `Record`\< `string`, `any` \>

The second object to compare.

## Returns

`boolean`

Returns true if the objects are deeply equal, otherwise false.

## Example

```ts
// Returns true
deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } });

// Returns false
deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } });
```

## Source

[functions/deep-equal.ts:18](https://github.com/bucharitesh/octopop/blob/79bf9c3/packages/utils/src/functions/deep-equal.ts#L18)
