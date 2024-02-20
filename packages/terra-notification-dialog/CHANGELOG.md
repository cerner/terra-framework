# Changelog

## Unreleased

## 4.40.0 - (February 16, 2024)

* Updated
  * Snapshots updated as per FocusOn implementation.

## 4.39.0 - (January 22, 2024)

* Changed
  * Minor dependency version bump.

## 4.38.0 - (January 10, 2024)

* Changed
  * Minor dependency version bump.

## 4.37.1 - (December 18, 2023)

* Fixed
 * Added check to throw error when invalid data type is used for action buttons.

## 4.37.0 - (December 11, 2023)

* Changed
  * Changed the notification dialog heading "Alert" from 'div' tag with an 'h2' element.

## 4.36.0 - (November 23, 2023)

* Fixed
  * Fixed title getting announced twice.

## 4.35.0 - (October 11, 2023)

* Changed
  * Minor dependency version bump

## 4.34.0 - (October 3, 2023)

* Changed
  * Minor dependency version bump

## 4.33.1 - (August 4, 2023)

* Changed
  * Minor dependency version bump

## 4.33.0 - (July 31, 2023)

* Changed
  * Minor dependency version bump

## 4.32.0 - (July 25, 2023)

* Changed
  * Minor dependency version bump

## 4.31.0 - (July 19, 2023)

* Changed
  * Minor dependency version bump

## 4.30.0 - (June 5, 2023)

* Changed
  * Minor dependency version bump

## 4.29.0 - (May 11, 2023)

* Changed
  * Minor dependency version bump

## 4.28.0 - (April 27, 2023)

* Changed
  * Minor dependency version bump

## 4.27.0 - (March 29, 2023)

* Changed
  * Updated Jest snapshots.

## 4.26.0 - (March 1, 2023)

* Changed
  * Updated Jest snapshot for terra-button changes

## 4.25.0 - (February 14, 2023)

* Changed
  * Updated WDIO screenshots due to webpack-config-terra and
    terra-functional-testing upgrade.

## 4.24.0 - (December 13, 2022)

* Changed
  * Minor dependency version bump

## 4.23.0 - (March 15, 2022)

* Added
  * Migrate docs to terra-framework-docs

## 4.22.0 - (November 16, 2021)

* Changed
  * Minor dependency version bump

## 4.21.0 - (November 9, 2021)

* Changed
  * Updated tests due to rounding differences in terra-abstract-modal

## 4.20.0 - (October 14, 2021)

* Fixed
  * Reverted focus-trap-react upgrade due to passivity concerns

## 4.19.0 - (October 12, 2021)

* Changed
  * Upgrade focus-trap-react to version ^8.0.0.

## 4.18.0 - (September 20, 2021)

* Changed
  * Updated WDIO screenshots due to webpack-config-terra sass upgrade.
  * Updated WDIO snapshots due to terra-functional-testing v2 upgrade.

## 4.17.0 - (July 21, 2021)

* Changed
  * Updated `terra-icon` from `v3.1.0` to `v3.19.0`.

## 4.16.0 - (July 20, 2021)

* Changed
  * Updated the upgrade guide to state to replace `secondaryAction` with `rejectAction` instead of `primaryAction`

## 4.15.0 - (July 13, 2021)

* Changed
  * Minor dependency version bump

## 4.14.0 - (June 8, 2021)

* Changed
  * Minor dependency version bump

## 4.13.0 - (May 4, 2021)

* Changed
  * Regenerated screenshots involving a now removed defaulted implementation

## 4.12.0 - (April 6, 2021)

* Changed
  * Updated Jest command

## 4.11.0 - (March 9, 2021)

* Changed
  * Updated to use terra-functional-testing

## 4.10.0 - (February 9, 2021)

* Changed
  * Minor dependency version bump

## 4.9.0 - (February 2, 2021)

* Changed
  * Minor dependency version bump

## 4.8.0 - (January 26, 2021)

* Changed
  * Minor dependency version bump

## 4.7.0 - (January 5, 2021)

