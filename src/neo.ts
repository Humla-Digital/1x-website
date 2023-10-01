/* eslint-disable no-console */
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import $ from 'jquery';

import { faqModule } from './modules/faqs';
gsap.registerPlugin(ScrollTrigger);
declare global {
  interface Window {
    WebflowEditor: unknown;
  }
}
window.Webflow ||= [];
window.Webflow.push(() => {
  if (!window.WebflowEditor) {
    neoScrollScene();
    faqModule();
  } else {
    $('.is_pdp-android-scene').addClass('in-editor');
  }
});

function neoScrollScene() {
  const androidTrigger = $('.section_neo-features-scroll');

  const target1 = $('.is_pdp-android-scene:first-child');
  const target2 = $('.is_pdp-android-scene:nth-child(2)');
  const target3 = $('.is_pdp-android-scene:nth-child(3)');

  gsap.set(target1, { autoAlpha: 1 });
  gsap.set(target2, { autoAlpha: 0 });
  gsap.set(target3, { autoAlpha: 0 });
  //const mm = gsap.matchMedia();

  const androidScrollScene = gsap.timeline({
    scrollTrigger: {
      trigger: androidTrigger,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
      markers: true,
    },
  });

  androidScrollScene.to(
    target1,
    {
      autoAlpha: 0,
    },
    0
  );
  androidScrollScene.to(
    target2,
    {
      autoAlpha: 1,
    },
    1
  );
  androidScrollScene.to(
    target2,
    {
      autoAlpha: 0,
    },
    2
  );
  androidScrollScene.to(
    target3,
    {
      autoAlpha: 1,
    },
    3
  );
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
        $next.removeAttr('href').click();
        stopProgressBar();
        startProgressBar();
      } else {
        $('.android_value-props-tab-link:first').removeAttr('href').click();
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
