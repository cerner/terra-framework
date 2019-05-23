## Prerequisites

- The ApplicationNavigation requires the presence of a `Application` component (provided by `terra-applicaiton`) in its parent hierarchy. This provides essential utilities around i18n, context, and breakpoints.

```jsx
import React from 'react';
import Application from 'terra-application';
import ApplicationNavigation from 'terra-application-navigation';

const MyApp = () => (
  <Application locale="en-US">
    <ApplicationNavigation
      titleConfig={titleConfig}
      utilityItems={utilityItems}
      navigationItems={navigationItems}
      extensionItems={extensionItems}
      activeNavigationItemKey={activeKey}
    >
      {myContent}
    </ApplicationNavigation>
  </Application>
);
```
## Props

### `extensionItems`
#### Is Required: `false`

The `extensionItems` prop allows consumers to render icons with an assocaited selection callback within the ApplicationNavigation's extensions region. The `extensionItems` will rollup in various ways depending on the current breakpoint. If `extensionItems` are passed as props the associated `onSelectExtensionItem` function callback should be passed as well.

The value provided for `extensionItems` should be an array of objects with the following API:

|Key Name|Type|Is Required|Description|
|---|---|---|---|
|`key`|String|**required**|A key rendered to be used as a unique react key as well as returned with the onSelectExtensionItem.|
|`icon`|Element|**required**|A React element representing the themable icon for the extension.|
|`text`|String|**required**|The text to either be set as an aria-label or display text.|
|`metaData`|Object|optional|An object containing whatever additional identifying information to be returned with the onSelectExtensionItem.|

```jsx
const extensionItems = [{
  key: 'extension_1',
  icon: <Icon1 >,
  text: 'Extension 1',
  metaData: { myValue: value1 }
}, {
  key: 'extension_2',
  icon: <Icon2 >,
  text: 'Extension 2',
  metaData: { myValue: value2 }
}];
```

### `onSelectExtensionItem`
#### Is Required: `false`

The `onSelectExtensionItem` prop allows consumers to retrieve the information related to the extension that was clicked. The function callback will return the information in the format of `onSelectExtensionItem(key, metaData)`.

### `navigationItems`
#### Is Required: `false`

The `navigationItems` prop allows consumers to render high-level, primary navigation controls directly within the ApplicationNavigation. The ApplicationNavigation will render this content in different ways based on the active responsive breakpoint. If `navigationItems` are passed as props the associated `onSelectNavigationItem` function callback should be passed as well.

The value provided for `navigationItems` should be an array of objects with the following API:

|Key Name|Type|Is Required|Description|
|---|---|---|---|
|`key`|String|**required**|A key rendered to be used as a unique react key as well as returned with the onSelectNavigationItem.|
|`text`|String|**required**|The text to either be set as an aria-label or display text.|
|`metaData`|Object|optional|An object containing whatever additional identifying information to be returned with the onSelectNavigationItem.|

```jsx
const navigationItems = [{
  key: 'page_1',
  text: 'Page 1',
  metaData: { myValue: value1 }
}, {
  key: 'page_2',
  text: 'Page 2',
  metaData: { myValue: value2 }
}];
```

### `onSelectNavigationItem`
#### Is Required: `false`

The `onSelectNavigationItem` prop allows consumers to retrieve the information related to the navigation item that was clicked. The function callback will return the information in the format of `onSelectNavigationItem(key, metaData)`.

### `activeNavigationItemKey`
#### Is Required: `false`

The `activeNavigationItemKey` prop allows consumers to set the currently selected navigation item. Accordingly, the `activeNavigationItemKey` value must have an associated entry within the `navigationItems` specification.

### `utilityItems`
#### Is Required: `false`

The `utilityItems` prop allows consuming applications to present an application-level custom utility items directly from the ApplicationNavigation. The ApplicationNavigation will render this content in different ways based on the active responsive breakpoint. If `utilityItems` are passed as props the associated `onSelectUtilityItem` function callback should be passed as well.

The value provided for `utilityItems` should be an array of objects with the following API:

