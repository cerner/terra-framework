# Terra Disclosure Manager

The DisclosureManager is a stateful component used to manage disclosure presentation.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-disclosure-manager`

This package uses React's Context for inter-component communication. A single instance of this package must be installed to ensure that communication occurs between all Context Providers and Consumers. To help ensure a single instance is installed, this package should be defined as a peer dependency in packages that are reusable libraries or otherwise consumed by other packages.

## Usage

### Rendering

The DisclosureManager does not implement a traditional render function. A `render` prop should be provided to the DisclosureManager in order to render the various components managed by the DisclosureManager. The `render` function should accept an Object parameter containing the DisclosureManager's state.

`render` Argument API:

|Key|Value|
|---|---|
|`children`|An Object containing data relative to the children components provided to the DisclosureManager.|
|`disclosure`|An Object containing data relative to the components in the disclosure stack.|
|`dismissPresentedComponent`|A function that pops the currently disclosed component off the disclosure stack.|
|`closeDisclosure`|A function that closes the disclosure and removes all components from the disclosure stack.|
|`maximizeDisclosure`|A function that will maximize the disclosure size. If the disclosure cannot be maximized, or if it is already maximized, the function is not provided.|
|`minimizeDisclosure`|A function that will minimize the disclosure size. If the disclosure cannot be minimized, or if it is already minimized, the function is not provided.|
|`disclosureComponentKeys`|An array of keys representing the components in the disclosure stack.|
|`disclosureComponentData`|An Object containing components and associated data representing the state of disclosure stack.|

`disclosureComponentData` Object API:
|Key|Value|
|---|---|
|`component`|A component that has been wrapped with the DisclosureManager-provided contexts.|
|`headerAdapterData`|An Object containing the header data for the associated component.|

`children` Object API:

|Key|Value|
|---|---|
|`components`|An Array of React components to render as content.|

`disclosure` Object API:

|Key|Value|
|---|---|
|`components`|An Array of React components to render in a disclosure mechanism.|
|`isOpen`|A boolean indicating the current display state of the DisclosureManager.|
|`isFocused`|A boolean indicating the current focus state of the DisclosureManager.|
|`isMaximized`|A boolean indicating the current maximize state of the DisclosureManager.|
|`size`|The String size of the disclosure.|

> Note: The `isFocused` value has little relevance now that Terra's AbstractModal and other components directly manage their own focus state. `isFocused` will be removed from the DisclosureManager API in a future major release.

Example (using the Modal and SlideGroup):

```jsx
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

The DisclosureManager wraps its contents in a context provider that exposes an instance of a DisclosureManagerDelegate, an object containing DisclosureManager APIs, to components based upon their presented location. 

#### DisclosureManagerContext

The DisclosureManagerContext can be used directly to access the available DisclosureManager APIs.

```jsx
import Base from 'terra-base';
import ModalManager from 'terra-modal-manager'; 
import { DisclosureManagerContext } from 'terra-disclosure-manager';

const MyDisclosureComponent = () => {
  const disclosureManager = React.useContext(DisclosureManagerContext);

  return (
    <Button
      text="Close Modal"
      onClick={() => { 
        disclosureManager.closeDisclosure();
      }}
    />
  );
};

const MyComponent = () => {
  const disclosureManager = React.useContext(DisclosureManagerContext);

  return (
    <Button
      text="Launch Modal"
      onClick={() => { 
        disclosureManager.disclose({
          preferredType: 'modal',
          content: {
            key: 'MY-MODAL-DISCLOSURE',
            component: <MyDisclosureComponent />,
          }
        });
      }}
    />
  );
};

const MyApp = () => (
  <Base locale="en">
    <ModalManager>
      <MyComponent />
    </ModalManager>
  </Base>
)
```

#### withDisclosureManager

Components can use the higher order component generator `withDisclosureManager()` to wrap themselves automatically in a context consumer and receive a prop named `disclosureManager` containing a DisclosureManagerDelegate instance.

```jsx
import Base from 'terra-base';
import ModalManager from 'terra-modal-manager'; 
import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';

const MyDisclosureComponent = withDisclosureManager(({ disclosureManager }) => (
  <Button
    text="Close Modal"
    onClick={() => { 
      disclosureManager.closeDisclosure();
    }}
  />
));
MyDisclosureComponent.propTypes = {
  disclosureManager: disclosureManagerShape,
}

const MyComponent = withDisclosureManager({ disclosureManager }) => (
  <Button
    text="Launch Modal"
    onClick={() => { 
      disclosureManager.disclose({
        preferredType: 'modal',
        content: {
          key: 'MY-MODAL-DISCLOSURE',
          component: <MyDisclosureComponent />,
        }
      });
    }}
  />
);
MyComponent.propTypes = {
  disclosureManager: disclosureManagerShape,
}

const MyApp = () => (
  <Base locale="en">
    <ModalManager>
      <MyComponent />
    </ModalManager>
  </Base>
)
```

