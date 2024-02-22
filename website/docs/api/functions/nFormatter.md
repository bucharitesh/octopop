# Function: nFormatter()

> **nFormatter**(`num`?, `opts`?): `string`

Formats a number into a short representation with optional decimal digits and full formatting.

## Parameters

• **num?**: `number`

Optional. The number to format.

• **opts?**= `undefined`

Optional. Options for formatting.

• **opts\.digits?**: `number`

Optional. The number of decimal digits to display (default is 1).

• **opts\.full?**: `boolean`

Optional. Whether to use full number formatting (default is false).

## Returns

`string`

The formatted number string.

## Example

```ts
// Format a number with default options
const shortNumber = nFormatter(1000);
console.log(shortNumber); // Output: "1K"

// Format a number with 2 decimal digits and full formatting
const fullNumber = nFormatter(12345678, { digits: 2, full: true });
console.log(fullNumber); // Output: "12,345,678.00"
```

## Source

[functions/nformatter.ts:17](https://github.com/bucharitesh/octopop/blob/79bf9c3/packages/utils/src/functions/nformatter.ts#L17)
