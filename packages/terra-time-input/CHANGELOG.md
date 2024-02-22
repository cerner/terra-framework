# Changelog

## Unreleased

## 4.63.0 - (February 22, 2024)

* Added
  * Added ariaDescribedBy prop to announce invalid error message.

* Changed
  * Added fix for field label SR announce.

## 4.62.0 - (February 16, 2024)

* Fixed
  * Added fix for field label screenreader announcement.
  
* Changed
  * Changed `up`,`down` key functionality to same as `+`,`-` functionality to make uniform.
  * Changed `terra-time-input` type `number` instead of `text`.

## 4.61.0 - (January 25, 2024)

* Changed
  * Added metadata as argument for onBlur callback.
* Fixed
  * Fixed time input to change the focused input field instead of the minute input while pressing `+`, `-` keys.
  * Fixed minor formatting mistake.

* Added
  * Added visual focus dashed border for `terra-time-input`.
  * Updated screen reader response to announce hot keys suggestions.

## 4.60.0 - (January 2, 2024)

* Changed
  * Updated screen response to announce when invalid time is entered.

## 4.59.0 - (December 18, 2023)

* Changed
  * Minor dependency version bump.

## 4.58.0 - (October 11, 2023)

* Changed
  * Minor dependency version bump

## 4.57.0 - (October 3, 2023)

* Changed
  * Minor dependency version bump

## 4.56.0 - (August 31, 2023)

* Changed
  * Minor dependency version bump

## 4.55.0 - (August 2, 2023)

* Changed
  * Locked `uuid` dependency to `3.4.0` for consistency across Terra packages.

## 4.54.0 - (July 31, 2023)

* Changed
  * Minor dependency version bump

## 4.53.0 - (July 19, 2023)

* Changed
  * Locked `uuid` dependency to `7.0.3` for consistency across Terra packages.

## 4.52.0 - (July 4, 2023)

* Changed
  * Minor dependency version bump

## 4.51.0 - (June 12, 2023)

* Changed
  * Locked `uuid` version to `8.2.0`.

## 4.50.0 - (June 5, 2023)

* Changed
  * Updated `uuid` to `v8` for consistency with other components.

## 4.49.0 - (May 25, 2023)

* Fixed
  * Fixed selection styles not getting applied on AM/PM button.

## 4.48.0 - (March 29, 2023)

* Changed
  * Updated WDIO screenshots.
* Added
  * Added package-lock.json

## 4.47.0 - (February 14, 2023)

* Changed
  * Updated WDIO screenshots due to webpack-config-terra and
    terra-functional-testing upgrade.

## 4.46.1 - (March 29, 2022)

* Fixed
  * Fixed some edge case scenarios for keyboard shortcuts

## 4.46.0 - (March 15, 2022)

* Added
  * Migrate docs to terra-framework-docs


## 4.45.1 - (March 1, 2022)

* Fixed
  * Supply isInvalid as well as aria-invalid to AccessibleInput

## 4.45.0 - (February 15, 2022)

* Fixed
  * Accessibility improvements.

## 4.44.1 - (February 9, 2022)

* Added
  * Added a test for time-input padding.
* Fixed
  * Reduce random test failures.

## 4.44.0 - (February 2, 2022)

* Added
  * Added keyboard shortcuts `N`, `-`, `+`, `A`, and `P` for auto-setting time values.

## 4.43.1 - (January 4, 2022)

* Changed
  * Updated jest snapshots

## 4.43.0 - (September 20, 2021)

* Changed
  * Updated WDIO screenshots due to webpack-config-terra sass upgrade.
  * Improved specificity of meridiem button group.
  * Check NODE_ENV for the current development environment.

## 4.42.0 - (July 21, 2021)

* Changed
  * Updated Jest Snapshots

## 4.41.0 - (July 20, 2021)

* Changed
  * Updated Jest Snapshots

## 4.40.0 - (June 8, 2021)

* Changed
  * Updated `keycode-js` from `v2.0.1` to `v3.1.0`.

## 4.39.0 - (April 6, 2021)

* Fixed
  * Correct time input test to select the seconds input instead of the minute input.

## 4.38.0 - (March 9, 2021)

* Changed
  * Updated to terra-functional-testing

## 4.37.0 - (January 5, 2021)

* Fixed
  * Fixed broken links in documentation.

## 4.36.0 - (December 8, 2020)

* Changed
  * Updated to support a peer dependency of react-intl v2-v5
  * Update wdio tests to remove deprecated Terra.it helpers

## 4.35.0 - (November 10, 2020)

