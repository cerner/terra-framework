# Terra Application Layout

## Responsive Design

The ApplicationLayout has two rendering modes: `standard` and `compact`.
  - The `standard` rendering occurs at `medium`, `large`, and `huge` breakpoints.
  - The `compact` rendering occurs at `tiny` and `small` breakpoints.

### Header

The ApplicationLayout header has a number of changes between its `standard` and `compact` rendering modes.

- `nameConfig`
  - In both rendering modes, the header will render the application name and logo.
- `utilityConfig`
  - When `standard`, the header will render the utility title and accessory as provided by the `utilityConfig`. The utility menu will be presented within a popup upon selection of the title/accessory.
  - When `compact`, the header will not render utility information. It will instead be presented by the Application Menu Wrapper (see below).
- `navigationItems`
  - When `standard`, the header will render the navigation items as a set of responsive tabs (provided by `terra-application-links`). When a tab is selected, the ApplicationLayout will route to the path associated to that tab, and the tab will appear selected.
  - When `compact`, the header will not render any navigation item information. It will instead by presented by the Default Navigation Menu (see below).

Additionally, when `compact`, the header will render a menu toggle button that will open the layout's menu when pressed.

### Application Menu Wrapper

When the ApplicationLayout is `compact`, the ApplicationLayout will wrap each `menu` component defined in the `routingConfig` with an ApplicationMenu component. This wrapper has regions defined for the presentation of `nameConfig` and `utilityConfig` information. This is done to maintain the availability of this information when horizontal space in the header is restricted.

The ApplicationMenuWrapper renders the utility menu within a modal (using the ApplicationLayout's included ModalManager).

### Default Navigation Menu

When `compact`, the ApplicationLayout will generate a menu that renders the `navigationItems` in list form. This menu is injected into the `routingConfig` for the `'/'` path, meaning that it will preceed any other defined routes. Other menu components are able to navigate to the default navigation manu by calling their `routingStackDelegate`'s `showParent` function.
