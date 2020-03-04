Changelog
=========

Unreleased
----------
6.28.0 - (March 3, 2020)
------------------
### Changed
* Update jest snapshot & wdio screenshots

6.27.0 - (February 25, 2020)
------------------
### Changed
* Minor dependency version bump

6.26.0 - (February 18, 2020)
------------------
### Added
* Added clinical-lowlight-theme theming files

6.25.0 - (February 4, 2020)
------------------
### Changed
* Update link to docs for Disclosure Manager's API

6.24.0 - (January 28, 2020)
------------------
### Changed
* Update docs to use MDX syntax
* Update copyright to include 2020

6.23.0 - (January 7, 2020)
------------------
### Changed
* Reenabled some wdio tests
* Changed Axe contrast check on wdio test to improve reliability

6.22.0 - (December 16, 2019)
------------------
### Changed
* Minor dependency version bump

### Added
* Added themeable background-color property to ModalManager's modal.

6.21.0 - (December 10, 2019)
------------------
### Added
* Added orion-fusion-theme and generated the respective reference wdio screenshots.

6.20.0 - (November 20, 2019)
------------------
### Added
* Added support for application-level modal content wrapping

6.19.0 - (November 18, 2019)
------------------
### Changed
* Minor dependency updates

6.18.0 - (November 7, 2019)
------------------
### Changed
* Minor dependency updates

6.17.0 - (October 30, 2019)
------------------
### Changed
* Minor dependency updates

6.16.0 - (October 21, 2019)
------------------
### Changed
* Reenabled tests since form-select updated to fix issue.
* Updated wdio screenshots

6.15.0 - (October 16, 2019)
------------------
### Changed
* Minor dependency updates

### Fixed
* Fixed some tests that were consuming changes to terra-form-select

6.14.0 - (October 3, 2019)
------------------
### Changed
* Minor dependency updates

6.13.0 - (September 26, 2019)
------------------
### Changed
* Minor dependency updates

6.12.0 - (September 19, 2019)
------------------
### Changed
* Removed `details` tag from doc-site.
* Doc site example module import syntax modified to use package.json name resolution

6.11.0 - (September 6, 2019)
------------------
### Changed
* Cleaned up imports in examples and test files

6.10.0 - (August 21, 2019)
------------------
### Changed
* Disabled max-classes-per-file eslint rule in doc example

6.9.0 - (August 14, 2019)
------------------
### Changed
* updated package.json test scripts

6.8.0 - (July 30, 2019)
------------------
### Removed
* Removed DEPENDENCIES.md file

6.7.1 - (July 23, 2019)
------------------
### Changed
* Updated DEPENDENCIES.md doc

6.7.0 - (July 23, 2019)
------------------
### Changed
* When the modal manager is open on touch devices, it will now focus on the first interactive DOM element within it. This enables focus to be shifted into the modal correctly when using VoiceOver on iOS.

### Added
* Added support for DisclosureManagerHeaderAdapter integration
* Added `disclosureAccessory` prop

6.6.0 - (July 16, 2019)
------------------
### Added
* Added documentation on required peerDependencies

6.5.0 - (July 10, 2019)
------------------
### Changed
* Minor dependency version bump

6.4.0 - (July 2, 2019)
------------------
### Changed
* Renamed test and example SCSS files to end with `.module.scss` extension

6.3.0 - (June 19, 2019)
------------------
### Removed
* Removed devDependency on terra-responsive-element

6.2.0 - (June 12, 2019)
------------------
### Removed
* Removed node_modules from .npmignore

### Changed
* Removed all inline styles from Dev-site components and implemented the same styles using external css.
* Update tests for terra-toolkit v5 and terra-dev-site v5 changes

6.1.0 - (May 21, 2019)
------------------
### Changed
* Minor dependency update

6.0.0 - (May 13, 2019)
------------------
### Breaking Change
* Removed terra-disclosure-manager dependency
* Added terra-disclosure-manager peer-dependency

5.11.0 - (May 7, 2019)
------------------
### Added
* Added new width 560px

5.10.0 - (April 24, 2019)
------------------
### Changed
* Moved packages we use solely in doc examples and tests to devDependencies

5.9.0 - (April 16, 2019)
------------------
### Changed
* Minor dependency update

5.8.0 - (April 2, 2019)
------------------
### Changed
* Doc Updates

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
* Minor dependency update

5.5.0 - (March 12, 2019)
------------------
### Removed
* Removed dependency terra-heading

5.4.0 - (March 5, 2019)
------------------
### Changed
* Updated docs

5.3.0 - (February 26, 2019)
------------------
### Changed
* Minor dependency update

5.2.0 - (February 5, 2019)
------------------
### Changed
* Minor dependency update

5.1.0 - (February 5, 2019)
------------------
### Changed
* Minor dependency update

5.0.0 - (January 25, 2019)
------------------
### Breaking Change
* Updated terra-core dependencies

4.3.0 - (January 5, 2019)
------------------
### Changed
* Minor dependency update