#### DisclosureManagerHeaderAdapter

Implementations of the DisclosureManager must render a header containing controls for the various disclosure management actions (close, back, maximize/minimize, etc.). The DisclosureManagerHeaderAdapter can be rendered by the disclosed content to inject their own component-specific contents into that header.

`DisclosureManagerHeaderAdapter` Props:

|Prop|Is Required|Description|
|---|---|---|
|`title`|optional|A string to render as the header's title.|
|`collapsibleMenuView`|optional|A CollapsibleMenuView component to render within the header.|

```jsx
import { DisclosureManagerContext, DisclosureManagerHeaderAdapter } from 'terra-disclosure-manager';
import CollapsibleMenuView from 'terra-collapsible-menu-view';

const MyDisclosureComponent = () => {
  const disclosureManager = React.useContext(DisclosureManagerContext);

  return (
    <React.Fragment>
      <DisclosureManagerHeaderAdapter
        title="My Disclosure Component"
        collapsibleMenuView={<CollapsibleMenuView ... />}
      />
      <Button
        text="Close Modal"
        onClick={() => {
          disclosureManager.closeDisclosure();
        }}
      />
    </React.Fragment>
  );
};
```

#### Children

The DisclosureManagerDelegate provided to the child components contains a `disclose` function. This `disclose` function validates the disclosure type with which it is provided against the set of supported disclosure types given to the DisclosureManager as a prop. If the provided type is not supported, and if the DisclosureManager detects another DisclosureManager higher in the component hierarchy, the DisclosureManager will call the disclose function provided by that parent DisclosureManager instance.

If the type is supported, the DisclosureManager will check the currently disclosed component's state to ensure it can be replaced. If the disclosure is denied, then `disclose` returns a rejected Promise. If the disclosure is allowed, then a resolved Promise is returned. This Promise will be resolved with an Object containing functions and Promises that can be used to manipulate the disclosure, if necessary. Included are `dismissDisclosure`, a function that will dismiss the disclosed content, and `afterDismiss`, a deferred Promise that will be resolved when the disclosed content is dismissed by any means. Alternatively, if the additional logic isn't needed, the returned Promise can be completely ignored.

Example:
```jsx
disclosureManager.disclose({
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

|Key|Is Required|Value|
|---|---|---|
|`preferredType`|optional|The String describing the preferred disclosure type. This will be used to match the disclosure request to an appropriate DisclosureManager. Depending on the structuring of managers in a given component, the `preferredType` value may not be honored. If the provided `preferredType` is not supported by any present disclosure managers, the root disclosure manager will perform the disclosure using its own disclosure type, regardless of the `preferredType` value.|
|`size`|optional|The String size desired for the disclosure. One of `tiny`, `small`, `medium`, `large`, `huge`, or `fullscreen`. The functional implementation of this size is determined by the rendering component. `size` should not be provided if `dimensions` are specified.|
|`dimensions`|optional|An Object containing explicit `height` and `width` values for the disclosure. These values may not be honored due to the disclosure type or the available viewport size. `dimensions` should not be provided if a `size` is specified.<br />Supported `height` values include: `'240'`, `'420'`, `'600'`, `'690'`, `'780'`, `'870'`, `'960'`, `'1140'`.<br />Supported `width` values include: `'320'`, `'480'`, `'560'`, `'640'`, `'800'`, `'960'`, `'1120'`, `'1280'`, `'1440'`, `'1600'`, `'1760'`, `'1920'`.|
|`content`|**required**|An Object containing a key and a component describing the component to be disclosed. See the `content` API below.|

`content` Object API:

|Key|Is Required|Value|
|---|---|---|
|`key`|**required**|A String key identifying the component to the DisclosureManager. This key must be unique amongst the set of all actively disclosed component keys.|
|`component`|**required**|A React element that will be disclosed.|

#### Disclosure Content

In addition to a `disclose` function, a number of other functions are exposed to components rendered in the disclosure mechanism to manage various segments of the disclosure state. The included functions are:

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
```jsx
// MyDisclosedComponent.jsx

componentDidMount() {
  const { disclosureManager } = this.props;

  // A dismiss function can be registered multiple times, but it usually makes sense to
  // register a bound function a single time on mount.
  disclosureManager.registerDismissCheck(this.unsavedChangesCheck);
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

- [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
- [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
- [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
