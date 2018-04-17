# Terra Modal

The Modal is a DisclosureManager implementation that presents disclosed content using an AbstractModal.

Modal provides the ability to manage focus in order to enable the use of portal'd focus trap components terra-popup, terra-form-select, and terra-menu.

Modal provides the ability to handle and navigate stacked disclosures.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-modal`

## Usage

### FAQ
Why is the modal limited to a set of fixed sizes?
- The components [terra-content-container][1] and [terra-dialog][2] are standard items used within modal content to provide headers and footers for actions and titles. In order to handle responsive sizing and dynamically heighted header/footers flex-box is employed. Flex-box requires a size to be set on it's parent container in order to layout properly, setting max-height isn't enough. Without these styles the headers/footers would scroll off of the screen when the content was constrained by the viewport size.

### Implementation Requirements

The Modal utilizes the AppDelegate API to manage disclosure requests. The components provided as children to the Modal, and the components disclosed within it, must support an AppDelegate prop (as `app`). This AppDelegate instance will provide component-specific implementations of the various control mechanisms for the manager.

The Modal responds to the `"modal"` disclosure type. Components that wish to disclose content using the Modal should provide a preferred type of `"modal"`. This value is exported from the package as `disclosureType`. Please see the [DisclosureManager documentation](http://engineering.cerner.com/terra-framework/#/site/components/disclosure-manager/index) for a full description of the Modal's capabilities.

### withModal

The main export from the `terra-modal` package also exports a higher-order component generator called `withModal`. The component provided to the generator will be wrapped by a Modal and provided with an `app` prop.

### Example

```jsx
import React from 'react';
import Button from 'terra-button';
import Modal, { disclosureType, withModal } from 'terra-modal';

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

let MyModalComponent = () => (
  <Modal>
    <MyContentComponent />
  </Modal>
);

// Alternatively, `withModal` can be used to wrap a Modal around MyContentComponent automatically.
MyModalComponent = withModal(MyContentComponent);

```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)

[1]: https://github.com/cerner/terra-core/tree/master/packages/terra-content-container/docs
[2]: https://github.com/cerner/terra-core/tree/master/packages/terra-dialog/docs
