# Changelog

## Unreleased

## 4.44.1 - (May 22, 2024)

* Changed
  * Minor dependency version bump.

## 4.44.0 - (May 20, 2024)

* Changed
  * Minor dependency version bump.

## 4.43.0 - (July 25, 2023)

* Added
  * Added heights `'280'`, `'380'`, `'460'` and widths `'400'`, `'600'`, `'700'`.

## 4.42.0 - (March 15, 2022)

* Added
  * Migrate docs to terra-framework-docs

## 4.41.0 - (June 8, 2021)

* Changed
  * Minor dependency version bump

## 4.40.0 - (April 6, 2021)

* Changed
  * Updated Jest command

## 4.39.0 - (March 9, 2021)

* Changed
  * Minor dependency version bump

## 4.38.0 - (January 5, 2021)

* Fixed
  * Fixed broken links in documentation.

## 4.37.0 - (November 10, 2020)

* Changed
  * Replaced 'size' with 'dimensions' in `disclose` API.

## 4.36.0 - (October 13, 2020)

* Changed
  * Removed terra-doc-template dependency.

## 4.35.0 - (August 4, 2020)

* Added
  * Added typeConfig property to `disclose` API to support custom properties.

* Changed
  * Updated Changelog format

## 4.34.0 - (July 14, 2020)

* Changed
  * updated `master` references to `main`.

## 4.33.0 - (April 28, 2020)

* Added
  * Added `directory` as a sub attribute to the `repository` attribute in package.json

* Removed
  * Removed "View Component Source Code" from docs in favour of source code badge

## 4.32.0 - (February 25, 2020)

