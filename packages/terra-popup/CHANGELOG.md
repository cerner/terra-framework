Changelog
=========

Unreleased
----------

5.9.0 - (April 9, 2019)
------------------
### Changed
* Minor dependency update

5.8.0 - (April 2, 2019)
------------------
### Changed
* Minor dependency update

5.7.0 - (March 26, 2019)
------------------
### Changed
* Update react/react-dom peer-dependency to latest stable minor release

### Removed
* Removed peer dependency on terra-base
* Removed baseStyles import from terra-base

5.6.0 - (March 20, 2019)
------------------
### Changed
* Updated heading levels in doc site README.md to correct Section 508 errors
* Update Jest tests to use terra-enzyme-intl

5.5.0 - (March 12, 2019)
------------------
### Changed
* Minor dependency update

5.4.0 - (March 5, 2019)
------------------
### Fixed
* Remove Opts export, instead named export cornerSize

### Changed
* Remove need to use `injectIntl`, use `<FormattedMessage />` instead
* Updated docs

5.3.0 - (February 26, 2019)
------------------
### Added
* Added en-AU translations

### Fixed
* Removed prop breaking the modal example

5.2.0 - (February 13, 2019)
------------------
### Changed
* Removed dependency on terra-list
* Removed dependency on terra-grid

5.1.0 - (February 5, 2019)
------------------
### Changed
* Minor dependency update

5.0.0 - (January 25, 2019)
------------------
### Breaking Change
* Updated variable names to match new naming standard
* Added new variables for css theming
* Removed variables for css theming
* Updated terra-core dependencies

### Fixed
* Removed 'close' class from `_PopupContent` button
* Added text prop to `_PopupContent` button for conversion to aria-label in Button component

### Added
* react-intl dependency added for i18n translations
* intl prop added to `_PopupContent` for i18n message formatting

### Changed
* Remove use of componentWillReceiveProps

4.22.0 - (January 5, 2019)
------------------
### Changed
* Minor dependency update

4.21.0 - (January 2, 2019)
------------------
### Changed
* Prevent click events from propagating from popup overlay

4.20.0 - (December 5, 2018)
------------------
### Added
* Added onClickOutside detection to popup overlay

### Changed
* Replaced hookshot content component with a version that does not use onClickOutside HOC
* Disabled focus trap when popup is open and users click outside of the popup

4.19.1 - (December 3, 2018)
------------------
### Changed
* Wdio tests changed to use themeCombinationOfCustomProperties
* Replaced use of componentWillMount with componentDidMount

### Fixed
* Fixed preventDefault error

### Changed
* Updated examples to consume terra-disclosure-manager v3.x

### Removed
* Removed dependency on terra-app-delegate package.

4.18.1 - (November 15, 2018)
------------------
### Changed
* Patch dependency update

4.18.0 - (November 15, 2018)
------------------
### Changed
* Minor dependency update

4.17.0 - (October 30, 2018)
------------------
### Changed
* Update mixin import to be more explicit

4.16.0 - (October 16, 2018)
------------------
### Changed
* Updated popup examples to highlight how to achieve better focus management for screen readers

4.15.0 - (October 8, 2018)
------------------
### Changed
* Updated links in docs on supported features
* Upgrade focus-trap-react version to ^4.0.1

### Added
* Webdriver theme test for --terra-popup-arrow-inner-color

4.14.0 - (September 25, 2018)
------------------
### Changed
* Minor dependency bump

4.13.0 - (September 5, 2018)
------------------
### Changed
* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

4.12.0 - (August 30, 2018)
------------------
### Changed
* Formatting changes per eslint v5 update

4.11.0 - (August 13, 2018)
------------------
### Changed
* Minor dependency updates

4.10.0 - (August 8, 2018)
------------------
### Changed
* Formatting changes per eslint v4 update

### Fixed
* Lint errors regarding file path resolution
* Popup Content will clone prop to indicate missing close button

4.9.0 - (July 26, 2018)
------------------
### Changed
* Minor dependency updates

4.8.0 - (July 25, 2018)
------------------
### Changed
* Add .module extension to SCSS file(s)

