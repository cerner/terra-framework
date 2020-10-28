# Changelog

## Unreleased

* Changed
  * Updated to support a peer dependency of react-intl v2-v5
  * Removed `intlShape` imports

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
