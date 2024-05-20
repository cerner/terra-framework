# Changelog

## Unreleased

## 4.41.1 - (May 20, 2024)

* Fixed
  * Updated `terra-icon` to `^3.61.0`.

## 4.41.0 - (May 20, 2024)

* Changed
  * Minor dependency version bump.

## 4.40.0 - (March 29, 2024)

* Changed
  * `tabindex` attribute with value `-1` was added to the main element (`data-terra-layout-main`) to fix unexpected focus behavior for users using screen readers.

## 4.39.0 - (December 18, 2023)

* Changed
  * Minor dependency version bump.

## 4.38.0 - (July 31, 2023)

* Changed
  * Minor dependency version bump

## 4.37.0 - (July 19, 2023)

* Changed
  * Minor dependency version bump

## 4.36.0 - (February 14, 2023)

* Changed
  * Updated WDIO screenshots due to webpack-config-terra and
    terra-functional-testing upgrade.

## 4.35.0 - (March 15, 2022)

* Added
  * Migrate docs to terra-framework-docs

## 4.34.0 - (September 20, 2021)

* Changed
  * Updated WDIO screenshots due to webpack-config-terra sass upgrade.

## 4.33.0 - (July 21, 2021)

* Changed
  * Updated `terra-icon` from `v3.1.0` to `v3.19.0`.

## 4.32.0 - (June 8, 2021)

* Changed
  * Minor dependency version bump

## 4.31.0 - (April 6, 2021)

* Changed
  * Updated Jest command

## 4.30.0 - (March 9, 2021)

* Changed
  * Updated to terra-functional-testing

## 4.29.0 - (February 2, 2021)

* Fixed
  * Removed re-declaration of $ ignore

## 4.28.0 - (January 5, 2021)

* Changed
  * Update wdio tests to remove deprecated Terra.it helpers

* Fixed
  * Fixed broken links in documentation.

## 4.27.0 - (November 10, 2020)

* Fixed
  * Fixed build failures due to the react/sort-comp rule

## 4.26.0 - (August 4, 2020)

* Changed
  * Updated Changelog format

## 4.25.0 - (July 14, 2020)

* Changed
  * updated `master` references to `main`.
  * Minor file changes to comply with eslint rules

## 4.24.0 - (June 2, 2020)

* Changed
  * Apply themes by context and directly include packaged themes.

## 4.23.0 - (April 28, 2020)

* Added
  * Added `directory` as a sub attribute to the `repository` attribute in package.json

* Changed
  * Update wdio test configuration to use root wdio config

* Removed
  * Removed "View Component Source Code" from docs in favour of source code badge

## 4.22.0 - (March 31, 2020)

* Added
  * Added clinical-lowlight-theme wdio screenshots

## 4.21.0 - (March 3, 2020)

* Changed
  * Update docs to use MDX syntax.

## 4.20.0 - (February 18, 2020)

* Added
  * Added clinical-lowlight-theme theming files

## 4.19.0 - (January 28, 2020)

* Changed
  * Update copyright to include 2020

## 4.18.0 - (January 7, 2020)

* Added
  * Added new WDIO screenshots

## 4.17.0 - (December 10, 2019)

* Added
  * Added reference wdio screenshots for "orion-fusion-theme".

## 4.16.0 - (November 7, 2019)

* Changed
  * Minor dependency updates

## 4.15.0 - (October 16, 2019)

* Changed
  * Minor dependency updates

## 4.14.0 - (October 3, 2019)

* Changed
  * Minor dependency updates

## 4.13.0 - (September 26, 2019)

* Changed
  * Minor dependency updates

## 4.12.0 - (September 19, 2019)

* Changed
  * Removed `details` tag from doc-site.
  * Doc site example module import syntax modified to use package.json name resolution

## 4.11.0 - (September 6, 2019)

* Changed
  * Cleaned up imports in examples and test files

## 4.10.0 - (August 21, 2019)

* Changed
  * Replaced Object.assign syntax with Object spread syntax

## 4.9.0 - (August 14, 2019)

* Changed
  * updated package.json test scripts

## 4.8.0 - (July 30, 2019)

* Removed
  * Removed DEPENDENCIES.md file

## 4.7.0 - (July 16, 2019)

* Added
  * Added documentation on required peerDependencies

## 4.6.0 - (July 10, 2019)

* Changed
  * Minor dependency version bump

