**Utils v0.0.1** • [Readme](../README.md) \| [API](../globals.md)

***

[Utils v0.0.1](../README.md) / fetcher

# Function: fetcher()

> **fetcher**\<`JSON`\>(`input`, `init`?): `Promise`\<`JSON`\>

Performs a fetch operation and returns the response data as JSON.
Throws an error if the response is not successful (HTTP status code other than 2xx).

## Type parameters

• **JSON** = `any`

The type of the JSON response data.

## Parameters

• **input**: `RequestInfo`

The URL or Request object.

• **init?**: `RequestInit`

Optional. The options for the fetch request.

## Returns

`Promise`\<`JSON`\>

A Promise that resolves with the response data as JSON if the fetch is successful, or rejects with a SWRError if the fetch fails or the response is not successful.

## Example

```ts
// Perform a fetch request to retrieve JSON data
fetcher<Data>("https://api.example.com/data", { method: "GET" })
  .then(data => {
    console.log("Data:", data);
  })
  .catch(error => {
    console.error("Error:", error);
  });
```

## Source

[functions/fetcher.ts:29](https://github.com/bucharitesh/octopop/blob/2bf71a1/packages/utils/src/functions/fetcher.ts#L29)
