# XFC (Cross-Frame-Container)

[![Build Status](https://travis-ci.org/cerner/xfc.svg?branch=master)](https://travis-ci.org/cerner/xfc)
[![npm version](https://badge.fury.io/js/xfc.svg)](https://badge.fury.io/js/xfc)

This project handles securely embedding web content into a 3rd party domain. Out of the box, it provides several features:

* Clickjacking protection using either a trusted origin or secret
* Automatic iFrame resizing
* Event dispatching from embedded content into a framework

## Usage
Include `xfc.js` in your project.

Ensure `process.env.NODE_ENV` is set correctly in the build enviornment. Logging is only enabled in non-production environments. The environment can be set in webpack using the [DefinePlugin](https://webpack.js.org/guides/production-build/)

```js
// webpack.config.js
const webpack = require('webpack');

module.exports = {
  /*...*/
  plugins:[
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};
```

### Setting Up A Consumer
The consumer is the application which is embedding the 3rd party applications within it.

```js
// Create an app broker to manage embedded apps
XFC.Consumer.init()

// Mount the app at this URL and append its frame to the body element.
var frame = XFC.Consumer.mount(document.body, 'http://localprovider.com:8080/example/provider.html')
```

If the embedded app does not know which domain to trust, it may require secret authorization.

```js
var frame = XFC.Consumer.mount(document.body, 'http://localprovider.com:8080/example/provider_b.html', {secret: 'abc123'})
```

To remove and clean up a mounted app, simply call `unmount` method.

```js
frame.unmount()
```

To load a new page within the existing frame, simply call `load` method with the new URL.

```js
frame.load(newURL)
```


#### Iframe Resizing Config
By default, the height of iframe will automatically resize based on the height of the embedded content. This behavior can be changed by passing an extra option (`resizeConfig`) into `mount` method.

```js
// Pass scrolling as true to resizeConfig to make scrollbar show up.
XFC.Consumer.mount(document.body, 'http://localprovider.com:8080/example/provider.html', { resizeConfig: { scrolling: true } });
```

`resizeConfig` is an object that accepts the following attributes.

| name                    | type     | default value  | usage |
|:---:                    |:---:     |:---:           |---    |
| scrolling               | boolean  | `false`        | When set to be `true`, scrollbar may show up on iframe. |
| autoResizeWidth         | boolean  | `false`        | When set to be `true`, iframe will autoresize on width instead of on height |
| fixedHeight             | string   | empty string   | If specified (e.g. '200px'), the height will stay at the specified value.<br><br> NOTE: setting this attribute will turn off autoresizing.|
| fixedWidth              | string   | empty string   | If specified (e.g. '400px'), the width of iframe will stay at the specified value.<br><br> NOTE: setting this attribute will turn off autoresizing. |
| heightCalculationMethod | string   | `'bodyOffset'` | Accepted values:<br> `'bodyOffset'` - use `document.body.offsetHeight`<br><br> `'bodyScroll'` - use `document.body.scrollHeight`<br><br> `'documentElementOffset'` - use `document.documentElement.offsetHeight`<br><br> `'documentElementScroll'` - use `document.documentElement.scrollHeight`<br><br> `'max'` - max of all of above options.<br><br> `'min'` - min of all of above options.|
| widthCalculationMethod  | string   | `'scroll'`     | Accepted values:<br> `'bodyOffset'` - use `document.body.offsetWidth`<br><br> `'bodyScroll'` - use `document.body.scrollWidth`<br><br> `'documentElementOffset'` - use `document.documentElement.offsetWidth`<br><br> `'documentElementScroll'` - use `document.documentElement.scrollWidth`<br><br> `'scroll'` - max of `bodyScroll` and `documentElementScroll`<br><br> `'max'` - max of all of above options.<br><br> `'min'` - min of all of above options.|
| customCalculationMethod | function | null           | When specified, XFC will use the given method to update iframe's size when necessary (e.g. dom changes, window resized, etc.)<br><br> NOTE: context `this` is provided as iframe to this method, so in the method you can access the iframe by accessing `this` |
| targetSelectors         | string   | null           | When the embedded page contains elements styled with `position: absolute`, the iframe resizing logic won't calculate the height of the embedded page correctly because those elements are removed from normal document flow.<br><br>In this case, targetSelectors can be used to specify those absolute positioned elements so that they will be taken into consideration when calculating the height of the embedded page. Multiple selectors may be specified by separating them using commas.<br><br>If not specified, normal resizing logic will be used.<br><br> NOTE: this attribute can be also specified from Provider's side, e.g. `XFC.Provider.init({targetSelectors: '#target'})`|


### Setting Custom Attributes on Iframe
Sometimes, it's useful for developers to add more attributes onto mounted iframes. A common use case, for instance, is adding `allow` attribute to `<iframe>` tag for cross-origin iframes in Chrome 64+ (See reference [here][3]). In those cases, we can pass an extra option called `iframeAttrs` into `mount` method as follows.

```js
XFC.Consumer.mount(document.body, 'http://localprovider.com:8080/example/provider.html', { iframeAttrs: { allow: 'geolocation; camera' }});
```

Here `iframeAttrs` is an object that contains entries, each of them being an entry of attribute's name and value.


### Monitoring Embedded App Lifecycles

Application lifecycles go through 3 stages as they load:

1. ```mounted``` The application frame has been appended to the DOM and is loading the remote application site.
2. ```launched``` The application frame has loaded and the embedded application has begun authorization sequence. At this time the app is loaded, but is hidden to prevent clickjacking.
3. ```authorized``` The application has approved authorization and is now visible.
4. ```unload``` The application frame is about to unload due to redirect or other causes.

These statuses are communicated to the consumer application environment in 2 ways.

* ```data-status``` attribute on the embedded iFrame wrapper
* A custom application event originating from the embedded iFrame.

#### Styling Cross Frame Containers Based On Status
The cross frame container ```data-status``` attribute can be used as a styling hook to hide containers until they have authorized

```css
/* Hide mounted apps that haven't loaded or authorized */
.xfc[data-status='mounted'],
.xfc[data-status='launched'] {
  display: none;
}

/* Reveal the app once its been authorized */
.xfc[data-status='authorized'] {
  display: block;
}
```

### Listening for Lifecycle Events
Event listeners can be set up to listen for lifecycle changes to a cross frame container.
The target of the event will be the embedded application frame which is an instance of EventEmitter.

```js
// Listen for a container to trigger a mounted event
frame.on('xfc.mounted', function() {
  console.log('mounted', frame.wrapper);
})

// Listen for a container to trigger a launched event
frame.on('xfc.launched', function() {
  console.log('launched', frame.wrapper);
})

// Listen for a container to trigger an authorized event
frame.on('xfc.authorized', function(detail) {
  console.log('authorized', detail);
})

// Listen for a container to trigger an unload event
frame.on('xfc.unload', function(detail) {
  console.log('unloading', detail);
})
```

### Fullscreen Events
A provider application may request to launch another provider app fullscreen.

```js
// Simulate opening a fullscreen link.
// In real implementation this would invoke a modal.
frame.on('xfc.fullscreen', function(url) {
  window.open(url)
})
```

### Sending custom events to a provider
Each frame of the consumer can send custom events to its embedded provider through its _trigger_ method.

```js
// The following code will emit 'fetchDetail' event with an object containing additional info (e.g. 'id')
// onto the provider embedded in the frame
frame.trigger('fetchDetail', {id: 10});
```


## Setting Up A Provider
The provider is the application which is embedded by the consumer.

```js
// Only load within http://localconsumer.com:8080 origins
XFC.Provider.init({
  acls: ['http://localconsumer.com:8080']
})
```

If the provider is being used across the same domain with different subdomains, a wildcard character can be set as the first character of the acl.

```js
// Only load within domain.com (http://test.domain.com, https://test2.domain.com, https://test.test2.domain.com, etc.)
XFC.Provider.init({
  acls: ['*.domain.com']
})

```

If the app is using secret authorization, it may pass in a secret and wildcard for authorization.

```js
// Don't know which origin to trust, trust all origins that know the secret.
XFC.Provider.init({
  acls: ['*'],
  secret: 'abc123'
})
```

If the app is using a custom secret callback function for authorization, it may pass in a callback function for validation of the secret.

```js
// Don't know which origin to trust, trust all origins that know the secret.
XFC.Provider.init({
  acls: ['*'],
  secret: function(secret) {
    return Promise.resolve('Success');
  }
})
```

If the case of secret validation failures, acceptance is a new Error

```js
XFC.Provider.init({
  acls: ['*'],
  secret: function(secret) {
    return Promise.reject(new Error('Failure'));
  }
})
```

If the app is using an alternate form a security and does require XFC to provide clickjacking support, a wildcard with no secret may be passed. Under these conditions, XFC will not hide the content and the consumer will automatically be authorized.

```js
XFC.Provider.init({
  acls: ['*']
})
```

If the app wants to transmit details to frame after authorization, it may pass in an options object.

```js
XFC.Provider.init({
  acls: ['*'],
  options: { moreDetail: 'detail' }
})
```

If the app and framework wants to register new custom methods with JSONRPC, it may pass in an customMethods object and Provider
can call custom events on the frame using invoke method.

```js
XFC.Consumer.mount(
  document.body,
  'http://localprovider.com:8080/example/provider.html',
  { customMethods: { add(x, y) { return Promise.resolve(x + y); } } }
);
```

```js
XFC.Provider.invoke('add', [1, 2]);
```

### Launching Fullscreen
An application may request to launch a pagelet fullscreen within the consumer application.

```js
XFC.Provider.init({ acls: ['http://localconsumer.com:8080'] })
XFC.Provider.fullscreen('http://localconsumer.com:8080/workflow')
```

### Sending custom events to its frame
Provider can send custom events to the frame where it's embedded through _trigger_ method.

```js
// The following code will emit 'ProviderURL' event with an additional object containing URL info
// onto the frame where the provider is embedded
// NOTE: trigger method can only be called after initializing provider.
XFC.Provider.trigger('ProviderURL', {url: window.location.href});
```

### Sending http errors to its frame
Provider can send http errors to its frame by calling _httpError_ method. This method will emit an 'xfc.provider.httpError' event onto the frame where the provider is embedded.

```js
// httpError accepts a parameter that is an object containing message's detail information.
XFC.Provider.httpError({code: 500, message: 'Internal Server Error'});
```

## Browser Support
All supported browsers are defined in [here][1] with browserslist [queries][2].


## Development
Add localconsumer.com to```/etc/hosts```.
Add localprovider.com to```/etc/hosts```.

Install dependencies and start the server.
```
npm install
npm run dev
```

Navigate to http://localconsumer.com:8080/example


[1]: ./.babelrc#L5
[2]: https://github.com/ai/browserslist#queries
[3]: https://dev.chromium.org/Home/chromium-security/deprecating-permissions-in-cross-origin-iframes
