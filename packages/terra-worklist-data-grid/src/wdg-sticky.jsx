/* eslint-disable react/forbid-dom-props */

import React, {
  createRef, useContext, useRef, useCallback, cloneElement,
} from 'react';
import PropTypes, { element } from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import * as KeyCode from 'keycode-js';
import WorklistDataGridPropTypes from './proptypes/WorklistDataGridPropTypes';
import ERRORS from './constants';
import './_elementPolyfill';
import styles from './wdg-sticky.module.scss';

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
     * Data for pinned columns. Pinned columns are the leftmost columns of the grid.
     * Columns will be presented in the order given.
     * If the order needs to be changed then the input dataset should be updated.
     */
  pinnedColumns: PropTypes.arrayOf(WorklistDataGridPropTypes.columnShape),
  /**
     * Data for overflow columns. Overflow columns are rendered in the Worklist Data Grid's horizontal overflow.
     * Columns will be presented in the order given.
     */
  overflowColumns: PropTypes.arrayOf(WorklistDataGridPropTypes.columnShape),
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
     * Number indicating the index of the column that represents row header. Index is 0 based and cannot exceed one less than the number of pinned columns in the grid.
     */
  rowHeaderIndex: PropTypes.number,
};

const defaultProps = {
  columnWidth: 200,
  pinnedColumns: [],
  rowHeaderIndex: 0,
};

