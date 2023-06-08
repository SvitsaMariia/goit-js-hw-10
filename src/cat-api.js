const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_XQwu9B8XDlBz89RCCNvciDLK7eEPZgkXIyN7mWo6y98RNzt0xsb2w0RqtoOSn2xK';
const options = {
  headers: {'x-api-key': API_KEY},
};

export function fetchBreeds() {
  const URL = `${BASE_URL}/breeds`;

  return fetch(URL, options).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}

export function fetchCatByBreed(breedId) {
  const URL = `${BASE_URL}/images/${breedId}`;

  return fetch(URL).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}
