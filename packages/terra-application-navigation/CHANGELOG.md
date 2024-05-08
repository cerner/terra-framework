# Changelog

## Unreleased

## 1.84.0 - (May 8, 2024)

* Changed
  * Minor dependency version bump.

## 1.83.0 - (May 1, 2024)

* Changed
  * Minor dependency version bump.

## 1.82.0 - (April 4, 2024)

* Changed
  * Minor dependency version bump.

## 1.81.0 - (March 25, 2024)

* Changed
  * Minor dependency version bump.

## 1.80.0 - (March 14, 2024)

* Changed
  * Minor dependency version bump.

## 1.79.0 - (March 8, 2024)

* Changed
  * Minor dependency version bump.

## 1.78.0 - (March 5, 2024)

* Changed
  * Minor dependency version bump.

## 1.77.0 - (February 28, 2024)

* Changed
  * Minor dependency version bump.

## 1.76.0 - (January 22, 2024)

* Changed
  * Minor dependency version bump.

## 1.75.0 - (December 18, 2023)

* Changed
  * Minor dependency version bump.

## 1.74.0 - (November 23, 2023)

* Changed
  * Minor dependency version bump

## 1.73.0 - (October 11, 2023)

* Changed
  * Minor dependency version bump

## 1.72.0 - (October 3, 2023)

* Changed
  * Minor dependency version bump

## 1.71.0 - (August 31, 2023)

* Changed
  * Minor dependency version bump

## 1.70.1 - (August 4, 2023)

* Changed
  * Minor dependency version bump

## 1.70.0 - (July 31, 2023)

* Changed
  * Minor dependency version bump

## 1.69.0 - (July 25, 2023)

* Changed
  * Minor dependency version bump

## 1.68.0 - (July 19, 2023)

* Changed
  * Minor dependency version bump

## 1.67.0 - (June 5, 2023)

* Changed
  * Minor dependency version bump

## 1.66.0 - (May 11, 2023)

* Changed
  * Minor dependency version bump

## 1.65.0 - (April 27, 2023)

* Changed
  * Minor dependency version bump

## 1.64.0 - (March 29, 2023)

* Changed
  * Updated Jest snapshots.

## 1.63.0 - (March 1, 2023)

* Changed
  * Updated Jest snapshot for terra-button changes

## 1.62.0 - (February 14, 2023)

* Changed
  * Updated WDIO screenshots due to webpack-config-terra and
    terra-functional-testing upgrade.

## 1.61.0 - (February 7, 2023)

* Changed
  * Updated jest snapshot for decorative icon changes.

## 1.60.0 - (December 13, 2022)

* Fixed
  * Fixed broken links in documentation.

## 1.59.2 - (March 15, 2022)

* Changed
  * Minor dependency version bump

## 1.59.1 - (February 2, 2022)

* Changed
  * Minor dependency version bump

## 1.59.0 - (November 16, 2021)

* Changed
  * Minor dependency version bump

## 1.58.0 - (November 9, 2021)

* Changed
  * Minor dependency version bump

## 1.57.0 - (October 14, 2021)

* Fixed
  * Reverted focus-trap-react upgrade due to passivity concerns

## 1.56.0 - (October 12, 2021)

* Changed
  * Upgrade focus-trap-react to version ^8.0.0.

## 1.55.0 - (September 20, 2021)

* Changed
  * Updated behavior for the menu close custom event to trigger onDrawerMenuStateChange callback.
  * Updated WDIO screenshots due to webpack-config-terra sass upgrade.
  * Updated WDIO snapshots due to terra-functional-testing v2 upgrade.

## 1.54.0 - (July 21, 2021)

* Changed
  * Updated `terra-icon` from `v3.11.0` to `v3.19.0`.
  * Updated `terra-breakpoints` from `v2.0.0` to `v2.19.0`

## 1.53.0 - (July 13, 2021)

* Changed
  * Minor dependency version bump

## 1.52.0 - (July 6, 2021)

* Changed
  * Updated screenshots due to changes made in `terra-application-name`.

## 1.51.0 - (June 8, 2021)

