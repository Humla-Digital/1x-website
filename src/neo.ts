/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';
import $ from 'jquery';

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
    faqModule();
    androidScene();
    aboutNeoTypedAnim();
    specsToggle();
  } else {
    $('.is_pdp-android-scene').addClass('in-editor');
  }
});

function specsToggle() {
  const imperialHeight = '5.41 feet';
  const imperialWeight = '66 pounds';
  const imperialWalkspeed = '2.5 miles/hour walk speed';
  const imperialRunspeed = '7.5 miles/hour run speed';
  const imperialCarry = '44 pound carry capacity';

  const metricHeight = '1.65 meters';
  const metricWeight = '30 kilograms';
  const metricWalkspeed = '4 kilometers/hour walk speed';
  const metricRunspeed = '12 kilometers/hour run speed';
  const metricCarry = '20 kilograms carry capacity';

  $('.metric-toggle_item').on('click', function () {
    $(this).addClass('is-active');
    $(this).siblings('.metric-toggle_item').removeClass('is-active');
    ScrollTrigger.refresh();
  });
  $('#standard').on('click', function () {
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
    0
  );
  sceneTl.to(
    target4,
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
    target5,
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
    target5,
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
  sceneTl.to(
    target6,
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
