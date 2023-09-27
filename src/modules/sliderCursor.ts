import $ from 'jquery';
export function sliderCursor() {
  const sliders = $('.has-cursor');
  const cursor = $('.cursor-move');
  const cursorDot = $('.cursor-dot');
  const buttons = $('.in-slider');
  const sliderNavs = $('.disable-cursor');

  function moveCursor(event: MouseEvent) {
    cursor.css(
      'transform',
      `translate3d(calc(${event.clientX}px - 50vw), calc(${event.clientY}px - 50vh), 0)`
    );
  }

  window.onmousemove = (event) => {
    moveCursor(event);
  };

  window.onpointermove = (event) => {
    moveCursor(event);
  };

  Array.from(sliders).forEach((slider) => {
    // Do stuff here
    slider.onmouseenter = () => {
      cursorDot.addClass('show');
    };
    slider.onmouseleave = () => {
      cursorDot.removeClass('show');
    };
    slider.onpointerdown = () => {
      cursorDot.addClass('active');
    };
    slider.onpointerup = () => {
      cursorDot.removeClass('active');
    };
  });

  Array.from(buttons).forEach((button) => {
    // Do stuff here
    button.onmouseenter = () => {
      cursorDot.removeClass('show');
    };
    button.onmouseleave = () => {
      cursorDot.addClass('show');
    };
  });
  Array.from(sliderNavs).forEach((sliderNav) => {
    // Do stuff here
    sliderNav.onmouseenter = () => {
      cursorDot.removeClass('show');
    };
    sliderNav.onmouseleave = () => {
      cursorDot.addClass('show');
    };
  });
}
