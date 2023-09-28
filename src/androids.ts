import { initDiscoverGallerySlider } from './modules/discoverPostSlider';
import { faqModule } from './modules/faqs';
initDiscoverGallerySlider();
faqModule();
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
