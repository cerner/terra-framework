# Changelog

## Unreleased

* (flowsheet-data-grid only) Added support for subsections.

## 5.18.0 - (April 4, 2024)

* Added
  * Added the ability to configure the table to use auto table layout.

* Fixed
  * Fixed action header row so that it is properly fixed to the top of the table.

## 5.17.0 - (March 29, 2024)

* Added
  * Added the ability to select a cell by pressing Escape on an auto focused button or anchor element (terra-data-grid only).

## 5.16.0 - (March 25, 2024)

* Fixed
  * Fixed an issue where the click event for buttons inside table cells was not triggered by the spacebar.
  
## 5.15.0 - (March 21, 2024)

* Changed
  * Prevent right click from selecting row in row selection mode.

## 5.14.0 - (March 19, 2024)

* Removed
  * `boundingRef` is no longer necessary for the section header's sticky behavior for tables. This change is still passive in nature as it doesn't change any functionality for consumers.

## 5.13.0 - (March 14, 2024)

* Added
  * Added `event` object to `onCellSelect` callback.

* Changed
  * Internal focus trap update for terra-data-grid.

## 5.12.0 - (March 8, 2024)

* Changed
  * Minor dependency version bump.

## 5.11.0 - (March 5, 2024)

* Changed
  * Removed padding from section header cell to eliminate gaps between sections.

## 5.10.0 - (March 1, 2024)

* Added
  * Added support for table with no row headers.

## 5.9.0 - (February 28, 2024)

* Added
  * Column actions added.

## 5.8.0 - (February 28, 2024)

* Added
  * Added `boundingRef` prop for bounded table.

* Changed
  * Changed flowsheet data grid sections to have sticky title.

## 5.7.0 - (February 20, 2024)

* Added
  * Added timeout to resize observer.

## 5.6.0 - (February 16, 2024)

* Changed
  * Changed the default rowMinimumHeight value to auto to fit the row contents.
  * Updated lowlight light zebra strap color to darker grey to improve colour contrast.
  
* Added
  * Added support for orange and green column highlighting.

## 5.5.0 - (February 1, 2024)

* Added
  * Added rowMinimumHeight prop to support flexible row height.

* Changed
  * Added margin right to only tables with resizable columns.
  * Exported the table margin right via the `TableConstants.TABLE_MARGIN_RIGHT` constant.

* Changed
  * Replaced cell `height` property with `min-height` property to support large text content inside cell.

## 5.4.0 - (January 12, 2024)

* Added
  * Added Support for non contiguous multi select in flowsheet data grid.

## 5.3.2 - (December 18, 2023)

* Fixed
  * Fixed focus indicator issues.

## 5.3.1 - (December 11, 2023)

* Fixed
  * Fixed comment error for Table documentation.
  * Removed unnecessary rerenders

## 5.3.0 - (December 6, 2023)

* Breaking Changes (Note: this breaking change is needed at this time but does not have major impact)
  * Updated the onRowSelect callback to return an object containing section and row ids.
  
* Added
  * Exported the row selection column width via the `TableConstants.ROW_SELECTION_COLUMN_WIDTH` constant.
  
* Changed
  * Removed console warning message when no pinned columns exist.
  * Updated the table component to properly support selection callbacks for the grid context.

## 5.2.1 - (December 1, 2023)

* Fixed
  * Fixed the section headers so that the title would not scroll off the screen.

## 5.2.0 - (November 22, 2023)

* Fixed
  * Fixed the AT messages for the row selection functionality.

## 5.1.1-alpha.2 - (November 20, 2023)

* Breaking Changes
  * Renamed `hasColumnHeaders` prop to `hasVisibleColumnHeaders`.
  * Renamed `hasSelectableRows` prop to `rowSelectionMode` with an enumeration.

* Added
  * Added navigation via Home and End Keys.
  * Added title attribute to column header cells to enable tooltips.
  * Exported shapes for reusability.
  * Added single row selection mode.

* Fixed
  * Fixed tab index issues in the column header cells.
  * Fixed screenreader issue due to space in the headers attribute.
  * Fixed pinned column divider covering section headers.
  
