import React, {
  useContext, useRef, useState, useEffect,
} from 'react';
import './_elementPolyfill';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import * as KeyCode from 'keycode-js';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import styles from './WorklistDataGrid.module.scss';
import WorklistDataGridUtils from './utils/WorklistDataGridUtils';
import WorklistDataGridPropTypes from './proptypes/WorklistDataGridPropTypes';
import Row from './subcomponents/Row';
import ColumnHeaderCell from './subcomponents/ColumnHeaderCell';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * String representing an attribute which identifies the element that labels the grid.
   */
  ariaLabelledby: PropTypes.string,
  /**
   * String that labels the grid for accessibility. If ariaLabelledby is specified, ariaLabel will not be used.
   */
  ariaLabel: PropTypes.string,
  /**
   * String that will be used to identify the Grid. If multiple grids are on the same page, each grid should have
   * a unique id.
   */
  id: PropTypes.string.isRequired,
  /**
   * Data for columns. Columns will be presented in the order given.
   */
  columns: PropTypes.arrayOf(WorklistDataGridPropTypes.columnShape),
  /**
   * Data for content in the body of the Grid. Rows will be rendered in the order given.
   */
  rows: PropTypes.arrayOf(WorklistDataGridPropTypes.rowShape),
  /**
   * String that specifies the default width for columns in the grid. Any valid CSS width value is accepted.
   * To override the default value, provide width for the column that needs to be overridden.
   */
  columnWidth: PropTypes.string,
  /**
   * String that specifies the column height. Any valid CSS height value is accepted.
   */
  columnHeaderHeight: PropTypes.string,
  /**
   * String that specifies the height for the rows in the grid. Any valid CSS width value is accepted.
   */
  rowHeight: PropTypes.string,
  /**
   * Number indicating the index of the column that represents row header. Index is 0 based and cannot exceed one less than the number of columns in the grid.
   */
  rowHeaderIndex: PropTypes.number,
  /**
   * Callback function that is called when a selectable cell is selected. Parameters: `onRowSelect(rowId, columnId)`.
   */
  onCellSelect: PropTypes.func,
  /**
   * Callback function that will be called when a row is selected. Parameters: `onRowSelect(rowId)`.
   */
  onRowSelect: PropTypes.func,
  /**
   * Callback function that will be called when all rows are selected. Parameters: `onSelectAllRows()`.
   */
  onRowSelectAll: PropTypes.func,
  /**
   * Function that is called when a selectable header cell is selected. Parameters: `onColumnSelect(columnId)`
   */
  onColumnSelect: PropTypes.func,
  /**
   * Callback function that is called when all selected rows need to be unselected.
   */
  onClearSelectedRows: PropTypes.func,
  /**
   * Callback function that is called when no row is selected and the row selection mode needs to turned off.
   */
  onDisableSelectableRows: PropTypes.func,
  /**
   * Boolean indicating whether or not the DataGrid should allow entire rows to be selectable. An additional column will be
   * rendered to allow for row selection to occur.
   */
  hasSelectableRows: PropTypes.bool,
  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const defaultProps = {
  rowHeaderIndex: 0,
};

