/* eslint-disable no-console */
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
