/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/controller';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import $ from 'jquery';
import { initDiscoverGallerySlider } from 'src/modules/discoverPostSlider';
import Swiper from 'swiper';
import { Controller, Mousewheel, Navigation } from 'swiper/modules';
import { type SwiperOptions } from 'swiper/types/index.d';

import { valuesTabs } from './modules/valuesTabs';
gsap.registerPlugin(ScrollTrigger);

declare global {
  interface Window {
    WebflowEditor: unknown;
  }
}
window.Webflow ||= [];
window.Webflow.push(() => {
  if (!window.WebflowEditor) {
    initDiscoverGallerySlider();
    valuesTabs();
    aboutAnimations();
    ourStorySlider();
  } else {
  }
});

/* OUR STORY SLIDER */
function ourStorySlider() {
  const cardsSliderParams: SwiperOptions = {
    modules: [Controller, Mousewheel],
    slidesPerView: 1,
    spaceBetween: 56,
    speed: 400,
    setWrapperSize: false,
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
    setWrapperSize: false,
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
}

function aboutAnimations() {
  $('.section_our-perspective').each(function () {
    const triggerElement = $(this);
    const targetElements = gsap.utils.toArray(
      '.image-wrapper_our-perspective, #perspective-animate-brow, #perspective-animate-text'
    );
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top center',
      },
    });
    tl.from(targetElements, {
      autoAlpha: 0,
      stagger: 0.2,
    });
  });

  $('.section_explore-careers').each(function () {
    const triggerElement = $(this);
    const bgTarget = $(this).find('.content-wrapper_explore-careers');
    const contentTargets = gsap.utils.toArray(
      '#explore-anim-1, #explore-anim-2, #explore-anim-button'
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top center',
      },
    });
    tl.from(bgTarget, {
      autoAlpha: 0,
    });
    tl.from(contentTargets, {
      autoAlpha: 0,
      stagger: 0.2,
    });
  });
}
