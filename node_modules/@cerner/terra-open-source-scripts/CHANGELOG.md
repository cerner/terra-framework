# Changelog

## Unreleased

## 1.12.0 - (February 11, 2022)

* Changed
  * Revert limiting upper Node version to 14.

## 1.11.0 - (February 8, 2022)

* Changed
  * Updated component to support Node 14.

## 1.10.0 - (August 13, 2021)

* Changed
  * Ignored more than just the cli directory in terra-open-source-scripts to prevent transpiling

## 1.9.0 - (May 7, 2021)

* Removed
  * Removed express-server CLI command. This is moved to @cerner/terra-functional-testing to eliminate the need to depend on this package to use express-server.

## 1.8.0 - (April 23, 2021)

* Changed
  * Minor dependency version bump

## 1.7.0 - (February 25, 2021)

* Changed
  * Minor dependency version bump

## 1.6.0 - (February 8, 2021)

* Changed
  * Minor dependency version bump

## 1.5.0 - (January 26, 2021)

* Changed
  * Added a log for the releasing packages to the prepare-for-release script. The intent of this is to provide the releaser with a message they can use to copy and paste in a notification channel at release time.

## 1.4.0 - (January 5, 2021)

* Changed
  * Opened the node version to allow versions higher than node 10.

## 1.3.0 - (December 4, 2020)

* Changed
  * Minor dependency version bump

## 1.2.0 - (November 24, 2020)

* Changed
  * Update to use `prompts` instead of `inquirer`. It has a smaller memory footprint
  * Updated to use a simpler import of the terra-cli logger

## 1.1.0 - (November 19, 2020)

* Fixed
  * Fix issue with the stdio buffers running out of space on calls to exec by switching to spawn instead
  * Fix issue with spawn commands and quoted arguments. Spawn bypasses the shell so no need to quote strings

## 1.0.1 - (November 17, 2020)

* Fixed
  * Fix issue with setting up git on publish

## 1.0.0 - (November 17, 2020)

* Initial stable release
