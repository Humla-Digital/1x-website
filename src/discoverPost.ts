/* eslint-disable no-console */
import { initDiscoverGallerySlider } from './modules/discoverPostSlider';
declare global {
  interface Window {
    WebflowEditor: unknown;
  }
}
window.Webflow ||= [];
window.Webflow.push(() => {
  if (!window.WebflowEditor) {
    initDiscoverGallerySlider();
  } else {
  }
});
