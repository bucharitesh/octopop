**Utils v0.0.1** • [Readme](../README.md) \| [API](../globals.md)

***

[Utils v0.0.1](../README.md) / timeAgo

# Function: timeAgo()

> **timeAgo**(`timestamp`, `options`?): `string`

Returns a string representing the time elapsed since the provided timestamp.

## Parameters

• **timestamp**: `null` \| `Date`

The timestamp to calculate the time ago from.

• **options?**= `{}`

Optional. Options for formatting.

• **options\.withAgo?**: `boolean`

Optional. Whether to include "ago" in the output (default is false).

## Returns

`string`

A string representing the time elapsed.

## Example

```ts
// Get the time elapsed since a timestamp without "ago"
const timeElapsed = timeAgo(new Date("2022-02-17T12:30:00Z"));
console.log(timeElapsed); // Output: "1d"

// Get the time elapsed since a timestamp with "ago"
const timeElapsedWithAgo = timeAgo(new Date("2022-02-17T12:30:00Z"), { withAgo: true });
console.log(timeElapsedWithAgo); // Output: "1d ago"
```

## Source

[functions/time-ago.ts:19](https://github.com/bucharitesh/octopop/blob/2bf71a1/packages/utils/src/functions/time-ago.ts#L19)
