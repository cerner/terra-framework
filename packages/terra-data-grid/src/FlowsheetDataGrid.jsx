import React, {
  useState, useCallback, useEffect, useMemo, useRef,
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

    if (selectionDetails.isShiftPressed) {
      if (!anchorCell.current) {
        anchorCell.current = { rowId: selectionDetails.rowId, columnId: selectionDetails.columnId };
      }
      selectCellRange(selectionDetails.rowIndex, selectionDetails.columnIndex);
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
      // Start of range selection using Shift+Up/Down/Left/Right so save this as the anchor/start for the range.
      inShiftDirectionalMode.current = true;
      anchorCell.current = { rowId: rows[rowIndex - 1].id, columnId: columns[columnIndex].id };
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
        inShiftDirectionalMode.current = false;
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
        rowHeight={rowHeight}
        rowHeaderIndex={0}
        pinnedColumns={pinnedColumns}
        overflowColumns={overflowColumns}
        defaultColumnWidth={defaultColumnWidth}
        columnHeaderHeight={columnHeaderHeight}
        onCellSelect={handleCellSelection}
        onClearSelection={handleClearSelectedCells}
        onCellRangeSelect={handleCellRangeSelection}
      />
      <VisuallyHiddenText aria-live="polite" text={cellSelectionAriaLiveMessage} />
    </div>
  );
}

FlowsheetDataGrid.propTypes = propTypes;
FlowsheetDataGrid.defaultProps = defaultProps;

export default injectIntl(FlowsheetDataGrid);
