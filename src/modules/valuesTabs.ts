import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function valuesTabs() {
  const progressBarAnimation = gsap.to('.value-tabs-inner', {
    width: '100%',
    duration: 10,
    ease: 'none',
    paused: true,
    onComplete: function () {
      gsap.set('.value-tabs-inner', { width: '0%' });
      nextTab();
    },
  });

  let tabAutoplay: gsap.core.Timeline;

  function startTabAutoplay() {
    tabAutoplay = gsap.timeline({ paused: true });
    tabAutoplay.to({}, { duration: 10, onComplete: nextTab });
    tabAutoplay.play();
  }

  // Define ScrollTrigger to start animations when the module is in view
  ScrollTrigger.create({
    trigger: '.value_gallery-tabs-wrapper',
    start: 'top 50%',
    onEnter: () => {
      progressBarAnimation.play();
      startTabAutoplay();
    },
    onLeave: () => {
      progressBarAnimation.pause();
      tabAutoplay.pause();
    },
  });

  function nextTab() {
    const $currentTab = $('.tab_values.w--current');
    const $next = $currentTab.next();

    if ($next.length) {
      $next.trigger('click');
    } else {
      $('.tab_values:first').trigger('click');
    }
  }

  $('.value_gallery-tabs-content').on('mouseenter', function () {
    progressBarAnimation.pause();
    tabAutoplay.pause();
  });

  $('.value_gallery-tabs-content').on('mouseleave', function () {
    progressBarAnimation.resume();
    tabAutoplay.play();
  });

  $('.tab_values').on('click', function () {
    progressBarAnimation.restart();
    tabAutoplay.restart();
  });
}
