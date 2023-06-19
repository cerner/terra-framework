import React, {
  useContext, useRef, useState, useEffect,
} from 'react';
import './_elementPolyfill';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import styles from './WorklistDataGrid.module.scss';
import WorklistDataGridUtils from './utils/WorklistDataGridUtils';
import WorklistDataGridPropTypes from './proptypes/WorklistDataGridPropTypes';
import Row from './subcomponents/Row';
import Cell from './subcomponents/Cell';
import RowSelectionCell from './subcomponents/RowSelectionCell';
import ColumnHeaderCell from './subcomponents/ColumnHeaderCell';

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
  const ariaLiveMsg = useRef();

  const [currentSelectedCell, setCurrentSelectedCell] = useState(null);
  const [isNavigationEnabled, setIsNavigationEnabled] = useState(true);
  const displayedColumns = (hasSelectableRows ? [WorklistDataGridUtils.ROW_SELECTION_COLUMN] : []).concat(columns);

  const theme = useContext(ThemeContext);

  const isRowSelectionCell = (columnIndex) => (
    hasSelectableRows && columnIndex < displayedColumns.length && displayedColumns[columnIndex].id === WorklistDataGridUtils.ROW_SELECTION_COLUMN.id
  );

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
  }, [hasSelectableRows]);

  const handleNavigationModeChange = (isGridNavigationEnabled) => {
    setIsNavigationEnabled(isGridNavigationEnabled);
  };

  const areRowsSelected = () => (
    rows.find(r => r.isSelected === true)
  );

  const clearRowSelection = () => {
    ariaLiveMsg.current = '';
    if (areRowsSelected()) {
      ariaLiveMsg.current = intl.formatMessage({ id: 'Terra.worklist-data-grid.all-rows-unselected' });
      // Esc (while in row selection mode and rows are selected): Clear selection
      if (onClearSelectedRows) {
        onClearSelectedRows();
      }
    } else if (onClearRowSelectionMode) {
      ariaLiveMsg.current = intl.formatMessage({ id: 'Terra.worklist-data-grid.row-selection-mode-disabled' });
      onClearRowSelectionMode();
    }
  };
  const handleRowSelection = (rowId, selectAllRows, rowIndex) => {
    // TODO: Consider changing the order of the parameter to (selectAllRows, rowId, rowIndex)
    let msgId = 'Terra.worklist-data-grid.all-rows-selected';
    if (!selectAllRows) {
      // TODO: Find something to differentiate between row select and unselect. Row Id seems to be always valued.
      msgId = rowId ? 'Terra.worklist-data-grid.row-selection-template' : 'Terra.worklist-data-grid.row-selection-unselected-template';
    }
    ariaLiveMsg.current = intl.formatMessage({ id: msgId }, { row: rowIndex });
    if (onRowSelect) {
      onRowSelect(rowId, selectAllRows);
    }
  };

  const handleMoveCellFocus = (fromCell, toCell) => {
    removeTabStop(fromCell.row, fromCell.col);
    setFocusedRowCol(toCell.row, toCell.col, true);
    setIsNavigationEnabled(true);
  };

  const handleCellSelectionChange = (rowId, columnId, cellCoordinates) => {
    ariaLiveMsg.current = intl.formatMessage({
      id: rowId ? 'Terra.worklist-data-grid.cell-selection-template' : 'Terra.worklist-data-grid.cell-selection-cleared',
    }, {
      row: cellCoordinates.row,
      column: cellCoordinates.col,
    });
    setFocusedRowCol(cellCoordinates.row, cellCoordinates.col, true);
    setIsNavigationEnabled(true);

    setCurrentSelectedCell((rowId && columnId) ? { rowId, columnId } : null);
  };

  const getRowSelectionCellData = (cellRowIndex, row) => (
    <RowSelectionCell
      rowId={row.id}
      columnId={displayedColumns[0].id}
      coordinates={{ row: cellRowIndex, col: 0 }}
      acceptsFocus={focusedRow.current === cellRowIndex && focusedCol.current === 0}
      isSelected={row.isSelected}
      ariaLabel={row.ariaLabel}
      onCellSelectionChange={handleCellSelectionChange}
      onMoveCellFocus={handleMoveCellFocus}
      isRowSelectionModeEnabled={hasSelectableRows}
      isNavigationEnabled={isNavigationEnabled}
      rowsLength={rows.length}
      columnsLength={displayedColumns.length}
    />
  );

  const getCellData = (cellRowIndex, cellColumnIndex, cell, rowId) => {
    const acceptsFocus = focusedRow.current === cellRowIndex && focusedCol.current === cellColumnIndex;
    const columnId = displayedColumns[cellColumnIndex].id;
    const isSelected = currentSelectedCell && currentSelectedCell.rowId === rowId && currentSelectedCell.columnId === columnId;
    const isRowHeader = cellColumnIndex === (props.rowHeaderIndex + hasSelectableRows ? 1 : 0);
    return (
      <Cell
        rowId={rowId}
        columnId={columnId}
        coordinates={{ row: cellRowIndex, col: cellColumnIndex }}
        acceptsFocus={acceptsFocus}
        isSelected={isSelected}
        className={isRowHeader
          ? cx(['worklist-data-grid-row-header',
            { 'worklist-data-grid-cell-selected': isSelected }])
          : cx(['worklist-data-grid-cell-data',
            { 'worklist-data-grid-cell-selected': isSelected }])}
        onCellSelect={onCellSelect}
        onCellSelectionChange={handleCellSelectionChange}
        onMoveCellFocus={handleMoveCellFocus}
        onNavigationModeChange={handleNavigationModeChange}
        isRowSelectionModeEnabled={hasSelectableRows}
        rowsLength={rows.length}
        columnsLength={displayedColumns.length}
        isRowHeader={isRowHeader}
        isNavigationEnabled={isNavigationEnabled}
      >
        {cell?.content}
      </Cell>
    );
  };

  const buildColumn = (columnData, columnIndex) => {
    const acceptsFocus = focusedRow.current === 0 && focusedCol.current === columnIndex;
    const width = `${columnData.width || props.columnWidth}px`;
    const height = props.columnHeaderHeight;
    return (
      <ColumnHeaderCell
        columnId={`${columnData.id}`}
        coordinates={{ row: 0, col: columnIndex }}
        acceptsFocus={acceptsFocus}
        width={width}
        height={height}
        rowsLength={rows.length}
        columnsLength={displayedColumns.length}
        onMoveCellFocus={handleMoveCellFocus}
        onCellSelectionChange={handleCellSelectionChange}
      >
        {columnData.displayName}
      </ColumnHeaderCell>
    );
  };

  const buildColumns = (allColumns) => {
    if (allColumns?.length > 0) {
      return (
        <tr height={props.columnHeaderHeight}>
          {allColumns.map((columnData, columnIndex) => (buildColumn(columnData, columnIndex)))}
        </tr>
      );
    }
    return undefined;
  };

  const buildRow = (row, rowIndex) => {
    const columnIndexOffSet = hasSelectableRows ? 1 : 0;

    return (
      <Row
        id={row.id}
        rowIndex={rowIndex}
        height={props.rowHeight}
        isSelected={row.isSelected}
        isRowSelectionModeEnabled={hasSelectableRows}
        onRowSelect={handleRowSelection}
        onClearRowSelection={clearRowSelection}
      >
        {hasSelectableRows && getRowSelectionCellData(rowIndex, row)}
        {row.cells.map((cell, cellColumnIndex) => (
          getCellData(rowIndex, cellColumnIndex + columnIndexOffSet, cell, row.id)
        ))}
      </Row>
    );
  };

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
