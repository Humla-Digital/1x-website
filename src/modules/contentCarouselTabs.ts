/* eslint-disable no-return-assign */
/* eslint-disable prefer-rest-params */

export function contentCarouselTabs() {
  // Fix for Safari
  if (navigator.userAgent.includes('Safari')) {
    const ts = document.querySelectorAll<HTMLBodyElement>('.stories_tab-link-15s');
    ts.forEach(
      (t) =>
        (t.focus = function () {
          const x = window.scrollX,
            y = window.scrollY;
          const f = () => {
            setTimeout(() => window.scrollTo(x, y), 1);
            t.removeEventListener('focus', f);
          };
          t.addEventListener('focus', f);
          HTMLElement.prototype.focus.apply(this);
        })
    );
  }

  // Start Tabs
  let tabTimeout: number | undefined;
  clearTimeout(tabTimeout);
  tabLoop();

  // Connect your class names to elements
  function tabLoop() {
    tabTimeout = setTimeout(function () {
      const $next = $('.tabs-menu_full-timed-progress').children('.w--current:first').next();

      if ($next.length) {
        $next.trigger('click'); // user click resets timeout
      } else {
        $('.stories_tab-link-15s:first').trigger('click');
      }
    }, 15000); // 15 Second Rotation
  }

  // Reset Loops
  $('.stories_tab-link-15s').on('click', function () {
    clearTimeout(tabTimeout);
    tabLoop();
  });
}
