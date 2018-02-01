# Terra Disclosure Manager

The DisclosureManager is a stateful component used to manage disclosure presentation.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-disclosure-manager`

## Usage

### Implementation Requirements

The DisclosureManager utilizes the AppDelegate API to manage disclosure requests. The components provided as children to the DisclosureManager, and the components disclosed within it, must support an AppDelegate prop (as `app`). This AppDelegate instance will provide component-specific implementations of the various control mechanisms for the manager.

### Interacting with the Disclosure Manager

#### Children

The AppDelegate provided to the child components contains a `disclose` function. This `disclose` function validates the disclosure type with which it is provided against the set of supported disclosure types given to the DisclosureManager as a prop. If the provided type is not supported, and if the DisclosureManager was given an AppDelegate prop to fall back to, the DisclosureManager will call the disclose function provided by its AppDelegate prop.

If the type is supported, or if no AppDelegate was provided to the DisclosureManager, the DisclosureManager will check the current disclosure content's state to ensure it can be replaced. If the disclosure is denied, then a rejected Promise is returned. If the disclosure is allowed, then a resolved Promise is returned. This Promise will be resolved with an Object containing functions and Promises that can be used to manipulate the disclosure, if necessary. Included are `dismissDisclosure`, a function that will dismiss the disclosed content, as well as `afterDismiss`, a deferred Promise that will be resolved when the disclosed content is dismissed by any means. Alternatively, if the additional logic isn't needed, the returned Promise can be completely ignored.

Example:
```javascript
app.disclose({
  preferredType: 'disclosure-type',
  size: 'large',
  content: {
    key: 'my-disclosed-content',
    content: <DisclosedContent />,
  }
}).then({ dismissDisclosure, afterDismiss } => {
  this.myContentIsDisclosed = true;

  // This function can be cached and triggered as needed.
  this.myDismissFunction = dismissDisclosure;

  afterDismiss.then(() => {
    // The afterDismiss will resolve when the content is dismissed, allowing for
    // cleanup of local state as needed.
    this.myContentIsDisclosed = false;

    // If the dismissDisclosure function was cached, make sure it gets cleaned up.
    this.myDismissFunction = false;
  })
}).catch((e) => {
  // If this function is executed, the disclosure has been denied. You can use this to
  // clean up any state that may be reliant on the disclosure ocurring.
})
```

#### Disclosure Content

The AppDelegate instances provided to the disclosure components are a little more complicated. In addition to a `disclose` function (with all the bells and whistles described in the above section), a number of other functions are exposed to manage various segments of the disclosure state. The included functions are:

|Function|Description|
|---|---|
|`disclose(Object)`|See above description.|
|`dismiss()`|Allows a component to remove itself from the disclosure stack. If the component is the only element in the disclosure stack, the disclosure is closed.|
|`closeDisclosure()`|Allows a component to close the entire disclosure stack. This is generally integrated into face-up disclosure controls as a Close button or similar.|
|`goBack()`|Allows a component to remove itself from the disclosure stack. Functionally similar to `dismiss`, however `onBack` is only provided to components in the stack that have a previous sibling. This is generally integrated into face-up disclosure controls as a Back button or similar.|
|`maximize()`|Allows a component to maximize its presentation size. This is only provided if the component is not already `maximize`-d|
|`minimize()`|Allows a component to minimize its presentation size. This is only provided if the component is currently `maximize`-d|
|`requestFocus()`|Allows a component to request focus from the disclosure in the event that the disclosure mechanism in use utilizes a focus trap. This can be integrated with the Popup and similar focus-stealing controls.|
|`requestFocus()`|Allows a component to release focus from itself and return it to the disclosure. This can be integrated with the Popup and similar focus-stealing controls.|
|`registerDismissCheck(func)`|Allows a component to register a function with the DisclosureManager that will be called before the component is dismissed for any reason.|

##### A Note on `registerDismissCheck`

The function given to registerDismissCheck should return a resolved or rejected Promise. If the Promise is resolved, the component is guaranteed to be dismissed. If logic needs to execute before the component is dismissed, it is a good idea to execute before returning the resolved Promise. If a rejected Promise is returned, the component will not be dismissed. Components can render a prompt or confirmation window to give users control over the dismissal, if desired.

Example:
```javascript
// MyDisclosedComponent.jsx

componentDidMount() {
  const { app } = this.props;

  // A dismiss function can be registered multiple times, but it usually makes sense to
  // register a bound function a single time on mount.
  app.registerDismissCheck(this.unsavedChangesCheck);
}

unsavedChangesCheck() {
  const { store } = this.props;
  const { hasUnsavedChanges } = this.state;

  return new Promise((resolve, reject) => {
    if (hasUnsavedChanges) {
      // The dismissal could be outright denied.
      // reject();

      // Or, a confirmation could allow user control.
      if (!confirm('MyDisclosedComponent has unsaved changes that will be lost. Do you wish to continue?')) {
        reject();
        return;
      }

      // Otherwise, resolving the Promise will cause the component to be dismissed and unmounted. Any cleanup needed
      // before dismissal should occur before the Promise is resolved.
      store.dispatch(myCleanupActionOrSomething());

      resolve();
    }
  });
}
```

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