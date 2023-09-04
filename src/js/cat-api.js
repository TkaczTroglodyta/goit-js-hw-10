const url1 = 'https://api.thecatapi.com/v1/breeds';
const url2 = 'https://api.thecatapi.com/v1/images';

const CATAPI_KEY =
  'live_3tP1CMH6ndx78LnNFYHfnKDgFZA1oF27NZ3FACVsBdgCi2qq0jBzYCR8Ikb6V26I';

const fetchBreeds = () => {
  return new Promise((resolve, reject) => {
    fetch(`${url1}?api_key=${CATAPI_KEY}`).then(response => {
      if (!response.ok) {
        resolve(response.status);
      } else {
        response.json().then(data => {
          resolve(data);
        });
      }
    });
  });
};

const fetchCatByBreed = breedId => {
  return new Promise((resolve, reject) => {
    fetch(`${url2}/${breedId}?api_key=${CATAPI_KEY}`).then(response => {
      if (!response.ok) {
        resolve(response.status);
      } else {
        response.json().then(data => {
          resolve(data);
        });
      }
    });
  });
};

export { fetchBreeds, fetchCatByBreed };
