/* eslint-disable @typescript-eslint/no-unused-vars */
import 'swiper/css';
import 'swiper/css/navigation';

import Swiper from 'swiper';
import { Mousewheel, Navigation } from 'swiper/modules';
import { type SwiperOptions } from 'swiper/types/index.d';

export function initOurAndroidsSlider() {
  const ourAndroidsSliderParams: SwiperOptions = {
    modules: [Navigation, Mousewheel],
    direction: 'horizontal',
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 200,
    loop: false,
    centeredSlides: true,
    mousewheel: {
      forceToAxis: true,
    },
    speed: 300,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 1,
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 1,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-arrow.button-next',
      prevEl: 'swiper-arrow.button-prev',
    },
  };
  const ourAndroidsSlider = new Swiper('.our-androids-slider', ourAndroidsSliderParams);
}
