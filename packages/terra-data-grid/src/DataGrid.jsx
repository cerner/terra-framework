import React, {
  useState, useRef, useCallback, forwardRef, useImperativeHandle, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import * as KeyCode from 'keycode-js';

import Table, {
  GridConstants, GridContext, sectionShape, rowShape, columnShape, validateRowHeaderIndex, hasColumnActions, ColumnHighlightColor,
} from 'terra-table';
import getFocusableElements from 'terra-table/lib/utils/focusManagement';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import WorklistDataGridUtils from './utils/WorklistDataGridUtils';

import styles from './DataGrid.module.scss';
import './_elementPolyfill';

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
  rows: PropTypes.arrayOf(rowShape),

  /**
  * Data for content in the body of the table. Sections will be rendered in the order given.
  */
  sections: PropTypes.arrayOf(sectionShape),

  /**
   * Data for pinned columns. Pinned columns are the stickied leftmost columns of the grid.
   * Columns will be presented in the order given.
   */
  pinnedColumns: PropTypes.arrayOf(columnShape),

  /**
   * Data for overflow columns. Overflow columns are rendered in the Data Grid's horizontal overflow.
   * Columns will be presented in the order given.
   */
  overflowColumns: PropTypes.arrayOf(columnShape),

  /**
   * Number indicating the default column width in px. This value will be used if no overriding width value is provided on a per-column basis.
   */
  defaultColumnWidth: PropTypes.number,

  /**
   * String that specifies the column height. Any valid CSS height value is accepted.
   */
  columnHeaderHeight: PropTypes.string,

  /**
   * Numeric increment in pixels to adjust column width when resizing via the keyboard.
   */
  columnResizeIncrement: PropTypes.number,

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
   * @param {object} event event
   */
  onCellSelect: PropTypes.func,

  /**
   * Function that is called when a collapsible section is selected. Parameters: `onSectionSelect(sectionId)`
   */
  onSectionSelect: PropTypes.func,

  /**
   * Callback function that is called when a selectable column is selected. Parameters:
   *  @param {string} columnId columnId
   */
  onColumnSelect: PropTypes.func,

  /**
   * Callback function that is called when all selected cells need to be unselected. Parameters: none.
   */
  onClearSelection: PropTypes.func,

  /**
   * Callback function that is called when a range selection occurs. Parameters:
   * @param {number} rowIndex RowIndex of the cell from which the range selection was triggered.
   * @param {number} columnIndex ColumnIndex of the cell from which the range selection was triggered.
   * @param {number} direction Direction keycode representing the direction of the selection.
   */
  onRangeSelection: PropTypes.func,

  /**
   * Callback function that is called when you click on the row selection header.
  */
  onRowSelectionHeaderSelect: PropTypes.func,

  /**
   * Callback function that is called when a cell range selection occurs. Parameters:
   * @param {number} rowIndex RowIndex of the cell from which the range selection was triggered.
   * @param {number} columnIndex ColumnIndex of the cell from which the range selection was triggered.
   * @param {number} direction Direction keycode representing the direction of the selection.
   */
  onCellRangeSelect: PropTypes.func,

  /**
   * Boolean indicating whether or not the DataGrid should allow entire rows to be selectable. An additional column will be
   * rendered to allow for row selection to occur.
   */
  hasSelectableRows: PropTypes.bool,

  /**
   * Boolean indicating whether or not the DataGrid should hide the column headers.
   */
  hasVisibleColumnHeaders: PropTypes.bool,

  /**
   * String that specifies the minimum height for the rows on the table. rowHeight takes precedence if valid CSS value is passed.
   * With this property the height of the cell will grow to fit the cell content.
   */
  rowMinimumHeight: PropTypes.string,

  /**
   * Determines if focus is moved to the interactive element of a cell when a single button or hyperlink element is the only interactive element.
   */
  isAutoFocusEnabled: PropTypes.bool,
};

const defaultProps = {
  rowHeaderIndex: 0,
  defaultColumnWidth: 200,
  columnHeaderHeight: '2.5rem',
  pinnedColumns: [],
  overflowColumns: [],
  rows: [],
  hasVisibleColumnHeaders: true,
};