## 5.1.1-alpha.1 - (November 9, 2023)

* Added
  * Added row selection mode to the table component.
  * Added ability for consumers to specify a custom screen reader message for masked cells.
  * Added sections support to the table component.

* Fixed
  * Fixed the column header background color for the Orion Fusion theme.
  * Fixed issue where column header cell was receiving tab focus instead of the button for table role.
  * Fixed column header left border style.
  * Fixed resize handle being communicated when non-header cell is focused.
  
## 5.1.1-alpha.0 - (October 25, 2023)

* Changed
  * Minor dependency version bump

## 5.1.0-alpha.0 - (October 20, 2023)

* Added
  * Added the ability to toggle zebra striping for table rows.
  
* Changed
  * Updated the table component so that the cell dive-in logic would not execute when not in the grid context.
  * Updated the table component to allow consumers to control the visibility of column headers in the table.
  * Modified the table component so that it can receive focus when scrollable.

## 5.0.0-alpha.0 - (October 17, 2023)

* Breaking Change
  * Redesigned the table component to meet accessibility guidelines. See Docs for details of the new API.

## 4.36.0 - (August 1, 2023)

* Changed
  * Minor dependency version bump

## 4.35.0 - (July 13, 2023)

* Changed
  * Minor dependency version bump

## 4.34.1 - (June 28, 2023)

* Changed
  * Minor dependency version bump

## 4.34.0 - (February 15, 2023)

* Changed
  * Updated wdio screenshots due to functional-testing upgrade.

## 4.33.0 - (December 7, 2022)

* Changed
  * Minor dependency version bump

## 4.32.0 - (July 14, 2022)

* Fixed
  * Fixed fusion theme colors and caret icon size to match similar components

## 4.31.2 - (July 5, 2022)

* Changed
  * Minor dependency version bump

## 4.31.1 - (February 24, 2022)

* Changed
  * Minor dependency version bump

## 4.31.0 - (February 2, 2022)

* Added
  * Migrate docs to terra-core-docs.

## 4.30.1 - (January 4, 2022)

* Changed
  * Minor dependency version bump

## 4.30.0 - (November 2, 2021)

* Changed
  * Minor dependency version bump

## 4.29.0 - (September 21, 2021)

* Changed
  * Updated WDIO Screenshots due to webpack-config-terra sass upgrade.

## 4.28.0 - (August 25, 2021)

* Changed
  * Minor dependency version bump

## 4.27.0 - (July 6, 2021)

* Changed
  * Minor dependency version bump

## 4.26.0 - (June 22, 2021)

* Changed
  * Minor dependency version bump

## 4.25.0 - (June 8, 2021)

* Changed
  * Updated `keycode-js` from `v2.0.1` to `v3.1.0`.

## 4.24.0 - (April 6, 2021)

* Changed
  * Removed unnecessary `wdio.conf.js` file
  * Upgrade to terra-functional-testing
  * Updated Jest command

## 4.23.0 - (March 9, 2021)

* Changed
  * Updated `focus-outline` colors for lowlight.

## 4.22.0 - (March 2, 2021)

* Fixed
  * Fixed errors in the Clinical Low Light theme

## 4.21.0 - (February 2, 2021)

* Fixed
  * Fixed missing id mapping for header cells

## 4.20.0 - (January 5, 2021)

* Changed
  * Minor dependency version bump

## 4.19.0 - (December 8, 2020)

* Changed
  * Update wdio tests to remove deprecated Terra.it helpers

  * Fixed broken hyperlinks in Table documentation

## 4.18.0 - (November 17, 2020)

* Changed
  * Minor dependency version bump

## 4.17.0 - (October 13, 2020)

* Changed
  * Replaced references to terra-doc-template with terra-docs

## 4.16.0 - (September 16, 2020)

* Changed
  * Updated guides with realistic data.

## 4.15.0 - (August 18, 2020)

* Fixed
  * Fixed jaws to announce state change for Rows and Header checkbox.
  * Fix click interactions on Header check mark when disabled.

