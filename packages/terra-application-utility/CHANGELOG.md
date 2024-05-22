# Changelog

## Unreleased

## 2.59.2 - (May 22, 2024)

* Changed
  * Minor dependency version bump.

## 2.59.1 - (May 20, 2024)

* Fixed
  * Updated `terra-icon` to `^3.61.0`.

## 2.59.0 - (May 20, 2024)

* Changed
  * Minor dependency version bump.

## 2.58.0 - (April 4, 2024)

* Changed
  * Minor dependency version bump.

## 2.57.0 - (March 29, 2024)

* Changed
  * Minor dependency version bump.

## 2.56.0 - (March 14, 2024)

* Changed
  * Minor dependency version bump.

## 2.55.0 - (December 18, 2023)

* Changed
  * Minor dependency version bump.

## 2.54.0 - (October 3, 2023)

* Changed
  * Updated `terra-arrange` from `v3.51.0` to `v3.53.0`.

## 2.53.0 - (August 10, 2023)

* Changed
 * Locked `terra-arrange` to `3.51.0` temporarily.

## 2.52.0 - (July 31, 2023)

* Changed
  * Minor dependency version bump

## 2.51.0 - (April 12, 2023)

* Changed
  * Updated component examples.

* Changed
  * Added a11yLabel for terra-button upgrades.

## 2.50.0 - (March 29, 2023)

* Changed
  * Updated Jest snapshots.

## 2.49.0 - (March 1, 2023)

* Changed
  * Updated Jest snapshot for terra-button changes

## 2.48.0 - (February 14, 2023)

* Changed
  * Updated WDIO screenshots due to webpack-config-terra and
    terra-functional-testing upgrade.

## 2.47.0 - (December 13, 2022)

* Changed
  * Define the `UtilityButton` component as having a menu popup with `aria-haspopup`
  * Remove the `aria-describedby` relationship between the menu header and close button
  * Assign `UtilityMenuItem` component the `menuitem` aria role

## 2.46.2 - (December 6, 2022)

* Changed
  * Minor dependency version bump

## 2.46.1 - (March 15, 2022)

* Changed
  * Minor dependency version bump

## 2.46.0 - (September 20, 2021)

* Changed
  * Updated WDIO screenshots due to webpack-config-terra sass upgrade.

## 2.45.0 - (July 21, 2021)

* Changed
  * Updated `terra-icon` from `v3.1.0` to `v3.19.0`.

## 2.44.0 - (June 8, 2021)

* Changed
  * Minor dependency version bump

## 2.43.0 - (April 6, 2021)

* Changed
  * Updated Jest command

## 2.42.0 - (March 9, 2021)

* Changed
  * Updated to terra-functional-testing

## 2.41.0 - (January 5, 2021)

* Changed
  * Updated to support a peer dependency of react-intl v2-v5
  * Removed `intlShape` imports

* Fixed
  * Fixed broken links in documentation.

## 2.40.0 - (November 24, 2020)

* Changed
  * Update wdio tests to remove deprecated Terra.it helpers

## 2.39.0 - (November 10, 2020)

* Fixed
  * Fixed build failures due to the react/sort-comp rule

## 2.38.0 - (August 18, 2020)

* Added
  * Added an interaction media query to apply `hover` styles only on non-touch devices and removed hover wdio
  * Added missing themeable variables.

* Changed
  * Updated Changelog format

## 2.37.0 - (August 4, 2020)

* Changed
  * Updated Changelog format

## 2.36.0 - (July 14, 2020)

* Changed
  * updated `master` references to `main`.
  * Remove unused disable eslint directives

## 2.35.0 - (June 9, 2020)

* Changed
  * Apply themes by context and directly include packaged themes.

## 2.34.0 - (May 26, 2020)

* Changed
  * Minor dependency updates

## 2.33.0 - (April 28, 2020)

* Added
  * Added `directory` as a sub attribute to the `repository` attribute in package.json

* Changed
  * Update wdio test configuration to use root wdio config

* Removed
  * Removed "View Component Source Code" from docs in favour of source code badge

## 2.32.0 - (March 31, 2020)

* Added
  * Added clinical-lowlight-theme wdio screenshots

## 2.31.0 - (February 25, 2020)

* Changed
  * Update docs to use MDX syntax

## 2.30.0 - (February 18, 2020)

* Added
  * Added clinical-lowlight-theme theming files

## 2.29.0 - (February 4, 2020)

* Changed
  * Minor dependency version bump

## 2.28.0 - (January 28, 2020)

* Changed
  * Update copyright to include 2020

## 2.27.0 - (December 10, 2019)

* Added
  * Added reference wdio screenshots for "orion-fusion-theme".

## 2.26.0 - (November 7, 2019)

* Changed
  * Resolved lint warnings for multiple empty lines

## 2.25.0 - (October 16, 2019)

* Changed
  * Minor dependency updates

## 2.24.0 - (October 3, 2019)

* Changed
  * Minor dependency updates

## 2.23.0 - (September 26, 2019)

* Changed
  * Minor dependency updates

## 2.22.0 - (September 19, 2019)

* Changed
  * Removed `details` tag from doc-site.
  * Doc site example module import syntax modified to use package.json name resolution

* Added
  * Added en-CA translations.

## 2.21.0 - (September 6, 2019)

* Changed
  * Cleaned up imports in examples and test files

## 2.20.0 - (August 21, 2019)

* Changed
  * Updated utility button text

## 2.19.0 - (August 14, 2019)

* Changed
  * Update tests for dev-site v6
  * updated package.json test scripts

## 2.18.0 - (July 30, 2019)

