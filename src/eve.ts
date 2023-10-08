/* eslint-disable @typescript-eslint/no-unused-vars */
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Swiper from 'swiper';
import { Mousewheel, Pagination } from 'swiper/modules';
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
    aboutEveTypedAnim();
    specsToggle();
    eveLearnsSlider();
    pauseVideo();
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
        stagger: 0.01,
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
$('.stories_tab-link-15s').on('click', function () {
  ScrollTrigger.refresh();
});
function androidScene() {
  const target1 = $('#scene-content-1');
  const target2 = $('#scene-content-2');
  const target3 = $('#scene-content-3');
  gsap.set(target2, {
    autoAlpha: 0,
  });
  gsap.set(target3, {
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
    0
  );
  sceneTl.to(
    target2,
    {
      autoAlpha: 1,
    },
    1
  );
  sceneTl.to(
    target2,
    {
      autoAlpha: 0,
    },
    3
  );
  sceneTl.to(
    target3,
    {
      autoAlpha: 1,
    },
    4
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
