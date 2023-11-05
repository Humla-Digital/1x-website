import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

export function typedTextTabs() {
  const tabTimelines: Array<gsap.core.Timeline> = [];
  const hasPlayedAnimation: Array<boolean> = [];

  $('.text-tabs-link').each(function () {
    hasPlayedAnimation.push(false);
  });

  $('.text-tabs-link').each(function () {
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
    trigger: '.section_our-mission',
    onEnter: () => tabAutoplay.play(),
    onLeave: () => tabAutoplay.pause(),
    onEnterBack: () => tabAutoplay.play(),
    onLeaveBack: () => tabAutoplay.pause(),
  });

  // Create a ScrollTrigger for the .section_our-mission element
  ScrollTrigger.create({
    trigger: '.section_our-mission',
    onEnter: () => {
      // Play the current tab's progress bar animation
      const $currentTab = $('.text-tabs-menu').children('.w--current:first');
      const currentIndex = $currentTab.index();
      tabTimelines[currentIndex].play();
    },
    onLeave: () => {
      // Pause the current tab's progress bar animation
      const $currentTab = $('.text-tabs-menu').children('.w--current:first');
      const currentIndex = $currentTab.index();
      tabTimelines[currentIndex].pause();
    },
    onEnterBack: () => {
      // Play the current tab's progress bar animation when scrolling back into view
      const $currentTab = $('.text-tabs-menu').children('.w--current:first');
      const currentIndex = $currentTab.index();
      tabTimelines[currentIndex].play();
    },
    onLeaveBack: () => {
      // Pause the current tab's progress bar animation when scrolling back out of view
      const $currentTab = $('.text-tabs-menu').children('.w--current:first');
      const currentIndex = $currentTab.index();
      tabTimelines[currentIndex].pause();
    },
  });

  // Pause the initial progress bar animation
  tabTimelines[0].pause();

  // Play the progress bar of the first tab on load
  //tabTimelines[0].play();

  function nextTab() {
    const $currentTab = $('.text-tabs-menu').children('.w--current:first');
    const currentIndex = $currentTab.index();

    tabTimelines[currentIndex].pause();

    const $next = $currentTab.next();
    if ($next.length) {
      $next.trigger('click');
    } else {
      $('.text-tabs-link:first').trigger('click');
    }

    const $newCurrentTab = $('.text-tabs-menu').children('.w--current:first');
    const newIndex = $newCurrentTab.index();
    tabTimelines[newIndex].play();

    tabAutoplay.restart(true);
  }

  $('.text-tabs-content')
    .on('mouseover', function () {
      tabAutoplay.pause();
      tabTimelines.forEach((timeline) => timeline.pause());
    })
    .on('mouseleave', function () {
      tabAutoplay.resume();
      const $currentTab = $('.text-tabs-menu').children('.w--current:first');
      const currentIndex = $currentTab.index();
      tabTimelines[currentIndex].play();
    });

  $('.text-tabs-link').on('click', function () {
    tabTimelines.forEach((timeline) => timeline.progress(0).pause());
    const $clickedTab = $(this);
    const index = $clickedTab.index();

    // Check if the animation has played for the current tab
    if (!hasPlayedAnimation[index]) {
      // If the animation hasn't played, create and play the SplitText animation
      const $tabContent = $('.text-tabs-content')
        .children(`[data-w-tab="${$clickedTab.data('w-tab')}"]`)
        .find('.tabs-split-text');

      // Check if the tab content is available in the DOM
      if ($tabContent.length > 0) {
        const splitTextTimeline = gsap.timeline({ paused: false });
        const splitText = new SplitText($tabContent, { type: 'words,chars' });
        const { chars } = splitText;

        splitTextTimeline.from(chars, {
          autoAlpha: 0,
          duration: 0.01,
          stagger: 0.02,
        });

        splitTextTimeline.restart();
        hasPlayedAnimation[index] = true;
      }
    }

    tabTimelines[index].restart();
    tabAutoplay.restart(true);
  });
  $('.text-tabs-button.next').on('click', function () {
    navigateToNextTab();
  });

  $('.text-tabs-button.prev').on('click', function () {
    navigateToPreviousTab();
  });

  function navigateToNextTab() {
    const $currentTab = $('.text-tabs-menu').children('.w--current:first');
    const currentIndex = $currentTab.index();
    tabTimelines[currentIndex].pause();

    const $next = $currentTab.next();
    if ($next.length) {
      $next.trigger('click');
    } else {
      $('.text-tabs-link:first').trigger('click');
    }

    const $newCurrentTab = $('.text-tabs-menu').children('.w--current:first');
    const newIndex = $newCurrentTab.index();
    tabTimelines[newIndex].play();
    tabAutoplay.restart(true);
  }

  function navigateToPreviousTab() {
    const $currentTab = $('.text-tabs-menu').children('.w--current:first');
    const currentIndex = $currentTab.index();
    tabTimelines[currentIndex].pause();

    const $prev = $currentTab.prev();
    if ($prev.length) {
      $prev.trigger('click');
    } else {
      $('.text-tabs-link:last').trigger('click');
    }

    const $newCurrentTab = $('.text-tabs-menu').children('.w--current:first');
    const newIndex = $newCurrentTab.index();
    tabTimelines[newIndex].play();
    tabAutoplay.restart(true);
  }

  const splitTextTimeline = gsap.timeline({ paused: true });
  const $tabContent = $('.tabs-split-text');
  const splitText = new SplitText($tabContent, { type: 'words,chars' });
  const { chars } = splitText;

  splitTextTimeline.from(chars, {
    autoAlpha: 0,
    duration: 0.01,
    stagger: 0.02,
  });

  hasPlayedAnimation[0] = true;

  // Create a ScrollTrigger to play SplitText animation when the module is in view
  ScrollTrigger.create({
    trigger: '.section_our-mission',
    start: 'top center',
    onEnter: () => splitTextTimeline.play(),
  });

  // Pause the initial SplitText animation for Tab 1
  if (!hasPlayedAnimation[0]) {
    tabTimelines[0].pause();
  }
}
