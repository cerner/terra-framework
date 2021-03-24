# Changelog

## Unreleased

* Changed
  * Updated Jest command

* Added
  * Added ability to generate id for tab items through `<ApplicationNavigation>`

## 6.51.0 - (March 9, 2021)

* Changed
  * Updated to use terra-functional-testing

## 6.50.0 - (February 9, 2021)

* Changed
  * Minor dependency version bump

## 6.49.0 - (January 26, 2021)

* Changed
  * Minor dependency version bump

## 6.48.0 - (January 5, 2021)

* Fixed
  * Fixed broken links in documentation.

## 6.47.0 - (December 8, 2020)

* Changed
  * Updated to support a peer dependency of react-intl v2-v5
  * Removed `intlShape` import
  * Update wdio tests to remove deprecated Terra.it helpers

## 6.46.0 - (November 24, 2020)

* Changed
  * Minor dependency version bump

## 6.45.0 - (November 10, 2020)

* Fixed
  * Fixed build failures due to the react/sort-comp rule

## 6.44.0 - (October 20, 2020)

* Changed
  * Updated snapshots with right-padding fixes in terra-menu

## 6.43.0 - (October 13, 2020)

* Changed
  * Minor dependency version bump

## 6.42.0 - (August 18, 2020)

* Added
  * Added an interaction media query to apply `hover` styles only on non-touch devices and removed wdio tests for hover.

* Changed
  * Updated Changelog format

## 6.41.0 - (August 11, 2020)

* Changed
  * Minor dependency version bump

## 6.40.0 - (August 4, 2020)

* Changed
  * Updated Changelog format
  * Update jest due to change in theme

## 6.39.0 - (July 14, 2020)

* Changed
  * Minor dependency version bump\

## 6.38.0 - (June 16, 2020)

* Changed
  * Update jest snapshot due to terra-icon theme context changes.

## 6.37.0 - (June 9, 2020)

* Changed
  * Minor dependency version bump

## 6.36.0 - (June 2, 2020)

* Changed
  * Minor dependency version bump

## 6.35.0 - (May 26, 2020)

* Changed
  * Fixed lowlight and clinical theme interference issue.

## 6.34.0 - (May 19, 2020)

* Changed
  * Minor dependency version bump

## 6.33.0 - (April 28, 2020)

* Added
  * Added `directory` as a sub attribute to the `repository` attribute in package.json

* Changed
  * Update wdio test configuration to use root wdio config

* Removed
  * Removed "View Component Source Code" from docs in favour of source code badge

## 6.32.0 - (April 6, 2020)

* Changed
  * Minor dependency version bump

## 6.31.0 - (March 31, 2020)

* Added
  * Added clinical-lowlight-theme wdio screenshots

## 6.30.0 - (March 10, 2020)

* Changed
  * Update docs to use MDX syntax

## 6.29.0 - (March 3, 2020)

* Changed
  * Minor dependency version bump

## 6.28.0 - (February 25, 2020)

* Changed
  * Minor dependency version bump

## 6.27.0 - (February 18, 2020)

* Added
  * Added clinical-lowlight-theme theming files

## 6.26.0 - (February 4, 2020)

* Changed
  * Minor dependency version bump

## 6.25.0 - (January 28, 2020)

* Changed
  * Update copyright to include 2020

## 6.24.0 - (January 17, 2020)

* Fixed
  * Overflow issue with icon-only tabs.
  * Reset cache and handle visibility of tabs added/removed post initial mount.

* Changed
  * Replaced uncontrolled `<ResponsiveElement>` with controlled `<ResponsiveElement>`.

## 6.23.0 - (January 7, 2020)

* Changed
  * Minor dependency version bump

## 6.22.0 - (December 16, 2019)

* Added
  * Added `responsiveTo` prop to provide ability to consumers to decide whether or not tabs need to completely
collapse into a menu on smaller viewports.

* Changed
  * Fixed axe violation for missing roles.
  * Center-align text label in the single dropdown tab when all tabs completely collapse into a menu.

## 6.21.0 - (December 10, 2019)

* Added
  * Added orion-fusion-theme and generated the respective reference wdio screenshots.

## 6.19.0 - (November 20, 2019)

* Changed
  * Minor dependency updates

## 6.18.0 - (November 7, 2019)

* Changed
  * Resolved lint warnings for multiple empty lines

## 6.17.0 - (October 30, 2019)

* Fixed
  * Fixed accessibility issue in the tabs component.

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

* Fixed
  * Fixed the inconsistent failures of responsive tabs on Travis CI.

## 6.12.0 - (September 19, 2019)

* Changed
  * Removed `details` tag from doc-site.
  * Doc site example module import syntax modified to use package.json name resolution

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
  * Fixed tabs overflowing issue.

* Changed
  * Updated to interface with react-intl's `FormattedMessage` rather than old React Context API.
  * updated package.json test scripts

## 6.8.0 - (July 30, 2019)

* Removed
  * Removed DEPENDENCIES.md file

## 3.7.1 - (July 23, 2019)

* Changed
  * Updated DEPENDENCIES.md doc

## 6.7.0 - (July 23, 2019)

* Changed
  * Minor dependency version bump

## 6.6.0 - (July 16, 2019)

* Added
  * Added documentation on required peerDependencies

* Changed
  * Updated wdio screenshots

