import { fetchCatByBreed } from './cat-api';
import { showBreedDescr } from './showBreedDescr';
import { fetchToShowBreeds } from './fetchToShowBreeds';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const breedSelect = document.querySelector('.breed-select');
const catInfoPict = document.querySelector('.cat-info-pict');
const catInfoDescr = document.querySelector('.cat-info-desc');
const loaderCircles = document.querySelector('.loader');

// Dodaję obsługę zdarzenia do elementu breedSelect za pomocą addEventListener.
// Obsługa zdarzenia onChoice będzie wywoływana, gdy wartość wybranej opcji ulegnie zmianie.

breedSelect.addEventListener('change', onChangeSel);

// Wywołanie funkcji fetchAndShowBreeds(). Spowoduje to wykonanie kodu opisanego w funkcji fetchAndRenderBreeds,
// który obejmuje żądanie do API, przetwarzanie wyników i aktualizację odpowiednich elementów interfejsu.

fetchToShowBreeds();

// Funkcja onChangeSel usuwa klasę "hidden" z elementu loaderCircles. Służy ona do wyświetlania
// animacji ładowania. Czyści zawartość elementów catInfoPict i catInfoDescr przy użyciu właściwości
// właściwości innerHTML. Pozwala to na usunięcie poprzedniej zawartości tych elementów przed aktualizacją informacji.
// Pobiera wartość wybranej opcji (rasy kota) ze zdarzenia za pomocą event.target.value.
// Wartość jest przechowywana w zmiennej breedId. Wyświetlamy wartość breedId w konsoli, aby sprawdzić,
// czy identyfikator rasy został odebrany poprawnie. Wywołujemy funkcję fetchCatByBreed(breedId), która
// wysyła żądanie do API, aby uzyskać więcej informacji o wybranej rasie kota.
// Po pomyślnym otrzymaniu informacji o rasie wywoływana jest funkcja showBreedDescr(breed),
// do której przekazywany jest wynik żądania (informacje o rasie). Funkcja ta jest odpowiedzialna za wizualne
// wizualne wyświetlenie opisu rasy kota. Jeśli podczas wykonywania zapytania lub przetwarzania // wyniku wystąpi błąd, wykonywany jest blok
// wyniku, wykonywany jest blok catch, który wyświetla błąd w konsoli i wyświetla powiadomienie
// o błędzie przy użyciu biblioteki Notiflix.Notify.failure().
// Niezależnie od powodzenia lub niepowodzenia żądania, wykonywany jest blok finally, w którym wykonywana jest klasa
// klasa "hidden" do loaderCircles (ukrywa animację ładowania), aby wskazać koniec procesu ładowania.

function onChangeSel(event) {
  loaderCircles.classList.remove('hidden');
  catInfoPict.innerHTML = '';
  catInfoDescr.innerHTML = '';
  const breedId = event.target.value;
  console.log('breedId: ', breedId);
  fetchCatByBreed(breedId)
    .then(breed => showBreedDescr(breed))
    .catch(error => {
      console.log(error);
      Notify.failure('Oops! Something went wrong! Try reloading the page!');
    })
    .finally(() => loaderCircles.classList.add('hidden'));
}

export { breedSelect, catInfoPict, catInfoDescr, loaderCircles };
