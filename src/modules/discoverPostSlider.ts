/* eslint-disable @typescript-eslint/no-unused-vars */
import 'swiper/css';
import 'swiper/css/navigation';

import Swiper from 'swiper';
import { Mousewheel, Navigation } from 'swiper/modules';
import { type SwiperOptions } from 'swiper/types/index.d';

import { sliderCursor } from './sliderCursor';

sliderCursor();

export function initDiscoverGallerySlider() {
  const discoverGallerySliderParams: SwiperOptions = {
    modules: [Navigation, Mousewheel],
    direction: 'horizontal',
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    mousewheel: {
      forceToAxis: true,
    },
    speed: 300,
    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 'auto',
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 'auto',
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: '#discover-next',
      prevEl: '#discover-prev',
    },
  };
  const discoverGallerySlider = new Swiper('.discover-slider', discoverGallerySliderParams);
}
