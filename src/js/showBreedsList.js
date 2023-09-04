import { breedSelect } from './index';
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

export { showBreedsList };
