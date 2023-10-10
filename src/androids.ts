import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { hideEmptyDynSections } from '$utils/hideEmptyDynLists';

import { initDiscoverGallerySlider } from './modules/discoverPostSlider';
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
    androidsHeroAnim();
    initDiscoverGallerySlider();
    faqModule();
    hideEmptyDynSections();
  } else {
  }
});

function androidsHeroAnim() {
  $('.section_androids-hero').each(function () {
    const triggerElement = $(this);
    const targetElement = gsap.utils.toArray($(this).find('.wrapper-android'));

    const tl = gsap.timeline({ scrollTrigger: { trigger: triggerElement } });
    tl.to(targetElement, { autoAlpha: 1, stagger: 0.3 });
  });
}
