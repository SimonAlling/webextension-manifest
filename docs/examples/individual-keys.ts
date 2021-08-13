import Manifest, * as M from "webextension-manifest";

const content_scripts: M.ContentScripts = [
  {
    js: ["do-cool-stuff.js"],
    matches: ["*://*.example.com/*"],
  },
];

const manifest: Manifest = {
  content_scripts,
  manifest_version: 2,
  name: "Awesome Extension",
  version: "1.0.0",
};
