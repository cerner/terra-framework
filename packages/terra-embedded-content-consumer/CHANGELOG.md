# Changelog

## Unreleased

## 3.43.0 - (December 18, 2023)

* Changed
  * Minor dependency version bump.

## 3.42.1 - (December 5, 2023)

* Fixed
  * Fixed XFC initialization for the Embedded Content Consumer examples.

## 3.42.0 - (December 1, 2023)

* Changed
  * Minor dependency version bump

## 3.41.0 - (November 29, 2023)

* Added
  * Added documentation relating to accessibility guidance for Embedded Content Consumer props.

## 3.40.0 - (November 9, 2023)

* Added
  * Added screenreader support to announce context of embedded iframe content.
  * Added visual focus indicator on the iframe when the content doesn't have any interactable element, iframe is scrollable, and content is scrollable for keyboard only users.

## 3.39.0 - (October 3, 2023)

* Added
  * Added `title` prop for consumers to set the title of the embedded content in the iframe.

* Changed
  * Deprecated `options.iframeAttrs.title` in favor of the new `title` prop.

## 3.38.0 - (September 26, 2023)

* Updated
  * Updated documentation for `options` prop to include `srcdoc` iframe atttribute for inline html content in iframe.

## 3.37.0 - (July 31, 2023)

* Changed
  * Minor dependency version bump

## 3.36.0 - (February 14, 2023)

* Changed
  * Updated WDIO screenshots due to webpack-config-terra and
    terra-functional-testing upgrade.

## 3.35.0 - (March 15, 2022)

* Added
  * Migrate docs to terra-framework-docs.

## 3.34.0 - (September 20, 2021)

* Changed
  * Updated WDIO screenshots due to webpack-config-terra sass upgrade.
  * Updated WDIO snapshots due to terra-functional-testing v2 upgrade.

## 3.33.0 - (June 8, 2021)

* Changed
  * Minor dependency version bump

## 3.32.0 - (April 6, 2021)

* Changed
  * Updated Jest command

## 3.31.0 - (March 9, 2021)

* Changed
  * Updated to terra-functional-testing

## 3.30.0 - (January 5, 2021)

* Fixed
  * Fixed broken links in documentation.

## 3.29.0 - (December 8, 2020)

* Changed
  * Update wdio tests to remove deprecated Terra.it helpers

## 3.28.0 - (November 10, 2020)

* Fixed
  * Fixed build failures due to the react/sort-comp rule

## 3.27.0 - (August 4, 2020)

* Changed
  * Updated Changelog format

## 3.26.0 - (July 14, 2020)

* Changed
  * updated `master` references to `main`.
  * Remove unused disable eslint directives

## 3.25.0 - (May 19, 2020)

* Fixed
  * Spacing typo in doc

## 3.24.0 - (April 28, 2020)

* Added
  * Added `directory` as a sub attribute to the `repository` attribute in package.json

* Changed
  * Update wdio test configuration to use root wdio config

* Removed
  * Removed "View Component Source Code" from docs in favour of source code badge

## 3.23.0 - (March 31, 2020)

* Added
  * Added clinical-lowlight-theme wdio screenshots

## 3.22.0 - (March 17, 2020)

* Changed
  * Update docs to use MDX syntax

## 3.21.0 - (February 18, 2020)

* Added
  * Added generated-themes to .npmignore

## 3.20.0 - (January 28, 2020)

* Changed
  * Update copyright to include 2020

## 3.19.0 - (December 10, 2019)

* Added
  * Added reference wdio screenshots for "orion-fusion-theme".

## 3.18.0 - (November 7, 2019)

* Changed
  * Resolved lint warnings for multiple empty lines

## 3.17.0 - (October 16, 2019)

* Changed
  * Minor dependency updates

## 3.16.0 - (October 3, 2019)

* Changed
  * Minor dependency updates

## 3.15.0 - (September 26, 2019)

* Changed
  * Minor dependency updates

## 3.14.0 - (September 19, 2019)

* Changed
  * Removed `details` tag from doc-site.
  * Doc site example module import syntax modified to use package.json name resolution

## 3.13.0 - (September 6, 2019)

* Changed
  * Cleaned up imports in examples and test files

## 3.12.0 - (August 14, 2019)

* Changed
  * updated package.json test scripts

## 3.11.0 - (July 30, 2019)

* Removed
  * Removed DEPENDENCIES.md file

## 3.10.0 - (July 16, 2019)

* Added
  * Added documentation on required peerDependencies

## 3.9.0 - (July 10, 2019)

* Changed
  * Minor dependency version bump
  * Fixed test routes.

## 3.8.0 - (July 2, 2019)

* Changed
  * Renamed test and example SCSS files to end with `.module.scss` extension

## 3.7.0 - (June 19, 2019)

* Changed
  * Minor dependency version bump

## 3.6.0 - (June 12, 2019)

* Removed
  * Removed node_modules from .npmignore

* Changed
  * Removed all inline styles from Dev-site components and implemented the same styles using external css.
  * Update tests for terra-toolkit v5 and terra-dev-site v5 changes
  * Update wdio spec to use Terra.describeViewports

## 3.5.0 - (April 24, 2019)

* Changed
  * Moved packages we use solely in doc examples and tests to devDependencies

## 3.4.0 - (April 18, 2019)

* Added
  * Within DataStatusConsumer example - add guard clause for iframe query

