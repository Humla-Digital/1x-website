/* eslint-disable prefer-const */
/* eslint-disable no-return-assign */
/* eslint-disable no-console */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import $ from 'jquery';

import { initSoMeSlider } from './modules/soMeSlider';
gsap.registerPlugin(ScrollTrigger);

declare global {
  interface Window {
    WebflowEditor: unknown;
  }
}
window.Webflow ||= [];
window.Webflow.push(() => {
  if (!window.WebflowEditor) {
    discoverTags();
    //studioPostAnim();
    initSoMeSlider();
  } else {
  }
});

function discoverTags() {
  gsap.set('.discover-tag-collection-item', { autoAlpha: 1 });
  const showDiscoverTags = gsap.timeline({ paused: true });
  showDiscoverTags.to('.discover-tag-collection-item', {
    autoAlpha: 0,
    stagger: 0.1,
    duration: 0.35,
  });

  const popularTopics = $('#popular-topics');
  $('.wrapper_discover-filters').on('click', function () {
    let clicks = $(this).data('clicks');
    if (!clicks) {
      popularTopics.text('Popular Topics ↑');
    } else {
      popularTopics.text('Popular Topics ↓');
    }
    $(this).data('clicks', !clicks);
    $('.grid_discover-filter-tags').toggleClass('is-active');
    showDiscoverTags.play();
    showDiscoverTags.restart();
    ScrollTrigger.refresh();
  });
}
function studioPostAnim() {
  $('.section_evergreen-studio-post').each(function () {
    let triggerElement = $(this);
    let targetElements = gsap.utils.toArray(
      $(this).find('.wrapper_featured-post-text-content, .image-wrapper_featured-post')
    );
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top center',
      },
    });
    tl.from(targetElements, {
      autoAlpha: 0,
      stagger: 0.2,
    });
  });
}

function hideEmptyPostGrids() {
  $('.w-dyn-empty')
    .parents('.section_discover-post-grid')
    .each(function () {
      $(this).hide();
    });
}
