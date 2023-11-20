const API_KEY =
  'live_c2dsttMzzi1dBoPwruIRjBUppm35K3ToRfCWi1a9IsKIvX6m1bJDT7q1w8Nd6FFB';

function fetchBreeds() {
  const url = `https://api.thecatapi.com/v1/breeds?api_key=${API_KEY}`;
  return fetch(url).then(res => res.json());
}

function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search?api_key=${API_KEY}&breed_ids=${breedId}`;
  return fetch(url).then(res => res.json());
}
export { fetchBreeds, fetchCatByBreed };
