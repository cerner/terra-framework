# Changelog

## Unreleased

## 3.0.1 - (August 30, 2022)

* Changed
  * Reverts terra-aggregate-translations to v2.

## 3.0.0 - (May 12, 2022)

* Breaking
  * Added devMiddleWare to support webpack-dev-server v4.

## 2.4.0 - (February 11, 2022)

* Changed
  * Revert limiting upper Node version to 14.

## 2.3.0 - (February 8, 2022)

* Changed
  * Updated component to support Node 14.
## 2.2.0 - (September 28, 2021)

* Changed
  * Minor dependency version bump

## 2.1.0 - (August 25, 2021)

* Changed
  * Minor dependency version bump

## 2.0.0 - (August 13, 2021)

* Breaking
  * Upgraded from `node-sass` to `sass (dart-sass)`.
  * Removed polyfill entries.

## 1.3.1 - (January 27, 2021)

* Changed
  * Minor dependency version bump

## 1.3.0 - (January 27, 2021)

* Added
  * Added `browser` to `resolve.mainFields` in webpack module list.

* Changed
  * Passively consume @cerner/terra-aggregate-translations package.

## 1.2.0 - (January 5, 2021)

* Changed
  * Added optional support for aggregate themes.
  * Make postcss a peer dependency.
  * Opened the node version to allow versions higher than node 10.

## 1.1.0 - (December 7, 2020)

* Changed
  * Upgrade to postcss 8.
    * AutoPrefixer to v10
    * Postcss-rtl to a forked version to support postcss8
  * Support webpack 5

## 1.0.0 - (November 24, 2020)

* Changed
  * Updated dependencies.

## 1.0.0-alpha.1 - (October 20, 2020)

* Changed
  * Removed default source map generation in loaders for prod.

* Added
  * Added the generateLoaderSourceMaps env to re-enable source map generation for loaders on demand.

## 1.0.0-alpha.0 - (October 1, 2020)

* Initial alpha release
