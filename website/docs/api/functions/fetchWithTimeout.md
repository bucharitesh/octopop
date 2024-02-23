# Function: fetchWithTimeout()

> **fetchWithTimeout**(`input`, `init`?, `timeout`?): `Promise`\< `Response` \>

Performs a fetch operation with a timeout.

## Parameters

• **input**: `URL` \| `RequestInfo`

The URL or Request object.

• **init?**: `RequestInit`

Optional. The options for the fetch request.

• **timeout?**: `number`= `5000`

Optional. The timeout duration in milliseconds (default is 5000ms).

## Returns

`Promise`\< `Response` \>

A Promise that resolves with a Response object if the fetch is successful, or rejects with an error if the fetch fails or times out.

## Example

```ts
// Perform a fetch request with a timeout of 3000ms
fetchWithTimeout("https://api.example.com/data", { method: "GET" }, 3000)
  .then(response => {
    console.log("Success:", response);
  })
  .catch(error => {
    console.error("Error:", error);
  });
```

## Source

[functions/fetch.ts:18](https://github.com/bucharitesh/octopop/blob/79bf9c3/packages/utils/src/functions/fetch.ts#L18)
