/* eslint-disable prefer-const */
/* eslint-disable no-return-assign */
/* eslint-disable no-console */
import gsap from 'gsap';
import $ from 'jquery';
gsap.set('.discover-tag-collection-item', { autoAlpha: 0 });
const showDiscoverTags = gsap.timeline({ paused: true });
showDiscoverTags.to('.discover-tag-collection-item', {
  autoAlpha: 1,
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
});
