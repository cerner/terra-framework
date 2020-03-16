ChangeLog
=========

Unreleased
----------
4.31.0 - (March 10, 2020)
------------------
### Changed
* Changed `onBlur` callback to also return the following metadata: dateValue, timeValue and isAmbiguousHour
* Changed `onChange` and `onChangeRaw` callbacks to return the following metadata as part of the third parameter: iso, inputValue, dateValue, timeValue, isAmbiguousHour, isCompleteValue, isValidValue

4.30.0 - (March 3, 2020)
------------------
### Changed
* Minor dependency version bump

4.29.0 - (February 25, 2020)
------------------
### Changed
* Minor dependency version bump

4.28.0 - (February 18, 2020)
------------------
### Added
* Added clinical-lowlight-theme theming files

### Changed
* Update docs to use mdx syntax.

4.27.0 - (February 4, 2020)
------------------
### Fixed
* Fixed date-time-picker issue of updating default value programmatically

4.26.0 - (January 28, 2020)
------------------
### Changed
* Update copyright to include 2020

4.25.0 - (January 7, 2020)
------------------
### Changed
* Minor dependency version bump

4.24.0 - (December 16, 2019)
------------------
### Changed
* Minor dependency updates

4.23.0 - (December 10, 2019)
------------------
### Added
* Added orion-fusion-theme and generated the respective reference wdio screenshots.

### Changed
* Updated wdio screenshots due to changes in react-datepicker colors.

4.22.0 - (November 26, 2019)
--------
### Fixed
* Fixed eslint error regarding operator-assignment.

4.21.0 - (November 20, 2019)
------------------
### Changed
* Minor dependency updates

4.20.0 - (November 18, 2019)
------------------
### Changed
* Minor dependency updates

4.19.0 - (November 7, 2019)
------------------
### Changed
* Resolved lint warnings for multiple empty lines

4.18.0 - (October 30, 2019)
------------------
### Changed
* Force update to render the missing hour.
* Duplicate ID in examples changed.
* Changed 12-hour format appearance for mobile and desktop.
* Meridiem select on Desktop has been changed to buttons which means that the WebdriverIO reference screenshots (if any) and/or any code in the consumer application that accesses the old meridiem select functionality on the Desktop view need to be updated.

4.17.0 - (October 21, 2019)
------------------
### Changed
* Updated WDIO screenshots to account for button updates in terra-date-picker

### Fixed
* Fixed onBlur event data for entering invalid dates.

4.16.0 - (October 16, 2019)
------------------
### Changed
* Minor dependency updates

### Added
* Added `isIncomplete` prop and stylings
* Added `isInvalid` prop and stylings
* Added `isInvalidMeridiem` prop
* Added `required` prop

4.15.0 - (October 3, 2019)
------------------
### Changed
* Update the `variant` prop description to call out which locales do not use the 12-hour time notation.

4.14.0 - (September 26, 2019)
------------------
### Changed
* Minor dependency updates

4.13.0 - (September 19, 2019)
------------------
### Changed
* Added `browser.refresh()` to `date-time-picker-spec` to support wdio tests failing in theming repos.
* Updated Jest snapshots and WDIO screenshots
* Removed `details` tag from doc-site.
* Doc site example module import syntax modified to use package.json name resolution

### Added
* Added en-CA translations.
* Updated documentations to call out the supported ISO 8601 date time format.

4.12.0 - (September 6, 2019)
------------------
### Changed
* Cleaned up imports in examples and test files
* Updated `keycode-js` from `v1.0.4` to `v2.0.1`

### Fixed
* Fixed `onBlur` prop to receive correct date and time upon resolving ambiguous hour to Standard time in the Time Clarification modal.

4.11.0 - (August 21, 2019)
------------------
### Changed
* Replaced Object.assign syntax with Object spread syntax

### Fixed
* Fix JS error when losing focus from an empty date input.
* Fixed ambiguous hour that occurs in the southern hemisphere.

### Added
* Added a function to DateTimeUtil.

### Removed
* Removed extra calls to hide the caret in inputs (some are still needed because `terra-time-input` explicitly sets a `caret-color`).
* Removed styles hiding carets on test pages when not running within WDIO

4.10.0 - (August 14, 2019)
------------------
### Fixed
* Allow blur to be handled after the date time ambiguity is resolved.

### Changed
* Fixed all the accessibility issues and updated the tests and screenshots accordingly.
* Added documentation on required peerDependencies
* Updated package.json test scripts
* Corrected Typos.
* Updated wdio test to work with changes in terra-date-picker.
* Updated to interface with react-intl's context rather than old React Context API.

4.9.0 - (July 30, 2019)
------------------
### Removed
* Removed DEPENDENCIES.md file

4.8.1 - (July 23, 2019)
------------------
### Changed
* Updated DEPENDENCIES.md doc

4.8.0 - (July 23, 2019)
------------------
### Changed
* When the date-time picker time clarification modal is open on touch devices, it will now focus on the first interactive DOM element within it. This enables focus to be shifted into the modal correctly when using VoiceOver on iOS.

