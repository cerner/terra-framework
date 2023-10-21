import React, {
  useState, useRef, useCallback, forwardRef, useImperativeHandle, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import * as KeyCode from 'keycode-js';
import classNames from 'classnames/bind';

import VisuallyHiddenText from 'terra-visually-hidden-text';
import Table, { GridContext } from 'terra-table';
import rowShape from './proptypes/rowShape';
import { columnShape } from './proptypes/columnShape';
import validateRowHeaderIndex from './proptypes/validators';
import './_elementPolyfill';
import styles from './DataGrid.module.scss';

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
   * Boolean specifying whether or not the component should have zebra striping for rows.
   */
  isStriped: PropTypes.bool,

  /**
   * Data for content in the body of the Grid. Rows will be rendered in the order given.
   */
  rows: PropTypes.arrayOf(rowShape),

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
   * Boolean indicating whether or not the DataGrid should allow entire rows to be selectable. An additional column will be
   * rendered to allow for row selection to occur.
   */
  hasSelectableRows: PropTypes.bool,
};

const defaultProps = {
  rowHeaderIndex: 0,
  defaultColumnWidth: 200,
  columnHeaderHeight: '2.5rem',
  rowHeight: '2.5rem',
  pinnedColumns: [],
  overflowColumns: [],
  rows: [],
};

