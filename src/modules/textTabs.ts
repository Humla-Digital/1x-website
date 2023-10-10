/* eslint-disable no-return-assign */
/* eslint-disable prefer-rest-params */

export function textTabsV2() {
  // Fix for Safari
  if (navigator.userAgent.includes('Safari')) {
    const ts = document.querySelectorAll<HTMLInputElement>('.stories_tab-link');
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
      const $next = $('.stories_tab-menu').children('.w--current:first').next();

      if ($next.length) {
        $next.trigger('click'); // user click resets timeout
      } else {
        $('.stories_tab-link:first').trigger('click');
      }
    }, 5000); // 5 Second Rotation
  }

  // Reset Loops
  $('.stories_tab-link').on('click', function () {
    clearTimeout(tabTimeout);
    tabLoop();
  });
}
