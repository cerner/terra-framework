# Changelog

## Unreleased

## 3.13.1 - (May 22, 2024)

* Changed
  * Minor dependency version bump.

## 3.13.0 - (May 20, 2024)

* Changed
  * Minor dependency version bump.

## 3.12.0 - (December 18, 2023)

* Changed
  * Minor dependency version bump.

## 3.11.0 - (July 31, 2023)

* Changed
  * Minor dependency version bump

## 3.10.0 - (February 14, 2023)

* Changed
  * Updated WDIO screenshots due to webpack-config-terra and
    terra-functional-testing upgrade.

## 3.9.1 - (March 15, 2022)

* Changed
  * Minor dependency version bump

## 3.9.0 - (October 12, 2021)

* Changed
  * Migrated doc to terra-framework-docs.

## 3.8.0 - (September 20, 2021)

* Changed
  * Updated WDIO screenshots due to webpack-config-terra sass upgrade.
  * Updated WDIO snapshots due to terra-functional-testing v2 upgrade.

## 3.7.0 - (June 8, 2021)

* Changed
  * Minor dependency version bump

## 3.6.0 - (April 6, 2021)

* Changed
  * Updated Jest command

## 3.5.0 - (March 9, 2021)

* Changed
  * Updated to terra-functional-testing

## 3.4.0 - (January 5, 2021)

* Fixed
  * Fixed broken links in documentation.

## 3.3.0 - (November 24, 2020)

* Changed
  * Update wdio tests to remove deprecated Terra.it helpers

## 3.2.0 - (August 18, 2020)

* Added
  * Added an interaction media query to apply `hover` styles only on non-touch devices.

* Changed
  * Updated Changelog format

## 3.1.0 - (August 4, 2020)

* Changed
  * Updated Changelog format

## 3.0.0 - (July 14, 2020)

* Breaking Change
  * `links` prop has been deprecated, will resolve to `sections`.
  * Updated UpgradeGuide.

* Changed
  * updated `master` references to `main`.

## 2.24.0 - (May 26, 2020)

* Changed
  * Apply themes by context and directly include packaged themes.

## 2.23.0 - (April 28, 2020)

* Added
  * Added `directory` as a sub attribute to the `repository` attribute in package.json

* Changed
  * Update wdio test configuration to use root wdio config

* Removed
  * Removed "View Component Source Code" from docs in favour of source code badge

## 2.22.0 - (March 31, 2020)

* Added
  * Added clinical-lowlight-theme wdio screenshots

## 2.21.0 - (February 18, 2020)

* Added
  * Added generated-themes to .npmignore

* Changed
  * Update docs to use MDX syntax

## 2.20.0 - (January 28, 2020)

* Changed
  * Update copyright to include 2020

## 2.19.0 - (December 10, 2019)

* Added
  * Added orion-fusion-theme and generated the respective reference wdio screenshots.

## 2.18.0 - (November 7, 2019)

* Changed
  * Minor dependency updates

## 2.17.0 - (October 16, 2019)

* Changed
  * Minor dependency updates

## 2.16.0 - (October 3, 2019)

* Changed
  * Minor dependency updates

## 2.15.0 - (September 26, 2019)

* Changed
  * Minor dependency updates

## 2.14.0 - (September 19, 2019)

* Changed
  * Removed `details` tag from doc-site.
  * Doc site example module import syntax modified to use package.json name resolution

## 2.13.0 - (September 6, 2019)

* Changed
  * Cleaned up imports in examples and test files

## 2.12.0 - (August 14, 2019)

* Changed
  * updated package.json test scripts

## 2.11.0 - (July 30, 2019)

* Removed
  * Removed DEPENDENCIES.md file

## 2.10.0 - (July 16, 2019)

* Added
  * Added documentation on required peerDependencies

## 2.9.0 - (July 10, 2019)

* Changed
  * Minor dependency version bump

## 2.8.0 - (July 2, 2019)

* Changed
  * Renamed test and example SCSS files to end with `.module.scss` extension

## 2.7.0 - (June 19, 2019)

* Changed
  * Minor dependency version bump

## 2.6.0 - (June 12, 2019)

* Removed
  * Removed node_modules from .npmignore

* Changed
  * Removed all inline styles from Dev-site components and implemented the same styles using external css.
  * Update tests for terra-toolkit v5 and terra-dev-site v5 changes
  * Update wdio spec to use Terra.describeViewports

## 2.5.0 - (April 24, 2019)

* Changed
  * Moved packages we use solely in doc examples and tests to devDependencies

## 2.4.0 - (March 26, 2019)

* Changed
  * Update react/react-dom peer-dependency to latest stable minor release

* Removed
  * Removed peer dependency on terra-base
  * Removed baseStyles import from terra-base

## 2.3.0 - (March 20, 2019)

* Changed
  * Updated brand footer examples to use styled text to correct Section 508 warning

## 2.2.0 - (February 13, 2019)

* Changed
  * Added discernible text to footer Terra UI link

## 2.1.0 - (February 5, 2019)

* Changed
  * Minor dependency update

## 2.0.0 - (January 25, 2019)

* Breaking Change
  * Updated variable names to match new naming standard
  * Updated terra-core dependencies

## 1.16.0 - (January 5, 2019)

* Changed
  * Minor dependency update

## 1.15.0 - (January 2, 2019)

* Changed
  * Minor dependency update

## 1.14.0 - (December 5, 2018)

* Changed
  * Minor dependency update

## 1.13.0 - (December 3, 2018)

* Changed
  * Minor dependency bump

## 1.12.0 - (November 15, 2018)

* Changed
  * Minor dependency update
  * Updated component readme feature links
  * Moved link separator out of CSS to hide from screen readers

## 1.11.0 - (September 25, 2018)

* Changed
  * Improved brand footer accessibility.

## 1.10.0 - (September 5, 2018)

* Changed
  * Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
  * Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

## 1.9.0 - (August 30, 2018)

* Changed
  * Formatting changes per eslint v5 update

## 1.8.0 - (August 14, 2018)

* Changed
  * Formatting changes per eslint v4 update

* Fixed
  * Lint errors regarding file path resolution

## 1.7.0 - (July 25, 2018)

* Added
  * Section headers can be put in the nav bar
  * The navigation bar can be displayed vertically

* Changed
  * Add .module extension to SCSS file(s)

## 1.6.0 - (July 10, 2018)

* Changed
  * Clean up dependencies

## 1.5.0 - (July 3, 2018)

* Added
  * Change logs to documentation on terra-dev-site

## 1.4.0 - (June 29, 2018)

* Changed
  * Minor dependency updates

## 1.3.0 - (June 12, 2018)

* Changed
  * Minor dependency updates

## 1.2.0 - (May 30, 2018)

* Changed
  * Moved examples to src

## 1.1.0 - (May 22, 2018)

* Changed
  * Minor dependency updates

## 1.0.0 - (May 8, 2018)

* Initial stable release
