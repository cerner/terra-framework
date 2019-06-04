ChangeLog
=========

Unreleased
----------
### Changed
* Update tests for terra-toolkit v5 and terra-dev-site v5 changes

4.11.0 - (May 13, 2019)
------------------
### Added
* Included documentation regarding consumption and dependency management

4.10.0 - (May 7, 2019)
------------------
### Added
* Added new width 560px to Disclosure Widths.

4.9.0 - (April 24, 2019)
------------------
### Changed
* Moved packages we use solely in doc examples and tests to devDependencies
* Explicitly documented the required arguments for the disclose behavior

4.8.0 - (April 16, 2019)
------------------
### Changed
* Minor dependency update

4.7.0 - (April 2, 2019)
------------------
### Changed
* Doc Updates
* Introduced safety checks for nested disclosure dismissals

4.6.0 - (March 26, 2019)
------------------
### Changed
* Update react/react-dom peer-dependency to latest stable minor release

### Removed
* Removed peer dependency on terra-base
* Removed baseStyles import from terra-base

4.5.0 - (March 20, 2019)
------------------
### Changed
* Doc site upgrade guide markdown altered to correct 508 heading error

4.4.0 - (March 5, 2019)
------------------
### Changed
* Updated docs

4.3.0 - (February 26, 2019)
------------------
### Changed
* Minor dependency update

4.2.0 - (February 13, 2019)
------------------
### Removed
* Removed unused dependencies

4.1.0 - (February 5, 2019)
------------------
### Changed
* Minor dependency update

4.0.0 - (January 25, 2019)
------------------
### Breaking Change
* Updated terra-core dependencies

3.3.0 - (January 5, 2019)
------------------
### Changed
* Minor dependency update

3.2.0 - (January 2, 2019)
------------------
### Fixed
* Corrected state management during update lifecycle to prevent undesired disclosure closures

3.1.0 - (December 5, 2018)
------------------
### Changed
* Minor dependency update

3.0.0 - (December 3, 2018)
------------------
### Breaking Change
* Added Context-based API for consumer-facing DisclosureManager APIs
* Removed injection of `app` prop into child/disclosure components.

### Added
* Added exports for withDisclosureManager and disclosureManagerShape
* Added Upgrade Guide for conversion from v2.x to v3.x

2.15.0 - (November 15, 2018)
------------------
### Changed
* Minor dependency update

2.14.0 - (October 8, 2018)
------------------
### Changed
* Updated links in docs on supported features

2.13.0 - (September 5, 2018)
------------------
### Changed
* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

2.12.0 - (August 30, 2018)
------------------
### Changed
* Formatting changes per eslint v5 update

2.11.0 - (August 14, 2018)
------------------
### Changed
* Formatting changes per eslint v4 update

### Fixed
* Lint errors regarding file path resolution

2.10.0 - (July 25, 2018)
------------------
### Added
* Added dependency on action-header

### Changed
* Replaced clinical-action-header with action-header

### Removed
Removed dependency on terra-clinical-action-header

2.9.0 - (July 3, 2018)
------------------
### Added
* Change logs to documentation on terra-dev-site

2.8.0 - (June 29, 2018)
------------------
### Fixed
Fixed reusable test example to be accessible

2.7.0 - (June 12, 2018)
------------------
### Changed
* Minor dependency updates

2.6.0 - (May 30, 2018)
------------------
### Changed
* Moved examples to src

2.5.0 - (May 22, 2018)
------------------
### Changed
* Minor dependency updates

2.4.0 - (May 8, 2018)
------------------
### Added
* Available disclosure dimension heights and widths.

2.3.0 - (April 30, 2018)
------------------
### Changed
* Minor dependency updates
* Do not release snapshots to npm

2.2.0 - (March 23, 2018)
------------------
### Changed
* Updated documentation

2.1.0 - (March 6, 2018)
------------------
### Changed
* Minor dependency updates

2.0.0 - (February 21, 2018)
------------------
### Changed
* Updated to use React 16

1.0.0 - (February 15, 2018)
------------------
* Initial stable release
