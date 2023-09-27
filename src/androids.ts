import { initDiscoverGallerySlider } from './modules/discoverPostSlider';

initDiscoverGallerySlider();
declare global {
  interface Window {
    WebflowEditor: unknown;
  }
}
window.Webflow ||= [];
window.Webflow.push(() => {
  if (!window.WebflowEditor) {
  } else {
  }
});
