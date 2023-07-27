/* eslint-disable react/forbid-dom-props */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, {
  useState, useContext, useRef, useCallback, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import * as KeyCode from 'keycode-js';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import ColumnHeader from './subcomponents/ColumnHeader';
import WorklistDataGridPropTypes from './proptypes/WorklistDataGridPropTypes';
import styles from './WorklistDataGrid.module.scss';
import WorklistDataGridUtils from './utils/WorklistDataGridUtils';
import Row from './subcomponents/Row';

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
   * Data for columns. Columns will be presented in the order given.
   */
  columns: PropTypes.arrayOf(WorklistDataGridPropTypes.columnShape),

  /**
   * Data for content in the body of the Grid. Rows will be rendered in the order given.
   */
  rows: PropTypes.arrayOf(WorklistDataGridPropTypes.rowShape),

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
   * Number indicating the index of the column that represents row header. Index is 0 based and cannot exceed one less than the number of columns in the grid.
   */
  rowHeaderIndex: PropTypes.number,

  /**
   * Function that is called when a resizable column is resized. Parameters:
   * @param {string} columnId columnId
   * @param {string} requestedWidth requestedWidth
   */
  onColumnResize: PropTypes.func,

  /**
   * Callback function that is called when a selectable cell is selected. Parameters:
   * @param {string} rowId rowId
   * @param {string} columnId columnId
   */
  onCellSelect: PropTypes.func,

  /**
   * Callback function that is called when a row is selected. Parameters:
   * @param {string} rowId rowId
   */
  onRowSelect: PropTypes.func,

  /**
   * Callback function that is called when all rows are selected. Parameters: none.
   */
  onRowSelectAll: PropTypes.func,

  /**
   * Callback function that is called when a selectable column is selected. Parameters:
   *  @param {string} columnId columnId
   */
  onColumnSelect: PropTypes.func,

  /**
   * Callback function that is called when all selected rows need to be unselected. Parameters: none.
   */
  onClearSelectedRows: PropTypes.func,

  /**
   * Callback function that is called when no row is selected and the row selection mode needs to be disabled. Parameters: none.
   */
  onDisableSelectableRows: PropTypes.func,

  /**
   * Callback function to enable row selection mode. Parameters: `function()`
   */
  onEnableRowSelection: PropTypes.func,
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
  defaultColumnWidth: 200,
  columnHeaderHeight: '2.5rem',
  rowHeight: '2.5rem',
};

