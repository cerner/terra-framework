## Prerequisites

- Like all Terra components, the ApplicationLayout requires the presence of a `Base` component (provided by `terra-base`) in its parent hierarchy.
- Additionally, the ApplicationLayout requires the presence of any `Router` component (provided by `react-router-dom`) in its parent hierarchy.

```jsx
import React from 'react';
import { HashRouter } from 'react-router-dom'; // BrowserRouter (with additional server configuration) or MemoryRouter could also be used
import Base from 'terra-base';
import ApplicationLayout from 'terra-application-layout';

const MyApp = () => (
  <HashRouter>
    <Base locale="en-US">
      <ApplicationLayout
        nameConfig={nameConfig}
        utilityConfig={utilityConfig}
        routingConfig={routingConfig}
        navigationItems={navigationItems}
        extensions={<ApplicationExtensions />}
        indexPath={indexPath}
      />
    </Base>
  </HashRouter>
);
```

## Props

### `extensions`
#### Is Required: `false`

The `extensions` prop allows consumers to render an element within the ApplicationLayout's extensions region. The `extensions` content will be rendered in various ways depending on the current breakpoint. The `extensions` element will receive `app` and `layoutConfig` props from the ApplicationLayout, allowing it to interact with and respond to changes within the ApplicationLayout.

```jsx
import ApplicationLayout, { Utils } from 'terra-application-layout';

const MyExtensions = ({ app, layoutConfig }) => {
  if (Utils.helpers.isSizeCompact(layoutConfig.size)) {
    return (
      <div>Extensions for ApplicationLayout menu!</div>
    );
  } else {
    return (
      <div>Extensions for ApplicationLayout header!</div>
    );
  }
};
```

### `indexPath`
#### Is Required: `true`

The `indexPath` prop allows consumers to set the default path of the ApplicationLayout. The ApplicationLayout will redirect to this path should users of the consuming application attempt to route to a component not detailed in the `routingConfig` prop. Accordingly, the `indexPath` value must have an associated entry within the `routingConfig` specification.

### `nameConfig`
#### Is Required: `false`

The `nameConfig` prop allows consuming applications to add their own branding to the ApplicationLayout. The ApplicationLayout will render this content in different ways based on the active responsive breakpoint.

|Key Name|Type|Is Required|Description|
|---|---|---|---|
|`accessory`|Element|optional|A React element that will be presented beside the title. This is typically some sort of icon or visual branding.
|`title`|String|optional|The title of the application. This text will be styled by the ApplicationLayout.|

```jsx
const myNameConfig = {
  accessory: <MyApplicationLogo />,
  title: 'My Application',
}
```

### `navigationItems`
#### Is Required: `false`

The `navigationItems` prop allows consumers to render high-level, primary navigation controls directly within the ApplicationLayout. The ApplicationLayout will render this content in different ways based on the active responsive breakpoint. If `navigationItems` are omitted, no primary navigation controls will be rendered.

Each navigation item provided must be associated to a path that is present within the `routingConfig` specification. The navigation item, as rendered by the ApplicationLayout, will route to that path upon selection.

The value provided for `navigationItems` should be an array of objects with the following API:

|Key Name|Type|Is Required|Description|
|---|---|---|---|
|`text`|String|**required**|A string rendered within the navigation item control.|
|`path`|Element|**required**|A string path to route to upon navigation item selection. This path should be present within the `routingConfig` as well.|

```jsx
const navigationItems = [{
  path: '/page_1',
  text: 'Page 1',
}, {
  path: '/page_2',
  text: 'Page 2',
}];
```

### `routingConfig`
#### Is Required: `true`

The `routingConfig` prop allows consuming applications to render components within the ApplicationLayout's `content` and `menu` regions based upon the router location.

The ApplicationLayout directly implements the `NavigationLayout` from `terra-navigation-layout`. However, while the `NavigationLayout` allows for the customization of the `header` region of the layout, the `ApplicationLayout` does not. Any `header` entries provided with the `routingConfig` prop will be ignored. Please review the `NavigationLayout` documentation for more information regarding its usage.

> Note: Usage of the path `'/'` is restricted for `menu` components. The ApplicationLayout will dynamically inject configuration for the `'/'` path when necessary to properly render navigationItems at `compact` breakpoints.

