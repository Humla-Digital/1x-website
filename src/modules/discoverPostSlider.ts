/* eslint-disable @typescript-eslint/no-unused-vars */
import 'swiper/css';
import 'swiper/css/navigation';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper from 'swiper';
import { Mousewheel, Navigation } from 'swiper/modules';
import { type SwiperOptions } from 'swiper/types/index.d';

import { sliderCursor } from './sliderCursor';

sliderCursor();

export function initDiscoverGallerySlider() {
  gsap.registerPlugin(ScrollTrigger);
  $('.section_discover-slider').each(function (index) {
    const cardTargets = gsap.utils.toArray($(this).find('.swiper-slide'));
    const h2Target = $(this).find('h2');
    const buttonTarget = $(this).find('.wrapper_button-slider-controls');
    const triggerElement = $(this);
    const tl = gsap.timeline({
      scrollTrigger: {
        start: 'top center',
        trigger: triggerElement,
      },
    });
    tl.from(h2Target, {
      autoAlpha: 0,
      duration: 0.2,
    });
    tl.from(cardTargets, {
      autoAlpha: 0,
      stagger: 0.1,
      duration: 0.4,
    });
    tl.from(buttonTarget, {
      autoAlpha: 0,
      duration: 0.3,
    });
  });
  const discoverGallerySliderParams: SwiperOptions = {
    modules: [Navigation, Mousewheel],
    direction: 'horizontal',
    slidesPerView: 1,
    slidesPerGroup: 1,
    setWrapperSize: false,
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
