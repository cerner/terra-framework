# Terra Embedded Component

EmbeddedComponent enables mounting of external 3rd party react components that
are not bundled with the current application.  It will download any required
CSS and JavaScript needed to render the component and mount it into the DOM.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-embedded-component`

## Usage

```jsx
import React from 'react';
import EmbeddedComponent from 'terra-embedded-component';

<EmbeddedComponent basePath="http://mycomponent.com/path" {props...} />
```

## Building Embeddable Components

EmbeddedComponent looks for a `manifest.json` at the `basePath` to identify the component dependencies.
The JavaScript modules are exepcted to be in [AMD](https://en.wikipedia.org/wiki/Asynchronous_module_definition) format.
In the future support for ES modules will be available. To make a React app work with EmbeddedComponent using webpack, do the following:

### Create a manifest
Generate a manifest which defines the assets dependencies. A [webpack manifest](https://webpack.js.org/guides/output-management/#the-manifest) can be generated automatically using the [webpack-manifest-plugin](https://github.com/danethurber/webpack-manifest-plugin).

**Important**: `access-control-allow-origin: "*"` MUST be set on the response headers
serving the manifest if the manifest is not hosted from the same domain as the embedding application.


Example:

```json
{
  "index.css": "index-ca5f6aac7b2f61572a96.css",
  "index.js": "index.e5155c915e997dc22298.js",
}
```

### Package the component as an AMD module
In webpack set the following configuration for your `output` config:

```js
output: {
  filename: '[name].[chunkhash].js',
  path: path.join(__dirname, 'dist'),

  // Required if the component is hosted from a path different than the embedding script file.
  publicPath: 'http://componentdomain.com/',
  libraryTarget: 'amd',
  libraryExport: 'default',
},
```

### Export your component

```js
// index.js
import React from 'react';
export default () => <div>Hello World</div>;
```

### Troubleshooting
Sometimes when packaging `EmbeddedComponent` with webpack an error will be thrown with `fs`.
This can be resolved by adding the following to the webpack config:

```js
// See: https://github.com/webpack-contrib/css-loader/issues/447
node: {
  fs: 'empty',
},
```



## Component Features

<!-- Uncomment supported features.
 * [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
 * [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
 * [Internationalization Support](https://github.com/cerner/terra-core/wiki/Component-Features#internationalization-i18n-support)
 * [Localization Support](https://github.com/cerner/terra-core/wiki/Component-Features#localization-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-core/wiki/Component-Features#ltr--rtl-support)
 -->
