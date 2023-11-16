import React, {
  useState, useCallback, useEffect, useMemo, useRef,
} from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';
import * as KeyCode from 'keycode-js';

import VisuallyHiddenText from 'terra-visually-hidden-text';
import { sectionShape, rowShape, columnShape } from 'terra-table';
import DataGrid from './DataGrid';
import styles from './FlowsheetDataGrid.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * String that identifies the element (or elements) that labels the grid.
   */
  ariaLabelledBy: PropTypes.string,

  /**
   * String that labels the grid for accessibility. If ariaLabelledBy is specified, ariaLabel will not be used.
   */
  ariaLabel: PropTypes.string,

  /**
   * String that will be used to identify the Grid. If multiple grids are on the same page, each grid should have
   * a unique id.
   */
  id: PropTypes.string.isRequired,

  /**
   * Data for content in the body of the Grid. Rows will be rendered in the order given. The first cell in each row will be the row header.
   */
  rows: PropTypes.arrayOf(rowShape),

  /**
  * Data for content in the body of the table. Sections will be rendered in the order given.
  */
  sections: PropTypes.arrayOf(sectionShape),

  /**
   * Data for columns. Columns will be presented in the order given.
   * The first column, pinned to the leftmost side of the grid, will contain row headers.
   * The remaining columns will be rendered in the horizontal overflow.
   */
  columns: PropTypes.arrayOf(columnShape),

  /**
   * Number indicating the default column width in px. This value will be used if no overriding width value is provided on a per-column basis.
   */
  defaultColumnWidth: PropTypes.number,

  /**
   * String that specifies the column height. Any valid CSS height value is accepted.
   */
  columnHeaderHeight: PropTypes.string,

  /**
   * String that specifies the height for the rows in the grid. Any valid CSS value is accepted.
   */
  rowHeight: PropTypes.string,

  /**
   * Callback function that is called when a selectable cell is selected. Parameters:
   * @param {string} rowId rowId
   * @param {string} columnId columnId
   */
  onCellSelect: PropTypes.func,

  /**
   * Callback function that is called when all selected cells need to be unselected. Parameters: none.
   */
  onClearSelectedCells: PropTypes.func,

  /**
   * Callback function that is called when a range of selectable cells is selected. Parameters:
   * @param {array} cells - Array of cells each containing a rowId and columnId, both as strings.
   */
  onCellRangeSelect: PropTypes.func,

  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const defaultProps = {
  defaultColumnWidth: 200,
  columnHeaderHeight: '2.5rem',
  rowHeight: '2.5rem',
  rows: [],
  columns: [],
};

