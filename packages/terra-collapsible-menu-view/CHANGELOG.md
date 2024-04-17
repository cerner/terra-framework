# Changelog

## Unreleased

## 6.97.1 - (April 17, 2024)

* Fixed
  * Set aria-haspopup value to boolean.

## 6.97.0 - (April 4, 2024)

* Changed
  * Minor dependency version bump.

## 6.96.0 - (March 25, 2024)

* Updated
  * Updated to compare calculated width with available width to render collapsible menu items within available space.

## 6.95.0 - (March 19, 2024)

* Updated
  * Corrected to get width from bounding client rect instead of resize observer to avoid infinite loop.

## 6.94.0 - (March 14, 2024)

* Changed
  * Minor dependency version bump.

## 6.93.0 - (March 8, 2024)

* Changed
  * Minor dependency version bump.

## 6.92.0 - (March 5, 2024)

* Changed
  * Minor dependency version bump.

## 6.91.0 - (March 1, 2024)

* Changed
  * Minor dependency version bump.

## 6.90.0 - (February 28, 2024)

* Changed
  * Minor dependency version bump.

## 6.89.0 - (February 7, 2024)

* Changed
  * Minor dependency version bump.

## 6.88.0 - (January 22, 2024)

* Changed
  * Minor dependency version bump.

## 6.87.1 - (January 10, 2024)

* Fixed
  * Fixed flicker issue when `collapsible-menu-view` is wrapped with `terra-clinical-header`.

## 6.87.0 - (December 18, 2023)

* Added
  * New stylings for the focus indicator.

## 6.86.0 - (December 11, 2023)

* Changed
  * Minor dependency version bump.

## 6.85.0 - (November 23, 2023)

* Added
  * Added ability to select a CollapsibleMenuViewItem when not in a group.

## 6.84.0 - (November 9, 2023)

* Added
  * Added `GroupId` prop that used in menu item for `aria-describedby` that labels the group for accessibility.

## 6.83.0 - (October 25, 2023)

* Changed
  * Minor dependency version bump

## 6.82.0 - (October 17, 2023)

* Changed
  * Minor dependency version bump

## 6.81.0 - (October 11, 2023)

* Changed
  * Minor dependency version bump

## 6.80.0 - (October 3, 2023)

* Added
  * Added the ability to add hyperlinks.
  * Added `isMultiSelect` prop to support multiselect group items.
  * Added aria-label prop for `collapsible-menu-view` to announce group information.

* Fixed
  * Fixed responsive menu icon not being vertical in the lowlight and fusion themes.

## 6.79.0 - (September 21, 2023)

* Changed
  * Minor dependency version bump

## 6.78.0 - (August 31, 2023)

* Added
  * Added aria-haspopup attribute to menu buttons so screen reader users are provided the context that they will open a dialog popup.

* Changed
  * Disabled unselectable menu item toggles to make them consistent with face-up toggles.

## 6.77.0 - (August 10, 2023)

* Changed
  * Minor dependency version bump

## 6.76.1 - (August 4, 2023)

* Changed
  * Minor dependency version bump

## 6.76.0 - (August 2, 2023)

* Changed
  * Minor dependency version bump

## 6.75.0 - (July 31, 2023)

* Changed
  * Minor dependency version bump

## 6.74.0 - (July 25, 2023)

* Changed
  * Minor dependency version bump

## 6.73.0 - (July 19, 2023)

* Changed
  * Minor dependency version bump

## 6.72.0 - (July 4, 2023)

* Changed
  * Minor dependency version bump

## 6.71.0 - (June 12, 2023)

* Changed
  * Minor dependency version bump

## 6.70.0 - (June 5, 2023)

* Changed
  * Minor dependency version bump

## 6.69.0 - (May 11, 2023)

* Changed
  * Minor dependency version bump

## 6.68.0 - (April 27, 2023)

* Changed
  * Minor dependency version bump

## 6.67.0 - (April 12, 2023)

* Changed
  * Minor dependency version bump

