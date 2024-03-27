# Changelog

## Unreleased

* Changed
  * "Skip to content" button's logic that adds and removes `tabindex` attribute for the main element was removed to fix unexpected focus behavior for users using screen readers.

## 3.40.0 - (December 18, 2023)

* Changed
  * Minor dependency version bump.

## 3.39.0 - (July 31, 2023)

* Changed
  * Minor dependency version bump

## 3.38.0 - (February 14, 2023)

* Changed
  * Updated WDIO screenshots due to webpack-config-terra and
    terra-functional-testing upgrade.

## 3.37.0 - (December 6, 2022)

* Changed
  * Moved "Skip to Content" button to render first at smallest breakpoint.

## 3.36.1 - (March 15, 2022)

* Changed
  * Minor dependency version bump

## 3.36.0 - (September 20, 2021)

* Changed
  * Updated WDIO screenshots due to webpack-config-terra sass upgrade.

## 3.35.0 - (June 8, 2021)

* Changed
  * Minor dependency version bump

## 3.34.0 - (April 6, 2021)

* Changed
  * Updated Jest command

## 3.33.0 - (March 9, 2021)

* Changed
  * Updated to terra-functional-testing

## 3.32.0 - (January 5, 2021)

* Changed
  * Updated to support a peer dependency of react-intl v2-v5
  * Removed `intlShape` import

* Fixed
  * Fixed broken links in documentation.

## 3.31.0 - (November 24, 2020)

* Changed
  * Update wdio tests to remove deprecated Terra.it helpers

## 3.30.0 - (August 4, 2020)

* Changed
  * Updated Changelog format

## 3.29.0 - (July 14, 2020)

* Changed
  * updated `master` references to `main`.

## 3.28.0 - (May 26, 2020)

* Changed
  * Apply themes by context and directly include packaged themes.

## 3.27.0 - (April 28, 2020)

* Added
  * Added `directory` as a sub attribute to the `repository` attribute in package.json

* Changed
  * Update wdio test configuration to use root wdio config

* Removed
  * Removed "View Component Source Code" from docs in favour of source code badge

## 3.26.0 - (March 31, 2020)

* Added
  * Added clinical-lowlight-theme wdio screenshots

## 3.25.0 - (February 18, 2020)

* Added
  * Added clinical-lowlight-theme theming files

## 3.24.0 - (February 4, 2020)

* Changed
  * Update docs to use MDX syntax.

## 3.23.0 - (January 28, 2020)

* Changed
  * Update copyright to include 2020

## 3.22.0 - (December 10, 2019)

* Added
  * Added reference wdio screenshots for "orion-fusion-theme".

## 3.21.0 - (November 7, 2019)

* Changed
  * Minor dependency updates

## 3.20.0 - (October 16, 2019)

* Changed
  * Minor dependency updates

## 3.19.0 - (October 3, 2019)

* Changed
  * Minor dependency updates

## 3.18.0 - (September 26, 2019)

* Changed
  * Minor dependency updates

## 3.17.0 - (September 19, 2019)

* Changed
  * Removed `details` tag from doc-site.
  * Doc site example module import syntax modified to use package.json name resolution

* Added
  * Added en-CA translations.

## 3.16.0 - (September 6, 2019)

* Changed
  * Cleaned up imports in examples and test files

## 3.15.0 - (August 14, 2019)

* Changed
  * updated package.json test scripts

## 3.14.0 - (July 30, 2019)

* Removed
  * Removed DEPENDENCIES.md file

## 3.13.0 - (July 16, 2019)

* Added
  * Added documentation for 'Skip to Content' button.
  * Added documentation on required peerDependencies

## 3.12.0 - (July 10, 2019)

* Changed
  * Minor dependency version bump

## 3.11.0 - (July 2, 2019)

* Changed
  * Renamed test and example SCSS files to end with `.module.scss` extension

## 3.10.0 - (June 19, 2019)

* Changed
  * Updated to use terra-responsive-element v5
  * Removed all inline styles from Dev-site components and implemented the same styles using external css.

