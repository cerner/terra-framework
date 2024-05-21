# Changelog

## Unreleased

* Fixed
  * Focus is now not moving to the calendar button when navigating using `tab` key.
  * Focus is now retained on the calendar button when the calendar is closed in mobile view.

## 4.110.1 - (May 20, 2024)

* Fixed
  * Updated `terra-icon` to `^3.61.0`.

## 4.110.0 - (May 20, 2024)

* Changed
  * Minor dependency version bump.

## 4.109.0 - (May 14, 2024)

* Changed
  * Minor dependency version bump.

## 4.108.0 - (May 8, 2024)

* Changed
  * Minor dependency version bump.

## 4.107.0 - (May 1, 2024)

* Changed
  * Minor dependency version bump.

## 4.106.0 - (April 4, 2024)

* Changed
  * Minor dependency version bump.

## 4.105.0 - (March 25, 2024)

* Changed
  * Minor dependency version bump.

## 4.104.0 - (March 14, 2024)

* Changed
  * Minor dependency version bump.

## 4.103.0 - (March 8, 2024)

* Fixed
  * Date picker displays incorrectly in firefox.

## 4.102.0 - (March 5, 2024)

* Changed
  * Minor dependency version bump.

## 4.101.0 - (March 1, 2024)

* Changed
  * Fix for month/year SR redundant reading in Jaws.

## 4.100.0 - (February 28, 2024)

* Changed
  * Minor dependency version bump.

## 4.99.0 - (February 22, 2024)

* Added
  * Added visual focus dashed border for `terra-date-picker`.
  * Removed selected date information on focus of picker button.
  * Added ariaDescribedBy prop in `terra-date-time-picker` example for invalid error message.

* Changed
  * Fixed the invalid case for SR announcement.
  * Changed the SR announcement for changing date from calender.

## 4.98.1 - (February 16, 2024)

* Fixed
  * Fixed date picker to change the focused input field value instead of the day input while pressing `+`, `-` keys.

* Changed
  * Added fix for field label SR announce.

## 4.98.0 - (February 1, 2024)

* Changed
  * Added the break line tag in datePickerField between help message.

## 4.97.0 - (January 25, 2024)

* Changed
  * Updated metadata as argument for onBlur callback.

## 4.96.0 - (January 22, 2024)

* Changed
  * Updated screen reader response not to announce name attribute.

## 4.95.0 - (December 18, 2023)

* Changed
  * Minor dependency version bump.

## 4.94.0 - (November 23, 2023)

* Changed
  * Minor dependency version bump

## 4.93.0 - (November 9, 2023)

* Changed
  * Updated screen reader response to announce hot keys suggestions.

## 4.92.0 - (October 11, 2023)

* Changed
  * Minor dependency version bump

## 4.91.0 - (October 3, 2023)

* Fixed
  * Fixed DateInput prop types for `excludeDates`, `includeDates`, `maxDate`, `minDate`.

## 4.90.0 - (September 19, 2023)

* Fixed
  * Fixed DatePicker scroll on smaller viewports.

* Changed
  * Visual focus changed to dashed lines for individual fields.
  * Screen reader announcement for visual label.
  * Updated screen response to announce when invalid date is entered.
  * Updated screen response to announce when calendar popup dates
    are selected.

## 4.89.0 - (September 5, 2023)

* Changed
  * Fixed the date format being read 3 times when using SR

## 4.88.0 - (August 31, 2023)

* Changed
  * Minor dependency version bump

## 4.87.1 - (August 4, 2023)

* Changed
  * Minor dependency version bump

## 4.87.0 - (August 2, 2023)

* Changed
  * Locked `uuid` dependency to `3.4.0` for consistency across Terra packages.

## 4.86.0 - (July 31, 2023)

* Changed
  * Minor dependency version bump

## 4.85.0 - (July 25, 2023)

* Changed
  * Minor dependency version bump

## 4.84.0 - (July 19, 2023)

* Changed
  * Locked `uuid` dependency to `7.0.3` for consistency across Terra packages.

## 4.83.0 - (June 12, 2023)

* Changed
  * Locked `uuid` version to `8.2.0`.

## 4.82.0 - (June 5, 2023)

