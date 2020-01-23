# Terra Modal Manager

The ModalManager is a DisclosureManager implementation that presents disclosed content using an AbstractModal.

ModalManager provides the ability to handle and navigate stacked disclosures.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-modal-manager`

<!-- AUTO-GENERATED-CONTENT:START Peer Dependencies -->
## Peer Dependencies

This component requires the following peer dependencies be installed in your app for the component to properly function.

| Peer Dependency | Version |
|-|-|
| react | ^16.8.5 |
| react-dom | ^16.8.5 |
| terra-disclosure-manager | ^4.16.0 |

<!-- AUTO-GENERATED-CONTENT:END -->

## Usage
```jsx
import ModalManager, { disclosureType } from 'terra-modal-manager';
```

## Implementation Requirements

The ModalManager utilizes the DisclosureManager API to manage disclosure requests. The components provided as children to the ModalManager, and the components disclosed within it, must interface with the ModalManager's context using the `withDisclosureManager()` higher-order component generator provided by the `terra-disclosure-manager` package. Alternatively, `DisclosureManagerContext` can be consumed directly using the `useContext` hook.

The ModalManager responds to `"modal"` disclosure type requests. Components that wish to disclose content using the ModalManager should provide a preferred type of `"modal"`. This value is exported from the package as `disclosureType`. Please see the [DisclosureManager API documentation](https://engineering.cerner.com/terra-ui/#/components/terra-disclosure-manager/disclosure-manager/disclosure-manager-api) for a full description of the ModalManager's capabilities.

## DisclosureManagerHeaderAdapter Support

If a component disclosed by the ModalManager renders a `DisclosureManagerHeaderAdapter`, the ModalManager will render an ActionHeader and provide the standard disclosure navigation controls (close, go back, maximize/minimize, etc.) within it. The disclosed component can use the `DisclosureManagerHeaderAdapter` to inject its own title and CollapsibleButtonView into the ActionHeader.

If the disclosed component does **not** render a `DisclosureManagerHeaderAdapter`, the ModalManager will **not** render an ActionHeader itself. In this case, it is assumed that the disclosed component is rendering its own header. The disclosed component is responsible for rendering the appropriate controls to navigate the disclosure stack.
s
> Note: The DisclosureManagerHeaderAdapter is the preferred way to present a header within the ModalManager. In a future major release, the ModalManager will **always** render the header and navigation controls, regardless of the presence of a DisclosureManagerHeaderAdapter.

## Disclosure Accessory

The `disclosureAccessory` prop allows consumers of the ModalManager to render a static component above the disclosed modal content. The provided component will be rendered below the standard ActionHeader and above the disclosed content. This can be used to easily provide additional context to every disclosed component. This component is provided once to the ModalManager instance, not on a per-disclosure basis, and each component in the disclosure stack will be decorated with the same accessory component.

## Component Features

- [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
- [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
- [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)

[1]: https://github.com/cerner/terra-core/tree/master/packages/terra-content-container/docs
[2]: https://github.com/cerner/terra-core/tree/master/packages/terra-dialog/docs