function WorklistDataGrid(props) {
  const {
    id,
    ariaLabelledBy,
    ariaLabel,
    columns,
    rows,
    onColumnResize,
    defaultColumnWidth,
    columnHeaderHeight,
    rowHeight,
    onColumnSelect,
    onCellSelect,
    onRowSelect,
    onRowSelectAll,
    onClearSelectedRows,
    onDisableSelectableRows,
    onEnableRowSelection,
    hasSelectableRows,
    intl,
    rowHeaderIndex,
  } = props;

  // Default column size constraints
  const defaultColumnMinimumWidth = 60;
  const defaultColumnMaximumWidth = 300;

  // Initialize column width properties
  const initializeColumn = (column) => {
    const newColumn = { ...column };
    newColumn.width = column.width || defaultColumnWidth;
    newColumn.minimumWidth = column.minimumWidth || defaultColumnMinimumWidth;
    newColumn.maximumWidth = column.maximumWidth || defaultColumnMaximumWidth;

    return newColumn;
  };

  const displayedColumns = (hasSelectableRows ? [WorklistDataGridUtils.ROW_SELECTION_COLUMN] : []).concat(columns);
  const [dataGridColumns, setDataGridColumns] = useState(displayedColumns.map((column) => initializeColumn(column)));

  // Manage column resize
  const [tableHeight, setTableHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const activeColumnPageX = useRef(0);
  const activeColumnWidth = useRef(200);
  const tableWidth = useRef(0);

  const grid = useRef();
  const focusedRow = useRef(0);
  const focusedCol = useRef(0);
  const multiRowSelection = useRef(null);
  const multiRowSelectionWithLastSelected = useRef(null);
  const isRowSelectionEnabledByGrid = useRef(false);

  const [currentSelectedCell, setCurrentSelectedCell] = useState(null);
  const [ariaLiveMsg, setAriaLiveMsg] = useState();

  const theme = useContext(ThemeContext);

  const isRowSelectionCell = (columnIndex) => (
    hasSelectableRows && columnIndex < displayedColumns.length && displayedColumns[columnIndex].id === WorklistDataGridUtils.ROW_SELECTION_COLUMN.id
  );

  const gridRef = useCallback((node) => {
    grid.current = node;

    // Update table height state variable
    setTableHeight(grid.current.offsetHeight - 1);
  }, []);

  const isCellSelected = (rowId, columnId) => (currentSelectedCell && currentSelectedCell.rowId === rowId && currentSelectedCell.columnId === columnId);

  const removeTabStop = (rowIndex, colIndex) => {
    const cell = grid.current.rows[rowIndex].cells[colIndex];
    // Remove Tab stop from previous cell in table that has focus and set it to the
    // cell that was clicked.
    cell.tabIndex = -1;
    if (isRowSelectionCell(colIndex) && cell.getElementsByTagName('input').length > 0) {
      // For row selection cell, the tabstop won't be on the cell itself but the
      // inner input element so remove it from the input element.
      cell.getElementsByTagName('input')[0].tabIndex = -1;
    }
  };

  const setFocusedRowCol = (newRowIndex, newColIndex, makeActiveElement) => {
    removeTabStop(focusedRow.current, focusedCol.current);
    focusedRow.current = newRowIndex;
    focusedCol.current = newColIndex;
    let focusedCell = grid.current.rows[newRowIndex].cells[newColIndex];
    if (isRowSelectionCell(newColIndex) && focusedCell.getElementsByTagName('input').length > 0) {
      [focusedCell] = focusedCell.getElementsByTagName('input');
    }
    focusedCell.tabIndex = 0;
    if (makeActiveElement && focusedCell.focus) {
      focusedCell.focus();
    }
  };

  // useEffect for row selection
  useEffect(() => {
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

    if (!hasSelectableRows) {
      multiRowSelection.current = null;
      multiRowSelectionWithLastSelected.current = null;
    }

    // Since the row selection mode has changed, the row selection mode needs to be updated.
    if (!isRowSelectionEnabledByGrid.current) {
      setAriaLiveMsg(intl.formatMessage({ id: hasSelectableRows ? 'Terra.worklist-data-grid.row-selection-mode-enabled' : 'Terra.worklist-data-grid.row-selection-mode-disabled' }));
    }
    isRowSelectionEnabledByGrid.current = false;

    setDataGridColumns(displayedColumns.map((column) => initializeColumn(column)));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasSelectableRows]);

  // useEffect for row displayed columns
  useEffect(() => {
    setDataGridColumns(displayedColumns.map((column) => initializeColumn(column)));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columns]);

  const isAnyRowSelected = () => (
    rows.find(r => r.isSelected === true)
  );

  const handleClearRowSelection = () => {
    let message = '';
    multiRowSelectionWithLastSelected.current = null;
    if (isAnyRowSelected()) {
      message = intl.formatMessage({ id: 'Terra.worklist-data-grid.all-rows-unselected' });
      // Esc (while in row selection mode and rows are selected): Clear selection
      if (onClearSelectedRows) {
        onClearSelectedRows();
      }
    } else if (onDisableSelectableRows) {
      multiRowSelection.current = null;
      message = intl.formatMessage({ id: 'Terra.worklist-data-grid.row-selection-mode-disabled' });
      onDisableSelectableRows();
    }
    setAriaLiveMsg(message);
  };

  const handleEnableSelectableRows = (newEndRowIndex, selectionData) => {
    if (!onRowSelect || !selectionData) {
      return;
    }

    if (!hasSelectableRows) {
      onEnableRowSelection();
    }

    // Rows in range to remain selected
    const selectionStartRowIndex = Math.min(selectionData.anchorRow, newEndRowIndex);
    const selectionEndRowIndex = Math.max(selectionData.anchorRow, newEndRowIndex);

    // We are subtracting 1 to accommodate for the column header in the grid.
    const rowsToSelect = rows.slice(selectionStartRowIndex - 1, selectionEndRowIndex);
    const rowIdsToSelect = rowsToSelect.map(r => ({ rowId: r.id, isSelected: true }));

    // Determine if there are rows that are no longer in range that need to be unselected.
    let rowIdsToUnselect = [];
    if (selectionData.anchorRow > selectionData.previousSelectionEndRow) {
      // The range extends upward from the anchor row
      if (newEndRowIndex > selectionData.previousSelectionEndRow) {
        // The range was moved down towards the anchor so rows that no longer qualify for the range need to be unselected.
        const rowsToUnselect = rows.slice(selectionData.previousSelectionEndRow - 1, newEndRowIndex);
        rowIdsToUnselect = rowsToUnselect.map(r => ({ rowId: r.id, isSelected: false }));
      }
    } else if (selectionData.anchorRow < selectionData.previousSelectionEndRow) {
      // The range extends downward from the anchor row
      if (newEndRowIndex < selectionData.previousSelectionEndRow) {
        // The range was moved up towards the anchor so rows that no longer qualify for the range need to be unselected       // New endRangeIndex becomes ordered End
        const rowsToUnselect = rows.slice(newEndRowIndex - 1, selectionData.previousSelectionEndRow);
        rowIdsToUnselect = rowsToUnselect.map(r => ({ rowId: r.id, isSelected: false }));
      }
    }

    setAriaLiveMsg(hasSelectableRows ? `Multiselect mode enabled. Currently selected rows range from row ${selectionData.anchorRow} to row ${newEndRowIndex}` : `Row selection enabled. Currently selected rows range from row ${selectionData.anchorRow} to row ${newEndRowIndex}`);
    onRowSelect(rowIdsToSelect.concat(rowIdsToUnselect));
  };

  const selectRows = (selectAllRows, rowId, rowIndex) => {
    let rowLabel;
    let isSelectAction = true;
    let msgId = 'Terra.worklist-data-grid.all-rows-selected';
    // Reset last selected row when all rows are selected.
    multiRowSelectionWithLastSelected.current = null;
    if (!selectAllRows) {
      isSelectAction = !rows[rowIndex - 1].isSelected; // Determine if this is select or unselected.
      // Remember the last selected row
      multiRowSelectionWithLastSelected.current = { anchorRow: rowIndex };
      if (isSelectAction) {
        msgId = 'Terra.worklist-data-grid.row-selection-template';
      } else {
        msgId = 'Terra.worklist-data-grid.row-selection-cleared-template';
      }
      rowLabel = rows[rowIndex - 1].ariaLabel || (rowIndex + 1);
    }
    setAriaLiveMsg(intl.formatMessage({ id: msgId }, { row: rowLabel }));
    if (selectAllRows && onRowSelectAll) {
      onRowSelectAll();
    } else if (onRowSelect) {
      onRowSelect([{ rowId, isSelected: isSelectAction }]);
    }
  };

  const handleMoveCellFocus = (fromCell, toCell) => {
    removeTabStop(fromCell.row, fromCell.col);
    setFocusedRowCol(toCell.row, toCell.col, true);
  };

  const handleCellSelectionChange = (rowId, columnId, cellCoordinates) => {
    if (!hasSelectableRows) {
      setAriaLiveMsg(intl.formatMessage({
        id: rowId ? 'Terra.worklist-data-grid.cell-selection-template' : 'Terra.worklist-data-grid.cell-selection-cleared',
      }, { row: cellCoordinates.row + 1, column: cellCoordinates.col + 1 }));
    }
    setFocusedRowCol(cellCoordinates.row, cellCoordinates.col, true);
    if ((rowId !== currentSelectedCell?.rowId) || (columnId !== currentSelectedCell?.columnId)) {
      setCurrentSelectedCell((rowId && columnId) ? { rowId, columnId } : null);
    }
  };

  const mapGridCellToDataCell = (cellGridCoordinates) => (
    // The grid has an additional row for the heading and
    // may have an additional column when when selection is active.
    { row: cellGridCoordinates.row - 1, col: cellGridCoordinates.col + (hasSelectableRows ? -1 : 0) }
  );

  const selectCell = (selectionDetails) => {
    const cellGridCoordinates = { row: selectionDetails.rowIndex, col: selectionDetails.columnIndex };
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
    handleCellSelectionChange(selectionDetails.rowId, selectionDetails.columnId, cellGridCoordinates);
    if (onCellSelect) {
      onCellSelect(selectionDetails.rowId, selectionDetails.columnId);
    }
  };

  const handleColumnSelect = (columnId, cellCoordinates) => {
    handleCellSelectionChange(null, null, cellCoordinates);
    if (onColumnSelect && !(hasSelectableRows && cellCoordinates.col === 0)) {
      onColumnSelect(columnId);
    }
  };

  const handleCellSelection = (selectionDetails) => {
    selectCell(selectionDetails);
  };

  const handleRowSelection = (selectionDetails) => {
    handleCellSelectionChange(null, null, { row: selectionDetails.rowIndex, col: selectionDetails.columnIndex });
    const selectionData = selectionDetails.selectedByKeyboard ? multiRowSelectionWithLastSelected?.current : multiRowSelection?.current;

    // TODO: Clean up the if condition.
    if (!selectionDetails.multiSelect) {
      if (hasSelectableRows) {
        // regular click or space key
        selectRows(false, selectionDetails.rowId, selectionDetails.rowIndex);
      }
    } else if (hasSelectableRows) {
      // Shift key is pressed
      if (selectionData?.anchorRow) {
        // ACTION: select multiple rows based on anchor
        handleEnableSelectableRows(selectionDetails.rowIndex, selectionData);
        selectionData.previousSelectionEndRow = selectionDetails.rowIndex;
      } else {
        // no anchor row
        selectRows(false, selectionDetails.rowId, selectionDetails.rowIndex);
      }
    } else if (selectionDetails.selectedByKeyboard) {
      // Shift + Space
      isRowSelectionEnabledByGrid.current = !hasSelectableRows;
      multiRowSelectionWithLastSelected.current = { anchorRow: selectionDetails.rowIndex };
      handleEnableSelectableRows(selectionDetails.rowIndex, multiRowSelectionWithLastSelected.current);
      multiRowSelectionWithLastSelected.current.previousSelectionEndRow = selectionDetails.rowIndex;
    } else {
      // Shift + Click
      handleEnableSelectableRows(selectionDetails.rowIndex, selectionData);
      selectionData.previousSelectionEndRow = selectionDetails.rowIndex;
    }
  };

  const handleKeyUp = (event) => {
    const key = event.keyCode;
    switch (key) {
      case KeyCode.KEY_SHIFT:
        multiRowSelection.current = null;
        break;
      default:
        break;
    }
  };

  const handleKeyDown = (event) => {
    const cellCoordinates = { row: focusedRow.current, col: focusedCol.current };
    let nextRow = cellCoordinates.row;
    let nextCol = cellCoordinates.col;
    let activateMultiRowSelection = false;
    const key = event.keyCode;
    switch (key) {
      case KeyCode.KEY_UP:
        if (event.shiftKey) {
          activateMultiRowSelection = true;
        }
        nextRow -= 1;
        break;
      case KeyCode.KEY_DOWN:
        if (event.shiftKey) {
          activateMultiRowSelection = true;
        }
        nextRow += 1;
        break;
      case KeyCode.KEY_SHIFT:
        if (cellCoordinates.row !== 0 && !multiRowSelection?.current?.anchorRow) {
          multiRowSelection.current = { anchorRow: cellCoordinates.row, previousSelectionEndRow: cellCoordinates.row };
        }
        break;
      case KeyCode.KEY_LEFT:
        if (event.metaKey) {
          // Mac: Ctrl + Cmd + Left
          // Win: Ctrl + Home
          nextCol = 0;

          if (event.ctrlKey) {
            // Mac: Ctrl + Cmd + Right
            // Windows: Ctrl + End
            nextRow = WorklistDataGridUtils.FIRST_NON_HEADER_ROW;
          }
        } else {
          // Left key
          nextCol -= 1;
        }
        break;
      case KeyCode.KEY_RIGHT:
        if (event.metaKey) {
          // Mac: Cmd + Right
          // Win: End
          nextCol = displayedColumns.length - 1;

          if (event.ctrlKey) {
            // Mac: Ctrl + Cmd + Right
            // Windows: Ctrl + End
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
    if (activateMultiRowSelection) {
      // Handle the row selection case.
      if (nextRow > rows.length) {
        nextRow = rows.length;
      } else if (nextRow <= 0) {
        nextRow = 1; // Only non-header rows can be selected.
      }
      isRowSelectionEnabledByGrid.current = !hasSelectableRows;
      handleEnableSelectableRows(nextRow, multiRowSelection.current);
      multiRowSelection.current.previousSelectionEndRow = nextRow;
    }
    // Handle the normal case
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

  const onResizeMouseDown = useCallback((event, index, resizeColumnWidth) => {
    // Store current table and column values for resize calculations
    tableWidth.current = grid.current.offsetWidth;
    activeColumnPageX.current = event.pageX;
    activeColumnWidth.current = resizeColumnWidth;

    // Set the active index to the selected column
    setActiveIndex(index);
  }, []);

  const onMouseMove = (event) => {
    if (activeIndex == null) {
      return;
    }

    // Ensure the new column width falls within the range of the minimum and maximum values
    const diffX = event.pageX - activeColumnPageX.current;
    const { minimumWidth, maximumWidth } = dataGridColumns[activeIndex];
    const newColumnWidth = Math.min(Math.max(activeColumnWidth.current + diffX, minimumWidth), maximumWidth);

    // Update the width for the column in the state variable
    const newGridColumns = [...dataGridColumns];
    newGridColumns[activeIndex].width = newColumnWidth;
    setDataGridColumns(newGridColumns);

    // Update the column and table width
    grid.current.style.width = `${tableWidth + (newColumnWidth - activeColumnWidth.current)}px`;
  };

  const onMouseUp = () => {
    // Notify consumers of the new column width
    if (onColumnResize) {
      onColumnResize(dataGridColumns[activeIndex].id, dataGridColumns[activeIndex].width);
    }

    // Remove active index
    setActiveIndex(null);
  };

  const buildRow = (row, rowIndex) => (
    <Row
      rowIndex={rowIndex}
      key={row.id}
      height={rowHeight}
      id={row.id}
      isSelected={row.isSelected}
      cells={row.cells}
      ariaLabel={row.ariaLabel}
      hasRowSelection={hasSelectableRows}
      displayedColumns={displayedColumns}
      rowHeaderIndex={rowHeaderIndex}
      onCellSelect={handleCellSelection}
      onRowSelect={handleRowSelection}
      tabStopColumnIndex={focusedRow.current === rowIndex ? focusedCol.current : undefined}
      selectedCellColumnId={(currentSelectedCell?.rowId === row.id) ? currentSelectedCell?.columnId : undefined}
    />
  );

  const buildRows = (allRows) => {
    const rowData = allRows.map((row, index) => (buildRow(row, index + 1))); // One row is used for the Header.

    return rowData;
  };

  return (
    <div className={cx('worklist-data-grid-container')}>
      <table
        ref={gridRef}
        id={id}
        role="grid"
        aria-labelledby={ariaLabelledBy}
        aria-label={ariaLabel}
        className={cx('worklist-data-grid', theme.className)}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        {...(activeIndex != null && { onMouseUp, onMouseMove, onMouseLeave: onMouseUp })}
      >
        <ColumnHeader
          columns={dataGridColumns}
          headerHeight={columnHeaderHeight}
          tableHeight={tableHeight}
          tabStopColumnIndex={focusedRow.current === 0 ? focusedCol.current : undefined}
          onColumnSelect={handleColumnSelect}
          onResizeMouseDown={onResizeMouseDown}
        />
        <tbody>
          {buildRows(rows)}
        </tbody>
      </table>
      <VisuallyHiddenText aria-live="polite" text={ariaLiveMsg} />
    </div>
  );
}

WorklistDataGrid.propTypes = propTypes;
WorklistDataGrid.defaultProps = defaultProps;

export default injectIntl(WorklistDataGrid);