## 6.66.0 - (April 5, 2023)

* Added
  * Added `isStartAligned` prop
  * Added new Jest test and snapshots

## 6.65.0 - (March 29, 2023)

* Changed
  * Updated Jest snapshots.

## 6.64.0 - (March 1, 2023)

* Changed
  * Updated Jest snapshot for terra-button changes
  * Updated WDIO screenshots due to terra-menu changes

## 6.63.0 - (February 14, 2023)

* Changed
  * Updated WDIO screenshots due to webpack-config-terra and
    terra-functional-testing upgrade.

## 6.62.0 - (February 1, 2023)

* Changed
  * Updated jest snapshots

## 6.61.0 - (March 15, 2022)

* Changed
  * Migrate docs to terra framework docs

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
  * Updated WDIO snapshots due to terra-functional-testing v2 upgrade.

## 6.55.0 - (July 21, 2021)

* Changed
  * Updated `terra-form-checkbox` from `v4.0.0` to `v4.8.0`.
  * Updated `terra-icon` from `v3.1.0` to `v3.19.0`.

## 6.54.0 - (July 13, 2021)

* Fixed
  * Fix to invoke consumer's `onClick` handler for menu buttons.

## 6.53.0 - (June 8, 2021)

* Changed
  * Minor dependency version bump

## 6.52.0 - (May 4, 2021)

* Changed
  * Minor dependency version bump

## 6.51.0 - (April 6, 2021)

* Changed
  * Updated Jest command

## 6.50.0 - (March 9, 2021)

* Changed
  * Updated to terra-functional-testing

## 6.49.0 - (February 9, 2021)

* Changed
  * Minor dependency version bump

## 6.48.0 - (February 2, 2021)

* Added
  * Added `alwaysCollapsedMenuItems` attribute to `CollapsibleMenuView` which can be used to prepopulate collapsible menu view. These items will always hidden under the More button. The collapsed menu view will always shown if at least one item is added to the collapsedMenuItems list. A divider will shown if there are other elements pushed to the collapsed menu view to divide them from the prepopulated list.

## 6.47.0 - (January 26, 2021)

* Changed
  * Minor dependency version bump

## 6.46.0 - (January 5, 2021)

* Changed
  * Updated to support a peer dependency of react-intl v2-v5
  * Updated to use `injectIntl` instead of `FormattedMessage` for react-intl v2-v5 compatibility

* Fixed
  * Fixed broken links in documentation.

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

* Changed
  * Fixed failing WDIO tests

## 6.41.0 - (October 13, 2020)

* Changed
  * Minor dependency version bump

## 6.40.0 - (August 18, 2020)

* Changed
  * Minor dependency version bump

## 6.39.0 - (August 11, 2020)

* Changed
  * Minor dependency version bump

## 6.38.0 - (August 4, 2020)

* Changed
  * Updated Changelog format

## 6.37.0 - (July 14, 2020)

* Changed
  * updated `master` references to `main`.

## 6.36.0 - (June 16, 2020)

* Changed
  * Minor dependency version bump

## 6.35.0 - (June 9, 2020)

* Changed
  * Minor dependency version bump

## 6.34.0 - (June 2, 2020)

* Changed
  * Fixed lowlight and clinical theme interference issue.

* Changed
  * Bumped terra-form-checkbox from v3 to v4

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
  * Minor dependency version bump

## 6.28.0 - (March 3, 2020)

* Changed
  * Update docs to use MDX syntax.

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

* Changed
  * Minor dependency version bump

## 6.22.0 - (December 16, 2019)

* Changed
  * Fixed axe violation for missing roles.

## 6.21.0 - (December 10, 2019)

* Added
  * Added orion-fusion-theme and generated the respective reference wdio screenshots.

## 6.20.0 - (November 20, 2019)

* Changed
  * Minor dependency updates

## 6.19.0 - (November 18, 2019)

* Changed
  * Changed icon in menu button and button-style to utility variant

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

