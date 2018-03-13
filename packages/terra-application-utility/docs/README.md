# Terra Application Utility

The Utility is used to disclose a utility menu. There are two versions - a header version and menu version. These should be used with the corresponding `terra-application-header-layout` and `terra-application-menu-layout` components.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-application-utility`

## Menu Items
The menu items are generated from an array of menu item objects, which can contain up to seven attributes: `key`, `content`, `contentLocation`, `isSelected`, `isSelectable`, `title`, and `childKeys`. Each menu item object *must* have a unique `key` to differentiate itself from other items. `contentLocation` specifies whether to render an item within the body or footer. Body items will render as list items, while footer items will render as buttons. Items will default to body if `contentLocation` is not provided. Utility also enables consumers to render custom components as a body item. To do so, pass this custom component as the `content` prop within the menu item object. To create nested pages, utilize the `childKeys` attribute. Store the `key` of each menu item that will be within the next nested page of this specific menu item.

Displayed below is the explicit structure of a menu item.

```javascript
PropTypes.shape({
  /**
   * The unique key associated with this item.
   */
  key: PropTypes.string.isRequired,
  /**
   * The component associated with this item.
   */
  content: PropTypes.object,
  /**
   * The location to place the item. One of UtilityUtils.LOCATIONS.BODY,
   * UtilityUtils.LOCATIONS.FOOTER. Body items are list items, footer items
   * are buttons.
   */
  contentLocation: PropTypes.oneOf([LOCATIONS.BODY, LOCATIONS.FOOTER]),
  /**
   * Boolean indicating if the item is selected.
   */
  isSelected: PropTypes.bool,
  /**
   * Boolean indicating if the item is selectable. A checkmark will be toggled.
   */
  isSelectable: PropTypes.bool,
  /**
   * The text associated with this item.
   */
  title: PropTypes.string,
  /**
   * Array containing the keys of each child item of this item.
   */
  childKeys: PropTypes.arrayOf(PropTypes.string)
});
```
Here is a sample config [file](https://github.com/cerner/terra-framework/blob/master/packages/terra-application-utility/examples/index-examples/MockConfig.js) containing menu items used in the menu example.

## Usage

```jsx
import React from 'react';
import { ApplicationHeaderUtility, ApplicationMenuUtility } from 'terra-application-utility';

<ApplicationHeaderUtility
  menuItems={menuItems}
  onChange={this.handleOnChange}
  onDisclose={this.onDiscloseUtility}
  title={userName}
  accessory={image}
/>

<ApplicationMenuUtility
  menuItems={menuItems}
  onChange={this.handleOnChange}
  onDisclose={this.onDiscloseUtility}
  title={userName}
  accessory={image}
/>

```

## Component Features

 * [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
  * [babel-pollyfill](https://babeljs.io/docs/usage/polyfill) is needed needed to support usage of the Map object in IE.
 * [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
 * [Internationalization Support](https://github.com/cerner/terra-core/wiki/Component-Features#internationalization-i18n-support)
 * [Localization Support](https://github.com/cerner/terra-core/wiki/Component-Features#localization-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-core/wiki/Component-Features#ltr--rtl-support)
