import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { initDiscoverGallerySlider } from './modules/discoverPostSlider';
import { faqModule } from './modules/faqs';
gsap.registerPlugin(ScrollTrigger);

$('.section_androids-hero').each(function () {
  const triggerElement = $(this);
  const targetElement = gsap.utils.toArray($(this).find('.wrapper-android'));

  const tl = gsap.timeline({ scrollTrigger: { trigger: triggerElement } });
  tl.to(targetElement, { autoAlpha: 1, stagger: 0.3 });
});

initDiscoverGallerySlider();
faqModule();
declare global {
  interface Window {
    WebflowEditor: unknown;
  }
}
window.Webflow ||= [];
window.Webflow.push(() => {
  if (!window.WebflowEditor) {
  } else {
  }
});
