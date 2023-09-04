import { loaderEyes, breedSelect } from '../index';
import { fetchBreeds } from './cat-api';
import { showBreedsList } from './showBreedsList';

const fetchToShowBreeds = () => {
  loaderEyes.classList.remove('hidden');
  fetchBreeds()
    .then(breeds => showBreedsList(breeds))
    .catch(err => {
      console.log(err);
      Notify.failure('Oops! Something went wrong! Try reloading the page!');
    })
    .finally(() => {
      loaderEyes.classList.add('hidden');
      breedSelect.classList.remove('hidden');
    });
};

// Funkcja fetchShowBreeds usuwa klasę "hidden" z elementu loaderEyes. Służy ona do wyświetlania animacji
// animacji wskaźnika ładowania/przetwarzania. Wywołuje funkcję fetchBreeds(), która wysyła żądanie do API
// w celu uzyskania listy ras kotów. Po pomyślnym otrzymaniu listy ras wywoływana jest funkcja
// showBreedsList(breeds), do której przekazywany jest wynik żądania (lista ras). Funkcja ta
// odpowiada za wizualne wyświetlenie listy ras - tworząc listę rozwijaną.
// Jeśli podczas wykonywania zapytania lub przetwarzania wyniku wystąpi błąd, wykonywany jest blok catch,
// który wyświetla błąd w konsoli i wyświetla powiadomienie o błędzie przy użyciu biblioteki
// Notify.failure(). Niezależnie od powodzenia lub niepowodzenia żądania, wykonywany jest blok
// wykonywany jest blok finally, w którym klasa "hidden" jest ponownie stosowana do loaderEyes (ukrywa animację ładowania)
// i usuwa klasę "hidden" z breedSelect, która pokazuje elementy interfejsu związane z wyborem rasy kota.
// Tak więc funkcja ta wysyła żądanie do API, aby uzyskać listę ras kotów, wyświetla animację ładowania
// animację ładowania podczas odbierania danych, wyświetla odebrane dane w elemencie wizualnym
// interfejsie i obsługuje ewentualne błędy. Po zakończeniu wszystkich operacji,
// ukrywa również animację ładowania i wyświetla odpowiednie elementy interfejsu użytkownika.

export { fetchToShowBreeds };