function FlowsheetDataGrid(props) {
  const {
    id,
    ariaLabelledBy,
    ariaLabel,
    rows,
    sections,
    columns,
    defaultColumnWidth,
    columnHeaderHeight,
    rowHeight,
    onCellSelect,
    onClearSelectedCells,
    onCellRangeSelect,
    intl,
  } = props;

  const anchorCell = useRef(null);
  const selectedCells = useRef([]);
  const [cellSelectionAriaLiveMessage, setCellSelectionAriaLiveMessage] = useState(null);
  const inShiftDirectionalMode = useRef(false);
  const flowsheetColumns = useMemo(() => columns.map(column => ({
    ...column,
    isSelectable: column.isSelectable !== false,
    isResizable: false,
  })), [columns]);

  const pinnedColumns = flowsheetColumns.length ? [flowsheetColumns[0]] : [];
  const overflowColumns = flowsheetColumns.length > 1 ? flowsheetColumns.slice(1) : [];

  const contentHasNoResult = (content) => (content === null || content === '' || content === '--');

  const flowsheetRows = useMemo(() => {
    const noResultCellContent = (
      <>
        <span aria-hidden>{intl.formatMessage({ id: 'Terra.flowsheetDataGrid.no-result-display' })}</span>
        <VisuallyHiddenText text={intl.formatMessage({ id: 'Terra.flowsheetDataGrid.no-result' })} />
      </>
    );

    const newRows = [...rows];
    newRows.forEach((row, rowIndex) => {
      const newCells = [...row.cells];
      newCells.forEach((cell, cellIndex) => {
        newCells[cellIndex].isSelectable = cell.isSelectable !== false;
        // Cell content has no result and is not a row header (first column), set content to "No result".
        if (contentHasNoResult(cell.content) && cellIndex !== 0) {
          newCells[cellIndex].content = noResultCellContent;
        }
      });

      newRows[rowIndex].cells = newCells;
    });

    return newRows;
  }, [intl, rows]);

  const flowsheetSections = useMemo(() => {
    if (!sections) {
      return null;
    }

    const noResultCellContent = (
      <>
        <span aria-hidden>{intl.formatMessage({ id: 'Terra.flowsheetDataGrid.no-result-display' })}</span>
        <VisuallyHiddenText text={intl.formatMessage({ id: 'Terra.flowsheetDataGrid.no-result' })} />
      </>
    );

    const newSections = [...sections];
    newSections.forEach((section, sectionIndex) => {
      const newRows = [...section.rows];
      newRows.forEach((row, rowIndex) => {
        const newCells = [...row.cells];
        newCells.forEach((cell, cellIndex) => {
          newCells[cellIndex].isSelectable = cell.isSelectable !== false;
          // Cell content has no result and is not a row header (first column), set content to "No result".
          if (contentHasNoResult(cell.content) && cellIndex !== 0) {
            newCells[cellIndex].content = noResultCellContent;
          }
        });

        newRows[rowIndex].cells = newCells;
      });
      newSections[sectionIndex].rows = newRows;
    });

    return newSections;
  }, [intl, sections]);

  useEffect(() => {
    const previousSelectedCells = [...selectedCells.current];
    const newSelectedCells = [];
    rows.forEach((row) => {
      row.cells.forEach((cell, cellIndex) => {
        if (cell.isSelected) {
          newSelectedCells.push({ rowId: row.id, columnId: columns[cellIndex].id });
        }
      });
    });
    selectedCells.current = [...newSelectedCells];

    if (!selectedCells.current.length) {
      anchorCell.current = null;
    }

    if (previousSelectedCells.length > 0 && selectedCells.current.length === 0) {
      setCellSelectionAriaLiveMessage(intl.formatMessage({ id: 'Terra.flowsheetDataGrid.no-cells-selected' }));
    } else if (selectedCells.current.length) {
      setCellSelectionAriaLiveMessage(intl.formatMessage({ id: 'Terra.flowsheetDataGrid.cells-selected' }, { cellCount: selectedCells.current.length }));
    }
  }, [intl, rows, columns, setCellSelectionAriaLiveMessage]);

  const selectCellRange = useCallback((selectedRowId, selectedColumnId) => {
    let gridRows = rows;
    if (sections) {
      gridRows = sections.flatMap((section) => section.rows);
    }
    const anchorRowIndex = gridRows.findIndex(row => row.id === anchorCell.current.rowId);
    const anchorColumnIndex = columns.findIndex(col => col.id === anchorCell.current.columnId);
    const selectedRowIndex = gridRows.findIndex(row => row.id === selectedRowId);
    const selectedColumnIndex = columns.findIndex(col => col.id === selectedColumnId);

    // Determine the boundaries of selected region.
    const rowIndexTopBound = Math.min(anchorRowIndex, selectedRowIndex);
    const rowIndexBottomBound = Math.max(anchorRowIndex, selectedRowIndex);
    const columnIndexLeftBound = Math.min(anchorColumnIndex, selectedColumnIndex);
    const columnIndexRightBound = Math.max(anchorColumnIndex, selectedColumnIndex);

    const cellsToSelect = [];
    for (let rowIdx = rowIndexTopBound; rowIdx <= rowIndexBottomBound; rowIdx += 1) {
      const rowId = gridRows[rowIdx].id;
      for (let colIdx = columnIndexLeftBound; colIdx <= columnIndexRightBound; colIdx += 1) {
        const columnId = columns[colIdx].id;
        cellsToSelect.push({ rowId, columnId });
      }
    }

    if (onCellRangeSelect) {
      onCellRangeSelect(cellsToSelect);
    }
  }, [rows, sections, columns, onCellRangeSelect]);

  const handleCellSelection = useCallback((selectionDetails) => {
    // Exclude the row header column.
    if (!selectionDetails.isCellSelectable || selectionDetails.columnIndex === 0) {
      return;
    }

    if (selectionDetails.isShiftPressed && anchorCell.current !== null) {
      selectCellRange(selectionDetails.rowId, selectionDetails.columnId);
    } else if (onCellSelect) {
      anchorCell.current = { rowId: selectionDetails.rowId, columnId: selectionDetails.columnId };
      onCellSelect(selectionDetails.rowId, selectionDetails.columnId);
    }
  }, [onCellSelect, selectCellRange]);

  const handleCellRangeSelection = useCallback((rowIndex, columnIndex, direction) => {
    // Exclude the row header column as an eligible anchor/start cell.
    if (columnIndex <= 0 && !inShiftDirectionalMode.current) {
      return;
    }

    if (!inShiftDirectionalMode.current) {
      // Start of range selection using Shift+Up/Down/Left/Right so save this as the anchor/start for the range if one does not exist.
      inShiftDirectionalMode.current = true;
      if (anchorCell.current === null) {
        anchorCell.current = { rowId: rows[rowIndex - 1].id, columnId: columns[columnIndex].id };
      }
    }

    let nextRowIndex = rowIndex;
    let nextColumnIndex = columnIndex;

    switch (direction) {
      case KeyCode.KEY_UP:
        nextRowIndex -= 1;
        break;
      case KeyCode.KEY_DOWN:
        nextRowIndex += 1;
        break;
      case KeyCode.KEY_LEFT:
        nextColumnIndex -= 1;
        break;
      case KeyCode.KEY_RIGHT:
        nextColumnIndex += 1;
        break;
      default:
        break;
    }

    // Reset to valid selectable index if outer bounds reached.
    if (nextRowIndex <= 0) {
      nextRowIndex = 1;
    } else if (nextRowIndex > rows.length) {
      nextRowIndex = rows.length;
    }

    if (nextColumnIndex <= 0) {
      nextColumnIndex = 1;
    } else if (nextColumnIndex >= columns.length) {
      nextColumnIndex = columns.length - 1;
    }

    selectCellRange(nextRowIndex, nextColumnIndex);
  }, [rows, columns, selectCellRange]);

  const handleKeyUp = (event) => {
    const key = event.keyCode;
    switch (key) {
      case KeyCode.KEY_SHIFT:
        if (inShiftDirectionalMode.current) {
          inShiftDirectionalMode.current = false;
          anchorCell.current = null;
        }
        break;
      default:
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={cx('flowsheet-data-grid-container')} onKeyUp={handleKeyUp}>
      <DataGrid
        id={id}
        ariaLabel={ariaLabel}
        ariaLabelledBy={ariaLabelledBy}
        rows={flowsheetRows}
        sections={flowsheetSections}
        rowHeight={rowHeight}
        rowHeaderIndex={0}
        pinnedColumns={pinnedColumns}
        overflowColumns={overflowColumns}
        defaultColumnWidth={defaultColumnWidth}
        columnHeaderHeight={columnHeaderHeight}
        onCellSelect={handleCellSelection}
        onClearSelection={onClearSelectedCells}
        onCellRangeSelect={handleCellRangeSelection}
      />
      <VisuallyHiddenText aria-live="polite" text={cellSelectionAriaLiveMessage} />
    </div>
  );
}

FlowsheetDataGrid.propTypes = propTypes;
FlowsheetDataGrid.defaultProps = defaultProps;

export default injectIntl(FlowsheetDataGrid);
