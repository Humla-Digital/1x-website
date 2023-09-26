export function initTimedTextTabs() {
  $(function () {
    // Set duration of tab cycle in milliseconds
    const tabDuration = 5000;

    // Starts the tab cycle
    let tabTimeout: number | undefined;
    clearTimeout(tabTimeout);
    tabLoop($('.stories_tab-link.is-dark.is-mission.w--current'));

    // Define cycle through all tabs
    function tabLoop(trigger: JQuery<HTMLElement>) {
      // Loop to next/first tab after tabDuration
      tabTimeout = setTimeout(function () {
        const $next = trigger.next();

        if ($next.length) {
          $next.removeAttr('href').click();
        } else {
          $('.stories_tab-link.is-dark.is-mission:first').removeAttr('href').click();
        }
      }, tabDuration);
    }

    // Reset timeout if a tab is clicked
    $('.stories_tab-link.is-dark.is-mission').click(function () {
      clearTimeout(tabTimeout);
      tabLoop($(this));
    });
  });
}
