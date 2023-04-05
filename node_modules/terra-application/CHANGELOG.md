# Changelog

## Unreleased

## 1.54.1 - (November 11, 2022)

* Fixed
  * Fixed utility menu to close on userAction button click.

## 1.54.0 - (November 2, 2022)

* Added
  * Added user action utility button.

## 1.53.1 - (June 22, 2022)

* Changed
  * updated condition statement added to check `inert` polyfill is required.
  * updated `wicg-inert` to latest version.

## 1.53.0 - (February 8, 2022)

* Added
  * Added Node 14 support

## 1.52.2 - (December 14, 2021)

* Changed

  * Updated dependencies to not be hard-coded.
  * Updated breakpoints documentation to replace `isBreakpointActiveForSize` with `breakpointIsActiveForSize`.

## 1.52.1 - (December 3, 2021)

* Fixed
  * Regenerate outdated screenshots.

## 1.52.0 - (October 12, 2021)

* Added
  * Migrated ApplicationNavigation implementation to terra-application
  * Added workspace integration with ApplicationNavigation

## 1.51.0 - (October 7, 2021)

* Changed
  * Fix broken links in documentation.

## 1.50.0 - (August 31, 2021)

* Changed
  * Minor dependency version bump
  * Updated themes to be able to switched dynamically via a dispatched event.

## 1.49.0 - (August 11, 2021)

* Changed
  * Minor dependency version bump

## 1.48.0 - (June 15, 2021)

* Changed
  * Removed terra-toolkit as a dependency
  * Upgraded to WebDriverIO v6 and terra-functional-testing
  * Upgraded to @cerner/webpack-config-terra
  * Upgraded to support Node 12

* Fixed
  * Ignore docker_images folder when publishing

## 1.47.1 - (April 27, 2021)

* Fixed
  * Corrected ref usage in Workspace Tabs that threw a passive exception.

## 1.47.0 - (April 13, 2021)

* Added
  * Added fallback locale logic that takes locale from preferred unsupported regional locale.

## 1.46.0 - (March 30, 2021)

* Changed
  * Updated Workspace styles.

## 1.45.0 - (March 17, 2021)

* Added
  * Added optional `label` prop to WorkspaceContent to allow label override for guided usage.

* Added
  * Added `webpack-config-terra` as a dependency

* Changed
  * Updated `webpack.config` to use `webpack-config-terra`

## 1.44.0 - (March 9, 2021)

* Added
  * Added German translations back into project

* Changed
  * Pass theme to the application navigation tests to apply dynamic theme switching

## 1.43.1 - (February 24, 2021)

* Changed
  * Injecting intl into NotificationBanner components for usage outside of ApplicationBase

## 1.43.0 - (February 23, 2021)

* Added
  * Added Workspace and related components

## 1.42.0 - (February 9, 2021)

* Fixed
  * Moved development dependencies into devDependencies

## 1.41.1 - (January 8, 2021)

* Changed
  * Updated to use terra-open-source-scripts to release the project

## 1.41.0 - (November 17, 2020)

* Added
  * Added new file `browserslistrc` for Browserslist.

* Fixed
  * Fixed build failures due to the react/sort-comp rule

* Changed
  * Removed deprecated Terra.it assertions and replaced with Terra.validates assertions

## 1.40.0 - (October 27, 2020)

* Added
  * Added mutation observer-shim to better support inert in IE10.

## 1.39.0 - (October 20, 2020)

* Changed
  * Updated documentation for how to use `EventEmitter` properly.

## 1.38.0 - (October 13, 2020)

* Changed
  * Updated documentation for terra-application-navigation initials.

## 1.37.0 - (October 6, 2020)

* Changed
  * Removed terra-doc-template dependency.

## 1.36.0 - (September 29, 2020)

* Changed
  * Updated application-base to initialize `inert`.
  * Injecting an empty link with id `inert-style` to head in order avoid CSP violations.
  * Thrown error when i18n data fails to load

## 1.35.0 - (September 22, 2020)

* Changed
  * Updated documentation for ApplicationBase and its unsaved changes handling across browsers.
  * Updated error boundary jest snapshots.

## 1.34.0 - (September 8, 2020)

* Added
  * Added Notification Banners and provide in disclosure manager content container.

## 1.33.0 - (September 3, 2020)

* Added
  * Added `aria` role to announce error boundary error text.

## 1.32.0 - (September 1, 2020)

* Added
  * Added EventEmitter
  * Add terra-notification-dialog dependency to project

* Changed
  * Update terra-navigation-prompt to use the latest version
  * Update terra-application/lib/notification-prompt to use the ContentLayoutAsList component provided from terra-notification-dialog
      to apply the correct list styles when an unsaved dialog is presented.

## 1.31.1 - (Aug 19, 2020)

* Changed
  * Reverted "Updated `uuid` dependency to `v8.0.0`" due to IE10 compatibility issues

## 1.31.0 - (Aug 18, 2020)

* Changed
  * Updated `uuid` dependency to `v8.0.0`.

* Fixed
  * Fix ApplicationStatusOverlayProvider contextType warning

## 1.30.0 - (Aug 11, 2020)

* Added
  * Added ApplicationStatusOverlay
  * Added ApplicationStatusOverlayProvider to ApplicationBase, ApplicationNavigation, ModalManager and SlidePanelManager
* Fixed
  * Fixed firefox tests for application navigation