* Changed
  * Updated `uuid` to `v8` for consistency with other components.

## 4.81.0 - (May 11, 2023)

* Changed
  * Minor dependency version bump

## 4.80.0 - (April 27, 2023)

* Changed
  * Minor dependency version bump

## 4.79.0 - (March 29, 2023)

* Changed
  * Updated Jest snapshots.

## 4.78.0 - (March 1, 2023)

* Changed
  * Updated Jest snapshot for terra-button changes

## 4.77.0 - (February 14, 2023)

* Changed
  * Updated WDIO screenshots due to webpack-config-terra and
    terra-functional-testing upgrade.

## 4.76.0 - (February 7, 2023)

* Changed
  * Updated jest snapshot for decorative icon changes.

## 4.75.0 - (December 13, 2022)

* Fixed
  * Updated Jest snapshots

## 4.74.0 - (July 27, 2022)

* Fixed
  * Fixed Memory Leak issue happened due to complex state updates with `useEffect` of `DateInput.jsx`.

## 4.73.1 - (March 29, 2022)

* Fixed
  * Fixed logic with keyboard shortcuts for minimum and maximum dates.

## 4.73.0 - (March 15, 2022)

* Changed
  * Migrated docs to terra framework docs.

## 4.72.0 - (February 2, 2022)

* Added
  * Added keyboard shortcuts `T`, `-`, and `+` for auto-setting date values.

## 4.71.1 - (January 4, 2022)

* Changed
  * Updated jest snapshots

## 4.71.0 - (November 16, 2021)

* Changed
  * Minor dependency version bump
* Fixed
  * Updated onChangeRaw to also get called when date is selected from datepicker

## 4.70.0 - (November 9, 2021)

* Changed
  * Minor dependency version bump

## 4.69.1 - (November 3, 2021)

* Fixed
  * Set input id at the parent div instead of at each of the three inputs to prevent elements with identical id. The following labels will be appended to the provided id and set as the id for each corresponding input.
    * `-terra-date-picker-month`
    * `-terra-date-picker-day`
    * `-terra-date-picker-year`

## 4.69.0 - (November 2, 2021)

* Changed
  * Date input split into 3 distinct inputs that mask the previous single input.
    * The internal DOM structure of the date-picker has changed from one single input to three separate inputs. Updates may be required depending on how these inputs are queried.
    * WDIO screenshots capturing the date-picker will need to be regenerated due to the visual changes.
  * Updated `terra-dev-site` examples to use hooks.

## 4.68.0 - (October 14, 2021)

* Fixed
  * Reverted focus-trap-react upgrade due to passivity concerns

## 4.67.0 - (October 12, 2021)

* Changed
  * Upgrade focus-trap-react to version ^8.0.0.

## 4.66.0 - (September 20, 2021)

* Changed
  * Updated WDIO screenshots due to webpack-config-terra sass upgrade.

## 4.65.0 - (July 21, 2021)

* Changed
  * Updated `terra-icon` from `v3.1.0` to `v3.19.0`.
  * Updated `terra-breakpoints` from `v2.0.0` to `v2.19.0`.
  * Updated `terra-form-field` from `v3.1.0` to `v4.5.0`.

## 4.64.0 - (July 20, 2021)

* Changed
  * Updated Jest Snapshots

## 4.63.0 - (July 13, 2021)

* Changed
  * Minor dependency version bump

## 4.62.0 - (June 8, 2021)

* Changed
  * Updated `keycode-js` from `v2.0.1` to `v3.1.0`.
* Fixed
  * Arrow alignment in ie

## 4.61.0 - (June 1, 2021)

* Fixed
  * Fixed crash issue for upper and lower bound dates in IE.

## 4.60.0 - (May 4, 2021)

* Fixed
  * Fixed focus trap issue for date picker in mobile view.

## 4.59.0 - (April 6, 2021)

* Changed
  * Updated Jest command

## 4.58.0 - (March 9, 2021)

* Changed
  * Updated to use terra-functional-testing

## 4.57.0 - (February 2, 2021)

* Changed
  * Minor dependency version bump

## 4.56.0 - (January 26, 2021)

* Changed
  * Minor dependency version bump

