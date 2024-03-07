# Changelog

## Unreleased

## 6.88.0 - (March 7, 2024)

* Changed
  * Minor dependency version bump.

## 6.87.0 - (March 5, 2024)

* Changed
  * Minor dependency version bump.

## 6.86.0 - (March 1, 2024)

* Fixed
  * Fixed sub-menu height issue when it exceeds viewport size.

## 6.85.0 - (February 28, 2024)

* Fixed
  * Fixed `MenuItemGroup` to retain selection state when menu is closed and re-opened and `isToggled` prop is used.

## 6.84.1 - (February 7, 2024)

* Fixed
  * Fixed a focus indicator styling issue for the back button.

## 6.84.0 - (January 22, 2024)

* Changed
  * Minor dependency version bump.

## 6.83.0 - (December 18, 2023)

* Added
  * New stylings for the focus indicator.

## 6.82.0 - (December 11, 2023)

* Fixed
  * Fixed the issue with `contentWidth` as auto value.

* Changed
  * Allow menu/sub-menu to dynamically set height based on menu items.

## 6.81.0 - (November 23, 2023)

* Changed
  * Minor dependency version bump

## 6.80.0 - (November 9, 2023)

* Added
  * Added `ariaDescribedBy` prop for `menu-item` to announce group information.

## 6.79.0 - (October 25, 2023)

* Changed
  * Minor dependency version bump

## 6.78.1 - (October 11, 2023)

* Fixed
  * Fixed issue of focus highlight not visible on menu header back icon in Safari.

## 6.78.0 - (October 3, 2023)

* Changed
  * Minor dependency version bump

## 6.77.0 - (September 21, 2023)

* Added
  * Fixed the disabled menu item click event bleed through to other controls

* Changed
  * Updated `terra-arrange` from `v3.51.0` to `v3.53.0`.

## 6.76.0 - (August 31, 2023)

* Changed
  * Minor dependency version bump

## 6.75.0 - (August 10, 2023)

* Added
  * Added context for menu item selected/unselected state and sub menu keyboard navigation instructions.

* Changed
  * Updated props description for `headerTitle` & `showHeader`.

* Changed
 * Locked `terra-arrange` to `3.51.0` temporarily.

## 6.74.1 - (August 4, 2023)

* Changed
  * Minor dependency version bump

## 6.74.0 - (August 2, 2023)

* Changed
  * Locked `uuid` dependency to `3.4.0` for consistency across Terra packages.

## 6.73.0 - (July 31, 2023)

* Changed
  * Minor dependency version bump

## 6.72.0 - (July 25, 2023)

* Changed
  * Minor dependency version bump

## 6.71.0 - (July 19, 2023)

* Changed
  * Locked `uuid` dependency to `7.0.3` for consistency across Terra packages.

## 6.70.0 - (July 4, 2023)

* Fixed
  * Fixed issue where toggled item on nested menus was being reset while navigating back and forth between them.

## 6.69.0 - (June 12, 2023)

* Changed
  * Locked `uuid` version to `8.2.0`.

## 6.68.0 - (June 5, 2023)

* Changed
  * Allow navigation to disabled items
  * Updated submenu exit context to first item
  * Updated `uuid` to `v8` for consistency with other components.

## 6.67.0 - (May 11, 2023)

* Added
  * Added `showHeader` prop to control display of header title

* Fixed
  * Header context for JAWS

## 6.66.0 - (April 27, 2023)

* Changed
  * Minor dependency version bump

## 6.65.1 - (April 12, 2023)

* Fixed
  * Fixed issue of navigation on menu header click.

* Added
  * Allow screen readers to recognise as menu button
  * Added context for menu item index, item with submenu and selected/unselected state

## 6.65.0 - (March 29, 2023)

* Changed
  * Minor dependency version bump

## 6.64.0 - (March 1, 2023)

* Changed
  * Allow existing classnames on icon to be retained

## 6.63.0 - (February 14, 2023)

* Changed
  * Updated WDIO screenshots due to webpack-config-terra and
    terra-functional-testing upgrade.