|Key Name|Type|Is Required|Description|
|---|---|---|---|
|`key`|String|**required**|A key rendered to be used as a unique react key as well as returned with the onSelectUtilityItem.|
|`icon`|Element|**required**|A React element representing the themable icon for the utility item.|
|`text`|String|**required**|The text to either be set as an aria-label or display text.|
|`metaData`|Object|optional|An object containing whatever additional identifying information to be returned with the onSelectUtilityItem.|

```jsx
const utilityItems = [{
  key: 'utility_1',
  icon: <Icon1 >,
  text: 'Utility 1',
  metaData: { myValue: value1 }
}, {
  key: 'utiliyy_2',
  icon: <Icon2 >,
  text: 'Utility 2',
  metaData: { myValue: value2 }
}];
```

### `onSelectUtilityItem`
#### Is Required: `false`

The `onSelectUtilityItem` prop allows consumers to retrieve the information related to the navigation item that was clicked. The function callback will return the information in the format of `onSelectUtilityItem(key, metaData)`.

### `onSelectSettings`
#### Is Required: `false`

The `onSelectSettings` prop allows consumers have first class support for a settings utility item. If the `onSelectSettings` prop is not set a settings utility item will not be displayed.

### `onSelectHelp`
#### Is Required: `false`

The `onSelectHelp` prop allows consumers have first class support for a help utility item. If the `onSelectHelp` prop is not set a settings utility item will not be displayed.

### `onSelectLogout`
#### Is Required: `false`

The `onSelectLogout` prop allows consumers have first class support for a logout utility button. If the `onSelectLogout` prop is not set a settings utility item will not be displayed.

### `titleConfig`
#### Is Required: `false`

The `titleConfig` prop allows consuming applications to add their own branding to the ApplicationNavigation. The ApplicationNavigation will render this content in different ways based on the active responsive breakpoint.

|Key Name|Type|Is Required|Description|
|---|---|---|---|
|`title`|String|**required**|Title to be displayed or set as the aria-label if a title element is passed.
|`headline`|String|optional|Super text to be display above the main title text.|
|`subline`|String|optional|Sub text to be display below the main title text.
|`element`|Element|optional|Element to use in place of title text. Typically a logo for branding.
|`hideTitleWithinDrawerMenu`|Boolean|optional|Whether or not the title should be hidden when at the compact breakpoint.|

```jsx
const myTitleConfig = {
  title: 'My Application',
  subline: 'My Subline',
  hideTitleWithinDrawerMenu: false,
}
```

### `userConfig`
#### Is Required: `false`

The `userConfig` prop allows consumers to set a user assocaited to the current application context. The ApplicationNavigation will render this content in different ways based on the active responsive breakpoint.

|Key Name|Type|Is Required|Description|
|---|---|---|---|
|`name`|String|**required**|User name to be displayed for the user button and within utilities.
|`detail`|String|optional|Additional user details string.|
|`initials`|String|optional|User initials to be displayed within the avatar if no image is present.
|`imageSrc`|String|optional|Src to provide to the avatar component.|

```jsx
const myUserConfig = {
  name: 'Name, User',
  detail: 'Is a User',
  initials: 'UN',
  imageSrc: 'imageSrc',
}
```

### `hero`
#### Is Required: `false`

The `hero` prop allows consumers to add a hero element within the utility popup and/or navigation drawer. The ApplicationNavigation will render this content in different ways based on the active responsive breakpoint.

### `notifications`
#### Is Required: `false`

The `notifications` prop allows consumers to display counts associated to navigationItems and extensionsItems. The props is made up of key/value pairs; the key is the associated entry within the `navigationItems` or `extensionItems` specification, and a numerical value.

```jsx
const myNotifications = {
  key1: 3,
  extension2: 10,
}
```

## Responsive Design

The ApplicationNavigation has two rendering modes: `standard` and `compact`.
  - The `standard` rendering occurs at `large`, `huge`, and `enormous` breakpoints.
  - The `compact` rendering occurs at `tiny`, `small`, `medium` breakpoints.

