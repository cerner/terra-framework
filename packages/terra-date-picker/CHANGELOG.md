Changelog
=========

Unreleased
----------

4.29.0 - (February 25, 2020)
------------------
### Changed
* Update date-picker to use the the controlled responsive-element

4.28.0 - (February 18, 2020)
------------------
### Added
* Added clinical-lowlight-theme theming files

### Changed
* Update docs to use mdx syntax.

4.27.0 - (February 4, 2020)
------------------
### Changed
* Minor dependency version bump

4.26.0 - (January 28, 2020)
------------------
### Changed
* Update copyright to include 2020

4.25.0 - (January 7, 2020)
------------------
### Removed
* Removed yarn reference in docs

4.24.0 - (December 16, 2019)
------------------
### Changed
* Minor dependency version bump

4.23.0 - (December 10, 2019)
------------------
### Added
* Added orion-fusion-theme and generated the respective reference wdio screenshots.
* Added `aria-disabled` in react-datepicker

### Changed
* Updated color for selected dates and removed ignore axe rules.

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
### Fixed
* Fixed Invalid and Incomplete wdio test logic to ensure states are off after tests runs.

### Changed
* Resolved lint warnings for multiple empty lines
* Regenerate wdio screenshots

4.18.0 - (October 30, 2019)
------------------
### Changed
* Minor dependency updates

4.17.0 - (October 21, 2019)
------------------
### Changed
* Duplicate IDs in examples changed.
* Updated previous and next buttons in the calendar back to a HTML button instead of using the terra-button component due to discrepancies with the hover styling in low-light theme.
* Update Jest snapshots

4.16.0 - (October 16, 2019)
------------------
### Changed
* Minor dependency updates

### Added
* Added `isIncomplete` prop and stylings
* Added `isInvalid` prop and stylings

4.15.0 - (October 3, 2019)
------------------
### Changed
* Renamed react-datepicker's `datepicker.scss` to `react_datepicker.module.scss`.

4.14.0 - (September 26, 2019)
------------------
### Changed
* Minor dependency updates

4.13.0 - (September 19, 2019)
------------------
### Changed
* Removed use of `componentWillReceiveProps`.
* Added ability to shift focus around interactive elements within the datepicker popup to enable better screen reader/keyboard usage
* Removed `details` tag from doc-site.
* Doc site example module import syntax modified to use package.json name resolution

### Removed
* Removed time-picker code from react-datepicker.

### Added
* Added en-CA translations.
* Allowed entering '-' in the date input for en-CA date format.
* Updated documentations to call out the supported ISO 8601 date format.

4.12.0 - (September 6, 2019)
------------------
### Changed
* Cleaned up imports in examples and test files
* Updated `keycode-js` from `v1.0.4` to `v2.0.1`

### Fixed
* Now requires users to enter separators themselves such as '/' or '-' depending on format.

4.11.0 - (August 21, 2019)
------------------
### Changed
* Replaced Object.assign syntax with Object spread syntax

### Removed
* Removed unneeded calls to hide the caret in inputs because `terra-toolkit` now does so automatically.

4.10.0 - (August 14, 2019)
------------------
### Changed
* Removed lint errors for css.
* Updated react-date-picker to use css modules.
* updated package.json test scripts
* Updated to interface with react-intl's context rather than old React Context API.

### Added
* Aria-Label and translations added to input to fix accessibility issue of Date-Time-Picker.

### Fixed
* Removed the time substring from the date value returned in all callbacks.

4.9.0 - (July 30, 2019)
------------------
### Removed
* Removed DEPENDENCIES.md file

### Changed
* Update tests for dev-site v6
* Explicitly pull in Error icon from terra-icon instead of pulling from terra-form-field

4.8.1 - (July 23, 2019)
------------------
### Changed
* Updated DEPENDENCIES.md doc

4.8.0 - (July 23, 2019)
------------------
### Changed
* Added props description for the forked react-datepicker component
* Normalized terra-visually-hidden-text dependency version to match other terra-framework packages

4.7.0 - (July 16, 2019)
------------------
### Added
* Added documentation on required peerDependencies

4.6.0 - (July 10, 2019)
------------------
### Changed
* Minor dependency version bump

