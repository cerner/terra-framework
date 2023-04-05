# Changelog

## Unreleased

## 3.3.0 - (December 7, 2022)

* Updated
  * Flexes the remote reference screenshot downloading location.

## 3.2.1 - (August 30, 2022)

* Added
  * Added a util module for calling github's API.
  * Added a logic to post to the github PR if during a PR build and there are mismatches.

* Removed
  * Removed getRemoteScreenshotConfiguration.

* Changed
  * Changed implementations to use getRemoteScreenshotConfiguration provided by wdio config.

## 3.2.0 - (June 7, 2022)

* Added
  * Added a check of the `BUILD_TYPE` environment variable to determine if tests should pass regardless of image mismatch.

## 3.1.0 - (May 27, 2022)

* Changed
  * Updated chrome version for fixing wdio translation issue.
  * Changed the `useRemoteReferenceScreenshots` CLI option to honor the USE_REMOTE_REFERENCE_SCREENSHOTS env variable.
  * Enabled a check of the `BUILD_TYPE` and `BUILD_BRANCH` environment variable to determine if screenshots should be uploaded after a run.

* Fixed
  * Updated the screenshot upload logic to upload screenshots from the `latest` folder instead of the `reference` folder.

## 3.0.0 - (May 12, 2022)

* Breaking
  * Updated webpack-dev-server to version 4
  * Added devMiddleWare to support webpack-dev-server v4

* Added
  * Added authentication for accessing screenshots from the remote site.
  * Added `useRemoteReferenceScreenshots` cli option for downloading reference screenshots from a remote site for screenshot comparisons.
  * Delete the `reference` screenshot directory when `useRemoteReferenceScreenshots` is true.
  * Added a check of the `BUILD_BRANCH` environment variable to determine if tests should pass regardless of image mismatch.
  * Added load configurations for downloading screenshots.
  * Added functions to upload and download screenshots from the remote repository.

* Changed
  * Changed how we consume `BUILD_BRANCH` environment variable to match what the expected values of it are.

* Fixed
  * Fixed deleting the `diff`, `error`, and optionally the `latest` screenshot directories at the beginning of each test run.

## 2.7.0 - (February 11, 2022)

* Changed
  * Minor dependency version bump

## 2.6.0 - (February 8, 2022)

* Changed
  * Updated component to support Node 14.

## 2.5.0 - (September 28, 2021)

* Added
  * Added hard-coded dependency `inquirer@8.1.3`. As latest i.e. v8.1.4 is using a dependency which is supported by node 14.

## 2.4.0 - (September 2, 2021)

* Changed
  * Updated to set screenshots using the viewport size instead of the browser's window size to maintain consistent screenshot dimensions in IE.
  * Reverted the width of the `large` viewport size from `1020` to `1000`.

## 2.3.0 - (August 17, 2021)

* Changed
  * Update fileReporter to accept outputDir config option

## 2.2.0 - (August 13, 2021)

* Added
  * Added seleniumServiceUrl parameter for locating selenium service.
  * Added port parameter for specifying port mapping for the selenium service or the external selenium grid.

## 2.1.0 - (July 26, 2021)

* Fixed
  * Run tests in all browsers provided by the `BROWSERS` env variable.

## 2.0.0 - (July 16, 2021)

* Breaking
  * Upgraded to wdio v7
  * Increased large viewport size to `1020`

## 1.10.0 - (July 16, 2021)

* Added
  * Added a status check to provided `gridUrl`s, allowing for better logging when a grid fails.

## 1.9.0 - (June 18, 2021)

* Fixed
  * Updated screenshot cleaning to match nested snapshot directories
  * Updated to size the test page to the viewport size instead of the browser's window size to correctly match the corresponding breakpoint. This change may affect the size of existing screenshots, particularly in IE and firefox. The affected screenshots may need to be regenerated.

* Added
  * Added screenshot paths for each test result to the spec reporter

## 1.8.0 - (June 8, 2021)

* Added
  * Added FileOutputReporter reporter that logs wdio test output to separate files based on locale, theme, and form-factor

## 1.7.0 - (June 1, 2021)

* Added
  * `cloudRegion` namespace to screenshot directories - this is useful for full stack testing contexts that define a cloudRegion per test run.

* Fixed
  * Updated waitForSeleniumHubReady to accommodate Windows users.

## 1.6.0 - (May 25, 2021)

* Added
  * Added `ignoreScreenshotMismatch` flag to disable test failure on snapshot mismatch.
  * Added configuration to retrieve and unzip screenshots from registry.

## 1.5.0 - (May 19, 2021)

* Removed
  * Removed lodash is array dependency in favor of Array.isArray.

## 1.4.0 - (May 7, 2021)

* Added
  * Added useSeleniumStandaloneService option for using the standalone-chrome host instead of the selenium docker service when building in Jenkins.
  * Added express-server CLI command. This is moved from @cerner/terra-open-source-scripts.

* Fixed
  * Update node-resemble-js version to fix `Stream not writable` error.

## 1.3.0 - (May 4, 2021)

* Fixed
  * Update specPath in BaseCompare to replace `node_modules` with `tests/wdio`.

## 1.2.0 - (April 23, 2021)

* Added
  * The `diff`, `error`, and `latest` folders in the `__snapshots__` directory will be deleted before each test run.

## 1.1.0 - (April 13, 2021)

* Added
  * Error screenshot functionality.

* Changed
  * Honor terra-theme.config.js file when no theme is specified in the test runner.

## 1.0.5 - (March 31, 2021)

* Fixed
  * Fixed an issue in the spec reporter where the package name from scoped mono repos could result in an improper file path.

## 1.0.4 - (March 29, 2021)

* Fixed
  * Fixed packageName in terra-functional-testing for output files

* Added
  * Added a main index file to export the wdio.conf.js configuration file

* Removed
  * Removed log message for out of range elements in screenshot because there are valid cases to have out of range elements.

## 1.0.3 - (March 23, 2021)

* Added
  * Added describeTests helper to filter tests by form factors, locales, or themes

* Changed
  * Throw error with a more meaningful message when an invalid selector is used to capture screenshot.

* Fixed
  * Fix endY/endX out of range error when selector element is larger than document size.

## 1.0.2 - (March 9, 2021)

* Fixed
  * Fix seleniumVersion service option to be read from serviceOptions instead of launcherOptions

## 1.0.1 - (March 1, 2021)

* Fixed
  * Correctly pass theme as `defaultTheme` to webpack-config-terra to run tests in the correct theme.

## 1.0.0 - (February 25, 2021)

* Initial stable release
