# Terra Disclosure Manager

The DisclosureManager is a stateful component used to manage disclosure presentation.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-disclosure-manager`

## Usage

### Implementation Requirements

The DisclosureManager utilizes the AppDelegate API to manage disclosure requests. The components provided as children to the DisclosureManager, and the components disclosed within it, must support an AppDelegate prop (as `app`). This AppDelegate instance will provide component-specific implementations of the various control mechanisms for the manager.

### Managing Disclosure State

#### Children

The AppDelegate provided to the child components contains a `disclose` function. This `disclose` function validates the disclosure type with which it is provided against the set of supported disclosure types given to the DisclosureManager as a prop. If the provided type is not supported, and if the DisclosureManager was given an AppDelegate prop to fall back to, the DisclosureManager will call the disclose function provided by its AppDelegate prop.

If the type is supported, or if no AppDelegate was provided to the DisclosureManager, the DisclosureManager will check the current disclosure content's state to ensure it can be replaced. If the disclosure is denied, then a rejected Promise is returned. If the disclosure is allowed, then a resolved Promise is returned. This Promise will be resolved with an Object containing functions and Promises that can be used to manipulate the disclosure, if necessary. Included are `dismissDisclosure`, a function that will dismiss the disclosed content, as well as `afterDismiss`, a deferred Promise that will be resolved when the disclosed content is dismissed by any means.

Example:
```javascript
app.disclose({
  preferredType: 'disclosure-type',
  content: {
    key: 'my-disclosed-content',
    content: <DisclosedContent />,
  }
}).then({ dismissDisclosure, afterDismiss } => {
  this.modalContentIsDisplayed = true;

  // This function can be cached and triggered as needed.
  this.myDismissFunction = dismissDisclosure;

  afterDismiss.then(() => {
    // The afterDismiss will resolve when the content is dismissed, allowing for
    // cleanup of local state as needed.
    this.modalContentIsDisplayed = false;

    // If the dismissDisclosure function was cached, make sure it gets cleaned up.
    this.myDismissFunction = false;
  })
}).catch((e) => {
  // Disclosure was denied or error occurred
})

```

#### Disclosure Content



### Rendering

### Example

```jsx
// MyDisclosureManagerImpl.jsx
import React from 'react';
import DisclosureManager from 'terra-disclosure-manager';

<DisclosureManager
  app={parentApp}
  supportedDisclosureTypes={['type1', 'type2']}
  render={(manager) => {
    // Render manager state here.
  }}
>
  <Component1 />
  <Component2 />
</DisclosureManager>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)