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
   * Number indicating the default column width in px. This value will be used if no overriding width value is provided on a per-column basis.
   */
  defaultColumnWidth: PropTypes.number,
  /**
   * String that specifies the column height. Any valid CSS height value is accepted.
   */
  columnHeaderHeight: PropTypes.string,
  /**
   * Numeric increment in pixels to adjust column width when resizing via the keyboard
   */
  columnResizeIncrement: PropTypes.number,
  /**
   * String that specifies the height for the rows in the grid. Any valid CSS value is accepted.
   */
  rowHeight: PropTypes.string,
  /**
   * Number indicating the index of the column that represents row header. Index is 0 based and cannot exceed one less than the number of columns in the grid.
   */
  rowHeaderIndex: PropTypes.number,
  /**
   * Function that is called when a resizable column is resized. Parameters: `function(columnId, requestedWidth)`
   */
  onColumnResize: PropTypes.func,
  /**
   * Callback function that is called when a selectable cell is selected. Parameters: `function(rowId, columnId)`.
   */
  onCellSelect: PropTypes.func,
  /**
   * Callback function that is called when a row is selected. Parameters: `function(rowId)`
   */
  onRowSelect: PropTypes.func,
  /**
   * Callback function that is called when all rows are selected. Parameters: `function()`.
   */
  onRowSelectAll: PropTypes.func,
  /**
   * Callback function that is called when a selectable column is selected. Parameters: `function(columnId)`
   */
  onColumnSelect: PropTypes.func,
  /**
   * Callback function that is called when all selected rows need to be unselected. Parameters: `function()`
   */
  onClearSelectedRows: PropTypes.func,
  /**
   * Callback function that is called when no row is selected and the row selection mode needs to be disabled. Parameters: `function()`
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
};

function WorklistDataGrid(props) {
  const {
    id,
    ariaLabelledby,
    ariaLabel,
    columns,
    rows,
    onColumnResize,
    defaultColumnWidth,
    columnHeaderHeight,
    columnResizeIncrement,
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

  // Default column size constraints
  const defaultColumnMinimumWidth = 100;
  const defaultColumnMaximumWidth = 300;

  // Initialize column width properties
  const initializeColumn = (column) => {
    const newColumn = { ...column };
    newColumn.width = column.width || defaultColumnWidth;
    newColumn.minimumWidth = column.minimumWidth || defaultColumnMinimumWidth;
    newColumn.maximumWidth = column.maximumWidth || defaultColumnMaximumWidth;

    return newColumn;
  };

  const updateDataColumnState = () => {
    const newGridColumns = {};
    newGridColumns.hasSelectableRows = hasSelectableRows;

    const newColumns = columns.map((column) => initializeColumn(column));
    if (hasSelectableRows) {
      newColumns.unshift(WorklistDataGridUtils.ROW_SELECTION_COLUMN);
    }

    newGridColumns.columns = newColumns;
    return newGridColumns;
  };

  const [dataGridColumns, setDataGridColumns] = useState(updateDataColumnState());

  // Manage column resize
  const [activeIndex, setActiveIndex] = useState(null);
  const activeColumnPageX = useRef(0);
  const activeColumnWidth = useRef(200);
  const tableWidth = useRef(0);

  const gridRef = useRef();
  const [ariaLiveMsg, setAriaLiveMsg] = useState('');
  const [focusedCell, setFocusedCell] = useState({ row: 0, col: 0 });
  const [currentSelectedCell, setCurrentSelectedCell] = useState(null);

  const theme = useContext(ThemeContext);

  // const isRowSelectionCell = (columnIndex) => (
  //   hasSelectableRows && columnIndex < displayedColumns.length && displayedColumns[columnIndex].id === WorklistDataGridUtils.ROW_SELECTION_COLUMN.id
  // );

  useEffect(() => {
    // When row selection mode is turned on or off a row selection column is added or removed.
    // Therefore, shift the focused cell to the left or right.
    let newFocusCell = { row: focusedCell.row, col: (focusedCell.col + (hasSelectableRows ? 1 : -1)) };

    if (hasSelectableRows && focusedCell.row === 0 && focusedCell.col === 0) {
      // When row selection is turned on for the first time, default to the first row selection cell.
      newFocusCell = { row: 1, col: 0 };
    } else if (!hasSelectableRows && focusedCell.col === 0) {
      // When row selection is turned off, if a cell in the row selection had focus, then
      // refocus on the first cell in that row.
      newFocusCell = { row: focusedCell.row, col: 0 };
    }

    setFocusedCell(newFocusCell);
    setCurrentSelectedCell(null);

    // Since the row selection mode has changed, the row selection mode needs to be updated.
    setAriaLiveMsg(intl.formatMessage({ id: hasSelectableRows ? 'Terra.worklist-data-grid.row-selection-mode-enabled' : 'Terra.worklist-data-grid.row-selection-mode-disabled' }));

    setDataGridColumns(updateDataColumnState());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasSelectableRows]);

  useEffect(() => {
    setDataGridColumns(updateDataColumnState());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columns]);

  const isRowSelected = () => (
    rows.find(row => row.isSelected)
  );

  const handleClearRowSelection = () => {
    if (isRowSelected()) {
      setAriaLiveMsg(intl.formatMessage({ id: 'Terra.worklist-data-grid.all-rows-unselected' }));
      // Esc (while in row selection mode and rows are selected): Clear selection
      if (onClearSelectedRows) {
        onClearSelectedRows();
      }
    } else if (onDisableSelectableRows) {
      setAriaLiveMsg(intl.formatMessage({ id: 'Terra.worklist-data-grid.row-selection-mode-disabled' }));
      onDisableSelectableRows();
    }
  };

  const selectAllRows = useCallback(() => {
    setAriaLiveMsg(intl.formatMessage({ id: 'Terra.worklist-data-grid.all-rows-selected' }));

    if (onRowSelectAll) {
      onRowSelectAll();
    }
  }, [intl, onRowSelectAll]);

  const selectRow = useCallback((rowId, rowIndex) => {
    const currentRow = !rows[rowIndex - 1];
    const msgId = currentRow.isSelected ? 'Terra.worklist-data-grid.row-selection-template' : 'Terra.worklist-data-grid.row-selection-cleared-template';
    const rowLabel = currentRow.ariaLabel || (rowIndex + 1);

    setAriaLiveMsg(intl.formatMessage({ id: msgId }, { row: rowLabel }));

    if (onRowSelect) {
      onRowSelect(rowId);
    }
  }, [intl, onRowSelect, rows]);

  const handleCellSelection = useCallback((cellRowIdColId, cellGridCoordinates) => {
    setAriaLiveMsg(intl.formatMessage({ id: 'Terra.worklist-data-grid.cell-selection-template' }, { row: cellGridCoordinates.row + 1, column: cellGridCoordinates.col + 1 }));

    // Make note of cell that is currently selected.
    setFocusedCell(cellGridCoordinates);
    setCurrentSelectedCell({ rowId: cellRowIdColId.rowId, columnId: cellRowIdColId.columnId });

    // Notify consumers of the cell selection
    if (onCellSelect) {
      onCellSelect(cellRowIdColId.rowId, cellRowIdColId.columnId);
    }
  }, [intl, onCellSelect]);

  const handleColumnSelect = useCallback((columnId, cellCoordinates) => {
    setAriaLiveMsg(intl.formatMessage({ id: 'Terra.worklist-data-grid.cell-selection-cleared' }));

    // Select column header
    setFocusedCell(cellCoordinates);
    setCurrentSelectedCell(null);

    // Notify consumers of column header selection
    if (onColumnSelect) {
      onColumnSelect(columnId);
    }
  }, [intl, onColumnSelect]);

  const handleRowSelection = useCallback((rowId, selectedCellCoordinates) => {
    setAriaLiveMsg(intl.formatMessage({ id: 'Terra.worklist-data-grid.cell-selection-cleared' }));

    // Select row
    setFocusedCell(selectedCellCoordinates);
    setCurrentSelectedCell(null);
    selectRow(rowId, selectedCellCoordinates.row);
  }, [intl, selectRow]);

  const handleKeyDown = (event) => {
    const cellCoordinates = { row: focusedCell.row, col: focusedCell.col };
    let nextRow = cellCoordinates.row;
    let nextCol = cellCoordinates.col;
    let checkResizable = false;

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
          // Cmd + Left on Mac is equivalent to the Home Key in Windows
          nextCol = 0;

          if (event.ctrlKey) {
            // Ctrl + Cmd + Left on Mac is equivalent to the Ctrl + Home in Windows
            nextRow = WorklistDataGridUtils.FIRST_NON_HEADER_ROW;
          }
        } else {
          // Left key
          nextCol -= 1;
          checkResizable = (cellCoordinates.row === 0);
        }
        break;
      case KeyCode.KEY_RIGHT:
        if (event.metaKey) {
          // Cmd + Right on Mac is equivalent to the End key in Windows
          nextCol = dataGridColumns.length - 1;

          if (event.ctrlKey) {
            // Ctrl + Cmd + Right on Mac is equivalent to the Ctrl + End in Windows
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
        nextCol = dataGridColumns.length - 1; // Col are zero based.
        if (event.ctrlKey) {
          // Though rows are zero based, the header is the first row so the rowsLength will
          // always be one more than then actual number of data rows.
          nextRow = rows.length;
        }
        break;
      case KeyCode.KEY_ESCAPE:
        if (!hasSelectableRows) {
          setFocusedCell(cellCoordinates);
          setCurrentSelectedCell(null);
        } else {
          handleClearRowSelection();
        }
        event.preventDefault();
        break;
      case KeyCode.KEY_A:
        if (hasSelectableRows && (event.ctrlKey || event.metaKey)) {
          selectAllRows();
          event.preventDefault(); // prevent the default selection of everything on the page.
        }
        return;
      default:
        return;
    }
    if (nextRow > rows.length || nextCol >= dataGridColumns.length) {
      event.preventDefault(); // prevent the page from moving with the arrow keys.
      return;
    }
    if (nextCol < 0 || nextRow < 0) {
      event.preventDefault(); // prevent the page from moving with the arrow keys.
      return;
    }

    setFocusedCell({ row: nextRow, col: nextCol, checkResizable });
    event.preventDefault(); // prevent the page from moving with the arrow keys.
  };

  const onResizeMouseDown = useCallback((event, index, resizeColumnWidth) => {
    // Store current table and column values for resize calculations
    tableWidth.current = gridRef.current.offsetWidth;
    activeColumnPageX.current = event.pageX;
    activeColumnWidth.current = resizeColumnWidth;

    // Set the active index to the selected column
    setActiveIndex(index);
  }, []);

  const onResizeHandleChange = useCallback((columnIndex, increment) => {
    const { minimumWidth, maximumWidth } = dataGridColumns[columnIndex];
    const newColumnWidth = Math.min(Math.max(dataGridColumns[columnIndex].width + increment, minimumWidth), maximumWidth);

    // Update the width for the column in the state variable
    const newGridColumns = [...dataGridColumns];
    newGridColumns[columnIndex].width = newColumnWidth;
    setDataGridColumns(newGridColumns);

    // Update the column and table width
    gridRef.current.style.width = `${gridRef.current.offsetWidth + increment}px`;

    // Notify consumers of the new column width
    if (onColumnResize) {
      onColumnResize(dataGridColumns[columnIndex].id, dataGridColumns[columnIndex].width);
    }
  }, [dataGridColumns, onColumnResize]);

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
    gridRef.current.style.width = `${tableWidth + (newColumnWidth - activeColumnWidth.current)}px`;
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
      hasRowSelection={dataGridColumns.hasSelectableRows}
      displayedColumns={dataGridColumns.columns}
      rowHeaderIndex={rowHeaderIndex}
      onCellSelect={handleCellSelection}
      onRowSelect={handleRowSelection}
      tabStopColumnIndex={focusedCell.row === rowIndex ? focusedCell.col : undefined}
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
        aria-labelledby={ariaLabelledby}
        aria-label={ariaLabel}
        className={cx('worklist-data-grid', theme.className)}
        onKeyDown={handleKeyDown}
        {...(activeIndex != null && { onMouseUp, onMouseMove, onMouseLeave: onMouseUp })}
      >
        <ColumnHeader
          columns={dataGridColumns.columns}
          headerHeight={columnHeaderHeight}
          activeColumnIndex={focusedCell.row === 0 ? focusedCell.col : undefined}
          activeColumnResizing={focusedCell.row === 0 && focusedCell.checkResizable}
          columnResizeIncrement={columnResizeIncrement}
          onColumnSelect={handleColumnSelect}
          onResizeMouseDown={onResizeMouseDown}
          onResizeHandleChange={onResizeHandleChange}
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
