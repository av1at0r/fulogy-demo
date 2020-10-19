import getToken from "../utils/getToken";

export default async function api(url, options) {
  const response = await fetch(url, {
    ...options,
    headers: {
      ["Content-Type"]: "application/json",
      ["x-token-access"]: getToken(),
      ...options.headers,
    },
    body: options.json ? JSON.stringify(options.json) : options.body,
  });
  if (response.status > 226) {
    throw response;
  }
}
