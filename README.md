# webextension-manifest

TypeScript type declarations for [`manifest.json`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json), part of the [WebExtension API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions).


## Installation

```
npm install --save-dev webextension-manifest
```


## Usage

The type of `manifest.json` is default-exported and can be used like this:

```ts
// docs/examples/default-export.ts

import Manifest from "webextension-manifest";

const manifest: Manifest = {
    manifest_version: 2,
    name: "Awesome Extension",
    version: "1.0.0",
};

```

The type of each individual manifest key is also exported:

```ts
// docs/examples/individual-keys.ts

import Manifest, * as M from "webextension-manifest";

const content_scripts: M.ContentScripts = [
    {
        js: [ "do-cool-stuff.js" ],
        matches: [ "*://*.example.com/*" ],
    },
];

const manifest: Manifest = {
    content_scripts,
    manifest_version: 2,
    name: "Awesome Extension",
    version: "1.0.0",
};

```


## Contribute

Clone, build and test:

```
git clone https://github.com/SimonAlling/webextension-manifest
cd webextension-manifest
npm install
npm run build
npm test
```

### Code examples

We use `embedme` for DRY, typechecked code examples in the readme.
Here's how to add one:

  1. Create a file containing the example in `docs/examples`, e.g. `embedme-example.ts`.
  1. Add a code block referencing your new file in `README.md`:
     ```ts
     // docs/examples/embedme-example.ts
     ```
  1. The example code will be automatically inserted (or updated) on `npm run build`.
