# Changelog

## Unreleased

## 3.44.0 - (May 22, 2024)

* Changed
  * Minor dependency version bump.

## 3.43.0 - (May 20, 2024)

* Changed
  * Minor dependency version bump.

## 3.42.0 - (August 31, 2023)

* Changed
  * Minor dependency version bump

## 3.41.1 - (May 3, 2022)

* Changed
  * Additional terra-infinite-list deprecation notice

## 3.41.0 - (March 15, 2022)

* Added
  * Migrate docs to terra-framework-docs

## 3.40.0 - (September 20, 2021)

* Changed
  * Updated WDIO screenshots due to webpack-config-terra sass upgrade.

## 3.39.0 - (June 15, 2021)

* Changed
  * Mark package as deprecated

## 3.38.0 - (June 8, 2021)

* Changed
  * Minor dependency version bump

## 3.37.0 - (April 6, 2021)

* Changed
  * Updated Jest command

## 3.36.0 - (March 9, 2021)

* Changed
  * Updated to terra-functional-testing.

## 3.35.0 - (January 5, 2021)

* Fixed
  * Fixed broken links in documentation.

## 3.34.0 - (December 8, 2020)

* Changed
  * Updated to support a peer dependency of react-intl v2-v5
  * Update wdio tests to remove deprecated Terra.it helpers

## 3.33.0 - (November 10, 2020)

* Fixed
  * Fixed build failures due to the react/sort-comp rule

## 3.32.0 - (October 13, 2020)

* Changed
  * Replaced references to terra-doc-template with terra-docs

## 3.31.0 - (August 4, 2020)

* Changed
  * Updated Changelog format

## 3.30.0 - (July 14, 2020)

* Fixed
  * Corrected the 'resize observer loop limit reached' error with animation frames.

* Changed
  * updated `master` references to `main`.
  * Minor file changes to comply with eslint rules

## 3.29.0 - (April 28, 2020)

* Added
  * Added `directory` as a sub attribute to the `repository` attribute in package.json

* Changed
  * Update wdio test configuration to use root wdio config

* Removed
  * Removed "View Component Source Code" from docs in favour of source code badge

## 3.28.0 - (March 31, 2020)

* Added
  * Added clinical-lowlight-theme wdio screenshots

## 3.27.0 - (February 25, 2020)

* Changed
  * Update docs to use mdx syntax.

## 3.26.0 - (February 18, 2020)

* Added
  * Added generated-themes to .npmignore

## 3.25.0 - (January 28, 2020)

* Changed
  * Update copyright to include 2020

## 3.24.0 - (January 21, 2020)

* Added
  * Added `ariaLabel` prop.

## 3.23.0 - (December 10, 2019)

* Added
  * Added reference wdio screenshots for "orion-fusion-theme".

## 3.22.0 - (November 18, 2019)

* Added
  * Added documentation for `key` on `Progressive Loading`.

## 3.21.0 - (November 7, 2019)

* Changed
  * Minor dependency updates

## 3.20.0 - (October 30, 2019)

* Added
  * Added refCallback prop to infinite-list to expose ref of Listbox

* Fixed
  * Fixed console warning by preventing `intl` and `progressiveLoadingMessage` props from being passed to the DOM.

## 3.19.0 - (October 16, 2019)

* Changed
  * Minor dependency updates

## 3.18.0 - (October 3, 2019)

* Changed
  * Minor dependency updates

## 3.17.0 - (September 26, 2019)

* Changed
  * Minor dependency updates

## 3.16.0 - (September 19, 2019)

* Changed
  * Removed `details` tag from doc-site.
  * Doc site example module import syntax modified to use package.json name resolution

* Added
  * Added en-CA translations.

## 3.15.0 - (September 6, 2019)

* Fixed
  * Fixed `Cannot read property 'scrollHeight' of null` issue.

* Changed
  * Cleaned up imports in examples and test files

## 3.14.0 - (August 21, 2019)

* Changed
  * Minor dependency version bump

## 3.13.0 - (August 14, 2019)

* Changed
  * updated package.json test scripts

## 3.12.0 - (July 30, 2019)

* Removed
  * Removed DEPENDENCIES.md file

* Changed
  * Fixed linter issue in doc

