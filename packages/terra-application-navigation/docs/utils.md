# Terra Application Navigation

In addition to the ApplicationNavigation component, the package contains additional utility functions that contain a variety of helper functions and prop type declarations. Included are:

- `propTypes` - An object containing prop type definitions for the configuration objects used by the ApplicationNavigation.
- `helpers` - An object containing helper functions to aid in the creation of ApplicationNavigation content.

## `propTypes`
- `titleConfigPropType` - Shape for ApplicationNavigation's `titleConfig` prop.
- `userConfigPropType` - Shape for ApplicationNavigation's `userConfig` prop.
- `navigationItemsPropType` - Shape for ApplicationNavigation's `navigationItems` prop.
- `utilityItemsPropType` - Shape for ApplicationNavigation's `utilityItems` prop.
- `extensionItemsPropType` - Shape for ApplicationNavigation's `extensionItems` prop.

## `helpers`
- `shouldRenderCompactNavigation` - A function that determines whether or not the given size is considered `compact` or not. This can be used to synchronize component rendering with responsive changes to the ApplicationNavigation.
