# Changelog

## Unreleased

* Added
  * Added `terra-theme-properties` as a dependency.

## 4.14.0 - (December 18, 2023)

* Added
  * Added support for theme density.

## 4.13.0 - (July 31, 2023)

* Changed
  * Minor dependency version bump

## 4.12.0 - (February 14, 2023)

* Changed
  * Updated WDIO screenshots due to webpack-config-terra and
    terra-functional-testing upgrade.

## 4.11.0 - (March 15, 2022)

  * Added
    * Migrate docs to terra-framework-docs

## 4.10.0 - (September 20, 2021)

* Changed
  * Updated WDIO screenshots due to webpack-config-terra sass upgrade.
  * Updated fusion wdio tests to align with other tests

## 4.9.0 - (June 8, 2021)

* Changed
  * Minor dependency version bump

## 4.8.0 - (April 6, 2021)

* Changed
  * Updated Jest command

## 4.7.0 - (March 9, 2021)

* Changed
  * Updated to terra-functional-testing.

## 4.6.0 - (December 8, 2020)

* Changed
  * Update wdio tests to remove deprecated Terra.it helpers

## 4.5.0 - (August 27, 2020)

* Fixed
  * Update wdio screenshots for fusion theme that depended on terra-dev-site theme values that are now scoped.

## 4.4.0 - (August 4, 2020)

* Changed
  * Updated Changelog format

## 4.3.0 - (July 14, 2020)

* Changed
  * Minor file changes to comply with eslint config

## 4.2.0 - (April 28, 2020)

* Added
  * Added `directory` as a sub attribute to the `repository` attribute in package.json

* Changed
  * Update wdio test configuration to use root wdio config

* Removed
  * Removed "View Component Source Code" from docs in favour of source code badge

## 4.1.0 - (March 31, 2020)

* Added
  * Added clinical-lowlight-theme wdio screenshots

## 4.0.0 - (March 17, 2020)

* Breaking Change
  * Removed `isGlobalTheme` prop
  * Changed default behavior to always apply theme on the 'html' element instead of the DIV element wrapping the children
  * Converted "Theme Provider" into a functional component

## 3.20.0 - (March 3, 2020)

* Changed
  * Update docs to use mdx syntax.

## 3.19.0 - (February 18, 2020)

* Added
  * Added generated-themes to .npmignore

## 3.18.0 - (January 28, 2020)

* Changed
  * Update copyright to include 2020

## 3.17.0 - (December 10, 2019)

* Added
  * Added reference wdio screenshots for "orion-fusion-theme".

## 3.16.0 - (November 7, 2019)

* Changed
  * Resolved lint warnings for multiple empty lines

## 3.15.0 - (October 16, 2019)

* Changed
  * Minor dependency updates

## 3.14.0 - (October 3, 2019)

* Changed
  * Minor dependency updates

## 3.13.0 - (September 26, 2019)

* Changed
  * Minor dependency updates

## 3.12.0 - (September 19, 2019)

* Changed
  * Removed `details` tag from doc-site.
  * Doc site example module import syntax modified to use package.json name resolution

## 3.11.0 - (September 6, 2019)

* Changed
  * Cleaned up imports in examples and test files

## 3.10.0 - (August 14, 2019)

* Changed
  * updated package.json test scripts

## 3.9.0 - (July 30, 2019)

* Removed
  * Removed DEPENDENCIES.md file

## 3.8.0 - (July 16, 2019)

* Added
  * Added documentation on required peerDependencies

## 3.7.0 - (July 10, 2019)

* Changed
  * Fixed test route.

## 3.6.0 - (July 2, 2019)

* Changed
  * Renamed test and example SCSS files to end with `.module.scss` extension

## 3.5.0 - (June 19, 2019)

* Changed
  * Minor dependency version bump

## 3.4.0 - (June 12, 2019)

* Removed
  * Removed node_modules from .npmignore

* Changed
  * Removed all inline styles and implemented the same styles using external css.

