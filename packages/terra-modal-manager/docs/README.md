# Terra Modal Manager - About

The ModalManager is a DisclosureManager implementation that presents disclosed content using an AbstractModal.

ModalManager provides the ability to handle and navigate stacked disclosures.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-modal-manager`

<!-- AUTO-GENERATED-CONTENT:START Peer Dependencies -->
## Peer Dependencies

<details>
<summary>View information on this component's peer dependencies.</summary>

This component requires the following peer dependencies be installed in your app for the component to properly function.

| Peer Dependency | Version |
|-|-|
| react | ^16.8.5 |
| react-dom | ^16.8.5 |
| terra-disclosure-manager | ^4.9.0 |


</details>
<!-- AUTO-GENERATED-CONTENT:END -->

## Usage

### Implementation Requirements

The ModalManager utilizes the DisclosureManager API to manage disclosure requests. The components provided as children to the ModalManager, and the components disclosed within it, must interface with the ModalManager's context using the `withDisclosureManager()` higher-order component generator provided by the `terra-disclosure-manager` package.

The ModalManager responds to the `"modal"` disclosure type. Components that wish to disclose content using the ModalManager should provide a preferred type of `"modal"`. This value is exported from the package as `disclosureType`. Please see the [DisclosureManager documentation](https://engineering.cerner.com/terra-ui/#/components/terra-disclosure-manager/disclosure-manager/about) for a full description of the ModalManager's capabilities.

### Example

```jsx
import React from 'react';
import Button from 'terra-button';
import ModalManager, { disclosureType } from 'terra-modal-manager';
import { withDisclosureManager } from 'terra-disclosure-manager';

const MyModalComponent = withDisclosureManager(({ disclosureManager }) => (
  <div>
    <p>I am in the modal!</p>
    <Button
      text="Dismiss"
      onClick={() => {
        disclosureManager.dismiss();
      }}
    />
  </div>
));

MyModalComponent.propTypes = {
  disclosureManager: disclosureManagerShape,
}

const MyContentComponent = withDisclosureManager(({ disclosureManager }) => (
  <div>
    <p>I am in the body!</p>
    <Button
      text="Open Modal"
      onClick={() => {
        disclosureManager.disclose({
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
));

MyContentComponent.propTypes = {
  disclosureManager: disclosureManagerShape,
}

let MyModalManagerComponent = () => (
  <ModalManager>
    <MyContentComponent />
  </ModalManager>
);

```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)

[1]: https://github.com/cerner/terra-core/tree/master/packages/terra-content-container/docs
[2]: https://github.com/cerner/terra-core/tree/master/packages/terra-dialog/docs
