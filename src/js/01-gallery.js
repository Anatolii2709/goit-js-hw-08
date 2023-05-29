// Add imports above this line
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
// Change code below this line

console.log(galleryItems);

// Change code below this line

const galleryList = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => {
  const galleryItem = ` 
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`;
  return galleryItem;
};

const galleryMarkup = galleryItems.map(createGalleryItem).join('');
galleryList.innerHTML = galleryMarkup;

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
  gallery.options.captionsData = 'alt';
  gallery.options.captionPosition = 'bottom';
  gallery.options.captionDelay = 250;
});
