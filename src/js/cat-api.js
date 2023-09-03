const url1 = 'https://api.thecatapi.com/v1/breeds';
const url2 = 'https://api.thecatapi.com/v1/images';
const API_KEY =
  'live_3tP1CMH6ndx78LnNFYHfnKDgFZA1oF27NZ3FACVsBdgCi2qq0jBzYCR8Ikb6V26I';

// Funkcja fetchBreeds() wysyła żądanie do interfejsu API TheCatAPI w celu uzyskania listy ras kotów.
// Używa funkcji fetch() do wysłania żądania HTTP do adresu URL ${url1}?api_key=${KEY},
// gdzie ${url1} to adres bazowy interfejsu API do pobierania listy ras, a ${KEY} to klucz dostępu do interfejsu API.
// Jeśli odpowiedź serwera nie wynosi 200 (OK), funkcja zgłasza błąd ze statusem odpowiedzi.
// Jeśli odpowiedź się powiedzie, funkcja zwraca wynik w formacie JSON.

fetchBreeds = () => {
  return fetch(`${url1}?api_key=${API_KEY}`).then(response => {
    if (response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

// Funkcja fetchCatByBreed() przyjmuje parametr breedId, który wskazuje identyfikator określonej rasy kota.
// Wysyła żądanie do interfejsu API TheCatAPI o obraz kota wybranej rasy do czego używa funkcji fetch().
// Żądanie HTTP przesyłane jest do adresu do adresu URL ${url2}/${breedId}?api_key=${API_KEY}.
// Jeśli odpowiedź serwera nie wynosi 200 (OK), funkcja zgłasza błąd ze statusem odpowiedzi.
// Jeśli odpowiedź się powiedzie, funkcja zwraca wynik w formacie JSON.

fetchCatByBreed = breedId => {
  return fetch(`${url2}/${breedId}?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

export { fetchBreeds, fetchCatByBreed };
