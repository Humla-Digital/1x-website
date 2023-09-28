/* eslint-disable no-console */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { turnNavWhite } from '$utils/navbarToWhite';
import { updateFooterYear } from '$utils/updateFooterYear';
turnNavWhite();
updateFooterYear();

const showNav = gsap
  .from('.navbar-wrapper', {
    yPercent: -100,
    paused: true,
    duration: 0.35,
    ease: 'power1.Out',
  })
  .progress(1);

ScrollTrigger.create({
  start: 'top top',
  end: 99999,
  onUpdate: (self) => {
    self.direction === -1 ? showNav.play() : showNav.reverse();
  },
});

declare global {
  interface Window {
    WebflowEditor: unknown;
  }
}
window.Webflow ||= [];
window.Webflow.push(() => {
  if (!window.WebflowEditor) {
  } else {
    $('.item_faq-content').addClass('is-active');
  }
});

/**SIDEBAR MENU HOVER STATES*/
if (window.innerWidth > 992) {
  $('.sidebar-menu-link-row').on('mouseover', function () {
    $(this).siblings('.sidebar-menu-link-row').css('opacity', '0.3');
  });
  $('.sidebar-menu-link-row').on('mouseleave', function () {
    $(this).siblings('.sidebar-menu-link-row').css('opacity', '1');
  });
  /* SUB SIDEBAR MENU HOVER STATES */
  $('.sidebar-sub-menu-link-row').on('mouseover', function () {
    $(this).siblings('.sidebar-sub-menu-link-row').css('opacity', '0.3');
  });
  $('.sidebar-sub-menu-link-row').on('mouseleave', function () {
    $(this).siblings('.sidebar-sub-menu-link-row').css('opacity', '1');
  });
  /* SUB SIDEBAR HOVER SET FIRST LEVEL LINKS */
  $('.sidebar-menu-drawer').on('mouseover', function () {
    if ($('#menu-content-androids').hasClass('is-active')) {
      $('.sidebar-menu-link-row:not(#menu-item-androids)').css('opacity', '0.3');
    } else if ($('#menu-content-careers').hasClass('is-active')) {
      $('.sidebar-menu-link-row:not(#menu-item-careers)').css('opacity', '0.3');
    } else if ($('#menu-content-discover').hasClass('is-active')) {
      $('.sidebar-menu-link-row:not(#menu-item-discover)').css('opacity', '0.3');
    }
  });
  /* HIDE AND SHOW SUB SIDEBAR MENU CONTENTS */
  $('#menu-item-androids').on('mouseover', function () {
    if (!$('.sidebar-menu-drawer').hasClass('is-active')) {
      $('.sidebar-menu-drawer').addClass('is-active');
    }
    $('#menu-content-androids').addClass('is-active');
    $('#menu-content-careers').removeClass('is-active');
    $('#menu-content-discover').removeClass('is-active');
  });
  $('#menu-item-careers').on('mouseover', function () {
    if (!$('.sidebar-menu-drawer').hasClass('is-active')) {
      $('.sidebar-menu-drawer').addClass('is-active');
    }
    $('#menu-content-careers').addClass('is-active');
    $('#menu-content-androids').removeClass('is-active');
    $('#menu-content-discover').removeClass('is-active');
  });
  $('#menu-item-discover').on('mouseover', function () {
    if (!$('.sidebar-menu-drawer').hasClass('is-active')) {
      $('.sidebar-menu-drawer').addClass('is-active');
    }
    $('#menu-content-discover').addClass('is-active');
    $('#menu-content-androids').removeClass('is-active');
    $('#menu-content-careers').removeClass('is-active');
  });
} else {
  $('#menu-item-androids').on('click', function () {
    if (!$('.sidebar-menu-drawer').hasClass('is-active')) {
      $('.sidebar-menu-drawer').addClass('is-active');
    }
    $('#menu-content-androids').addClass('is-active');
    $('#menu-content-careers').removeClass('is-active');
    $('#menu-content-discover').removeClass('is-active');
  });
  $('#menu-item-careers').on('click', function () {
    if (!$('.sidebar-menu-drawer').hasClass('is-active')) {
      $('.sidebar-menu-drawer').addClass('is-active');
    }
    $('#menu-content-careers').addClass('is-active');
    $('#menu-content-androids').removeClass('is-active');
    $('#menu-content-discover').removeClass('is-active');
  });
  $('#menu-item-discover').on('click', function () {
    if (!$('.sidebar-menu-drawer').hasClass('is-active')) {
      $('.sidebar-menu-drawer').addClass('is-active');
    }
    $('#menu-content-discover').addClass('is-active');
    $('#menu-content-androids').removeClass('is-active');
    $('#menu-content-careers').removeClass('is-active');
  });
}

/*CLOSE SIDEBAR BUTTON AND OVERLAY TARGET*/
$('.sidebar-close').on('click', function () {
  $('.sidebar-menu-drawer').removeClass('is-active');
  $('.menu-drawer-content').removeClass('is-active');
  $('.sidebar-menu-link-row').css('opacity', '1');
});

/**UNDER 992px SUB SIDEBAR BACK BUTTON */
$('.tablet_sidebar-back').on('click', function () {
  $('.sidebar-menu-drawer').removeClass('is-active');
});
