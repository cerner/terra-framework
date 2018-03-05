# Terra Modal Manager

The ModalManager is a DisclosureManager implementation that presents disclosed content using a Modal.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-modal-manager`

## Usage

### Implementation Requirements

The ModalManager utilizes the AppDelegate API to manage disclosure requests. The components provided as children to the ModalManager, and the components disclosed within it, must support an AppDelegate prop (as `app`). This AppDelegate instance will provide component-specific implementations of the various control mechanisms for the manager.

The ModalManager responds to the `"modal"` disclosure type. Components that wish to disclose content using the ModalManager should provide a preferred type of `"modal"`. This value is exported from the package as `disclosureType`. Please see the [DisclosureManager documentation](http://engineering.cerner.com/terra-framework/#/site/components/disclosure-manager/index) for a full description of the ModalManager's capabilities.

### Deprecations

The ModalManager prior to version 1.20.0 utilized Redux to store its disclosure state. With the transition to a DiscosureManager-based implementation, Redux will no longer be used. As such, the provided actions and reducers are now deprecated. They are still included with the package for posterity, but they will be removed in a future major release.

If your component currently implements a ModalManager, you can safely remove the ModalManager reducer from your reducer tree.

### withModalManager

The main export from the `terra-modal-manager` package also exports a higher-order component generator called `withModalManager`. The component provided to the generator will be wrapped by a ModalManager and provided with an `app` prop.

### Example

```jsx
import React from 'react';
import Button from 'terra-button';
import ModalManager, { disclosureType, withModalManager } from 'terra-modal-manager';

const MyModalComponent = ({ app }) => (
  <div>
    <p>I am in the modal!</p>
    <Button
      text="Dismiss"
      onClick={() => {
        app.dismiss();
      }}
    />
  </div>
);

const MyContentComponent = ({ app }) => (
  <div>
    <p>I am in the body!</p>
    <Button
      text="Open Modal"
      onClick={() => {
        app.disclose({
          preferredType: disclosureType,
          size: 'large',
          content: {
            key: 'my-modal-component-instance',
            component: <MyModalComponent />
          }
        });
      }}
    />
  </div>
);

let MyModalManagerComponent = () => (
  <ModalManager>
    <MyContentComponent />
  </ModalManager>
);

// Alternatively, `withModalManager` can be used to wrap a ModalManager around MyContentComponent automatically.
MyModalManagerComponent = withModalManager(MyContentComponent);

```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)