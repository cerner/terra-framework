import React, {
  useContext, useRef, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { injectIntl } from 'react-intl';
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
   * @private
   * Object containing intl APIs
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }),
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
    intl,
  } = props;

  const focusedRow = useRef(0);
  const focusedCol = useRef(0);
  const grid = useRef();

  const gridRef = useCallback((node) => {
    grid.current = node;
    const focusedCell = grid.current.rows[focusedRow.current].cells[focusedCol.current];
    focusedCell.tabIndex = 0;
  }, []);

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

    // Ensure that the cell is focusable and is a valid cell
    if (!clickedCell) {
      return;
    }
    // Remove Tab stop from previous cell in table that has focus and set it to the cell that was clicked.
    grid.current.rows[focusedRow.current].cells[focusedCol.current].tabIndex = -1;
    focusedRow.current = clickedCell.parentElement.rowIndex;
    focusedCol.current = clickedCell.cellIndex;

    clickedCell.tabIndex = 0;
    clickedCell.focus();
    event.preventDefault();
  };

  const getCellData = (cell, cellColumnIndex) => {
    const tabIndex = { tabIndex: '-1' };

    // Determine whether cell is a header or grid cell
    const WorklistCellTag = props.rowHeaderIndex === cellColumnIndex ? 'th' : 'td';

    return (
      // Return worklist data grid cell component
      <WorklistCellTag
        key={cellColumnIndex}
        {...tabIndex}
        className={cx('worklist-data-grid-cell', { masked: cell.isMasked, selectable: (!cell.isMasked && cell.isSelectable) })}
        aria-label={cell.isMasked ? intl.formatMessage({ id: 'Terra.worklistDataGrid.maskedCell' }) : undefined}
      >
        <div className={cx('cell-content')}>{cell.content}</div>
      </WorklistCellTag>
    );
  };

  const buildColumn = (column) => {
    const width = column.width || props.columnWidth;
    const height = props.columnHeaderHeight;
    return (
      /* eslint-disable react/forbid-dom-props */
      <th key={column.id} className={cx('worklist-data-grid-column-header', { selectable: column.isSelectable })} tabIndex="-1" style={{ width, height }}>{column.displayName}</th>
    );
  };

  const buildColumns = (allColumns) => {
    if (allColumns?.length > 0) {
      return (
        <tr height={props.columnHeaderHeight}>
          {allColumns.map(column => (buildColumn(column)))}
        </tr>
      );
    }
    return undefined;
  };

  const buildRow = (row) => {
    const height = props.rowHeight;
    return (
      <tr key={row.id} className={cx('worklist-data-grid-row')} style={{ height }}>
        {row.cells.map((cell, cellColumnIndex) => (
          getCellData(cell, cellColumnIndex)
        ))}
      </tr>
    );
  };

  const buildRows = (allRows) => (
    allRows.map((row) => (buildRow(row)))
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

export default injectIntl(WorklistDataGrid);
