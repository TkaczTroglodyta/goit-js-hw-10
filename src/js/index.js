import { fetchCatByBreed } from './cat-api';
import { showBreedDescr } from './showBreedDescr';
import { fetchToShowBreeds } from './fetchToShowBreeds';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const breedSelect = document.querySelector('.breed-select');
const catInfoPict = document.querySelector('.cat-info-pict');
const catInfoDescr = document.querySelector('.cat-info-desc');
const loaderCircles = document.querySelector('.loader');

breedSelect.addEventListener('change', onChangeSel);

fetchToShowBreeds();

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
