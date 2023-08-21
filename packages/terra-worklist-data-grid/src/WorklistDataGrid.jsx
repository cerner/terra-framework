/* eslint-disable react/forbid-dom-props */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, {
  useState, useContext, useRef, useCallback, useEffect, useMemo,
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
   * @param {arrayOf(string)} rowIdsToSelect rowIdsToSelect
   * @param {arrayOf(string)} rowIdsToUnselect rowIdsToUnselect
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
   * Callback function that is called when all selected cells need to be unselected. Parameters: none.
   */
  onClearSelectedCells: PropTypes.func,

  /**
   * Callback function that is called when no row is selected and the row selection mode needs to be disabled. Parameters: none.
   */
  onDisableSelectableRows: PropTypes.func,

  /**
   * Callback function to enable row selection mode. Parameters: `none`
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
    onClearSelectedCells,
    onDisableSelectableRows,
    onEnableRowSelection,
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
  const handleFocus = useRef(true);
  const [focusedRow, setFocusedRow] = useState(0);
  const [focusedCol, setFocusedCol] = useState(0);
  const [ariaLiveMessage, setAriaLiveMessage] = useState(null);
  const [cellAriaLiveMessage, setCellAriaLiveMessage] = useState(null);
  const rowSelection = useRef({ isRowSelectionModeToggledByGrid: false });

  // Define ColumnContext Provider value object
  const columnContextValue = useMemo(() => ({ pinnedColumnOffsets, setCellAriaLiveMessage }), [pinnedColumnOffsets]);

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
    if (!node) {
      return;
    }

    grid.current = node;

    // eslint-disable-next-line compat/compat
    const resizeObserver = new ResizeObserver(() => {
      // Update table height state variable
      setTableHeight(grid.current.offsetHeight - 1);
    });

    // Register resize observer to detect size changes
    resizeObserver.observe(node);
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

    if (!hasSelectableRows) {
      rowSelection.current.rangeUsingFocusedRow = null;
      rowSelection.current.rangeUsingLastIndividuallySelectedRow = null;
    }

    // Since the row selection mode has changed, the row selection mode needs to be updated.
    if (!rowSelection.current.isRowSelectionModeToggledByGrid) {
      setAriaLiveMessage(intl.formatMessage({ id: hasSelectableRows ? 'Terra.worklist-data-grid.row-selection-mode-enabled' : 'Terra.worklist-data-grid.row-selection-mode-disabled' }));
    }
    rowSelection.current.isRowSelectionModeToggledByGrid = false;

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

  const isRowSelected = () => (
    rows.find(row => row.isSelected === true)
  );

  const handleClearRowSelection = () => {
    rowSelection.current.rangeUsingLastIndividuallySelectedRow = null;
    if (isRowSelected()) {
      setAriaLiveMessage(intl.formatMessage({ id: 'Terra.worklist-data-grid.all-rows-unselected' }));
      // Esc (while in row selection mode and rows are selected): Clear selection
      if (onClearSelectedRows) {
        onClearSelectedRows();
      }
    } else if (onDisableSelectableRows) {
      rowSelection.current.rangeUsingFocusedRow = null;
      setAriaLiveMessage(intl.formatMessage({ id: 'Terra.worklist-data-grid.row-selection-mode-disabled' }));
      onDisableSelectableRows();
    }
  };

  const selectAllRows = () => {
    setAriaLiveMessage(intl.formatMessage({ id: 'Terra.worklist-data-grid.all-rows-selected' }));

    if (onRowSelectAll) {
      onRowSelectAll();
    }
  };

  const selectMultipleRows = useCallback((newEndRowIndex, rangeInfo) => {
    if (!onRowSelect || !rangeInfo) {
      return;
    }

    if (!hasSelectableRows) {
      onEnableRowSelection();
    }

    // Rows in range to remain selected
    const selectionStartRowIndex = Math.min(rangeInfo.anchorRow, newEndRowIndex);
    const selectionEndRowIndex = Math.max(rangeInfo.anchorRow, newEndRowIndex);

    // We are subtracting 1 to accommodate for the column header in the grid.
    const rowIdsToSelect = rows.slice(selectionStartRowIndex - 1, selectionEndRowIndex).map(row => row.id);

    // Determine if there are rows that are no longer in range that need to be unselected.
    let rowIdsToUnselect = [];
    if (rangeInfo.anchorRow > rangeInfo.previousSelectionEndRow) {
      // The range extends upward from the anchor row
      if (newEndRowIndex > rangeInfo.previousSelectionEndRow) {
        // The range was moved down towards the anchor so rows that no longer qualify for the range need to be unselected.
        rowIdsToUnselect = rows.slice(rangeInfo.previousSelectionEndRow - 1, Math.min(newEndRowIndex, rangeInfo.anchorRow)).map(row => row.id);
      }
    } else if (rangeInfo.anchorRow < rangeInfo.previousSelectionEndRow) {
      // The range extends downward from the anchor row
      if (newEndRowIndex < rangeInfo.previousSelectionEndRow) {
        // The range was moved up towards the anchor so rows that no longer qualify for the range need to be unselected. New endRangeIndex becomes ordered End
        rowIdsToUnselect = rows.slice(Math.max(rangeInfo.anchorRow, newEndRowIndex), rangeInfo.previousSelectionEndRow).map(row => row.id);
      }
    }

    let ariaMessage = intl.formatMessage({
      id: hasSelectableRows
        ? 'Terra.worklist-data-grid.row-selection-multiple-rows-selected'
        : 'Terra.worklist-data-grid.row-selection-mode-enabled',
    });

    ariaMessage += ` ${intl.formatMessage({
      id: rowIdsToSelect.length === 1
        ? 'Terra.worklist-data-grid.row-selection-template'
        : 'Terra.worklist-data-grid.row-selection-selected-rows-range',
    }, { row: rangeInfo.anchorRow, endRow: newEndRowIndex })}`;

    setAriaLiveMessage(ariaMessage);
    onRowSelect(rowIdsToSelect, rowIdsToUnselect);
  }, [hasSelectableRows, intl, onEnableRowSelection, onRowSelect, rows]);

  const selectRow = useCallback((rowId, rowIndex) => {
    const rowsToSelect = [];
    const rowsToUnSelect = [];
    rowSelection.current.rangeUsingLastIndividuallySelectedRow = { anchorRow: rowIndex };
    const rowLabel = rows[rowIndex - 1].ariaLabel || (rowIndex + 1);

    if (!rows[rowIndex - 1].isSelected) {
      setAriaLiveMessage(intl.formatMessage({ id: 'Terra.worklist-data-grid.row-selection-template' }, { row: rowLabel }));
      rowsToSelect.push(rowId);
    } else {
      setAriaLiveMessage(intl.formatMessage({ id: 'Terra.worklist-data-grid.row-selection-cleared-template' }, { row: rowLabel }));
      rowsToUnSelect.push(rowId);
    }

    if (onRowSelect) {
      onRowSelect(rowsToSelect, rowsToUnSelect);
    }
  }, [intl, onRowSelect, rows]);

  const handleMoveCellFocus = (fromCell, toCell) => {
    setFocusedRowCol(toCell.row, toCell.col, true);
  };

  const handleColumnSelect = useCallback((columnId, cellCoordinates) => {
    if (!hasSelectableRows) {
      setAriaLiveMessage(intl.formatMessage({ id: 'Terra.worklist-data-grid.cell-selection-cleared' }));
    }

    setFocusedRow(cellCoordinates.row);
    setFocusedCol(cellCoordinates.col);

    if (onColumnSelect) {
      onColumnSelect(columnId);
    }
  }, [hasSelectableRows, intl, onColumnSelect]);

  const handleCellSelection = useCallback((selectionDetails) => {
    if (!hasSelectableRows && selectionDetails.isCellSelectable) {
      setAriaLiveMessage(intl.formatMessage({ id: 'Terra.worklist-data-grid.cell-selection-template' },
        { row: selectionDetails.rowIndex + 1, column: selectionDetails.columnIndex + 1 }));
    }

    setFocusedRow(selectionDetails.rowIndex);
    setFocusedCol(selectionDetails.columnIndex);

    if (selectionDetails.isCellSelectable && onCellSelect) {
      onCellSelect(selectionDetails.rowId, selectionDetails.columnId);
    }
  }, [hasSelectableRows, intl, onCellSelect]);

  const handleRowSelection = useCallback((selectionDetails) => {
    setFocusedRow(selectionDetails.rowIndex);
    setFocusedCol(selectionDetails.columnIndex);

    const rangeInfo = selectionDetails.selectedByKeyboard ? rowSelection.current.rangeUsingLastIndividuallySelectedRow : rowSelection?.current?.rangeUsingFocusedRow;
    if (!selectionDetails.multiSelect) {
      if (hasSelectableRows) {
        // regular click or space key
        selectRow(selectionDetails.rowId, selectionDetails.rowIndex);
      }
    } else if (hasSelectableRows) {
      // Shift key is pressed
      if (rangeInfo?.anchorRow) {
        // ACTION: select multiple rows based on anchor
        selectMultipleRows(selectionDetails.rowIndex, rangeInfo);
        rangeInfo.previousSelectionEndRow = selectionDetails.rowIndex;
      } else {
        // no anchor row
        selectRow(selectionDetails.rowId, selectionDetails.rowIndex);
      }
    } else if (selectionDetails.selectedByKeyboard) {
      // Shift + Space
      rowSelection.current.isRowSelectionModeToggledByGrid = !hasSelectableRows;
      rowSelection.current.rangeUsingLastIndividuallySelectedRow = { anchorRow: selectionDetails.rowIndex };
      selectMultipleRows(selectionDetails.rowIndex, rowSelection.current.rangeUsingLastIndividuallySelectedRow);
      rowSelection.current.rangeUsingLastIndividuallySelectedRow.previousSelectionEndRow = selectionDetails.rowIndex;
    } else {
      // Shift + Click
      rowSelection.current.isRowSelectionModeToggledByGrid = !hasSelectableRows;
      selectMultipleRows(selectionDetails.rowIndex, rangeInfo);
      rangeInfo.previousSelectionEndRow = selectionDetails.rowIndex;
    }
  }, [hasSelectableRows, selectMultipleRows, selectRow]);

  const handleKeyUp = (event) => {
    const key = event.keyCode;
    switch (key) {
      case KeyCode.KEY_SHIFT:
        rowSelection.current.rangeUsingFocusedRow = null;
        break;
      default:
        break;
    }
  };

  // -------------------------------------
  // event handlers

  /**
   * Move focus to next focusable element outside the worklist data grid
   */
  const moveFocusFromGrid = (moveForward) => {
    // add all elements we want to include in our selection
    const focusableElementSelector = 'a[href]:not([tabindex=\'-1\']), area[href]:not([tabindex=\'-1\']), input:not([disabled]):not([tabindex=\'-1\']), '
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
        if (cellCoordinates.row !== 0 && !rowSelection.current?.rangeUsingFocusedRow?.anchorRow) {
          rowSelection.current.rangeUsingFocusedRow = { anchorRow: cellCoordinates.row, previousSelectionEndRow: cellCoordinates.row };
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
          if (!hasSelectableRows) {
            setAriaLiveMessage(intl.formatMessage({ id: 'Terra.worklist-data-grid.cell-selection-cleared' }));
          }

          if (onClearSelectedCells) {
            onClearSelectedCells();
          }

          setFocusedRow(cellCoordinates.row);
          setFocusedCol(cellCoordinates.col);
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
    if (activateMultiRowSelection) {
      // Handle the row selection case.
      if (nextRow > rows.length) {
        nextRow = rows.length;
      } else if (nextRow <= 0) {
        nextRow = 1; // Only non-header rows can be selected.
      }
      rowSelection.current.isRowSelectionModeToggledByGrid = !hasSelectableRows;
      selectMultipleRows(nextRow, rowSelection.current.rangeUsingFocusedRow);
      rowSelection.current.rangeUsingFocusedRow.previousSelectionEndRow = nextRow;
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

  const onMouseDown = () => {
    // Prevent focus event updates when triggered by mouse
    handleFocus.current = false;
  };

  const onFocus = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      // Not triggered when swapping focus between children
      if (handleFocus.current) {
        setFocusedRowCol(focusedRow, focusedCol, true);
      }
    }

    handleFocus.current = true;
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
        onKeyUp={handleKeyUp}
        onFocus={onFocus}
        onMouseDown={onMouseDown}
        tabIndex={0}
        {...(activeIndex != null && { onMouseUp, onMouseMove, onMouseLeave: onMouseUp })}
      >
        <ColumnContext.Provider
          value={columnContextValue}
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