## 6.62.0 - (February 1, 2023)

* Added
  * Allow for custom icons to be shown in menu

## 6.61.0 - (March 15, 2022)

* Added
  * Migrate docs to terra-framework-docs

## 6.60.0 - (November 16, 2021)

* Changed
  * Minor dependency version bump

## 6.59.0 - (November 9, 2021)

* Changed
  * Minor dependency version bump

## 6.58.0 - (October 14, 2021)

* Changed
  * Minor dependency version bump

## 6.57.0 - (October 12, 2021)

* Changed
  * Minor dependency version bump

## 6.56.0 - (September 20, 2021)

* Changed
  * Updated WDIO screenshots due to webpack-config-terra sass upgrade.

## 6.55.0 - (July 21, 2021)

* Changed
  * Minor dependency version bump

## 6.54.0 - (July 13, 2021)

* Changed
  * Minor dependency version bump

## 6.53.0 - (June 8, 2021)

* Changed
  * Updated `keycode-js` from `v2.0.1` to `v3.1.0`.

## 6.52.0 - (May 4, 2021)

* Changed
  * Minor dependency version bump

## 6.51.0 - (April 6, 2021)

* Changed
  * Updated Jest command

## 6.50.0 - (March 9, 2021)

* Changed
  * Updated to use terra-functional-testing

## 6.49.0 - (February 9, 2021)

* Changed
  * Updated color for disabled MenuItem text in clinical-lowlight-theme to `#656565`.

## 6.48.0 - (February 2, 2021)

* Changed
  * Minor dependency version bump

## 6.47.0 - (January 26, 2021)

* Changed
  * Minor dependency version bump

## 6.46.0 - (January 5, 2021)

* Changed
  * Updated to support a peer dependency of react-intl v2-v5

## 6.45.0 - (December 8, 2020)

* Changed
  * Minor dependency version bump

## 6.44.0 - (November 24, 2020)

* Changed
  * Update wdio tests to remove deprecated Terra.it helpers

## 6.43.0 - (November 10, 2020)

* Fixed
  * Fixed build failures due to the react/sort-comp rule

## 6.42.0 - (October 20, 2020)

* Added
  * Added logic to determine whether a menu item is a top-level item for a nested menu
  * Added margin styles for regular menu items vs. top-level nested items.

## 6.41.0 - (October 13, 2020)

* Changed
  * Minor dependency version bump

## 6.40.0 - (August 18, 2020)

* Added
  * Added an interaction media query to apply `hover` styles only on non-touch devices.

* Changed
  * Updated Changelog format

## 6.39.0 - (August 11, 2020)

* Changed
  * Minor dependency version bump

## 6.38.0 - (August 4, 2020)

* Changed
  * Updated Changelog format

## 6.37.0 - (July 14, 2020)

* Changed
  * Minor file changes to comply with eslint rules

## 6.36.0 - (June 16, 2020)

* Changed
  * Apply theme context to Menu Item.

## 6.35.0 - (June 9, 2020)

* Changed
  * Update failing jest snapshots

## 6.34.0 - (June 2, 2020)

* Changed
  * Apply themes by context and directly include packaged themes.
  * Update jest due to popup changes.

## 6.33.0 - (May 19, 2020)

* Changed
  * Minor dependency version bump

## 6.32.0 - (April 28, 2020)

* Added
  * Added `directory` as a sub attribute to the `repository` attribute in package.json

* Changed
  * Update wdio test configuration to use root wdio config

* Removed
  * Removed "View Component Source Code" from docs in favour of source code badge

## 6.31.0 - (April 6, 2020)

* Changed
  * Minor dependency version bump

## 6.30.0 - (March 31, 2020)

* Added
  * Added clinical-lowlight-theme wdio screenshots

## 6.29.0 - (March 10, 2020)

* Changed
  * Update docs to use MDX syntax

## 6.28.0 - (March 3, 2020)

* Added
  * Added new `headerTitle` prop for menus which have drill-in submenus

## 6.27.0 - (February 25, 2020)