|Prop|`standard` Rendering|`compact` Rendering|
|---|---|---|
|`nameConfig`|Content is rendered within ApplicationLayout's header.|Same as `standard`.|
|`utilityConfig`|Content is rendered within the ApplicationLayout's header. The utility menu is presented using a popup (as provided by `terra-popup`).|Content is rendered within the ApplicationMenuWrapper that wraps all menu content at `compact` breakpoints. The utility menu is presented modally (using the ApplicationLayout's included ModalManager).|
|`navigationItems`|Content is rendered within the ApplicationLayout's header as tabs (as provided by `terra-application-links`).|Content is rendered within a custom menu generated by the ApplicationLayout. This menu is injected into the `routingConfig` for the `'/'` path so that it will preceed any other defined routes. Other menu components are able to navigate to the default navigation menu by calling their `routingStackDelegate`'s `showParent` function.|

## Menu/Content Component Configuration

The `routingConfig` prop specifies which components will be rendered in the ApplicationLayout's `content` and `menu` regions. These components receive a set of props from the ApplicationLayout that they must utilize; otherwise, these components can be completely defined by the consuming application.

> Note: Because the `ApplicationLayout` utilizes client-side routing provided by `react-router-dom`, the usage of `<a href=>` links and page anchors is restricted. Usage of links and page anchors may negatively impact navigation within an application. `<Link />` components provided by `react-router-dom` or custom events can and should be used instead.

The components rendered in these regions are guaranteed to receive the following props from the ApplicationLayout:

|Prop Name|Description|
|---|---|
|`layoutConfig`|The `layoutConfig` contains properties describing the ApplicationLayout's state and functions that allow for the manipulation of that state.|
|`routingStackDelegate`|The `routingStackDelegate` contains APIs that allow for virtual navigation within a set of matched component paths.|

Each component specified in the `routingConfig` needs to be able to accept these props and render appropriately. If a component does not appropriately handle them (i.e. it renders unknown props, like `terra-button` and many other generic Terra components), warnings and/or errors may be thrown.

## `RoutingMenu` - A default menu implementation

The ApplicationLayout also provides the `RoutingMenu`, a menu component for applications desiring route-based navigation within their menu region. The `RoutingMenu` can be specified directly within the `routingConfig` or wrapped by another component for more custom implementations.

|`RoutingMenu` Props|Type|Is Required|Description|
|---|---|---|
|`layoutConfig`|Object|**required**|The object containing layout-management APIs provided by the ApplicationLayout. If the `RoutingMenu` is used directly within the `routingConfig`, `layoutConfig` will be provided automatically.|
|`menuItems`|Array|optional|The array of menu item objects describing the RoutingMenu's contents.|
|`routingStackDelegate`|Object|**required**|The object containing RoutingStack APIs provided by the ApplicationLayout. If the `RoutingMenu` is used directly within the `routingConfig`, `routingStackDelegate` will be provided automatically.|
|`title`|String|optional|The string title to render inside the RoutingMenu's header.|

|`menuItems` Object Keys|Type|Is Required|Description|
|---|---|---|---|
|`text`|String|**required**|The text string that will be rendered for the menu item.|
|`path`|String|**required**|The text path that will routed to upon item selection.|
|`hasSubMenu`|Boolean|optional|Indicates whether or not the item has subsequent menus. If true, a chevron will be rendered on the item.|

## Summary

1. The ApplicationLayout requires a `Base` component (from `terra-base`) and any `Router` component (from `react-router-dom`) in its parent hierarchy.
2. The `nameConfig` prop customizes the ApplicationLayout's branding.
3. The `utilityConfig` prop generates an utilities menu and presentation controls within the layout. A default set of options can be generated by a helper.
4. The `routingConfig` prop determines which components get rendered in the ApplicationLayout's `menu` and `content` regions based on the router location. Usage of the path `'/'` is restricted for `menu` components inside the `routingConfig`.
5. The `navigationItems` prop generates primary navigation controls within the layout. The provided navigation items should have associated content in the `routingConfig`.
6. The `indexPath` prop determines the default redirect location for the layout. The provided path should have associated content in the `routingConfig`.
7. Menu and content components rendered within the ApplicationLayout receive an `app` prop with default support for modal disclosures.
8. Menu and content components rendered within the ApplicationLayout also receive a `layoutConfig` prop for layout state manipulation.
9. Menu and content components rendered within the ApplicationLayout also receive an `routingStackDelegate` prop. The `show` and `showParent` functions of the `routingStackDelegate` should be used for virtual navigation within configuration regions.
10. The RoutingMenu component can be used directly for an off-the-shelf route-based navigation menu implementation.
