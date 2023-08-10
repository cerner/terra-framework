/* eslint-disable react/forbid-dom-props */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, {
  useState, useContext, useRef, useCallback, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';
import * as KeyCode from 'keycode-js';

import ThemeContext from 'terra-theme-context';
import VisuallyHiddenText from 'terra-visually-hidden-text';

import ColumnHeader from './subcomponents/ColumnHeader';
import Row from './subcomponents/Row';
import WorklistDataGridPropTypes from './proptypes/WorklistDataGridPropTypes';
import WorklistDataGridUtils from './utils/WorklistDataGridUtils';
import ColumnContext from './utils/ColumnContext';
import validateRowHeaderIndex from './proptypes/validators';
import styles from './WorklistDataGrid.module.scss';
import ERRORS from './utils/constants';

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
   * Data for content in the body of the Grid. Rows will be rendered in the order given.
   */
  rows: PropTypes.arrayOf(WorklistDataGridPropTypes.rowShape),

  /**
   * Data for pinned columns. Pinned columns are the stickied leftmost columns of the grid.
   * Columns will be presented in the order given.
   */
  pinnedColumns: PropTypes.arrayOf(WorklistDataGridPropTypes.columnShape),

  /**
   * Data for overflow columns. Overflow columns are rendered in the Worklist Data Grid's horizontal overflow.
   * Columns will be presented in the order given.
   */
  overflowColumns: PropTypes.arrayOf(WorklistDataGridPropTypes.columnShape),

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
  rowHeaderIndex: validateRowHeaderIndex,

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
   * Boolean indicating whether or not the DataGrid should allow entire rows to be selected. An additional column will be
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
  pinnedColumns: [],
  overflowColumns: [],
};