* Fixed
  * Fixed broken links in documentation.

## 4.6.0 - (December 8, 2020)

* Changed
  * Minor dependency version bump

## 4.5.0 - (November 24, 2020)

* Changed
  * Minor dependency version bump

## 4.4.0 - (November 10, 2020)

* Changed
  * Updated to support a peer dependency of react-intl v2-v5
  * Updated jest  due to changes in abstract modal.

## 4.3.0 - (October 20, 2020)

* Changed
  * Minor dependency version bump

## 4.2.0 - (October 13, 2020)

* Changed
  * Minor dependency version bump

## 4.1.0 - (September 10, 2020)

* Fixed
  * Fix the hazard-high translation for nl and add hazard-medium translations for nl and nl-BE

## 4.0.0 - (August 27, 2020)

* Breaking Changes
  * See [Upgrade Guide](/components/cerner-terra-framework-docs/notification-dialog/upgrade-guide#changes-from-version-3-to-version-4) for more information.

* Added
  * Added `dialogTitle` prop to replace `title` prop
  * Added `custom` prop to set custom variant pieces

* Changed
  * Relaxed `isOpen` prop to be optional and set default value of false
  * Variants
    * Updated `variant` prop to be required and set default value to undefined
    * Removed `variant="success"` / `variant={NotificationDialogVariants.SUCCESS}` from variant options
  * Updated & backfilled orion-fusion-theme and clinical-lowlight-theme

* Removed
  * Removed `title` prop`
  * Removed `header` prop - API no longer allows overriding default header (signal words)
  * Removed `customIcon` prop - set custom.iconClassName instead
  * Removed deprecated `primaryAction` prop - use `acceptAction` prop instead
  * Removed deprecated `secondaryAction` prop - use `rejectAction` prop instead
  * Removed deprecated `message` prop - use `startMessage` prop instead
  * Removed NotificationDialogVariants

## 3.40.0 - (August 18, 2020)

* Changed
  * Minor dependency version bump

## 3.39.0 - (August 11, 2020)

* Changed
  * Minor dependency version bump

## 3.38.0 - (August 4, 2020)

* Changed
  * Updated Changelog format

## 3.37.0 - (July 14, 2020)

* Changed
  * Remove unused disable eslint directives

## 3.36.0 - (June 16, 2020)

* Changed
  * Minor dependency version bump

## 3.35.0 - (June 9, 2020)

* Changed
  * Apply themes by context and directly include packaged themes.

## 3.34.0 - (June 2, 2020)

* Changed
  * Minor dependency version bump

## 3.33.0 - (May 19, 2020)

* Changed
  * Minor dependency version bump

## 3.32.0 - (April 28, 2020)

* Added
  * Added `directory` as a sub attribute to the `repository` attribute in package.json

* Changed
  * Update wdio test configuration to use root wdio config

* Removed
  * Removed "View Component Source Code" from docs in favour of source code badge

## 3.31.0 - (April 6, 2020)

* Changed
  * Minor dependency version bump

## 3.30.0 - (March 31, 2020)

* Added
  * Added clinical-lowlight-theme wdio screenshots

## 3.29.0 - (March 10, 2020)

* Changed
  * Update docs to use mdx syntax

## 3.28.0 - (March 3, 2020)

* Changed
  * Minor dependency version bump

## 3.27.0 - (February 25, 2020)

* Changed
  * Minor dependency version bump

## 3.26.0 - (February 18, 2020)

* Added
  * Added clinical-lowlight-theme theming files

## 3.25.0 - (February 4, 2020)

* Changed
  * Minor dependency version bump

## 3.24.0 - (January 28, 2020)

* Changed
  * Update copyright to include 2020

## 3.23.0 - (January 7, 2020)

* Changed
  * Removed `isRequired` for `acceptAction` and added custom validation for it.

## 3.22.0 - (December 16, 2019)

* Changed
  * Minor dependency version bump

## 3.21.0 - (December 10, 2019)

* Added
  * Added orion-fusion-theme and generated the respective reference wdio screenshots.

## 3.20.0 - (November 20, 2019)

* Changed
  * Minor dependency updates

## 3.19.0 - (November 18, 2019)

* Changed
  * Minor dependency updates

## 3.18.0 - (November 7, 2019)

* Changed
  * 'message' prop has been deprecated, will resolve to 'startMessage'
  * 'primaryAction' prop has been deprecated, will resolve to 'acceptAction'
  * 'secondaryAction' prop has been deprecated, will resolve to 'rejectAction'
  * Notification Dialog maximum width set to constant value of 500px from 800px and is themable.
  * Minor style adjustments for the new smaller dialog design.

* Added
  * Added a 'startMessage' string prop that will display a message after 'title'
  * Added a 'content' node prop that will display the given node in the Dialog after 'startMessage'
  * Added an 'endMessage' string prop that will display a message after 'content'
  * Added 'acceptAction' prop that takes an object with a 'text' string and 'onClick' function attributes
  * Added 'rejectAction' prop that takes an object with a 'text' string and 'onClick' function attributes
  * Added 'buttonOrder' prop to determine order of accept and reject buttons
  * Added a 'emphasizedAction' oneOf to choose between emphasizing the accept button, reject button, or neither.

## 3.17.0 - (October 30, 2019)

* Changed
  * Minor dependency updates

## 3.16.0 - (October 21, 2019)

* Changed
  * Minor dependency updates

## 3.15.0 - (October 16, 2019)

* Changed
  * Minor dependency updates

* Fixed
  * Added terra-breakpoints to dependencies for the project

## 3.14.0 - (October 3, 2019)

* Changed
  * Minor dependency updates

* Fixed
  * Removed extra comma from scss file.

## 3.13.0 - (September 26, 2019)

* Changed
  * Minor dependency updates

* Changed
  * Reverted Placeholder import in example files.

## 3.12.0 - (September 19, 2019)

* Changed
  * Removed `details` tag from doc-site.
  * Doc site example module import syntax modified to use package.json name resolution

* Added
  * Added en-CA translations.

## 3.11.0 - (September 6, 2019)

* Changed
  * Cleaned up imports in examples and test files
  * Updated `keycode-js` from `v1.0.4` to `v2.0.1`

## 3.10.0 - (August 21, 2019)

* Changed
  * Updated bracket formatting in test files to match eslint 6 rules.

## 3.9.0 - (August 14, 2019)

* Changed
  * Update wdio snapshots with new button focus outline styles
  * Updated to interface with react-intl's `FormattedMessage` rather than old React Context API.
  * updated package.json test scripts

## 3.8.0 - (July 30, 2019)

* Removed
  * Removed DEPENDENCIES.md file

## 3.7.1 - (July 23, 2019)

* Changed
  * Updated DEPENDENCIES.md doc

## 3.7.0 - (July 23, 2019)

* Changed
  * Minor dependency version bump

## 3.6.0 - (July 16, 2019)

* Added
  * Added documentation on required peerDependencies

## 3.5.0 - (July 10, 2019)

* Changed
  * Minor dependency version bump

## 3.4.0 - (July 2, 2019)

* Fixed
  * Updated max-width to be `800px` for screen size greater than 768px.

* Changed
  * Update pop up and modal manager tests to not test accessibility for elements behind the overlay
  * Renamed test and example SCSS files to end with `.module.scss` extension

## 3.3.0 - (June 19, 2019)

* Changed
  * Update wdio spec to use Terra.describeViewports

## 3.2.0 - (June 12, 2019)

* Removed
  * Removed node_modules from .npmignore

* Changed
  * Update tests for terra-toolkit v5 and terra-dev-site v5 changes

* Fixed
  * Pressing escape key no longer disables the focus trap in notification dialog, users must make a selection of one of the notification dialog buttons to dismiss the notification dialog

## 3.1.0 - (May 21, 2019)

* Changed
  * Minor dependency update

## 3.0.0 - (May 13, 2019)

* Breaking Change
  * Removed `releaseFocus` prop
  * Removed `requestFocus` prop

* Added
  * Added component specific handler for Escape key usage with Notification Dialog
  * Added focus trap to Notification Dialog

## 2.12.0 - (May 7, 2019)

* Fixed
  * Updated jest snapshot

## 2.11.0 - (April 24, 2019)

* Changed
  * Moved packages we use solely in doc examples and tests to devDependencies

## 2.10.0 - (April 16, 2019)

* Changed
  * Minor dependency update

## 2.9.0 - (April 9, 2019)

* Changed
  * Minor dependency update

## 2.8.0 - (April 2, 2019)

* Changed
  * Minor dependency update

## 2.7.0 - (March 26, 2019)

* Changed
  * Update react/react-dom peer-dependency to latest stable minor release

* Removed
  * Removed peer dependency on terra-base
  * Removed baseStyles import from terra-base

## 2.6.0 - (March 20, 2019)

* Changed
  * Update Jest tests to use terra-enzyme-intl

## 2.5.0 - (March 12, 2019)

* Added
  * Added missing nl-BE translation

## 2.4.0 - (March 5, 2019)

* Changed
  * Minor dependency update

## 2.3.0 - (February 26, 2019)

* Added
  * Added en-AU translations

* Changed
  * Update wdio spec to set the viewport at the top-level instead of in each test's before hook for faster execution

## 2.2.0 - (February 13, 2019)

* Changed
  * Minor dependency update

## 2.1.0 - (February 5, 2019)

* Fixed
  * Fixed focus trap management

## 2.0.0 - (January 25, 2019)

* Breaking Change
  * Updated variable names to match new naming standard
  * Added new variables for css theming
  * Updated terra-core dependencies

## 1.17.0 - (January 5, 2019)

* Removed
  * Removed onRequestClose prop.

## 1.16.0 - (January 2, 2019)

* Changed
  * Updated dev site examples to not have duplicate ids.
  * Updated dev site to have logically nested headings.
  * Updated dev site examples to not use form tags.

## 1.15.0 - (December 5, 2018)

* Changed
  * Minor dependency update

## 1.14.0 - (December 3, 2018)

* Added
  * Added missing ar, es-ES, es-US, fr-FR, and pt-BR translations.

* Changed
  * Minor improvements to doc examples
  * Updated examples to consume terra-disclosure-manager v3.x

* Removed
  * Removed dependency on terra-app-delegate package.

## 1.13.0 - (November 15, 2018)

* Changed
  * Minor dependency update

## 1.12.0 - (October 30, 2018)

* Changed
  * Update mixin import to be more explicit

* Fixed
  * Fixed icon display in notification dialog in IE

## 1.11.0 - (October 16, 2018)

* Changed
  * Minor dependency update

## 1.10.0 - (October 8, 2018)

* Changed
  * Updated links in docs on supported features

## 1.9.0 - (September 25, 2018)

* Changed
  * Minor dependency bump

## 1.8.0 - (September 5, 2018)

* Changed
  * Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
  * Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

## 1.7.0 - (August 30, 2018)

* Changed
  * Formatting changes per eslint v5 update

## 1.6.0 - (August 13, 2018)

* Changed
  * Formatting changes per eslint v4 update

* Fixed
  * Lint errors regarding file path resolution

## 1.5.0 - (July 26, 2018)

* Changed
  * Minor dependency updates

## 1.4.0 - (July 25, 2018)

* Added
  * Added `sv` and `sv-SE` translations

* Changed
  * Add .module extension to SCSS file(s)

## 1.3.0 - (July 17, 2018)

* Fixed
  * Removed usage of CSS `initial` value because Internet Explorer does not support it

## 1.2.0 - (July 3, 2018)

* Changed
  * Minor dependency updates

## 1.1.0 - (June 29, 2018)

* Fixed
  * Fixed naming of aria-label prop being passed to AbstractModal
* Added
  * Change logs to documentation on terra-dev-site

## 1.0.0 - (June 19, 2018)

* Initial stable release
