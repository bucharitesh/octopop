# Function: getFirstAndLastDay()

> **getFirstAndLastDay**(`day`): `Object`

Calculates the first and last day of the current month based on the provided day.

## Parameters

• **day**: `number`

The day of the month to use for calculation.

## Returns

`Object`

An object containing the first and last day of the month.

| Member | Type |
| :------ | :------ |
| `firstDay` | `Date` |
| `lastDay` | `Date` |

## Example

```ts
// Returns the first and last day of the current month based on the provided day
getFirstAndLastDay(15);
```

## Source

[functions/datetime.ts:52](https://github.com/bucharitesh/octopop/blob/79bf9c3/packages/utils/src/functions/datetime.ts#L52)
