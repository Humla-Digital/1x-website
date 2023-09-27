/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';
import 'swiper/css/scrollbar';

import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { initImageGalleryTabs } from 'src/modules/imageGalleryTabs';
import Swiper from 'swiper';
import { Mousewheel, Navigation, Scrollbar } from 'swiper/modules';
import { type SwiperOptions } from 'swiper/types/index.d';

import { hideEmptyDepartments } from '$utils/hideEmptyDepartments';

import { initDiscoverGallerySlider } from './modules/discoverPostSlider';
import { initTimedTextTabs } from './modules/timedTextTabs';
gsap.registerPlugin(SplitText);

initImageGalleryTabs();
hideEmptyDepartments();
initDiscoverGallerySlider();
initTimedTextTabs();

const careersImageSliderParams: SwiperOptions = {
  modules: [Navigation, Mousewheel, Scrollbar],
  direction: 'horizontal',
  slidesPerView: 1,
  freeMode: true,
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
      spaceBetween: 9.6,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 'auto',
      spaceBetween: 9.6,
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
    nextEl: '#careers-images-next',
    prevEl: '#careers-images-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    dragSize: 90,
    draggable: true,
  },
};
const careersImageSlider = new Swiper('.image-gallery', careersImageSliderParams);

if (window.innerWidth > 1399) {
  $('.wrapper_career-benefit').each(function (_i, _element) {
    const splitTextTimeline = gsap.timeline({ paused: true, reversed: true }),
      careerBenefit = $(this).find('.is_career-benefit-typed'),
      splitText = new SplitText(careerBenefit, { type: 'words,chars' }),
      { chars } = splitText;

    splitTextTimeline.from(chars, {
      autoAlpha: 0,
      duration: 0.01,
      stagger: 0.01,
    });
    $(this).on('mouseenter', typeText).on('mouseleave', typeText);
    function typeText() {
      splitTextTimeline.reversed() ? splitTextTimeline.play() : splitTextTimeline.reverse();
    }
  });
} else {
  $('.wrapper_career-benefit').on('click', function () {
    $(this).toggleClass('is-active');
    if ($(this).hasClass('is-active')) {
      $(this).find('.is_career-benefit-typed').addClass('is-active');
      const splitTextTimeline = gsap.timeline({ paused: true, reversed: true }),
        careerBenefit = $(this).find('.is_career-benefit-typed'),
        splitText = new SplitText(careerBenefit, { type: 'words,chars' }),
        { chars } = splitText;
      splitTextTimeline.from(chars, {
        autoAlpha: 0,
        duration: 0.01,
        stagger: 0.01,
      });
      splitTextTimeline.reversed() ? splitTextTimeline.play() : splitTextTimeline.reverse();
    } else {
      $(this).removeClass('is-active');
      $(this).find('.is_career-benefit-typed').removeClass('is-active');
    }
  });
}
