/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { initDiscoverGallerySlider } from 'src/modules/discoverPostSlider';
import { initImageGalleryTabs } from 'src/modules/imageGalleryTabs';
import { initOurAndroidsSlider } from 'src/modules/ourAndroidsSlider';
import { initTimedTextTabs } from 'src/modules/timedTextTabs';
import { initValuesTabs } from 'src/modules/valuesTabs';

import { jobCounter } from '$utils/jobCounter';
import { pauseVideo } from '$utils/pauseVideo';

pauseVideo();
jobCounter();
initOurAndroidsSlider();
initDiscoverGallerySlider();
/*
initImageGalleryTabs();
initTimedTextTabs();
initValuesTabs();
*/
