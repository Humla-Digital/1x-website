/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { initDiscoverGallerySlider } from 'src/modules/discoverPostSlider';
import { valuesTabs } from 'src/modules/valuesTabs';
import Swiper from 'swiper';
import { Controller, Mousewheel, Navigation } from 'swiper/modules';
import { type SwiperOptions } from 'swiper/types/index.d';

import { hideEmptyDynSections } from '$utils/hideEmptyDynLists';
import { jobCounter } from '$utils/jobCounter';
import { pauseVideo } from '$utils/pauseVideo';

gsap.registerPlugin(ScrollTrigger, SplitText);

declare global {
  interface Window {
    WebflowEditor: unknown;
  }
}
window.Webflow ||= [];
window.Webflow.push(() => {
  initDiscoverGallerySlider();
  jobCounter();
  pauseVideo();
  hideEmptyDynSections();
  if (!window.WebflowEditor) {
    valuesTabs();
    ourMissionTypedAnim();
    ourStorySlider();
  } else {
  }
});

function ourMissionTypedAnim() {
  $('.section_typed-big-text').each(function () {
    const splitTextTimeline = gsap.timeline({ paused: true, reversed: true }),
      aboutText = $(this).find('h2'),
      splitText = new SplitText(aboutText, { type: 'words,chars' }),
      { chars } = splitText;
    splitTextTimeline.from(chars, {
      autoAlpha: 0,
      duration: 0.01,
      stagger: 0.05,
    });
    const triggerElement = $(this);
    ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top center',
      onEnter: () => splitTextTimeline.play(),
    });
  });
}

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
