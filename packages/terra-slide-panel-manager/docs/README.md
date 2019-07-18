# Terra SlidePanel Manager

The SlidePanelManager is a DisclosureManager implementation that presents disclosed content using a SlidePanel.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-slide-panel-manager`

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

The SlidePanelManager utilizes the DisclosureManager API to manage disclosure requests. The components provided as children to the SlidePanelManager, and the components disclosed within it, must interface with the SlidePanelManager's context using the `withDisclosureManager()` higher-order component generator provided by the `terra-disclosure-manager` package. Alternatively, `DisclosureManagerContext` can be consumed directly using the `useContext` hook.

The SlidePanelManager responds to `"panel"` disclosure type requests. Components that wish to disclose content using the SlidePanelManager should provide a preferred type of `"panel"`. This value is exported from the package as `disclosureType`. Please see the [DisclosureManager documentation](https://engineering.cerner.com/terra-ui/#/components/terra-disclosure-manager/disclosure-manager/about) for a full description of the SlidePanelManager's capabilities.

### DisclosureManagerHeaderAdapter Support

If a component disclosed by the SlidePanelManager renders a `DisclosureManagerHeaderAdapter`, the SlidePanelManager will render an ActionHeader and provide the standard disclosure navigation controls (close, go back, maximize/minimize, etc.) within it. The disclosed component can use the `DisclosureManagerHeaderAdapter` to inject its own title and CollapsibleButtonView into the ActionHeader.

If the disclosed component does **not** render a `DisclosureManagerHeaderAdapter`, the SlidePanelManager will **not** render an ActionHeader itself. In this case, it is assumed that the disclosed component is rendering its own header. The disclosed component is responsible for rendering the appropriate controls to navigate the disclosure stack.

> Note: The DisclosureManagerHeaderAdapter is the preferred way to present a header within the SlidePanelManager. In a future major release, the SlidePanelManager will **always** render the header and navigation controls, regardless of the presence of a DisclosureManagerHeaderAdapter.

### Disclosure Accessory

The `disclosureAccessory` prop allows consumers of the SlidePanelManager to render a static component above the disclosed panel content. The provided component will be rendered below the standard ActionHeader and above the disclosed content. This can be used to easily provide additional context to every disclosed component. This component is provided once to the SlidePanelManager instance, not on a per-disclosure basis, and each component in the disclosure stack will be decorated with the same accessory component.

### Example

```jsx
import React from 'react';
import Button from 'terra-button';
import SlidePanelManager, { disclosureType } from 'terra-slide-panel-manager';
import { withDisclosureManager, DisclosureManagerContext, DisclosureManagerHeaderAdapter } from 'terra-disclosure-manager';
import CollapsibleMenuView from 'terra-collapsible-menu-view';

const PanelComponentB = () => (
  <React.Fragment>
    <DisclosureManagerHeaderAdapter
      title="Panel Component B"
    />
    <p>I am PanelComponentB!</p>
  </React.Fragment>
);

const PanelComponentA = () => {
  const disclosureManager = React.useContext(DisclosureManagerContext);

  return (
    <div>
      <DisclosureManagerHeaderAdapter
        title="Panel Component A"
        collapsibleMenuView={<CollapsibleMenuView />}
      />
      <p>I am PanelComponentA!</p>
      <Button
        text="Disclose PanelComponentB"
        onClick={() => {
          disclosureManager.disclose({
            preferredType: 'panel',
            size: 'large',
            content: {
              key: 'panel-component-b-instance',
              component: <PanelComponentB />
            }
          });
        }}
      />
    </div>
  );
}

const MyContentComponent = withDisclosureManager(({ disclosureManager }) => (
  <div>
    <p>I am MyContentComponent!</p>
    <Button
      text="Disclose PanelComponentA"
      onClick={() => {
        disclosureManager.disclose({
          preferredType: 'panel',
          size: 'large',
          content: {
            key: 'panel-component-a-instance',
            component: <PanelComponentA />
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
  <SlidePanelManager
    disclosureAccessory={<div>Disclosure Accessory</div>}
  >
    <MyContentComponent />
  </SlidePanelManager>
);
```

## Component Features

- [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
- [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
- [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
