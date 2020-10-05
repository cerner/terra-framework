# Changelog

## Unreleased

* Fixed
  * Restricted year input to be between `1900` and `2100`.
  * Allow users to clear month value by selecting placeholder option value.

## 1.19.0 - (September 29, 2020)

* Changed
  * Minor dependency version bump

## 1.18.0 - (September 16, 2020)

* Removed
  * Removed `placeholder` from day and year input.

* Changed
  * Updated month `placeholder` to be `- Select -`.
  * Fixed wrapping and applied truncation in month select.

* Added
  * Added format to be displayed for both `DateInput` and `DateInputField`.

## 1.17.0 - (August 18, 2020)

* Added
  * Added an interaction media query to apply `hover` styles only on non-touch devices.

* Changed
  * Updated Changelog format
  
## 1.16.0 - (August 4, 2020)

* Changed
  * Updated Changelog format

## 1.15.0 - (July 14, 2020)

* Changed
  * Remove unused disable eslint directives

## 1.14.0 - (June 2, 2020)

* Changed
  * Apply themes by context and directly include packaged themes.

## 1.13.0 - (May 19, 2020)

* Fixed
  * Fixed `browser.execute` in tests to not use an arrow function since those are not supported by IE

## 1.12.0 - (April 28, 2020)

* Added
  * Added `directory` as a sub attribute to the `repository` attribute in package.json

* Changed
  * Update wdio test configuration to use root wdio config

* Removed
  * Removed "View Component Source Code" from docs in favour of source code badge

## 1.11.0 - (March 31, 2020)

* Added
  * Added clinical-lowlight-theme wdio screenshots

## 1.10.0 - (February 18, 2020)

* Added
  * Added clinical-lowlight-theme theming files

* Changed
  * Update docs to use MDX syntax

## 1.9.0 - (January 28, 2020)

* Changed
  * Update copyright to include 2020

## 1.8.0 - (December 10, 2019)

* Added
  * Added orion-fusion-theme and generated the respective reference wdio screenshots.

## 1.7.0 - (November 26, 2019)

* Fixed
  * Fixed eslint error regarding operator-assignment.

## 1.6.0 - (November 7, 2019)

* Changed
  * Resolved lint warnings for multiple empty lines

## 1.5.0 - (October 30, 2019)

* Changed
  * Minor dependency updates

## 1.4.0 - (October 21, 2019)

* Changed
  * Reenabled some tests
  * Update Jest snapshots

## 1.3.0 - (October 16, 2019)

* Changed
  * Minor dependency updates

* Added
  * Added `isIncomplete` prop and stylings
  * Added `required` prop
  * Added border css styles when `isInvalid` prop is provided

## 1.2.0 - (October 3, 2019)

* Changed
  * Minor dependency updates

## 1.1.0 - (September 26, 2019)

* Changed
  * Minor dependency updates

## 1.0.0 - (September 19, 2019)

* Initial stable release
