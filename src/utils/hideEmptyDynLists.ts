export function hideEmptyDynSections() {
  $('.w-dyn-empty')
    .not('.pencil_banner-cms-empty')
    .parents('section')
    .each(function () {
      $(this).remove();
    });
}
