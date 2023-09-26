/* Auto-Update Footer Year */
export function updateFooterYear() {
  document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.querySelector('#year');
    if (!yearEl) return;
    yearEl.textContent = new Date().getFullYear().toString() + ' ';
  });
}