* Changed
  * Minor dependency version bump

## 6.26.0 - (February 18, 2020)

* Added
  * Added clinical-lowlight-theme theming files

## 6.25.0 - (February 4, 2020)

* Changed
  * Minor dependency version bump

## 6.24.0 - (January 28, 2020)

* Changed
  * Update copyright to include 2020

## 6.23.0 - (January 7, 2020)

* Added
  * Added new WDIO screenshots

## 6.22.0 - (December 16, 2019)

* Changed
  * Minor dependency version bump

## 6.21.0 - (December 10, 2019)

* Added
  * Added orion-fusion-theme and generated the respective reference wdio screenshots.

* Changed
  * Updated Docs for eIFU title update.

## 6.20.0 - (November 20, 2019)

* Changed
  * Minor dependency updates

## 6.19.0 - (November 18, 2019)

* Changed
  * Minor dependency updates

## 6.18.0 - (November 7, 2019)

* Changed
  * Resolved lint warnings for multiple empty lines

## 6.17.0 - (October 30, 2019)

* Changed
  * Minor dependency updates

## 6.16.0 - (October 21, 2019)

* Changed
  * Minor dependency updates

## 6.15.0 - (October 16, 2019)

* Changed
  * Minor dependency updates

## 6.14.0 - (October 3, 2019)

* Changed
  * Minor dependency updates

* Fixed
  * Removed extra comma from scss file.

## 6.13.0 - (September 26, 2019)

* Changed
  * Minor dependency updates

* Added
  * Added Instructions-For-Use (eIFU) Icon to Menu-Item.

## 6.12.0 - (September 19, 2019)

* Changed
  * Removed `details` tag from doc-site.

* Added
  * Added en-CA translations.

## 6.11.0 - (September 6, 2019)

* Changed
  * Cleaned up imports in examples and test files
  * Updated `keycode-js` from `v1.0.4` to `v2.0.1`

## 6.10.0 - (August 21, 2019)

* Changed
  * Replaced Object.assign syntax with Object spread syntax

## 6.9.0 - (August 14, 2019)

* Fixed
  * Fixed keyboard and mouse-click navigation amongst the Menu Items within a Group.

* Changed
  * updated package.json test scripts

## 6.8.0 - (July 30, 2019)

* Removed
  * Removed DEPENDENCIES.md file

* Changed
  * Fixed linter issue in doc

## 6.7.1 - (July 23, 2019)

* Changed
  * Updated DEPENDENCIES.md doc

## 6.7.0 - (July 23, 2019)

* Changed
  * Minor dependency version bump

## 6.6.0 - (July 16, 2019)

* Added
  * Added documentation on required peerDependencies

* Changed
  * Updated the line-height of plain text Menu Items to be consistent with Menu Items with icons.

## 6.5.0 - (July 10, 2019)

* Changed
  * Minor dependency version bump

## 6.4.0 - (July 2, 2019)

* Changed
  * Renamed test and example SCSS files to end with `.module.scss` extension

## 6.3.0 - (June 19, 2019)

* Changed
  * Removed all inline styles from Dev-site components and implemented the same styles using external css.
  * Update wdio specs to use Terra.describeViewports
  * Update examples to ensure correct aria roles are set

* Removed
  * Removed React.Fragment from MenuContent to improve the accessibility

## 6.2.0 - (June 12, 2019)

* Removed
  * Removed node_modules from .npmignore

## 6.1.0 - (May 21, 2019)

* Changed
  * Update tests for terra-toolkit v5 and terra-dev-site v5 changes
  * Explicitly set menu item font weight value to normal.

## 6.0.0 - (May 13, 2019)

* Breaking Change
  * Consume latest major version bump of terra-popup

## 5.10.0 - (May 7, 2019)

* Changed
  * Added custom font-weight property for MenuItem component (defaults to 'inherit')

## 5.9.0 - (April 24, 2019)

* Changed
  * Moved packages we use solely in doc examples and tests to devDependencies

## 5.8.0 - (April 16, 2019)

* Changed
  * Minor dependency update

