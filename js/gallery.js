import galleryItems from './gallery-items.js';

const refs = {
  listGallery: document.querySelector('.js-gallery'),
  isModalWindow: document.querySelector('.js-lightbox'),
  isImgModal: document.querySelector('.lightbox__image'),
  isOverlay: document.querySelector('.lightbox__overlay'),
  btnModalClose: document.querySelector('[data-action="close-lightbox"]'),
};

const galleryMarkup = makeGalleryItemsMarkup(galleryItems);
refs.listGallery.insertAdjacentHTML('beforeend', galleryMarkup);

refs.listGallery.addEventListener('click', onTargetImgClick);
refs.btnModalClose.addEventListener('click', onCloseModal);
refs.isOverlay.addEventListener('click', onCloseModal);

function makeGalleryItemsMarkup(images) {
  return images
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
      <a
        class="gallery__link"
        href="${original}"
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`,
    )
    .join('');
}

function onTargetImgClick(evt) {
  evt.preventDefault();
  const isGalleryImgEl = evt.target.classList.contains('gallery__image');

  if (!isGalleryImgEl) {
    return;
  }
  const element = evt.target;

  refs.isImgModal.src = element.dataset.source;
  refs.isImgModal.alt = element.alt;

  onOpenModal();
}

function onOpenModal() {
  refs.isModalWindow.classList.add('is-open');
}

function onCloseModal() {
  refs.isModalWindow.classList.remove('is-open');
  refs.isImgModal.src = '';
  refs.isImgModal.alt = '';
}