## 3.11.1 - (July 23, 2019)

* Changed
  * Updated DEPENDENCIES.md doc

## 3.11.0 - (July 23, 2019)

* Changed
  * Normalized terra-visually-hidden-text dependency version to match other terra-framework packages

## 3.10.0 - (July 16, 2019)

* Added
  * Added documentation on required peerDependencies

## 3.9.0 - (July 10, 2019)

* Changed
  * Minor dependency version bump

## 3.8.0 - (July 2, 2019)

* Changed
  * Removed extra inline styles.
  * Renamed test and example SCSS files to end with `.module.scss` extension

## 3.7.0 - (June 19, 2019)

* Added
  * Added functionality to announce loading state to screen readers as progressive list loads more items

* Changed
  * Removed all inline styles from Dev-site components and implemented the same styles using external css.

* Removed
  * Removed '-ms-overflow-style' style

## 3.6.0 - (June 12, 2019)

* Changed
  * Update tests for terra-toolkit v5 and terra-dev-site v5 changes
  * Update wdio spec to use Terra.describeViewports

* Removed
  * Removed node_modules from .npmignore

## 3.5.0 - (May 7, 2019)

* Changed
  * The consumed terra-list is no longer styled for scrolling, it is added through a containing element

## 3.4.0 - (April 24, 2019)

* Changed
  * Moved packages we use solely in doc examples and tests to devDependencies

## 3.3.0 - (April 9, 2019)

* Changed
  * Changed documentation placeholder example colors to meet color contrast ratio

## 3.2.0 - (April 2, 2019)

* Added
  * Documentation for including section headers and subsection headers to the infinite list.

## 3.1.0 - (March 26, 2019)

* Changed
  * Update react/react-dom peer-dependency to latest stable minor release

* Removed
  * Removed peer dependency on terra-base
  * Removed baseStyles import from terra-base

## 3.0.0 - (February 13, 2019)

* Breaking Change
  * Update to terra-list v4
  * Update props to match List's new API, Guides:
  * https://github.com/cerner/terra-core/tree/main/packages/terra-list/docs/guides
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

## 2.1.0 - (February 5, 2019)

* Changed
  * Minor dependency update

## 2.0.0 - (January 25, 2019)

* Breaking Change
  * Updated terra-core dependencies

* Changed
  * Remove use of componentWillReceiveProps

## 1.18.0 - (January 5, 2019)

* Changed
  * Minor dependency update

## 1.17.0 - (January 2, 2019)

* Changed
  * Minor dependency update

## 1.16.0 - (December 5, 2018)

* Changed
  * Minor dependency update

## 1.15.0 - (December 3, 2018)

* Changed
  * Minor dependency bump

## 1.14.0 - (November 15, 2018)

* Changed
  * Minor dependency update

## 1.13.0 - (October 8, 2018)

* Changed
  * Updated links in docs on supported features

## 1.12.0 - (September 25, 2018)

* Changed
  * Minor dependency bump

## 1.11.0 - (September 5, 2018)

* Changed
  * Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
  * Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

## 1.10.0 - (August 30, 2018)

* Changed
  * Formatting changes per eslint v5 update

## 1.9.0 - (August 13, 2018)

* Changed
  * Formatting changes per eslint v4 update

* Fixed
  * Lint errors regarding file path resolution

## 1.8.0 - (July 25, 2018)

* Changed
  * Add .module extension to SCSS file(s)

## 1.7.0 - (July 10, 2018)

* Changed
  * Clean up dependencies

## 1.6.0 - (July 3, 2018)

* Added
  * Change logs to documentation on terra-dev-site

## 1.5.0 - (June 29, 2018)

* Changed
  * Minor dependency updates

## 1.4.0 - (June 12, 2018)

* Changed
  * Minor dependency updates

## 1.3.0 - (May 30, 2018)

* Changed
  * Moved examples to src

* Fixed
  * New props of children with different content update correctly
  * Double request for items prevented during render

## 1.2.0 - (May 22, 2018)

* Changed
  * Minor dependency updates

## 1.1.0 - (April 30, 2018)

* Changed
  * Minor dependency updates
  * Do not release snapshots to npm

## 1.0.0 - (March 23, 2018)

Initial stable release
