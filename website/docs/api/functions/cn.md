# Function: cn()

> **cn**(...`inputs`): `string`

Concatenates multiple class values into a single string, using Tailwind CSS and clsx.

## Parameters

• ...**inputs**: `ClassValue`[]

The class values to be concatenated.

## Returns

`string`

A string containing the concatenated class names.

## Example

```ts
// Returns "text-red-500 font-bold"
cn("text-red-500", { "font-bold": true });

// Returns "text-lg text-green-500"
cn("text-lg", "text-green-500");
```

## Source

[functions/cn.ts:16](https://github.com/bucharitesh/octopop/blob/79bf9c3/packages/utils/src/functions/cn.ts#L16)