4.5.0 - (July 2, 2019)
------------------
### Added
* Allow terra-date-picker to be a controlled component.
* Added functionality to announce the pre-selected date to screen readers when navigating within the date picker.

### Changed
* Removed extra inline styles.
* Renamed test and example SCSS files to end with `.module.scss` extension

4.4.0 - (June 19, 2019)
------------------
### Changed
* Updated to use terra-responsive-element v5
* Update wdio spec to use Terra.describeViewports

4.3.0 - (June 12, 2019)
------------------
### Changed
* Removed all inline styles from Dev-site components and implemented the same styles using external css.
* Update tests for terra-toolkit v5 and terra-dev-site v5 changes
* Replaced terra-hookshot with terra-popup

### Fixed
* Do not always force to return focus to the calendar button after the picker closes.

### Removed
* Removed node_modules from .npmignore

4.2.0 - (May 21, 2019)
------------------
### Changed
* Minor dependency update

4.1.0 - (May 15, 2019)
------------------
### Changed
* Resolved eslint error in example files

### Added
* Added DatePickerField

4.0.0 - (May 13, 2019)
------------------
### Breaking Changes
* Removed `releaseFocus` prop
* Removed `requestFocus` prop
* Removed `onInputFocus` prop in favor of the added `onFocus` prop.

### Changed
* Changed the parameter in filterDate prop from a moment object to an ISO string.
* Honor min/max range when only either minDate or maxDate is set.
* Changed the onBlur event to get triggered only when the entire date picker component loses focus.
* Updated upgrade guide.
* The date picker now renders in a react portal on narrow screens

### Added
* Component specific handling for pressing Escape key to close the Date Picker
* Added focus trap to date-picker
* Added 'onFocus' prop since 'preventOpenOnFocus' can be used to prevent picker from opening on focus.

3.15.0 - (May 7, 2019)
------------------
### Changed
* Allow same day change to trigger onChange.

### Fixed
* Fixed crash when selectedDate prop is set to a string or empty string that is not ISO compliant and unable to convert to a valid moment object.

3.14.0 - (April 24, 2019)
------------------
### Changed
* Limited the characters that could be used in terra-date-picker to numeric, '.', and '/'.
* Moved packages we use solely in doc examples and tests to devDependencies

3.13.0 - (April 16, 2019)
------------------
### Changed
* Minor dependency update

3.12.0 - (April 9, 2019)
------------------
### Changed
* Replaced react-popper usage with terra-hookshot

3.11.0 - (April 2, 2019)
------------------
### Changed
* Forked React Datepicker at version 0.64.0
* Removed react-datepicker as dependency
* Added react-popper and react-onclickoutside as dependencies

3.10.0 - (March 26, 2019)
------------------
### Added
* Added 'required' prop to match terra-form components' required prop

### Changed
* Update react/react-dom peer-dependency to latest stable minor release

### Removed
* Removed peer dependency on terra-base
* Removed baseStyles import from terra-base

3.9.0 - (March 20, 2019)
------------------
### Changed
* Update Jest tests to use terra-enzyme-intl

3.8.0 - (March 12, 2019)
------------------
### Changed
* Minor dependency update

3.7.0 - (March 5, 2019)
------------------
### Changed
* Minor dependency update

3.6.0 - (February 26, 2019)
------------------
### Added
* Added en-AU translations

### Fixed
* Changed expected selenium driver error to be non-Chrome specific for IE and FF driver compatibility

3.5.0 - (February 13, 2019)
------------------
### Changed
* Minor dependency version bump

3.4.0 - (February 5, 2019)
------------------
### Changed
* Migrate to terra-framework

3.3.0 - (January 26, 2019)
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
* Updated theme variables

2.41.0 - (January 22, 2019)
------------------
### Fixed
* Added 'showShouldPicker' to prop-types validation

2.40.0 - (January 8, 2019)
------------------
### Changed
* Updated examples to use ModalManager v4

2.39.0 - (January 2, 2019)
------------------
### Added
* Added missing ar translations.

### Changed
* Removed usage of componentWillReceiveProps
* Updated theme variables
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

### Fixed
* Fix issue where tooling was parsing the .scss import inside of our .module.scss file as a CSS modules file

2.24.1 - (July 26, 2018)
------------------
### Fixed
* Fixed trailing comma issue in sv and sv-SE translations

