import { fetchCatByBreed } from './js/cat-api';
import Notiflix from 'notiflix';

const breedSelect = document.querySelector('.breed-select');
const catInfoPict = document.querySelector('.cat-info-pict');
const catInfoDescr = document.querySelector('.cat-info-desc');
const loaderEyes = document.querySelector('.loader');

breedSelect.addEventListener('choice', onChoice);
