/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';
import 'swiper/css/scrollbar';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { SplitText } from 'gsap/SplitText';
import { initImageGalleryTabs } from 'src/modules/imageGalleryTabs';
import Swiper from 'swiper';
import { Mousewheel, Navigation, Scrollbar } from 'swiper/modules';
import { type SwiperOptions } from 'swiper/types/index.d';

import { hideEmptyDepartments } from '$utils/hideEmptyDepartments';

import { initDiscoverGallerySlider } from './modules/discoverPostSlider';
import { initTimedTextTabs } from './modules/timedTextTabs';

gsap.registerPlugin(SplitText, ScrollTrigger);

declare global {
  interface Window {
    WebflowEditor: unknown;
  }
}
window.Webflow ||= [];
window.Webflow.push(() => {
  if (!window.WebflowEditor) {
    careerBenefits();
    initDiscoverGallerySlider();
    initTimedTextTabs();
    initImageGalleryTabs();
    companyValuesAnim();
    featuredPostAnims();
    hideEmptyDepartments();
    careersImageGallery();
  } else {
  }
});

function companyValuesAnim() {
  $('.section_company-values').each(function (index) {
    const triggerElement = $(this);
    const horizontalLine = $('.horizontal-line');
    const tlHzLine = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top +=1200',
      },
    });
    tlHzLine.from(horizontalLine, {
      width: '0',
      ease: 'power3.inOut',
      duration: 2.25,
    });

    const valueContent = $('.content-wrapper_company-value');
    const tlValueContent = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top center',
      },
    });
    tlValueContent.from(valueContent, {
      autoAlpha: '0',
      stagger: 0.25,
      duration: '0.8',
      x: '-20',
      ease: 'power1.Out',
    });
  });
}

function careersImageGallery() {
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
}
function careerBenefits() {
  if (window.innerWidth > 1399) {
    $('.wrapper_splittext-row').each(function (_i, _element) {
      const splitTextTimeline = gsap.timeline({ paused: true, reversed: true }),
        careerBenefit = $(this).find('.is-splittext'),
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
    $('.wrapper_splittext-row').on('click', function () {
      $(this).toggleClass('is-active');
      if ($(this).hasClass('is-active')) {
        $(this).find('.is-splittext').addClass('is-active');
        const splitTextTimeline = gsap.timeline({ paused: true, reversed: true }),
          careerBenefit = $(this).find('.is-splittext'),
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
        $(this).find('.is-splittext').removeClass('is-active');
      }
    });
  }
}
function featuredPostAnims() {
  $('.section_featured-team-post').each(function () {
    const triggerElement = $(this);
    const targetElements = gsap.utils.toArray(
      $(this).find('.image-wrapper_featured-team-post, .content-wrapper_featured-team-post')
    );
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top center',
      },
    });
    tl.from(targetElements, {
      autoAlpha: 0,
      x: '-20',
      stagger: 0.2,
      ease: 'power2.out',
    });
  });

  $('.section_featured-studio-post').each(function () {
    const triggerElement = $(this);
    const targetElements = gsap.utils.toArray(
      $(this).find('.image-wrapper_featured-team-post, .content-wrapper_featured-team-post')
    );
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top center',
      },
    });
    tl.from(targetElements, {
      autoAlpha: 0,
      x: '-20',
      stagger: 0.2,
      ease: 'power2.out',
    });
  });
}
