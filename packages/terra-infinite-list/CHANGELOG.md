Changelog
=========

Unreleased
----------

3.11.1 - (July 23, 2019)
------------------
* a completely unremarkable update because lerna be lerna

3.11.0 - (July 23, 2019)
------------------
### Changed
* Normalized terra-visually-hidden-text dependency version to match other terra-framework packages

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
* Removed extra inline styles.
* Renamed test and example SCSS files to end with `.module.scss` extension

3.7.0 - (June 19, 2019)
------------------
### Added
* Added functionality to announce loading state to screen readers as progressive list loads more items

### Changed
* Removed all inline styles from Dev-site components and implemented the same styles using external css.

### Removed
* Removed '-ms-overflow-style' style

3.6.0 - (June 12, 2019)
------------------
### Changed
* Update tests for terra-toolkit v5 and terra-dev-site v5 changes
* Update wdio spec to use Terra.describeViewports

### Removed
* Removed node_modules from .npmignore

3.5.0 - (May 7, 2019)
------------------
### Changed
* The consumed terra-list is no longer styled for scrolling, it is added through a containing element

3.4.0 - (April 24, 2019)
------------------
### Changed
* Moved packages we use solely in doc examples and tests to devDependencies

3.3.0 - (April 9, 2019)
------------------
### Changed
* Changed documentation placeholder example colors to meet color contrast ratio

3.2.0 - (April 2, 2019)
------------------
### Added
* Documentation for including section headers and subsection headers to the infinite list.

3.1.0 - (March 26, 2019)
------------------
### Changed
* Update react/react-dom peer-dependency to latest stable minor release

### Removed
* Removed peer dependency on terra-base
* Removed baseStyles import from terra-base

3.0.0 - (February 13, 2019)
------------------
### Breaking Change
* Update to terra-list v4
* Update props to match List's new API, Guides:
* https://github.com/cerner/terra-core/tree/master/packages/terra-list/docs/guides
* Selection state now managed outside of the infinite list
* Expose `SectionHeader` and `SubsectionHeader` for use within list
* Removed `isSelectable` prop
* Removed `selectedIndexes` prop
* Removed `hasChevrons` prop
* Removed ``disableUnselectedItems`` prop
* Removed ``onChange`` prop
* Replaced `isDivided` prop with `dividerStyle`
* Added `paddingStyle` prop
* Added `role` prop

2.1.0 - (February 5, 2019)
------------------
### Changed
* Minor dependency update

2.0.0 - (January 25, 2019)
------------------
### Breaking Change
* Updated terra-core dependencies

### Changed
* Remove use of componentWillReceiveProps

1.18.0 - (January 5, 2019)
------------------
### Changed
* Minor dependency update

1.17.0 - (January 2, 2019)
------------------
### Changed
* Minor dependency update

1.16.0 - (December 5, 2018)
------------------
### Changed
* Minor dependency update

1.15.0 - (December 3, 2018)
------------------
### Changed
* Minor dependency bump

1.14.0 - (November 15, 2018)
------------------
### Changed
* Minor dependency update

1.13.0 - (October 8, 2018)
------------------
### Changed
* Updated links in docs on supported features

1.12.0 - (September 25, 2018)
------------------
### Changed
* Minor dependency bump

1.11.0 - (September 5, 2018)
------------------
### Changed
* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

1.10.0 - (August 30, 2018)
------------------
### Changed
* Formatting changes per eslint v5 update

1.9.0 - (August 13, 2018)
------------------
### Changed
* Formatting changes per eslint v4 update

### Fixed
* Lint errors regarding file path resolution

1.8.0 - (July 25, 2018)
------------------
### Changed
* Add .module extension to SCSS file(s)

1.7.0 - (July 10, 2018)
------------------
### Changed
* Clean up dependencies

1.6.0 - (July 3, 2018)
------------------
### Added
* Change logs to documentation on terra-dev-site

1.5.0 - (June 29, 2018)
------------------
### Changed
* Minor dependency updates

1.4.0 - (June 12, 2018)
------------------
### Changed
* Minor dependency updates

1.3.0 - (May 30, 2018)
------------------
### Changed
* Moved examples to src

### Fixed
* New props of children with different content update correctly
* Double request for items prevented during render

1.2.0 - (May 22, 2018)
------------------
### Changed
* Minor dependency updates

1.1.0 - (April 30, 2018)
------------------
### Changed
* Minor dependency updates
* Do not release snapshots to npm

1.0.0 - (March 23, 2018)
------------------
Initial stable release
