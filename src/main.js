import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

import { createGalleryCard } from './js/render-functions';
import { fetchImages } from './js/pixabay-api';

const searchForm = document.querySelector('.search-form');
const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');
const loadMoreEl = document.querySelector('.load-more');

const lightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
});

let currentPage = 1;
let searchedValue = '';
let cardHeight = 0;

const onFormSubmit = async event => {
  try {
    event.preventDefault();
    galleryEl.innerHTML = '';
    loaderEl.classList.remove('is-hidden');
    searchedValue = searchForm.elements.user_query.value;

    currentPage = 1;
    const response = await fetchImages(searchedValue, currentPage);
    console.log(response);

    if (searchedValue === '') {
      iziToast.warning({
        title: 'Caution',
        message: 'Fill in the search field',
        timeout: 2000,
        position: 'topCenter',
      });
      return;
    }

    loaderEl.classList.add('is-hidden');

    if (response.data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'center',
        timeout: 2000,
      });
      galleryEl.innerHTML = '';
      searchForm.reset();

      return;
    }

    const galleryCardsTemplate = response.data.hits
      .map(imgDetails => createGalleryCard(imgDetails))
      .join('');
      galleryEl.innerHTML = galleryCardsTemplate;
      
      const galleryCardEl = document.querySelector('li');
      cardHeight = galleryCardEl.getBoundingClientRect().height;

    loadMoreEl.classList.remove('is-hidden');

    lightBox.refresh();

    if (currentPage >= Math.ceil(response.data.totalHits / 15)) {
      loadMoreEl.classList.add('is-hidden');
      iziToast.info({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }

    searchForm.reset();
  } catch (err) {
    console.log(err);
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'center',
      timeout: 2000,
    });
  }
};

const onLoadMoreClick = async event => {
  try {
    currentPage++;
    const response = await fetchImages(searchedValue, currentPage);
    const galleryCardsTemplate = response.data.hits
      .map(imgDetails => createGalleryCard(imgDetails))
      .join('');
      galleryEl.insertAdjacentHTML('beforeend', galleryCardsTemplate);

      lightBox.refresh();
      
      scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });

      if (currentPage >= Math.ceil(response.data.totalHits / 15)) {
        loadMoreEl.classList.add('is-hidden');
        iziToast.info({
          position: 'topRight',
          message: "We're sorry, but you've reached the end of search results.",
        });
      }

  } catch (err) {
    console.log(err);
  }
};

searchForm.addEventListener('submit', onFormSubmit);
loadMoreEl.addEventListener('click', onLoadMoreClick);
