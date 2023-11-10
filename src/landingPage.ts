import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

window.Webflow ||= [];
window.Webflow.push(() => {
  gsap.registerPlugin(ScrollTrigger);

  function headerAnim() {
    $('.lp_section-hero').each(function () {
      const target = $('.lp-header-circles-wrapper').find('path');
      const headerAnimation = gsap.timeline();

      headerAnimation.from(target, {
        autoAlpha: '0',
        y: '-20',
        duration: 1.2,
        stagger: 0.12,
        delay: 1.25,
      });
    });
  }

  function footerAnim() {
    const footerTriggerElement = $('.lp_section-cta');
    const footerTarget = $('.lp-footer-circles').find('path');
    const footerAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: footerTriggerElement,
        onEnter: () => playFooterAnim(),
      },
    });

    footerAnimation.paused(true);
    function playFooterAnim() {
      footerAnimation.play();
    }

    footerAnimation.from(footerTarget, {
      autoAlpha: '0',
      y: '20',
      duration: 1.2,
      stagger: 0.12,
    });
  }

  if ('.lp-header-circles-wrapper') {
    headerAnim();
  }
  if ('.lp-footer-circles') {
    footerAnim();
  }
});
