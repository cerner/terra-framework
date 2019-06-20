Changelog
=========

Unreleased
----------

3.4.0 - (June 19, 2019)
------------------
### Changed
* Minor dependency version bump

3.3.0 - (June 12, 2019)
------------------
### Removed
* Removed node_modules from .npmignore

### Changed
* Removed all inline styles from Dev-site components and implemented the same styles using external css.
* Update tests for terra-toolkit v5 and terra-dev-site v5 changes

3.2.0 - (May 21, 2019)
------------------
### Changed
* Minor dependency update

3.1.0 - (May 15, 2019)
------------------
### Changed
* Minor dependency update

3.0.0 - (May 13, 2019)
------------------
### Breaking Changes
* Updated z-index for dialog modal to `7000`
* Removed `isFocused` prop
* Removed `releaseFocus` prop
* Removed `requestFocus` prop

### Removed
* Removed test dependency on terra-disclosure-manager
* Removed test dependency on terra-modal-manager

### Added
* Added test dependency on terra-form-select and example using terra-form-select in dialog modal
* Added test dependency on terra-date-picker and example using terra-date-picker in dialog modal
* Added test dependency on terra-popup and example using terra-popup in dialog modal
* Added test dependency on terra-notification-dialog and example using terra-notification-dialog in dialog modal

2.11.0 - (May 7, 2019)
------------------
### Added
* Added new width 560px

### Fixed
* Updated jest snapshot and WDIO screenshots

2.10.0 - (April 24, 2019)
------------------
### Changed
* Moved packages we use solely in doc examples and tests to devDependencies

2.9.0 - (April 16, 2019)
------------------
### Changed
* Minor dependency update

2.8.0 - (April 2, 2019)
------------------
### Changed
* Minor dependency update

2.7.0 - (March 26, 2019)
------------------
### Changed
* Update react/react-dom peer-dependency to latest stable minor release

### Removed
* Removed peer dependency on terra-base
* Removed baseStyles import from terra-base

2.6.0 - (March 20, 2019)
------------------
### Changed
* Doc site 'modal on modal' example heading level changed to correct Section 508 error

2.5.0 - (March 12, 2019)
------------------
### Changed
* Minor dependency update

2.4.0 - (March 5, 2019)
------------------
### Changed
* Minor dependency update

2.3.0 - (February 26, 2019)
------------------
### Changed
* Minor dependency update

2.2.0 - (February 13, 2019)
------------------
### Changed
* Minor dependency update

2.1.0 - (February 5, 2019)
------------------
### Changed
* Minor dependency update

2.0.0 - (January 25, 2019)
------------------
### Breaking Change
* Added new variables for css theming
* Updated terra-core dependencies

1.14.0 - (January 5, 2019)
------------------
### Changed
* Minor dependency update

1.13.0 - (January 2, 2019)
------------------
### Changed
* Updated dev site examples not have duplicate ids.

1.12.0 - (December 5, 2018)
------------------
### Changed
* Minor dependency update

1.11.0 - (December 3, 2018)
------------------
### Changed
* Minor dependency bump

1.10.0 - (November 15, 2018)
------------------
### Changed
* Minor dependency update
* Restructured theme tests into a separate file
* Updated examples to consume terra-disclosure-manager v3.x

### Removed
* Removed dependency on terra-app-delegate package.

1.9.0 - (October 16, 2018)
------------------
### Changed
* Minor dependency update

1.8.0 - (October 8, 2018)
------------------
### Changed
* Updated links in docs on supported features

1.7.0 - (September 25, 2018)
------------------
### Changed
* Minor dependency bump

1.6.0 - (September 5, 2018)
------------------
### Changed
* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

1.5.0 - (August 30, 2018)
------------------
### Changed
* Formatting changes per eslint v5 update

1.4.0 - (August 14, 2018)
------------------
### Changed
* Formatting changes per eslint v4 update

### Fixed
* Lint errors regarding file path resolution

1.3.0 - (July 26, 2018)
------------------
### Changed
* Minor dependency updates

1.2.0 - (July 25, 2018)
------------------
### Fixed
* Fix webpack issue due to referencing src in the docs examples and tests instead of a relative path which would end up hitting lib which has been transpiled.

### Changed
* Add .module extension to SCSS file(s)

1.1.0 - (July 3, 2018)
------------------
### Added
* Change logs to documentation on terra-dev-site

1.0.0 - (June 29, 2018)
------------------
### Added
* Initial stable release