## 4.55.0 - (January 5, 2021)

* Changed
  * Minor dependency version bump

## 4.54.0 - (December 8, 2020)

* Added
  * Added initialTimeZone a private prop that gets passed down from terra-date-time-picker.

* Changed
  * Changed 'moment' dependency to 'moment-timezone'
  * Updated to support a peer dependency of react-intl v2-v5

## 4.53.0 - (November 24, 2020)

* Changed
  * Update wdio tests to remove deprecated Terra.it helpers

## 4.52.0 - (November 10, 2020)

* Fixed
  * Fixed build failures due to the react/sort-comp rule

## 4.51.0 - (October 20, 2020)

* Changed
  * Minor dependency version bump

## 4.50.0 - (October 13, 2020)

* Changed
  * Added documentation on mock for `uuid`.

* Fixed
  * Fixes description id's in DatePicker for better accessibility.

## 4.49.0 - (October 6, 2020)

* Changed
  * Upgrade `form-input` dependency to `^4.4.0` and updated jests.

## 4.48.0 - (September 29, 2020)

* Fixed
  * Fixes inconsistent focus styles in IE.

* Changed
  * `onClickOutside` prop has been deprecated, will resolve to `onRequestClose`

## 4.47.0 - (September 16, 2020)

* Fixed
  * Fix to remove dotted border on selected date, on hovering calendar.

* Removed
  * Removed `placeholder`.

* Added
  * Added format to be displayed for both `DatePicker` and `DatePickerField`.

## 4.46.0 - (September 10, 2020)

* Fixed
  * Fix to clear out invalid date value when time input selected in date-time-picker.

## 4.45.0 - (August 18, 2020)

* Changed
  * Minor dependency version bump

## 4.44.0 - (August 11, 2020)

* Added
  * Added an interaction media query to apply `hover` styles only on non-touch devices.
  * Added Calendar Filter sub-component.

## 4.43.0 - (August 4, 2020)

* Changed
  * Fixed issue to clear out selected date when an invalid date is entered after selecting a valid date.

* Changed
  * Updated Changelog format

* Changed
  * Update jest due to change in theme

* Changed
  * Updated Changelog format
  * Update jest due to change in theme

## 4.42.0 - (July 28, 2020)

* Changed
  * Updated date to be announced correctly by assistive technology.
  * Updated color for previous and next month button in calendar.

## 4.41.0 - (July 14, 2020)

* Changed
  * updated `master` references to `main`.
  * Minor file changes to comply with eslint rules
  * Remove unused disable eslint directives
  * Escape characters to comply with no unescaped entities eslint rule

## 4.40.0 - (June 16, 2020)

* Added
  * Added `value` prop in DatePickerField to align with DatePicker.

* Fixed
  * Fixed javascript warning for not setting required `datePickerId` prop in DatePickerField test.
  * Updated DatePickerField example to use correct import.

## 4.39.0 - (June 9, 2020)

* Changed
  * Minor dependency version bump

## 4.38.0 - (June 2, 2020)

* Fixed
  * Limit the supported dates to between 01/01/1900 and 12/31/2100 because the year dropdown only contains years between 1900 and 2100.
  * Disable the Today button if today is a disabled day. (i.e.; outside the `minDate`/`maxDate` range, in `excludeDates`, not in `includeDates`, or filtered by `filterDate`)

* Changed
  * Apply themes by context and directly include packaged themes.

## 4.37.0 - (May 19, 2020)

* Changed
  * Update screenshot due to change in button hover.

## 4.36.0 - (April 28, 2020)

* Added
  * Added `directory` as a sub attribute to the `repository` attribute in package.json

* Changed
  * Update wdio test configuration to use root wdio config

* Removed
  * Removed "View Component Source Code" from docs in favour of source code badge

## 4.35.0 - (April 14, 2020)

* Fixed
  * Fixed error that occurs during remount when setting focus with a null reference to the calendar button.

## 4.34.0 - (April 6, 2020)

* Changed
  * Applied new border styles for keyboard navigation.
  * Changed pre-selected date to 1st of month when changing year/month.
  * Changed `--terra-date-picker-month-focus-outline` and `--terra-date-picker-month-focus-outline-offset` to `--terra-date-picker-day-focus-outline` and `--terra-date-picker-day-focus-outline-offset` respectively.

