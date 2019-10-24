Changelog
=========

Unreleased
----------
### Breaking Changes
* Added required 'buttonOrder' prop to determine order of accept and reject buttons

### Changed
* 'message' prop has been depreciated, will resolve to 'startMessage'
* 'primaryAction' prop has been depreciated, will resolve to 'acceptAction'
* 'secondaryAction' prop has been depreciated, will resolve to 'rejectAction'

### Added
* Added a 'startMessage' string prop that will display a message after 'title'
* Added a 'content' node prop that will display the given node in the Dialog after 'startMessage'
* Added an 'endMessage' string prop that will display a message after 'content'
* Added 'acceptAction' prop that takes an object with a 'text' string and 'onClick' function attributes
* Added 'rejectAction' prop that takes an object with a 'text' string and 'onClick' function attributes
* Added a 'emphasizedAction' oneOf to choose between emphasizing the accept button, reject button, or neither.

3.16.0 - (October 21, 2019)
------------------
### Changed
* Minor dependency updates

3.15.0 - (October 16, 2019)
------------------
### Changed
* Minor dependency updates

### Fixed
* Added terra-breakpoints to dependencies for the project

3.14.0 - (October 3, 2019)
------------------
### Changed
* Minor dependency updates

### Fixed
* Removed extra comma from scss file.

3.13.0 - (September 26, 2019)
------------------
### Changed
* Minor dependency updates

### Changed
* Reverted Placeholder import in example files.

3.12.0 - (September 19, 2019)
------------------
### Changed
* Removed `details` tag from doc-site.
* Doc site example module import syntax modified to use package.json name resolution

### Added
* Added en-CA translations.

3.11.0 - (September 6, 2019)
------------------
### Changed
* Cleaned up imports in examples and test files
* Updated `keycode-js` from `v1.0.4` to `v2.0.1`

3.10.0 - (August 21, 2019)
------------------
### Changed
* Updated bracket formatting in test files to match eslint 6 rules.

3.9.0 - (August 14, 2019)
------------------
### Changed
* Update wdio snapshots with new button focus outline styles
* Updated to interface with react-intl's `FormattedMessage` rather than old React Context API.
* updated package.json test scripts

3.8.0 - (July 30, 2019)
------------------
### Removed
* Removed DEPENDENCIES.md file

3.7.1 - (July 23, 2019)
------------------
### Changed
* Updated DEPENDENCIES.md doc

3.7.0 - (July 23, 2019)
------------------
### Changed
* Minor dependency version bump

3.6.0 - (July 16, 2019)
------------------
### Added
* Added documentation on required peerDependencies

3.5.0 - (July 10, 2019)
------------------
### Changed
* Minor dependency version bump

3.4.0 - (July 2, 2019)
------------------
### Fixed
* Updated max-width to be `800px` for screen size greater than 768px.

### Changed
* Update pop up and modal manager tests to not test accessibility for elements behind the overlay
* Renamed test and example SCSS files to end with `.module.scss` extension

3.3.0 - (June 19, 2019)
------------------
### Changed
* Update wdio spec to use Terra.describeViewports

3.2.0 - (June 12, 2019)
------------------
### Removed
* Removed node_modules from .npmignore

### Changed
* Update tests for terra-toolkit v5 and terra-dev-site v5 changes

### Fixed
* Pressing escape key no longer disables the focus trap in notification dialog, users must make a selection of one of the notification dialog buttons to dismiss the notification dialog

3.1.0 - (May 21, 2019)
------------------
### Changed
* Minor dependency update

3.0.0 - (May 13, 2019)
------------------
### Breaking Changes
* Removed `releaseFocus` prop
* Removed `requestFocus` prop

### Added
* Added component specific handler for Escape key usage with Notification Dialog
* Added focus trap to Notification Dialog

2.12.0 - (May 7, 2019)
------------------
### Fixed
* Updated jest snapshot

2.11.0 - (April 24, 2019)
------------------
### Changed
* Moved packages we use solely in doc examples and tests to devDependencies

2.10.0 - (April 16, 2019)
------------------
### Changed
* Minor dependency update

2.9.0 - (April 9, 2019)
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
* Update Jest tests to use terra-enzyme-intl

2.5.0 - (March 12, 2019)
------------------
### Added
* Added missing nl-BE translation

2.4.0 - (March 5, 2019)
------------------
### Changed
* Minor dependency update

2.3.0 - (February 26, 2019)
------------------
### Added
* Added en-AU translations

### Changed
* Update wdio spec to set the viewport at the top-level instead of in each test's before hook for faster execution

2.2.0 - (February 13, 2019)
------------------
### Changed
* Minor dependency update

2.1.0 - (February 5, 2019)
------------------
### Fixed
* Fixed focus trap management

2.0.0 - (January 25, 2019)
------------------
### Breaking Change
* Updated variable names to match new naming standard
* Added new variables for css theming
* Updated terra-core dependencies

1.17.0 - (January 5, 2019)
------------------
### Removed
* Removed onRequestClose prop.

1.16.0 - (January 2, 2019)
------------------
### Changed
* Updated dev site examples to not have duplicate ids.
* Updated dev site to have logically nested headings.
* Updated dev site examples to not use form tags.

1.15.0 - (December 5, 2018)
------------------
### Changed
* Minor dependency update

1.14.0 - (December 3, 2018)
------------------
### Added
* Added missing ar, es-ES, es-US, fr-FR, and pt-BR translations.

### Changed
* Minor improvements to doc examples
* Updated examples to consume terra-disclosure-manager v3.x

### Removed
* Removed dependency on terra-app-delegate package.

1.13.0 - (November 15, 2018)
------------------
### Changed
* Minor dependency update

1.12.0 - (October 30, 2018)
------------------
### Changed
* Update mixin import to be more explicit

### Fixed
* Fixed icon display in notification dialog in IE

1.11.0 - (October 16, 2018)
------------------
### Changed
* Minor dependency update

1.10.0 - (October 8, 2018)
------------------
### Changed
* Updated links in docs on supported features

1.9.0 - (September 25, 2018)
------------------
### Changed
* Minor dependency bump

1.8.0 - (September 5, 2018)
------------------
### Changed
* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

1.7.0 - (August 30, 2018)
------------------
### Changed
* Formatting changes per eslint v5 update

1.6.0 - (August 13, 2018)
------------------
### Changed
* Formatting changes per eslint v4 update

### Fixed
* Lint errors regarding file path resolution

1.5.0 - (July 26, 2018)
------------------
### Changed
* Minor dependency updates

1.4.0 - (July 25, 2018)
------------------
### Added
* Added `sv` and `sv-SE` translations

### Changed
* Add .module extension to SCSS file(s)

1.3.0 - (July 17, 2018)
------------------
### Fixed
* Removed usage of CSS `initial` value because Internet Explorer does not support it

1.2.0 - (July 3, 2018)
------------------
### Changed
* Minor dependency updates

1.1.0 - (June 29, 2018)
------------------
### Fixed
* Fixed naming of aria-label prop being passed to AbstractModal
### Added
* Change logs to documentation on terra-dev-site

1.0.0 - (June 19, 2018)
------------------
* Initial stable release