const DataGrid = injectIntl((props) => {
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
    onClearSelection,
    onRangeSelection,
    hasSelectableRows,
    rowHeaderIndex,
  } = props;

  const tableRef = useRef();
  const gridContainerRef = useRef();

  const handleFocus = useRef(true);

  const focusedRow = useRef(0);
  const focusedCol = useRef(0);
  const [cellAriaLiveMessage, setCellAriaLiveMessage] = useState(null);

  // -------------------------------------
  // functions

  const setFocusedRowCol = (newRowIndex, newColIndex, makeActiveElement) => {
    setCellAriaLiveMessage(null);
    focusedRow.current = newRowIndex;
    focusedCol.current = newColIndex;
    let focusedCell = tableRef.current.rows[newRowIndex].cells[newColIndex];
    if (hasSelectableRows && newColIndex === 0 && focusedCell.getElementsByTagName('input').length > 0) {
      [focusedCell] = focusedCell.getElementsByTagName('input');
    }

    if (makeActiveElement) {
      focusedCell.focus();
    }
  };

  // The focus is handled by the DataGrid. However, there are times
  // when the other components may want to change the currently focus
  // cells. In order to do so, these datagrid methods will be exposed to
  // allow those components to request focus change.
  useImperativeHandle(
    props.focusFuncRef,
    () => ({
      setFocusedRowCol,
      getFocusedCell() { return { row: focusedRow.current, col: focusedCol.current }; },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [focusedCol.current, focusedRow.current],
  );

  // -------------------------------------
  // callback Hooks

  // -------------------------------------
  // useEffect Hooks

  useEffect(() => {
    if (gridContainerRef) {
      const table = gridContainerRef.current.getElementsByTagName('table')[0];
      tableRef.current = table;
    }
  }, [gridContainerRef]);

  // -------------------------------------

  const handleMoveCellFocus = (fromCell, toCell) => {
    // Obtain coordinate rectangles for scrollable container, column header, and new cell selection
    // TODO: Implementation is not easy to understand, get suggestions on how to clean this logic up.
    const tableRows = tableRef.current.rows;
    const tableContainer = gridContainerRef.current.firstChild;
    const tableContainerRect = tableContainer.getBoundingClientRect();
    const nextCellRect = tableRows[toCell.row].cells[toCell.col].getBoundingClientRect();

    if (nextCellRect.right > tableContainerRect.right) {
      // Calculate scroll when next cell overlaps container's right border.
      tableContainer.scrollBy(nextCellRect.right - tableContainerRect.right, 0);
    } else if (hasSelectableRows || pinnedColumns.length) {
      // Calculate scroll when pinned columns exist. Row selection always has at least 1 pinned column.
      const selectableRowsOffset = hasSelectableRows ? 1 : 0;
      const lastPinnedColumnIndex = pinnedColumns.length - 1 + selectableRowsOffset;
      const lastPinnedColumnRect = tableRows[0].cells[lastPinnedColumnIndex].getBoundingClientRect();

      if (toCell.col > lastPinnedColumnIndex && nextCellRect.left < lastPinnedColumnRect.right) {
        // Calculate scroll when in overflow region and the next cell is overlapping the last pinned column to the right.
        tableContainer.scrollBy(nextCellRect.left - lastPinnedColumnRect.right, 0);
      } else if (toCell.col > lastPinnedColumnIndex && nextCellRect.right < lastPinnedColumnRect.left) {
        // Calculate scroll when in overflow region and the next cell is overlpping the last pinned column to the left.
        tableContainer.scrollBy(nextCellRect.right - lastPinnedColumnRect.left, 0);
      }
    } else if (nextCellRect.left < tableContainerRect.left) {
      // Calculate scroll when next cell overlaps container's left border.
      tableContainer.scrollBy(nextCellRect.left - tableContainerRect.left, 0);
    }

    // Calculate vertical scroll offset
    const columnHeaderRect = tableRows[0].cells[toCell.col].getBoundingClientRect();
    const scrollOffsetY = nextCellRect.top - columnHeaderRect.bottom;
    if (scrollOffsetY < 0) {
      tableContainer.scrollBy(0, scrollOffsetY);
    }
    setFocusedRowCol(toCell.row, toCell.col, true);
  };

  const handleColumnSelect = useCallback((columnId, cellCoordinates) => {
    focusedRow.current = 0;
    focusedCol.current = cellCoordinates.col;

    if (onColumnSelect) {
      onColumnSelect(columnId);
    }
  }, [onColumnSelect]);

  const handleCellSelection = useCallback((selectionDetails) => {
    focusedRow.current = selectionDetails.rowIndex;
    focusedCol.current = selectionDetails.columnIndex;
    if (onCellSelect) {
      onCellSelect(selectionDetails);
    }
  }, [onCellSelect]);

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
      && (element.id === id || !tableRef.current.contains(element)),
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
    const cellCoordinates = { row: focusedRow.current, col: focusedCol.current };
    let nextRow = cellCoordinates.row;
    let nextCol = cellCoordinates.col;

    const targetElement = event.target;

    // Allow default behavior if the event target is an editable field
    if (event.keyCode !== KeyCode.KEY_TAB
        && (isTextInput(targetElement)
            || ['textarea', 'select'].indexOf(targetElement.tagName.toLowerCase()) >= 0
            || (targetElement.hasAttribute('contentEditable') && targetElement.getAttribute('contentEditable') !== false))) {
      return;
    }
    const columns = tableRef.current.tHead.rows[0].cells;
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
            // Mac: Ctrl + Cmd + Left
            // Windows: Ctrl + Home
            nextRow = 1; // Assumption is that the first row is the column Heading.
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
          nextCol = columns.length - 1;

          if (event.ctrlKey) {
            // Mac: Ctrl + Cmd + Right
            // Windows: Ctrl + End
            nextRow = rows.length;
          }
        } else {
          // Right key
          nextCol = Math.min(nextCol + 1, columns.length - 1);
        }
        break;
      case KeyCode.KEY_HOME:
        nextCol = 0;
        if (event.ctrlKey) {
          nextRow = 1; // Assumption is that the first row is the column Heading.
        }
        break;
      case KeyCode.KEY_END:
        nextCol = columns.length - 1; // Col are zero based.
        if (event.ctrlKey) {
          // Though rows are zero based, the header is the first row so the rowsLength will
          // always be one more than then actual number of data rows.
          nextRow = rows.length;
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

    if (onRangeSelection && event.shiftKey && (event.keyCode === KeyCode.KEY_UP || event.keyCode === KeyCode.KEY_DOWN)) {
      onRangeSelection(cellCoordinates.row, cellCoordinates.col, event.keyCode);
    }

    if (nextRow > rows.length || nextCol >= columns.length) {
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

  const onMouseDown = () => {
    // Prevent focus event updates when triggered by mouse
    handleFocus.current = false;
  };

  const onFocus = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      // Not triggered when swapping focus between children
      if (handleFocus.current) {
        setFocusedRowCol(focusedRow.current, focusedCol.current, true);
      }
    }

    handleFocus.current = true;
  };

  // -------------------------------------

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      ref={gridContainerRef}
      onKeyDown={handleKeyDown}
      onMouseDown={onMouseDown}
      onFocus={onFocus}
      className={cx('data-grid-container')}
    >
      <GridContext.Provider value={{ role: 'grid' }}>
        <Table
          id={id}
          rows={rows}
          ariaLabelledBy={ariaLabelledBy}
          ariaLabel={ariaLabel}
          pinnedColumns={pinnedColumns}
          overflowColumns={overflowColumns}
          defaultColumnWidth={defaultColumnWidth}
          columnHeaderHeight={columnHeaderHeight}
          rowHeight={rowHeight}
          rowHeaderIndex={rowHeaderIndex}
          onColumnResize={onColumnResize}
          onColumnSelect={handleColumnSelect}
          onCellSelect={handleCellSelection}
          hasSelectableRows={hasSelectableRows}
          table
        />
      </GridContext.Provider>
      <VisuallyHiddenText aria-live="polite" aria-atomic="true" text={cellAriaLiveMessage} />
    </div>
  );
});

DataGrid.propTypes = propTypes;
DataGrid.defaultProps = defaultProps;

export default forwardRef((props, ref) => <DataGrid {...props} focusFuncRef={ref} />);