## 4.33.0 - (March 31, 2020)

* Added
  * Added clinical-lowlight-theme wdio screenshots

## 4.32.0 - (March 24, 2020)

* Changed
  * Updated props documentation
  * Fix wdio test for clinical-theme

## 4.31.0 - (March 10, 2020)

* Changed
  * Changed `onChange` and `onChangeRaw` callbacks to return the following metadata as part of the third parameter: iso, inputValue, isCompleteValue, isValidValue
  * Update the placeholder for the `es-US`, `nl`, `sv-SE`, and `sv` locales to match the actual date format.

## 4.30.0 - (March 3, 2020)

* Changed
  * Minor dependency version bump

## 4.29.0 - (February 25, 2020)

* Changed
  * Update date-picker to use the controlled responsive-element

## 4.28.0 - (February 18, 2020)

* Added
  * Added clinical-lowlight-theme theming files

* Changed
  * Update docs to use mdx syntax.

## 4.27.0 - (February 4, 2020)

* Changed
  * Minor dependency version bump

## 4.26.0 - (January 28, 2020)

* Changed
  * Update copyright to include 2020

## 4.25.0 - (January 7, 2020)

* Removed
  * Removed yarn reference in docs

## 4.24.0 - (December 16, 2019)

* Changed
  * Minor dependency version bump

## 4.23.0 - (December 10, 2019)

* Added
  * Added orion-fusion-theme and generated the respective reference wdio screenshots.
  * Added `aria-disabled` in react-datepicker

* Changed
  * Updated color for selected dates and removed ignore axe rules.

## 4.22.0 - (November 26, 2019)

* Fixed
  * Fixed eslint error regarding operator-assignment.

## 4.21.0 - (November 20, 2019)

* Changed
  * Minor dependency updates

## 4.20.0 - (November 18, 2019)

* Changed
  * Minor dependency updates

## 4.19.0 - (November 7, 2019)

* Fixed
  * Fixed Invalid and Incomplete wdio test logic to ensure states are off after tests runs.

* Changed
  * Resolved lint warnings for multiple empty lines
  * Regenerate wdio screenshots

## 4.18.0 - (October 30, 2019)

* Changed
  * Minor dependency updates

## 4.17.0 - (October 21, 2019)

* Changed
  * Duplicate IDs in examples changed.
  * Updated previous and next buttons in the calendar back to a HTML button instead of using the terra-button component due to discrepancies with the hover styling in low-light theme.
  * Update Jest snapshots

## 4.16.0 - (October 16, 2019)

* Changed
  * Minor dependency updates

* Added
  * Added `isIncomplete` prop and stylings
  * Added `isInvalid` prop and stylings

## 4.15.0 - (October 3, 2019)

* Changed
  * Renamed react-datepicker's `datepicker.scss` to `react_datepicker.module.scss`.

## 4.14.0 - (September 26, 2019)

* Changed
  * Minor dependency updates

## 4.13.0 - (September 19, 2019)

* Changed
  * Removed use of `componentWillReceiveProps`.
  * Added ability to shift focus around interactive elements within the datepicker popup to enable better screen reader/keyboard usage
  * Removed `details` tag from doc-site.
  * Doc site example module import syntax modified to use package.json name resolution

* Removed
  * Removed time-picker code from react-datepicker.

* Added
  * Added en-CA translations.
  * Allowed entering '-' in the date input for en-CA date format.
  * Updated documentations to call out the supported ISO 8601 date format.

## 4.12.0 - (September 6, 2019)

* Changed
  * Cleaned up imports in examples and test files
  * Updated `keycode-js` from `v1.0.4` to `v2.0.1`

* Fixed
  * Now requires users to enter separators themselves such as '/' or '-' depending on format.

## 4.11.0 - (August 21, 2019)

* Changed
  * Replaced Object.assign syntax with Object spread syntax

* Removed
  * Removed unneeded calls to hide the caret in inputs because `terra-toolkit` now does so automatically.

## 4.10.0 - (August 14, 2019)

