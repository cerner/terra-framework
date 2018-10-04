# Terra Layout

The Layout component provides a responsive starting point for the positioning of application components.

The Layout is responsive at the following breakpoints (as defined by the [terra-responsive-element](https://github.com/cerner/terra-core/blob/master/packages/terra-responsive-element/src/breakpoints.module.scss)):
* Desktop [`medium`, `large`, `huge`] - The menu is pinned open and not dismissable. The content region is resized to account for the menu, and the menu is presented under the header content.
* Tablet [`small`] - The menu is disclosed by a programatic toggle provided to the header content. The header content must adhere to a Layout-specific prop API and properly display a toggle button if necessary. The header is overlaid by the menu when open, and the menu is dismissed by clicking in the negative overlay space.
* Phone [`tiny`] - This breakpoint's behavior is similar to that of Tablet, with the only difference being the menu size. The menu is presented as nearly full-screen, leaving only enough negative space to allow for dismissal.

To facilitate communication between the Layout and its content, the Layout provides a `layoutConfig` prop to the components in its various regions. The `layoutConfig` is an object that contains the various properties:
* `size` - The current responsive size of the layout as rendered. Components can render based on this size rather than implement their own resize observers.
* `toggleMenu` - A function that will toggle the current menu state open/closed. This function is provided only when the breakpoint is `tiny` or `small`.
* `menuIsOpen` - A boolean flag indicating whether or not the menu is currently displayed.
* `togglePin` - A function that will toggle the current menu's pinned state. This function is provied only to the `menu` component and only when the breakpoint size is `medium`.
* `menuIsPinned` - A boolean flag indicating whether or not the menu is currently pinned. This flag is provied only to the `menu` component and only when the breakpoint size is `medium`.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-layout`

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
