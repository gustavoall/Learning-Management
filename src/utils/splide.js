import Splide from '@splidejs/splide';

export function initSplide() {
  const el = document.querySelector('.splide');
  if (!el) return;

  const splide = new Splide(el, {
    type: 'loop',
    perPage: 1,
    autoplay: true,
  });

  splide.mount();
}