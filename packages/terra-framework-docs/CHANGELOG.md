# Changelog

## Unreleased

## 1.40.0 - (October 11, 2023)

* Added
  * Added documentation for FlowsheetDataGrid in `terra-data-grid`.

## 1.39.0 - (October 3, 2023)

* Added
  * Added documentation for hyperlinks in `terra-collapsible-menu-view`.
  * Added doc and test example for `collapsible-menu-view` multi-select group items.

* Updated
  * Updated examples for `terra-collapsible-menu-view` to use more meaningful controls and control labels.
  * Updated examples and tests to add support for content scrolling within the iframe.
  * Updated examples and tests for `terra-embedded-content-consumer` to show the preferred way to set the title.

## 1.38.0 - (September 26, 2023)

* Changed
  * Minor dependency version bump

## 1.37.0 - (September 21, 2023)

* Changed
  * Minor dependency version bump

## 1.36.0 - (September 19, 2023)

* Updated
  * Updated example for `terra-date-picker` with isInvalid prop and error message.

## 1.35.0 - (September 14, 2023)

* Added
  * Added an example and test for `terra-embedded-content-consumer` to enable inline html content to be set in `srcdoc` frame attribute.
  * Added aria-label prop for terra-popup to announce the close instruction.
  * Added example for `terra-tabs` to test the focus traverse with interactive element within the tab content.
  * Added `terra-brand-footer` as a dependency.
  * Added `terra-file-path` as a dependency.
  * Added a test case for menu item click event bleed through example

* Changed
  * Updated examples and tests for `terra-worklist-data-grid` to properly update row selection data.
  * Migrated `terra-worklist-data-grid` docs/tests to new `terra-data-grid`.
  * Updated add tabs examples to be controlled tabs.

* Updated
  * Updated example for `terra-date-picker` with isInvalid prop.

## 1.34.0 - (September 5, 2023)

* Changed
  * Minor dependency version bump

## 1.33.0 - (August 31, 2023)

* Added
  * Added example and tests for `terra-worklist-data-grid` to select rows via mouse and keyboard.
  * Added test to `terra-worklist-data-grid` for sticky column header feature.
  * Added tests for unselectable toggles in `terra-collapsible-menu-view`.

* Changed
  * Updated `terra-arrange` from `v3.51.0` to `v3.53.0`.
  * Updated focusable cell example for `terra-worklist-data-grid` to allow text area to be editable.
  * Added examples and tests for Add & Close functionality of tabs.
  * Updated examples and tests for `terra-worklist-data-grid` to account for cell selection state being controlled by consumers.
  * Updated programmatic activation test and examples for `terra-tabs`.
  * Updated pinned column test for `terra-worklist-data-grid` to test the divider when the table height changes.
  * Updated examples and tests for `terra-worklist-data-grid` to handle cell selection for pinned columns.
  * Updated examples and tests for `terra-worklist-data-grid` to match the new signature for the `onRowSelect` callback prop as it now expects one array.
  * Updated testing recommendations to use `jest.spyOn` instead of `jest.mock`.

## 1.32.0 - (August 10, 2023)

* Updated
  * Updated terra-popup examples with inert attribute to demonstrate focus trap when using virtual cursor of Jaws for navigation within popup.

* Added
  * Added tests for `terra-worklist-data-grid` when using pinned columns.

* Changed
  * Updated toggle examples for `terra-collapsible-menu-view` to include selectable toggles and toggles within a collapsed menu.

* Added
  * Updated row selection example for `terra-worklist-data-grid` to show ability to select the row selection column header.

* Changed
 * Locked `terra-arrange` to `3.51.0` temporarily.

* Added
  * Updated tests for `terra-tabs` drag and drop in tab-menu.

## 1.31.0 - (August 4, 2023)

* Added
  * Added examples and tests for `terra-worklist-data-grid` to interact with cells containing focusable elements.

* Changed
  * Updated tests for `terra-worklist-data-grid` to verify focusable cell elements do not receive focus on tab key press.

## 1.30.0 - (August 2, 2023)

* Changed
  * Minor dependency version bump

## 1.29.0 - (August 2, 2023)

* Added
  * Added tests for draggable tabs.

## 1.28.0 - (July 31, 2023)

* Changed
  * Minor dependency version bump

* Added
  * Added examples for `terra-worklist-data-grid` when using pinned columns.
  * Added `terra-worklist-data-grid` as dependency.

## 1.27.0 - (July 25, 2023)

* Changed
  * Minor dependency version bump

## 1.26.0 - (July 20, 2023)

* Added
  * Added `terra-worklist-data-grid` as dependency.
  * Added example to test toggling and focusing disclosing node for `terra-slide-panel`.

## 1.25.0 - (July 19, 2023)

* Changed
  * Updated example for `terra-menu`.
  * Updated tests for `terra-worklist-data-grid` to account for row height and column width being honored.
  * Updated the path name for the examples in doc site for `terra-embedded-content-consumer` to resolve missing files.
  * Minor formatting changes in the `uuid` testing section for several packages.
  * Updates tests amd examples for `terra-worklist-data-grid` to show resize capability.
  * Updated examples for `terra-tabs` with conflicting ids.

* Added
  * Added alpha release disclaimer for `terra-worklist-data-grid`.
  * Added documentation and tests for additional keyboard navigation in `terra-worklist-data-grid`.
  * Added Cell Selection example for `terra-worklist-data-grid`.