## 3.9.0 - (June 12, 2019)

* Removed
  * Removed node_modules from .npmignore

* Added
  * Added ARIA landmark roles

* Changed
  * Update wdio spec to use Terra.describeViewports

## 3.8.0 - (May 21, 2019)

* Changed
  * Update tests for terra-toolkit v5 and terra-dev-site v5 changes
  * Update tests to use `Terra.should.validateElement()`

## 3.7.0 - (May 15, 2019)

* Removed
  * Removed tabindex on main element to prevent keyboard page scroll bug

## 3.6.0 - (April 24, 2019)

* Changed
  * Moved packages we use solely in doc examples and tests to devDependencies

## 3.5.0 - (April 16, 2019)

* Fixed
  * Fixed alignment of the header content.

## 3.4.0 - (March 26, 2019)

* Changed
  * Update react/react-dom peer-dependency to latest stable minor release

* Removed
  * Removed peer dependency on terra-base
  * Removed baseStyles import from terra-base

## 3.3.0 - (March 20, 2019)

* Changed
  * Update Jest tests to use terra-enzyme-intl

* Fixed
  * Fixed styling of the header content in IE11.

## 3.2.0 - (February 26, 2019)

* Added
  * Added en-AU translations.

## 3.1.0 - (February 5, 2019)

* Changed
  * Minor dependency update

## 3.0.0 - (January 25, 2019)

* Breaking Change
  * Updated variable names to match new naming standard
  * Added new variables for css theming
  * Updated terra-core dependencies

## 2.24.0 - (January 5, 2019)

* Changed
  * Minor dependency update

## 2.23.0 - (January 2, 2019)

* Changed
  * Minor dependency update

## 2.22.0 - (December 5, 2018)

* Changed
  * Minor dependency update

## 2.21.0 - (December 3, 2018)

* Changed
  * Minor dependency bump

## 2.20.0 - (November 15, 2018)

* Changed
  * Minor dependency bump

## 2.19.0 - (October 24, 2018)

* Changed
  * Import `injectIntl` and `intlShape` from react-intl instead of terra-base

## 2.18.0 - (October 16, 2018)

* Added
  * Added skip to content button

## 2.17.0 - (October 8, 2018)

* Changed
  * Updated links in docs on supported features

## 2.16.0 - (September 25, 2018)

* Changed
  * Minor dependency bump

## 2.15.0 - (September 5, 2018)

* Changed
  * Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
  * Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

## 2.14.0 - (August 30, 2018)

* Changed
  * Formatting changes per eslint v5 update

## 2.13.0 - (August 14, 2018)

* Changed
  * Formatting changes per eslint v4 update

* Fixed
  * Lint errors regarding file path resolution

## 2.12.0 - (July 26, 2018)

* Changed
  * Minor dependency updates

## 2.11.0 - (July 25, 2018)

* Changed
  * Add .module extension to SCSS file(s)

## 2.10.0 - (July 10, 2018)

* Changed
  * Clean up dependencies

## 2.9.0 - (July 6, 2018)

* Changed
  * Minor dependency updates

## 2.8.0 - (July 3, 2018)

* Added
  * Change logs to documentation on terra-dev-site

## 2.7.0 - (June 12, 2018)

* Changed
  * Minor dependency updates

## 2.6.0 - (June 12, 2018)

* Changed
  * Minor dependency updates

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

## 2.2.0 - (March 23, 2018)

* Changed
  * Updated screenshots

* Added
  * Css for the application header layout logo's min width

## 2.1.0 - (March 6, 2018)

* Added
  * Css rule to hide overflow in the case of large content.
  * Added npmrc file with package-lock set to false.

## 2.0.0 - (February 21, 2018)

* Changed
  * Updated to use React 16

## 1.2.0 - (February 15, 2018)

* Changed
  * Minor dependency updates

## 1.1.0 - (January 23, 2018)

* Changed
  * Minor dependency updates

## 1.0.0 - (January 8, 2018)

Initial stable release
