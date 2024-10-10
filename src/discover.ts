/* eslint-disable prefer-const */
/* eslint-disable no-return-assign */
/* eslint-disable no-console */
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';
import 'swiper/css/scrollbar';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import $ from 'jquery';
import Swiper from 'swiper';
import { Mousewheel, Navigation, Scrollbar } from 'swiper/modules';
import { type SwiperOptions } from 'swiper/types/index.d';

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

function careersImageGallery() {
  const careersImageSliderParams: SwiperOptions = {
    modules: [Navigation, Mousewheel, Scrollbar],
    direction: 'horizontal',
    slidesPerView: 1,
    freeMode: true,
    slidesPerGroup: 1,
    spaceBetween: 20,
    mousewheel: {
      forceToAxis: true,
    },
    speed: 300,
    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 9.6,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 'auto',
        spaceBetween: 9.6,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: '#careers-images-next',
      prevEl: '#careers-images-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      dragSize: 90,
      draggable: true,
    },
  };
  const careersImageSlider = new Swiper('.image-gallery', careersImageSliderParams);
}
careersImageGallery();
