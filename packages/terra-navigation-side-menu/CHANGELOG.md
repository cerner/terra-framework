Changelog
=========

Unreleased
----------

2.26.0 - (February 18, 2020)
------------------
### Added
* Added clinical-lowlight-theme theming files

2.25.0 - (January 28, 2020)
------------------
### Changed
* Update copyright to include 2020

2.24.0 - (December 10, 2019)
------------------
### Added
* Added reference wdio screenshots for "orion-fusion-theme".

2.23.0 - (November 7, 2019)
------------------
### Changed
* Minor dependency updates

2.22.0 - (October 16, 2019)
------------------
### Changed
* Minor dependency updates

2.21.0 - (October 3, 2019)
------------------
### Changed
* Minor dependency updates

2.20.0 - (September 26, 2019)
------------------
### Changed
* Minor dependency updates

2.19.0 - (September 19, 2019)
------------------
### Changed
* Removed `details` tag from doc-site.
* Doc site example module import syntax modified to use package.json name resolution

### Added
* Added en-CA translations.

2.18.0 - (September 6, 2019)
------------------
### Changed
* Cleaned up imports in examples and test files
* Updated `keycode-js` from `v1.0.4` to `v2.0.1`

2.17.0 - (August 21, 2019)
------------------
### Changed
* Cleaned up ESLint comments

2.16.0 - (August 14, 2019)
------------------
### Changed
* updated package.json test scripts

2.15.0 - (July 30, 2019)
------------------
### Removed
* Removed DEPENDENCIES.md file

2.14.1 - (July 23, 2019)
------------------
### Changed
* Updated DEPENDENCIES.md doc

2.14.0 - (July 23, 2019)
------------------
### Changed
* Replaced visually-hidden-text styles with terra-visually-hidden-text component
* Normalized terra-visually-hidden-text dependency version to match other terra-framework packages

2.13.0 - (July 16, 2019)
------------------
### Added
* Added documentation on required peerDependencies

2.12.0 - (July 10, 2019)
------------------
### Added
* Added `aria-haspopup` attribute to menu items that contain sub-navigation

2.11.0 - (July 2, 2019)
------------------
### Changed
* Renamed test and example SCSS files to end with `.module.scss` extension
* Support JAWS and Voiceover on menu item selection.
* Add translations for "selected" string announced by screenreaders

2.10.0 - (June 19, 2019)
------------------
### Changed
* Removed all inline styles and implemented the same styles using external css.

2.9.0 - (June 12, 2019)
------------------
### Removed
* Removed node_modules from .npmignore

### Added
* Added ARIA landmark roles

### Changed
* Update tests for terra-toolkit v5 and terra-dev-site v5 changes

### Fixed
* Default --terra-navigation-side-menu-item-font-weight to normal. Fixes bug in Edge.

2.8.0 - (May 21, 2019)
------------------
### Changed
* Minor dependency update

2.7.0 - (May 15, 2019)
------------------
### Added
* Added custom font-weight property, `--terra-navigation-side-menu-item-font-weight`, for MenuItem component (defaults to 'inherit')

2.6.0 - (May 7, 2019)
------------------
### Fixed
* Updated WDIO screenshots

2.5.0 - (April 24, 2019)
------------------
### Changed
* Moved packages we use solely in doc examples and tests to devDependencies

2.4.0 - (March 26, 2019)
------------------
### Changed
* Update react/react-dom peer-dependency to latest stable minor release

### Removed
* Removed peer dependency on terra-base
* Removed baseStyles import from terra-base

2.3.0 - (March 12, 2019)
------------------
### Changed
* Replaced local keyCode values with keycode-js npm package

2.2.0 - (February 13, 2019)
------------------
### Changed
* Removed dependency on terra-list

2.1.0 - (February 5, 2019)
------------------
### Changed
* Minor dependency update

2.0.0 - (January 25, 2019)
------------------
### Breaking Change
* Updated variable names to match new naming standard
* Added new variables for css theming
* Removed variables for css theming
* Updated terra-core dependencies

### Changed
* Remove use of componentWillReceiveProps

1.20.0 - (January 5, 2019)
------------------
### Changed
* Minor dependency update

1.19.0 - (January 2, 2019)
------------------
### Fixed
* Updated Data-menu-item attribute value of Menuitem to Unique key value

### Added
* Add optional toolbar prop that displays below the side menu action header

1.18.0 - (December 5, 2018)
------------------
### Changed
* Minor dependency update

1.17.0 - (December 3, 2018)
------------------
### Changed
* Wdio tests changed to use themeCombinationOfCustomProperties

1.16.0 - (November 15, 2018)
------------------
### Changed
* Minor dependency update

1.15.0 - (October 8, 2018)
------------------
### Changed
* Updated links in docs on supported features

1.14.0 - (September 25, 2018)
------------------
### Changed
* Removed terra-base duplicate from dependencies (kept instance in peerDependencies)

1.13.0 - (September 5, 2018)
------------------
### Changed
* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

1.12.0 - (August 30, 2018)
------------------
### Changed
* Formatting changes per eslint v5 update

1.11.0 - (August 13, 2018)
------------------
### Changed
* Formatting changes per eslint v4 update

### Fixed
* Lint errors regarding file path resolution

1.10.0 - (July 25, 2018)
------------------
### Changed
* Add .module extension to SCSS file(s)

1.9.0 - (July 3, 2018)
------------------
### Added
* Change logs to documentation on terra-dev-site

1.8.0 - (June 29, 2018)
------------------
### Changed
* Minor dependency updates

1.7.0 - (June 12, 2018)
------------------
### Changed
* Minor dependency updates

1.6.0 - (June 5, 2018)
------------------
### Changed
* Minor dependency updates

1.5.0 - (May 30, 2018)
------------------
### Changed
* Moved examples to src

1.4.0 - (May 22, 2018)
------------------
### Changed
* Minor dependency updates

1.3.0 - (May 8, 2018)
------------------
### Changed
* Adjusted themable styles for selected item background color/image styles

1.2.0 - (April 30, 2018)
------------------
### Changed
* Added theme styles to support legacy look
* Replaced use of action-header component with terra-core's action-header
* Minor dependency updates
* Do not release snapshots to npm

1.1.0 - (March 23, 2018)
------------------
### Changed
* Changed hover styling to account for IE10.
* Added data attributes to rendered content for automated testing.

1.0.0 - (March 6, 2018)
------------------
* Initial stable release
* Update focus styling to match ux ask