* Removed
  * Removed DEPENDENCIES.md file

## 2.17.1 - (July 23, 2019)

* Changed
  * Updated DEPENDENCIES.md doc

## 2.17.0 - (July 23, 2019)

* Fixed
  * Fixed issue where on compact viewports, the virtual indicator displayed when using VoiceOver on iOS was not shifting into the application utility menu modal when it opened

## 2.16.0 - (July 16, 2019)

* Added
  * Added documentation on required peerDependencies

## 2.15.0 - (July 10, 2019)

* Changed
  * Minor dependency version bump

## 2.14.0 - (July 2, 2019)

* Changed
  * Renamed test and example SCSS files to end with `.module.scss` extension

## 2.13.0 - (June 19, 2019)

* Changed
  * Removed all inline styles from Dev-site components and implemented the same styles using external css.
  * Update wdio specs to use Terra.describeViewports

## 2.12.0 - (June 12, 2019)

* Removed
  * Removed node_modules from .npmignore

## 2.11.0 - (May 21, 2019)

* Changed
  * Update tests for terra-toolkit v5 and terra-dev-site v5 changes
  * Update tests to use `Terra.should.validateElement()`

## 2.10.0 - (May 15, 2019)

* Changed
  * Minor dependency update

## 2.9.0 - (April 24, 2019)

* Changed
  * Moved packages we use solely in doc examples and tests to devDependencies

## 2.8.0 - (April 16, 2019)

* Changed
  * Minor dependency update

## 2.7.0 - (April 2, 2019)

* Fixed
  * Fixed UL / LI accessibility violation issue on doc page.

## 2.6.0 - (March 26, 2019)

* Changed
  * Update react/react-dom peer-dependency to latest stable minor release

* Changed
  * Background color for header utility example changed to increase contrast ratio

* Removed
  * Removed peer dependency on terra-base
  * Removed baseStyles import from terra-base

## 2.5.0 - (March 20, 2019)

* Changed
  * Update Jest tests to use terra-enzyme-intl

## 2.4.0 - (March 12, 2019)

* Added
  * menurole property added to Application Utility for Utility Menu
  * Jest test added for menurole property

* Changed
  * Alt text added to fallback avatar images in doc site examples to correct Section 508 warnings

## 2.3.0 - (February 26, 2019)

* Added
  * Added en-AU translations

## 2.2.0 - (February 13, 2019)

* Fixed
  * Fix lint errors from eslint-react-plugin

## 2.1.0 - (February 5, 2019)

* Changed
  * Minor dependency update

## 2.0.0 - (January 25, 2019)

* Breaking Change
  * Updated variable names to match new naming standard
  * Added new variables for css theming
  * Removed variables for css theming
  * Updated terra-core dependencies

* Changed
  * Remove usage of componentWillReceiveProps

## 1.26.0 - (January 5, 2019)

* Added
  * Read-only property added to menu item shape
  * Jest test added for read-only property

## 1.25.0 - (January 2, 2019)

* Changed
  * Updated dev site examples to not have duplicate ids.

## 1.24.0 - (December 5, 2018)

* Changed
  * Minor dependency update

## 1.23.0 - (December 3, 2018)

* Changed
  * Wdio tests changed to use themeCombinationOfCustomProperties

* Removed
  * Removed dependency on terra-app-delegate package.

## 1.22.0 - (November 15, 2018)

* Changed
  * Minor dependency update

## 1.21.0 - (October 24, 2018)

* Changed
  * Minor dependency update

## 1.20.0 - (October 16, 2018)

* Fixed
  * Focus on first menu item

## 1.19.0 - (October 8, 2018)

* Changed
  * Remove tabindex from divider
  * Updated links in docs on supported features

## 1.18.0 - (September 25, 2018)

* Changed
  * Minor dependency bump

## 1.17.0 - (September 5, 2018)

* Changed
  * Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
  * Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

## 1.16.0 - (August 30, 2018)

* Changed
  * Formatting changes per eslint v5 update

## 1.15.0 - (August 14, 2018)

* Changed
  * Formatting changes per eslint v4 update

* Fixed
  * Lint errors regarding file path resolution

* Removed
  * Removed unused state from exmaples

## 1.14.0 - (July 26, 2018)

* Changed
  * Minor dependency updates

## 1.13.0 - (July 25, 2018)

* Added
  * Added `sv` and `sv-SE` translations

* Changed
  * Add .module extension to SCSS file(s)

## 1.12.0 - (July 10, 2018)

* Changed
  * Clean up dependencies

## 1.11.0 - (July 6, 2018)

* Changed
  * Minor dependency updates

## 1.10.0 - (July 3, 2018)

* Added
  * Change logs to documentation on terra-dev-site

## 1.9.0 - (June 29, 2018)

* Changed
  * Minor dependency updates

## 1.8.0 - (June 12, 2018)

* Changed
  * Fix sample config link

## 1.7.0 - (June 5, 2018)

* Changed
  * Minor dependency updates

## 1.6.0 - (May 30, 2018)

* Changed
  * Moved examples to src

## 1.5.0 - (May 22, 2018)

* Changed
  * Minor dependency updates

## 1.4.0 - (May 8, 2018)

* Changed
  * Update test examples to properly adjust for inline-block icon

## 1.3.0 - (April 30, 2018)

* Changed
  * Minor dependency updates
  * Do not release snapshots to npm

## 1.2.0 - (April 20, 2018)

* Changed
  * Added nl and nl-BE to supported locales

## 1.1.0 - (April 13, 2018)

* Changed
  * Minor dependency updates

## 1.0.0 - (March 23, 2018)

* Initial stable release
