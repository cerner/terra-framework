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

- `getDefaultUtilityConfig`

A function that generates an object conforming to the `utilityConfig` shape and containing the Terra-standard set of utility menu items.

An `intl` parameter is required, as the translated titles for the default configuration must be retrieved from it. Also required is an object containing user information, as the default menu configuration is user-centric. Finally, additional menu configuration items can be provided to be merged with the default items

```jsx
import { Utils } from 'terra-application-layout';
import { UtilityUtils } from 'terra-application-utility';
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
  contentLocation: UtilityUtils.LOCATIONS.BODY,
  title: 'Custom Checkbox Item',
  isSelectable: true,
  parentKey: Utils.utilityHelpers.defaultKeys.MENU,
}, {
  key: 'additional-3',
  contentLocation: UtilityUtils.LOCATIONS.FOOTER,
  title: 'Custom Footer',
  parentKey: Utils.utilityHelpers.defaultKeys.MENU,
}];

const utilityConfig = Utils.utilityHelpers.getDefaultUtilityConfig(intl, userData, customUtilityItems);
```

- `defaultKeys` - The set of menu item keys used by the default utility configuration. Values from this object should be used inside custom item configurations as `parentKey` values to appropriately locate the custom items.
