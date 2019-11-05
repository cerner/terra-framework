## Prerequisites

- The ApplicationNavigation requires the presence of a `Application` component (provided by `terra-application`) in its parent hierarchy. This provides essential utilities around i18n, context, and breakpoints.

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

The `extensionItems` prop allows consumers to render icons with an assocaited selection callback within the ApplicationNavigation's extensions region. The expectations for `extensionItems` is that they are to provide click actions and disclosures for the application level context. The `extensionItems` will rollup in various counts depending on the current breakpoint. If `extensionItems` are passed as props the associated `onSelectExtensionItem` function callback should be passed as well.

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

The `navigationItems` prop allows consumers to render high-level, primary navigation controls directly within the ApplicationNavigation. The expectation of `navigationItems` is that items will not be added/removed, as this would be detrimental to the user experience. Once selected, a navigational item is no longer actionable and cannot be reselected. Navigation items at the application level should have equivalent context levels. Navigation from one tab to another should not be influenced by content, as each navigational item should be a sandboxed concept.

The ApplicationNavigation will render this content in different ways based on the active responsive breakpoint. If `navigationItems` are passed as props the associated `onSelectNavigationItem` function callback should be passed as well.

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
  key: 'utility_2',
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

The `userConfig` prop allows consumers to set a user associated to the current application context. The ApplicationNavigation will render this content in different ways based on the active responsive breakpoint.

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

The `notifications` prop allows consumers to display notification counts associated to navigationItems and extensionsItems. The props is made up of key/value pairs; the key is the associated entry within the `navigationItems` or `extensionItems` specification, and a numerical value. Depending on locations within the navigational structure and breakpoint the number of digits displayed may be limited.

```jsx
const myNotifications = {
  key1: 3,
  extension2: 10,
}
```

### `onDrawerMenuStateChange`
#### Is Required: `false`

`onDrawerMenuStateChange` callback allows the consumer to know state changes in Drawer Menu.

## Responsive Design

The ApplicationNavigation has two rendering modes: `standard` and `compact`.
  - The `standard` rendering occurs at `large`, `huge`, and `enormous` breakpoints.
  - The `compact` rendering occurs at `tiny`, `small`, `medium` breakpoints.

|Prop|`standard` Rendering|`compact` Rendering|
|---|---|---|
|`userConfig`|Content is rendered within ApplicationNavigation's header.|Content is rendered within ApplicationNavigation's navigation drawer.|
|`titleConfig`|Content is rendered within ApplicationNavigation's header.|Same as `standard`.|
|`hero`|Content is rendered within ApplicationNavigation's utility popup (as provided by `terra-popup`).|Content is rendered within ApplicationNavigation's navigation drawer.|
|`utilityItems`|Content is rendered within ApplicationNavigation's utility popup (as provided by `terra-popup`).|Content is rendered within ApplicationNavigation's navigation drawer.|
|`navigationItems`|Content is rendered within the ApplicationNavigation's header as tabs.|Content is rendered within ApplicationNavigation's navigation drawer.|
|`extensionItems`|Content is rendered within ApplicationNavigation's header.|Same as `standard`.|