* Fixed
  * Fixed build failures due to the react/sort-comp rule

## 4.34.0 - (October 13, 2020)

* Changed
  * Added documentation on mock for `uuid`.

## 4.33.0 - (October 6, 2020)

* Changed
  * Upgrade `form-input` dependency to `^4.4.0` and updated jests.

## 4.32.0 - (September 16, 2020)

* Removed
  * Removed `placeholder` from the input.

* Added
  * Added format to be displayed under the time-input.

* Fixed
  * Fix to allow only 24 hour format for `es` locale.

## 4.31.0 - (August 4, 2020)

* Changed
  * Updated Changelog format

## 4.30.0 - (July 14, 2020)

* Changed
  * Minor file changes to comply with eslint rules
  * Remove unused disable eslint directives

## 4.29.0 - (June 9, 2020)

* Changed
  * Apply themes by context and directly include packaged themes.

## 4.28.0 - (May 19, 2020)

* Changed
  * Updated CSS specificity on the input fields to ensure that conflicts didn't arise with form input.

## 4.27.0 - (April 28, 2020)

* Added
  * Added `directory` as a sub attribute to the `repository` attribute in package.json

* Changed
  * Update wdio test configuration to use root wdio config

* Removed
  * Removed "View Component Source Code" from docs in favour of source code badge

## 4.26.0 - (April 6, 2020)

* Changed
  * Updated wdio screenshots

## 4.25.0 - (March 31, 2020)

* Fixed
  * Fixed time-input resizing on modal when cached value is selected.

* Added
  * Added clinical-lowlight-theme wdio screenshots

## 4.24.0 - (March 10, 2020)

* Changed
  * Update docs to use MDX syntax

## 4.23.0 - (March 3, 2020)

* Changed
  * Updated wdio screenshots

## 4.22.0 - (February 18, 2020)

* Added
  * Added clinical-lowlight-theme theming files

## 4.21.0 - (February 4, 2020)

* Added
  * Fixed background color issue of time components in incomplete `time-input` in Fusion theme.

## 4.20.0 - (January 28, 2020)

* Changed
  * Update copyright to include 2020

## 4.19.0 - (January 7, 2020)

* Added
  * Added new WDIO screenshots

* Removed
  * Removed yarn reference in docs

## 4.18.0 - (December 10, 2019)

* Added
  * Added orion-fusion-theme and generated the respective reference wdio screenshots.

* Fixed
  * Fixed background color issue of time components in incomplete `time-input`.

## 4.17.0 - (November 26, 2019)

* Fixed
  * Fixed eslint error regarding operator-assignment.

## 4.16.0 - (November 7, 2019)

* Changed
  * Resolved lint warnings for multiple empty lines

## 4.15.0 - (October 30, 2019)

* Changed
  * Changed 12-hour format appearance for mobile and desktop.
  * Meridiem select on Desktop has been changed to buttons which means that the WebdriverIO reference screenshots (if any) and/or any code in the consumer application that accesses the old meridiem select functionality on the Desktop view need to be updated.

## 4.14.0 - (October 21, 2019)

* Changed
  * Update Jest snapshots

## 4.13.0 - (October 16, 2019)

* Changed
  * Minor dependency updates

* Added
  * Added `isIncomplete` prop and stylings
  * Added `isInvalid` prop and stylings
  * Added `isInvalidMeridiem` prop
  * Added `required` prop

## 4.12.0 - (October 3, 2019)

* Changed
  * Minor dependency updates

## 4.11.0 - (September 26, 2019)

* Changed
  * Minor dependency updates

## 4.10.0 - (September 19, 2019)

* Changed
  * Removed `details` tag from doc-site.
  * Doc site example module import syntax modified to use package.json name resolution
  * Fallback the time notation variant to `24-hour` for locales that do not use the `12-hour` notation.

* Added
  * Added en-CA translations.

## 4.9.0 - (September 6, 2019)

* Changed
  * Cleaned up imports in examples and test files
  * Updated `keycode-js` from `v1.0.4` to `v2.0.1`

## 4.8.0 - (August 21, 2019)

* Changed
  * Replaced Object.assign syntax with Object spread syntax

* Removed
  * Removed extra calls to hide the caret in inputs (some are still needed because `time-input` explicitly sets a `caret-color`).
  * Removed styles hiding carets on test pages when not running within WDIO

## 4.7.0 - (August 14, 2019)

