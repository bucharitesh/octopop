# Function: formatDate()

> **formatDate**(`dateString`): `string`

Formats the provided date string to a localized date format.

## Parameters

• **dateString**: `string`

The date string to format (in ISO format).

## Returns

`string`

The formatted date string in the "month day, year" format (e.g., "February 17, 2022").

## Example

```ts
// Returns "February 17, 2022"
formatDate("2022-02-17");
```

## Source

[functions/datetime.ts:33](https://github.com/bucharitesh/octopop/blob/79bf9c3/packages/utils/src/functions/datetime.ts#L33)