4.7.0 - (July 16, 2019)
------------------
### Added
* Added documentation on required peerDependencies
* Added the ability for the user to enter seconds in the time input

4.6.0 - (July 10, 2019)
------------------
### Changed
* Minor dependency version bump
* Fixed tests to appropriately reset before beginning next test.

4.5.0 - (July 2, 2019)
------------------
### Changed
* Screenshots updated for mobile view.
* Update wdio test to work with changes in terra-date-picker
* Renamed test and example SCSS files to end with `.module.scss` extension

4.4.0 - (June 19, 2019)
------------------
### Changed
* Update wdio specs to use Terra.describeViewports

4.3.0 - (June 12, 2019)
------------------
### Changed
* Removed all inline styles from Dev-site components and implemented the same styles using external css.
* Update tests for terra-toolkit v5 and terra-dev-site v5 changes
* Updated wdio screenshots for date-picker changes.
* Updated daylight savings time/standard time button to have aria-label and title with additional timezone info, to clarify its meaning.

### Fixed
* Fixed wdio tests by calling browser.refresh() on subsequent loads instead of loading the url directly.
* Focus now automatically moves to the hour input after a date is selected from the picker.

### Removed
* Removed node_modules from .npmignore

4.2.0 - (May 21, 2019)
------------------
### Changed
* Minor dependency update

### Fixed
* Fixed js error in the filterDate example.

4.1.0 - (May 15, 2019)
------------------
### Changed
* Minor dependency update

4.0.0 - (May 13, 2019)
------------------
### Breaking Changes
* Removed `releaseFocus` prop
* Removed `requestFocus` prop
* Update the filterDate examples to handle an ISO string instead of a moment object.
* Leverage createSafeDate from the DateUtil.
* Changed the onBlur event to get triggered only when the entire date time picker component loses focus.
* Updated upgrade guide.

### Removed
* Removed 'onInputFocus' prop in favor of the added 'onFocus' prop.
* Remove minDateTime and maxDateTime props. These props are being renamed to minDate and maxDate.

### Added
* Added 'onFocus' prop since 'preventOpenOnFocus' can be used to prevent picker from opening on focus.
* Add minDate and maxDate props. These props replace minDateTime and maxDateTime for the purpose of ignoring the time portion when determing the min/max range.

3.16.0 - (May 7, 2019)
------------------
### Fixed
* Changes made to the time is now preserved when the modification is made with an invalid date.

3.15.0 - (April 24, 2019)
------------------
### Added
* Added timeVariant prop to datetime picker to support 12-hour format.
* Added example for time variant on terra-dev site

### Added
* Added onSelect function prop that fires when selecting a date via date picker.

### Changed
* Moved packages we use solely in doc examples and tests to devDependencies


3.14.0 - (April 16, 2019)
------------------
### Changed
* Minor dependency update

3.13.0 - (April 9, 2019)
------------------
### Changed
* Minor dependency update

3.12.0 - (April 2, 2019)
------------------
### Changed
* Minor dependency update

3.11.0 - (March 26, 2019)
------------------
### Changed
* Updated prop onChange call logic with respect to ambiguous date-times.
* Update react/react-dom peer-dependency to latest stable minor release

### Removed
* Removed peer dependency on terra-base
* Removed baseStyles import from terra-base

3.10.0 - (March 20, 2019)
------------------
### Changed
* Update Jest tests to use terra-enzyme-intl

3.9.0 - (March 12, 2019)
------------------
### Changed
* Replaced local keyCode values with keycode-js npm package

3.8.0 - (March 5, 2019)
------------------
### Changed
* Minor dependency update

3.7.0 - (February 26, 2019)
------------------
### Added
* Added en-AU translations

### Fixed
* Changed browser.execute functions in wdio spec to be strings for IE and FF driver compatibility

3.6.0 - (February 13, 2019)
------------------
### Fixed
* Throws NPE if manually entered valid date is outside of allotted datetime range.

3.5.0 - (February 5, 2019)
------------------
### Changed
* Migrate package to the terra-framework repository

3.4.0 - (January 26, 2019)
------------------
### Changed
* Minor dependency version bump

3.3.0 - (January 22, 2019)
------------------
### Changed
* Minor dependency version bump

3.2.0 - (January 22, 2019)
------------------
### Changed
* Minor dependency version bump

3.1.0 - (January 22, 2019)
------------------
### Changed
* Minor dependency version bump

3.0.0 - (January 8, 2019)
------------------
### Changed
* Updated examples to use ModalManager v4
* Updated theme variables

2.39.0 - (January 2, 2019)
------------------
### Added
* Added missing ar translations

### Changed
* Removed use of componentWillReceiveProps
* Removed use of componentWillMount
* Updated component to use injectIntl
* Updated site examples to be more accessible.

2.38.1 - (November 20, 2018)
------------------
### Changed
* Patch dependency version bump

2.38.0 - (November 19, 2018)
------------------
### Changed
* Minor dependency version bump

2.37.0 - (November 13, 2018)
------------------
### Changed
* Minor dependency version bump

2.36.0 - (November 9, 2018)
------------------
### Changed
* Minor dependency version bump

