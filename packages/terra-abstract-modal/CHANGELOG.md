Changelog
=========

Unreleased
----------

3.21.0 - (February 18, 2020)
------------------
### Added
* Added clinical-lowlight-theme theming files

### Changed
* Update dependency `wicg-inert` from `v2` to `v3`.

3.20.0 - (January 28, 2020)
------------------
### Changed
* Update docs to use mdx syntax
* Update copyright to include 2020

3.19.0 - (January 7, 2020)
------------------
### Changed
* Update screenshots

### Removed
* Removed yarn reference in docs

3.18.0 - (December 16, 2019)
------------------
### Changed
* Update screenshot

3.17.0 - (December 10, 2019)
------------------
### Added
* Added orion-fusion-theme and generated the respective reference wdio screenshots.

3.16.0 - (November 7, 2019)
------------------
### Changed
* Resolved lint warnings for multiple empty lines

3.15.0 - (October 16, 2019)
------------------
### Changed
* Minor dependency updates

### Fixed
* Place focus onto the HTML body element upon modal dismissal in IE.
  * This is done _only_ when the modal is disclosed via a non-HTML element (SVG, for instance).

3.14.0 - (October 3, 2019)
------------------
### Changed
* Minor dependency updates

3.13.0 - (September 26, 2019)
------------------
### Changed
* Minor dependency updates

### Fixed
* Check whether `focus` is defined for the modal trigger element before restoring focus.

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
* Moved running the wicg-inert script to when 'terra-abstract-modal' is mounted

3.10.0 - (August 21, 2019)
------------------
### Fixed
* Ensure aria-hidden attribute on root node is properly removed when modal is closed

3.9.0 - (August 14, 2019)
------------------
### Changed
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
### Added
* Added Node.contains polyfill to better support IE 10 / IE 11

### Fixed
* Fixed issue in IE 10 when trying to pull value from data attribute

3.6.0 - (July 16, 2019)
------------------
### Added
* Added visually hidden text to better indicate beginning and ending of modal dialog
* Added translations for visually hidden text that indicates beginning and end of modal dialog
* Added documentation on required peerDependencies


3.5.0 - (July 10, 2019)
------------------
### Fixed
* Added `data-overlay-count` attribute to root document when overlay is opened
* Added check for `data-modal-count` attribute on root document to track opening and closing of overlays and modals,
  to prevent the removal of the `inert` attribute from the root element if another overlay or abstract modal exists.

### Changed
* When the abstract modal is open on touch devices, it will now focus on the first interactive DOM element within it. This enables focus to be shifted into the modal correctly when using VoiceOver on iOS.

3.4.0 - (July 2, 2019)
------------------
### Changed
* Renamed test and example SCSS files to end with `.module.scss` extension
* Removed conditional logic required to import wicg-inert polyfill

3.3.0 - (June 19, 2019)
------------------
### Added
* Added check to only load inert polyfill if it is not already defined on the Element prototype

### Changed
* Removed all inline styles from Dev-site components and implemented the same styles using external css.
* Update wdio spec to use Terra.describeViewports

3.2.0 - (June 12, 2019)
------------------
### Changed
* Cleaned up Jest/WDIO tests

### Removed
* Removed node_modules from .npmignore

3.1.0 - (May 21, 2019)
------------------
### Changed
* Update tests for terra-toolkit v5 and terra-dev-site v5 changes
* Update tests to use `Terra.should.validateElement()`

3.0.0 - (May 13, 2019)
------------------
### Breaking Changes
* Removed focus-trap from abstract modal
* Replaced with functionality that will disable focus on elements outside of the modal (not including content rendered from the modal in a portal)
* Removed `isFocused` prop
* Removed `fallbackFocus` prop. Focus now always shifts to modal container when opened.

### Added
* Component specific handling for pressing Escape key to close the abstract modal

2.6.0 - (April 24, 2019)
------------------
### Changed
* Moved packages we use solely in doc examples and tests to devDependencies

2.5.0 - (March 26, 2019)
------------------
### Changed
* Update react/react-dom peer-dependency to latest stable minor release
* Updated `rootProp` default value from `[data-terra-base]` to `#root`

