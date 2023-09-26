export function pauseVideo() {
  $('.togglepause').on('click', function () {
    $('video').trigger('click');
  });
}
