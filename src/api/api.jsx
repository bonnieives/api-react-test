const API_URL = "https://jsonplaceholder.typicode.com/users";
const API_URL_FOOTBALL = "https://api.api-futebol.com.br/v1/ao-vivo"

const api_key_football = 'test_6975b106004cb3e64bba2b474ac3aa'

export function fetchData() {
  return fetch(API_URL)
    .then((res) => res.json());
}

export function fetchFootballData() {
  return fetch(API_URL_FOOTBALL, {
    headers: {
      'Authorization' : `Bearer ${api_key_football}`
    }
  })
  .then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  })
}