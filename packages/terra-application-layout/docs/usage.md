## Prerequisites

- Like all Terra components, the ApplicationLayout requires the presence of a `Base` component (provided by `terra-base`) in its parent hierarchy.
- Additionally, the ApplicationLayout requires the presence of any `Router` component (provided by `react-router-dom`) in its parent hierarchy.

## Props

### `nameConfig`

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

### `utilityConfig`

The `utilityConfig` prop allows consuming applications to present an application-level menu directly from the ApplicationLayout. The ApplicationLayout will render this content in different ways based on the active responsive breakpoint.

The API for the `utilityConfig` matches that of the `ApplicationHeaderUtility` and `ApplicationMenuUtility` components from `terra-application-utility`. Please see their respective documentation for more information regarding their full capabilities.

|Key Name|Type|Is Required|Description|
|---|---|---|---|
|`title`|String|optional|A string rendered within the utility menu's presentation target.|
|`accessory`|Element|optional|A React element rendered next to the title.|
|`menuItems`|Array|required|An array of objects specifying the utility menu options to present.|
|`initialSelectedKey`|String|required|The string key of the initial menu item to present.|
|`onChange`|Function|required|A function that will be called upon selection of a terminal utility item.|

```jsx
import Avatar from 'terra-avatar';
import { UtilityUtils } from 'terra-application-utility';

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
    contentLocation: UtilityUtils.LOCATIONS.FOOTER,
    title: 'Footer Item',
  }]),
  initialSelectedKeyf: 'menu',
  onChange: (event, itemData, disclose) => {
    /**
     * This function will be called when items are selected within the utility menu.
     * The disclose parameter is provided for convenience, but any presentation method
     * could be used to handle that menu content selection.
     */
  },
}
```

### `routingConfig`

The `routingConfig` prop allows consuming applications to render components within the ApplicationLayout's `content` and `menu` regions based upon the router location.

The ApplicationLayout directly implements the `NavigationLayout` from `terra-navigation-layout`. However, while the `NavigationLayout` allows for the customization of the `header` region of the layout, the `ApplicationLayout` does not. Any `header` entries provided with the `routingConfig` prop will be ignored. Please review the `NavigationLayout` documentation for more information regarding its usage.

> Note: Usage of the path `'/'` is restricted for `menu` components. The ApplicationLayout will dynamically inject configuration for the `'/'` path when necessary to properly render navigationItems at `compact` breakpoints.

```jsx
const routingConfig = {
  content: {
    'Page 1' : {
      path: '/page_1',
      component: {
        default: {
          componentClass: Page1Content,
        },
      },
    },
    'Page 2' : {
      path: '/page_2',
      component: {
        default: {
          componentClass: Page2Content,
        },
      },
    },
  },
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

### `navigationItems`

The `navigationItems` prop allows consumers to render high-level, primary navigation controls directly within the ApplicationLayout. The ApplicationLayout will render this content in different ways based on the active responsive breakpoint. If `navigationItems` are omitted, no primary navigation controls will be rendered.

Each navigation item provided must be associated to a path that is present within the `routingConfig` specification. The navigation item, as rendered by the ApplicationLayout, will route to that path upon selection.

The value provided for `navigationItems` should be an array of objects with the following API:

|Key Name|Type|Is Required|Description|
|---|---|---|---|
|`text`|String|required|A string rendered within the navigation item control.|
|`path`|Element|required|A string path to route to upon navigation item selection. This path should be present within the `routingConfig` as well.|

```jsx
/**
 * Given the above routingConfig example, with entries defined for paths '/page_1' and '/page_2',
 * the following configuration would generate controls for moving between those two paths.
 */
const navigationItems = [{
  path: '/page_1',
  text: 'Page 1',
}, {
  path: '/page_2',
  text: 'Page 2',
}];
```

### `extensions`

The `extensions` prop allows consumers to render an element within the ApplicationLayout's extensions region. The `extensions` content will be rendered in various ways depending on the current breakpoint. The `extensions` element will receive `app` and `layoutConfig` props from the ApplicationLayout, allowing it to interact with and respond to changes within the ApplicationLayout.

```jsx
import { Utils } from 'terra-application-layout';

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

The `indexPath` prop allows consumers to set the default path of the ApplicationLayout. The ApplicationLayout will redirect to this path should users of the consuming application attempt to route to a component not detailed in the `routingConfig` prop. Accordingly, the `indexPath` value must haved an associated entry within the `routingConfig` specification.