```jsx
const routingConfig = {
  /**
   * Components defined under `content` will render within the ApplicationLayout's body.
   */
  content: {
    /**
     * Each entry must be keyed; typically, this key matches the path for the component.
     */
    '/page_1' : {
      /**
       * The `path` value will be validated against the router location with each location change. When the location
       * matches this path, the component specified by the sibling `component` value will be rendered. If more than
       * one component matches the current location, only the component with the closest match will be rendered.
       */
      path: '/page_1',
      /**
       * The `component` value specifies what component will be rendered. The value is an Object with support for the
       * following keys: default, tiny, small, medium, large, and huge. These keys correspond to the responsive breakpoint
       * of the ApplicationLayout. When the ApplicationLayout is small, the component under the small key will be rendered.
       * When the application is large, the component under the large key will be rendered, and so on.
       *
       * The default key is different in that its component will render for all breakpoints unless that specific breakpoint is
       * also defined. For example, if a component is defined for default and small, and the current responsive breakpoint is small,
       * then the small component will be rendered. However, if the responsive breakpoint were to be huge, then the default component
       * would be rendered (rather than no component at all).
       */
      component: {
        default: {
          /**
           * The component specification for a given breakpoint must include a componentClass value. This is a React component
           * function or class. It should not be an instantiated React element. For example, given a component named Page1Content,
           * the componentClass value should be Page1Content, not `<Page1Content />`.
           */
          componentClass: Page1Content,
          /**
           * Props can also be defined for the component. These will be applied when the React element is created by the
           * ApplicationLayout. If no props are desired, the `props` key can be omitted.
           */
          props: {
            propFromConfig: 'Value from config',
          }
        },
        small: {
          /**
           * The same component can be defined for multiple breakpoints. Here, the prop values just are changing for this specific
           * size.
           */
          componentClass: Page1Content,
          propFromConfig: 'My value is different only when small',
        }
        large: {
          /**
           * Or, a different component can be loaded altogether.
           */
          componentClass: LargePage1Content,
        }
      },
    },
    '/page_2' : {
      path: '/page_2',
      component: {
        default: {
          componentClass: Page2Content,
        },
      },
    },
  },
  /**
   * Components defined under `menu` will render within the ApplicationLayout's menu sidebar. All other aspects of the API
   * match that of the content region described above.
   *
   * A content entry does not need to have an associated menu entry. In this example, because there is no menu defined for
   * the path '/page_2', the ApplicationLayout will hide the menu sidebar when the '/page_2' content is rendered.
   */
  menu: {
    'Page 1' : {
      path: '/page_1',
      component: {
        default: {
          componentClass: Page1Menu,
        },
      },
    },
  },
};
```

### `utilityConfig`
#### Is Required: `false`

The `utilityConfig` prop allows consuming applications to present an application-level menu directly from the ApplicationLayout. The ApplicationLayout will render this content in different ways based on the active responsive breakpoint.

The API for the `utilityConfig` matches that of the `ApplicationHeaderUtility` and `ApplicationMenuUtility` components from `terra-application-utility`. Please see their respective documentation for more information regarding their full capabilities.

|Key Name|Type|Is Required|Description|
|---|---|---|---|
|`title`|String|optional|A string rendered within the utility menu's presentation target.|
|`accessory`|Element|optional|A React element rendered next to the title.|
|`menuItems`|Array|**required**|An array of objects specifying the utility menu options to present.|
|`initialSelectedKey`|String|**required**|The string key of the initial menu item to present.|
|`onChange`|Function|**required**|A function that will be called upon selection of a terminal utility item.|

```jsx
import Avatar from 'terra-avatar';
import ApplicationLayout, { Utils } from 'terra-application-layout';

const myUtilityConfig = {
  title: 'Doe, John',
  accessory: <Avatar variant="user" ariaLabel="Doe, John" />,
  menuItems: [{
    key: 'menu',
    title: 'Menu',
    childKeys: ['item-1', 'item-2', 'item-3', 'item-4'],
  }, {
    key: 'item-1',
    title: 'Item 1',
  }, {
    key: 'item-2',
    title: 'Toggle Item - Checked',
    isSelectable: true,
    isSelected: true,
  },  {
    key: 'item-3',
    title: 'Toggle Item - Not Checked',
    isSelectable: true,
    isSelected: false,
  }, {
    key: 'item-4',
    contentLocation: Utils.utilityHelpers.locations.FOOTER,
    title: 'Footer Item',
  }],
  initialSelectedKey: 'menu',
  onChange: (event, itemData, disclose) => {
    /**
     * This function will be called when items are selected within the utility menu.
     * The disclose parameter is provided for convenience, but any presentation method
     * could be used to handle that menu content selection.
     */
  },
};
```

## Responsive Design

The ApplicationLayout has two rendering modes: `standard` and `compact`.
  - The `standard` rendering occurs at `medium`, `large`, and `huge` breakpoints.
  - The `compact` rendering occurs at `tiny` and `small` breakpoints.

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
