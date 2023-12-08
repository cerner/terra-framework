# Changelog

## Unreleased

* Added
  * Added keyboard navigation support for sections.
  
## 1.6.0 - (December 5, 2023)

* Changed
  * Removed console warning message when no pinned columns exist.

## 1.5.0 - (December 1, 2023)

* Changed
  * Minor dependency version bump

## 1.4.0 - (November 23, 2023)

* Added
  * Added `onRowSelect` callback prop to FlowsheetDataGrid to handle row header cell selection.

## 1.3.0 - (November 22, 2023)

* Changed
  * Updated Table component to use new `rowSelectionMode` prop instead of `hasSelectableRows`.

## 1.2.0 - (November 20, 2023)

* Fixed
  * Fixed issue where focus was given to the column header instead of its button element.
  * Fixed issue where row selection was being announced twice in Worklist Data Grid.
  * Fixed an issue when the datagrid is updated and the column/row indices no longer exist.

* Added
  * Added `hasVisibleColumnHeaders` prop for FlowsheetDataGrid to toggle visibility of column headers.
  * Added section support to FlowsheetDataGrid.

* Changed
  * Updated all cells to be selectable and columns unselectable in FlowsheetDataGrid, as `isSelectable` prop is not supported for columns or cells.

## 1.1.0 - (November 9, 2023)

* Fixed
  * Fixed the column header background color for the Orion Fusion theme.
  * Fixed pinned column divider issue during keyboard resize.
  * Fixed resize handle being communicated when non-header cell is focused.

* Added
  * Added ability to select a range of cells to FlowsheetDataGrid.

* Changed
  * Updated unit test to account for generated ids of `terra-table` elements.

## 1.0.0 - (October 25, 2023)
* Initial working component release.

* Added
  * Added additional screen reader support to announce that column headers are interactable upon selection.
  * Added keyboard support for column resizing.
  * Added translations.
  * Added "No Result" cells to FlowsheetDataGrid.

## 0.8.1 - (October 17, 2023)

* Fixed
  * Fixed issue where WorklistDataGrid loses focus when Row Selection Mode is turned off from a Row Selection Cell.
  * Fixed issue where focus was moved from editable fields when using key events from data grid components.
  * Fixed tab focus management when next element is in a hidden container.
  * Fixed tab focus management to wrap to the first focusable element when the data grid is the last focusable element.

## 0.8.0 - (October 11, 2023)

* Added
  * Added base FlowsheetDataGrid component.

* Changed
  * Updated prop descriptions for better consistency and accuracy in the `terra-data-grid` component.

## 0.7.0 - (October 3, 2023)

* Fixed
  * Fixed the screen reader messages to count header row as the first row.

## 0.6.0 - (September 14, 2023)

* Breaking Changes
  * Renamed `terra-worklist-data-grid` package to `terra-data-grid`.
  * Changed WorklistDataGrid component from default to named export. WorklistDataGrid can now be imported as `import { WorklistDataGrid } from 'terra-data-grid'`.

* Fixed
  * Fixed scroll issues for pinned columns.
  * Fixed scroll issues for fixed column header row.
  * Fixed border issues for selected rows

* Changed
  * Updated the `terra-worklist-data-grid` component to provide row selection assistive technology messages based on the properties provided by the consumer.
  * Updated the `terra-worklist-data-grid` component to set initial focus to the row selection header when row selection mode is enabled.

___
All release notes below apply to the `terra-worklist-data-grid` package (renamed to `terra-data-grid` with the 0.6 release above).

## 0.5.0 - (August 31, 2023)

* Added
  * Added box shadow for pinned columns in fusion theme.
  * Added ability to use spacebar on masked and non-selectable cells to select rows.
  * Added ability to treat the `terra-worklist-data-grid` component as a single tabstop.
  * Added a sticky column header feature to `terra-worklist-data-grid`

* Changed
  * Removed roving tabIndex and resolved focus management issues within cells.
  * Updated the functionality for selecting a range of rows. Updated `onRowSelect` prop to take only one array parameter.

* Fixed
  * Reduced number of unnecessary rerenders in the `terra-worklist-data-grid` component.
  * Fixed cells not honoring the value of props passed by consumers.
  * Fixed pinned column separator not adjusting size when the table height changes.
  * Fixed pinned column cells not being selectable.
  * Fixed pinned column border issues during scrolling.
  * Fixed hover/background colors for alternating rows.

## 0.4.0 - (August 10, 2023)

* Breaking Changes
  * Removed `columns` prop in favor of the new `pinnedColumns` and `overflowColumns` props.

* Added
  * Added `pinnedColumns` prop for columns that will be pinned.
  * Added `overflowColumns` prop for columns that are scrollable.
  * Added support for pinned columns.
  * Added ability to dive into cells with focusable elements.
  * Added ability to select the row selection column header to allow sorting by consumers.
  * Added ability to select rows via mouse and keyboard.

* Fixed
  * Text alignment of the row header column.

## 0.3.0 - (July 19, 2023)

* Breaking Changes
  * Removed `columnWidth` prop in favor of the new `defaultColumnWidth` prop.
  * Renamed `ariaLabelledby` prop to `ariaLabelledBy` to follow proper camelCasing and for consistency with other Terra components.

* Added
  * Added additional keyboard navigation shortcuts.
  * Added support for cell selection.
  * Added ability to resize columns via mouse.
  * Added `defaultColumnWidth` prop to set the default column width if it is not set per column.
  * Added `onColumnResize` prop for notifying consumers of a column resize.

* Changed
  * Updated data grid to honor the column and row widths specified by consumers.
  * Optimized package size by excluding tests.

## 0.2.0 - (July 4, 2023)

* Added
  * Added masked cell support.
  * Added hover state for selectable cells.
  * Added blank cell support.
  * Added ability to allow consumers to specify the sort indicator and error state for columns.

* Changed
  * Removed ability to set variable row heights.
  * Updated styling on cell focus.

## 0.1
  * Initial stable release.