function WorklistDataGrid(props) {
  const {
    id,
    ariaLabelledBy,
    ariaLabel,
    rows,
    pinnedColumns,
    overflowColumns,
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
    hasSelectableRows,
    intl,
    rowHeaderIndex,
  } = props;

  if (pinnedColumns.length === 0) {
    // eslint-disable-next-line no-console
    console.warn(ERRORS.PINNED_COLUMNS_UNDEFINED);
  }

  // Default column size constraints
  const defaultColumnMinimumWidth = 60;
  const defaultColumnMaximumWidth = 300;

  const [pinnedColumnOffsets, setPinnedColumnOffsets] = useState([0]);

  // Initialize column width properties
  const initializeColumn = (column) => {
    const newColumn = { ...column };
    newColumn.width = column.width || defaultColumnWidth;
    newColumn.minimumWidth = column.minimumWidth || defaultColumnMinimumWidth;
    newColumn.maximumWidth = column.maximumWidth || defaultColumnMaximumWidth;

    return newColumn;
  };

  const displayedColumns = (hasSelectableRows ? [WorklistDataGridUtils.ROW_SELECTION_COLUMN] : []).concat(pinnedColumns).concat(overflowColumns);
  const [dataGridColumns, setDataGridColumns] = useState(displayedColumns.map((column) => initializeColumn(column)));

  // Manage column resize
  const [tableHeight, setTableHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const activeColumnPageX = useRef(0);
  const activeColumnWidth = useRef(200);
  const tableWidth = useRef(0);

  const grid = useRef();
  const [focusedRow, setFocusedRow] = useState(0);
  const [focusedCol, setFocusedCol] = useState(0);
  const [ariaLiveMessage, setAriaLiveMessage] = useState(null);
  const [cellAriaLiveMessage, setCellAriaLiveMessage] = useState(null);

  const [currentSelectedCell, setCurrentSelectedCell] = useState(null);

  const theme = useContext(ThemeContext);

  // -------------------------------------
  // functions

  const isRowSelectionCell = (columnIndex) => (
    hasSelectableRows && columnIndex < displayedColumns.length && displayedColumns[columnIndex].id === WorklistDataGridUtils.ROW_SELECTION_COLUMN.id
  );

  const setFocusedRowCol = (newRowIndex, newColIndex, makeActiveElement) => {
    setCellAriaLiveMessage(null);
    setFocusedRow(newRowIndex);
    setFocusedCol(newColIndex);
    let focusedCell = grid.current.rows[newRowIndex].cells[newColIndex];
    if (isRowSelectionCell(newColIndex) && focusedCell.getElementsByTagName('input').length > 0) {
      [focusedCell] = focusedCell.getElementsByTagName('input');
    }

    if (makeActiveElement) {
      focusedCell.focus();
    }
  };

  // -------------------------------------
  // callback Hooks

  const gridRef = useCallback((node) => {
    grid.current = node;

    // Update table height state variable
    setTableHeight(grid.current.offsetHeight - 1);
  }, []);

  // -------------------------------------
  // useEffect Hooks

  // useEffect for row selection
  useEffect(() => {
    // When row selection mode is turned on or off a row selection column is added or removed.
    // Therefore, shift the focused cell to the left or right.
    let newFocusCell = { row: focusedRow, col: (focusedCol + (hasSelectableRows ? 1 : -1)) };

    if (hasSelectableRows && focusedRow === 0 && focusedCol === 0) {
      // When row selection is turned on for the first time, default to the first row selection cell.
      newFocusCell = { row: 1, col: 0 };
    } else if (!hasSelectableRows && focusedCol === 0) {
      // When row selection is turned off, if a cell in the row selection had focus, then
      // refocus on the first cell in that row.
      newFocusCell = { row: focusedRow, col: 0 };
    }
    setFocusedRowCol(newFocusCell.row, newFocusCell.col, false);
    if (currentSelectedCell != null) {
      setCurrentSelectedCell(null);
    }
    // Since the row selection mode has changed, the row selection mode needs to be updated.
    setAriaLiveMessage(intl.formatMessage({ id: hasSelectableRows ? 'Terra.worklist-data-grid.row-selection-mode-enabled' : 'Terra.worklist-data-grid.row-selection-mode-disabled' }));

    setDataGridColumns(displayedColumns.map((column) => initializeColumn(column)));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasSelectableRows]);

  // useEffect for row displayed columns
  useEffect(() => {
    setDataGridColumns(displayedColumns.map((column) => initializeColumn(column)));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pinnedColumns, overflowColumns]);

  // useEffect to calculate pinned column offsets
  useEffect(() => {
    const offsetArray = [];
    let cumulativeOffset = 0;
    let lastPinnedColumnIndex;

    // if grid has selecteable rows but no pinned columns, then set the offset of the first column to 0
    if (hasSelectableRows && pinnedColumns.length === 0) {
      lastPinnedColumnIndex = 0;
      offsetArray.push(cumulativeOffset);
      setPinnedColumnOffsets(offsetArray);
      return;
    }

    if (pinnedColumns.length > 0) {
      offsetArray.push(cumulativeOffset);

      lastPinnedColumnIndex = hasSelectableRows ? pinnedColumns.length : pinnedColumns.length - 1;

      // eslint-disable-next-line array-callback-return
      dataGridColumns.slice(0, lastPinnedColumnIndex).map((pinnedColumn) => {
        cumulativeOffset += pinnedColumn.width;
        offsetArray.push(cumulativeOffset);
      });
    }
    setPinnedColumnOffsets(offsetArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataGridColumns]);

  // -------------------------------------

  const isAnyRowSelected = () => (
    rows.find(r => r.isSelected === true)
  );

  const handleClearRowSelection = () => {
    if (isAnyRowSelected()) {
      setAriaLiveMessage(intl.formatMessage({ id: 'Terra.worklist-data-grid.all-rows-unselected' }));
      // Esc (while in row selection mode and rows are selected): Clear selection
      if (onClearSelectedRows) {
        onClearSelectedRows();
      }
    } else if (onDisableSelectableRows) {
      setAriaLiveMessage(intl.formatMessage({ id: 'Terra.worklist-data-grid.row-selection-mode-disabled' }));
      onDisableSelectableRows();
    }
  };

  const selectRows = (rowId, rowIndex) => {
    const rowSelectionMessageId = !rows[rowIndex - 1].isSelected ? 'Terra.worklist-data-grid.row-selection-template' : 'Terra.worklist-data-grid.row-selection-cleared-template';
    const rowLabel = rows[rowIndex - 1].ariaLabel || (rowIndex + 1);

    setAriaLiveMessage(intl.formatMessage({ id: rowSelectionMessageId }, { row: rowLabel }));

    if (onRowSelect) {
      onRowSelect(rowId);
    }
  };

  const selectAllRows = () => {
    setAriaLiveMessage(intl.formatMessage({ id: 'Terra.worklist-data-grid.all-rows-selected' }));

    if (onRowSelectAll) {
      onRowSelectAll();
    }
  };

  const handleMoveCellFocus = (fromCell, toCell) => {
    setFocusedRowCol(toCell.row, toCell.col, true);
  };

  const handleColumnSelect = (columnId, cellCoordinates) => {
    if (!hasSelectableRows) {
      setAriaLiveMessage(intl.formatMessage({ id: 'Terra.worklist-data-grid.cell-selection-cleared' }));
    }

    setFocusedRow(cellCoordinates.row);
    setFocusedCol(cellCoordinates.col);
    setCurrentSelectedCell(null);

    if (onColumnSelect) {
      onColumnSelect(columnId);
    }
  };

  const handleCellSelection = (cellRowIdColId, cellCoordinates, cellSelectable) => {
    if (!hasSelectableRows) {
      setAriaLiveMessage(intl.formatMessage({ id: 'Terra.worklist-data-grid.cell-selection-template' },
        { row: cellCoordinates.row + 1, column: cellCoordinates.col + 1 }));
    }

    setFocusedRow(cellCoordinates.row);
    setFocusedCol(cellCoordinates.col);
    setCurrentSelectedCell({ rowId: cellRowIdColId.rowId, columnId: cellRowIdColId.columnId });

    if (cellSelectable && onCellSelect) {
      onCellSelect(cellRowIdColId.rowId, cellRowIdColId.columnId);
    }
  };

  const handleRowSelection = (rowId, rowIndex, selectedCellCoordinates) => {
    if (!hasSelectableRows) {
      setAriaLiveMessage(intl.formatMessage({ id: 'Terra.worklist-data-grid.cell-selection-cleared' }));
    }

    setFocusedRow(selectedCellCoordinates.row);
    setFocusedCol(selectedCellCoordinates.col);
    setCurrentSelectedCell(null);

    selectRows(rowId, rowIndex);
  };

  // -------------------------------------
  // event handlers

  /**
   * Move focus to next focusable element outside the worklist data grid
   */
  const moveFocusFromGrid = (moveForward) => {
    // add all elements we want to include in our selection
    const focusableElementSelector = `#${id}, a[href]:not([tabindex='-1']), area[href]:not([tabindex='-1']), input:not([disabled]):not([tabindex='-1']), `
    + "select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']), "
    + "iframe:not([tabindex='-1']), [tabindex]:not([tabindex='-1']), [contentEditable=true]:not([tabindex='-1'])";

    const focusableElements = [...document.body.querySelectorAll(`${focusableElementSelector}`)].filter(
      element => !element.hasAttribute('disabled')
      && !element.getAttribute('aria-hidden')
      && (element.id === id || !grid.current.contains(element)),
    );

    // Identify index of the active element in the DOM excluding worklist data grid children
    const index = focusableElements.indexOf(grid.current);
    if (index > -1) {
      // Move focus outside worklist data grid
      const indexOffset = moveForward ? 1 : -1;
      const newFocusElement = focusableElements[index + indexOffset];
      if (newFocusElement) {
        newFocusElement.focus();
      }
    }
  };

  const handleKeyDown = (event) => {
    const cellCoordinates = { row: focusedRow, col: focusedCol };
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
          if (!hasSelectableRows) {
            setAriaLiveMessage(intl.formatMessage({ id: 'Terra.worklist-data-grid.cell-selection-cleared' }));
          }

          setFocusedRow(cellCoordinates.row);
          setFocusedCol(cellCoordinates.col);
          setCurrentSelectedCell(null);
        } else {
          handleClearRowSelection();
        }
        event.preventDefault();
        return;
      case KeyCode.KEY_A:
        if (hasSelectableRows && (event.ctrlKey || event.metaKey)) {
          selectAllRows();
          event.preventDefault(); // prevent the default selection of everything on the page.
        }
        return;
      case KeyCode.KEY_TAB:
        moveFocusFromGrid(!event.shiftKey);
        event.preventDefault();
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

  const onFocus = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      // Not triggered when swapping focus between children
      setFocusedRowCol(focusedRow, focusedCol, true);
    }
  };

  // -------------------------------------
  // builder functions

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
      activeColumnIndex={focusedRow === rowIndex ? focusedCol : undefined}
      selectedCellColumnId={(currentSelectedCell?.rowId === row.id) ? currentSelectedCell?.columnId : undefined}
    />
  );

  const buildRows = (allRows) => {
    const rowData = allRows.map((row, index) => (buildRow(row, index + 1))); // One row is used for the Header.

    return rowData;
  };

  // -------------------------------------

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
        onFocus={onFocus}
        tabIndex={0}
        {...(activeIndex != null && { onMouseUp, onMouseMove, onMouseLeave: onMouseUp })}
      >
        <ColumnContext.Provider
          value={{ pinnedColumnOffsets, setCellAriaLiveMessage }}
        >
          <ColumnHeader
            columns={dataGridColumns}
            headerHeight={columnHeaderHeight}
            tableHeight={tableHeight}
            onColumnSelect={handleColumnSelect}
            onResizeMouseDown={onResizeMouseDown}
          />
          <tbody>
            {buildRows(rows)}
          </tbody>
        </ColumnContext.Provider>
      </table>
      <VisuallyHiddenText aria-live="polite" text={ariaLiveMessage} />
      <VisuallyHiddenText aria-live="polite" aria-atomic="true" text={cellAriaLiveMessage} />
    </div>
  );
}

WorklistDataGrid.propTypes = propTypes;
WorklistDataGrid.defaultProps = defaultProps;

export default injectIntl(WorklistDataGrid);
