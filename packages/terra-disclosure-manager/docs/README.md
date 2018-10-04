# Terra Disclosure Manager

The DisclosureManager is a stateful component used to manage disclosure presentation.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-disclosure-manager`

## Usage

### Implementation Requirements

The DisclosureManager utilizes the AppDelegate API to manage disclosure requests. The components provided as children to the DisclosureManager, and the components disclosed within it, must support an AppDelegate prop (as `app`). This AppDelegate instance will provide component-specific implementations of the various control mechanisms for the manager.

### Rendering

The DisclosureManager does not implement a traditional render function. A `render` prop should be provided to the DisclosureManager in order to render the various components managed by the DisclosureManager. The `render` function should accept an Object parameter containing the DisclosureManager's state.

`render` Argument API:

|Key|Value|
|---|---|
|`children`|An Object containing data relative to the children components provided to the DisclosureManager.|
|`disclosure`|An Object containing data relative to the components in the disclosure stack.|
|`dismissPresentedComponent`|A function that pops the currently disclosed component off the disclosure stack.|
|`closeDisclosure`|A function that closes the disclosure and removes all components from the disclosure stack.|

`children` Object API:

|Key|Value|
|---|---|
|`components`|An Array of React components to render as content. These components are provided with an AppDelegate prop (as `app`) with DisclosureManager integration for disclosing content.|

`disclosure` Object API:

|Key|Value|
|---|---|
|`components`|An Array of React components to render in a disclosure mechanism. These components are provided with an AppDelegate prop (as `app`) with DisclosureManager integration for disclosure management.|
|`isOpen`|A boolean indicating the current display state of the DisclosureManager.|
|`isFocused`|A boolean indicating the current focus state of the DisclosureManager.|
|`isMaximized`|A boolean indicating the current maximize state of the DisclosureManager.|
|`size`|The String size of the disclosure.|

Example (using the Modal and SlideGroup):
```javascript
<DisclosureManager
  supportedDisclosureTypes={['modal']}
  render={(manager) => (
    <div>
      {manager.children.components} // These are the Child1 and Child2 components provided as children to the DisclosureManager.
      <Modal
        isFocused={manager.disclosure.isFocused}
        isOpen={manager.disclosure.isOpen}
        onRequestClose={() => {
          manager.closeDisclosure();
        }}
        closeOnEsc
        closeOnOutsideClick
      >
        <SlideGroup items={manager.disclosure.components} isAnimated />
      </Modal>
    </div>
  )}
>
  <Child1 />
  <Child2 />
</DisclosureManager>

```

### Interacting with the Disclosure Manager

#### Children

The AppDelegate provided to the child components contains a `disclose` function. This `disclose` function validates the disclosure type with which it is provided against the set of supported disclosure types given to the DisclosureManager as a prop. If the provided type is not supported, and if the DisclosureManager was given an AppDelegate prop to fall back to, the DisclosureManager will call the disclose function provided by its AppDelegate prop.

If the type is supported, the DisclosureManager will check the currently disclosed component's state to ensure it can be replaced. If the disclosure is denied, then `disclose` returns a rejected Promise. If the disclosure is allowed, then a resolved Promise is returned. This Promise will be resolved with an Object containing functions and Promises that can be used to manipulate the disclosure, if necessary. Included are `dismissDisclosure`, a function that will dismiss the disclosed content, and `afterDismiss`, a deferred Promise that will be resolved when the disclosed content is dismissed by any means. Alternatively, if the additional logic isn't needed, the returned Promise can be completely ignored.

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

`disclose` Argument API:

|Key|Value|
|---|---|
|`preferredType`|The String describing the preferred disclosure type. This will be used to match the disclosure request to an appropriate DisclosureManager. Depending on the structuring of managers in a given component, the `preferredType` value may not be honored. If the provided `preferredType` is not supported by any present disclosure managers, the root disclosure manager will perform the disclosure using its own disclosure type, regardless of the `preferredType` value.
|`size`|The String size desired for the disclosure. One of `tiny`, `small`, `medium`, `large`, `huge`, or `fullscreen`. The functional implementation of this size is determined by the rendering component.|
|`content`|An Object containing a key and a component describing the component to be disclosed. See the `content` API below.|

`content` Object API:

|Key|Value|
|---|---|
|key|A String key uniquely identifying the component to the DisclosureManager. This key will be added to the component (as a `key` prop) when rendered.|
|component|A React element that will be disclosed.|

#### Disclosure Content

In addition to a `disclose` function, a number of other functions are exposed to manage various segments of the disclosure state. The included functions are:

|Function|Description|
|---|---|
|`disclose`|Allows a component to disclose another component. See above for argument API. The DisclosureManager implementation will determine how the next object will be disclosed.|
|`dismiss`|Allows a component to remove itself from the disclosure stack. If the component is the only element in the disclosure stack, the disclosure is closed.|
|`closeDisclosure`|Allows a component to close the entire disclosure stack. This is generally integrated into face-up disclosure controls as a Close button or similar.|
|`goBack`|Allows a component to remove itself from the disclosure stack. Functionally similar to `dismiss`, however `onBack` is only provided to components in the stack that have a previous sibling. This is generally integrated into face-up disclosure controls as a Back button or similar.|
|`maximize`|Allows a component to maximize its presentation size. This is only provided if the component is not already maximized.|
|`minimize`|Allows a component to minimize its presentation size. This is only provided if the component is currently maximized.|
|`requestFocus`|Allows a component to request focus from the disclosure in the event that the disclosure mechanism in use utilizes a focus trap. This can be integrated with the Popup and similar focus-stealing controls.|
|`releaseFocus`|Allows a component to release focus from itself and return it to the disclosure. This can be integrated with the Popup and similar focus-stealing controls.|
|`registerDismissCheck`|Allows a component to register a function with the DisclosureManager that will be called before the component is dismissed for any reason.|

Each of these functions returns a Promise that can be used for chaining, if necessary.

##### A Note on `registerDismissCheck`

The function given to registerDismissCheck must return a resolved or rejected Promise. If the Promise is resolved, the component is guaranteed to be dismissed. If cleanup logic needs to execute before the component is dismissed, it is a good idea to execute before returning the resolved Promise. If a rejected Promise is returned, the component will not be dismissed. Components can render a prompt or confirmation window to give users control over the dismissal, if desired.

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

### Example

```jsx
// MyDisclosureManagerImpl.jsx
import React from 'react';
import DisclosureManager from 'terra-disclosure-manager';
import CustomDisclosure from './my/custom/disclosure';

<DisclosureManager
  supportedDisclosureTypes={['my-type-1', 'my-type-2']}
  render={(manager) => {
    return (
      <CustomDisclosure
        content={manager.children.content}
        disclosureContent={manager.disclosure.content}
        isOpen={manager.disclosure.isOpen}
      />
    )
  }}
>
  <Component1 />
  <Component2 />
</DisclosureManager>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
