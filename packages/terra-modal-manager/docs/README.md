# Terra Modal Manager

The ModalManager is a DisclosureManager implementation that presents disclosed content using an AbstractModal.

ModalManager provides the ability to handle and navigate stacked disclosures.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-modal-manager`

## Usage

### Implementation Requirements

The ModalManager utilizes the DisclosureManager API to manage disclosure requests. The components provided as children to the ModalManager, and the components disclosed within it, must interface with the ModalManager's context using the `withDisclosureManager()` higher-order component generator provided by the `terra-disclosure-manager` package. Alternatively, `DisclosureManagerContext` can be consumed directly using the `useContext` hook.

The ModalManager responds to `"modal"` disclosure type requests. Components that wish to disclose content using the ModalManager should provide a preferred type of `"modal"`. This value is exported from the package as `disclosureType`. Please see the [DisclosureManager documentation](https://engineering.cerner.com/terra-ui/#/components/terra-disclosure-manager/disclosure-manager/about) for a full description of the ModalManager's capabilities.

### DisclosureManagerHeaderAdapter Support

If component disclosed within the ModalManager renders a `DisclosureManagerHeaderAdapter`, the ModalManager will render a header and provide the standard disclosure navigation controls (close, go back, maximize/minimize, etc.) within it. The disclosed component can use the `DisclosureManagerHeaderAdapter` to inject its own title and CollapsibleButtonView into the header.

If the disclosed component does **not** render a `DisclosureManagerHeaderAdapter`, the ModalManager does not render a header, as it is assumed that the disclosed component is rendering its own. In this case, the disclosed component is responsible for providing the appropriate controls to navigate the disclosure stack.

> Note: The DisclosureManagerHeaderAdapter is the preferred way to present a header within the ModalManager. In a future major release, the ModalManager will **always** render the header and navigation controls.

### Example

```jsx
import React from 'react';
import Button from 'terra-button';
import ModalManager, { disclosureType } from 'terra-modal-manager';
import { withDisclosureManager, DisclosureManagerContext } from 'terra-disclosure-manager';

const MyModalComponent = () => {
  const disclosureManager = React.useContext(DisclosureManagerContext);

  return (
    <div>
      <p>I am in the modal!</p>
      <Button
        text="Dismiss"
        onClick={() => {
          disclosureManager.dismiss();
        }}
      />
    </div>
  );
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
