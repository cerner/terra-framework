# Terra Embedded Content Consumer

The Embedded Content Consumer is the managed application component which is embedding web content within an iframe. The Embedded Content Consumer is responsible for the communication between its embedded content to its framework, such that interaction with embedded content appears seemless.

Under the hood, the embedded-content-consumer utilizes an [`XFC (Cross-Frame-Container)`](https://www.npmjs.com/package/xfc) Consumer to manage the iframe size and to listen for messages bridged out from the embedded content through an XFC provider. 

The embedded-content-consumer will use the messages sent from the embedded content to determine if updates are neeed within itself. Otherwise if the embedded content needs to be updated, embedded-content-consumer should send a reply message to the embedded content provider. Then, the embedded content will update itself when it receives the embedded-content-consumer message.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-embedded-content-consumer`

- Install the [`xfc`](https://www.npmjs.com/package/xfc) peer dependency:
  - `npm install xfc --save-dev`

- Then, initalize the XFC Consumer at the root of your application to use the `terra-embedded-content-consumer`. This will create an app broker to manage embedded applications.

```jsx
import { Consumer } from 'xfc';

Consumer.init();
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)