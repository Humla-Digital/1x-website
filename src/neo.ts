/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';
import $ from 'jquery';

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
    careerBenefits();
    faqModule();
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
  });
  $('#imperial').on('click', function () {
    $('#height').text(imperialHeight);
    $('#weight').text(imperialWeight);
    $('#walk-speed').text(imperialWalkspeed);
    $('#run-speed').text(imperialRunspeed);
    $('#carry-capacity').text(imperialCarry);
  });
  $('#metric').on('click', function () {
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

$('.android_value-props-tab-link').on('click', function () {
  $(this).find('.android_value-props-content').addClass('is-active');
  $(this)
    .siblings('.android_value-props-tab-link')
    .find('.android_value-props-content')
    .removeClass('is-active');
});

$(function () {
  // Set duration of tab cycle in milliseconds
  const tabDuration = 2000;

  // Starts the tab cycle
  let tabTimeout: number | undefined;
  clearTimeout(tabTimeout);

  tabLoop($('.android_value-props-tab-link.w--current'));

  // Define cycle through all tabs
  function tabLoop(trigger: JQuery<HTMLElement>) {
    function startProgressBar() {
      trigger.find('.android_value-props-progbar').animate({ width: '100%' }, tabDuration);
    }

    function stopProgressBar() {
      $('.android_value-props-progbar').stop(true, true).css('width', '0%');
    }
    startProgressBar();
    // Loop to next/first tab after tabDuration and reset / start progressbar
    tabTimeout = setTimeout(function () {
      const $next = trigger.next();
      startProgressBar();
      if ($next.length) {
        $next.removeAttr('href').trigger('click');
        stopProgressBar();
        startProgressBar();
      } else {
        $('.android_value-props-tab-link:first').removeAttr('href').trigger('click');
        stopProgressBar();
        startProgressBar();
      }
    }, tabDuration);
    // Reset timeout if a tab is clicked
    $('.android_value-props-tab-link').on('click', function () {
      clearTimeout(tabTimeout);
      tabLoop($(this));
      stopProgressBar();
      startProgressBar();
    });
  }
});
