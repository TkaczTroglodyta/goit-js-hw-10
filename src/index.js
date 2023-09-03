import { fetchCatByBreed } from './js/cat-api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const breedSelect = document.querySelector('.breed-select');
const catInfoPict = document.querySelector('.cat-info-pict');
const catInfoDescr = document.querySelector('.cat-info-desc');
const loaderEyes = document.querySelector('.loader');

// Dodaję obsługę zdarzenia do elementu breedSelect za pomocą addEventListener.
// Obsługa zdarzenia onChoice będzie wywoływana, gdy wartość wybranej opcji ulegnie zmianie.

breedSelect.addEventListener('choice', onChoice);

function onChoice(evt) {
  loaderEyes.classList.remove('.hidden');
  catInfoPict.innerHTML = '';
  catInfoDescr.innerHTML = '';
  const breedId = evt.target.value;
  console.log('breedId: ', breedId); // Just for veryfing
  fetchCatByBreed(breedId)
    .then(breed => showBreedDesc(breed))
    .catch(err => {
      console.log(err);
      Notify.failure('Oops! Something went wrong! Try reloading the page!');
    })
    .finally(() => loaderEyes.classList.add('.hidden'));
}

export { breedSelect, catInfoPict, catInfoDescr, loaderEyes };