* Changed
  * Removed lint errors for css.
  * Updated react-date-picker to use css modules.
  * updated package.json test scripts
  * Updated to interface with react-intl's context rather than old React Context API.

* Added
  * Aria-Label and translations added to input to fix accessibility issue of Date-Time-Picker.

* Fixed
  * Removed the time substring from the date value returned in all callbacks.

## 4.9.0 - (July 30, 2019)

* Removed
  * Removed DEPENDENCIES.md file

* Changed
  * Update tests for dev-site v6
  * Explicitly pull in Error icon from terra-icon instead of pulling from terra-form-field

## 4.8.1 - (July 23, 2019)

* Changed
  * Updated DEPENDENCIES.md doc

## 4.8.0 - (July 23, 2019)

* Changed
  * Added props description for the forked react-datepicker component
  * Normalized terra-visually-hidden-text dependency version to match other terra-framework packages

## 4.7.0 - (July 16, 2019)

* Added
  * Added documentation on required peerDependencies

## 4.6.0 - (July 10, 2019)

* Changed
  * Minor dependency version bump

## 4.5.0 - (July 2, 2019)

* Added
  * Allow terra-date-picker to be a controlled component.
  * Added functionality to announce the pre-selected date to screen readers when navigating within the date picker.

* Changed
  * Removed extra inline styles.
  * Renamed test and example SCSS files to end with `.module.scss` extension

## 4.4.0 - (June 19, 2019)

* Changed
  * Updated to use terra-responsive-element v5
  * Update wdio spec to use Terra.describeViewports

## 4.3.0 - (June 12, 2019)

* Changed
  * Removed all inline styles from Dev-site components and implemented the same styles using external css.
  * Update tests for terra-toolkit v5 and terra-dev-site v5 changes
  * Replaced terra-hookshot with terra-popup

* Fixed
  * Do not always force to return focus to the calendar button after the picker closes.

* Removed
  * Removed node_modules from .npmignore

## 4.2.0 - (May 21, 2019)

* Changed
  * Minor dependency update

## 4.1.0 - (May 15, 2019)

* Changed
  * Resolved eslint error in example files

* Added
  * Added DatePickerField

## 4.0.0 - (May 13, 2019)

* Breaking Change
  * Removed `releaseFocus` prop
  * Removed `requestFocus` prop
  * Removed `onInputFocus` prop in favor of the added `onFocus` prop.

* Changed
  * Changed the parameter in filterDate prop from a moment object to an ISO string.
  * Honor min/max range when only either minDate or maxDate is set.
  * Changed the onBlur event to get triggered only when the entire date picker component loses focus.
  * Updated upgrade guide.
  * The date picker now renders in a react portal on narrow screens

* Added
  * Component specific handling for pressing Escape key to close the Date Picker
  * Added focus trap to date-picker
  * Added 'onFocus' prop since 'preventOpenOnFocus' can be used to prevent picker from opening on focus.

## 3.15.0 - (May 7, 2019)

* Changed
  * Allow same day change to trigger onChange.

* Fixed
  * Fixed crash when selectedDate prop is set to a string or empty string that is not ISO compliant and unable to convert to a valid moment object.

## 3.14.0 - (April 24, 2019)

* Changed
  * Limited the characters that could be used in terra-date-picker to numeric, '.', and '/'.
  * Moved packages we use solely in doc examples and tests to devDependencies

## 3.13.0 - (April 16, 2019)

* Changed
  * Minor dependency update

## 3.12.0 - (April 9, 2019)

* Changed
  * Replaced react-popper usage with terra-hookshot

## 3.11.0 - (April 2, 2019)

* Changed
  * Forked React Datepicker at version 0.64.0
  * Removed react-datepicker as dependency
  * Added react-popper and react-onclickoutside as dependencies

## 3.10.0 - (March 26, 2019)

* Added
  * Added 'required' prop to match terra-form components' required prop

* Changed
  * Update react/react-dom peer-dependency to latest stable minor release

* Removed
  * Removed peer dependency on terra-base
  * Removed baseStyles import from terra-base

## 3.9.0 - (March 20, 2019)

* Changed
  * Update Jest tests to use terra-enzyme-intl

## 3.8.0 - (March 12, 2019)

* Changed
  * Minor dependency update