4.7.0 - (July 10, 2018)
------------------
### Changed
* Clean up dependencies

4.6.0 - (July 3, 2018)
------------------
### Added
* Change logs to documentation on terra-dev-site

4.5.0 - (June 29, 2018)
------------------
### Changed
* Minor dependency updates

4.4.0 - (June 12, 2018)
------------------
### Changed
* Minor dependency updates

4.3.0 - (June 5, 2018)
------------------
### Changed
* Minor dependency updates

4.2.0 - (May 30, 2018)
------------------
### Changed
* Moved examples to src

4.1.0 - (May 22, 2018)
------------------
### Changed
* Minor dependency updates

4.0.0 - (May 8, 2018)
------------------
### Major Change
* Updated to use terra-modal-manager v3.0.0

### Changed
* Update webdriver screenshots

3.3.0 - (April 30, 2018)
------------------
### Changed
* Minor dependency updates
* Do not release snapshots to npm

3.2.0 - (April 20, 2018)
------------------
### Changed
* Added a call to preventDefault on onOutsideClick

3.1.0 - (April 13, 2018)
------------------
### Changed
* Minor dependency updates

3.0.0 - (April 10, 2018)
-----------------
### Breaking Change
* Removed attachment behavior `none`. Added `push` as a replacement to `none` to regain previous bounded repositioning.

2.4.1 - (April 5, 2018)
------------------
### Changed
* Added terra-mixins dependency

2.4.0 - (April 3, 2018)
------------------
### Changed
* Miragte package to terra-framework

2.3.0 - (March 14, 2018)
------------------
### Changed
* Allow Popup 'Up' Arrow to be themed

2.2.0 - (March 6, 2018)
------------------
### Removed
* Removed props-table script from package.json

2.1.0 - (February 26, 2018)
------------------
### Changed
* Updated WebDriverIO tests

2.0.1 - (February 13, 2018)
------------------
### Changed
* Updated peerDependencies

2.0.0 - (February 12, 2018)
------------------
### Changed
* Updated to use React 16

### Added
* WebDriverIO tests and themable  styles

1.20.0 - (February 1, 2018)
------------------
### Changed
* Minor version bump

1.19.0 - (January 18, 2018)
------------------
### Changed
* Minor version bump

1.18.0 - (January 5, 2018)
------------------
### Fixed
* Console warning

1.17.0 - (December 5, 2017)
------------------
### Changed
* Minor version bump

1.16.0 - (November 28, 2017)
------------------
### Changed
* Minor version bump

1.15.0 - (November 16, 2017)
------------------
### Changed
* Minor version bump

1.14.0 - (November 7, 2017)
------------------
### Changed
* Minor version bump

1.13.0 - (October 31, 2017)
------------------
### Added
* Consume content resize prop on HookshotContent

1.12.0 - (October 24, 2017)
------------------
### Changed
* Replaced tether implementation with terra-hookshot components

1.11.0 - (October 6, 2017)
------------------
### Changed
* Minor version bump

1.10.0 - (September 26, 2017)
------------------
### Removed
* Remove stylelint-disable selector-class-pattern

1.9.0 - (September 19, 2017)
------------------
### Changed
* Minor version bump

1.8.0 - (September 12, 2017)
------------------
### Changed
* Fix `-var()` syntax.

### Fixed
* Implementation of the overlay styling.

1.7.0 - (September 7, 2017)
------------------
### Changed
* Minor version bump

1.6.0 - (September 5, 2017)
------------------
### Changed
* Update nightwatch tests and test scripts.

1.5.0 - (August 31, 2017)
------------------
### Changed
* Minor version bump

1.4.0 - (August 15, 2017)
------------------
### Changed
* Switched CSS custom properties usage to inline fallback syntax

1.3.0 - (August 8, 2017)
------------------
### Changed
* Minor version bump

1.2.0 - (August 1, 2017)
------------------
### Changed
* Minor version bump

1.1.0 - (August 1, 2017)
------------------
### Added
* Added requestFocus and releaseFocus props to support requesting and releasing focus.

### Fixed
* Prevent Invalid Props from breaking size logic. (Issue #679)

1.0.0 - (July 26, 2017)
------------------
Initial stable release
