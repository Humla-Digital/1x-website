/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { initDiscoverGallerySlider } from 'src/modules/discoverPostSlider';
import { initImageGalleryTabs } from 'src/modules/imageGalleryTabs';
import { initOurAndroidsSlider } from 'src/modules/ourAndroidsSlider';
import { valuesTabs } from 'src/modules/valuesTabs';

import { hideEmptyDynSections } from '$utils/hideEmptyDynLists';
import { jobCounter } from '$utils/jobCounter';
import { pauseVideo } from '$utils/pauseVideo';

import { imageTabs } from './modules/imageTabs';
import Swiper from 'swiper';
import { Controller, Mousewheel, Navigation } from 'swiper/modules';
import { type SwiperOptions } from 'swiper/types/index.d';
import { typedTextTabs } from './modules/typedTextTabs';
gsap.registerPlugin(ScrollTrigger, SplitText);

declare global {
  interface Window {
    WebflowEditor: unknown;
  }
}
window.Webflow ||= [];
window.Webflow.push(() => {
  initDiscoverGallerySlider();
  initOurAndroidsSlider();
  jobCounter();
  pauseVideo();
  hideEmptyDynSections();
  if (!window.WebflowEditor) {
    valuesTabs();
    ourMissionTypedAnim()
    imageTabs();
    embodiedLearningAnim();
    exploreCareersAnim();
    ourStorySlider();
  } else {
  }
});

function ourMissionTypedAnim() {
  $('.section_typed-big-text').each(function () {
    const splitTextTimeline = gsap.timeline({ paused: true, reversed: true }),
      aboutText = $(this).find('.d-light-44'),
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

function embodiedLearningAnim() {
  $('.section_embodied-learning').each(function (index) {
    let targets1 = gsap.utils.toArray([
      $('.embodied-learning-header-row').find('h2'),
      $('.embodied-learning-header-row').find('p'),
    ]);
    let targets2 = gsap.utils.toArray('.embodied-learning-card');
    let triggerElement = $(this);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top center',
      },
    });
    tl.from(targets1, {
      autoAlpha: 0,
      stagger: 0.3,
    });
    tl.from(
      targets2,
      {
        autoAlpha: 0,
        x: '-20',
        stagger: 0.2,
        ease: 'power2.Out',
      },
      1
    );
  });
}
function exploreCareersAnim() {
  $('.section_explore-careers').each(function () {
    const triggerElement = $(this);
    const bgTarget = $(this).find('.content-wrapper_explore-careers');
    const contentTarget = gsap.utils.toArray([$(this).find('h2, p, .w-button')]);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top center',
      },
    });
    tl.from(bgTarget, {
      autoAlpha: 0,
    });
    tl.from(contentTarget, {
      autoAlpha: 0,
      stagger: 0.2,
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
