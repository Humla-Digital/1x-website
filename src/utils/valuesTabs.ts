export function initValuesTabs() {
  $(function () {
    // Set duration of tab cycle in milliseconds
    const tabDuration = 15000;

    // Starts the tab cycle
    let tabTimeout: number | undefined;
    clearTimeout(tabTimeout);

    tabLoop($('.tab_values.w--current'));

    function startProgressBar() {
      $('.auto-tabs-values_timer-bar').animate({ width: '100%' }, tabDuration);
    }

    function stopProgressBar() {
      $('.auto-tabs-values_timer-bar').stop(true, true).css('width', '0%');
    }

    // Define cycle through all tabs
    function tabLoop(trigger: JQuery<HTMLElement>) {
      startProgressBar();
      // Loop to next/first tab after tabDuration and reset / start progressbar
      tabTimeout = setTimeout(function () {
        const $next = trigger.next();
        startProgressBar();
        if ($next.length) {
          $next.removeAttr('href').click();
          stopProgressBar();
          startProgressBar();
        } else {
          $('.tab_values:first').removeAttr('href').click();
          stopProgressBar();
          startProgressBar();
        }
      }, tabDuration);
    }

    // Reset timeout if a tab is clicked
    $('.tab_values').on('click', function () {
      clearTimeout(tabTimeout);
      tabLoop($(this));
      stopProgressBar();
      startProgressBar();
    });
  });
}
