import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function imageTabs() {
  const tabTimelines: Array<gsap.core.Timeline> = [];

  $('.image-tabs-link').each(function () {
    const $progressBar = $(this).find('.tabs-link-inner');

    const tabTimeline = gsap.timeline({ paused: true });
    tabTimeline.to($progressBar, {
      width: '100%',
      duration: 10,
      ease: 'none',
      onComplete: function () {
        gsap.set($progressBar, { width: '0%' });
      },
    });

    tabTimelines.push(tabTimeline);
  });

  const tabAutoplay = gsap.delayedCall(10, function () {
    nextTab();
  });
  tabAutoplay.pause();
  ScrollTrigger.create({
    trigger: '.image-tabs',
    onEnter: () => tabAutoplay.play(),
    onLeave: () => tabAutoplay.pause(),
    onEnterBack: () => tabAutoplay.play(),
    onLeaveBack: () => tabAutoplay.pause(),
  });

  // Create a ScrollTrigger for the .image-tabs element
  ScrollTrigger.create({
    trigger: '.image-tabs',
    onEnter: () => {
      // Play the current tab's progress bar animation
      const $currentTab = $('.image-tabs-menu').children('.w--current:first');
      const currentIndex = $currentTab.index();
      tabTimelines[currentIndex].play();
    },
    onLeave: () => {
      // Pause the current tab's progress bar animation
      const $currentTab = $('.image-tabs-menu').children('.w--current:first');
      const currentIndex = $currentTab.index();
      tabTimelines[currentIndex].pause();
    },
    onEnterBack: () => {
      // Play the current tab's progress bar animation when scrolling back into view
      const $currentTab = $('.image-tabs-menu').children('.w--current:first');
      const currentIndex = $currentTab.index();
      tabTimelines[currentIndex].play();
    },
    onLeaveBack: () => {
      // Pause the current tab's progress bar animation when scrolling back out of view
      const $currentTab = $('.image-tabs-menu').children('.w--current:first');
      const currentIndex = $currentTab.index();
      tabTimelines[currentIndex].pause();
    },
  });

  // Pause the initial progress bar animation
  tabTimelines[0].pause();

  // Play the progress bar of the first tab on load
  //tabTimelines[0].play();

  function nextTab() {
    const $currentTab = $('.image-tabs-menu').children('.w--current:first');
    const currentIndex = $currentTab.index();

    tabTimelines[currentIndex].pause();

    const $next = $currentTab.next();
    if ($next.length) {
      $next.trigger('click');
    } else {
      $('.image-tabs-link:first').trigger('click');
    }

    const $newCurrentTab = $('.image-tabs-menu').children('.w--current:first');
    const newIndex = $newCurrentTab.index();
    tabTimelines[newIndex].play();

    tabAutoplay.restart(true);
  }

  $('.image-tabs-content')
    .on('mouseover', function () {
      tabAutoplay.pause();
      tabTimelines.forEach((timeline) => timeline.pause());
    })
    .on('mouseleave', function () {
      tabAutoplay.resume();
      const $currentTab = $('.image-tabs-menu').children('.w--current:first');
      const currentIndex = $currentTab.index();
      tabTimelines[currentIndex].play();
    });

  $('.image-tabs-link').on('click', function () {
    tabTimelines.forEach((timeline) => timeline.progress(0).pause());
    const $clickedTab = $(this);
    const index = $clickedTab.index();

    tabTimelines[index].restart();
    tabAutoplay.restart(true);
  });
  $('.image-tabs-button.next').on('click', function () {
    navigateToNextTab();
  });

  $('.image-tabs-button.prev').on('click', function () {
    navigateToPreviousTab();
  });

  function navigateToNextTab() {
    const $currentTab = $('.image-tabs-menu').children('.w--current:first');
    const currentIndex = $currentTab.index();
    tabTimelines[currentIndex].pause();

    const $next = $currentTab.next();
    if ($next.length) {
      $next.trigger('click');
    } else {
      $('.image-tabs-link:first').trigger('click');
    }

    const $newCurrentTab = $('.image-tabs-menu').children('.w--current:first');
    const newIndex = $newCurrentTab.index();
    tabTimelines[newIndex].play();
    tabAutoplay.restart(true);
  }

  function navigateToPreviousTab() {
    const $currentTab = $('.image-tabs-menu').children('.w--current:first');
    const currentIndex = $currentTab.index();
    tabTimelines[currentIndex].pause();

    const $prev = $currentTab.prev();
    if ($prev.length) {
      $prev.trigger('click');
    } else {
      $('.image-tabs-link:last').trigger('click');
    }

    const $newCurrentTab = $('.image-tabs-menu').children('.w--current:first');
    const newIndex = $newCurrentTab.index();
    tabTimelines[newIndex].play();
    tabAutoplay.restart(true);
  }
}