## 6.13.0 - (September 26, 2019)

* Changed
  * Minor dependency updates

* Added
  * Included the en-CA locale in the SingleItemGroup test.

* Removed
  * Removed the non-supported Finnish language translations to avoid confusion

## 6.12.0 - (September 19, 2019)

* Added
  * Added en-CA translations.

* Changed
  * Removed `details` tag from doc-site.
  * Doc site example module import syntax modified to use package.json name resolution

## 6.11.0 - (September 6, 2019)

* Changed
  * Cleaned up imports in examples and test files

## 6.10.0 - (August 21, 2019)

* Changed
  * Replaced Object.assign syntax with Object spread syntax

## 6.9.0 - (August 14, 2019)

* Changed
  * Updated Jest Snapshots for new icon-prop added in menu-item.
  * updated package.json test scripts
  * Updated to interface with react-intl's `FormattedMessage` rather than old React Context API.

## 6.8.0 - (July 30, 2019)

* Removed
  * Removed DEPENDENCIES.md file

## 6.7.1 - (July 23, 2019)

* Changed
  * Updated DEPENDENCIES.md doc

## 6.7.0 - (July 23, 2019)

* Changed
  * Normalized terra-form-checkbox dependency version to match other terra-framework packages

## 6.6.0 - (July 16, 2019)

* Added
  * Added documentation on required peerDependencies

* Fixed
  * Fixed divider transition between normal and in-menu view.
  * Fixed Collapsible issue for single item group

## 6.5.0 - (July 10, 2019)

* Changed
  * Minor dependency version bump
  * Replaced Terra-Form with Terra-Form-Checkbox in CollapsibleMenuViewToggle

## 6.4.0 - (July 2, 2019)

* Fixed
  * Fixed issue with accessibility roles in list view in popup menu

## 6.3.0 - (June 19, 2019)

* Changed
  * Added more buttons to support wdio tests for other themes (ex:mpages theme)

## 6.2.0 - (June 12, 2019)

* Removed
  * Removed node_modules from .npmignore

* Changed
  * Update tests for terra-toolkit v5 and terra-dev-site v5 changes
  * Update wdio spec to use Terra.describeViewports

## 6.1.0 - (May 21, 2019)

* Changed
  * Minor dependency update

## 6.0.0 - (May 13, 2019)

* Breaking Change
  * Consume latest major version bump of terra-menu

## 5.10.0 - (May 7, 2019)

* Changed
  * Minor dependency update

## 5.9.0 - (April 24, 2019)

* Changed
  * Moved packages we use solely in doc examples and tests to devDependencies

## 5.8.0 - (April 16, 2019)

* Changed
  * Minor dependency update

## 5.7.0 - (April 9, 2019)

* Changed
  * Minor dependency update

## 5.6.0 - (March 12, 2019)

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
  * Update Jest tests to use terra-enzyme-intl

## 5.3.0 - (March 12, 2019)

* Changed
  * Minor dependency update

## 5.2.0 - (March 5, 2019)

* Changed
  * Minor dependency update

## 5.1.0 - (February 26, 2019)

* Added
  * Added en-AU translations

## 5.0.0 - (February 13, 2019)

* Breaking Change
  * Major dependency version bump of terra-list

* Changed
  * Wrapped Collapsible Menu Items in `<li>`

## 4.3.0 - (February 5, 2019)

* Changed
  * Migrate package to the terra-framework repository

## 4.2.0 - (January 27, 2019)

* Changed
  * Minor dependency version bump

## 4.1.0 - (January 26, 2019)

* Fixed
  * Fixed issue preventing single item views from collapsing

## 4.0.0 - (January 22, 2019)

* Changed
  * Updated theme variables

## 3.32.0 - (January 8, 2019)

* Changed
  * Minor dependency version bump

## 3.31.0 - (January 2, 2019)

* Changed
  * Minor dependency version bump

## 3.30.1 - (November 20, 2018)

* Changed
  * Patch dependency version bump