## 5.7.0 - (April 9, 2019)

* Changed
  * Minor dependency update

## 5.6.0 - (April 2, 2019)

* Changed
  * Minor dependency update

## 5.5.0 - (March 26, 2019)

* Changed
  * Update react/react-dom peer-dependency to latest stable minor release

* Removed
  * Removed peer dependency on terra-base
  * Removed baseStyles import from terra-base

## 5.4.0 - (March 20, 2019)

* Changed
  * Minor dependency update

## 5.3.0 - (March 12, 2019)

* Changed
  * Replaced local keyCode values with keycode-js npm package

## 5.2.0 - (March 5, 2019)

* Changed
  * Minor dependency update

## 5.1.0 - (February 26, 2019)

* Added
  * Added en-AU translations

## 5.0.0 - (February 13, 2019)

* Breaking Change
  * Major dependency version bump of terra-list

## 4.5.0 - (February 5, 2019)

* Changed
  * Migrate package to the terra-framework repository

* Fixed
  * Fixed Focus Issue of Menu Item on Press of Tab and Shift Tab.

## 4.4.0 - (January 27, 2019)

* Changed
  * Minor dependency version bump

## 4.3.0 - (January 26, 2019)

* Changed
  * Minor dependency version bump

## 4.2.0 - (January 22, 2019)

* Changed
  * Minor dependency version bump

## 4.1.0 - (January 22, 2019)

* Changed
  * Minor dependency version bump

## 4.0.0 - (January 8, 2019)

* Changed
  * Updated theme variables

## 3.29.0 - (January 2, 2019)

* Changed
  * Minor dependency version bump
  * Removed usage of componentWillReceiveProps
  * Make menu item outline on focus themeable and provide browser default fallback.
  * Updated site examples to be more accessible.

## 3.28.1 - (November 20, 2018)

* Changed
  * Patch dependency version bump

## 3.28.0 - (November 19, 2018)

* Changed
  * Minor dependency version bump

## 3.27.0 - (November 14, 2018)

* Changed
  * Menu now shifts focus to first interactable item in menu when opened
  * Menu now allows shifting focus to first or last menu item on arrow key down / arrow key up on initial focus.

## 3.26.0 - (November 13, 2018)

* Changed
  * Minor dependency version bump

## 3.25.0 - (November 9, 2018)

* Changed
  * Minor dependency version bump

## 3.24.0 - (October 24, 2018)

* Changed
  * Minor dependency version bump

## 3.23.0 - (October 16, 2018)

* Changed
  * Minor dependency version bump

## 3.22.0 - (October 8, 2018)

* Changed
  * Minor dependency version bump

## 3.21.0 - (October 2, 2018)

* Changed
  * Minor dependency version bump

## 3.20.0 - (September 25, 2018)

* Changed
  * Minor dependency version bump

## 3.19.1 - (September 6, 2018)

* Changed
  * Patch dependency version bump

## 3.19.0 - (September 5, 2018)

* Changed
  * Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
  * Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

## 3.18.0 - (September 4, 2018)

* Changed
  * Minor dependency version bump

## 3.17.0 - (August 30, 2018)

* Changed
  * Minor dependency version bump

## 3.16.0 - (August 29, 2018)

* Changed
  * Minor dependency version bump

## 3.15.0 - (August 21, 2018)

* Changed
  * Minor dependency version bump

## 3.14.0 - (August 1, 2018)

* Changed
  * Minor dependency version bump

## 3.13.0 - (July 25, 2018)

* Added
  * Add sv and sv-SE translations

## 3.12.0 - (July 19, 2018)

* Changed
  * Add .module extension to SCSS file(s)

## 3.11.0 - (July 17, 2018)

* Added
  * Added more themeable variables to MenuItem
  * Added an active style to MenuItem

* Changed
  * Minor dependency version bump
  * Formatting changes per eslint v4 update
  * Required props no longer set a default prop

## 3.10.0 - (July 10, 2018)

* Changed
  * Minor dependency version bump

## 3.9.0 - (July 3, 2018)

* Changed
  * Minor dependency version bump

