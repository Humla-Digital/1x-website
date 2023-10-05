/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initDiscoverGallerySlider } from 'src/modules/discoverPostSlider';
import { initImageGalleryTabs } from 'src/modules/imageGalleryTabs';
import { initOurAndroidsSlider } from 'src/modules/ourAndroidsSlider';
import { initTimedTextTabs } from 'src/modules/timedTextTabs';
import { initValuesTabs } from 'src/modules/valuesTabs';

import { jobCounter } from '$utils/jobCounter';
import { pauseVideo } from '$utils/pauseVideo';
gsap.registerPlugin(ScrollTrigger);

declare global {
  interface Window {
    WebflowEditor: unknown;
  }
}
window.Webflow ||= [];
window.Webflow.push(() => {
  if (!window.WebflowEditor) {
    initValuesTabs();
    initTimedTextTabs();
    initImageGalleryTabs();
    embodiedLearningAnim();
    exploreCareersAnim();
  } else {
    pauseVideo();
    jobCounter();
    initOurAndroidsSlider();
    initDiscoverGallerySlider();
  }
});

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
