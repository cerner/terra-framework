# Terra Aggregator

The Aggregator provides focus-based mechanisms for managing actions across disparate components.

I need to plump up this documentation a bit, but here's the gist:
* Components are provided to the Aggregator.
* By default, the components will be rendered in the order given. An optional `render` prop can be provided that will override the default render logic. The render prop will be provided with an Object containing:
    * items (`Array`) - The components provided to the Aggregator, now containing an `aggregatorDelegate` prop with access to the Aggregator's APIs.
* Components can request focus from the Aggregator.
* When a component requests focus, the component should provide an Object containing state pertaining to the focus request. It will be managed by the Aggregator and given to the component as a prop on the next render cycle. What goes inside this Object is up to the component. However, this Object will be destroyed when the component loses focus, so the data included should be scoped to things tied directly to a focus state.
* If a component requests focus, any component that previously held focus will lose focus as well as the focus state it provided.
* Once a component receives focus, the component will be provided with the 'disclose' function that the Aggregator was given. This function is only provided to focused components so components can't stomp on one another.
* The Aggregator wraps that disclose function and ensures that the disclosure lifecycle is tied to the focus management. If the disclosure is closed, focus will be released from the disclosing component. If the disclosing component loses focus for whatever reason, the Aggregator will close the disclosure. Any DisclosureManager-based disclosure is supported.
* A component with focus can also manually release focus should it desire to.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-aggregator`
  - `yarn add terra-aggregator`

## Usage

```jsx
import React from 'react';
import Aggregator from 'terra-aggregator';

const aggregatorItems = [{
  key: 'itemA',
  component: <ItemA />,
}, {
  key: 'itemB',
  component: <ItemB />,
}, {
  key: 'itemC',
  component: <ItemC />,
}]

// Standard implementation
<Aggregator
  items={aggregatorItems}
/>

// Or, with disclosure
<Aggregator
  items={aggregatorItems}
  disclose={myDiscloseImplementation} // From ModalManager/SlidePanelManager/etc.
/>

// Or, with custom render
<Aggregator
  items={aggregatorItems}
  disclose={myDiscloseImplementation}
  render={({ items }) => {
    // ...
  }}
/>

```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
