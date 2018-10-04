# Terra Modal Manager - About

The ModalManager is a DisclosureManager implementation that presents disclosed content using an AbstractModal.

ModalManager provides the ability to manage focus in order to enable the use of portal'd focus trap components terra-popup, terra-form-select, and terra-menu.

ModalManager provides the ability to handle and navigate stacked disclosures.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-modal-manager`

## Usage

### Implementation Requirements

The ModalManager utilizes the AppDelegate API to manage disclosure requests. The components provided as children to the ModalManager, and the components disclosed within it, must support an AppDelegate prop (as `app`). This AppDelegate instance will provide component-specific implementations of the various control mechanisms for the manager.

The ModalManager responds to the `"modal"` disclosure type. Components that wish to disclose content using the ModalManager should provide a preferred type of `"modal"`. This value is exported from the package as `disclosureType`. Please see the [DisclosureManager documentation](http://engineering.cerner.com/terra-framework/#/site/components/disclosure-manager/index) for a full description of the ModalManager's capabilities.

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
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)

[1]: https://github.com/cerner/terra-core/tree/master/packages/terra-content-container/docs
[2]: https://github.com/cerner/terra-core/tree/master/packages/terra-dialog/docs