* Changed
  * Update changelog formatting

## 1.29.1 - (July 15, 2020)

* Fixed
  * Returning Promise from registerDismissCheck implementation

## 1.29.0 - (July 15, 2020)

* Fixed
  * Allowed components disclosed by the DisclosureManager to override the default registerDismissCheck implementation

## 1.28.0 - (July 7, 2020)

* Changed
  * Corrected typo in `.gitignore` file.
  * Updated Docs to point to main branch for terra-toolkit-boneyard.

## 1.27.0 - (June 23, 2020)

* Changed
  * Updated reference links.
  * Changed the file extension for the breakpoints doc.
  * Update translated navigation prompt messages
* Fixed
  * Fixed ErrorBoundary intl prop-type checking

## 1.26.0 - (June 16, 2020)

* Added
  * Added a logger utility.
* Changes
  * Updated errorBoundary to have a default error message when there is none provided.

## 1.25.0 - (June 9, 2020)

* Changed
  * Updated eslint-config-terra to @cerner/eslint-config-terra v^4.0.0
  * Removed unnecessary disabled rules.

## 1.24.0 - (May 12, 2020)

* Added
  * Track callback functions to close currently disclosed content. Each disclosure will be registered to the same stack. This will allow disclosures to be be closed by external events like the Android back button.

## 1.23.0 - (May 5, 2020)

* Added
  * Added data attribute `data-terra-application-base` to application base. This will be used as the base selector for wdio full stack integration tests.

## 1.22.0 - (April 28, 2020)

* Changed
  * Update terra-toolkit dev dependency to 6.0.0

## 1.21.0 - (April 22, 2020)

* Added
  * Added theme strategy guide

## 1.20.0 - (April 14, 2020)

* Added
  * Added event listener to ApplicationBase via custom React hook to support test overrides.

## 1.19.0 - (April 7, 2020)

* Added
  * Added theme context to allow components to access the current theme.
* Removed
  * As a part of updating theme provider the `themeIsGlobal` prop has been removed. While this traditionally would be considered non-passive, this prop was broken, removing it is considered a bug fix.

## 1.18.0 - (March 24, 2020)

* Changed
  * Updated locale to be an optional prop for application base
* Added
  * Added a fallback strategy for obtaining the preferred language from the browser if no locale is provided in application base

## 1.17.0 - (February 18, 2020)

* Changed
  * Open up the version for terra-application-navigation

## 1.16.0 - (January 28, 2020)

* Changed
  * Update copyright to include 2020

## 1.15.0 - (January 7, 2020)

* Added
  * Adding ApplicationNavigation component with framework integration.
  * Adding ApplicationIntlContext and integrating throughout.
  * Adding Demo page for user demonstration and guidance.
  * Adding getUnsavedChangesPromptOptions utility function that generates NavigationPromptCheckpoint prompt configurations.
* Changed
  * Using getUnsavedChangesPromptOptions to generate default navigation prompt options within ModalManager/SlidePanelManager if prompt options are not otherwise provided.

* Fixed
  * Fix jest test by updating jest snapshot.

## 1.14.2 - (November 22, 2019)

* Fixed
  * Renamed terra-application folder to just application.

## 1.14.1 - (November 22, 2019)

* Fixed
  * terra-dev-site doc to reference lib folder.

## 1.14.0 - (November 21, 2019)

* Changed
  * Bumped minimum minor dependency versions of terra-disclosure-manager, terra-modal-manager, terra-slide-panel-manager, and terra-navigation prompt
* Added
  * Added ApplicationLoadingOverlay, ApplicationErrorBoundary, and NavigationPrompt handling to ModalManager/SlidePanelManager disclosure content
  * Added more documentation to support the added features
  * Added custom prop support to ApplicationLoadingOverlayProvider

## 1.13.0 - (October 30, 2019)

* Added
  * Added ApplicationLoadingOverlay and ApplicationErrorBoundary
  * Integrated ApplicationLoadingOverlay and ApplicationErrorBoundary into ApplicationBase
  * Added NavigationPrompt handling to ApplicationBase

## 1.12.0 - (October 21, 2019)

* Changed
  * Minor dependency updates

## 1.11.0 - (October 16, 2019)

* Changed
  * Minor dependency updates

## 1.10.0 - (October 3, 2019)

* Changed
  * Minor dependency updates

## 1.9.0 - (September 26, 2019)

* Changed
  * Minor dependency updates

## 1.8.0 - (September 19, 2019)

* Changed
  * Removed `details` tag from doc-site.

## 1.7.0 - (September 6, 2019)

* Changed
  * Cleaned up imports in examples and test files

## 1.6.0 - (August 21, 2019)

* Changed
  * Replaced Object.assign syntax with Object spread syntax

## 1.5.0 - (August 14, 2019)

* Changed
  * updated package.json test scripts

## 1.4.0 - (July 30, 2019)

* Removed
  * Removed DEPENDENCIES.md file

## 1.3.1 - (July 23, 2019)

* Changed
  * Updated DEPENDENCIES.md doc

## 1.3.0 - (July 23, 2019)

* Changed
  * Normalized terra-doc-template dev dependency version to match other terra-framework packages

## 1.2.0 - (July 16, 2019)

* Added
  * Added documentation on required peerDependencies

## 1.1.0 - (July 10, 2019)

* Changed
  * Minor dependency version bump

## 1.0.0 - (July 2, 2019)

* Initial release
