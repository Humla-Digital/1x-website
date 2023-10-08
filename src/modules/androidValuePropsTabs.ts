/* eslint-disable no-return-assign */
/* eslint-disable prefer-rest-params */

export function androidValuePropsTabs() {
  // Fix for Safari
  if (navigator.userAgent.includes('Safari')) {
    const ts = document.querySelectorAll<HTMLInputElement>('.android_value-props-tab-link');
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
      const $next = $('.android_value-props-menu').children('.w--current:first').next();

      if ($next.length) {
        $next.trigger('click'); // user click resets timeout
      } else {
        $('.android_value-props-tab-link:first').trigger('click');
      }
    }, 10000); // 10 Second Rotation
  }

  // Reset Loops
  $('.android_value-props-tab-link').on('click', function () {
    $(this)
      .siblings('.android_value-props-tab-link')
      .find('.accordion_status')
      .removeClass('active');
    $(this).find('.accordion_status').addClass('active');
    clearTimeout(tabTimeout);
    tabLoop();
  });
}
