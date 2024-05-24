# Changelog

## Unreleased

## 5.44.0 - (May 22, 2024)

* Changed
  * Minor dependency version bump.

## 5.43.0 - (May 20, 2024)

* Changed
  * Minor dependency version bump.

## 5.42.0 - (March 25, 2024)

* Changed
  * Allow hookshot position to be fixed

## 5.41.0 - (July 31, 2023)

* Changed
  * Minor dependency version bump

## 5.40.0 - (February 14, 2023)

* Changed
  * Updated WDIO screenshots due to webpack-config-terra and
    terra-functional-testing upgrade.

## 5.39.0 - (March 15, 2022)

* Added
  * Migrate docs to terra-framework-docs

## 5.38.0 - (September 20, 2021)

* Changed
  * Updated WDIO screenshots due to webpack-config-terra sass upgrade.

## 5.37.0 - (July 21, 2021)

* Changed
  * Updated `terra-form-input` from `v3.7.0` to `v4.4.0`.

## 5.36.0 - (June 8, 2021)

* Changed
  * Updated `keycode-js` from `v2.0.1` to `v3.1.0`.

## 5.35.0 - (April 6, 2021)

* Changed
  * Updated Jest command

## 5.34.0 - (March 9, 2021)

* Changed
  * Updated to use terra-functional-testing

## 5.33.0 - (January 26, 2021)

* Fixed
  * Fixed error thrown on resizing the popup due to incorrect variables name.


## 5.32.0 - (December 8, 2020)

* Changed
  * Update wdio tests to remove deprecated Terra.it helpers

## 5.31.0 - (November 10, 2020)

* Fixed
  * Fixed build failures due to the react/sort-comp rule

## 5.30.0 - (August 11, 2020)

* Changed
  * Updated `terra-form-input` from ^v2.3.0 to ^v3.7.0

## 5.29.0 - (August 4, 2020)

* Changed
  * Updated Changelog format

## 5.28.0 - (July 14, 2020)

* Changed
  * Minor file changes to comply with eslint rules
  * Replace some empty text with aria-label to comply with eslint

## 5.27.0 - (April 28, 2020)

* Added
  * Added `directory` as a sub attribute to the `repository` attribute in package.json

* Changed
  * Update wdio test configuration to use root wdio config

* Removed
  * Removed "View Component Source Code" from docs in favour of source code badge

## 5.26.0 - (March 31, 2020)

* Added
  * Added clinical-lowlight-theme wdio screenshots

## 5.25.0 - (February 25, 2020)

* Changed
  * Update docs to use mdx syntax.

## 5.24.0 - (February 18, 2020)

* Added
  * Added generated-themes to .npmignore

## 5.23.0 - (January 28, 2020)

* Changed
  * Update copyright to include 2020

## 5.22.0 - (December 10, 2019)

* Added
  * Added reference wdio screenshots for "orion-fusion-theme".

## 5.21.0 - (November 7, 2019)

* Changed
  * Resolved lint warnings for multiple empty lines

## 5.20.0 - (October 16, 2019)

* Changed
  * Minor dependency updates

## 5.19.0 - (October 3, 2019)

* Changed
  * Minor dependency updates

## 5.18.0 - (September 26, 2019)

* Changed
  * Minor dependency updates

## 5.17.0 - (September 19, 2019)

* Changed
  * Removed `details` tag from doc-site.
  * Doc site example module import syntax modified to use package.json name resolution

## 5.16.0 - (September 6, 2019)

* Changed
  * Cleaned up imports in examples and test files
  * Updated `keycode-js` from `v1.0.4` to `v2.0.1`

## 5.15.0 - (August 21, 2019)

* Changed
  * Cleaned up lint in test files

## 5.14.0 - (August 14, 2019)

* Changed
  * updated package.json test scripts

* Removed
  * Removed themeable variable for z-index

## 5.13.0 - (July 30, 2019)

* Removed
  * Removed DEPENDENCIES.md file

## 5.12.0 - (July 16, 2019)

* Added
  * Added documentation on required peerDependencies

## 5.11.0 - (July 10, 2019)

* Changed
  * Minor dependency version bump

## 5.10.0 - (July 2, 2019)

* Changed
  * Removed all inline styles from Dev-site components and implemented the same styles using external css.
  * Renamed test and example SCSS files to end with `.module.scss` extension

## 5.9.0 - (June 19, 2019)

* Changed
  * Minor dependency version bump

## 5.8.0 - (June 12, 2019)

* Removed
  * Removed node_modules from .npmignore

* Fixed
  * Replaced classList shim with full polyfill to support d3

* Changed
  * Update tests for terra-toolkit v5 and terra-dev-site v5 changes
  * Update wdio specs to use Terra.describeViewports

## 5.7.0 - (April 24, 2019)

* Changed
  * Moved packages we use solely in doc examples and tests to devDependencies

