const url1 = 'https://api.thecatapi.com/v1/breeds';
const url2 = 'https://api.thecatapi.com/v1/images';

// Unikalny klucz dostępu do Cat API
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

// Funkcja fetchBreeds wysyła żądanie do interfejsu API TheCatAPI w celu uzyskania listy ras kotów.
// Używa funkcji fetch do wysłania żądania HTTP do adresu URL ${url1}?api_key=${KEY},
// gdzie ${url1} to adres bazowy interfejsu API do pobierania listy ras, a ${KEY} to klucz dostępu do interfejsu API.
// Jeśli odpowiedź serwera nie wynosi 200 (OK), funkcja zgłasza błąd ze statusem odpowiedzi.
// Jeśli odpowiedź się powiedzie, funkcja zwraca wynik w formacie JSON.

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

// Funkcja fetchCatByBreed przyjmuje parametr breedId, który wskazuje identyfikator określonej rasy kota.
// Wysyła żądanie do interfejsu API TheCatAPI o obraz kota wybranej rasy.
// Używa unkcji fetch do wysłania żądania HTTP do adresu URL.

export { fetchBreeds, fetchCatByBreed };
