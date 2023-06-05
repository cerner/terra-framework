import React, {
  useContext, useRef, useCallback, useState,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import * as KeyCode from 'keycode-js';
import WorklistDataGridPropTypes from './proptypes/WorklistDataGridPropTypes';
import './_elementPolyfill';
import styles from './WorklistDataGrid.module.scss';

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
  } = props;

  const focusedRow = useRef(0);
  const focusedCol = useRef(0);
  const grid = useRef();
  const [currentSelectedCell, setCurrentSelectedCell] = useState(null);

  const gridRef = useCallback((node) => {
    grid.current = node;
    const focusedCell = grid.current.rows[focusedRow.current].cells[focusedCol.current];
    focusedCell.tabIndex = 0;
  }, []);

  const selectCell = (event, rowIndex, columnIndex) => {
    // If current cell is selected, do nothing. TODO: confirm assumption
    if (currentSelectedCell
      && currentSelectedCell.rowId === grid.current.rows[rowIndex].id
      && currentSelectedCell.columnId === columns[columnIndex].id) {
      event.preventDefault();
      return;
    }

    // Make note of cell that is currently selected.
    setCurrentSelectedCell({
      rowId: grid.current.rows[rowIndex].id,
      columnId: columns[columnIndex].id,
    });

    event.preventDefault();

    if (onCellSelect) {
      onCellSelect(grid.current.rows[rowIndex].id, columns[columnIndex].id);
    }
  };

  const handleCellCopy = () => {
    const cellContent = grid.current.rows[focusedRow.current].cells[focusedCol.current].textContent;

    if ('clipboard' in navigator) {
      return navigator.clipboard.writeText(cellContent);
    }

    return document.execCommand('copy', true, cellContent);
  };

  const handleKeyDown = (event) => {
    const currentFocusedRow = event.target.parentElement.rowIndex;
    const currentFocusedCol = event.target.cellIndex;

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
        selectCell(event, currentFocusedRow, currentFocusedCol);
        return;
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

    // Remove the ability to receive visible focus as only one cell should be able to receive tab focus.
    // This also ensures that tabbing back into the grid focuses on the cell that last had focus.
    grid.current.rows[currentFocusedRow].cells[currentFocusedCol].tabIndex = -1;

    focusedRow.current = nextRow;
    focusedCol.current = nextCol;

    const elementWithTabStop = grid.current.rows[nextRow].cells[nextCol];
    elementWithTabStop.tabIndex = 0;
    elementWithTabStop.focus();
    event.preventDefault();
  };

  const handleClick = (event) => {
    // Determine which cell was clicked. In the event that the user holds the mouse across multiple cells,
    // the originating cell is the clicked cell/active element.
    const clickedCell = event.target.closest('td,th') || document.activeElement.closest('td,th');
    if (!clickedCell) {
      // If anything other than a table data or table header cell is clicked, ignore the click.
      return;
    }
    // Remove Tab stop from previous cell in table that has focus and set it to the cell that was clicked.
    grid.current.rows[focusedRow.current].cells[focusedCol.current].tabIndex = -1;
    focusedRow.current = clickedCell.parentElement.rowIndex;
    focusedCol.current = clickedCell.cellIndex;

    clickedCell.tabIndex = 0;

    selectCell(event, focusedRow.current, focusedCol.current);
  };

  const getCellData = (cellRowIndex, cellColumnIndex, cell, rowId) => {
    const tabIndex = { tabIndex: (focusedCol === cellColumnIndex && focusedRow === cellRowIndex) ? '0' : '-1' };
    const columnId = columns[cellColumnIndex].id;
    const cellId = `${rowId}_${columnId}`;
    const isSelected = currentSelectedCell && currentSelectedCell.rowId === rowId && currentSelectedCell.columnId === columnId;

    return props.rowHeaderIndex === cellColumnIndex
      ? (
        <th
          key={cellColumnIndex}
          id={cellId}
          aria-selected={isSelected ? true : undefined}
          {...tabIndex}
          className={
            cx(['worklist-data-grid-row-header',
              { 'worklist-data-grid-cell-selected': isSelected }])
          }
          onCopy={handleCellCopy}
        >
          {cell.content}
        </th>
      )
      : (
        <td
          key={cellColumnIndex}
          id={cellId}
          aria-selected={isSelected ? true : undefined}
          {...tabIndex}
          className={
            cx(['worklist-data-grid-cell-data',
              { 'worklist-data-grid-cell-selected': isSelected }])
            }
          onCopy={handleCellCopy}
        >
          {cell.content}
        </td>
      );
  };

  const buildColumn = (columnData) => {
    const width = columnData.width || props.columnWidth;
    const height = props.columnHeaderHeight;
    return (
      /* eslint-disable react/forbid-dom-props */
      <th key={columnData.id} className={cx('worklist-data-grid-column-header')} tabIndex="-1" style={{ width, height }} onCopy={handleCellCopy}>{columnData.displayName}</th>
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
    return (
      <tr key={row.id} id={row.id} className={cx('worklist-data-grid-row')} style={{ height }}>
        {row.cells.map((cell, cellColumnIndex) => (
          getCellData(rowIndex, cellColumnIndex, cell, row.id)
        ))}
      </tr>
    );
  };

  const buildRows = (allRows) => (
    allRows.map((row, index) => (buildRow(row, index)))
  );

  const theme = useContext(ThemeContext);

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
    >
      <tbody>
        {buildColumns(columns)}
        {buildRows(rows)}
      </tbody>
    </table>
  );
}

WorklistDataGrid.propTypes = propTypes;
WorklistDataGrid.defaultProps = defaultProps;

export default WorklistDataGrid;
