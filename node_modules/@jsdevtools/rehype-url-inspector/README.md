Rehype URL Inspector
==============================
### A [rehype](https://github.com/rehypejs/rehype) plugin to inspect, validate, or rewrite URLs anywhere in an HTML document

[![Cross-Platform Compatibility](https://jstools.dev/img/badges/os-badges.svg)](https://github.com/JS-DevTools/rehype-url-inspector/actions)
[![Build Status](https://github.com/JS-DevTools/rehype-url-inspector/workflows/CI-CD/badge.svg)](https://github.com/JS-DevTools/rehype-url-inspector/actions)

[![Coverage Status](https://coveralls.io/repos/github/JS-DevTools/rehype-url-inspector/badge.svg?branch=master)](https://coveralls.io/github/JS-DevTools/rehype-url-inspector)
[![Dependencies](https://david-dm.org/JS-DevTools/rehype-url-inspector.svg)](https://david-dm.org/JS-DevTools/rehype-url-inspector)

[![npm](https://img.shields.io/npm/v/@jsdevtools/rehype-url-inspector.svg)](https://www.npmjs.com/package/@jsdevtools/rehype-url-inspector)
[![License](https://img.shields.io/npm/l/@jsdevtools/rehype-url-inspector.svg)](LICENSE)
[![Buy us a tree](https://img.shields.io/badge/Treeware-%F0%9F%8C%B3-lightgreen)](https://plant.treeware.earth/JS-DevTools/rehype-url-inspector)



Features
--------------------------
- Inspect every URL on an HTML page and do whatever you want to, such as:
  - Normalize URLs
  - Check for broken links
  - Replace URLs with different URLs
  - Add attributes (like `target="blank"`) to certain links

- Finds **all types of URLs** by default, such as:
  - `<a href="http://example.com">`
  - `<img src="img/logo.png">`
  - `<link rel="stylesheet" href="/css/main.css">`
  - `<link rel="manifest" href="/site.manifest">`
  - `<meta rel="canonical" content="https://example.com/some/page/">`
  - `<meta property="og:image" content="img/logo.png">`
  - `<script src="//example.com/script.js">`
  - `<script type="application/ld+json">{"url": "www.example.com"}</script>`
  - `<style>body { background: url("/img/background.png"); }</style>`

- You can remove the built-in URL rules
- You can add your own **custom URL rules**
- You can abort the URL search at any time


Example
--------------------------

**example.html**<br>
This HTML file contains many different types of URLs:

```html
<html>
  <head>
    <link rel="canonical" href="http://example.com/some/page/">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon.png">
    <link rel="stylesheet" type="text/css" href="/css/main.css?v=5">

    <meta name="twitter:url" content="http://example.com/some/page/">
    <meta name="twitter:image" content="http://example.com/img/logo.png">

    <script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "headline": "Hello, World!",
        "url": "http://example.com/some/page/",
        "image": "http://example.com/img/logo.png"
      }
    </script>

    <style>
      body {
        background: #ffffff url("img/background.png") center center no-repeat;
      }
    </style>
  </head>
  <body>
    <h1>
      <a href="/">
        <img src="/img/logo.png"> Hello World
      </a>
    </h1>
    <p>
      <a href="//external.com" target="_blank">Lorem ipsum</a> dolor sit amet,
      non dignissim dolor. Sed diam tellus, <a href="some-page.html">malesuada, dictum nulla</a>.
    </p>

    <script src="//external.com/script.js"></script>
  </body>
</html>
```

**example.js**<br>
This script reads the `example.html` file above and finds all the URLs in it. The script uses [unified](https://unifiedjs.com/), [rehype-parse](https://github.com/rehypejs/rehype/tree/master/packages/rehype-parse), [rehype-stringify](https://github.com/rehypejs/rehype/tree/master/packages/rehype-stringify), and [to-vfile](https://github.com/vfile/to-vfile).


```javascript
const unified = require("unified");
const parse = require("rehype-parse");
const inspectUrls = require("@jsdevtools/rehype-url-inspector");
const stringify = require("rehype-stringify");
const toVFile = require("to-vfile");

async function example() {
  // Create a Rehype processor with the inspectUrls plugin
  const processor = unified()
    .use(parse)
    .use(inspectUrls, {
      inspectEach({ url }) {
        // Log each URL
        console.log(url);
      }
    })
    .use(stringify);

  // Read the example HTML file
  let file = await toVFile.read("example.html");

  // Crawl the HTML file and find all the URLs
  await processor.process(file);
}

example();
```

Running this script produces the following output:

```
http://example.com/some/page/
/site.webmanifest
/img/favicon.png
/css/main.css?v=5
http://example.com/some/page/
http://example.com/img/logo.png
http://schema.org
http://example.com/some/page/
http://example.com/img/logo.png
img/background.png
/
/img/logo.png
//external.com
some-page.html
//external.com/script.js
```



Installation
--------------------------
You can install Rehype URL Inspector via [npm](https://docs.npmjs.com/about-npm/).

```bash
npm install @jsdevtools/rehype-url-inspector
```

You'll probably want to install [unified](https://unifiedjs.com/), [rehype-parse](https://github.com/rehypejs/rehype/tree/master/packages/rehype-parse), [rehype-stringify](https://github.com/rehypejs/rehype/tree/master/packages/rehype-stringify), and [to-vfile](https://github.com/vfile/to-vfile) as well.

```bash
npm install unified rehype-parse rehype-stringify to-vfile
```



Usage
--------------------------
Using the URL Inspector plugin requires an understanding of how to use Unified and Rehype. [Here is an excelleng guide](https://unifiedjs.com/using-unified.html) to learn the basics.

The URL Inspector plugin works just like any other Rehype plugin. Pass it to [the `.use()` method](https://github.com/unifiedjs/unified#processoruseplugin-options) with an [options object](#options).

```javascript
const unified = require("unified");
const inspectUrls = require("@jsdevtools/rehype-url-inspector");

// Use the Rehype URL Inspector plugin with custom options
unified().use(inspectUrls, {
  inspect(urls) { ... },      // This function is called once with ALL of the URLs
  inspectEach(url) { ... },   // This function is called for each URL as it's found
  selectors: [
    "a[href]",                // Only search for links, not other types of URLs
    "div[data-image]"         // CSS selectors for custom URL attributes
  ]
});
```



Options
--------------------------
Rehype URL Inspector supports the following options:

|Option                |Type                |Default                |Description
|:---------------------|:-------------------|:----------------------|:-----------------------------------------
|`selectors`           |array of strings, objects, and/or functions |[built-in selectors](src/selectors.ts) |Selectors indicate where to look for URLs in the document. Each selector can be a CSS attribute selector string, like `a[href]` or `img[src]`, or a function that accepts a [HAST node](https://github.com/syntax-tree/hast) and returns its URL(s). See [`extractors.ts`](src/extractors.ts) for examples.
|`keepDefaultSelectors`|boolean             |`false`                |Whether to keep the default selectors in addition to any custom ones.
|`inspect`             |function            |no-op                  |A function that is called _once_ and receives an array containing all the URLs in the document
|`inspectEach`         |function            |no-op                  |A function that is called for _each_ URL in the document as it's found. Return `false` to abort the search and skip the rest of the document.



URL Objects
--------------------------
The `inspectEach()` function receives a [`UrlMatch` object](src/types.ts).  The `inspect()` function receves an array of `UrlMatch` objects.  Each object has the following properties:

|Property               |Type                 |Description
|:----------------------|:--------------------|:------------------------------------
|`url`                  |string               |The URL that was found
|`propertyName`         |string or undefined  |The name of the [HAST node property](https://github.com/syntax-tree/hast#properties) where the URL was found, such as `"src"` or `"href"`. If the URL was found in the text content of the node, then `propertyName` is `undefined`.
|`node`                 |object               |The [HAST Element node](https://github.com/syntax-tree/hast#element) where the URL was found. **You can make changes to this node**, such as re-writing the URL, adding additional attributes, etc.
|`root`                 |object               |The [HAST Root node](https://github.com/syntax-tree/hast#root). This gives you access to the whole document if you need it.
|`file`                 |object               |The [File object](https://github.com/vfile/vfile) that gives you information about the HTML file itself, such as the path and file name.



Contributing
--------------------------
Contributions, enhancements, and bug-fixes are welcome!  [Open an issue](https://github.com/JS-DevTools/rehype-url-inspector/issues) on GitHub and [submit a pull request](https://github.com/JS-DevTools/rehype-url-inspector/pulls).

#### Building
To build the project locally on your computer:

1. __Clone this repo__<br>
`git clone https://github.com/JS-DevTools/rehype-url-inspector.git`

2. __Install dependencies__<br>
`npm install`

3. __Build the code__<br>
`npm run build`

4. __Run the tests__<br>
`npm test`



License
--------------------------
Rehype URL Inspector is 100% free and open-source, under the [MIT license](LICENSE). Use it however you want.

This package is [Treeware](http://treeware.earth). If you use it in production, then we ask that you [**buy the world a tree**](https://plant.treeware.earth/JS-DevTools/rehype-url-inspector) to thank us for our work. By contributing to the Treeware forest you’ll be creating employment for local families and restoring wildlife habitats.



Big Thanks To
--------------------------
Thanks to these awesome companies for their support of Open Source developers ❤

[![Travis CI](https://jstools.dev/img/badges/travis-ci.svg)](https://travis-ci.com)
[![SauceLabs](https://jstools.dev/img/badges/sauce-labs.svg)](https://saucelabs.com)
[![Coveralls](https://jstools.dev/img/badges/coveralls.svg)](https://coveralls.io)
