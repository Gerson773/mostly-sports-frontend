export const processServerResponse = (response) => {
  if (response.status === "OK") {
    return response.data;
  }
  return Promise.reject(`Error: ${response.status}`);
};

export function request(url, options) {
  return fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return response.json();
  });
}