## 6.5.0 - (July 10, 2019)

* Changed
  * Minor dependency version bump

## 6.4.0 - (July 2, 2019)

* Added
  * Added themeable variable --terra-tabs-font-weight
  * Added themeable variable --terra-tabs-structural-active-font-weight

* Changed
  * Renamed test and example SCSS files to end with `.module.scss` extension

## 6.3.0 - (June 19, 2019)

* Changed
  * Updated to use terra-responsive-element v5

* Changed
  * Removed all inline styles and implemented the same styles using external css.
  * Update tests for terra-toolkit v5 and terra-dev-site v5 changes

## 6.2.0 - (June 12, 2019)

* Added
  * box-shadow theme variable for in-active tab: --terra-tabs-structural-box-shadow
  * z-index theme variable for active tab: --terra-tabs-structural-active-z-index

* Removed
  * Removed node_modules from .npmignore

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
  * Update Jest tests to use terra-enzyme-intl

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
  * Major dependency version bump of terra-menu

## 4.5.0 - (February 5, 2019)

* Changed
  * Migrate package to terra-framework repository

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

* Added
  * Bottom border styles collapsed tab edge case

## 3.31.0 - (January 2, 2019)

* Changed
  * Minor dependency version bump

* Fixed
  * Lint Errors

## 3.30.1 - (November 20, 2018)

* Changed
  * Patch dependency version bump

## 3.30.0 - (November 19, 2018)

* Changed
  * Minor dependency version bump

## 3.29.0 - (November 13, 2018)

* Changed
  * Prevent left and right arrow key events from shifting tab focus indication while inside of tab popup menu
  * Minor dependency version bump

## 3.28.0 - (November 13, 2018)

* Changed
  * Minor dependency version bump

## 3.27.0 - (November 9, 2018)

* Changed
  * Minor dependency version bump

## 3.26.0 - (October 24, 2018)

* Changed
  * Minor dependency version bump

## 3.25.0 - (October 16, 2018)

* Changed
  * Minor dependency version bump

## 3.24.0 - (October 8, 2018)

* Changed
  * Minor dependency version bump

## 3.23.0 - (October 2, 2018)

* Changed
  * Minor dependency version bump

## 3.22.0 - (September 25, 2018)

* Changed
  * Minor dependency version bump

## 3.21.1 - (September 6, 2018)

* Changed
  * Patch dependency version bump

## 3.21.0 - (September 5, 2018)

* Changed
  * Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
  * Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

## 3.20.0 - (September 4, 2018)

* Changed
  * Minor dependency version bump

## 3.19.0 - (August 30, 2018)

* Changed
  * Minor dependency version bump

## 3.18.0 - (August 29, 2018)

* Changed
  * Minor dependency version bump

## 3.17.0 - (August 21, 2018)

* Changed
  * Minor dependency version bump

## 3.16.0 - (August 8, 2018)

* Changed
  * Updated component internationalization error message

## 3.15.0 - (August 1, 2018)

* Changed
  * Minor dependency version bump

## 3.14.0 - (July 25, 2018)

* Added
  * Add sv and sv-SE translations

## 3.13.0 - (July 19, 2018)

* Changed
  * Add .module extension to SCSS file(s)

## 3.12.0 - (July 17, 2018)

* Changed
  * Minor dependency version bump
  * Formatting changes per eslint v4 update

* Fixed
  * Removed usage of CSS `initial` value because Internet Explorer does not support it

## 3.11.0 - (July 10, 2018)

* Changed
  * Minor dependency version bump

## 3.10.0 - (July 3, 2018)

* Changed
  * Minor dependency version bump

## 3.9.0 - (June 28, 2018)

* Changed
  * Minor dependency version bump

* Added
  * Added change log to the documentation on terra-dev-site

* Fixed
  * Corrected the 'resize observer loop limit reached' error with animation frames.

## 3.8.0 - (June 22, 2018)

* Changed
  * Moved terra-base from dependency to peerDependency

## 3.7.0 - (June 19, 2018)

* Fixed
  * Fixed classNames on Tab Panes not displaying when rendering Tab Panes in Tabs component

## 3.6.0 - (June 13, 2018)

* Changed
  * Minor dependency version bump

## 3.5.0 - (June 12, 2018)

* Changed
  * Updated "test:jest" script to work on windows.
  * Remove Base wrapper from test examples. Terra-dev-site wraps all test examples in Base.

## 3.4.0 - (May 30, 2018)

* Changed
  * Updated structure to match terra-dev-site 1.0 and moved doc examples internal.

## 3.3.0 - (May 25, 2018)

* Changed
  * Minor dependency version bump

## 3.2.0 - (May 23, 2018)

* Changed
  * Minor dependency version bump

* Added
  * New variables for theming

## 3.1.0 - (May 16, 2018)

* Changed
  * Minor dependency version bump

## 3.0.0 - (May 9, 2018)

* Major Change
  * Updated to use terra-menu v3.0.0

## 2.8.0 - (May 2, 2018)

* Changed
  * Minor dependency version bump

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

## 1.2.0 - (February 1, 2018)

* Changed
  * Minor dependency version bump

## 1.1.0 - (January 18, 2018)

* Changed
  * Minor dependency version bump

## 1.0.0 - (January 5, 2018)

* Initial stable release