## 3.7.0 - (March 5, 2019)

* Changed
  * Minor dependency update

## 3.6.0 - (February 26, 2019)

* Added
  * Added en-AU translations

* Fixed
  * Changed expected selenium driver error to be non-Chrome specific for IE and FF driver compatibility

## 3.5.0 - (February 13, 2019)

* Changed
  * Minor dependency version bump

## 3.4.0 - (February 5, 2019)

* Changed
  * Migrate to terra-framework

## 3.3.0 - (January 26, 2019)

* Changed
  * Minor dependency version bump

## 3.2.0 - (January 22, 2019)

* Changed
  * Minor dependency version bump

## 3.1.0 - (January 22, 2019)

* Changed
  * Minor dependency version bump

## 3.0.0 - (January 8, 2019)

* Changed
  * Updated theme variables

## 2.41.0 - (January 22, 2019)

* Fixed
  * Added 'showShouldPicker' to prop-types validation

## 2.40.0 - (January 8, 2019)

* Changed
  * Updated examples to use ModalManager v4

## 2.39.0 - (January 2, 2019)

* Added
  * Added missing ar translations.

* Changed
  * Removed usage of componentWillReceiveProps
  * Updated theme variables
  * Updated site examples to be more accessible.

## 2.38.1 - (November 20, 2018)

* Changed
  * Patch dependency version bump

## 2.38.0 - (November 19, 2018)

* Changed
  * Minor dependency version bump

## 2.37.0 - (November 13, 2018)

* Changed
  * Minor dependency version bump

## 2.36.0 - (November 9, 2018)

* Changed
  * Minor dependency version bump

## 2.35.0 - (October 24, 2018)

* Changed
  * Minor dependency version bump

## 2.34.0 - (October 16, 2018)

* Changed
  * Minor dependency version bump

## 2.33.0 - (October 8, 2018)

* Changed
  * Minor dependency version bump

## 2.32.0 - (October 2, 2018)

* Changed
  * Minor dependency version bump

## 2.31.0 - (September 25, 2018)

* Changed
  * Minor dependency version bump

## 2.30.1 - (September 6, 2018)

* Changed
  * Patch dependency version bump

## 2.30.0 - (September 5, 2018)

* Changed
  * Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
  * Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

## 2.29.0 - (September 4, 2018)

* Changed
  * Minor dependency version bump

## 2.28.0 - (August 29, 2018)

* Changed
  * Minor dependency version bump

## 2.27.0 - (August 21, 2018)

* Changed
  * Minor dependency version bump

## 2.26.0 - (August 8, 2018)

* Changed
  * Updated component internationalization error message

## 2.25.0 - (August 1, 2018)

* Changed
  * Minor dependency version bump

* Fixed
  * Fix issue where tooling was parsing the .scss import inside of our .module.scss file as a CSS modules file

## 2.24.1 - (July 26, 2018)

* Fixed
  * Fixed trailing comma issue in sv and sv-SE translations

## 2.24.0 - (July 25, 2018)

* Added
  * Add sv and sv-SE translations
  * Placeholder text is now localized

## 2.23.0 - (July 19, 2018)

* Changed
  * Updated translations
  * Add .module extension to SCSS file(s)
  * Replaced the legacy form input with the new terra-form-input package
  * Fixed Focus Styles on the input element

## 2.22.0 - (July 17, 2018)

* Changed
  * Minor dependency version bump
  * Formatting changes per eslint v4 update
  * Removed unused state format key

## 2.21.0 - (July 10, 2018)

* Changed
  * Minor dependency version bump

## 2.20.0 - (July 3, 2018)

* Changed
  * Minor dependency version bump

## 2.19.0 - (June 28, 2018)

* Changed
  * Minor dependency version bump
  * Changed datepicker third-party styles import from .css file to .scss file

* Added
  * Added change log to the documentation on terra-dev-site

## 2.18.0 - (June 22, 2018)

* Changed
  * Moved terra-base from dependency to peerDependency

## 2.17.0 - (June 19, 2018)

* Removed
  * Removed the `Date Picker Modal Container` test page
  * Remove Base wrapper from test examples. Terra-dev-site wraps all test examples in Base.

