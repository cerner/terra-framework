# ChangeLog

## Unreleased

## 4.3.0 - (February 11, 2022)

* Changed
  * Revert limiting upper Node version to 14.

## 4.2.0 - (February 8, 2022)

* Changed
  * Updated component to support Node 14.

## 4.1.0 - (February 25, 2021)

* Changed
  * declaration-property-unit-whitelist is deprecated, converting to declaration-property-unit-allowed-list.

## 4.0.0 - (January 5, 2021)

* Breaking
  * Drop support for node versions below version 10.
  * Require stylelint version 13.
  * Scope package under @cerner.

* Changed
  * Use jest for tests.
  * Added publish config to package.json.
  * Opened the node version to allow versions higher than node 10.

## 3.7.0 - (July 28, 2020)

* Fixed
  * Support scoped package names

## 3.6.0 - (July 21, 2020)

* Changed
  * Updated the custom-property-pattern rule to not require the terra prefix

## 3.5.0 - (June 9, 2020)

* Changed
  * Updated eslint-config-terra to @cerner/eslint-config-terra v^4.0.0

## 3.4.0 - (March 31, 2020)

* Removed
  * Removed the `suitcss/custom-property-no-outside-root` rule as it conflicts with our themeing strategy.

## 3.3.0 - (January 28, 2020)

* Changed
  * Added Dave as a code owner.
  * Update copyright to include 2020

## 3.2.0 - (October 3, 2019)

* Added
  * Added no-extra-semicolons rule to enforce no extra semicolons

* Changed
  * Updated nvmrc file to use lts/dubnium
  * Updated find-up dependency to ^4.0.0
  * Updated postcss-value-parser to ^4.0.0
  * Updated ESLint to v6
  * Updated stylelint-config-sass-guidelines to ^6.1.0
  * Updated stylelint-order to ^3.1.1
  * Updated stylelint-scss to ^3.11.0

* Removed
  * Removed DangerJS integration
  * Removed Terra prefix from mixin pattern rule.
  * Removed rimraf devDependency

## 3.1.0 - (May 9, 2019)

* Added
  * Added warning to enforce a unitless line-height

## 3.0.0 - (May 1, 2019)

* Breaking Changes
  * Added more styles to ignore list
  * Updated stylelint dependencies to latest major versions

## 2.0.0 - (January 29, 2019)

* Breaking Changes
  * Enabled custom property rules to throw errors for violations

## 1.5.1 - (December 19, 2018)

* Fixed
  * Adjusted custom-property-pseudo-selectors to not require multiple definitions of the same pseudo selector if declared in the same block

## 1.5.0 - (December 5, 2018)

* Changed
  * Removed custom property version checking.
  * Renamed custom-property-namespace-version to custom-property-namespace

## 1.4.0 - (November 29, 2018)

* Added
  * Added: `custom-property-no-duplicate-declaration` rule to disallow a custom property to be declared more than once with a different fallback value

## 1.3.0 - (October 30, 2018)

* Added
  * Added: `custom-property-name` rule to enforce custom properties be suffixed with the css style property name
  * Added: `custom-property-namespace-version` rule to enforce custom properties to be prefixed with a namespace and version
  * Added: `custom-property-pattern` rule to enforce custom properties be written in lowercase alphanumeric characters and hyphens
  * Added: `custom-property-pseudo-selectors` rule to enforce custom properties to include the ancestor pseudo selector names

## 1.2.0 - (August 30, 2018)

* Changed
  * Bumped stylelint-order dependency to v1.0.0

## 1.1.0 - (August 8, 2018)

* Changed
  * Added `calc`, `cursor`, and `outline` to ignored style list for browser support.

## 1.0.0 - (June 18, 2018)

* Initial stable release