## 3.30.0 - (November 19, 2018)

* Changed
  * Minor dependency version bump

## 3.29.0 - (November 14, 2018)

* Changed
  * Minor dependency version bump

## 3.28.0 - (November 13, 2018)

* Changed
  * Minor dependency version bump

## 3.27.0 - (November 9, 2018)

* Changed
  * Minor dependency version bump

## 3.26.0 - (October 30, 2018)

* Changed
  * Update mixin import to be more explicit

## 3.25.0 - (October 24, 2018)

* Changed
  * Minor dependency version bump

## 3.24.0 - (October 16, 2018)

* Changed
  * Minor dependency version bump

## 3.23.0 - (October 8, 2018)

* Changed
  * Minor dependency version bump

## 3.22.0 - (October 2, 2018)

* Changed
  * Minor dependency version bump

## 3.21.0 - (September 25, 2018)

* Changed
  * Minor dependency version bump

## 3.20.1 - (September 6, 2018)

* Changed
  * Patch dependency version bump

## 3.20.0 - (September 5, 2018)

* Changed
  * Removed test restrictions on accessibility since that issue was fixed.
  * Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
  * Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

## 3.19.0 - (September 4, 2018)

* Changed
  * Minor dependency version bump

## 3.18.0 - (August 30, 2018)

* Changed
  * Minor dependency version bump

## 3.17.0 - (August 29, 2018)

* Changed
  * Minor dependency version bump

## 3.16.0 - (August 21, 2018)

* Changed
  * Minor dependency version bump

## 3.15.0 - (August 8, 2018)

* Changed
  * Updated component internationalization error message

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
  * Added themeable variables

* Changed
  * Formatting changes per eslint v4 update
  * Required props no longer set a default prop
  * Minor dependency version bump

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

* Fixed
  * Corrected the 'resize observer loop limit reached' error with animation frames.

## 3.7.0 - (June 22, 2018)

* Changed
  * Moved terra-base from dependency to peerDependency

## 3.6.0 - (June 19, 2018)

* Changed
  * Minor dependency version bump

## 3.5.0 - (June 12, 2018)

* Changed
  * Updated "test:jest" script to work on windows.
  * Renamed the doc site template

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
Updated to use terra-menu v3.0.0

## 2.8.0 - (May 2, 2018)

* Changed
  * Minor dependency version bump

* Added
Added localized aria-label to ellipses "view more" button

## 2.7.0 - (April 20, 2018)

* Changed
  * Minor dependency version bump

## 2.6.0 - (April 15, 2018)

* Changed
  * Minor dependency version bump

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
  * Uplifted component to use terra-button-group V2

* Removed
  * isSelectable prop in CollapsibleMenuViewItemGroup.

* Added
  * selectedKeys prop in CollapsibleMenuViewItemGroup.

## 1.10.0 - (February 1, 2018)

* Changed
  * Minor dependency version bump

## 1.9.0 - (January 18, 2018)

* Changed
  * Minor dependency version bump

## 1.8.0 - (January 5, 2018)

* Changed
  * Added a data attribute to the collapsed menu trigger to make testing easier.

* Removed
  * Removed rule disabling list accessibility tests.

## 1.7.0 - (December 5, 2017)

* Changed
  * Minor dependency version bump

## 1.6.0 - (November 28, 2017)

* Changed
  * Update menu to keep the last child face up if it fits within the available menu space

## 1.5.0 - (November 16, 2017)

* Changed
  * Minor dependency version bump

## 1.4.0 - (November 7, 2017)

* Changed
  * Minor dependency version bump

## 1.3.0 - (October 31, 2017)

* Added
  * Added option for auto width sizing.

## 1.2.0 - (October 24, 2017)

* Changed
  * Minor dependency version bump

## 1.1.0 - (October 6, 2017)

* Fixed
  * Jumpy display on initial load and refresh

* Added
  * Added ability to disable toggle and items

## 1.0.0 - (September 26, 2017)

Initial stable release