* Changed
  * Updated `keycode-js` from `v2.0.1` to `v3.1.0`.

## 1.50.0 - (May 4, 2021)

* Fixed
  * add z-index to address ambiguous layers across browsers.

## 1.49.0 - (April 27, 2021)

* Changed
  * Updated Swedish translations.

## 1.48.1 - (April 12, 2021)

* Fixed
  * add back missing metaData to utility items.

## 1.48.0 - (April 6, 2021)

* Changed
  * Updated screenshots with elements that are out of bound
  * Updated Jest command

* Fixed
  * Applied theme context to drawer menu and popup menu

## 1.47.0 - (March 9, 2021)

* Changed
  * Updated to terra-functional-testing
  * Remove extraneous application bases from tests.

* Added
  * Adding an id to ApplicationNavigation now causes navigation, extension, and utility items to have a unique id.

* Fixed
  * Prevent error when using focus trap with react-intl v5

## 1.46.0 - (February 9, 2021)

* Fixed
  * Fix screen reader to read username along with user settings.

## 1.45.0 - (February 2, 2021)

* Fixed
  * Updated sv translations due to feedback from the i18n team.

## 1.44.0 - (January 26, 2021)

* Changed
  * Update failing jest tests.

## 1.43.0 - (January 5, 2021)

* Changed
  * Updated to support a peer dependency of react-intl v2-v5
  * Removed `intlShape` imports

* Fixed
  * Fixed broken links in documentation.

## 1.42.0 - (December 8, 2020)

* Changed
  * Minor dependency version bump

## 1.41.0 - (November 24, 2020)

* Changed
  * Update wdio tests to remove deprecated Terra.it helpers

## 1.40.0 - (November 10, 2020)

* Fixed
  * Fixed build failures due to the react/sort-comp rule

## 1.39.0 - (October 27, 2020)

* Fixed
  * Corrected presentation of Help utility item in DrawerMenu when it is the only utility item present.

## 1.38.0 - (October 20, 2020)

* Changed
  * Minor dependency version bump

## 1.37.0 - (October 13, 2020)

* Added
  * Apply theme context to application-navigation.

* Changed
  * Replaced references to terra-doc-template with terra-docs.
  * Update terra-avatar to 3.8.0.

* Fixed
  * Corrected ApplicationNavigation TabCount consolidation logic.
  * Removed dependency on terra-application.

## 1.36.0 - (September 29, 2020)

* Added
  * Added a custom event that closes both drawer menu and popup menu if open.

## 1.35.0 - (August 18, 2020)

* Added
  * Added an interaction media query to apply `hover` styles only on non-touch devices.

* Changed
  * Updated Changelog format

## 1.34.0 - (August 11, 2020)

* Fixed
  * Fix 'tab' text flicker when notifications are provided.

## 1.33.0 - (August 4, 2020)

* Changed
  * Updated Changelog format
  * Update jest due to change in theme

## 1.30.0 - (July 14, 2020)

* Fixed
  * Corrected the 'resize observer loop limit reached' error with animation frames.

* Fixed
  * Fixed `side-drawer` not opening in IE for tiny viewport.

* Removed
  * Removed themeable variable --terra-application-navigation-content-layout-default-width
  * Removed themeable variable --terra-application-navigation-content-layout-medium-width

* Changed
  * Fixed `aria-haspopup` and `link` role  incompatibility issue.
  * Minor file changes to comply with eslint rules
  * Remove unused disable eslint directives

## 1.29.0 - (June 16, 2020)

* Changed
  * Minor dependency version bump

## 1.28.0 - (June 9, 2020)

* Changed
  * Update failing jest snapshots

## 1.27.0 - (June 2, 2020)

* Fixed
  * Removed outline on main content

## 1.28.0 - (May 26, 2020)

* Fixed
  * Focus should be returned to `Tab` key clicked when `Navigation prompt` is dismissed.
  * Focus should be passed to `Content` when `Navigation prompt` is accepted.
  * Updated the static focusMainContent method to use the useCallback hook to fix lint errors

## 1.27.0 - (May 19, 2020)

