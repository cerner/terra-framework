Changelog
=========

Unreleased
----------
## Changed
* Bump terra-notification-dialog version from ^3 to ^4

1.31.0 - (April 28, 2020)
------------------
### Added
* Added `directory` as a sub attribute to the `repository` attribute in package.json

### Removed
* Removed "View Component Source Code" from docs in favour of source code badge

1.30.0 - (April 6, 2020)
------------------
### Changed
* Minor dependency version bump

1.29.0 - (March 31, 2020)
------------------
### Changed
* Minor dependency version bump

1.28.0 - (March 10, 2020)
------------------
### Changed
* Update docs to use MDX syntax

1.27.0 - (March 3, 2020)
------------------
### Changed
* Minor dependency version bump

1.25.0 - (February 18, 2020)
------------------
### Changed
* Updated wdio config to search for "tests" directory only

1.24.0 - (February 4, 2020)
------------------
### Changed
* Minor dependency version bump

1.23.0 - (January 28, 2020)
------------------
### Changed
* Update copyright to include 2020

1.22.0 - (January 7, 2020)
------------------
### Changed
* Minor dependency version bump

1.21.0 - (December 16, 2019)
------------------
### Changed
* Minor dependency version bump

1.20.0 - (December 10, 2019)
------------------
### Changed
* Minor dependency updates

1.19.0 - (November 20, 2019)
------------------
### Changed
* Minor dependency updates

1.18.0 - (November 18, 2019)
------------------
### Changed
* Changed 'NavigationPromptCheckpoint' to have the same logic as 'notification-dialog' changes
  * 'message' prop has been deprecated, will resolve to 'startMessage'
  * Added a 'startMessage' string prop that will display a message after 'title'
  * Added a 'content' node prop that will display the given node in the Dialog after 'startMessage'
  * Added an 'endMessage' string prop that will display a message after 'content'
  * Added 'buttonOrder' prop to determine order of accept and reject buttons
  * 'emphasizedAction' now accepts a 'none' value and defaults to it.

1.17.0 - (November 7, 2019)
------------------
### Changed
* Minor dependency updates

1.16.0 - (October 30, 2019)
------------------
### Changed
* Missing aria-labels added in examples.

1.15.0 - (October 21, 2019)
------------------
### Changed
* Minor dependency updates

1.14.0 - (October 16, 2019)
------------------
### Changed
* Minor dependency updates

1.13.0 - (October 3, 2019)
------------------
### Changed
* Minor dependency updates

1.12.0 - (September 26, 2019)
------------------
### Changed
* Minor dependency updates

1.11.0 - (September 19, 2019)
------------------
### Changed
* Removed `details` tag from doc-site.
* Doc site example module import syntax modified to use package.json name resolution

1.10.0 - (September 6, 2019)
------------------
### Changed
* Cleaned up imports in examples and test files

1.9.0 - (August 21, 2019)
------------------
### Changed
* Minor dependency version bump

1.8.0 - (August 14, 2019)
------------------
### Changed
* updated package.json test scripts

1.7.0 - (July 30, 2019)
------------------
### Removed
* Removed DEPENDENCIES.md file

1.6.1 - (July 23, 2019)
------------------
### Changed
* Updated DEPENDENCIES.md doc

1.6.0 - (July 23, 2019)
------------------
### Changed
* Minor dependency version bump

1.5.0 - (July 16, 2019)
------------------
### Added
* Added documentation on required peerDependencies

1.4.0 - (July 10, 2019)
------------------
### Changed
* Minor dependency version bump

1.3.0 - (July 2, 2019)
------------------
### Changed
* Renamed test and example SCSS files to end with `.module.scss` extension

1.2.0 - (June 19, 2019)
------------------
### Changed
* Removed all inline styles from Dev-site components and implemented the same styles using external css.

1.1.0 - (June 12, 2019)
------------------
### Changed
* Updated the version of terra-notification-dialog being used from v2.0.0 to v3.1.0
* Update tests for terra-toolkit v5 and terra-dev-site v5 changes

1.0.0 - (May 21, 2019)
------------------
* Initial release
