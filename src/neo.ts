/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';
import $ from 'jquery';

import { pauseVideo } from '$utils/pauseVideo';

import { androidValuePropsTabs } from './modules/androidValuePropsTabs';
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
    careerBenefits();
    faqModule();
    androidScene();
    aboutNeoTypedAnim();
    specsToggle();
    pauseVideo();
  } else {
    $('.is_pdp-android-scene').addClass('in-editor');
  }
});

function specsToggle() {
  const imperialHeight = '5 foot 6 inches';
  const imperialWeight = '66 pounds';
  const imperialWalkspeed = '2.5 miles/hour walk speed';
  const imperialRunspeed = '7.5 miles/hour run speed';
  const imperialCarry = '44 pound carry capacity';

  const metricHeight = '1.73 meters';
  const metricWeight = '30 kilograms';
  const metricWalkspeed = '4 kilometers/hour walk speed';
  const metricRunspeed = '12 kilometers/hour run speed';
  const metricCarry = '20 kilograms carry capacity';

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
    $('#run-speed').text(imperialRunspeed);
    $('#carry-capacity').text(imperialCarry);
  });
  $('#metric').on('click', function () {
    ScrollTrigger.refresh();
    $('#height').text(metricHeight);
    $('#weight').text(metricWeight);
    $('#walk-speed').text(metricWalkspeed);
    $('#run-speed').text(metricRunspeed);
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

function aboutNeoTypedAnim() {
  $('.section_about-neo').each(function () {
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
