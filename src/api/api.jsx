const API_URL = "https://jsonplaceholder.typicode.com/users";

export function fetchData() {
  return fetch(API_URL)
    .then((res) => res.json());
}