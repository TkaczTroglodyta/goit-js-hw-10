import { breedSelect } from '../index';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const showBreedsList = breeds => {
  const markupCatBreeds = breeds
    .map(breed => {
      return `<option value="${breed.reference_image_id}">${breed.name}</option>`;
    })
    .join('');
  breedSelect.insertAdjacentHTML('beforeend', markupCatBreeds);
  new SlimSelect({
    select: '#single',
  });
};

// Funkcja showBreedsSelect() tworzy rozwijaną listę ras zwierząt w oparciu o dostarczoną tablicę
// i inicjalizuje ją przy użyciu biblioteki 'slim-select'.
// Powyższa funkcja przyjmuje jako argument tablicę ras. Tablica ta zawiera obiekty, które
// reprezentują rasy zwierząt. Tworzy znaczniki HTML dla listy rozwijanej z opcjami wyboru // ras zwierząt.
// Dla każdego obiektu rasy w tablicy ras, funkcja tworzy opcję (<option>)
// z wartością reprezentującą reference_image_id rasy i tekstem opcji reprezentującym
// nazwę rasy. Łączy wszystkie utworzone opcje w ciąg znaków za pomocą metody join(''), aby uzyskać
// ostateczny znacznik listy. Wstawia wynikowy ciąg znaków do elementu o identyfikatorze
// breedSelect. Inicjalizuje bibliotekę "slim-select" na liście rozwijanej z identyfikatorem
// #single. Funkcjonalność zapewniana jest przez bibliotekę.

export { showBreedsList };
