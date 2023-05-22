import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import * as KeyCode from 'keycode-js';
import WorklistDataGridPropTypes from './proptypes/WorklistDataGridPropTypes';
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
  columnHeight: PropTypes.string,
  /**
   * String that specifies the default height for rows in the grid. Any valid CSS width value is accepted.
   * To override the default value, provide height for the row that needs to be overridden.
   */
  rowHeight: PropTypes.string,
  /**
   * Number indicating the index of the column that represents row header. Index is 0 based and cannot exceed one less than the number of columns in the grid.
   */
  rowHeaderIndex: PropTypes.number,
};

const defaultProps = {
  rowHeaderIndex: 0,
};

class WorklistDataGrid extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.focusedRow = 0;
    this.focusedCol = 0;
  }

  componentDidMount() {
    this.grid = document.getElementById(`${this.props.id}`);

    const focusedCell = this.grid.rows[this.focusedRow].cells[this.focusedCol];
    focusedCell.tabIndex = 0;
  }

  handleKeyDown(event) {
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
          nextRow = this.getNumberOfHeaderRows();
        }
        break;
      case KeyCode.KEY_END:
        nextCol = this.props.rows[0].cells.length - 1;
        if (event.ctrlKey) {
          nextRow = (this.props.rows.length - 1) + this.getNumberOfHeaderRows();
        }
        break;
      default:
        return;
    }
    if (nextRow >= this.grid.rows.length || nextCol >= this.grid.rows[0].cells.length) {
      event.preventDefault();
      return;
    }
    if (nextCol < 0 || nextRow < 0) {
      event.preventDefault();
      return;
    }

    // Remove the ability to receive visible focus as only one cell should be able to receive tab focus.
    // This is also how tabbing back to the grid ensures the grid last cell with the focus will be re-entered.
    this.grid.rows[currentFocusedRow].cells[currentFocusedCol].tabIndex = -1;

    this.focusedRow = nextRow;
    this.focusedCol = nextCol;

    const elementWithTabStop = this.grid.rows[nextRow].cells[nextCol];
    elementWithTabStop.tabIndex = 0;
    elementWithTabStop.focus();
    event.preventDefault();
  }

  handleClick(event) {
    // Remove Tab stop from previous cell in table that has focus and set it to the cell that was clicked.
    this.grid.rows[this.focusedRow].cells[this.focusedCol].tabIndex = -1;
    this.focusedRow = event.target.parentElement.rowIndex;
    this.focusedCol = event.target.cellIndex;
    const clickedCell = event.target;
    clickedCell.tabIndex = 0;
    clickedCell.focus();
    event.preventDefault();
  }

  getNumberOfHeaderRows() {
    return this.props.columns?.length > 0 ? 1 : 0;
  }

  getCellData(cell, cellColumnIndex) {
    const tabIndex = { tabIndex: '-1' };
    return this.props.rowHeaderIndex === cellColumnIndex ? (<th key={cellColumnIndex} {...tabIndex} className={cx('worklist-data-grid-row-header')} role="rowheader">{cell.content}</th>) : (<td key={cellColumnIndex} {...tabIndex} className={cx('worklist-data-grid-cell-data')}>{cell.content}</td>);
  }

  buildColumns(colHeader) {
    if (colHeader?.length > 0) {
      return (
        <tr height={this.props.columnHeight}>
          {colHeader.map(columnData => (this.buildColumn(columnData)))}
        </tr>
      );
    }
    return undefined;
  }

  buildColumn(columnData) {
    const width = columnData.width || this.props.columnWidth;
    const height = this.props.columnHeight;
    return (
      /* eslint-disable react/forbid-dom-props */
      <th key={columnData.id} role="columnheader" className={cx('worklist-data-grid-column-header')} tabIndex="-1" style={{ width, height }}>{columnData.displayName}</th>
    );
  }

  buildRow(row) {
    return (
      <tr key={row.id} className={cx('worklist-data-grid-row')} height={row.height || this.props.rowHeight}>
        {row.cells.map((cell, cellColumnIndex) => (
          this.getCellData(cell, cellColumnIndex)
        ))}
      </tr>
    );
  }

  buildRows(rows) {
    return (
      rows.map((row) => (this.buildRow(row)))
    );
  }

  render() {
    const {
      id,
      ariaLabelledby,
      ariaLabel,
      columns,
      rows,
    } = this.props;

    const theme = this.context;

    const gridClassNames = cx('worklist-data-grid', theme.className);

    return (
      <table
        id={id}
        role="grid"
        aria-labelledby={ariaLabelledby}
        aria-label={ariaLabel}
        className={gridClassNames}
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
      >
        <tbody>
          {this.buildColumns(columns)}
          {this.buildRows(rows)}
        </tbody>
      </table>
    );
  }
}

WorklistDataGrid.propTypes = propTypes;
WorklistDataGrid.contextType = ThemeContext;
WorklistDataGrid.defaultProps = defaultProps;

export default WorklistDataGrid;
