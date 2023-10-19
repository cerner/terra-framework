import React, {
  useCallback, useEffect, useMemo, useRef,
} from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';
import * as KeyCode from 'keycode-js';

import VisuallyHiddenText from 'terra-visually-hidden-text';

import DataGrid from './DataGrid';
import rowShape from './proptypes/rowShape';
import { columnShape } from './proptypes/columnShape';
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
   * Callback function that is called when a selectable cell is selected. Parameters:
   * @param {string} rowId rowId
   * @param {string} columnId columnId
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
  const inShiftDirectionalMode = useRef(false);

  const flowsheetColumns = useMemo(() => columns.map(column => ({ ...column, isResizable: false })), [columns]);
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
        // Cell content has no result and is not a row header (first column), set content to "No result".
        if (contentHasNoResult(cell.content) && cellIndex !== 0) {
          newCells[cellIndex].content = noResultCellContent;
        }
      });

      newRows[rowIndex].cells = newCells;
    });

    return newRows;
  }, [intl, rows]);

  useEffect(() => {
    const newSelectedCells = [];
    rows.forEach((row) => {
      row.cells.forEach((cell, cellIndex) => {
        if (cell.isSelected) {
          newSelectedCells.push({ rowId: row.id, columnId: columns[cellIndex].id });
        }
      });
    });
    selectedCells.current = [...newSelectedCells];

    if (selectedCells.current.length === 1) {
      anchorCell.current = { rowId: selectedCells.current[0].rowId, columnId: selectedCells.current[0].columnId };
    } else if (!selectedCells.current.length) {
      anchorCell.current = null;
    }

    console.log(selectedCells.current.length);
  }, [rows, columns]);

  const handleClearSelectedCells = useCallback(() => {
    if (onClearSelectedCells) {
      onClearSelectedCells();
    }
  }, [onClearSelectedCells]);

  const selectCellRange = useCallback((rowIndex, columnIndex) => {
    const anchorRowIndex = rows.findIndex(row => row.id === anchorCell.current.rowId);
    const anchorColumnIndex = columns.findIndex(col => col.id === anchorCell.current.columnId);

    // Determine the boundaries of selected region.
    const rowIndexTopBound = Math.min(anchorRowIndex, rowIndex - 1);
    const rowIndexBottomBound = Math.max(anchorRowIndex, rowIndex - 1);
    const columnIndexLeftBound = Math.min(anchorColumnIndex, columnIndex);
    const columnIndexRightBound = Math.max(anchorColumnIndex, columnIndex);

    const cellsToSelect = [];
    for (let row = rowIndexTopBound; row <= rowIndexBottomBound; row += 1) {
      const rowId = rows[row].id;
      for (let cell = columnIndexLeftBound; cell <= columnIndexRightBound; cell += 1) {
        const columnId = columns[cell].id;
        cellsToSelect.push({ rowId, columnId });
      }
    }

    if (onCellRangeSelect) {
      onCellRangeSelect(cellsToSelect);
    }
  }, [rows, columns, onCellRangeSelect]);

  const handleCellSelection = useCallback((selectionDetails) => {
    // Exclude the row header column.
    if (!selectionDetails.isCellSelectable || selectionDetails.columnIndex === 0) {
      return;
    }

    // New cell selection made, not in Shift+Up/Down/Left/Right mode.
    inShiftDirectionalMode.current = false;

    if (selectionDetails.isShiftPressed) {
      if (!anchorCell.current) {
        anchorCell.current = { rowId: selectionDetails.rowId, columnId: selectionDetails.columnId };
      }
      selectCellRange(selectionDetails.rowIndex, selectionDetails.columnInde);
    } else if (onCellSelect) {
      onCellSelect(selectionDetails.rowId, selectionDetails.columnId);
    }
  }, [onCellSelect, selectCellRange]);

  const handleCellRangeSelection = useCallback((rowIndex, columnIndex, direction) => {
    // Exclude the row header column as an eligible anchor/start cell.
    if (columnIndex <= 0 && !anchorCell.current) {
      return;
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

    if (!inShiftDirectionalMode.current) {
      // Start of range selection using Shift+Up/Down/Left/Right so save this as the anchor/start for the range.
      inShiftDirectionalMode.current = true;
      anchorCell.current = { rowId: rows[rowIndex - 1].id, columnId: columns[columnIndex].id };
    }

    selectCellRange(nextRowIndex, nextColumnIndex);
  }, [rows, columns, selectCellRange]);

  return (
    <div className={cx('flowsheet-data-grid-container')}>
      <DataGrid
        id={id}
        ariaLabel={ariaLabel}
        ariaLabelledBy={ariaLabelledBy}
        rows={flowsheetRows}
        rowHeight={rowHeight}
        rowHeaderIndex={0}
        pinnedColumns={pinnedColumns}
        overflowColumns={overflowColumns}
        defaultColumnWidth={defaultColumnWidth}
        columnHeaderHeight={columnHeaderHeight}
        onCellSelect={handleCellSelection}
        onClearSelectedCells={handleClearSelectedCells}
        onCellRangeSelection={handleCellRangeSelection}
      />
    </div>
  );
}

FlowsheetDataGrid.propTypes = propTypes;
FlowsheetDataGrid.defaultProps = defaultProps;

export default injectIntl(FlowsheetDataGrid);