const WorklistDataGrid = (props) => {
  const {
    ariaLabelledby, ariaLabel, pinnedColumns, id, overflowColumns, rows,
  } = props;

  const focusedRow = useRef(0);
  const focusedCol = useRef(0);
  const grid = useRef();

  const horizontalScrollRef = useRef();
  const lastPinnedColumnRef = useRef();
  const overflowColumnsRef = useRef(new Array(overflowColumns.length));

  let pinnedColumnOffset = 0;
  const pinnedColumnOffsets = [pinnedColumnOffset];

  const gridRef = useCallback((node) => {
    grid.current = node;
    if (grid.current?.rows) {
      const focusedCell = grid.current.rows[focusedRow.current].cells[focusedCol.current];
      focusedCell.tabIndex = 0;
    }
  }, []);

  // ----- handle functions --------

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
        // console.log("currentFocusedCol", currentFocusedCol - pinnedColumns.length , "leftmostPinnedCol", leftmostOverflowColumnIndex);

        // if(currentFocusedCol - pinnedColumns.length == leftmostOverflowColumnIndex){
        //   horizontalScrollRef.current.scrollLeft -= overflowColumnsRef.current[leftmostOverflowColumnIndex-1]?.getBoundingClientRect().width;
        // }
        nextCol -= 1;
        const currentColLeftEdge = overflowColumnsRef.current[nextCol - pinnedColumns.length]?.getBoundingClientRect().left;
        const pinnedColRightEdge = lastPinnedColumnRef.current.getBoundingClientRect().right;
        // scrolltype 1
        // if(currentColLeftEdge < pinnedColRightEdge ){
        //   horizontalScrollRef.current.scrollLeft -= overflowColumnsRef.current[nextCol]?.getBoundingClientRect().width;
        // }
        // scrolltype 2
        if (currentColLeftEdge < pinnedColRightEdge) {
          horizontalScrollRef.current.scrollLeft -= pinnedColRightEdge - currentColLeftEdge;
        }
        // scrolltype 2 with animation
        // if(currentColLeftEdge < pinnedColRightEdge ){
        //   const scrollDistance = parseInt(pinnedColRightEdge-currentColLeftEdge, 10);
        //   console.log("scroll event");
        //   console.log(scrollDistance);
        //     horizontalScrollRef.current.scrollBy({left: scrollDistance, behavior: "smooth" });
        // }

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
    if (!clickedCell) {
      // If anything other than a table data or table header cell is clicked, ignore the click.
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

  // Builder functions

  const buildCell = (cell, cellColumnIndex) => {
    if (cellColumnIndex >= pinnedColumns.length) {
      return (<td key={cellColumnIndex} tabIndex="-1" className={cx('worklist-data-grid-cell')}>{cell.content}</td>);
    }

    const left = pinnedColumnOffsets[cellColumnIndex];

    // if the cell belongs to a pinned column, style it as pinned
    return props.rowHeaderIndex === cellColumnIndex
      ? (<th key={cellColumnIndex} tabIndex="-1" className={cx('worklist-data-grid-row-header')} style={{ left }}>{cell.content}</th>)
      : (<td key={cellColumnIndex} tabIndex="-1" className={cx('worklist-data-grid-pinned-column-cell')} style={{ left }}>{cell.content}</td>);
  };

  const buildPinnedColumn = (columnData, index) => {
    const width = columnData.width || props.columnWidth;
    const height = props.columnHeaderHeight;
    const left = pinnedColumnOffset;

    pinnedColumnOffset += parseInt(width, 10);
    pinnedColumnOffsets.push(pinnedColumnOffset);
    const builtColumn = <th key={columnData.id} className={cx('worklist-data-grid-pinned-column-header')} tabIndex="-1" style={{ width, height, left }}>{columnData.displayName}</th>;

    if (index == pinnedColumns.length - 1) {
      console.log(columnData.id);
      const newbuiltColumn = cloneElement(builtColumn, { ref: lastPinnedColumnRef });
      console.log(newbuiltColumn);
      return newbuiltColumn;
    }

    return builtColumn;
  };

  const buildOverflowColumn = (columnData, index) => {
    const width = columnData.width || props.columnWidth;
    const height = props.columnHeaderHeight;

    console.log(overflowColumnsRef[index]);

    return (
      <th
        key={columnData.id}
        className={cx('worklist-data-grid-column-header')}
        tabIndex="-1"
        style={{ width, height }}
        ref={(element) => overflowColumnsRef.current[index] = element}
      >
        {columnData.displayName}
      </th>
    );
  };

  const buildAllColumns = (allPinnedColumns, allOverflowColumns) => {
    if (allOverflowColumns?.length === 0) {
      return null;
    }

    if (props.rowHeaderIndex < 0) {
      throw new Error(ERRORS.ROW_HEADER_LESS_THAN_ZERO);
    }

    // rowheader with no pinned columns
    if (allPinnedColumns?.length === 0) {
      // pinned columns is empty so grab the first overflow columns and make it pinned
      allPinnedColumns.push(allOverflowColumns.splice(0, 1)[0]);
    }

    if (props.rowHeaderIndex >= allPinnedColumns?.length) {
      throw new Error(ERRORS.ROW_HEADER_EXCEEDS_PINNED);
    }

    return (
      <tr height={props.columnHeaderHeight}>
        {allPinnedColumns.map((columnData, index) => (buildPinnedColumn(columnData, index)))}
        {allOverflowColumns.map((columnData, index) => (buildOverflowColumn(columnData, index)))}
      </tr>
    );
  };

  const buildRow = (row) => {
    const height = row.height || props.rowHeight;
    // console.log(row.id);
    return (
      <tr key={row.id} className={cx('worklist-data-grid-row')} style={{ height }}>
        {row.cells.map((cell, cellColumnIndex) => (
          buildCell(cell, cellColumnIndex)
        ))}
      </tr>
    );
  };

  const buildAllRows = (allRows) => (
    allRows.map((row) => (buildRow(row)))
  );

  const theme = useContext(ThemeContext);

  const gridClassNames = cx('worklist-data-grid', theme.className);

  return (
    <div className={cx('scroll-wrapper')} ref={horizontalScrollRef}>
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
          {buildAllColumns(pinnedColumns, overflowColumns)}
          {buildAllRows(rows)}
        </tbody>
      </table>
    </div>
  );
};

WorklistDataGrid.propTypes = propTypes;
WorklistDataGrid.defaultProps = defaultProps;

export default WorklistDataGrid;