### `app`

By default, the ApplicationLayout will render itself within a `ModalManager` and provide modal presentation capabilities to all of its child components. However, the ApplicationLayout accepts an AppDelegate prop (as `app`) that it will fall back to, if necessary. If no `app` prop is provided, the ModalManager provided by the ApplicationLayout will handle all disclosure requests by the ApplicationLayout's children.

## Responsive Design

The ApplicationLayout has two rendering modes: `standard` and `compact`.
  - The `standard` rendering occurs at `medium`, `large`, and `huge` breakpoints.
  - The `compact` rendering occurs at `tiny` and `small` breakpoints.

Depending on the rendering mode, the ApplicationLayout's prop data is rendered in different ways.

|Prop|`standard` Rendering|`compact` Rendering|
|---|---|---|
|`nameConfig`|Content is rendered within ApplicationLayout's header.|Same as `standard`.|
|`utilityConfig`|Content is rendered within the ApplicationLayout's header. The utility menu is presented using a popup (as provided by `terra-popup`).|Content is rendered within the ApplicationMenuWrapper that wraps all menu content at `compact` breakpoints. The utility menu is presented modally (using the ApplicationLayout's included ModalManager).|
|`navigationItems`|Content is rendered within the ApplicationLayout's header as tabs (as provided by `terra-application-links`).|Content is rendered within a custom menu generated by the ApplicationLayout. This menu is injected into the `routingConfig` for the `'/'` path so that it will preceed any other defined routes. Other menu components are able to navigate to the default navigation menu by calling their `routingStackDelegate`'s `showParent` function.|

## Menu/Content Component Configuration

The `routingConfig` prop specifies which components will be rendered in the ApplicationLayout's `content` and `menu` regions. These components receive a set of props from the ApplicationLayout that they must utilize; otherwise, these components can be completely defined by the consuming application.

> Note: Because the `ApplicationLayout` utilizes client-side routing provided by `react-router-dom`, the usage of `<a href=>` links and page anchors is restricted. Usage of links and page anchors may negatively impact navigation within an application. `<Link />` components provided by `react-router-dom` or custom events can and should be used instead.

The components rendered in these regions will receive the following props from the ApplicationLayout:

### `app`

The AppDelegate instance (as `app`) provided to the ApplicationLayout's contents is created by ApplicationLayout's default `ModalManager`.

Please review the AppDelegate documenation with `terra-app-delegate` for more information regarding the available disclosure options.

### `layoutConfig`

The `layoutConfig` contains properties describing the ApplicationLayout's state and functions that allow for the manipulation of that state.

Please review the `Layout` component in `terra-layout` for more information.

### `routingStackDelegate`

The `routingStackDelegate` contains APIs that allow for virtual navigation within a set of matched component paths. Please review the RoutingStackDelegate documentation within `terra-navigation-layout` for more information.

## Summary

1. The ApplicationLayout requires a `Base` component (from `terra-base`) and any `Router` component (from `react-router-dom`) in its parent hierarchy.
2. The `nameConfig` prop customizes the ApplicationLayout's branding.
3. The `utilityConfig` prop generates an utilities menu and presentation controls within the layout. A default set of options can be generated by a helper.
4. The `routingConfig` prop determines which components get rendered in the ApplicationLayout's `menu` and `content` regions based on the router location. Usage of the path `'/'` is restricted for `menu` components inside the `routingConfig`.
5. The `navigationItems` prop generates primary navigation controls within the layout. The provided navigation items should have associated content in the `routingConfig`.
6. The `indexPath` prop determines the default redirect location for the layout. The provided path should have associated content in the `routingConfig`.
7. Menu and content components rendered within the ApplicationLayout receive an `app` prop with default support for modal disclosures.
8. Menu and content components rendered within the ApplicationLayout also receive a `layoutConfig` prop for layout state manipulation.
9. Menu and content components rendered within the ApplicationLayout also receive an `routingStackDelegate` prop. The `show` and `showParent` functions of the `routingStackDelegate` should be used for virtual navigation within configuration regions. Specifically, `showParent` must be implemented by `menu` components to ensure that access to the `ApplicationLayout`'s default menu is maintained.
10. The RoutingMenu component can be used for an off-the-shelf route-based menu navigation.