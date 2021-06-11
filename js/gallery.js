// +1. Создание и рендер разметки по массиву данных galleryItems из app.js и предоставленному шаблону.
// 3. Открытие модального окна по клику на элементе галереи.
// 4. Подмена значения атрибута src элемента img.lightbox__image.
// 5. Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// 6. Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.

import galleryItems from './gallery-items.js';

const listGallery = document.querySelector('.js-gallery');
const galleryMarkup = makeGalleryItemsMarkup(galleryItems);

listGallery.insertAdjacentHTML('beforeend', galleryMarkup);

listGallery.addEventListener('click', onTargetImgClick);

function makeGalleryItemsMarkup(images) {
  return images
    .map(
      ({ original, description }) =>
        `<li class="gallery__item">
      <a
        class="gallery__link"
        href="${original}"
      >
        <img
          class="gallery__image"
          src="${original}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`,
    )
    .join('');
}

// 2. Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.

function onTargetImgClick(evt) {
  evt.preventDefault();
  const isGalleryImgEl = evt.target.classList.contains('gallery__image');

  if (!isGalleryImgEl) {
    return;
  }
  const element = evt.target;
    console.log(element);
    const 
}
