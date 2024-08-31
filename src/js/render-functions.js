export const createGalleryCard = image => {
  return `<li class="gallery-item">
  <a class="gallery-link" href="${image.largeImageURL}">
    <img
      class="gallery-image"
      src="${image.webformatURL}"
      alt="${image.tags}"
    />
    <div class="wrapper">
    <ul class="wrapper-list">
    <li class="wrapper-item">Likes<span class="span-number">${image.likes}</span></li>
    <li class="wrapper-item">Views<span class="span-number">${image.views}</span></li>
    <li class="wrapper-item">Comments<span class="span-number">${image.comments}</span></li>
    <li class="wrapper-item">Downloads<span class="span-number">${image.downloads}</span></li>
    </ul>
    </div>
  </a>
</li>
`;
};
