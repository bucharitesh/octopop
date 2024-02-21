**Utils v0.0.1** • [Readme](../README.md) \| [API](../globals.md)

***

[Utils v0.0.1](../README.md) / generateMD5Hash

# Function: generateMD5Hash()

> **generateMD5Hash**(`message`): `Promise`\<`string`\>

Generates an MD5 hash for the given message.

## Parameters

• **message**: `string`

The message to hash.

## Returns

`Promise`\<`string`\>

A Promise that resolves with the hexadecimal MD5 hash of the message.

## Example

```ts
// Generate an MD5 hash for a message
generateMD5Hash("Hello, world!")
  .then(hash => {
    console.log("MD5 Hash:", hash);
  })
  .catch(error => {
    console.error("Error:", error);
  });
```

## Source

[functions/hash.ts:16](https://github.com/bucharitesh/octopop/blob/2bf71a1/packages/utils/src/functions/hash.ts#L16)
