/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, {
  useState, useRef, useCallback, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';
import * as KeyCode from 'keycode-js';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import rowShape from './proptypes/rowShape';
import { columnShape } from './proptypes/columnShape';
import validateRowHeaderIndex from './proptypes/validators';
import styles from './WorklistDataGrid.module.scss';
import DataGrid from './DataGrid';

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
   * Data for pinned columns. Pinned columns are the stickied leftmost columns of the grid.
   * Columns are rendered in the order in which they are provided.
   */
  pinnedColumns: PropTypes.arrayOf(columnShape),

  /**
   * Data for overflow columns. Overflow columns are rendered in the Worklist DataGrid's horizontal overflow.
   * Columns are rendered in the order in which they are provided.
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
   * Callback function that is called when one or more rows are selected or unselected. Parameters:
   * @param {arrayOf({string, boolean})} rowsToSelectAndUnSelect rowsToSelectAndUnSelect
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
   * Boolean indicating whether or not the Worklist DataGrid should allow entire rows to be selectable. An additional column will be
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

  const rowSelectionEffectTriggered = useRef(false);
  const selectedRows = useRef([]);
  const [rowSelectionAriaLiveMessage, setRowSelectionAriaLiveMessage] = useState(null);
  const [rowSelectionModeAriaLiveMessage, setRowSelectionModeAriaLiveMessage] = useState(null);
  const inShiftUpDownMode = useRef(false);
  const multiSelectRange = useRef({ start: null, end: null });

  // -------------------------------------
  // useEffect Hooks

  // useEffect for row selection
  useEffect(() => {
    if (!rowSelectionEffectTriggered.current) {
      rowSelectionEffectTriggered.current = true;
      return;
    }

    if (!hasSelectableRows) {
      multiSelectRange.current = {};
      selectedRows.current = [];
    }

    // Since the row selection mode has changed, the row selection mode needs to be updated.
    setRowSelectionModeAriaLiveMessage(intl.formatMessage({ id: hasSelectableRows ? 'Terra.worklistDataGrid.row-selection-mode-enabled' : 'Terra.worklistDataGrid.row-selection-mode-disabled' }));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasSelectableRows]);

  // useEffect for row updates
  useEffect(() => {
    const previousSelectedRows = [...selectedRows.current];
    selectedRows.current = rows.filter((row) => row.isSelected).map(row => (row.id));

    if (previousSelectedRows.length > 0 && selectedRows.current.length === 0) {
      setRowSelectionAriaLiveMessage(intl.formatMessage({ id: 'Terra.worklistDataGrid.all-rows-unselected' }));
    } else if (selectedRows.current.length === rows.length) {
      setRowSelectionAriaLiveMessage(intl.formatMessage({ id: 'Terra.worklistDataGrid.all-rows-selected' }));
    } else {
      const rowSelectionsAdded = selectedRows.current.filter(row => !previousSelectedRows.includes(row));
      const rowSelectionsRemoved = previousSelectedRows.filter(row => !selectedRows.current.includes(row));
      let selectionUpdateAriaMessage = '';

      if (rowSelectionsAdded.length === 1) {
        const newRowIndex = rows.findIndex(row => row.id === rowSelectionsAdded[0]);
        const selectedRowLabel = rows[newRowIndex].ariaLabel || newRowIndex + 2; // Accounts for header row and zero-based index
        selectionUpdateAriaMessage = intl.formatMessage({ id: 'Terra.worklistDataGrid.row-selection-template' }, { row: selectedRowLabel });
      } else if (rowSelectionsAdded.length > 1) {
        selectionUpdateAriaMessage = intl.formatMessage({ id: 'Terra.worklistDataGrid.multiple-rows-selected' }, { rowCount: rowSelectionsAdded.length });
      }

      if (rowSelectionsRemoved.length === 1) {
        const removedRowIndex = rows.findIndex(row => row.id === rowSelectionsRemoved[0]);
        const unselectedRowLabel = rows[removedRowIndex].ariaLabel || removedRowIndex + 2; // Accounts for header row and zero-based index
        selectionUpdateAriaMessage += intl.formatMessage({ id: 'Terra.worklistDataGrid.row-selection-cleared-template' }, { row: unselectedRowLabel });
      } else if (rowSelectionsRemoved.length > 1) {
        selectionUpdateAriaMessage += intl.formatMessage({ id: 'Terra.worklistDataGrid.multiple-rows-unselected' }, { rowCount: rowSelectionsRemoved.length });
      }

      if (selectionUpdateAriaMessage) {
        setRowSelectionAriaLiveMessage(selectionUpdateAriaMessage);
      }
    }
  }, [intl, rows]);

  const handleClearSelection = useCallback(() => {
    if (!hasSelectableRows) {
      if (onClearSelectedCells) {
        onClearSelectedCells();
      }
    } else {
      multiSelectRange.current = {}; // Clear the information used for selecting multiple rows.
      if (rows.some(row => row.isSelected)) {
        // Esc (while in row selection mode and rows are selected): Clear selection
        if (onClearSelectedRows) {
          onClearSelectedRows();
        }
      } else if (onDisableSelectableRows) {
        onDisableSelectableRows();
      }
    }
  }, [hasSelectableRows, onClearSelectedCells, onClearSelectedRows, onDisableSelectableRows, rows]);

  const selectAllRows = () => {
    if (onRowSelectAll) {
      onRowSelectAll();
    }
  };

  const getRowsInRangeToUnselect = useCallback((newEndOfRange) => {
    let rowIdsToUnselect = [];
    if (!multiSelectRange.current.end) {
      // short-circuit since there was no previous range, there is nothing to unselect.
      return rowIdsToUnselect;
    }

    if (multiSelectRange.current.start > multiSelectRange.current.end) {
      // The range extends upward from the anchor row
      if (newEndOfRange > multiSelectRange.current.end) {
        // The range was moved down towards the anchor so rows that no longer qualify for the range need to be unselected.
        rowIdsToUnselect = rows.slice(multiSelectRange.current.end - 1, Math.min(newEndOfRange, multiSelectRange.current.start) - 1).map(row => ({ id: row.id, selected: false }));
      }
    } else if (multiSelectRange.current.start < multiSelectRange.current.end) {
      // The range extends downward from the anchor row
      if (newEndOfRange < multiSelectRange.current.end) {
        // The range was moved up towards the anchor so rows that no longer qualify for the range need to be unselected. New endRangeIndex becomes ordered End
        rowIdsToUnselect = rows.slice(Math.max(multiSelectRange.current.start, newEndOfRange), multiSelectRange.current.end).map(row => ({ id: row.id, selected: false }));
      }
    }
    return rowIdsToUnselect;
  }, [rows]);

  const selectMultipleRows = useCallback((newEndOfRange) => {
    if (!hasSelectableRows) {
      onEnableRowSelection();
    }
    if (!onRowSelect) {
      return;
    }

    // Rows in range to remain selected
    const selectionStartRowIndex = Math.min(multiSelectRange.current.start, newEndOfRange);
    const selectionEndRowIndex = Math.max(multiSelectRange.current.start, newEndOfRange);

    // We are subtracting 1 to accommodate for the column header in the grid.
    let rowsToSelectAndUnSelect = rows.slice(selectionStartRowIndex - 1, selectionEndRowIndex).map(row => ({ id: row.id, selected: true }));

    // Determine if there are rows that are no longer in range that need to be unselected.
    rowsToSelectAndUnSelect = rowsToSelectAndUnSelect.concat(getRowsInRangeToUnselect(newEndOfRange));

    onRowSelect(rowsToSelectAndUnSelect);
    multiSelectRange.current.end = newEndOfRange;
  }, [hasSelectableRows, onEnableRowSelection, onRowSelect, rows, getRowsInRangeToUnselect]);

  const selectRow = useCallback((rowId, rowIndex) => {
    const rowsToSelectAndUnSelect = [];

    if (!rows[rowIndex - 1].isSelected) {
      multiSelectRange.current = { start: rowIndex, end: null }; // Establish new starting point for future range.
      rowsToSelectAndUnSelect.push({ id: rowId, selected: true });
    } else {
      if (rowIndex === multiSelectRange.current.start) {
        // The row that denotes the start for multiselect has been cleared.
        multiSelectRange.current = {};
      }
      rowsToSelectAndUnSelect.push({ id: rowId, selected: false });
    }

    if (onRowSelect) {
      onRowSelect(rowsToSelectAndUnSelect);
    }
  }, [onRowSelect, rows]);

  const onRangeSelection = useCallback((rowIndex, columnIndex, direction) => {
    let nextRow = rowIndex;
    if (direction === KeyCode.KEY_UP) {
      // Since range is being extended upward, row above the starting row should now
      // be added to the range of selected rows.
      nextRow -= 1;
      if (nextRow === 0) {
        // If the row above is the header, do not extend the range.
        nextRow = 1;
      }
    } else if (direction === KeyCode.KEY_DOWN) {
      // Since range is being extended downward, row below the starting row should now
      // be added to the range of selected rows.
      nextRow += 1;
    }

    if (!inShiftUpDownMode.current) {
      // Start of range selection using Shift+Up/Down so save this as the anchor/start for the range.
      inShiftUpDownMode.current = true;
      multiSelectRange.current = { start: rowIndex, end: null };
    }
    selectMultipleRows(nextRow);
  }, [selectMultipleRows]);

  const handleRowSelection = useCallback((selectionDetails) => {
    if (!hasSelectableRows) {
      if (selectionDetails.isShiftPressed) {
        // Shift+Space, Shift+Click, Shift+Up, Shift+Down
        multiSelectRange.current = { start: selectionDetails.rowIndex, end: null };
        selectMultipleRows(selectionDetails.rowIndex);
      }
    } else if (selectionDetails.isShiftPressed && multiSelectRange.current.start) {
      // Select multiple rows based on previously established anchor.
      selectMultipleRows(selectionDetails.rowIndex);
    } else {
      // There is no anchor or the shift key is not pressed so select the row and establish an anchor.
      selectRow(selectionDetails.rowId, selectionDetails.rowIndex);
    }
  }, [hasSelectableRows, selectMultipleRows, selectRow]);

  const handleCellSelection = useCallback((selectionDetails) => {
    if (hasSelectableRows || selectionDetails.isShiftPressed) {
      handleRowSelection(selectionDetails);
    } else if (selectionDetails.isCellSelectable && onCellSelect) {
      onCellSelect(selectionDetails.rowId, selectionDetails.columnId);
    }
  }, [handleRowSelection, hasSelectableRows, onCellSelect]);

  const handleKeyUp = (event) => {
    const key = event.keyCode;
    switch (key) {
      case KeyCode.KEY_SHIFT:
        inShiftUpDownMode.current = false;
        break;
      default:
    }
  };

  // -------------------------------------
  // event handlers

  const handleKeyDown = (event) => {
    switch (event.keyCode) {
      case KeyCode.KEY_A:
        if (hasSelectableRows && (event.ctrlKey || event.metaKey)) {
          selectAllRows();
          event.preventDefault(); // prevent the default selection of everything on the page.
        }
        break;
      default:
    }
  };

  // -------------------------------------
  return (
    <div onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} className={cx('worklist-data-grid-container')}>
      <DataGrid
        id={id}
        ariaLabel={ariaLabel}
        ariaLabelledBy={ariaLabelledBy}
        rows={rows}
        rowHeight={rowHeight}
        rowHeaderIndex={rowHeaderIndex}
        pinnedColumns={pinnedColumns}
        overflowColumns={overflowColumns}
        defaultColumnWidth={defaultColumnWidth}
        columnHeaderHeight={columnHeaderHeight}
        onColumnSelect={onColumnSelect}
        onColumnResize={onColumnResize}
        onCellSelect={handleCellSelection}
        onClearSelection={handleClearSelection}
        onRangeSelection={onRangeSelection}
        hasSelectableRows={hasSelectableRows}
      />
      <VisuallyHiddenText aria-live="polite" text={rowSelectionModeAriaLiveMessage} />
      <VisuallyHiddenText aria-live="polite" text={rowSelectionAriaLiveMessage} />
    </div>
  );
}

WorklistDataGrid.propTypes = propTypes;
WorklistDataGrid.defaultProps = defaultProps;

export default injectIntl(WorklistDataGrid);