2.35.0 - (October 24, 2018)
------------------
### Changed
* Minor dependency version bump

2.34.0 - (October 16, 2018)
------------------
### Changed
* Minor dependency version bump

2.33.0 - (October 8, 2018)
------------------
### Changed
* Minor dependency version bump

2.32.0 - (October 2, 2018)
------------------
### Changed
* Minor dependency version bump

2.31.0 - (September 25, 2018)
------------------
### Changed
* Minor dependency version bump

2.30.1 - (September 6, 2018)
------------------
### Changed
* Patch dependency version bump

2.30.0 - (September 5, 2018)
------------------
### Changed
* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

2.29.0 - (September 4, 2018)
------------------
### Changed
* Minor dependency version bump

2.28.0 - (August 29, 2018)
------------------
### Changed
* Minor dependency version bump

2.27.0 - (August 21, 2018)
------------------
### Changed
* Minor dependency version bump

2.26.0 - (August 8, 2018)
------------------
### Changed
* Updated component internationalization error message

2.25.0 - (August 1, 2018)
------------------
### Changed
* Minor dependency version bump

2.24.1 - (July 26, 2018)
------------------
### Changed
* Patch dependency version bump

2.24.0 - (July 25, 2018)
------------------
### Added
* Add sv and sv-SE translations

### Fixed
* Resolve issue where disabled component doesn't disable time clarification

2.23.0 - (July 19, 2018)
------------------
### Changed
* Updated translations
* Add .module extension to SCSS file(s)
* Use datepicker that consumes new form inputs.

2.22.0 - (July 17, 2018)
------------------
### Changed
* Minor dependency version bump
* Formatting changes per eslint v4 update
* Required props no longer set a default prop

2.21.0 - (July 10, 2018)
------------------
### Changed
* Minor dependency version bump

2.20.0 - (July 3, 2018)
------------------
### Changed
* Minor dependency version bump

### Added
* Added source code for examples on terra-dev-site

2.19.0 - (June 28, 2018)
------------------
### Changed
* Minor dependency version bump
* Replaced nightwatch tests with wdio

### Added
* Added change log to the documentation on terra-dev-site

2.18.0 - (June 22, 2018)
------------------
### Changed
* Moved terra-base from dependency to peerDependency

2.17.0 - (June 19, 2018)
------------------
### Changed
* Minor dependency version bump

2.16.0 - (June 13, 2018)
------------------
### Changed
* Minor dependency version bump

2.15.0 - (June 12, 2018)
------------------
### Changed
* Updated "test:jest" script to work on windows.
* Remove Base wrapper from test examples. Terra-dev-site wraps all test examples in Base.

2.14.0 - (May 30, 2018)
------------------
### Changed
* Updated structure to match terra-dev-site 1.0 and moved doc examples internal.

2.13.0 - (May 25, 2018)
------------------
### Changed
* Minor dependency version bump

2.12.0 - (May 23, 2018)
------------------
### Changed
* Dependency on terra-modal removed, now depends on terra-abstract-modal.

2.11.0 - (May 16, 2018)
------------------
### Changed
* Minor dependency version bump

2.10.0 - (May 9, 2018)
------------------
### Changed
* Minor dependency version bump

2.9.0 - (May 2, 2018)
------------------
### Changed
* Minor dependency version bump

2.8.0 - (April 20, 2018)
------------------
### Changed
* Bumped devDependency on terra-modal-manager to use 2.x version

2.7.0 - (April 20, 2018)
------------------
### Changed
* Minor dependency version bump

2.6.0 - (April 15, 2018)
------------------
### Changed
* Minor dependency version bump

2.5.0 - (April 5, 2018)
------------------
### Changed
* Minor dependency version bump

2.4.0 - (March 30, 2018)
------------------
### Changed
* Update lower bound version of moment.js to latest release

2.3.0 - (March 14, 2018)
------------------
### Changed
* Minor dependency version bump

2.2.0 - (March 6, 2018)
------------------
### Removed
* Removed props-table script from package.json

2.1.0 - (February 26, 2018)
------------------
### Changed
* Minor dependency version bump

2.0.1 - (February 13, 2018)
------------------
### Changed
* Updated peerDependencies

2.0.0 - (February 12, 2018)
------------------
### Changed
* Updated to use React 16
* Uplifted component to use terra-button v2

### Added
* Added `disabled` prop

1.7.0 - (February 1, 2018)
------------------
### Changed
* Minor dependency version bump

1.6.0 - (January 18, 2018)
------------------
### Changed
* Minor dependency version bump

1.5.0 - (January 5, 2018)
------------------
### Changed
* Minor dependency version bump

1.4.0 - (November 28, 2017)
------------------
### Changed
* Minor dependency version bump

1.3.0 - (November 16, 2017)
------------------
### Added
* Handle unacceptable default dates.

1.2.0 - (November 7, 2017)
------------------
### Changed
* Minor dependency version bump

1.1.0 - (October 31, 2017)
------------------
### Changed
* Minor dependency version bump

1.0.0 - (October 24, 2017)
------------------
* Initial stable release
