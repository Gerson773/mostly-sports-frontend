// export const processServerResponse = (response) => {
//   if (response.ok) {
//     return response.json();
//   }
//   return Promise.reject(`Error: ${response.status} ${response.statusText}`);
// };

// export function request(url, options) {
//   return fetch(url, options).then((response) => {
//     if (!response.ok) {
//       throw new Error(`Error: ${response.status} ${response.statusText}`);
//     }
//     return response.json();
//   });
// }

export const processSearchResponse = (response) => {
  if (response.status === "OK") {
    return response.data;
  }
  return Promise.reject(`Error: ${response.status}`);
};

export const processTickerResponse = (response) => {
  return response;
};

export function request(url, options) {
  return fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return response.json();
  });
}
