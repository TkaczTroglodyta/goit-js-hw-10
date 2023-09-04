import { loaderCircles, breedSelect } from './index';
import { fetchBreeds } from './cat-api';
import { showBreedsList } from './showBreedsList';

const fetchToShowBreeds = () => {
  loaderCircles.classList.remove('hidden');
  fetchBreeds()
    .then(breeds => showBreedsList(breeds))
    .catch(error => {
      console.log(error);
      Notify.failure('Oops! Something went wrong! Try reloading the page!');
    })
    .finally(() => {
      loaderCircles.classList.add('hidden');
      breedSelect.classList.remove('hidden');
    });
};

export { fetchToShowBreeds };
