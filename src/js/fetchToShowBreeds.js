import { loaderEyes, breedSelect } from './index';
import { fetchBreeds } from './cat-api';
import { showBreedsList } from './showBreedsList';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

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

export { fetchToShowBreeds };
