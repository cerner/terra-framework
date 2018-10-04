# Terra Application Utility

The Utility is used to disclose a utility menu. There are two versions - a header version and menu version. These should be used with the corresponding `terra-application-header-layout` and `terra-application-menu-layout` components.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-application-utility`

## Menu Items
The menu items are generated from an array of menu item objects, which can contain up to eight attributes: `childKeys`, `content`, `contentLocation`, `isSelected`, `isSelectable`, `key`, `metaData`, and `title`.

1. `childKeys` is an optional array of `keys` (strings). Enables a nested page to be rendered when this menu item is selected. For each menu item within the nested page, store it's `key` within this `childKeys` array.
2. `content` is an optional object. Enables custom components to be rendered as *body* items. Avoid using `content` as a footer item - it will always render as a button.
3. `contentLocation` is an optional string, one of `UtilityUtils.LOCATIONS.BODY` or `UtilityUtils.LOCATIONS.FOOTER`. Indicates if an item will render within the body or footer. Body items will render as list items, while footer items will render as buttons. Items will default to *body* if `contentLocation` is not provided.
4. `isSelected` is an optional boolean. Enables a HOC to manage the selected states of each item.
5. `isSelectable` is an optional boolean. Indicates if an item is selectable. A checkmark will toggle on item selection.
6. `key` is **required**. Must be a unique value to differentiate itself from other items. `key` is returned, along with `metaData`, within the onChange.
7. `metaData` is an optional object. Use this to store other data for this menu item, such as its parent `key` or another function. `metaData` is returned, along with `key`, within the onChange.
8. `title` is an optional string. Sets the text to render for this item. If this menu item contains `childrenKeys`, `title` will be used as the header text for the nested page.

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
   * The location to place the item. One of UtilityUtils.LOCATIONS.BODY, UtilityUtils.LOCATIONS.FOOTER.
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
For reference, checkout the [sample menu item config](https://github.com/cerner/terra-framework/blob/master/packages/terra-application-utility/src/terra-dev-site/doc/common/MockConfig.js) used for the bottom `Utility Menu` example.

## Component Features

 * [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
  * [babel-pollyfill](https://babeljs.io/docs/usage/polyfill) is needed needed to support usage of the Map object in IE.
 * [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
 * [Internationalization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
 * [Localization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)