* Added
  * Added an interaction media query to apply `hover` styles only on non-touch devices.

## 4.14.0 - (August 4, 2020)

* Changed
  * Minor dependency version bump

## 4.13.0 - (July 29, 2020)

* Changed
  * Update changelog formatting

## 4.12.0 - (July 21, 2020)

* Changed
  * Align column and rows for selectable tables.

## 4.11.0 - (July 14, 2020)

* Fixed
  * Corrected themeable variable duplicates and missing variables.

## 4.10.0 - (July 7, 2020)

* Changed
  * Rows and Header checkbox when disabled are now accessible for screenreaders to read out accordingly.

## 4.9.0 - (June 23, 2020)

* Changed
  * Minor dependency version bump

## 4.8.0 - (June 9, 2020)

* Changed
  * Apply themes by context and directly include packaged themes.
  * Update wdio test configuration to use root wdio config

## 4.7.0 - (April 28, 2020)

* Changed
  * Removed "View Component Source Code" from docs in favour of source code badge
* Added
  * Added clinical-lowlight-theme wdio screenshots

## 4.6.0 - (April 22, 2020)

* Added
  * Added `overflow: hidden` style to cell.

* Changed
  * Updated documentation link in README

## 4.5.0 - (March 17, 2020)

* Fixed
  * Fixed refCallBack not working for table rows.

## 4.4.0 - (March 10, 2020)

* Changed
  * Update docs to use mdx syntax.

## 4.3.0 - (March 3, 2020)

* Changed
  * Minor dependency version bump

## 4.2.0 - (February 18, 2020)

* Added
  * Added clinical-lowlight-theme theming files

## 4.1.0 - (February 4, 2020)

* Changed
  * Minor dependency version bump

## 4.0.0 - (January 17, 2020)

* Breaking Change
  * terra-table now only provides controlled variants.
  * Removed Component `SingleSelectTableRows` - No longer supported this uncontrolled variant of table.
  * Removed Component `MultiSelectTableRows` - No longer supported this uncontrolled variant of table.
  * Removed Component `SelectableTableRows` - Selection by index is no longer provided.
  * Removed Component `TableRows` - body element now provided by default within the table.

## 3.30.0 - (January 7, 2020)

* Removed
  * Removed yarn reference in docs

## 3.29.0 - (December 3, 2019)

* Added
  * Added orion-fusion-theme and generated the respective reference wdio screenshots.

## 3.28.0 - (October 30, 2019)

* Changed
  * Minor dependency version bump

## 3.27.0 - (October 3, 2019)

* Changed
  * Minor dependency version bump

## 3.26.0 - (September 19, 2019)

* Changed
  * Removed `details` tag from doc-site.

## 3.25.0 - (September 6, 2019)

* Added
  * Props table markdown file import added to doc site page

## 3.24.0 - (September 3, 2019)

* Changed
  * Updated the 'keycode-js' version from '^1.0.4' to '^2.0.1'.

## 3.23.0 - (August 21, 2019)

* Changed
  * Import for package version from package.json added to doc page
  * Cleaned up imports in examples and test files

## 3.22.0 - (August 14, 2019)

* Changed
  * updated package.json test scripts

## 3.21.0 - (July 30, 2019)

* Changed
  * Minor dependency version bump

## 3.20.0 - (July 24, 2019)

* Changed
  * Minor dependency version bump

## 3.19.0 - (July 16, 2019)

* Added
  * Added documentation on required peerDependencies

## 3.18.0  - (July 11, 2019)

* Changed
  * Update tests to use `Terra.describeViewports` for setting viewports and use `Terra.it.validatesElement`
  * Increased subheader css specificity

## 3.17.0 - (June 28, 2019)

* Added
  * Added themeable variable --terra-table-subheader-border-bottom

* Changed
  * Removed all inline styles from Dev-site components and implemented the same styles using external css.

## 3.16.0 - (June 18, 2019)

* Changed
  * Minor dependency bump

## 3.15.0 - (June 11, 2019)