* Changed
  * Split the `Date Picker Input Attributes` test page into `Date Picker Read Only` and `Date Picker Disabled`
  * Changed Nightwatch tests to WebdriverIO

## 2.16.0 - (June 13, 2018)

* Changed
  * Minor dependency version bump

## 2.15.0 - (June 12, 2018)

* Changed
  * Updated "test:jest" script to work on windows.
  * Updated the date picker to add its own wrapping div

## 2.14.0 - (May 30, 2018)

* Changed
  * Updated structure to match terra-dev-site 1.0 and moved doc examples internal.

## 2.13.0 - (May 25, 2018)

* Changed
  * Minor dependency version bump

## 2.12.0 - (May 23, 2018)

* Changed
  * Minor dependency version bump

## 2.11.0 - (May 16, 2018)

* Changed
  * Minor dependency version bump

## 2.10.0 - (May 9, 2018)

* Changed
  * Minor dependency version bump

## 2.9.0 - (May 2, 2018)

* Changed
  * Minor dependency version bump

## 2.8.0 - (April 20, 2018)

* Changed
  * Bumped devDependency on terra-modal-manager to use 2.x version

## 2.7.0 - (April 20, 2018)

* Changed
  * Minor dependency version bump

## 2.6.0 - (April 15, 2018)

* Changed
  * Minor dependency version bump

## 2.5.0 - (April 5, 2018)

* Fixed
  * Lock in version of popper to prevent date picker from pointing to an incorrect position when invoked. https://github.com/cerner/terra-core/issues/1402

## 2.4.0 - (March 30, 2018)

* Changed
  * Update lower bound version of moment.js to latest release

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
  * Uplifted component to use terra-button v2

* Added
  * Added `disabled` prop

## 1.20.0 - (February 1, 2018)

* Changed
  * Minor dependency version bump

## 1.19.0 - (January 18, 2018)

* Changed
  * Minor dependency version bump

## 1.18.0 - (January 5, 2018)

* Changed
  * Minor dependency version bump

## 1.17.0 - (November 28, 2017)

* Changed
  * Removed onInputFocus, onCalendarButtonClick and shouldShowPicker props and pass them down as custom props.

## 1.16.0 - (November 16, 2017)

* Added
  * Added onInputFocus and onCalendarButtonClick props to handle unacceptable default dates.

## 1.15.0 - (November 7, 2017)

* Changed
  * Minor dependency version bump

## 1.14.0 - (October 31, 2017)

* Changed
  * Minor dependency version bump

## 1.13.0 - (October 24, 2017)

* Added
  * Added onChangeRaw, onClickOutside and onSelect props.

## 1.12.0 - (October 6, 2017)

* Changed
  * Minor dependency version bump

## 1.11.0 - (September 26, 2017)

* Removed
  * Remove stylelint-disable selector-class-pattern

## 1.10.0 - (September 19, 2017)

* Fixed
  * Set react-datepicker popup attachment to fix bidi display

## 1.10.0 - (September 12, 2017)

* Changed
  * Minor dependency version bump

## 1.9.0 - (September 7, 2017)

* Changed
  * Minor dependency version bump

## 1.8.0 - (September 5, 2017)

* Changed
  * Update nightwatch tests and test scripts.

## 1.7.0 - (August 31, 2017)

* Changed
  * Minor dependency version bump

## 1.6.0 - (August 15, 2017)

* Changed
  * Minor dependency version bump

## 1.5.0 - (August 8, 2017)

* Changed
  * Change data-class to be name spaced

## 1.4.0 - (August 1, 2017)

* Changed
  * Minor dependency version bump

## 1.3.0 - (August 1, 2017)

* Added
  * Added requestFocus and releaseFocus props to support requesting and releasing focus.

* Changed
  * Converted component to use CSS modules

## 1.2.0 - (July 26, 2017)

* Changed
  * Minor dependency version bump

## 1.1.0 - (July 18, 2017)

* Changed
  * Updated nightwatch test scripts

* Removed
  * Removed nightwatch.config file

* Fixed
  * Check null date when date entry is cleared

* Added
  * Internationalized this component

## 1.0.0 - (June 28, 2017)

* Initial stable release