* Changed
  * Update tests for terra-toolkit v5 and terra-dev-site v5 changes
  * Update wdio spec to use Terra.describeViewports

## 3.3.0 - (April 24, 2019)

* Changed
  * Moved packages we use solely in doc examples and tests to devDependencies

## 3.2.0 - (March 26, 2019)

* Changed
  * Update react/react-dom peer-dependency to latest stable minor release

* Removed
  * Removed peer dependency on terra-base
  * Removed baseStyles import from terra-base

## 3.1.0 - (February 5, 2019)

* Changed
  * Minor dependency update

## 3.0.0 - (January 25, 2019)

* Breaking Change
  * Updated variable names to match new naming standard
  * Updated terra-core dependencies

* Changed
  * Remove use of componentWillReceiveProps

## 2.21.0 - (January 5, 2019)

* Changed
  * Minor dependency update

## 2.20.0 - (January 2, 2019)

* Changed
  * Updated dev site to be more accessible.

## 2.19.0 - (December 5, 2018)

* Changed
  * Minor dependency update

## 2.18.0 - (December 3, 2018)

* Changed
  * Minor dependency bump

## 2.17.0 - (November 15, 2018)

* Changed
  * Minor dependency update

## 2.16.0 - (October 30, 2018)

* Changed
  * Update mixin import to be more explicit

## 2.15.0 - (September 25, 2018)

* Changed
  * Minor dependency bump

## 2.14.0 - (September 5, 2018)

* Changed
  * Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
  * Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

## 2.13.0 - (August 30, 2018)

* Changed
  * Formatting changes per eslint v5 update

## 2.12.0 - (August 13, 2018)

* Changed
  * Formatting changes per eslint v4 update

* Fixed
  * Lint errors regarding file path resolution

## 2.11.0 - (July 25, 2018)

* Changed
  * Add .module extension to SCSS file(s)

## 2.10.0 - (July 10, 2018)

* Changed
  * Clean up dependencies

## 2.9.0 - (July 3, 2018)

* Added
  * Change logs to documentation on terra-dev-site

## 2.8.0 - (June 29, 2018)

* Changed
  * Minor dependency updates

## 2.7.0 - (June 19, 2018)

* Added
  * Custom classNames are able to be added

## 2.6.0 - (June 12, 2018)

* Fixed
  * theme provider provides it's own mock theme for testing and the example.

## 2.5.0 - (May 30, 2018)

* Changed
  * Moved examples to src

## 2.4.0 - (May 22, 2018)

* Changed
  * Minor dependency updates

## 2.3.0 - (April 30, 2018)

* Changed
  * Minor dependency updates
  * Do not release snapshots to npm

## 2.2.0 - (April 13, 2018)

* Changed
  * Minor dependency updates

## 2.1.0 - (March 6, 2018)

* Changed
  * Minor dependency updates

## 2.0.0 - (February 21, 2018)

* Changed
  * Updated to use React 16

## 1.12.0 - (February 15, 2018)

* Changed
  * Minor version bump

## 1.11.0 - (January 23, 2018)

  * First release in new repository

## 1.10.0 - (January 18, 2018)

* Changed
  * Minor version bump

## 1.9.0 - (January 5, 2018)

* Changed
  * Minor version bump

## 1.8.0 - (November 28, 2017)

* Changed
  * Minor version bump

## 1.7.0 - (November 16, 2017)

* Changed
  * Minor version bump

## 1.6.0 - (October 6, 2017)

* Changed
  * Minor version bump

## 1.5.0 - (September 26, 2017)

* Added
  * Added isGlobalTheme prop to apply theme to root DOM node

## 1.4.0 - (September 19, 2017)

* Changed
  * Minor version bump

## 1.3.0 - (September 12, 2017)

* Changed
  * Minor version bump

## 1.2.0 - (September 7, 2017)

* Changed
  * Minor version bump

## 1.1.0 - (September 5, 2017)

* Changed
  * Minor version bump

## 1.0.0 - (August 31, 2017)

Initial stable release