* Changed
  * Updated to interface with react-intl's context rather than old React Context API.
  * Removed inline styles from dev site components.
  * Removed Ignore Accessibility condition from wdio tests.
  * Changed help text color to match required contrast ratio.
  * Added documentation on required peerDependencies
  * Updated package.json test scripts

* Fixed
  * Fixed onChange callback triggering twice for values prepended with zero.

## 4.6.0 - (July 30, 2019)

* Removed
  * Removed DEPENDENCIES.md file

## 4.5.0 - (July 16, 2019)

* Added
  * Added documentation on required peerDependencies
  * Added the ability to have an input field for seconds.

## 4.4.0 - (July 10, 2019)

* Changed
  * Minor dependency version bump

## 4.3.0 - (July 2, 2019)

* Changed
  * Changed help text color to match required contrast ratio.
  * Renamed test and example SCSS files to end with `.module.scss` extension

## 4.2.0 - (June 19, 2019)

* Changed
  * Minor dependency version bump

## 4.1.0 - (June 12, 2019)

* Changed
  * Removed all inline styles and implemented the same styles using external css.
  * Update tests for terra-toolkit v5 and terra-dev-site v5 changes
  * Update wdio specs to use Terra.describeViewports

* Removed
  * Removed node_modules from .npmignore

## 4.0.0 - (May 13, 2019)

* Breaking Change
  * Changed the onBlur event to get triggered only when the entire time input component loses focus.
  * Removed the 'onInputFocus' custom prop in favor of the first-class 'onFocus' prop.

* Changed
  * Updated upgrade guide.

* Added
  * Added 'onFocus' prop.

## 3.7.0 - (April 24, 2019)

* Changed
  * Replaced string "12-hour" with TimeUtil.FORMAT_12_HOUR in terra dev-site examples
  * Moved packages we use solely in doc examples and tests to devDependencies

## 3.6.0 - (March 26, 2019)

* Changed
  * Update react/react-dom peer-dependency to latest stable minor release

* Removed
  * Removed peer dependency on terra-base
  * Removed baseStyles import from terra-base

## 3.5.0 - (March 20, 2019)

* Changed
  * Update Jest tests to use terra-enzyme-intl

## 3.4.0 - (March 12, 2019)

* Changed
  * Replaced local keyCode values with keycode-js npm package

## 3.3.0 - (March 5, 2019)

* Fixed
  * Updated failing wdio test selector due to aria-pressed prop changes

## 3.2.0 - (February 26, 2019)

* Added
  * Added en-AU translations

* Fixed
  * Changed browser.execute function in wdio spec to be a string for IE and FF driver compatibility

## 3.1.0 - (February 5, 2019)

* Changed
  * Minor dependency update

## 3.0.0 - (January 25, 2019)

* Breaking Change
  * Updated variable names to match new naming standard
  * Added new variables for css theming
  * Removed variables for css theming
  * Updated terra-core dependencies

## 2.36.0 - (January 5, 2019)

* Changed
  * Minor dependency update

## 2.35.0 - (January 2, 2019)

* Changed
  * Removed use of componentWillMount from examples
  * Removed use of componentWillReceiveProps
  * Migrate package to the terra-framework repository

* Added
  * Aria labels for meridiem display and select

## 2.34.1 - (November 20, 2018)

* Changed
  * Patch dependency version bump

## 2.34.0 - (November 19, 2018)

* Changed
  * Minor dependency version bump

## 2.33.0 - (November 13, 2018)

* Changed
  * Minor dependency version bump

## 2.32.0 - (November 9, 2018)

* Changed
  * Minor dependency version bump

## 2.31.0 - (October 24, 2018)

* Changed
  * Minor dependency version bump

## 2.30.0 - (October 16, 2018)

* Changed
  * Minor dependency version bump

## 2.29.0 - (October 8, 2018)

* Changed
  * Minor dependency version bump

## 2.28.0 - (October 2, 2018)

* Changed
  * Minor dependency version bump

## 2.27.0 - (September 25, 2018)

* Changed
  * Minor dependency version bump

## 2.26.1 - (September 6, 2018)

* Changed
  * Patch dependency version bump

## 2.26.0 - (September 5, 2018)

* Changed
  * Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
  * Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

## 2.25.0 - (September 4, 2018)

* Changed
  * Minor dependency version bump
  * Border radius to use px

## 2.24.0 - (August 29, 2018)

* Changed
  * Minor dependency version bump

## 2.23.0 - (August 21, 2018)

* Changed
  * Minor dependency version bump

## 2.22.0 - (August 8, 2018)

* Changed
  * Updated component internationalization error message

## 2.21.0 - (August 1, 2018)

