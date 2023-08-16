# Changelog

## Unreleased

* Added
  * Added ability to use spacebar on masked and non-selectable cells to select rows.
  * Added ability to treat the `terra-worklist-data-grid` component as a single tabstop.
  * Added ability to resize columns via keyboard.

* Changed
  * Removed roving tabIndex and resolved focus management issues within cells.

* Fixed
  * Reduced number of unnecessary rerenders in the `terra-worklist-data-grid` component.

## 0.4.0 - (August 10, 2023)

* Breaking Changes
  * Removed `columns` prop in favor of the new `pinnedColumns` and `overflowColumns` props.

* Added
  * Added `pinnedColumns` prop for columns that will be pinned.
  * Added `overflowColumns` prop for columns that are scrollable.
  * Added support for pinned columns.
  * Added ability to dive into cells with focusable elements.
  * Added ability to select the row selection column header to allow sorting by consumers.
 
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
