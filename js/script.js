const closeBtn = document.querySelector('.js-btn__close');
const bannerEl = document.querySelector('.js-banner__wrapper');

closeBtn.addEventListener('click', onCloseBtnClick);

function onCloseBtnClick (evt) {
  bannerEl.classList.add('is-close');
}