* Removed
  * Removed node_modules from .npmignore

* Changed
  * Made required updates to consume terra-toolkit v5 and terra-dev-site v5

## 3.14.0 - (May 22, 2019)

* Changed
  * Revert update to allow VoiceOver to read selectable table rows.
  * Revert update to allow row selection with Voice Over + space.

## 3.13.0 - (May 21, 2019)

* Added
  * Added missing en-US and en-AU table translations
  * Updated to allow VoiceOver to read selectable table rows.
  * Updated to allow row selection with Voice Over + space.

## 3.12.0 - (May 9, 2019)

* Changed
  * Exclude subheader from zebra row styles.

## 3.11.0 - (May 1, 2019)

* Changed
  * Minor dependency version bump

## 3.10.0 - (April 16, 2019)

* Changed
  * Minor dependency version bump

## 3.9.0 - (April 9, 2019)

* Changed
  * Minor dependency version bump

## 3.8.0 - (March 26, 2019)

* Changed
  * Update react/react-dom peer-dependency to latest stable minor release

* Removed
  * Removed peer dependency on terra-base
  * Removed baseStyles import from terra-base

## 3.7.0 - (March 21, 2019)

* Changed
  * Replaced local keyCode values with keycode-js npm package

## 3.6.0 - (February 26, 2019)

* Changed
  * Minor dependency version bump

* Added
  * Added stylelint-enable to Table.module.scss

## 3.5.0 - (February 12, 2019)

* Changed
  * Minor dependency version bump

## 3.4.0 - (February 5, 2019)

* Changed
  * Minor dependency version bump

## 3.3.0 - (January 26, 2019)

* Changed
  * Minor dependency version bump

## 3.2.0 - (January 22, 2019)

* Changed
  * Minor dependency version bump

## 3.1.0 - (January 22, 2019)

* Changed
  * Minor dependency version bump

## 3.0.0 - (January 8, 2019)

* Changed
  * Updated theme variables

## 2.32.0 - (January 2, 2019)

* Changed
  * Split focus and hover styles to separate blocks

* Added
  * Table header (th) styles
  * Minor dependency version bump
  * Updated site examples to be more accessible.

## 2.31.1 - (November 20, 2018)

* Changed
  * Patch dependency version bump

## 2.31.0 - (November 19, 2018)

* Changed
  * Minor dependency version bump

## 2.30.0 - (November 13, 2018)

* Changed
  * Minor dependency version bump

## 2.29.0 - (November 9, 2018)

* Changed
  * Minor dependency version bump

## 2.28.0 - (October 24, 2018)

* Changed
  * Minor dependency version bump

## 2.27.0 - (October 16, 2018)

* Changed
  * Minor dependency version bump

## 2.26.0 - (October 8, 2018)

* Changed
  * Minor dependency version bump

## 2.25.0 - (October 2, 2018)

* Added
  * Exports for table header cell minimum width and sort added.

* Changed
  * SingleSelectableRows documentation

## 2.24.0 - (September 25, 2018)

* Changed
  * Minor dependency version bump

## 2.23.1 - (September 6, 2018)

* Changed
  * Patch dependency version bump

## 2.23.0 - (September 5, 2018)

* Changed
  * Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
  * Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

## 2.22.0 - (September 4, 2018)

* Changed
  * Minor dependency version bump

## 2.21.0 - (August 29, 2018)

* Changed
  * Minor dependency version bump

## 2.20.0 - (August 8, 2018)

* Added
  * Added documentation pages for TableRows, SelectableTableRows, and SingleSelectableRows

* Changed
  * Changed background color to transparent

## 2.19.0 - (August 1, 2018)

* Changed
  * Minor dependency version bump

## 2.18.0 - (July 19, 2018)

* Changed
  * Add .module extension to SCSS file(s)

## 2.17.0 - (July 17, 2018)

* Changed
  * Minor dependency version bump
  * Formatting changes per eslint v4 update

## 2.16.0 - (July 10, 2018)

* Changed
  * Minor dependency version bump

## 2.15.0 - (June 28, 2018)

