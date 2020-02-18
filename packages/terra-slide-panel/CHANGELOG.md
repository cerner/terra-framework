Changelog
=========

Unreleased
----------
### Added
* Added clinical-lowlight-theme theming files

3.22.0 - (January 28, 2020)
------------------
### Changed
* Update copyright to include 2020

3.21.0 - (December 10, 2019)
------------------
### Added
* Added orion-fusion-theme and generated the respective reference wdio screenshots.

3.20.0 - (November 7, 2019)
------------------
### Changed
* Resolved lint warnings for multiple empty lines

3.19.0 - (October 30, 2019)
------------------
### Added
* Added `aria-label` to the "Main" and "Panel" containers.
* Added `mainAriaLabel` and `panelAriaLabel` as optional props.

3.18.0 - (October 16, 2019)
------------------
### Changed
* Minor dependency updates

3.17.0 - (October 3, 2019)
------------------
### Changed
* Minor dependency updates

3.16.0 - (September 26, 2019)
------------------
### Changed
* Minor dependency updates

3.15.0 - (September 19, 2019)
------------------
### Changed
* Removed `details` tag from doc-site.
* Doc site example module import syntax modified to use package.json name resolution

3.14.0 - (September 6, 2019)
------------------
### Changed
* Cleaned up imports in examples and test files

3.13.0 - (August 21, 2019)
------------------
### Changed
* Cleaned up ESLint comments

3.12.0 - (August 14, 2019)
------------------
### Changed
* updated package.json test scripts

3.11.0 - (July 30, 2019)
------------------
### Removed
* Removed DEPENDENCIES.md file

3.10.0 - (July 16, 2019)
------------------
### Added
* Added documentation on required peerDependencies

3.9.0 - (July 10, 2019)
------------------
### Changed
* Minor dependency version bump

3.8.0 - (July 2, 2019)
------------------
### Changed
* Renamed test and example SCSS files to end with `.module.scss` extension

3.7.0 - (June 19, 2019)
------------------
### Removed
* Removed '-ms-overflow-style' style

### Fixed
* Corrected to allow Slide Panel's DOM order to flex based on the 'panelPosition' prop.

3.6.0 - (June 12, 2019)
------------------
### Removed
* Removed node_modules from .npmignore

### Changed
* Removed all inline styles and implemented the same styles using external css.

### Changed
* Update tests for terra-toolkit v5 and terra-dev-site v5 changes
* Update wdio specs to use Terra.describeViewports

3.5.0 - (April 24, 2019)
------------------
### Changed
* Moved packages we use solely in doc examples and tests to devDependencies

3.4.0 - (April 18, 2019)
------------------
### Changed
* Remove transition listener logic. Replace with componentDidUpdate comparison.

### Fixed
* Set outline to none on main + panel.

3.3.0 - (April 9, 2019)
------------------
### Fixed
* Setting Focus to slide panel's panel content on open.

3.2.0 - (March 26, 2019)
------------------
### Changed
* Update react/react-dom peer-dependency to latest stable minor release

### Removed
* Removed peer dependency on terra-base
* Removed baseStyles import from terra-base

### Removed
* Removed peer dependency on terra-base
* Removed baseStyles import from terra-base

3.1.0 - (February 5, 2019)
------------------
### Changed
* Minor dependency update

3.0.0 - (January 25, 2019)
------------------
### Breaking Change
* Updated variable names to match new naming standard
* Added new variables for css theming
* Removed variables for css theming
* Updated terra-core dependencies

2.25.0 - (January 5, 2019)
------------------
### Changed
* Minor dependency update

2.24.0 - (January 2, 2019)
------------------
### Changed
* Minor dependency update

2.23.0 - (December 5, 2018)
------------------
### Changed
* Minor dependency update

2.22.0 - (December 3, 2018)
------------------
### Changed
* Wdio tests changed to use themeCombinationOfCustomProperties

### Fixed
* Slide panel's aria-hidden value when the panel is toggled

2.21.0 - (November 15, 2018)
------------------
### Changed
* Minor dependency update

2.20.0 - (October 24, 2018)
------------------
### Changed
* Updated the controlled slidepanel example's focus management

2.19.0 - (October 16, 2018)
------------------
### Changed
* Reordered DOM structure to change tab order

2.18.0 - (October 8, 2018)
------------------
### Changed
* Upgrade focus-trap-react version to ^4.0.1

2.17.0 - (September 25, 2018)
------------------
### Changed
* Minor dependency bump

2.16.0 - (September 5, 2018)
------------------
### Changed
* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

2.15.0 - (August 30, 2018)
------------------
### Changed
* Formatting changes per eslint v5 update

2.14.0 - (August 13, 2018)
------------------
### Changed
* Formatting changes per eslint v4 update

### Fixed
* Lint errors regarding file path resolution

2.13.0 - (July 25, 2018)
------------------
### Changed
* Add .module extension to SCSS file(s)

2.12.0 - (July 10, 2018)
------------------
### Changed
* Clean up dependencies

2.11.0 - (July 3, 2018)
------------------
### Added
* Change logs to documentation on terra-dev-site

2.10.0 - (June 29, 2018)
------------------
### Changed
* Minor dependency updates

2.9.0 - (June 12, 2018)
------------------
### Changed
* Minor dependency updates

2.8.0 - (May 30, 2018)
------------------
### Changed
* Moved examples to src

2.7.0 - (May 22, 2018)
------------------
### Changed
* Minor dependency updates

2.6.0 - (April 30, 2018)
------------------
### Changed
* Minor dependency updates
* Do not release snapshots to npm

2.5.0 - (April 13, 2018)
------------------
### Changed
* Minor dependency updates

2.4.0 - (April 10, 2018)
-----------------
### Changed
* Allow Slide Panel Background Color to be Themeable

2.3.0 - (April 3, 2018)
------------------
### Changed
* Miragte package to terra-framework

2.2.0 - (March 6, 2018)
------------------
### Removed
* Removed props-table script from package.json

2.1.0 - (February 26, 2018)
------------------
### Fixed
* Offscreen tab access in the panel removed

### Changed
* Updated aria hidden to use the string entry

2.0.1 - (February 13, 2018)
------------------
### Changed
* Updated peerDependencies

2.0.0 - (February 12, 2018)
------------------
### Changed
* Updated to use React 16

### Fixed
* CSS bug in calculated squish behavior

1.16.0 - (February 1, 2018)
------------------
### Changed
* Minor version bump

1.15.0 - (January 18, 2018)
------------------
### Changed
* Minor version bump

1.14.0 - (January 5, 2018)
------------------
### Changed
* Minor version bump

1.13.0 - (November 28, 2017)
------------------
### Changed
* Minor version bump

1.12.0 - (November 16, 2017)
------------------
### Changed
* Minor version bump

1.11.0 - (October 6, 2017)
------------------
### Changed
* Minor version bump

1.10.0 - (September 26, 2017)
------------------
### Changed
* Minor version bump

1.9.0 - (September 19, 2017)
------------------
### Changed
* Minor version bump

1.8.0 - (September 12, 2017)
------------------
### Changed
* Minor version bump

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
* Converted component to use CSS modules

1.1.0 - (July 18, 2017)
------------------
### Changed
* Updated nightwatch test scripts

### Removed
* Removed nightwatch.config file

1.0.0 - (June 28, 2017)
------------------
Initial stable release