const DataGrid = forwardRef((props, ref) => {
  const {
    ariaLabel,
    ariaLabelledBy,
    columnHeaderHeight,
    columnResizeIncrement,
    defaultColumnWidth,
    hasVisibleColumnHeaders,
    hasSelectableRows,
    id,
    onCellRangeSelect,
    onCellSelect,
    onClearSelection,
    onColumnResize,
    onColumnSelect,
    onRangeSelection,
    onRowSelectionHeaderSelect,
    onSectionSelect,
    overflowColumns,
    pinnedColumns,
    rowHeaderIndex,
    rowHeight,
    rows,
    sections,
    rowMinimumHeight,
    isAutoFocusEnabled,
  } = props;

  const displayedColumns = (hasSelectableRows ? [WorklistDataGridUtils.ROW_SELECTION_COLUMN] : []).concat(pinnedColumns).concat(overflowColumns);
  // Create new displayedColumns object to account for column spans
  const displayedColumnsWithColumnSpan = useMemo(() => {
    let i = 0;
    const newDisplayedColumns = [];
    displayedColumns.forEach((column) => {
      if (column.columnSpan > 1) {
        newDisplayedColumns[i] = { ...column, columnSpanIndex: 0 };
        i += 1;
        for (let counter = column.columnSpan; counter > 1; counter -= 1) {
          newDisplayedColumns[i] = { id: `${column.id}`, columnSpanIndex: `${column.columnSpan - counter + 1}` };
          i += 1;
        }
      } else {
        newDisplayedColumns[i] = column;
        i += 1;
      }
    });
    return newDisplayedColumns;
  }, [displayedColumns]);

  // By default, all grid-based components have selectable cells.
  const dataGridRows = useMemo(() => (rows.map((row) => ({
    ...row,
    cells: row.cells.map((cell) => ({
      ...cell,
      isSelectable: cell.isSelectable !== false,
    })),
  }))), [rows]);

  // Reference variable for WorklistDataGrid table element
  const grid = useRef();
  const gridContainerRef = useRef();
  const tableContainerRef = useRef();
  const handleFocus = useRef(true);

  const focusedCellRef = useRef({ rowId: '', columnId: '' });

  const [checkResizable, setCheckResizable] = useState(false);

  // check if at least one column has an action prop
  // same check is done in Table, but as Table can be a stand-alone component, it can't rely on a passed prop.
  const hasColumnHeaderActions = hasColumnActions(pinnedColumns) || hasColumnActions(overflowColumns);

  // eslint-disable-next-line no-nested-ternary
  const firstRowIndex = hasVisibleColumnHeaders ? 0 : 1;

  // if columns are not visible then set the first selectable row index to 1 or 2
  const [focusedRow, setFocusedRow] = useState(firstRowIndex);
  const [focusedCol, setFocusedCol] = useState(0);

  // Aria live region message management
  const [cellAriaLiveMessage, setCellAriaLiveMessage] = useState(null);

  const gridContextValue = useMemo(() => ({
    role: GridConstants.GRID,
    setCellAriaLiveMessage,
    tableRef: grid,
    tableContainerRef,
    isAutoFocusEnabled,
  }), [grid, isAutoFocusEnabled, tableContainerRef]);

  // -------------------------------------
  // functions

  const isRowSelectionCell = useCallback((columnIndex) => (
    hasSelectableRows && columnIndex < displayedColumnsWithColumnSpan.length && displayedColumnsWithColumnSpan[columnIndex].id === WorklistDataGridUtils.ROW_SELECTION_COLUMN.id
  ), [displayedColumnsWithColumnSpan, hasSelectableRows]);

  const isSection = useCallback((rowIndex) => (
    grid.current.rows[rowIndex].hasAttribute('data-section-id')
  ), []);

  const setFocusedRowCol = useCallback((newRowIndex, newColIndex, makeActiveElement) => {
    setCellAriaLiveMessage(null);
    setFocusedRow(newRowIndex);
    setFocusedCol(newColIndex);

    if (newColIndex < displayedColumnsWithColumnSpan.length) {
      focusedCellRef.current = {
        rowId: grid.current.rows[newRowIndex].getAttribute('data-row-id'),
        columnId: displayedColumnsWithColumnSpan[newColIndex].id,
      };
    }

    if (!makeActiveElement) {
      return;
    }

    let focusedCell;

    if (isSection(newRowIndex)) {
      [focusedCell] = grid.current.rows[newRowIndex].cells;

      if (!focusedCell.hasAttribute('tabindex')) {
        focusedCell = grid.current.rows[newRowIndex].querySelector('button');
      }
      focusedCell?.focus();
      return;
    }

    focusedCell = grid.current.rows[newRowIndex].cells[newColIndex];

    // If there are multiple focusable elements, set focus on the cell
    if (getFocusableElements(focusedCell).length > 1) {
      focusedCell?.focus();
      return;
    }

    // Check if cell is in header row (for focusing on resize handles)
    const isHeaderRow = newRowIndex === 0 || (hasColumnHeaderActions && newRowIndex === 1);

    // Set focus to a single header button or hyperlink if they are the only content in cell
    const cellButtonOrHyperlink = focusedCell.querySelector('a, button');
    if ((isHeaderRow && !focusedCell.hasAttribute('tabindex')) || (isAutoFocusEnabled && cellButtonOrHyperlink)) {
      focusedCell = focusedCell.querySelector('a, button, [role="button"]');
      focusedCell?.focus();
      return;
    }

    // Set focus on input field (checkbox) of row selection cells.
    const rowSelectionCheckbox = focusedCell.querySelector('input');
    if (isRowSelectionCell(newColIndex) && rowSelectionCheckbox) {
      focusedCell = rowSelectionCheckbox;
      focusedCell?.focus();
      return;
    }

    focusedCell?.focus();
  }, [displayedColumnsWithColumnSpan, isSection, hasColumnHeaderActions, isAutoFocusEnabled, isRowSelectionCell]);

  // The focus is handled by the DataGrid. However, there are times
  // when the other components may want to change the currently focus
  // cells. In order to do so, these datagrid methods will be exposed to
  // allow those components to request focus change.
  useImperativeHandle(
    ref,
    () => ({
      setFocusedRowCol,
      getFocusedCell() { return { row: focusedRow, col: focusedCol }; },
      getGridRef() { return grid.current; },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [focusedCol, focusedRow],
  );

  // -------------------------------------

  const handleMoveCellFocus = (fromCell, toCell) => {
    if (!isSection(toCell.row)) {
    // Obtain coordinate rectangles for grid container, column header, and new cell selection
      const gridContainerRect = tableContainerRef.current.getBoundingClientRect();
      const columnHeaderRect = grid.current.rows[0].getBoundingClientRect();
      const nextCellRect = grid.current.rows[toCell.row].cells[toCell.col].getBoundingClientRect();

      // Calculate horizontal scroll offset for right boundary
      if (nextCellRect.right > gridContainerRect.right) {
        tableContainerRef.current.scrollBy(nextCellRect.right - gridContainerRect.right, 0);
      } else {
      // Calculate horizontal scroll offset for left boundary
        let scrollOffsetX = 0;
        const pinnedColumnOffset = hasSelectableRows ? 1 : 0;
        const lastPinnedColumnIndex = pinnedColumns.length - 1 + pinnedColumnOffset;
        if (lastPinnedColumnIndex >= 0) {
          if (toCell.col > lastPinnedColumnIndex) {
            const lastPinnedColumnRect = grid.current.rows[toCell.row].cells[lastPinnedColumnIndex].getBoundingClientRect();
            scrollOffsetX = nextCellRect.left - lastPinnedColumnRect.right;
          }
        } else {
          scrollOffsetX = nextCellRect.left - gridContainerRect.left;
        }

        if (scrollOffsetX < 0) {
          tableContainerRef.current.scrollBy(scrollOffsetX, 0);
        }
      }

      // Calculate vertical scroll offset
      const scrollOffsetY = nextCellRect.top - columnHeaderRect.bottom;
      if (scrollOffsetY < 0) {
        tableContainerRef.current.scrollBy(0, scrollOffsetY);
      }
    }
    setFocusedRowCol(toCell.row, toCell.col, true);
  };

  // callBack to trigger re-focusing when focused row or col didn't change, but focus update is needed
  const triggerFocus = useCallback(() => (
    setFocusedRowCol(focusedRow, focusedCol, true)
  ), [setFocusedRowCol, focusedRow, focusedCol]);

  // -------------------------------------
  // event handlers

  /**
   * Move focus to next focusable element outside the data grid
   */
  const moveFocusFromGrid = (moveForward) => {
    // add all elements we want to include in our selection
    const focusableElementSelector = 'a[href]:not([tabindex=\'-1\']), area[href]:not([tabindex=\'-1\']), input:not([disabled]):not([tabindex=\'-1\']), '
    + "select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']), "
    + "iframe:not([tabindex='-1']), [tabindex]:not([tabindex='-1']), [contentEditable=true]:not([tabindex='-1'])";

    const focusableElements = [...document.body.querySelectorAll(`${focusableElementSelector}`)].filter(
      element => !element.hasAttribute('disabled')
      && !element.getAttribute('aria-hidden')
      && !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length)
      && window.getComputedStyle(element).visibility !== 'hidden'
      && element.closest('[inert]') === null
      && (element.id === id || !gridContainerRef.current.contains(element)),
    );

    // Identify index of the active element in the DOM excluding data grid children
    const index = focusableElements.indexOf(gridContainerRef.current);
    if (index > -1) {
      // Move focus outside data grid
      const indexOffset = moveForward ? 1 : -1;
      let newFocusElement;

      if (index + indexOffset < focusableElements.length) {
        newFocusElement = focusableElements[index + indexOffset];
      } else if (focusableElements[0].id !== id) {
        // eslint-disable-next-line prefer-destructuring
        newFocusElement = focusableElements[0];
      }

      if (newFocusElement) {
        newFocusElement.focus();
      }
    }
  };

  /**
   *
   * @param {HTMLElement} element - The element to check if it is a text input
   * @returns True if the element is a text input.  Otherwise, false.
   */
  const isTextInput = (element) => {
    const { tagName } = element;
    if (tagName.toLowerCase() === 'input') {
      const validTypes = ['text', 'password', 'number', 'email', 'tel', 'url', 'search', 'date', 'datetime', 'datetime-local', 'time', 'month', 'week'];
      const inputType = element.type;
      return validTypes.indexOf(inputType) >= 0;
    }

    return false;
  };

  const handleKeyDown = (event) => {
    const cellCoordinates = { row: focusedRow, col: focusedCol };
    let nextRow = cellCoordinates.row;
    let nextCol = cellCoordinates.col;
    setCheckResizable(false);

    const targetElement = event.target;
    const key = event.keyCode;

    // Allow default behavior if the event target is an editable field
    if (key !== KeyCode.KEY_TAB
        && (isTextInput(targetElement)
            || ['textarea', 'select'].indexOf(targetElement.tagName.toLowerCase()) >= 0
            || (targetElement.hasAttribute('contentEditable') && targetElement.getAttribute('contentEditable') !== false))) {
      return;
    }

    // Disable horizontal navigation when section has focus
    if ((key === KeyCode.KEY_RIGHT || key === KeyCode.KEY_LEFT)
        && isSection(cellCoordinates.row)) {
      event.preventDefault();
      return;
    }

    // Get grid row count
    const gridRowCount = grid.current.rows.length;

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
            // Mac: Ctrl + Cmd + Left
            // Windows: Ctrl + Home
            nextRow = 1; // Assumption is that the first row is the column Heading.
          }
        } else {
          // Left key
          nextCol -= 1;
          setCheckResizable(cellCoordinates.row === 0 || (hasColumnHeaderActions && cellCoordinates.row === 1));
        }
        break;
      case KeyCode.KEY_RIGHT:
        if (event.metaKey) {
          // Mac: Cmd + Right
          // Win: End
          nextCol = displayedColumnsWithColumnSpan.length - 1;

          if (event.ctrlKey) {
            // Mac: Ctrl + Cmd + Right
            // Windows: Ctrl + End
            nextRow = gridRowCount - 1;
          }
        } else {
          // Right key
          nextCol += 1;
        }
        break;
      case KeyCode.KEY_HOME:
        nextCol = 0;
        if (event.ctrlKey) {
          nextRow = 1; // Assumption is that the first row is the column Heading.
        }
        break;
      case KeyCode.KEY_END:
        nextCol = displayedColumnsWithColumnSpan.length - 1; // Col are zero based.
        if (event.ctrlKey) {
          // Though rows are zero based, the header is the first row so the rowsLength will
          // always be one more than then actual number of data rows.
          nextRow = gridRowCount - 1;
        }
        break;
      case KeyCode.KEY_ESCAPE:
        if (onClearSelection) {
          onClearSelection();
        }
        event.preventDefault();
        return;
      case KeyCode.KEY_TAB:
        moveFocusFromGrid(!event.shiftKey);
        event.preventDefault();
        return;
      default:
        return;
    }

    const upDownKeys = new Set([KeyCode.KEY_UP, KeyCode.KEY_DOWN]);
    const directionalKeys = new Set([KeyCode.KEY_UP, KeyCode.KEY_DOWN, KeyCode.KEY_LEFT, KeyCode.KEY_RIGHT]);
    if (onRangeSelection && event.shiftKey && upDownKeys.has(event.keyCode)) {
      onRangeSelection(cellCoordinates.row, cellCoordinates.col, event.keyCode);
    }
    if (onCellRangeSelect && event.shiftKey && directionalKeys.has(event.keyCode)) {
      onCellRangeSelect(cellCoordinates.row, cellCoordinates.col, event.keyCode);
    }

    if (nextRow >= gridRowCount || nextCol >= displayedColumnsWithColumnSpan.length) {
      event.preventDefault(); // prevent the page from moving with the arrow keys.
      return;
    }
    if (nextCol < 0 || nextRow < (firstRowIndex)) {
      event.preventDefault(); // prevent the page from moving with the arrow keys.
      return;
    }

    handleMoveCellFocus(cellCoordinates, { row: nextRow, col: nextCol });
    event.preventDefault(); // prevent the page from moving with the arrow keys.
  };

  const handleMouseDown = (event) => {
    // Determine cell containing click event
    const clickTarget = event.target;
    const targetCell = clickTarget.closest('td, th');

    // Store focused cell position
    if (targetCell) {
      // Prevent focus event updates when triggered by mouse
      handleFocus.current = false;

      setCheckResizable(false);

      setFocusedRowCol(targetCell.parentElement.rowIndex, targetCell.cellIndex);
    }
  };

  /**
   * Establishes selection state when the WorklistDataGrid gains focus
   * @param {*} event focus event data
   */
  const onFocus = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      // Not triggered when swapping focus between children
      if (handleFocus.current) {
        let newRowIndex = focusedRow;
        let newColumnIndex = focusedCol;

        // Check for last focused row ID. If found set the index. Otherwise set it to the last focused row or last index.
        if (focusedCellRef.current.rowId) {
          newRowIndex = [...grid.current.rows].findIndex(row => row.getAttribute('data-row-id') === focusedCellRef.current.rowId);
          newRowIndex = newRowIndex === -1
            ? Math.min(focusedRow, grid.current.rows.length - 1)
            : newRowIndex;
        }

        // Check for last focused column ID. If found set the index. Otherwise set it to the last focused column or last index.
        if (focusedCellRef.current.columnId) {
          newColumnIndex = displayedColumnsWithColumnSpan.findIndex(column => column.id === focusedCellRef.current.columnId);
          newColumnIndex = newColumnIndex === -1
            ? Math.min(focusedCol, displayedColumnsWithColumnSpan.length - 1)
            : newColumnIndex;
        }

        setFocusedRowCol(newRowIndex, newColumnIndex, true);
      }
    }

    handleFocus.current = true;
  };

  // -------------------------------------

  const isGridActive = grid.current?.contains(document.activeElement);
  const isOneOfHeaderRows = focusedRow === 0 || (hasColumnHeaderActions && focusedRow === 1);

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      ref={gridContainerRef}
      onKeyDown={handleKeyDown}
      onMouseDown={handleMouseDown}
      onFocus={onFocus}
      id={id}
      className={cx('data-grid-container')}
    >
      <GridContext.Provider value={gridContextValue}>
        <Table
          id={`${id}-table`}
          rows={dataGridRows}
          sections={sections}
          ariaLabelledBy={ariaLabelledBy}
          ariaLabel={ariaLabel}
          activeColumnIndex={(isGridActive && (focusedRow === 0 || (hasColumnHeaderActions && focusedRow === 1))) ? focusedCol : undefined}
          focusedRowIndex={focusedRow}
          triggerFocus={triggerFocus}
          isActiveColumnResizing={isOneOfHeaderRows && checkResizable}
          columnResizeIncrement={columnResizeIncrement}
          pinnedColumns={pinnedColumns}
          overflowColumns={overflowColumns}
          defaultColumnWidth={defaultColumnWidth}
          columnHeaderHeight={columnHeaderHeight}
          rowHeight={rowHeight}
          rowHeaderIndex={rowHeaderIndex}
          onColumnResize={onColumnResize}
          onColumnSelect={onColumnSelect}
          onSectionSelect={onSectionSelect}
          onRowSelectionHeaderSelect={onRowSelectionHeaderSelect}
          onCellSelect={onCellSelect}
          rowSelectionMode={hasSelectableRows ? 'multiple' : undefined}
          hasVisibleColumnHeaders={hasVisibleColumnHeaders}
          isStriped
          rowMinimumHeight={rowMinimumHeight}
        />
      </GridContext.Provider>
      <VisuallyHiddenText aria-live="polite" aria-atomic="true" text={cellAriaLiveMessage} />
    </div>
  );
});

DataGrid.defaultProps = defaultProps;
DataGrid.propTypes = propTypes;

export default DataGrid;
export { ColumnHighlightColor };
