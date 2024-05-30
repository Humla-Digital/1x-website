/* eslint-disable @typescript-eslint/no-unused-vars */
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Swiper from 'swiper';
import { Controller, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { type SwiperOptions } from 'swiper/types';

import { pauseVideo } from '$utils/pauseVideo';

import { androidValuePropsTabs } from './modules/androidValuePropsTabs';
import { contentCarouselTabs } from './modules/contentCarouselTabs';
import { faqModule } from './modules/faqs';

gsap.registerPlugin(ScrollTrigger, SplitText);

declare global {
  interface Window {
    WebflowEditor: unknown;
  }
}
window.Webflow ||= [];
window.Webflow.push(() => {
  if (!window.WebflowEditor) {
    androidValuePropsTabs();
    contentCarouselTabs();
    careerBenefits();
    faqModule();
    androidScene();
    //aboutEveTypedAnim();
    specsToggle();
    //eveLearnsSlider();
    pauseVideo();
    ourStorySlider();
  } else {
    $('.is_pdp-android-scene').addClass('in-editor');
  }
});

function specsToggle() {
  const imperialHeight = '6 foot 2 inches';
  const imperialWeight = '192 pounds';
  const imperialWalkspeed = '9 miles/hour top speed';
  const imperialCarry = '33 pound carry capacity';

  const metricHeight = '1.86 meters';
  const metricWeight = '86 kilograms';
  const metricWalkspeed = '14.4 kilometers/hour top speed';
  const metricCarry = '15 kilograms carry capacity';

  $('.metric-toggle_item').on('click', function () {
    $(this).addClass('is-active');
    $(this).siblings('.metric-toggle_item').removeClass('is-active');
    ScrollTrigger.refresh();
  });
  $('#imperial').on('click', function () {
    ScrollTrigger.refresh();
    $('#height').text(imperialHeight);
    $('#weight').text(imperialWeight);
    $('#walk-speed').text(imperialWalkspeed);
    $('#carry-capacity').text(imperialCarry);
  });
  $('#metric').on('click', function () {
    ScrollTrigger.refresh();
    $('#height').text(metricHeight);
    $('#weight').text(metricWeight);
    $('#walk-speed').text(metricWalkspeed);

    $('#carry-capacity').text(metricCarry);
  });
}
specsToggle();

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
        stagger: 0.03,
      });
      $(this).on('mouseenter', typeText).on('mouseleave', typeText);
      function typeText() {
        splitTextTimeline.reversed() ? splitTextTimeline.play() : splitTextTimeline.reverse();
      }
    });
  } else {
    $('.wrapper_splittext-row').on('click', function () {
      ScrollTrigger.refresh();
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
          stagger: 0.03,
        });
        splitTextTimeline.reversed() ? splitTextTimeline.play() : splitTextTimeline.reverse();
      } else {
        $(this).removeClass('is-active');
        $(this).find('.is-splittext').removeClass('is-active');
      }
    });
  }
}
$('.stories_tab-link-15s').on('click', function () {
  ScrollTrigger.refresh();
});
function androidScene() {
  const target1 = $('#scene-content-1');
  const target2 = $('#scene-content-2');
  const target3 = $('#scene-content-3');

  const target4 = $('#scene-head-1');
  const target5 = $('#scene-head-2');
  const target6 = $('#scene-head-3');

  gsap.set(target2, {
    autoAlpha: 0,
  });
  gsap.set(target3, {
    autoAlpha: 0,
  });
  gsap.set(target5, {
    autoAlpha: 0,
  });
  gsap.set(target6, {
    autoAlpha: 0,
  });
  const scene = $('#android-scroll-scene');
  const sceneTl = gsap.timeline({
    scrollTrigger: {
      trigger: scene,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.2,
    },
  });
  sceneTl.to(
    target1,
    {
      autoAlpha: 0,
    },
    1
  );
  sceneTl.to(
    target4,
    {
      autoAlpha: 0,
    },
    1
  );
  sceneTl.to(
    target2,
    {
      autoAlpha: 1,
    },
    3
  );
  sceneTl.to(
    target5,
    {
      autoAlpha: 1,
    },
    3
  );
  sceneTl.to(
    target2,
    {
      autoAlpha: 0,
    },
    5
  );
  sceneTl.to(
    target5,
    {
      autoAlpha: 0,
    },
    5
  );
  sceneTl.to(
    target3,
    {
      autoAlpha: 1,
    },
    6
  );
  sceneTl.to(
    target6,
    {
      autoAlpha: 1,
    },
    6
  );
}
function eveLearnsSlider() {
  const cardsSliderParams: SwiperOptions = {
    modules: [Mousewheel, Pagination],
    slidesPerView: 'auto',
    spaceBetween: 40,
    speed: 400,
    setWrapperSize: false,
    mousewheel: {
      forceToAxis: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '</span>';
      },
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
        slidesPerView: 'auto',
      },
    },
  };
  const cardsSlider = new Swiper('.our-story-cards-slider', cardsSliderParams);
}

function aboutEveTypedAnim() {
  $('.section_about-eve').each(function () {
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
$();

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
