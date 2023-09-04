import { catInfoPict, catInfoDescr } from '../index';

// Ta funkcja tworzy znaczniki, aby wyświetlić obraz rasy kota i informacje o nim
// na podstawie przekazanego obiektu rasy. Używając łańcucha markupCatPict, funkcja ta generuje znaczniki dla
// aby wyświetlić obraz rasy kota. Używa wartości właściwości url obiektu breed
// obiektu breed jako źródła obrazu i wartości właściwości id jako tekstu alternatywnego. Używając ciągu znaków
// mmarkupCatDesc, generuje znaczniki do wyświetlenia tytułu, opisu i temperamentu rasy kota.
// Używa wartości właściwości name, description i temperament z obiektu breed.breeds[0],
// który zawiera informacje o rasie kota. Wstawia utworzone znaczniki dla obrazu rasy kota
// do elementu catInfoPict przy użyciu metody insertAdjacentHTML z parametrem "beforeend".
// Spowoduje to dodanie wygenerowanego kodu HTML na końcu zawartości elementu catInfoPict. Wstawia wygenerowany znacznik
// opisujący rasę kota do elementu catInfoDescr przy użyciu metody insertAdjacentHTML
// z parametrem "beforeend". Powoduje to dodanie wygenerowanego kodu HTML na końcu zawartości elementu catInfoDescr.

const showBreedDescr = breed => {
  const markupCatPict = `<img class="cat-pict" src="${breed.url}" alt="${breed.id}">`;
  const markupCatDesc = `<h2 class="cat-info__descr-title">${breed.breeds[0].name}</h2>
  <p class="cat-info__descr-descr">${breed.breeds[0].description}</p>
  <p class="cat-info__descr-tempr"><strong>Temperament:</strong> ${breed.breeds[0].temperament}</p>`;
  catInfoPict.insertAdjacentHTML('beforeend', markupCatPict);
  catInfoDescr.insertAdjacentHTML('beforeend', markupCatDesc);
};

export { showBreedDescr };
