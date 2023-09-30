/* eslint-disable no-console */
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const androidScrollScene = $('.section_neo-features-scroll');
const targets = gsap.utils.toArray($('.is_pdp-android-scene'));
const mm = gsap.matchMedia();
const neoScrollScene = gsap.timeline({
  scrollTrigger: {
    markers: true,
    trigger: androidScrollScene,
    start: 'top center',
    scrub: 1,
  },
});
neoScrollScene.from(targets, {
  autoAlpha: 0,
  onComplete: function () {
    $(this).removeClass('is-active'); // then only replace with blue div with new height and width
  },
});
