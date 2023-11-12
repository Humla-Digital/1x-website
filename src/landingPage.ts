import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

window.Webflow ||= [];
window.Webflow.push(() => {
  gsap.registerPlugin(ScrollTrigger);

  /// Function to open the T&C modal
  function openModal() {
    const modal = document.getElementById('terms-modal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  // Function to close the modal
  function closeModal() {
    const modal = document.getElementById('terms-modal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  // Event listener for the buttons with the class "openModalBtn"
  const openModalButtons = document.getElementsByClassName('openModalBtn');
  for (const button of openModalButtons) {
    button.addEventListener('click', openModal);
  }

  // Event listener for the close button inside the modal
  const closeModalBtn = document.getElementById('closeModalBtn');
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  function headerAnim() {
    $('.lp_section-hero').each(function () {
      const target = $('.lp-header-circles-wrapper').find('path');
      const headerAnimation = gsap.timeline();

      headerAnimation.from(target, {
        autoAlpha: '0',
        y: '-20',
        duration: 1.2,
        stagger: 0.12,
        delay: 1.25,
      });
    });
  }

  function footerAnim() {
    const footerTriggerElement = $('.lp_section-cta');
    const footerTarget = $('.lp-footer-circles').find('path');
    const footerAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: footerTriggerElement,
        onEnter: () => playFooterAnim(),
      },
    });

    footerAnimation.paused(true);
    function playFooterAnim() {
      footerAnimation.play();
    }

    footerAnimation.from(footerTarget, {
      autoAlpha: '0',
      y: '20',
      duration: 1.2,
      stagger: 0.12,
      delay: 1.25,
    });
  }

  if ('.lp-header-circles-wrapper') {
    headerAnim();
  }
  if ('.lp-footer-circles') {
    footerAnim();
  }
});
