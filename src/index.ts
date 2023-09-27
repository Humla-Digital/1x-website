/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { initDiscoverGallerySlider } from 'src/modules/discoverPostSlider';
import { initImageGalleryTabs } from 'src/modules/imageGalleryTabs';
import { initOurAndroidsSlider } from 'src/modules/ourAndroidsSlider';
import { initTimedTextTabs } from 'src/modules/timedTextTabs';
import { initValuesTabs } from 'src/modules/valuesTabs';

import { jobCounter } from '$utils/jobCounter';
import { pauseVideo } from '$utils/pauseVideo';
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
