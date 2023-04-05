# Changelog

## Unreleased

## 2.4.0 - (February 11, 2022)

* Changed
  * Revert limiting upper Node version to 14.

## 2.3.0 - (February 8, 2022)

* Changed
  * Updated component to support Node 14.

## 2.2.0 - (September 28, 2021)

* Changed
  * When parsing translation files, only warn when the JSON is invalid or the base file isn't there.

## 2.1.0 - (August 25, 2021)

* Fixed
  * Update permissions on binary

* Changed
  * Remove the warning for regional locales not being there as we fall back automatically

## 2.0.1 - (January 27, 2021)

* Changed
  * Added missing bin cli file.

## 2.0.0 - (January 27, 2021)

* Breaking
  * Drop support for node versions below version 10.
  * Scope package under @cerner.

## 1.12.0 - (January 26, 2021)

* Changed
* Removed generation of translation and locale data loader files.
* Upgraded react-intl peer dependency version.

## 1.11.0 - (November 17, 2020)

* Doc Update

## 1.10.0 - (October 30, 2020)

* Fixed
  * Support @cerner scoped packages.

## 1.9.0 - (June 9, 2020)

* Changed
  * Updated eslint-config-terra to @cerner/eslint-config-terra v^4.0.0

## 1.8.0 - (March 24, 2020)

* Fixed
* Update translation directory search order such that the root level translations are honored over translations found in node_modules

## 1.7.0 - (March 17, 2020)

* Changed
  * git ignore package-lock.json

## 1.6.0 - (February 13, 2020)

* Changed
  * Update aggregate translations function to return the list of supported locales

## 1.5.0 - (January 28, 2020)

* Changed
  * Update copyright to include 2020

## 1.4.0 - (October 30, 2019)

* Changed
  * Updated Commander to ^3.0.1

## 1.3.0 - (October 3, 2019)

* Changed
  * Return the promise created by lazy loading

## 1.2.0 - (September 19, 2019)

* Added
  * Added documentation for usage with Rails/Webpacker
  * Added en-CA translations.

* Changed
  * Updated fs-extra dependencies
  * Updated ESLint to v6
  * Replaced Object.assign syntax with Object spread syntax

* Removed
  * Removed DangerJS integration
  * Removed the Finnish translations

## 1.0.0 - (May 3, 2019)

* Initial stable release
