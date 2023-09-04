import { catInfoPict, catInfoDescr } from './index';

const showBreedDescr = breed => {
  const markupCatPict = `<img class="cat-picture" src="${breed.url}" alt="${breed.id}">`;
  const markupCatDesc = `<h2 class="cat-info-desc-title">${breed.breeds[0].name}</h2>
    <p class="cat-info-desc-desc">${breed.breeds[0].description}</p>
    <h4 class="cat-info-desc-temp"><strong>Temperament:</strong></h4><p class="cat-info-desc-info"> ${breed.breeds[0].temperament}</p>`;
  catInfoPict.insertAdjacentHTML('beforeend', markupCatPict);
  catInfoDescr.insertAdjacentHTML('beforeend', markupCatDesc);
};

export { showBreedDescr };
