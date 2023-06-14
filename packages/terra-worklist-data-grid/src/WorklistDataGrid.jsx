/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, {
  useContext, useRef, useCallback, useState,
} from 'react';
import './_elementPolyfill';
import PropTypes from 'prop-types';
import * as KeyCode from 'keycode-js';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import DataCell from './subcomponents/DataCell';
import styles from './WorklistDataGrid.module.scss';
import RowHeaderCell from './subcomponents/RowHeaderCell';
import ColumnHeaderCell from './subcomponents/ColumnHeaderCell';
import WorklistDataGridUtils from './utils/WorklistDataGridUtils';
import WorklistDataGridPropTypes from './proptypes/WorklistDataGridPropTypes';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * String representing an attribute which identifies the element (or elements) that labels the grid.
   */
  ariaLabelledby: PropTypes.string,
  /**
   * String that labels the grid for accessibility.
   */
  ariaLabel: PropTypes.string,
  /**
   * String that will be used to identify the Grid. This value will be used as the id attribute of the overall grid container,
   * and it will be used to prefix other id attributes used for internal componentry.
   */
  id: PropTypes.string.isRequired,
  /**
   * Data for columns. By default, columns will be presented in the order given.
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
   * String that specifies the default height for rows in the grid. Any valid CSS width value is accepted.
   * To override the default value, provide height for the row that needs to be overridden.
   */
  rowHeight: PropTypes.string,
  /**
   * Number indicating the index of the column that represents row header. Index is 0 based and cannot exceed one less than the number of columns in the grid.
   */
  rowHeaderIndex: PropTypes.number,
  /**
   * Function that is called when a selectable cell is selected. Parameters: `onCellSelect(rowId, columnId)`
   */
  onCellSelect: PropTypes.func,
  /**
   * Function that will be called when a row is selected. Parameters: `onRowSelect(rowId)`
   */
  onRowSelect: PropTypes.func,
  /**
   * Function that is called when all selected rows need to be cleared.
   */
  onClearSelectedRows: PropTypes.func,
  /**
   * Function that is called when no row is selected and the row selection mode needs to be deactivated.
   */
  onClearRowSelectionMode: PropTypes.func,
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
    onClearSelectedRows,
    onClearRowSelectionMode,
    hasSelectableRows,
    intl,
  } = props;

  const grid = useRef();
  const focusedRow = useRef(0);
  const focusedCol = useRef(0);
  const rowSelectionMode = useRef(false); // used to detect change in row selection Mode.
  const [currentSelectedCell, setCurrentSelectedCell] = useState(null);
  const isNavigationEnabled = useRef(true);
  const displayedColumns = (hasSelectableRows ? [WorklistDataGridUtils.ROW_SELECTION_COLUMN] : []).concat(columns);

  const theme = useContext(ThemeContext);

  const setFocus = (rowIndex, colIndex) => {
    const focusedCell = grid.current.rows[rowIndex].cells[colIndex];
    focusedCell.tabIndex = 0;
    if (focusedCell.focus) {
      focusedCell.focus();
    }
  };

  const gridRef = useCallback((node) => {
    grid.current = node;
    setFocus(focusedRow.current, focusedCol.current);
  }, []);

  const isRowSelectionCell = (columnIndex) => (
    hasSelectableRows && columnIndex < displayedColumns.length && displayedColumns[columnIndex].id === WorklistDataGridUtils.ROW_SELECTION_COLUMN.id
  );

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

  const setFocusRowCol = (rowIndex, colIndex) => {
    removeTabStop(focusedRow.current, focusedCol.current);
    focusedRow.current = rowIndex;
    focusedCol.current = colIndex;
  };

  const selectCell = (event, rowIndex, columnIndex) => {
    // If current cell is selected, do nothing. TODO: confirm assumption
    if (currentSelectedCell
      && currentSelectedCell.rowId === grid.current.rows[rowIndex].id
      && currentSelectedCell.columnId === displayedColumns[columnIndex].id) {
      event.preventDefault();
      return;
    }

    // Make note of cell that is currently selected.
    setCurrentSelectedCell({
      rowId: grid.current.rows[rowIndex].id,
      columnId: displayedColumns[columnIndex].id,
    });

    event.preventDefault();

    if (onCellSelect) {
      onCellSelect(grid.current.rows[rowIndex].id);
    }
  };

  const handleCellCopy = () => {
    const cellContent = grid.current.rows[focusedRow.current].cells[focusedCol.current].textContent;
    if ('clipboard' in navigator) {
      navigator.clipboard.writeText(cellContent);
    } else {
      document.execCommand('copy', true, cellContent);
    }
  };

  const handleKeyDownWhenGridNavigationDisabled = (event) => {
    const key = event.keyCode;
    switch (key) {
      case KeyCode.KEY_ESCAPE:
        isNavigationEnabled.current = true;
        break;
      default:
        break;
    }
  };

  const areRowsSelected = () => (
    rows.find(r => r.isSelected === true)
  );

  const clearRowSelection = () => {
    if (areRowsSelected()) {
      // Esc (while in row selection mode and rows are selected): Clear selection
      if (onClearSelectedRows) {
        onClearSelectedRows();
      }
    } else if (onClearRowSelectionMode) {
      onClearRowSelectionMode(false);
    }
  };

  const clearSelection = () => {
    if (currentSelectedCell) {
      setCurrentSelectedCell(null);
    }
    // Clears row selection or cell selection.
    if (hasSelectableRows) {
      clearRowSelection();
    }
  };

  const selectRow = (event) => {
    // TODO: This code is repeated so refactor and make a function.
    const clickedCell = event.target.closest('td,th') || document.activeElement.closest('td,th');
    if (!clickedCell) {
      // If anything other than a table data or table header cell is clicked, ignore the click.
      return;
    }
    const rowId = clickedCell.parentElement.id;

    // clear any selected cell;
    setCurrentSelectedCell(null);

    let newTabStopCell = clickedCell;
    const colIndex = clickedCell.cellIndex;
    const { rowIndex } = clickedCell.parentElement;
    if (!isRowSelectionCell(colIndex)) {
      newTabStopCell = grid.current.rows[rowIndex].cells[0];
    }
    removeTabStop(rowIndex, colIndex);
    setFocusRowCol(rowIndex, 0); // The cell in the row selector column will get the focus.

    if (newTabStopCell.firstChild) {
      newTabStopCell = newTabStopCell.firstChild;
    }
    newTabStopCell.tabIndex = 0;
    newTabStopCell.focus();

    if (onRowSelect) {
      onRowSelect(false, rowId);
    }
  };

  const selectAllRows = (event) => {
    const key = event.keyCode;
    switch (key) {
      case KeyCode.KEY_A:
        if (!hasSelectableRows) return false;
        if (event.ctrlKey) {
          if (onRowSelect) {
            onRowSelect(true, null);
          }
          return true;
        }
        break;
      default:
    }
    return false;
  };

  const handleKeyUp = (event) => {
    const currentCell = event.target.closest('td,th') || document.activeElement.closest('td,th');
    if (!currentCell) {
      // If anything other than a table data or table header cell is clicked, ignore the click.
      return;
    }
    const currentFocusedRow = currentCell.parentElement.rowIndex;
    const currentFocusedCol = currentCell.cellIndex;
    const rowSelectionCell = isRowSelectionCell(currentFocusedCol);

    const key = event.keyCode;
    switch (key) {
      case KeyCode.KEY_SPACE:
        if (hasSelectableRows) {
          selectRow(event);
        } else if (!rowSelectionCell) {
          selectCell(event, currentFocusedRow, currentFocusedCol);
        }
        event.preventDefault();
        break;
      default:
    }
  };

  const handleKeyDown = (event) => {
    if (selectAllRows(event)) {
      event.preventDefault();
      return;
    }

    const currentCell = event.target.closest('td,th') || document.activeElement.closest('td,th');
    if (!currentCell) {
      // If anything other than a table data or table header cell is clicked, ignore the click.
      return;
    }

    const currentFocusedRow = currentCell.parentElement.rowIndex;
    const currentFocusedCol = currentCell.cellIndex;
    const rowSelectionCell = isRowSelectionCell(currentFocusedCol);

    if (!isNavigationEnabled.current) {
      handleKeyDownWhenGridNavigationDisabled(event);
      // TODO: Set focus to the first focusable child of the active cell.
      event.preventDefault();
      return;
    }

    let nextRow = currentFocusedRow;
    let nextCol = currentFocusedCol;

    const key = event.keyCode;
    switch (key) {
      case KeyCode.KEY_UP:
        nextRow -= 1;
        break;
      case KeyCode.KEY_DOWN:
        nextRow += 1;
        break;
      case KeyCode.KEY_LEFT:
        nextCol -= 1;
        break;
      case KeyCode.KEY_RIGHT:
        nextCol += 1;
        break;
      case KeyCode.KEY_HOME:
        nextCol = 0;
        if (event.ctrlKey) {
          nextRow = 1; // Assumption is that the first row is the column Heading.
        }
        break;
      case KeyCode.KEY_END:
        nextCol = props.rows[0].cells.length - 1;
        if (event.ctrlKey) {
          nextRow = props.rows.length;
        }
        break;
      case KeyCode.KEY_SPACE:
        event.preventDefault();
        return;
      case KeyCode.KEY_ESCAPE:
        clearSelection();
        break;
      case KeyCode.KEY_RETURN: // May need to handle KeyCode.KEY_FIREFOX_ENTER
        if (!rowSelectionCell) {
          isNavigationEnabled.current = false;
          // TODO - Enter: Disable grid navigation.
          // Enter cell, focus first focusable element, subsequent tab presses cycle between focusable elements within cell.
          // Do not clear selection. If cell is text only, nothing happens; maintain grid navigation and focus on the cell.
        }
        break;
      default:
        return;
    }
    if (nextRow >= grid.current.rows.length || nextCol >= grid.current.rows[0].cells.length) {
      event.preventDefault();
      return;
    }
    if (nextCol < 0 || nextRow < 0) {
      event.preventDefault();
      return;
    }
    removeTabStop(currentFocusedRow, currentFocusedCol);
    setFocusRowCol(nextRow, nextCol);
    const elementWithTabStop = grid.current.rows[nextRow].cells[nextCol];
    elementWithTabStop.tabIndex = 0;
    elementWithTabStop.focus();
    event.preventDefault();
  };

  const handleClick = (event) => {
    isNavigationEnabled.current = true;
    // Determine which cell was clicked. In the event that the user holds the mouse across multiple cells,
    // the originating cell is the clicked cell/active element.
    const clickedCell = event.target.closest('td,th') || document.activeElement.closest('td,th');
    if (!clickedCell) {
      // If anything other than a table data or table header cell is clicked, ignore the click.
      return;
    }
    if (hasSelectableRows) {
      selectRow(event);
      return;
    }

    setFocusRowCol(clickedCell.parentElement.rowIndex, clickedCell.cellIndex);
    clickedCell.tabIndex = 0;
    selectCell(event, focusedRow.current, focusedCol.current);
  };

  const handleRowSelectionClick = (event) => {
    selectRow(event);
    event.stopPropagation();
  };

  const handleRowSelectionKeyUp = (event) => {
    const key = event.keyCode;
    switch (key) {
      case KeyCode.KEY_RETURN:
        return;
      case KeyCode.KEY_SPACE:
        selectRow(event);
        event.stopPropagation();
        break;
      default:
        break;
    }
  };

  const getRowSelectionCellData = (cellRowIndex, row) => {
    const cellColumnIndex = 0;
    const tabIndex = { tabIndex: cellRowIndex === focusedRow.current ? '0' : '-1' };
    const columnId = displayedColumns[cellColumnIndex].id;
    const cellId = `${row.id}_${columnId}`;
    return (
      <td
        key={cellId}
        id={cellId}
        aria-checked={row.isSelected}
        aria-label={intl.formatMessage({
          id: 'Terra.worklist-data-grid.row-selection-template',
        }, {
          rowDescription: row.ariaLabel,
        })}
        tabIndex="-1"
        className={cx(['selectable', theme.className])}
        onClick={hasSelectableRows ? handleRowSelectionClick : undefined}
        onKeyUp={hasSelectableRows ? handleRowSelectionKeyUp : undefined}
      >
        <input
          type="checkbox"
          id={`${cellId}_rowselect`}
          {...tabIndex}
          checked={row.isSelected}
          aria-checked={row.isSelected}
          className={cx(['selectable-centered', theme.className])}
        />
      </td>
    );
  };

  const getCellData = (cellRowIndex, cellColumnIndex, cell, rowId) => {
    const acceptsFocus = focusedCol.current === cellColumnIndex && focusedRow.current === cellRowIndex;
    const columnId = displayedColumns[cellColumnIndex].id;
    const isSelected = currentSelectedCell && currentSelectedCell.rowId === rowId && currentSelectedCell.columnId === columnId;
    return (cellColumnIndex === (props.rowHeaderIndex + hasSelectableRows ? 1 : 0))
      ? (
        <RowHeaderCell
          rowId={rowId}
          columnId={columnId}
          acceptsFocus={acceptsFocus}
          isSelected={isSelected}
          handleCellCopy={handleCellCopy}
        >
          {cell?.content}
        </RowHeaderCell>
      )
      : (
        <DataCell
          rowId={rowId}
          columnId={columnId}
          acceptsFocus={acceptsFocus}
          isSelected={isSelected}
          handleCellCopy={handleCellCopy}
        >
          {cell?.content}
        </DataCell>
      );
  };

  const buildColumn = (columnData) => {
    const width = `${columnData.width || props.columnWidth}px`;
    const height = props.columnHeaderHeight;
    const tabIndex = -1;
    return (
      <ColumnHeaderCell
        columnId={`${columnData.id}`}
        width={width}
        height={height}
        tabIndex={tabIndex}
      >
        {columnData.displayName}
      </ColumnHeaderCell>
    );
  };

  const buildColumns = (allColumns) => {
    if (allColumns?.length > 0) {
      return (
        <tr height={props.columnHeaderHeight}>
          {allColumns.map(columnData => (buildColumn(columnData)))}
        </tr>
      );
    }
    return undefined;
  };

  const buildRow = (row, rowIndex) => {
    const height = row.height || props.rowHeight;
    const columnIndexOffSet = hasSelectableRows ? 1 : 0;

    return (
      <tr
        key={row.id}
        id={row.id}
        className={
          cx([row.isSelected ? 'worklist-data-grid-row-selected' : 'worklist-data-grid-row'])
        }
        // eslint-disable-next-line react/forbid-dom-props
        style={{ height }}
      >
        {hasSelectableRows && getRowSelectionCellData(rowIndex, row)}
        {row.cells.map((cell, cellColumnIndex) => (
          getCellData(rowIndex, cellColumnIndex + columnIndexOffSet, cell, row.id)
        ))}
      </tr>
    );
  };

  const buildRows = (allRows) => {
    const rowData = allRows.map((row, index) => (buildRow(row, index + 1))); // One row is used for the Header.

    return rowData;
  };

  const resetFocusAfterRowSelectionModeChanges = () => {
    const rowSelectionModeChanged = rowSelectionMode.current !== hasSelectableRows;
    if (rowSelectionModeChanged) {
      rowSelectionMode.current = hasSelectableRows;
      setFocusRowCol(1, 0);
      setCurrentSelectedCell(null);
    }
  };

  resetFocusAfterRowSelectionModeChanges();

  const gridClassNames = cx('worklist-data-grid', theme.className);
  return (
    <table
      ref={gridRef}
      id={id}
      role="grid"
      aria-labelledby={ariaLabelledby}
      aria-label={ariaLabel}
      className={gridClassNames}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
    >
      <tbody>
        {buildColumns(displayedColumns)}
        {buildRows(rows)}
      </tbody>
    </table>
  );
}

WorklistDataGrid.propTypes = propTypes;
WorklistDataGrid.defaultProps = defaultProps;

export default injectIntl(WorklistDataGrid);

