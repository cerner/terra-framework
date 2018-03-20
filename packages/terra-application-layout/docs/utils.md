# Terra Application Layout

In addition to the ApplicationLayout component, the package exports an `Utils` object that contains a variety of helper functions and prop type declarations. Included are:

- `propTypes` - An object containing prop type definitions for the configuration objects used by the ApplicationLayout.
- `helpers` - An object containing helper functions to aid in the creation of ApplicationLayout content.
- `utilityHelpers` - An object containing helper functions specifically for the creation of Utility menu configuration.

## `propTypes`

- `layoutConifgPropType` - Shape for the `layoutConfig` prop provided to components within the ApplicationLayout.
- `nameConfigPropType` - Shape for ApplicationLayout's `nameConfig` prop.
- `navigationItemsPropType` - Shape for ApplicationLayout's `navigationItems` prop.
- `utilityConfigPropType` - Shape for ApplicationLayout's `utilityConfig` prop.

## `helpers`

- `isSizeCompact` - A function that determines whether or not the given size is considered `compact` or not. This can be used to synchronize component rendering with responsive changes to the ApplicationLayout.

### `utilityHelpers`

- `getDefaultUtilityItems`

A function that generates an array containing the Terra-standard set of utility menu items. This array and its contents match the `menuItems` prop expected by `terra-utility` components and can be provided to them directly.

An `intl` parameter is required to generate the items, as the translated titles for the default configuration must be retrieved from it. Also required is an object containing user information, as the default menu configuration is user-centric. Finally, additional menu configuration items can be provided to be merged with the default items.

- `defaultKeys` - The set of menu item keys used by the default utility configuration. Values from this object should be used inside custom item configurations as `parentKey` values to appropriately locate the custom items. When selected, selectable items will trigger the `utilityConfig`'s `onChange` function with their associated item key.

|Keys|Description|
|---|---|
|`MENU`|Menu page with `USER_INFORMATION`, `SETTINGS`, `HELP`, and `LOG_OUT` as child items.|
|`USER_INFORMATION`|Menu page with a `CHANGE_PHOTO` child item.|
|`CHANGE_PHOTO`|Selectable item.|
|`SETTINGS`|Menu page with `APPEARANCE` and `SECURITY` child items.|
|`APPEARANCE`|Selectable item.|
|`SECURITY`|Selectable item.|
|`HELP`|Menu page with `GETTING_STARTED`, `ABOUT`, and `TERMS_OF_USE` child items.|
|`GETTING_STARTED`|Selectable item.|
|`ABOUT`|Selectable item.|
|`TERMS_OF_USE`|Selectable item.|
|`LOG_OUT`|Selectable item.|

```jsx
import { Utils } from 'terra-application-layout';
import Avatar from 'terra-avatar';

const intl = {}; // Intl should be retrieved from context

const userData = {
  name: 'Person, Joe',
  detail: 'Example Person',
  photo: <Avatar />,
};

const customUtilityItems = [{
  key: 'additional-1',
  title: 'Drill-in Item',
  childKeys: [
    'additional-sub-1',
    'additional-sub-2',
  ],
  parentKey: Utils.utilityHelpers.defaultKeys.MENU,
}, {
  key: 'additional-sub-1',
  title: 'Addtional Item 1 - Sub 1',
  parentKey: 'additional-1',
}, {
  key: 'additional-sub-2',
  title: 'Addtional Item 1 - Sub 2',
  parentKey: 'additional-1',
}, {
  key: 'additional-2',
  title: 'Custom Checkbox Item',
  isSelectable: true,
  parentKey: Utils.utilityHelpers.defaultKeys.MENU,
}, {
  key: 'additional-3',
  contentLocation: Utils.utilityHelpers.locations.FOOTER,
  title: 'Custom Footer',
  parentKey: Utils.utilityHelpers.defaultKeys.MENU,
}];

const menuItems = Utils.utilityHelpers.getDefaultUtilityItems(intl, userData, customUtilityItems);

const utilityConfig = {
  title: 'Doe, John',
  accessory: <Avatar variant="user" ariaLabel="Doe, John" />,
  menuItems: menuItems,
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