## 3.3.0 - (April 9, 2019)

* Added
  * EmbeddedContentProviderTestTemplate for testing embedded applications

* Changed
  * Updated existing provider examples to use the EmbeddedContentProviderTestTemplate
  * Changed Provider examples to use `.provider` extension to fix provider examples in terra-ui

* Removed
  * Dead code tests / examples that tested XFC implementation

## 3.2.0 - (March 26, 2019)

* Changed
  * Update react/react-dom peer-dependency to latest stable minor release

* Removed
  * Removed peer dependency on terra-base
  * Removed baseStyles import from terra-base

## 3.1.0 - (February 5, 2019)

* Changed
  * Minor dependency update

## 3.0.0 - (January 25, 2019)

* Breaking Change
  * Updated terra-core dependencies

## 2.31.0 - (January 5, 2019)

* Changed
  * Minor dependency update

## 2.30.0 - (January 2, 2019)

* Changed
  * Migrate package to the terra-framework repository
  * Added title attribute to example iframes.

## 2.29.0 - (November 19, 2018)

* Changed
  * Minor dependency version bump

## 2.28.0 - (November 13, 2018)

* Changed
  * Minor dependency version bump

## 2.27.0 - (November 9, 2018)

* Changed
  * Minor dependency version bump

## 2.26.0 - (October 24, 2018)

* Changed
  * Minor dependency version bump

## 2.25.0 - (October 16, 2018)

* Changed
  * Minor dependency version bump

## 2.24.0 - (October 8, 2018)

* Changed
  * Minor dependency version bump

## 2.23.0 - (September 25, 2018)

* Changed
  * Minor dependency version bump

## 2.22.1 - (September 6, 2018)

* Changed
  * Patch dependency version bump

## 2.22.0 - (September 5, 2018)

* Changed
  * Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
  * Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

## 2.21.0 - (September 4, 2018)

* Changed
  * Minor dependency version bump

## 2.20.0 - (August 29, 2018)

* Changed
  * Minor dependency version bump

## 2.19.0 - (August 1, 2018)

* Changed
  * Minor dependency version bump

## 2.18.0 - (July 19, 2018)

* Changed
  * Add .module extension to SCSS file(s)

## 2.17.0 - (July 17, 2018)

* Changed
  * Minor dependency version bump
  * Formatting changes per eslint v4 update

## 2.16.0 - (July 10, 2018)

* Changed
  * Minor dependency version bump

## 2.15.0 - (July 3, 2018)

* Changed
  * Migrate Nightwatch -> wdio testing.

## 2.14.0 - (June 28, 2018)

* Changed
  * Minor dependency version bump

* Added
  * Added change log to the documentation on terra-dev-site

## 2.13.0 - (June 22, 2018)

* Changed
  * Moved terra-base from dependency to peerDependency

## 2.12.0 - (June 12, 2018)

* Changed
  * Updated "test:jest" script to work on windows.

## 2.11.0 - (May 30, 2018)

* Changed
  * Updated structure to match terra-dev-site 1.0 and moved doc examples internal.

## 2.10.0 - (May 23, 2018)

* Changed
  * Minor dependency version bump

## 2.9.0 - (May 16, 2018)

* Changed
  * Minor dependency version bump

## 2.8.0 - (May 9, 2018)

* Changed
  * Minor dependency version bump

## 2.7.0 - (May 2, 2018)

* Changed
  * Minor dependency version bump

## 2.6.0 - (April 20, 2018)

* Changed
  * Minor dependency version bump

## 2.5.0 - (April 15, 2018)

* Changed
  * Minor dependency version bump

## 2.4.0 - (April 5, 2018)

* Changed
  * Minor dependency version bump

## 2.3.0 - (March 30, 2018)

* Changed
  * Minor dependency version bump

## 2.2.0 - (March 6, 2018)

* Removed
  * Removed props-table script from package.json

## 2.1.0 - (February 26, 2018)

* Changed
  * Minor dependency version bump

## 2.0.1 - (February 13, 2018)

* Changed
  * Updated peerDependencies

## 2.0.0 - (February 12, 2018)

* Changed
  * Updated to use React 16

## 1.12.0 - (February 1, 2018)

* Changed
  * Minor dependency version bump

## 1.11.0 - (January 18, 2018)

* Changed
  * Minor dependency version bump

## 1.10.0 - (January 5, 2018)

* Changed
  * Minor dependency version bump

## 1.9.0 - (November 28, 2017)

* Changed
  * Minor dependency version bump

## 1.8.0 - (November 16, 2017)

* Changed
  * Minor dependency version bump

## 1.7.0 - (October 31, 2017)

* Changed
  * Allow EmbeddedContentConsumer to trigger events on its application

## 1.6.0 - (October 6, 2017)

* Changed
  * Minor dependency version bump

## 1.5.0 - (September 26, 2017)

* Changed
  * Minor dependency version bump

## 1.4.0 - (September 19, 2017)

* Changed
  * Minor dependency version bump

## 1.3.0 - (September 12, 2017)

* Changed
  * Minor dependency version bump

## 1.2.0 - (September 7, 2017)

* Changed
  * Minor dependency version bump

## 1.1.0 - (September 5, 2017)

* Changed
  * Update nightwatch tests and test scripts.

## 1.0.0 - (August 31, 2017)

Initial stable release
