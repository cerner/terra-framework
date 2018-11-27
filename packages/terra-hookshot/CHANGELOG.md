Changelog
=========

Unreleased
----------
### Fixed
* Lint error

4.13.1 - (November 15, 2018)
------------------
### Change
* Added existence check for SVGElement, fixes issue with older version of jsdom

4.13.0 - (November 15, 2018)
------------------
### Change
* Update react-onclickoutside to ^6.7.1

4.12.0 - (September 25, 2018)
------------------
### Fixed
* Broken coordiantes example for setState.

4.11.0 - (September 5, 2018)
------------------
### Changed
* Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
* Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

4.10.0 - (August 30, 2018)
------------------
### Changed
* Formatting changes per eslint v5 update

4.9.0 - (August 13, 2018)
------------------
### Changed
* Minor dependency updates

4.8.0 - (July 25, 2018)
------------------
### Changed
* Add .module extension to SCSS file(s)

4.7.0 - (July 10, 2018)
------------------
### Changed
* Clean up dependencies

4.6.0 - (July 3, 2018)
------------------
### Changed
* Minor dependency updates

4.5.0 - (June 29, 2018)
------------------
### Changed
* Introduce targetCoordinates to hookshot functionality.
### Added
* Change logs to documentation on terra-dev-site

### Fixed
* Corrected the 'resize observer loop limit reached' error with animation frames.

4.4.0 - (June 12, 2018)
------------------
### Changed
* Minor dependency updates

4.3.0 - (May 30, 2018)
------------------
### Changed
* Moved examples to src

4.2.0 - (May 22, 2018)
------------------
### Changed
* Minor dependency updates

4.1.0 - (April 30, 2018)
------------------
### Changed
* Minor dependency updates
* Do not release snapshots to npm

4.0.0 - (April 20, 2018)
------------------
### Breaking Change
* Removed the call to preventDefault in onOutsideClick

3.1.0 - (April 13, 2018)
------------------
### Changed
* Minor dependency updates

3.0.0 - (April 10, 2018)
-----------------
### Breaking Change
* Attachment behavior `none` will no longer reposition content relative to a bounding rect. Content will remain statically positioned to the specified attachment target. Update the attachment behavior of `none` to `push` to regain previous bounded repositioning.

2.3.0 - (April 3, 2018)
------------------
### Changed
* Moved terra-hookshot to terra-framework repo.

2.2.0 - (March 6, 2018)
------------------
### Removed
* Removed props-table script from package.json

2.1.0 - (February 26, 2018)
------------------
### Changed
* Minor version bump

2.0.1 - (February 13, 2018)
------------------
### Changed
* Updated peerDependencies

2.0.0 - (February 12, 2018)
------------------
### Changed
* Updated to use React 16

1.8.0 - (February 1, 2018)
------------------
### Changed
* Minor version bump

1.7.0 - (January 18, 2018)
------------------
### Changed
* Minor version bump

1.6.0 - (January 5, 2018)
------------------
### Changed
* Minor version bump

1.5.0 - (December 5, 2017)
------------------
### Changed
* Add preventDefault() to onOutsideClick

1.4.0 - (November 28, 2017)
------------------
### Changed
* Minor version bump

1.3.0 - (November 16, 2017)
------------------
### Changed
* Minor version bump

1.2.0 - (October 31, 2017)
------------------
### Fixed
* Height and Width rounding

### Added
* Content Resize callback

1.1.0 - (October 24, 2017)
------------------
### Fixed
* Mobile zoom on safari
* Half px value causing blurriness
* Disable Listener dependency on target

1.0.0 - (October 12, 2017)
------------------
Initial stable release
