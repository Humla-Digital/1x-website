/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { initDiscoverGallerySlider } from '$utils/discoverPostSlider';
import { initImageGalleryTabs } from '$utils/imageGalleryTabs';
import { jobCounter } from '$utils/jobCounter';
import { initOurAndroidsSlider } from '$utils/ourAndroidsSlider';
import { pauseVideo } from '$utils/pauseVideo';
import { initTimedTextTabs } from '$utils/timedTextTabs';
import { initValuesTabs } from '$utils/valuesTabs';
export {};
declare global {
  interface Window {
    WebflowEditor: unknown;
  }
}
window.Webflow ||= [];
window.Webflow.push(() => {
  if (!window.WebflowEditor) {
    console.log('Will not run in Webflow editor');
  } else {
    console.log('Will run in the Webflow editor');
  }
});

pauseVideo();
jobCounter();
initOurAndroidsSlider();
initDiscoverGallerySlider();
initImageGalleryTabs();
initTimedTextTabs();
initValuesTabs();
