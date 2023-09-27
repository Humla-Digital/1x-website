/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { initImageGalleryTabs } from 'src/modules/imageGalleryTabs';
import Swiper from 'swiper';

import { hideEmptyDepartments } from '$utils/hideEmptyDepartments';
gsap.registerPlugin(SplitText);
export {};
declare global {
  interface Window {
    WebflowEditor: unknown;
  }
}
window.Webflow ||= [];
window.Webflow.push(() => {
  if (!window.WebflowEditor) {
    console.log('Wont run in Webflow editor');
  } else {
    console.log('Will run in the Webflow editor');
  }
});
initImageGalleryTabs();
hideEmptyDepartments();

/*CAREERS IMAGE GALLERY SLIDER */
$('.section_careers-image-slider').each(function (index) {
  console.log($(this).find('.swiper'));
  const careersImageSlider = new Swiper($(this).find('.swiper')[0], {
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
      nextEl: $(this).find('.swiper-arrow.button-next')[0],
      prevEl: $(this).find('.swiper-arrow.button-prev')[0],
    },
    scrollbar: {
      el: $(this).find('.swiper-scrollbar')[0],
      dragSize: 90,
      draggable: true,
    },
  });
});
/*
if (window.innerWidth > 1399) {
  $('.wrapper_career-benefit').each(function (i, element) {
    const splitTextTimeline = gsap.timeline({ paused: true, reversed: true }),
      theText = $(this).find('.is_career-benefit-typed'),
      mySplitText = new SplitText(theText, { type: 'words,chars' }),
      { chars } = mySplitText;

    splitTextTimeline.to(chars, 0.01, { autoAlpha: 0 }, 0.01);

    $(this).hover(makeItWork, makeItWork);

    function makeItWork() {
      splitTextTimeline.reversed() ? splitTextTimeline.play() : splitTextTimeline.reverse();
    }
  });
}
*/
