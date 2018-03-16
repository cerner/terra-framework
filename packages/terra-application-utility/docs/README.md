# Terra Application Utility

The Utility is used to disclose a utility menu. There are two versions - a header version and menu version. These should be used with the corresponding `terra-application-header-layout` and `terra-application-menu-layout` components.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-application-utility`

## Menu Items
The menu items are generated from an array of menu item objects, which can contain up to seven attributes: `key`, `content`, `contentLocation`, `isSelected`, `isSelectable`, `title`, and `childKeys`.

1. `childKeys` is an array of `key`s that enables nested pages. For each menu item contained in the nested page, store it's `key` within this array.
2. `content` enables custom components to be rendered as *body* items. Avoid using `content` as a footer item - it will always render as a button.
3. `contentLocation` indicates if an item will render within the body or footer. Body items will render as list items, while footer items will render as buttons. Items will default to *body* if `contentLocation` is not provided.
4. `isSelected` enables a HOC to manage the selected states of each item.
5. `isSelectable` indicates if an item is selectable. A checkmark will be toggled on item selection.
6. `key` is **required**. Must be a unique value to differentiate itself from other items. `key` is returned, along with `metaData`, within the onChange.
7. `metaData` is an optional object. Use this to store other relevant information for this menu item. `metaData` is returned, along with `key`, within the onChange.
8. `title` indicates the text to render for this item. If this item contains children, `title` will be used as the header text for the nested page.

Displayed below is the explicit structure of a menu item:

```javascript
PropTypes.shape({
  /**
   * Array containing the keys of each child item of this item.
   */
  childKeys: PropTypes.arrayOf(PropTypes.string),
  /**
   * The component associated with this item.
   */
  content: PropTypes.object,
  /**
   * The location to place the item. One of Utils.LOCATIONS.BODY, Utils.LOCATIONS.FOOTER.
   */
  contentLocation: PropTypes.oneOf([LOCATIONS.BODY, LOCATIONS.FOOTER]),
  /**
   * Boolean indicating if the item is selected.
   */
  isSelected: PropTypes.bool,
  /**
   * Boolean indicating if the item is selectable.
   */
  isSelectable: PropTypes.bool,
  /**
   * The unique key associated with this item.
   */
  key: PropTypes.string.isRequired,
  /**
   * Optional meta data to be returned along with the item key within the onChange.
   */
  metaData: PropTypes.object,
  /**
   * The text associated with this item.
   */
  title: PropTypes.string,
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
