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