2.24.0 - (July 25, 2018)
------------------
### Added
* Add sv and sv-SE translations
* Placeholder text is now localized

2.23.0 - (July 19, 2018)
------------------
### Changed
* Updated translations
* Add .module extension to SCSS file(s)
* Replaced the legacy form input with the new terra-form-input package
* Fixed Focus Styles on the input element

2.22.0 - (July 17, 2018)
------------------
### Changed
* Minor dependency version bump
* Formatting changes per eslint v4 update
* Removed unused state format key

2.21.0 - (July 10, 2018)
------------------
### Changed
* Minor dependency version bump

2.20.0 - (July 3, 2018)
------------------
### Changed
* Minor dependency version bump

2.19.0 - (June 28, 2018)
------------------
### Changed
* Minor dependency version bump
* Changed datepicker third-party styles import from .css file to .scss file

### Added
* Added change log to the documentation on terra-dev-site

2.18.0 - (June 22, 2018)
------------------
### Changed
* Moved terra-base from dependency to peerDependency

2.17.0 - (June 19, 2018)
------------------
### Removed
* Removed the `Date Picker Modal Container` test page
* Remove Base wrapper from test examples. Terra-dev-site wraps all test examples in Base.

### Changed
* Split the `Date Picker Input Attributes` test page into `Date Picker Read Only` and `Date Picker Disabled`
* Changed Nightwatch tests to WebdriverIO

2.16.0 - (June 13, 2018)
------------------
### Changed
* Minor dependency version bump

2.15.0 - (June 12, 2018)
------------------
### Changed
* Updated "test:jest" script to work on windows.
* Updated the date picker to add its own wrapping div

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
* Minor dependency version bump

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
### Fixed
* Lock in version of popper to prevent date picker from pointing to an incorrect position when invoked. https://github.com/cerner/terra-core/issues/1402

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

1.20.0 - (February 1, 2018)
------------------
### Changed
* Minor dependency version bump

1.19.0 - (January 18, 2018)
------------------
### Changed
* Minor dependency version bump

1.18.0 - (January 5, 2018)
------------------
### Changed
* Minor dependency version bump

1.17.0 - (November 28, 2017)
------------------
### Changed
* Removed onInputFocus, onCalendarButtonClick and shouldShowPicker props and pass them down as custom props.

1.16.0 - (November 16, 2017)
------------------
### Added
* Added onInputFocus and onCalendarButtonClick props to handle unacceptable default dates.

1.15.0 - (November 7, 2017)
------------------
### Changed
* Minor dependency version bump

1.14.0 - (October 31, 2017)
------------------
### Changed
* Minor dependency version bump

1.13.0 - (October 24, 2017)
------------------
### Added
* Added onChangeRaw, onClickOutside and onSelect props.

1.12.0 - (October 6, 2017)
------------------
### Changed
* Minor dependency version bump

1.11.0 - (September 26, 2017)
------------------
### Removed
* Remove stylelint-disable selector-class-pattern

1.10.0 - (September 19, 2017)
------------------
### Fixed
* Set react-datepicker popup attachment to fix bidi display

1.10.0 - (September 12, 2017)
------------------
### Changed
* Minor dependency version bump

1.9.0 - (September 7, 2017)
------------------
### Changed
* Minor dependency version bump

1.8.0 - (September 5, 2017)
------------------
### Changed
* Update nightwatch tests and test scripts.

1.7.0 - (August 31, 2017)
------------------
### Changed
* Minor dependency version bump

1.6.0 - (August 15, 2017)
------------------
### Changed
* Minor dependency version bump

1.5.0 - (August 8, 2017)
------------------
### Changed
* Change data-class to be name spaced

1.4.0 - (August 1, 2017)
------------------
### Changed
* Minor dependency version bump

1.3.0 - (August 1, 2017)
------------------
### Added
* Added requestFocus and releaseFocus props to support requesting and releasing focus.

### Changed
* Converted component to use CSS modules

1.2.0 - (July 26, 2017)
------------------
### Changed
* Minor dependency version bump

1.1.0 - (July 18, 2017)
------------------
### Changed
* Updated nightwatch test scripts

### Removed
* Removed nightwatch.config file

### Fixed
* Check null date when date entry is cleared

### Added
* Internationalized this component

1.0.0 - (June 28, 2017)
------------------
Initial stable release
