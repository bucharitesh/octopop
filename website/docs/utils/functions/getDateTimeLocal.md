**@octopop/utils v0.0.1** • [Readme](../README.md) \| [API](../globals.md)

***

[@octopop/utils v0.0.1](../README.md) / getDateTimeLocal

# Function: getDateTimeLocal()

> **getDateTimeLocal**(`timestamp`?): `string`

Returns a string representing the local date and time in ISO format, based on the provided timestamp or the current date and time if no timestamp is provided.

## Parameters

• **timestamp?**: `Date`

Optional. The timestamp for which to retrieve the local date and time.

## Returns

`string`

A string representing the local date and time in ISO format (e.g., "2022-02-17T12:30").

## Example

```ts
// Returns the current date and time in ISO format
getDateTimeLocal();

// Returns the local date and time in ISO format for the provided timestamp
getDateTimeLocal(new Date("2022-02-17T12:30:00Z"));
```

## Source

[functions/datetime.ts:13](https://github.com/bucharitesh/octopop/blob/d1ccec1/packages/utils/src/functions/datetime.ts#L13)
