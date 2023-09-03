import { fetchCatByBreed } from './js/cat-api';
import Notiflix from 'notiflix';

const breedSelect = document.querySelector('.breed-select');
const catInfoPict = document.querySelector('.cat-info-pict');
const catInfoDescr = document.querySelector('.cat-info-desc');
const loaderEyes = document.querySelector('.loader');

breedSelect.addEventListener('choice', onChoice);

function onChoice(evt) {
  loaderEyes.classList.remove('hidden');
  catInfoPict.innerHTML = '';
  catInfoDescr.innerHTML = '';
  const breedId = evt.target.value;
  console.log('breedId: ', breedId); // Just for veryfing
  fetchCatByBreed(breedId).then(breed => showBreedDesc);
}