* Added
  * Add `title` options to the `disclose` API provided to disclosed content (see #1013)

## 4.31.0 - (February 18, 2020)

* Added
  * Added generated-themes to .npmignore

## 4.30.0 - (February 4, 2020)

* Changed
  * Organize documentation and convert to mdx

## 4.29.0 - (January 28, 2020)

* Changed
  * Update copyright to include 2020

* Changed
  * Removed dismiss check registration chaining to parent disclosure managers

## 4.28.0 - (December 10, 2019)

* Changed
  * Minor dependency updates

## 4.27.0 - (November 20, 2019)

* Added
  * Added support for application-level disclosure content wrapping

## 4.26.0 - (November 7, 2019)

* Changed
  * Resolved lint warnings for multiple empty lines

## 4.25.0 - (October 21, 2019)

* Changed
  * Fixed typo in disclosure manager docs

## 4.24.0 - (October 16, 2019)

* Changed
  * Minor dependency updates

## 4.23.0 - (October 3, 2019)

* Changed
  * Minor dependency updates

## 4.22.0 - (September 26, 2019)

* Changed
  * Minor dependency updates

## 4.21.0 - (September 19, 2019)

* Changed
  * Removed `details` tag from doc-site
  * Corrected lint warnings

## 4.20.0 - (September 6, 2019)

* Changed
  * Cleaned up imports in examples and test files

* Changed
  * Updated inline documentation for DisclosureManagerHeaderAdapter

## 4.19.0 - (August 21, 2019)

* Changed
  * Replaced Object.assign syntax with Object spread syntax

## 4.18.0 - (August 14, 2019)

* Changed
  * updated package.json test scripts

## 4.17.0 - (July 30, 2019)

* Removed
  * Removed DEPENDENCIES.md file

## 4.16.0 - (July 16, 2019)

* Added
  * Added documentation on required peerDependencies
  * Added DisclosureManagerHeaderAdapter and DisclosureManagerHeaderAdapterContext
  * Adding properties to render-function parameter to facilitate DisclosureManagerHeaderAdapter support

## 4.15.0 - (July 10, 2019)

* Changed
  * Minor dependency version bump

## 4.14.0 - (July 2, 2019)

* Fixed
  * Fixed bug where afterdismiss promise was getting resolved prior to dismissing.

* Changed
  * Export context and delegate

## 4.13.0 - (June 19, 2019)

* Changed
  * Minor dependency version bump

## 4.12.0 - (June 12, 2019)

* Removed
  * Removed node_modules from .npmignore

* Changed
  * Update tests for terra-toolkit v5 and terra-dev-site v5 changes

## 4.11.0 - (May 13, 2019)

* Added
  * Included documentation regarding consumption and dependency management

## 4.10.0 - (May 7, 2019)

* Added
  * Added new width 560px to Disclosure Widths.

## 4.9.0 - (April 24, 2019)

* Changed
  * Moved packages we use solely in doc examples and tests to devDependencies
  * Explicitly documented the required arguments for the disclose behavior

## 4.8.0 - (April 16, 2019)

* Changed
  * Minor dependency update

## 4.7.0 - (April 2, 2019)

* Changed
  * Doc Updates
  * Introduced safety checks for nested disclosure dismissals

## 4.6.0 - (March 26, 2019)

* Changed
  * Update react/react-dom peer-dependency to latest stable minor release

* Removed
  * Removed peer dependency on terra-base
  * Removed baseStyles import from terra-base

## 4.5.0 - (March 20, 2019)

* Changed
  * Doc site upgrade guide markdown altered to correct 508 heading error

## 4.4.0 - (March 5, 2019)

* Changed
  * Updated docs

## 4.3.0 - (February 26, 2019)

* Changed
  * Minor dependency update

## 4.2.0 - (February 13, 2019)

* Removed
  * Removed unused dependencies

## 4.1.0 - (February 5, 2019)

* Changed
  * Minor dependency update

## 4.0.0 - (January 25, 2019)

* Breaking Change
  * Updated terra-core dependencies

## 3.3.0 - (January 5, 2019)

* Changed
  * Minor dependency update

## 3.2.0 - (January 2, 2019)

* Fixed
  * Corrected state management during update lifecycle to prevent undesired disclosure closures

## 3.1.0 - (December 5, 2018)

* Changed
  * Minor dependency update

## 3.0.0 - (December 3, 2018)

* Breaking Change
  * Added Context-based API for consumer-facing DisclosureManager APIs
  * Removed injection of `app` prop into child/disclosure components.

* Added
  * Added exports for withDisclosureManager and disclosureManagerShape
  * Added Upgrade Guide for conversion from v2.x to v3.x

## 2.15.0 - (November 15, 2018)

* Changed
  * Minor dependency update

## 2.14.0 - (October 8, 2018)

* Changed
  * Updated links in docs on supported features

## 2.13.0 - (September 5, 2018)

* Changed
  * Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
  * Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

## 2.12.0 - (August 30, 2018)

* Changed
  * Formatting changes per eslint v5 update

## 2.11.0 - (August 14, 2018)

* Changed
  * Formatting changes per eslint v4 update

* Fixed
  * Lint errors regarding file path resolution

## 2.10.0 - (July 25, 2018)

* Added
  * Added dependency on action-header

* Changed
  * Replaced clinical-action-header with action-header

* Removed
Removed dependency on terra-clinical-action-header

## 2.9.0 - (July 3, 2018)

* Added
  * Change logs to documentation on terra-dev-site

## 2.8.0 - (June 29, 2018)

* Fixed
Fixed reusable test example to be accessible

## 2.7.0 - (June 12, 2018)

* Changed
  * Minor dependency updates

## 2.6.0 - (May 30, 2018)

* Changed
  * Moved examples to src

## 2.5.0 - (May 22, 2018)

* Changed
  * Minor dependency updates

## 2.4.0 - (May 8, 2018)

* Added
  * Available disclosure dimension heights and widths.

## 2.3.0 - (April 30, 2018)

* Changed
  * Minor dependency updates
  * Do not release snapshots to npm

## 2.2.0 - (March 23, 2018)

* Changed
  * Updated documentation

## 2.1.0 - (March 6, 2018)

* Changed
  * Minor dependency updates

## 2.0.0 - (February 21, 2018)

* Changed
  * Updated to use React 16

## 1.0.0 - (February 15, 2018)

* Initial stable release