### Removed
* Removed peer dependency on terra-base
* Removed baseStyles import from terra-base

2.4.0 - (March 12, 2019)
------------------
### Changed
* Replaced local keyCode values with keycode-js npm package

2.3.0 - (March 5, 2019)
------------------
### Changed
* escapeDeactivates option set on focus trap to prevent escape from breaking focus

2.2.0 - (February 5, 2019)
------------------
### Changed
* Migrate package to the terra-framework repository

2.1.0 - (January 26, 2019)
------------------
### Changed
* Minor dependency version bump

2.0.0 - (January 22, 2019)
------------------
### Changed
* Updated theme variables

1.29.0 - (January 22, 2019)
------------------
### Changed
* Updated dependencies to fix major version bump issues

1.28.0 - (January 22, 2019)
------------------
### Changed
* Updated dependencies to fix major version bump issues

1.27.0 - (January 8, 2019)
------------------
### Changed
* Minor dependency version bump

1.26.0 - (January 2, 2019)
------------------
### Added
* Added support for the fallbackFocus option of FocusTrap

### Changed
* Removed use of componentWillReceiveProps

1.25.1 - (November 20, 2018)
------------------
### Changed
* Patch dependency version bump

1.25.0 - (November 19, 2018)
------------------
### Changed
* Minor dependency version bump

1.24.0 - (November 13, 2018)
------------------
### Changed
* Defaulted role prop to dialog.
* Added aria-modal to the modal.

1.23.0 - (November 9, 2018)
------------------
### Changed
* Minor dependency version bump

1.22.0 - (October 24, 2018)
------------------
### Changed
* Minor dependency version bump

1.21.0 - (October 16, 2018)
------------------
### Changed
* Minor dependency version bump

1.20.0 - (October 8, 2018)
------------------
### Changed
* Upgrade focus-trap-react to ^4.0.1

1.19.0 - (October 2, 2018)
------------------
### Changed
* Minor dependency version bump

1.18.0 - (September 25, 2018)
------------------
### Changed
* Minor dependency version bump
* Use absolute position for modal and modal overlay for iOS stability

1.17.1 - (September 6, 2018)
------------------
### Changed
* Patch dependency version bump

1.17.0 - (September 5, 2018)
------------------
### Changed
* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

1.16.0 - (September 4, 2018)
------------------
### Changed
* Minor dependency version bump

1.15.0 - (August 29, 2018)
------------------
### Changed
* Formatting changes per eslint v5 update

1.14.0 - (August 1, 2018)
------------------
### Changed
* Minor dependency version bump

1.13.0 - (July 19, 2018)
------------------
### Changed
* Add .module extension to SCSS file(s)

1.12.0 - (July 17, 2018)
------------------
### Changed
* Minor dependency version bump
* Formatting changes per eslint v4 update
* Required props no longer set a default prop

1.11.0 - (July 10, 2018)
------------------
### Changed
* Minor dependency version bump

1.10.0 - (June 28, 2018)
------------------
### Changed
* Minor dependency version bump

### Added
* Added change log to the documentation on terra-dev-site

1.9.0 - (June 22, 2018)
------------------
### Changed
* Moved terra-base from dependency to peerDependency

1.8.0 - (June 19, 2018)
------------------
### Changed
* Minor dependency version bump

1.7.0 - (June 12, 2018)
------------------
### Changed
* Updated "test:jest" script to work on windows.
* Converted Nightwatch tests to WebdriverIO.

1.6.0 - (May 30, 2018)
------------------
### Changed
* Updated structure to match terra-dev-site 1.0 and moved doc examples internal.

1.5.0 - (May 25, 2018)
------------------
### Changed
* Minor dependency version bump

1.4.0 - (May 23, 2018)
------------------
### Changed
* Minor dependency version bump

1.3.0 - (May 16, 2018)
------------------
### Changed
* Minor dependency version bump

1.2.0 - (May 9, 2018)
------------------
### Changed
* Add more z-indexes

1.1.0 - (May 2, 2018)
------------------
### Changed
* Updated outdated documentation
* Minor dependency version bump

1.0.0 - (April 20, 2018)
------------------
Initial stable release
