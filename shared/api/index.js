export default async function sharedApi(url, options) {
  options = {
    throwOnError: true,
    ...options
  }
  const response = await fetch(url, {
    ...options,
    headers: {
      ["Content-Type"]: !!options.json ? "application/json" : undefined,
      ...options.headers,
    },
    body: options.json ? JSON.stringify(options.json) : options.body,
  });
  if (options.throwOnError && response.status > 226) {
    throw response;
  }
  return response
}