4.2.0 - (January 2, 2019)
------------------
### Changed
* Updated dev site examples to not use forms or have duplicate ids

4.1.0 - (December 5, 2018)
------------------
### Changed
* Minor dependency update

4.0.0 - (December 3, 2018)
------------------
### Breaking Change
* Consumed DisclosureManager v3.0 - Updated to Context-provided consumer API vs. prop injection
* Removed `withModalManager()` export to prevent confusion with the new context changes

### Removed
* Removed dependency on terra-app-delegate package

3.14.0 - (November 15, 2018)
------------------
### Changed
* Minor dependency update
* Update jest snapshots

3.13.0 - (October 8, 2018)
------------------
### Changed
* Updated links in docs on supported features

3.12.0 - (September 25, 2018)
------------------
### Changed
* Removed terra-base duplicate from devDependencies

3.11.0 - (September 5, 2018)
------------------
### Changed
* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

3.10.0 - (August 30, 2018)
------------------
### Changed
* Formatting changes per eslint v5 update

3.9.0 - (August 13, 2018)
------------------
### Changed
* Formatting changes per eslint v4 update

### Fixed
* Lint errors regarding file path resolution

### Removed
* Unused proptype in example

3.8.0 - (July 26, 2018)
------------------
### Changed
* Updated to use terra-responsive-element v3

3.7.0 - (July 25, 2018)
------------------
### Changed
* Add .module extension to SCSS file(s)

3.6.0 - (July 3, 2018)
------------------
### Added
* Change logs to documentation on terra-dev-site

3.5.0 - (June 29, 2018)
------------------
### Changed
* Minor dependency updates

3.4.0 - (June 12, 2018)
------------------
### Changed
* Minor dependency updates

3.3.0 - (June 5, 2018)
------------------
### Changed
* Minor dependency updates

3.2.0 - (May 30, 2018)
------------------
### Changed
* Moved examples to src

3.1.0 - (May 22, 2018)
------------------
### Changed
* Minor dependency updates

3.0.0 - (May 8, 2018)
------------------
### Breaking Change
* Major version bump. Removing redux support.

### Changed
* Dimension handling to the modal manager.
* [Upgrade Guide For Modal][1]

2.5.0 - (April 30, 2018)
------------------
### Changed
* Minor dependency updates
* Do not release snapshots to npm

2.4.0 - (April 13, 2018)
------------------
### Changed
* Minor dependency updates

2.3.0 - (April 10, 2018)
-----------------
### Changed
* Add specificity to selectors to override values from terra-modal.

2.2.0 - (March 23, 2018)
-----------------
### Changed
* Minor dependency updates

2.1.0 - (March 6, 2018)
------------------
### Added
* withModalManager higher-order component generator

### Changed
* Updated snapshots tests to match new structure of slide group.

2.0.0 - (February 21, 2018)
------------------
### Changed
* Updated to use React 16

1.20.0 - (February 15, 2018)
------------------
### Changed
* Use DisclosureManager for state management and presentation.

### Deprecated
* Deprecate Redux APIs

1.19.0 - (January 23, 2018)
------------------
* First release in new repository

1.18.0 - (January 18, 2018)
------------------
### Changed
* Minor version bump

1.17.0 - (January 5, 2018)
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

1.13.0 - (October 6, 2017)
------------------
### Changed
* Minor version bump

1.12.0 - (September 26, 2017)
------------------
### Removed
* Remove stylelint-disable selector-class-pattern

1.11.0 - (September 19, 2017)
------------------
### Changed
* Minor version bump

1.10.0 - (September 12, 2017)
------------------
### Changed
* Minor version bump

1.9.0 - (September 7, 2017)
------------------
### Changed
* Minor version bump

1.8.0 - (September 5, 2017)
------------------
### Changed
* Import breakpoints from CSS modules
* Update nightwatch tests and test scripts.

1.7.0 - (August 31, 2017)
------------------
### Changed
* Minor version bump

1.6.0 - (August 15, 2017)
------------------
### Changed
* Minor version bump

1.5.0 - (August 8, 2017)
------------------
### Added
* Added fullscreen size option

### Fixed
* Correcting container class name

1.4.0 - (August 1, 2017)
------------------
### Changed
* Minor version bump

1.3.0 - (August 1, 2017)
------------------
### Added
* Added gainFocus and loseFocus actions to support trapping and releasing focus in the modal manager.

### Changed
* Converted component to use CSS modules

1.2.0 - (July 26, 2017)
------------------
### Changed
* Updated spacing around react-docgen comments
* Update nightwatch tests for Slide Group conversion to CSS modules

1.1.0 - (July 18, 2017)
------------------
### Changed
* Updated nightwatch test scripts

### Removed
* Removed nightwatch.config file

### Fixed
* Removed unnecessary layout styles (Issue #610)

1.0.0 - (June 28, 2017)
------------------
Initial stable release

[1]: https://github.com/cerner/terra-framework/tree/master/packages/terra-modal/docs/UPGRADEGUIDE.md