function WorklistDataGrid(props) {
  const {
    id,
    ariaLabelledby,
    ariaLabel,
    columns,
    rows,
    onCellSelect,
    onRowSelect,
    onRowSelectAll,
    onColumnSelect,
    onClearSelectedRows,
    onDisableSelectableRows,
    hasSelectableRows,
    intl,
    rowHeaderIndex,
  } = props;

  const grid = useRef();
  const focusedRow = useRef(0);
  const focusedCol = useRef(0);
  const ariaLiveMsg = useRef();

  const [currentSelectedCell, setCurrentSelectedCell] = useState(null);
  const displayedColumns = (hasSelectableRows ? [WorklistDataGridUtils.ROW_SELECTION_COLUMN] : []).concat(columns);

  const theme = useContext(ThemeContext);

  const isRowSelectionCell = (columnIndex) => (
    hasSelectableRows && columnIndex < displayedColumns.length && displayedColumns[columnIndex].id === WorklistDataGridUtils.ROW_SELECTION_COLUMN.id
  );

  const isTabStop = (rowIndex, colIndex) => (rowIndex === focusedRow.current && colIndex === focusedCol.current);
  const isCellSelected = (rowId, columnId) => (currentSelectedCell && currentSelectedCell.rowId === rowId && currentSelectedCell.columnId === columnId);

  const setFocus = (rowIndex, colIndex, makeActive) => {
    let focusedCell = grid.current.rows[rowIndex].cells[colIndex];
    if (isRowSelectionCell(colIndex) && focusedCell.firstChild) {
      focusedCell = focusedCell.firstChild;
    }
    focusedCell.tabIndex = 0;
    if (makeActive && focusedCell.focus) {
      focusedCell.focus();
    }
  };

  const removeTabStop = (rowIndex, colIndex) => {
    const cell = grid.current.rows[rowIndex].cells[colIndex];
    // Remove Tab stop from previous cell in table that has focus and set it to the
    // cell that was clicked.
    cell.tabIndex = -1;
    if (isRowSelectionCell(colIndex) && cell.firstChild) {
      // Also remove tabstop from the checkbox in the case of a row selection cell.
      cell.firstChild.tabIndex = -1;
    }
  };

  const setFocusedRowCol = (newRowIndex, newColIndex, makeActive) => {
    removeTabStop(focusedRow.current, focusedCol.current);
    focusedRow.current = newRowIndex;
    focusedCol.current = newColIndex;
    setFocus(newRowIndex, newColIndex, makeActive);
  };

  useEffect(() => {
    ariaLiveMsg.current = intl.formatMessage({ id: hasSelectableRows ? 'Terra.worklist-data-grid.row-selection-mode-enabled' : 'Terra.worklist-data-grid.row-selection-mode-disabled' });
    // When row selection mode is turned on or off a row selection column is added or removed.
    // Therefore, shift the focused cell to the left or right.
    let newFocusCell = { row: focusedRow.current, col: (focusedCol.current + (hasSelectableRows ? 1 : -1)) };

    if (hasSelectableRows && focusedRow.current === 0 && focusedCol.current === 0) {
      // When row selection is turned on for the first time, default to the first row selection cell.
      newFocusCell = { row: 1, col: 0 };
    } else if (!hasSelectableRows && focusedCol.current === 0) {
      // When row selection is turned off, if a cell in the row selection had focus, then
      // refocus on the first cell in that row.
      newFocusCell = { row: focusedRow.current, col: 0 };
    }
    setFocusedRowCol(newFocusCell.row, newFocusCell.col, false);
    if (currentSelectedCell != null) {
      setCurrentSelectedCell(null);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasSelectableRows]);

  const areRowsSelected = () => (
    rows.find(r => r.isSelected === true)
  );

  const handleClearRowSelection = () => {
    ariaLiveMsg.current = '';
    if (areRowsSelected()) {
      ariaLiveMsg.current = intl.formatMessage({ id: 'Terra.worklist-data-grid.all-rows-unselected' });
      // Esc (while in row selection mode and rows are selected): Clear selection
      if (onClearSelectedRows) {
        onClearSelectedRows();
      }
    } else if (onDisableSelectableRows) {
      ariaLiveMsg.current = intl.formatMessage({ id: 'Terra.worklist-data-grid.row-selection-mode-disabled' });
      onDisableSelectableRows();
    }
  };

  const selectRows = (selectAllRows, rowId, rowIndex) => {
    let msgId = 'Terra.worklist-data-grid.all-rows-selected';
    if (!selectAllRows) {
      const isSelectAction = !rows[rowIndex - 1].isSelected; // Determine if this is select or unselected.
      msgId = isSelectAction ? 'Terra.worklist-data-grid.row-selection-template' : 'Terra.worklist-data-grid.row-selection-cleared-template';
    }
    ariaLiveMsg.current = intl.formatMessage({ id: msgId }, { row: rowIndex });
    if (selectAllRows && onRowSelectAll) {
      onRowSelectAll();
    } else if (onRowSelect) {
      onRowSelect(rowId);
    }
  };

  const handleMoveCellFocus = (fromCell, toCell) => {
    removeTabStop(fromCell.row, fromCell.col);
    setFocusedRowCol(toCell.row, toCell.col, true);
  };

  const handleCellSelectionChange = (rowId, columnId, cellCoordinates) => {
    ariaLiveMsg.current = intl.formatMessage({
      id: rowId ? 'Terra.worklist-data-grid.cell-selection-template' : 'Terra.worklist-data-grid.cell-selection-cleared',
    }, {
      row: cellCoordinates.row,
      column: cellCoordinates.col,
    });
    setFocusedRowCol(cellCoordinates.row, cellCoordinates.col, true);
    setCurrentSelectedCell((rowId && columnId) ? { rowId, columnId } : null);
  };

  const mapGridCellToDataCell = (cellGridCoordinates) => (
    // The grid has an additional row for the heading and
    // may have an additional column when when selection is active.
    { row: cellGridCoordinates.row - 1, col: cellGridCoordinates.col + (hasSelectableRows ? -1 : 0) }
  );

  const selectCell = (cellRowIdColId, cellGridCoordinates) => {
    // If current cell is selected, do nothing.
    if (isCellSelected(cellGridCoordinates.row, cellGridCoordinates.col)) {
      return;
    }
    // Determine if the cell selection should proceed.
    const cellDataCoordinates = mapGridCellToDataCell(cellGridCoordinates);
    const cell = rows[cellDataCoordinates.row].cells[cellDataCoordinates.col];
    if ((cell.isSelectable === false) || cell.isMasked) {
      return;
    }
    // Make note of cell that is currently selected.
    handleCellSelectionChange(cellRowIdColId.rowId, cellRowIdColId.columnId, cellGridCoordinates);
    if (onCellSelect) {
      onCellSelect(cellRowIdColId.rowId, cellRowIdColId.columnId);
    }
  };

  const handleColumnSelect = (columnId, cellCoordinates) => {
    handleCellSelectionChange(null, null, cellCoordinates);
    if (onColumnSelect && !(hasSelectableRows && cellCoordinates.col === 0)) {
      onColumnSelect(columnId);
    }
  };

  const handleCellSelection = (cellRowIdColId, cellCoordinates) => {
    selectCell(cellRowIdColId, cellCoordinates);
  };

  const handleRowSelection = (rowId, rowIndex, selectedCellCoordinates) => {
    handleCellSelectionChange(null, null, selectedCellCoordinates);
    selectRows(false, rowId, rowIndex);
  };

  const handleKeyDown = (event) => {
    const cellCoordinates = { row: focusedRow.current, col: focusedCol.current };
    let nextRow = cellCoordinates.row;
    let nextCol = cellCoordinates.col;

    const key = event.keyCode;
    switch (key) {
      case KeyCode.KEY_UP:
        nextRow -= 1;
        break;
      case KeyCode.KEY_DOWN:
        nextRow += 1;
        break;
      case KeyCode.KEY_LEFT:
        if (event.metaKey) {
          // Cmd + Left = Home
          nextCol = 0;

          if (event.ctrlKey) {
            // Ctrl + Cmd + Left = Ctrl + Home
            nextRow = WorklistDataGridUtils.FIRST_NON_HEADER_ROW;
          }
        } else {
          // Left key
          nextCol -= 1;
        }
        break;
      case KeyCode.KEY_RIGHT:
        if (event.metaKey) {
          // Cmd + Right = End
          nextCol = displayedColumns.length - 1;

          if (event.ctrlKey) {
            // Ctrl + Cmd + Right = Ctrl + End
            nextRow = rows.length;
          }
        } else {
          // Right key
          nextCol += 1;
        }
        break;
      case KeyCode.KEY_HOME:
        nextCol = 0;
        if (event.ctrlKey) {
          nextRow = WorklistDataGridUtils.FIRST_NON_HEADER_ROW; // Assumption is that the first row is the column Heading.
        }
        break;
      case KeyCode.KEY_END:
        nextCol = displayedColumns.length - 1; // Col are zero based.
        if (event.ctrlKey) {
          // Though rows are zero based, the header is the first row so the rowsLength will
          // always be one more than then actual number of data rows.
          nextRow = rows.length;
        }
        break;
      case KeyCode.KEY_ESCAPE:
        if (!hasSelectableRows) {
          handleCellSelectionChange(null, null, cellCoordinates);
        } else {
          handleClearRowSelection();
        }
        event.preventDefault();
        break;
      case KeyCode.KEY_A:
        if (hasSelectableRows && (event.ctrlKey || event.metaKey)) {
          selectRows(true, null, null);
          event.preventDefault(); // prevent the default selection of everything on the page.
        }
        return;
      default:
        return;
    }
    if (nextRow > rows.length || nextCol >= displayedColumns.length) {
      event.preventDefault(); // prevent the page from moving with the arrow keys.
      return;
    }
    if (nextCol < 0 || nextRow < 0) {
      event.preventDefault(); // prevent the page from moving with the arrow keys.
      return;
    }
    handleMoveCellFocus(cellCoordinates, { row: nextRow, col: nextCol });
    event.preventDefault(); // prevent the page from moving with the arrow keys.
  };

  const buildColumn = (column, columnIndex) => (
    <ColumnHeaderCell
      key={column.id}
      coordinates={{ row: 0, col: columnIndex }}
      isTabStop={focusedRow.current === 0 && focusedCol.current === columnIndex}
      defaultWidth={props.columnWidth}
      onColumnSelect={handleColumnSelect}
      column={column}
    />
  );

  const buildColumns = (allColumns) => {
    if (allColumns?.length > 0) {
      return (
        <tr height={props.columnHeaderHeight}>
          {allColumns.map((column, columnIndex) => (buildColumn(column, columnIndex)))}
        </tr>
      );
    }
    return undefined;
  };

  const buildRow = (row, rowIndex) => (
    <Row
      rowIndex={rowIndex}
      key={row.id}
      height={props.rowHeight}
      row={row}
      hasSelectableRows={hasSelectableRows}
      displayedColumns={displayedColumns}
      rowHeaderIndex={rowHeaderIndex}
      onCellSelect={handleCellSelection}
      onRowSelect={handleRowSelection}
      isTabStop={isTabStop}
      isCellSelected={isCellSelected}
    />
  );

  const buildRows = (allRows) => {
    const rowData = allRows.map((row, index) => (buildRow(row, index + 1))); // One row is used for the Header.

    return rowData;
  };

  const gridClassNames = cx('worklist-data-grid', theme.className);
  return (
    <>
      <table
        ref={grid}
        id={id}
        role="grid"
        aria-labelledby={ariaLabelledby}
        aria-label={ariaLabel}
        className={gridClassNames}
        onKeyDown={handleKeyDown}
      >
        <tbody>
          {buildColumns(displayedColumns)}
          {buildRows(rows)}
        </tbody>
      </table>
      <VisuallyHiddenText aria-live="polite" text={ariaLiveMsg.current} />
    </>
  );
}

WorklistDataGrid.propTypes = propTypes;
WorklistDataGrid.defaultProps = defaultProps;

export default injectIntl(WorklistDataGrid);
