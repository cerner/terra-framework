# Terra SlidePanel Manager

The SlidePanelManager is a DisclosureManager implementation that presents disclosed content using a SlidePanel.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-slide-panel-manager`

## Usage

### Implementation Requirements

The SlidePanelManager utilizes the DisclosureManager API to manage disclosure requests. The components provided as children to the SlidePanelManager, and the components disclosed within it, must interface with the SlidePanelManager's context using the `withDisclosureManager()` higher-order component generator provided by the `terra-disclosure-manager` package. Alternatively, `DisclosureManagerContext` can be consumed directly using the `useContext` hook.

The SlidePanelManager responds to `"panel"` disclosure type requests. Components that wish to disclose content using the SlidePanelManager should provide a preferred type of `"panel"`. This value is exported from the package as `disclosureType`. Please see the [DisclosureManager documentation](https://engineering.cerner.com/terra-ui/#/components/terra-disclosure-manager/disclosure-manager/about) for a full description of the SlidePanelManager's capabilities.

### DisclosureManagerHeaderAdapter Support

If component disclosed within the SlidePanelManager renders a `DisclosureManagerHeaderAdapter`, the ModalManager will render a header and provide the standard disclosure navigation controls (close, go back, maximize/minimize, etc.) within it. The disclosed component can use the `DisclosureManagerHeaderAdapter` to inject its own title and CollapsibleButtonView into the header.

If the disclosed component does **not** render a `DisclosureManagerHeaderAdapter`, the SlidePanelManager does not render a header, as it is assumed that the disclosed component is rendering its own. In this case, the disclosed component is responsible for providing the appropriate controls to navigate the disclosure stack.

> Note: The DisclosureManagerHeaderAdapter is the preferred way to present a header within the SlidePanelManager. In a future major release, the SlidePanelManager will **always** render the header and navigation controls.

### Example

```jsx
import React from 'react';
import Button from 'terra-button';
import SlidePanelManager, { disclosureType } from 'terra-slide-panel-manager';
import { withDisclosureManager, DisclosureManagerContext } from 'terra-disclosure-manager';

const MyPanelComponent = () => {
  const disclosureManager = React.useContext(DisclosureManagerContext);

  return (
    <div>
      <p>I am in the panel!</p>
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
      text="Open Panel"
      onClick={() => {
        disclosureManager.disclose({
          preferredType: disclosureType,
          size: 'large',
          content: {
            key: 'my-panel-component-instance',
            component: <MyPanelComponent />
          }
        });
      }}
    />
  </div>
));

MyContentComponent.propTypes = {
  disclosureManager: disclosureManagerShape,
}

let MySlidePanelManagerComponent = () => (
  <SlidePanelManager>
    <MyContentComponent />
  </SlidePanelManager>
);
```

## Component Features

- [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
- [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
- [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