* Changed
  * Minor dependency version bump

* Added
  * Added change log to the documentation on terra-dev-site

## 2.14.0 - (June 22, 2018)

* Changed
  * Moved terra-base from dependency to peerDependency

## 2.13.0 - (June 12, 2018)

* Changed
  * Convert nightwatch tests to wdio.
  * Updated "test:jest" script to work on windows.

## 2.12.0 - (May 30, 2018)

* Changed
  * Updated structure to match terra-dev-site 1.0 and moved doc examples internal.

## 2.11.0 - (May 25, 2018)

* Changed
  * Minor dependency version bump

## 2.10.0 - (May 23, 2018)

* Changed
  * Minor dependency version bump

## 2.9.0 - (May 16, 2018)

* Changed
  * Minor dependency version bump

## 2.8.0 - (May 9, 2018)

* Changed
  * Minor dependency version bump

## 2.7.0 - (May 2, 2018)

* Changed
  * Minor dependency version bump

## 2.6.0 - (April 20, 2018)

* Changed
  * Minor dependency version bump

## 2.5.0 - (April 15, 2018)

* Changed
  * Minor dependency version bump

## 2.4.0 - (April 5, 2018)

* Changed
  * Minor dependency version bump

## 2.3.0 - (March 30, 2018)

* Changed
  * Fixed issue with setting onClick handler on TableHeaderCell

## 2.2.0 - (March 6, 2018)

* Removed
  * Removed props-table script from package.json

## 2.1.0 - (February 26, 2018)

* Changed
  * Minor dependency version bump

## 2.0.1 - (February 13, 2018)

* Changed
  * Updated peerDependencies

## 2.0.0 - (February 12, 2018)

* Changed
  * Updated to use React 16

## 1.20.0 - (February 1, 2018)

* Changed
  * Moved table sort indicator

## 1.19.0 - (January 18, 2018)

* Changed
  * Minor dependency version bump

## 1.18.0 - (January 5, 2018)

* Changed
  * Minor dependency version bump

## 1.17.0 - (November 28, 2017)

* Changed
  * Minor dependency version bump

## 1.16.0 - (November 16, 2017)

* Added
  * MultiSelectableRows component

## 1.15.0 - (November 7, 2017)

* Changed
  * Minor dependency version bump

## 1.14.0 - (October 24, 2017)

* Changed
  * Minor dependency version bump

## 1.13.0 - (October 6, 2017)

* Added
  * SelectableTableRows component

* Changed
  * Refactor Single Selectable Rows typecheck
  * Refactor nightwatch tests
  * Updated SingleSelectableRows to utilize the SelectableTableRows component

* Fixed
  * Initial Single Select Table render to accept an isSelected Row

## 1.12.0 - (September 26, 2017)

* Removed
  * Remove stylelint-disable selector-class-pattern

## 1.11.0 - (September 19, 2017)

* Changed
  * Minor dependency version bump

## 1.10.0 - (September 12, 2017)

* Changed
  * Update selection styles

## 1.9.0 - (September 7, 2017)

* Changed
  * Minor dependency version bump

## 1.8.0 - (September 5, 2017)

* Changed
  * Update nightwatch tests and test scripts.

## 1.7.0 - (August 31, 2017)

* Changed
  * Minor dependency version bump

## 1.6.0 - (August 15, 2017)

* Changed
  * Minor dependency version bump

## 1.5.0 - (August 8, 2017)

* Changed
  * Change data-class to be name spaced

## 1.4.0 - (August 1, 2017)

* Fixed
  * Fixed typo which dropped custom class names on TableCell component

## 1.3.0 - (August 1, 2017)

* Changed
  * Converted component to use CSS modules

## 1.2.0 - (July 26, 2017)

* Changed
  * Minor dependency version bump

## 1.1.0 - (July 18, 2017)

* Added
  * Added preventDefault to SingleSelect table row
  * Added missing props-tables

* Changed
  * Updated nightwatch test scripts

* Removed
  * Removed nightwatch.config file

## 1.0.0 - (June 28, 2017)

Initial stable release
