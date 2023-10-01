/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/controller';

import $ from 'jquery';
import { initDiscoverGallerySlider } from 'src/modules/discoverPostSlider';
import { initImageGalleryTabs } from 'src/modules/imageGalleryTabs';
import { initValuesTabs } from 'src/modules/valuesTabs';
import Swiper from 'swiper';
import { Controller, Mousewheel, Navigation } from 'swiper/modules';
import { type SwiperOptions } from 'swiper/types/index.d';

initValuesTabs();
initImageGalleryTabs();
initDiscoverGallerySlider();
/* OUR STORY SLIDER */
const cardsSliderParams: SwiperOptions = {
  modules: [Controller, Mousewheel],
  slidesPerView: 1,
  spaceBetween: 56,
  speed: 400,
  setWrapperSize: true,
  mousewheel: {
    forceToAxis: true,
  },
  breakpoints: {
    // when window width is >= 290px
    290: {
      slidesPerView: 1,
      spaceBetween: 20,
      setWrapperSize: false,
      slidesPerGroup: 1,
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
};
const cardsSlider = new Swiper('.our-story-cards-slider', cardsSliderParams);

const timelineSliderParams: SwiperOptions = {
  modules: [Navigation, Controller],
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 400,
  slideToClickedSlide: true,
  setWrapperSize: true,
  slideActiveClass: 'is-active',
  breakpoints: {
    // when window width is >= 290px
    290: {
      slidesPerView: 1,
      setWrapperSize: false,
      slidesPerGroup: 1,
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
  navigation: {
    nextEl: $('#our-story-next')[0],
    prevEl: $('#our-story-prev')[0],
  },
};
const timelineSlider = new Swiper('.our-story-timeline-slider', timelineSliderParams);
timelineSlider.controller.control = cardsSlider;
cardsSlider.controller.control = timelineSlider;
