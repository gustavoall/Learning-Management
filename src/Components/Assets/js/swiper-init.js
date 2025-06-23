import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: true,
  pagination: {
    clickable: true,
  },
});