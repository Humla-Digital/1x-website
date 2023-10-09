export function hideEmptyDynSections() {
  $('.w-dyn-empty')
    .parents('section')
    .each(function () {
      $(this).remove();
    });
}
