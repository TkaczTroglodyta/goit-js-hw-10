import { catInfoPict, catInfoDescr } from './index';

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
  const markupCatPict = `<img class="cat-picture" src="${breed.url}" alt="${breed.id}">`;
  const markupCatDesc = `<h2 class="cat-info-desc-title">${breed.breeds[0].name}</h2>
    <p class="cat-info-desc-desc">${breed.breeds[0].description}</p>
    <h4 class="cat-info-desc-temp"><strong>Temperament:</strong></h4><p class="cat-info-desc-info"> ${breed.breeds[0].temperament}</p>`;
  catInfoPict.insertAdjacentHTML('beforeend', markupCatPict);
  catInfoDescr.insertAdjacentHTML('beforeend', markupCatDesc);
};

export { showBreedDescr };
