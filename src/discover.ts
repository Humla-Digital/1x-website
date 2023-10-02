/* eslint-disable no-return-assign */
/* eslint-disable no-console */
import gsap from 'gsap';
import $ from 'jquery';
gsap.set('.discover-tag-collection-item', { autoAlpha: 0 });
const showDiscoverTags = gsap.timeline({ paused: true });
showDiscoverTags.to('.discover-tag-collection-item', {
  autoAlpha: 1,
  stagger: 0.1,
  duration: 0.25,
});

$('.wrapper_discover-filters').on('click', function () {
  $('.grid_discover-filter-tags').toggleClass('is-active');
  showDiscoverTags.play();
});

$('.w-checkbox-input').on('click', function () {
  $('.w-checkbox-input').not(this).prop('checked', false);
});
const input = $('input:checkbox');
console.log(input);
