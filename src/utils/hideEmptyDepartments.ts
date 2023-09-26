export function hideEmptyDepartments() {
  $('.w-dyn-empty')
    .parents('.open_position-department')
    .each(function () {
      $(this).hide();
    });
}
