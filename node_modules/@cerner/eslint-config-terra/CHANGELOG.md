# Changelog

## Unreleased

## 5.4.0 - (February 11, 2022)

* Changed
  * Revert limiting upper Node version to 14.

## 5.3.0 - (February 8, 2022)

* Changed
  * Updated component to support Node 14.

## 5.2.0 - (November 16, 2021)

* Changed
  * Add Format-js linter.

## 5.1.0 - (April 23, 2021)

* Changed
  * Added `FullStack` to globals for usage in full stack testing

## 5.0.0 - (February 16, 2021)

* Breaking
  * Update to eslint ^7.19.0.

## 4.5.1 - (February 9, 2021)

* Fixed
  * Locking into a previous version of eslint-config-airbnb is non passive, rolling back the fix for the missing peer.

## 4.5.0 - (February 8, 2021)

* Fixed
  * Resolved missing peer dependency warning by locking into a previous version of eslint-config-airbnb.

## 4.4.0 - (January 27, 2021)

* Changed
  * Added $ to globals for usage in WDIO spec tests

## 4.3.0 - (January 5, 2021)

* Changed
  * Opened the node version to allow versions higher than node 10.

## 4.2.0 - (November 24, 2020)

* Fixed
  * The badges in the readme were pointing to an incorrect url.

* Changed
  * Updated eslint config file to use `off`, `warn` and `error` instead of `0`, `1` and `2`.

## 4.1.0 - (August 4, 2020)

* Added
  * babel-eslint as parser to allow current js functionality, like optional chaining.

## 4.0.0 - (May 5, 2020)

* Breaking Change
  * Updated to a scoped packages: @cerner/eslint-config-terra

## 3.3.0 - (January 28, 2020)

* Changed
  * Update copyright to include 2020

* Added
  * Added new override for relative package imports within terra-dev-site example files

## 3.2.0 - (November 7, 2019)

* Added
  * Added minimum node engine version of 8.10.0, 10.13.0, or 11.10.1 in package.json

## 3.1.0 - (October 30, 2019)

* Added
  * Added rule override for `no-multiple-empty-lines` to warn on multiple consecutive empty lines

## 3.0.2 - (October 1, 2019)

* Changed
  * Pin eslint-plugin-react dependency to `7.14.3`

## 3.0.1 - (September 6, 2019)

* Changed
  * Update eslint-plugin-react-hooks dependency to `^2.0.1`

## 3.0.0 - (August 20, 2019)

* Breaking Change
  * Updated eslint peer dependency to `^6.1.0`
  * Update eslint-config-airbnb dependency to `^18.0.0`
  * Update eslint-plugin-compat dependency to `^3.3.0`
  * Enable `react/jsx-wrap-multilines` rule
  * Updating warning for style prop to produce an error instead of a warning

* Changed
  * Replace DangerJS integration with probot-changelog
  * Removed rimraf devDependency and replaced with `rm -rf`

## 2.5.0 - (May 9, 2019)

* Added
  * A warning to discourage inline styles

## 2.4.0 - (February 11, 2019)

* Added
  * Setting to eslint-plugin-compat config to denote polyfill usage for `Object.values`.

## 2.3.0 - (February 6, 2019)

* Added
  * React Hooks plugin and rules

* Changed
  * Unlocked 'eslint-plugin-react' to ^7.12.2
  * Updated config rules to make react/jsx-wrap-multilines a warning for passivity

## 2.2.0 - (January 2, 2019)

* Added
  * Rule override to turn off the `no-unused-expression` rule for jest or wdio test files.

* Changed
  * Added after as globals for test files recursively under a "wdio" directory
  * Tempararily lock-down `eslint-plugin-react`. V7.12.0 was released with bugs and has not yet been fixed. Locking this down until a fix is released.

## 2.1.0 - (August 29, 2018)

* Changed
  * Updated mount, shallow, and render to only be globals for test files recursively under a "jest" directory
  * Added before, browser, and Terra as globals for test files recursively under a "wdio" directory

## 2.0.0 - (August 23, 2018)

* Changed
  * Update ESLint and related dependencies to ESLint v5 compatible versions
  * Disabled the deprecated `jsx-a11y/label-has-for rule`. More info about this rule deprecation here: <https://github.com/evcohen/eslint-plugin-jsx-a11y/releases/tag/v6.1.0>
  * Replaced `jsx-a11y/label-has-for` rule with new `jsx-a11y/label-has-associated-control` rule
  * Disabled `react/destructuring-assignment` rule

## 1.1.0 - (July 11, 2018)

* Changed
  * Updated 'jsx-a11y/label-has-for' to require id or nested input for label mapping
  
## 1.0.1 - (June 19, 2018)

* Changed
  * Minor update to ReadMe

## 1.0.0 - (June 18, 2018)

* Initial stable release
  * Updated to ensure travis builds successfully