* Changed
  * Minor dependency version bump

## 1.26.0 - (April 28, 2020)

* Added
  * Added `directory` as a sub attribute to the `repository` attribute in package.json

* Changed
  * Update wdio test configuration to use root wdio config
  * Regenerate wdio fusion screenshots due to bottom border style changes in terra-action-header.

* Removed
  * Removed "View Component Source Code" from docs in favour of source code badge

## 1.25.0 - (April 6, 2020)

* Changed
  * Updated test examples to provide `initials` in userConfig

## 1.24.0 - (March 31, 2020)

* Added
  * Added clinical-lowlight-theme wdio screenshots

## 1.23.0 - (March 10, 2020)

* Changed
  * Minor dependency version bump

## 1.22.0 - (March 3, 2020)

* Changed
  * Update docs to use MDX syntax
  * Updated wdio screenshots

## 1.21.0 - (February 25, 2020)

* Changed
  * Minor dependency version bump

## 1.20.0 - (February 18, 2020)

* Added
  * Added clinical-lowlight-theme theming files

* Fixed
  * Fixed Drawer menu not closing in Internet Explorer on clicking outside of drawer menu.

## 1.19.0 - (February 11, 2020)

* Fixed
  * Fixed `settings` api called when `help` clicked in drawer menu.

## 1.18.0 - (February 4, 2020)

* Changed
  * Minor dependency version bump

## 1.17.0 - (January 28, 2020)

* Changed
  * Update copyright to include 2020

## 1.16.0 - (January 7, 2020)

* Changed
  * Minor dependency version bump

## 1.15.0 - (December 16, 2019)

* Changed
  * Updated Jest snapshots.
  * Fixed axe issue for wrong aria-roles

## 1.14.0 - (December 10, 2019)

* Added
  * Added reference wdio screenshots for "orion-fusion-theme".

* Changed
  * Updated Jest Snapshots due to changes in `avatar`.

## 1.13.0 - (November 20, 2019)

* Changed
  * Minor dependency updates

## 1.12.0 - (November 18, 2019)

* Changed
  * Minor dependency updates

## 1.11.0 - (November 7, 2019)

* Added
  * `onDrawerMenuStateChange` callback added for Drawer menu state change.

* Changed
  * Resolved lint warnings for multiple empty lines

## 1.10.0 - (October 30, 2019)

* Changed
  * Minor dependency updates

## 1.9.0 - (October 21, 2019)

* Changed
  * Minor dependency updates

## 1.8.0 - (October 16, 2019)

* Changed
  * Minor dependency updates

## 1.7.0 - (October 3, 2019)

* Changed
  * Update terra-icon package version.
  * Adjusted title margin and padding
  * Update tests and screenshots to support theme tests

* Fixed
  * Fix wdio test url.

## 1.6.0 - (September 26, 2019)

* Changed
  * Minor dependency updates

## 1.5.0 - (September 19, 2019)

* Changed
  * Update underlying structure to handle new theme variables.
  * Revert test wrapper changes.
  * Update Jest snapshots
  * Removed `details` tag from doc-site.
  * Corrected lint warnings
  * Theme border-bottom focus

* Fixed
  * fix clip bug.

* Added
  * Added en-CA translations.

## 1.4.0 - (September 6, 2019)

* Changed
  * Cleaned up imports in examples and test files
  * Added check to prevent rendering of Utility Button or Nav Drawer Button if they are empty.
  * Updated `keycode-js` from `v1.0.4` to `v2.0.1`

## 1.3.0 - (August 21, 2019)

* Changed
  * Minor dependency version bump

## 1.2.0 - (August 14, 2019)

* Changed
  * updated package.json test scripts

## 1.1.0 - (July 30, 2019)

* Changed
  * Prevent outside clicks from passing through to content when drawer open.

* Removed
  * Removed DEPENDENCIES.md file

* Changed
  * Re-generate screenshots with different mouseover positioning.

## 1.0.1 - (July 23, 2019)

* Changed
  * Corrected themeable variable name that slipped through lint filter.

## 1.0.0 - (July 23, 2019)

* Initial release
