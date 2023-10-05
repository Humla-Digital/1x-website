/* eslint-disable @typescript-eslint/no-unused-vars */
import 'swiper/css';
import 'swiper/css/navigation';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Swiper from 'swiper';
import { Mousewheel, Navigation } from 'swiper/modules';
import { type SwiperOptions } from 'swiper/types/index.d';
export function initOurAndroidsSlider() {
  gsap.registerPlugin(ScrollTrigger);
  $('.section_our-androids').each(function (index) {
    const triggerElement = $(this);
    const targets = gsap.utils.toArray([
      '.our-androids-title',
      $(this).find('.d-light-18'),
      $(this).find('.button-group'),
    ]);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top center',
      },
    });
    tl.from(targets, {
      autoAlpha: 0,
      stagger: 0.1,
    });
  });

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
      nextEl: '#our-androids-next',
      prevEl: '#our-androids-prev',
    },
  };
  const ourAndroidsSlider = new Swiper('.our-androids-slider', ourAndroidsSliderParams);
}