* Changed
  * Minor dependency version bump

## 2.20.0 - (July 25, 2018)

* Added
  * Add sv and sv-SE translations

## 2.19.0 - (July 19, 2018)

* Changed
  * Add .module extension to SCSS file(s)
  * Replace legacy Input with the new terra-form-input package
  * Give desktop time input the same styles as terra-form-input.

## 2.18.0 - (July 17, 2018)

* Changed
  * Minor dependency version bump
  * Formatting changes per eslint v4 update

## 2.17.0 - (July 10, 2018)

* Changed
  * Minor dependency version bump

* Fixed
  * Prevent modification of passed in attribute props.

## 2.16.0 - (June 28, 2018)

* Changed
  * Minor dependency version bump

* Added
  * Added change log to the documentation on terra-dev-site

## 2.15.0 - (June 22, 2018)

* Changed
  * Moved terra-base from dependency to peerDependency

## 2.14.0 - (June 12, 2018)

* Fixed
  * Prevent focus events from causing runtime errors

* Changed
  * Updated "test:jest" script to work on windows.
  * Remove Base wrapper from test examples. Terra-dev-site wraps all test examples in Base.

## 2.13.0 - (May 30, 2018)

* Changed
  * Updated structure to match terra-dev-site 1.0 and moved doc examples internal.

## 2.12.0 - (May 25, 2018)

* Changed
  * Replaced nightwatch tests with wdio

## 2.11.0 - (May 23, 2018)

* Changed
  * Minor dependency version bump

## 2.10.0 - (May 16, 2018)

* Changed
  * Minor dependency version bump

## 2.9.0 - (May 9, 2018)

* Changed
  * Minor dependency version bump

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

* Fixed
  * Add missing eslint-disable-next-line no-console

## 2.3.0 - (March 14, 2018)

* Changed
  * Minor dependency version bump

## 2.2.0 - (March 6, 2018)

* Removed
  * Removed props-table script from package.json

## 2.1.0 - (February 26, 2018)

* Added
  * Translations for other locales

## 2.0.1 - (February 13, 2018)

* Changed
  * Updated peerDependencies

## 2.0.0 - (February 12, 2018)

* Changed
  * Updated to use React 16
  * Uplifted component to use terra-button v2

* Added
  * Added disabled prop

## 1.18.0 - (February 1, 2018)

* Changed
  * Minor dependency version bump

## 1.17.0 - (January 18, 2018)

* Changed
  * Minor dependency version bump

## 1.16.0 - (January 5, 2018)

* Added
  * Added variant prop to all for setting of 12 hour time input.
  * Added support for theming.
  * Added mobile only time input.

* Changed
  * Turned placeholders into i18n Translations
  * Updated tests to use aria-pressed instead of aria-selected for button group

## 1.15.0 - (November 28, 2017)

* Changed
  * Removed onInputFocus prop and pass it down as a custom prop.

## 1.14.0 - (November 16, 2017)

* Added
  * Added onInputFocus prop.

## 1.13.0 - (October 24, 2017)

* Added
  * Added onBlur prop.

## 1.12.0 - (October 6, 2017)

* Changed
  * Minor dependency version bump

## 1.11.0 - (September 26, 2017)

* Removed
  * Remove stylelint-disable selector-class-pattern

## 1.10.0 - (September 19, 2017)

* Changed
  * Minor dependency version bump

## 1.9.0 - (September 12, 2017)

* Changed
  * Minor dependency version bump

## 1.8.0 - (September 7, 2017)

* Fixed
  * Focus management issue between hour and time input in Firefox.
  * Border styling
  * Input bidirectionality

## 1.7.0 - (September 5, 2017)

* Changed
  * Update nightwatch tests and test scripts.

## 1.6.0 - (August 31, 2017)

* Changed
  * Minor dependency version bump

## 1.5.0 - (August 15, 2017)

* Changed
  * Minor dependency version bump

## 1.4.0 - (August 8, 2017)

* Changed
  * Minor dependency version bump

## 1.3.0 - (August 1, 2017)

* Changed
  * Minor dependency version bump

## 1.2.0 - (July 26, 2017)

* Fixed
  * Fixed onChange callback to occur for onBlur or onKeyDown

## 1.1.0 - (July 18, 2017)

* Changed
  * Converted component to use CSS modules
  * Updated nightwatch test scripts

* Removed
  * Removed nightwatch.config file

* Fixed
  * Updated package.json to use rimraf

## 1.0.0 - (June 28, 2017)

Initial stable release