## 4.5.0 - (July 2, 2019)

* Changed
  * Renamed test and example SCSS files to end with `.module.scss` extension

## 4.4.0 - (June 19, 2019)

* Changed
  * Removed all inline styles from Dev-site components and implemented the same styles using external css.
  * Update wdio specs to use Terra.describeViewports

## 4.3.0 - (June 12, 2019)

* Added
  * Added ARIA landmark roles

* Changed
  * Update tests for terra-toolkit v5 and terra-dev-site v5 changes

* Removed
  * Removed node_modules from .npmignore

## 4.2.0 - (May 21, 2019)

* Added
  * Added hard-coded breakpoint values to LayoutUtils.js

* Removed
  * Removed dependency on terra-responsive-element

## 4.1.0 - (May 15, 2019)

* Changed
  * Minor dependency update

## 4.0.0 - (May 13, 2019)

* Breaking Change
  * Update react-router-dom peerDependency to latest stable major release
  * Updated tabbable dependency to ^4.0.0

* Changed
  * Update skip to content link handling to only temporary set tabindex to prevent keyboard page scroll bug

## 3.4.0 - (April 24, 2019)

* Changed
  * Moved packages we use solely in doc examples and tests to devDependencies

## 3.3.0 - (April 2, 2019)

* Fixed
  * Updated snapshots to account for Overlay's `rootProp` default value from `[data-terra-base]` to `#root`

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
  * Added new variables for css theming
  * Removed variables for css theming
  * Updated terra-core dependencies

* Changed
  * Remove use of componentWillReceiveProps

## 2.23.0 - (January 5, 2019)

* Changed
  * Minor dependency update

## 2.22.0 - (January 2, 2019)

* Added
  * Shim for `<main>` tag IE compatibility added to `_LayoutSlidePanel`

## 2.21.0 - (December 5, 2018)

* Changed
  * Minor dependency update

## 2.20.0 - (December 3, 2018)

* Changed
  * Minor dependency bump

## 2.19.0 - (November 15, 2018)

* Changed
  * Added focus management to shift between layout panel and toggle button when it is opened and closed
  * Regenerated jest snapshots

* Changed
  * Updated snapshots due to dependency updates

## 2.18.0 - (October 16, 2018)

* Changed
  * Added id of terra-main to the main node

## 2.17.0 - (October 8, 2018)

* Changed
  * Updated links in docs on supported features

## 2.16.0 - (September 25, 2018)

* Changed
  * Removed terra-base duplicate from dependencies (kept instance in peerDependencies)

## 2.15.0 - (September 11, 2018)

* Changed
  * Made content area a main node

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

## 2.11.0 - (July 26, 2018)

* Changed
  * Updated to use terra-responsive-element v3

## 2.10.0 - (July 25, 2018)

* Changed
  * Add .module extension to SCSS file(s)

## 2.9.0 - (July 3, 2018)

* Added
  * Change logs to documentation on terra-dev-site

## 2.8.0 - (June 29, 2018)

* Changed
  * Minor dependency updates

## 2.7.0 - (June 12, 2018)

* Changed
  * Minor dependency updates

## 2.6.0 - (May 30, 2018)

* Changed
  * Moved examples to src

## 2.5.0 - (May 22, 2018)

* Changed
  * Minor dependency updates

## 2.4.0 - (April 30, 2018)

* Changed
  * Minor dependency updates
  * Do not release snapshots to npm

## 2.3.0 - (April 13, 2018)

* Changed
  * Minor dependency updates

## 2.2.0 - (March 23, 2018)

* Changed
  * Returned promises from toggleMenu/togglePin
  * Updated menu overlay styles.

## 2.1.0 - (March 6, 2018)

* Changed
  * Remove the hover functionality from the layout panel at the medium breakpoint.

* Added
  * Added npmrc file with package-lock set to false.

## 2.0.0 - (February 21, 2018)

* Changed
  * Updated to use React 16

## 1.2.0 - (February 15, 2018)

* Fixed
  * Nightwatch tests raw route now sets the size of the layout.
  * Content is no longer visible when the slide panel is hidden.

## 1.1.0 - (January 23, 2018)

* Added
  * Debounce to resize of layout
  * Use display none on the hover section when hidden.

* Changed
  * Updating tests to point to new terra-framework-site location.

## 1.0.0 - (November 17, 2017)

Initial stable release