## 1.24.0 - (July 4, 2023)

* Updated
  * Updated examples and tests for `terra-menu`.

* Changed
  * Updated example for `terra-popup`.
  * Updated examples and tests for `terra-worklist-data-grid` to remove row height
  * Updated examples and tests for `terra-worklist-data-grid` for blank cell accessibility
  * Updated examples and tests for `terra-worklist-data-grid` to show masked cells and hover states
  * Updated examples and tests for `terra-worklist-data-grid` to show column sort and error indicators

* Added
  * Added test for `terra-modal-manager` to disclose modal using Fusion sizes.

## 1.23.0 - (June 12, 2023)

* Changed
  * Minor dependency version bump.

## 1.22.0 - (June 5, 2023)

* Added
  * Added test for `terra-popup`.
  * Added example for `terra-menu` with disabled item.
  * Added a `terra-slide-panel` test containing multiple slide panels.
  * Added testing sections to `terra-menu`, `terra-navigation-prompt`, `terra-pills` and `terra-tabs` documentation.

* Changed
  * Updated testing sections for `terra-date-input`, `terra-date-picker`, `terra-slide-panel`, and `terra-time-input` documentation.

* Added
  * Added documentation and tests for `terra-worklist-data-grid`.
  * Added example and test for masked cell feature for `terra-worklist-data-grid`.


## 1.21.0 - (May 11, 2023)

* Changed
  * Minor dependency version bump

## 1.20.0 - (April 27, 2023)

* Changed
  * Updated examples for `terra-popup`.
  * Updated `notification-dialog` and `tabs` examples.
  * Updated examples for `terra-slide-panel-manager`.
  * Updated menu button to use down caret for visual context

* Added
  * Added a `terra-slide-panel` example where the panel is open on page load and fullscreen.

## 1.19.0 - (April 12, 2023)

* Added
  * Added a `terra-slide-panel` example where the panel is open on page load.

## 1.18.0 - (April 5, 2023)

* Changed
  * Minor dependency version bump

## 1.17.0 - (March 29, 2023)

* Changed
  * Updated docs for `terra-slide-group`.
  * Updated doc and added test for terra-collapsible-menu-view

* Added
  * Added test for `terra-slide-panel`.
  * Added test for `terra-slide-panel-manager`.

## 1.16.0 - (March 1, 2023)

* Changed
  * Updated test for terra-menu

## 1.15.0 - (February 14, 2023)

* Changed
  * Minor dependency version bump

## 1.14.0 - (February 7, 2023)

* Fixed
  * Fixed link to terra-tabs badge.

## 1.13.0 - (February 1, 2023)

* Changed
  * Updated doc and added test for terra-menu
  * Updated doc and added test for terra-tabs

## 1.12.0 - (December 13, 2022)

* Fixed
  * Fixed broken links in documentation.

## 1.11.0 - (September 27, 2022)

* Added
  * updating docs for disclosure-manager and modal-manager for modal-sizing explanations

## 1.10.0 - (September 20, 2022)

* Changed
  * Updated DST example for `terra-date-time-picker`.

## 1.9.0 - (July 27, 2022)

* Changed
  * Minor dependency version bump

## 1.8.3 - (July 5, 2022)

* Changed
  * Updated docs for terra-pills

## 1.8.2 - (May 3, 2022)

* Changed
  * Additional deprecation notices for terra-infinite-list

## 1.8.1 - (March 29, 2022)

* Added
  * Added docs for terra-date-time-picker
  * Added tests for terra-date-time-picker

## 1.8.0 - (March 15, 2022)

* Changed
  * Migrated docs from terra-date-input
  * Migrated docs from terra-collapsible-menu-view
  * Migrated docs from terra-date-picker
  * Migrated docs from terra-date-time-picker

* Added
  * Migrated docs from terra-navigation-side-menu
  * Migrated docs from terra-navigation-prompt
  * Migrated docs from terra-navigation-layout
  * Migrated docs from terra-menu
  * Migrated docs from terra-notification-dialog
  * Migrated docs from terra-time-input
  * Migrated docs from terra-theme-provider
  * Migrated docs from terra-theme-context
  * Migrated docs from terra-tabs
  * Migrated docs from terra-slide-panel-manager
  * Migrated docs from terra-infinite-list
  * Migrated docs from terra-hookshot
  * Migrated docs from terra-disclosure-manager
  * Migrated docs from terra-embedded-content-consumer
  * Migrated docs from terra-slide-panel
  * Migrated docs from terra-slide-group
  * Migrated docs from terra-popup

## 1.7.0 - (March 8, 2022)

* Added
  * Migrated docs from terra-layout
  * Added docs for terra-pills
  * Added tests for terra-pills

## 1.6.0 - (November 16, 2021)

* Changed
  * Minor dependency version bump

## 1.5.0 - (November 9, 2021)

* Changed
  * Minor dependency version bump

## 1.4.0 - (October 14, 2021)

* Changed
  * Minor dependency version bump

## 1.3.0 - (October 12, 2021)

* Added
  * Migrated docs from terra-brand-footer

## 1.2.0 - (September 20, 2021)

* Changed
  * Minor dependency version bump

## 1.1.1 - (July 23, 2021)

* Fixed
  * Updated test to not reference the src directory for modal manager

## 1.1.0 - (July 21, 2021)

* Updated
  * Migrated docs from terra-modal-manager

## 1.0.0 - (July 20, 2021)

* Initial stable release
