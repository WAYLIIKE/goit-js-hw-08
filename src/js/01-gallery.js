import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simgitple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');

function galleryMarkup(arr) {
  const markup = arr
    .map(
      ({ original, preview, description }) => `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a></li>`
    )
    .join('');
  galleryContainer.innerHTML = markup;
}

galleryMarkup(galleryItems);

let lightBox = new SimpleLightbox('.gallery__item a', {
  captionsData: 'alt',
  captionDelay: 250,
});