## 5.6.0 - (April 16, 2019)

* Changed
  * Updated the terra-dev-site documentation examples to use native select and Removed Dependency on terra-form-select.

## 5.5.0 - (March 26, 2019)

* Changed
  * Update react/react-dom peer-dependency to latest stable minor release

* Removed
  * Removed peer dependency on terra-base
  * Removed baseStyles import from terra-base

## 5.4.0 - (March 12, 2019)

* Changed
  * Replaced local keyCode values with keycode-js npm package

## 5.3.0 - (March 5, 2019)

* Changed
  * Disable outClickOutside if no callback function is passed.

## 5.2.0 - (February 26, 2019)

* Fixed
  * Updated test spec to scroll to bottom of test page before interacting with elements.

## 5.1.0 - (February 5, 2019)

* Removed
  * Vestigial fixed styling removed and default to absolute.

## 5.0.0 - (January 25, 2019)

* Breaking Change
  * Updated terra-core dependencies

* Changed
  * Removed usage of componentWillReceiveProps

## 4.17.0 - (January 5, 2019)

* Changed
  * Minor dependency update

## 4.16.0 - (January 2, 2019)

* Changed
  * Updated dev site examples to not have duplicate ids.
  * Updated dev site examples to use terra-form-input and terra-form-select to improve accessability.

## 4.15.0 - (December 5, 2018)

* Changed
  * Minor dependency update

## 4.14.0 - (December 3, 2018)

* Fixed
  * Lint error

## 4.13.1 - (November 15, 2018)

* Changed
  * Added existence check for SVGElement, fixes issue with older version of jsdom

## 4.13.0 - (November 15, 2018)

* Changed
  * Update react-onclickoutside to ^6.7.1

## 4.12.0 - (September 25, 2018)

* Fixed
  * Broken coordiantes example for setState.

## 4.11.0 - (September 5, 2018)

* Changed
  * Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
  * Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

## 4.10.0 - (August 30, 2018)

* Changed
  * Formatting changes per eslint v5 update

## 4.9.0 - (August 13, 2018)

* Changed
  * Minor dependency updates

## 4.8.0 - (July 25, 2018)

* Changed
  * Add .module extension to SCSS file(s)

## 4.7.0 - (July 10, 2018)

* Changed
  * Clean up dependencies

## 4.6.0 - (July 3, 2018)

* Changed
  * Minor dependency updates

## 4.5.0 - (June 29, 2018)

* Changed
  * Introduce targetCoordinates to hookshot functionality.
* Added
  * Change logs to documentation on terra-dev-site

* Fixed
  * Corrected the 'resize observer loop limit reached' error with animation frames.

## 4.4.0 - (June 12, 2018)

* Changed
  * Minor dependency updates

## 4.3.0 - (May 30, 2018)

* Changed
  * Moved examples to src

## 4.2.0 - (May 22, 2018)

* Changed
  * Minor dependency updates

## 4.1.0 - (April 30, 2018)

* Changed
  * Minor dependency updates
  * Do not release snapshots to npm

## 4.0.0 - (April 20, 2018)

* Breaking Change
  * Removed the call to preventDefault in onOutsideClick

## 3.1.0 - (April 13, 2018)

* Changed
  * Minor dependency updates

## 3.0.0 - (April 10, 2018)

* Breaking Change
  * Attachment behavior `none` will no longer reposition content relative to a bounding rect. Content will remain statically positioned to the specified attachment target. Update the attachment behavior of `none` to `push` to regain previous bounded repositioning.

## 2.3.0 - (April 3, 2018)

* Changed
  * Moved terra-hookshot to terra-framework repo.

## 2.2.0 - (March 6, 2018)

* Removed
  * Removed props-table script from package.json

## 2.1.0 - (February 26, 2018)

* Changed
  * Minor version bump

## 2.0.1 - (February 13, 2018)

* Changed
  * Updated peerDependencies

## 2.0.0 - (February 12, 2018)

* Changed
  * Updated to use React 16

## 1.8.0 - (February 1, 2018)

* Changed
  * Minor version bump

## 1.7.0 - (January 18, 2018)

* Changed
  * Minor version bump

## 1.6.0 - (January 5, 2018)

* Changed
  * Minor version bump

## 1.5.0 - (December 5, 2017)

* Changed
  * Add preventDefault() to onOutsideClick

## 1.4.0 - (November 28, 2017)

* Changed
  * Minor version bump

## 1.3.0 - (November 16, 2017)

* Changed
  * Minor version bump

## 1.2.0 - (October 31, 2017)

* Fixed
  * Height and Width rounding

* Added
  * Content Resize callback

## 1.1.0 - (October 24, 2017)

* Fixed
  * Mobile zoom on safari
  * Half px value causing blurriness
  * Disable Listener dependency on target

## 1.0.0 - (October 12, 2017)

Initial stable release