## 3.8.0 - (June 28, 2018)

* Changed
  * Minor dependency version bump

* Added
  * Added change log to the documentation on terra-dev-site

## 3.7.0 - (June 22, 2018)

* Changed
  * Moved terra-base from dependency to peerDependency
  * Added localized aria-labels menu buttons when in bounded context

## 3.6.0 - (June 19, 2018)

* Changed
  * Minor dependency version bump

## 3.5.0 - (June 12, 2018)

* Changed
  * Updated "test:jest" script to work on windows.
  * Converted nightwatch tests to webdriver.io tests

## 3.4.0 - (May 30, 2018)

* Changed
  * Updated structure to match terra-dev-site 1.0 and moved doc examples internal.

## 3.3.0 - (May 25, 2018)

* Changed
  * Minor dependency version bump

## 3.2.0 - (May 23, 2018)

* Changed
  * Minor dependency version bump

## 3.1.0 - (May 16, 2018)

* Changed
  * Minor dependency version bump

## 3.0.0 - (May 9, 2018)

Major Change
Updated to use terra-popup v4.0.0

## 2.8.0 - (May 2, 2018)

* Changed
  * Minor dependency version bump
  * Updated dependency on terra-popup.

## 2.7.0 - (April 20, 2018)

* Added
  * Added aria-checked attribute to selected menu items.

## 2.6.0 - (April 15, 2018)

* Changed
  * Removed redunant peer dependencies.

## 2.5.0 - (April 5, 2018)

* Changed
  * Minor dependency version bump

## 2.4.0 - (March 30, 2018)

* Changed
  * Minor dependency version bump

## 2.3.0 - (March 14, 2018)

* Changed
  * Minor dependency version bump

## 2.2.0 - (March 6, 2018)

* Removed
  * Removed props-table script from package.json

## 2.1.0 - (February 26, 2018)

* Changed
  * Minor dependency version bump

## 2.0.1 - (February 13, 2018)

* Changed
  * Updated peerDependencies

## 2.0.0 - (February 12, 2018)

* Changed
  * Updated to use React 16
  * Changed React.Children.map to React.Children.forEach to prevent '.$' being prepended to the key.

## 1.13.0 - (February 1, 2018)

* Changed
  * Minor dependency version bump

## 1.12.0 - (January 18, 2018)

* Added
  * Appropriate roles for accessibility

* Changed
  * Divider component from an hr to an li with separator role.

* Fixed
  * Fixed issue with left arrow presses on first layer.

## 1.11.0 - (January 5, 2018)

* Fixed
  * Fixed issue with left arrow presses on first layer.

## 1.10.0 - (December 5, 2017)

* Changed
  * Minor dependency version bump

## 1.9.0 - (November 28, 2017)

* Changed
  * Minor dependency version bump

## 1.8.0 - (November 16, 2017)

* Changed
  * Minor dependency version bump

## 1.7.0 - (November 7, 2017)

* Changed
  * Minor dependency version bump

## 1.6.0 - (October 31, 2017)

* Added
  * Added option for auto width sizing.

* Changed
  * Updated menu to use the auto height available through popup.

* Fixed
  * Issue where tabbing would focus on Menu container before items in menu.
  * Issue where divider was no longer visible.
  * Issue where disabled items could still be selected.

## 1.5.0 - (October 24, 2017)

* Changed
  * Minor dependency version bump

## 1.4.0 - (October 12, 2017)

* Added
  * Keyboard navigation with arrow keys

* Fixed
  * Issue where Menu.Item prop updates were not getting rendered immediately.
  * Conflict with new terra-popup implementation and tests.

## 1.3.0 - (October 6, 2017)

* Fixed
  * Bug around selectable menus with only 1 child element.

* Added
  * Added ability to disable menu items

## 1.2.0 - (September 26, 2017)

* Removed
  * Remove stylelint-disable selector-class-pattern

## 1.1.0 - (September 19, 2017)

* Changed
  * Minor dependency version bump

## 1.0.0 - (September 12, 2017)

Initial stable release
