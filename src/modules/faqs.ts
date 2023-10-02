import ScrollTrigger from 'gsap/ScrollTrigger';
import $ from 'jquery';
export function faqModule() {
  $('.item_faq-header-row').on('click', function () {
    if (!$(this).siblings('.item_faq-content').hasClass('is-active')) {
      $(this).siblings('.item_faq-content').addClass('is-active');
      $(this).find('.faq-dot').addClass('is-active');
    } else {
      $(this).siblings('.item_faq-content').removeClass('is-active');
      $(this).find('.faq-dot').removeClass('is-active');
    }
    ScrollTrigger.refresh();
  });
}
