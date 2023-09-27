"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/neo.ts
  window.Webflow ||= [];
  window.Webflow.push(() => {
    if (!window.WebflowEditor) {
      console.log("Wont run in Webflow editor");
    } else {
      console.log("Will run in the Webflow editor");
    }
  });
})();
//# sourceMappingURL=neo.js.map
