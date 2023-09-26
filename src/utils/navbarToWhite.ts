/* eslint-disable @typescript-eslint/no-explicit-any */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export function turnNavWhite() {
  /*Turn navbar color white when dark sections in view */
  const navbar = document.querySelector('.navbar-wrapper');

  const sections = gsap.utils.toArray('[data-dark-header]');
  sections.forEach((section: any) => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top top+=71',
      end: 'bottom top+=71',
      toggleClass: {
        targets: [navbar],
        className: 'turn_white',
      },
    });
  });
}
