export function jobCounter() {
  const jobCount = $('.cms-jobs-counter').length;
  $('.open-positions-count').text(jobCount);
}
