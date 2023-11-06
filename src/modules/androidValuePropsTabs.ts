/* eslint-disable no-return-assign */
/* eslint-disable prefer-rest-params */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function androidValuePropsTabs() {
  // Fix for Safari
  if (navigator.userAgent.includes('Safari')) {
    const ts = document.querySelectorAll<HTMLInputElement>('.android_value-props-tab-link');
    ts.forEach(
      (t) =>
        (t.focus = function () {
          const x = window.scrollX,
            y = window.scrollY;
          const f = () => {
            setTimeout(() => window.scrollTo(x, y), 1);
            t.removeEventListener('focus', f);
          };
          t.addEventListener('focus', f);
          HTMLElement.prototype.focus.apply(this);
        })
    );
  }

  const tabTimelines: Array<gsap.core.Timeline> = [];

  $('.android_value-props-tab-link').each(function () {
    const $progressBar = $(this).find('.android_value-props-progbar');

    const tabTimeline = gsap.timeline({ paused: true });
    tabTimeline.to($progressBar, {
      width: '100%',
      duration: 15,
      ease: 'none',
      onComplete: function () {
        gsap.set($progressBar, { width: '0%' });
      },
    });

    tabTimelines.push(tabTimeline);
  });

  const tabAutoplay = gsap.delayedCall(15, function () {
    nextTab();
  });
  tabAutoplay.pause();
  ScrollTrigger.create({
    trigger: '.android_value-props-tabs',
    onEnter: () => tabAutoplay.play(),
    onLeave: () => tabAutoplay.pause(),
    onEnterBack: () => tabAutoplay.play(),
    onLeaveBack: () => tabAutoplay.pause(),
  });

  // Create a ScrollTrigger for the .image-tabs element
  ScrollTrigger.create({
    trigger: '.android_value-props-tabs',
    onEnter: () => {
      // Play the current tab's progress bar animation
      const $currentTab = $('.android_value-props-menu').children('.w--current:first');
      const currentIndex = $currentTab.index();
      tabTimelines[currentIndex].play();
    },
    onLeave: () => {
      // Pause the current tab's progress bar animation
      const $currentTab = $('.android_value-props-menu').children('.w--current:first');
      const currentIndex = $currentTab.index();
      tabTimelines[currentIndex].pause();
    },
    onEnterBack: () => {
      // Play the current tab's progress bar animation when scrolling back into view
      const $currentTab = $('.android_value-props-menu').children('.w--current:first');
      const currentIndex = $currentTab.index();
      tabTimelines[currentIndex].play();
    },
    onLeaveBack: () => {
      // Pause the current tab's progress bar animation when scrolling back out of view
      const $currentTab = $('.android_value-props-menu').children('.w--current:first');
      const currentIndex = $currentTab.index();
      tabTimelines[currentIndex].pause();
    },
  });

  // Pause the initial progress bar animation
  tabTimelines[0].pause();

  // Play the progress bar of the first tab on load
  //tabTimelines[0].play();

  function nextTab() {
    const $currentTab = $('.android_value-props-menu').children('.w--current:first');
    const currentIndex = $currentTab.index();

    tabTimelines[currentIndex].pause();

    const $next = $currentTab.next();
    if ($next.length) {
      $next.trigger('click');
    } else {
      $('.android_value-props-tab-link:first').trigger('click');
    }

    const $newCurrentTab = $('.android_value-props-menu').children('.w--current:first');
    const newIndex = $newCurrentTab.index();
    tabTimelines[newIndex].play();

    tabAutoplay.restart(true);
  }

  $('.android_value-props-menu')
    .on('mouseover', function () {
      tabAutoplay.pause();
      tabTimelines.forEach((timeline) => timeline.pause());
    })
    .on('mouseleave', function () {
      tabAutoplay.resume();
      const $currentTab = $('.android_value-props-menu').children('.w--current:first');
      const currentIndex = $currentTab.index();
      tabTimelines[currentIndex].play();
    });

  $('.android_value-props-tab-link').on('click', function () {
    $(this)
      .siblings('.android_value-props-tab-link')
      .find('.accordion_status')
      .removeClass('active');
    $(this).find('.accordion_status').addClass('active');
    tabTimelines.forEach((timeline) => timeline.progress(0).pause());
    const $clickedTab = $(this);
    const index = $clickedTab.index();

    tabTimelines[index].restart();
    tabAutoplay.restart(true);
  });
}
