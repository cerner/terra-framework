import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import columnHeaderShape from './proptypes/columnHeaderShape';
import rowShape from './proptypes/rowShape';
import WorklistDataGridUtil from './WorklistDataGridUtil';
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
   * Data for column headers. Columns will be presented in the order given.
   */
  columnHeaders: PropTypes.shape(columnHeaderShape),
  /**
   * Data for content in the body of the Grid. Rows will be rendered in the order given.
   */
  rows: PropTypes.arrayOf(rowShape),
  /**
   * String that specifies the default column width. Any valid CSS width value is accepted.
   * This value will be used if no overriding width value is provided on a per-column basis.
   */
  columnHeaderDefaultWidth: PropTypes.string,
  /**
   * String that specifies the default row height. Any valid CSS width value is accepted.
   * This value will be used if no overriding height value is provided on a per-row basis.
   */
  rowDefaultHeight: PropTypes.string,
  /**
   * String that specifies the column height. Any valid CSS height value is accepted.
   */
  columnHeaderHeight: PropTypes.string,
  /**
   * Number indicating the index of the column that represents row header. Index is 0 based and cannot exceed one less than the number of columns in the grid.
   */
  rowHeaderIndex: PropTypes.number,
};

const defaultProps = {
  rowHeaderIndex: 0,
  columnHeaderDefaultWidth: '200px',
  columnHeaderHeight: '2.5rem',
  rowDefaultHeight: '2.5rem',
};

class WorklistDataGrid extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.focussedRow = 0;
    this.focussedCol = 0;
  }

  componentDidMount() {
    this.grid = document.querySelector(`#${this.props.id}`);

    const focussedCell = this.grid.rows[this.focussedRow].cells[this.focussedCol];
    focussedCell.setAttribute('tabIndex', '0');

    // add event listeners to handle user key events in the grid.
    this.grid.addEventListener('keydown', this.handleKeyDown);
    this.grid.addEventListener('click', this.handleClick);
  }

  handleKeyDown(event) {
    if (event.target?.parentNode?.parentNode?.parentNode?.id !== this.props.id) {
      return;
    }

    const currentFocussedRow = event.target.parentElement.rowIndex;
    const currentFocussedCol = event.target.cellIndex;

    let nextRow = currentFocussedRow;
    let nextCol = currentFocussedCol;

    const key = event.keyCode;
    switch (key) {
      case WorklistDataGridUtil.KEY_CODES.UP_ARROW:
        nextRow -= 1;
        break;
      case WorklistDataGridUtil.KEY_CODES.DOWN_ARROW:
        nextRow += 1;
        break;
      case WorklistDataGridUtil.KEY_CODES.LEFT_ARROW:
        nextCol -= 1;
        break;
      case WorklistDataGridUtil.KEY_CODES.RIGHT_ARROW:
        nextCol += 1;
        break;
      case WorklistDataGridUtil.KEY_CODES.HOME:
        nextCol = 0;
        if (event.ctrlKey) {
          nextRow = this.getNumberOfHeaderRows();
        }
        break;
      case WorklistDataGridUtil.KEY_CODES.END:
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
    this.grid.rows[currentFocussedRow].cells[currentFocussedCol].setAttribute('tabIndex', '-1');

    this.focussedRow = nextRow;
    this.focussedCol = nextCol;

    const elementWithTabStop = this.grid.rows[nextRow].cells[nextCol];
    elementWithTabStop.setAttribute('tabIndex', '0');
    elementWithTabStop.focus();
    event.preventDefault();
  }

  handleClick(event) {
    // Is this event for something that is on the grid
    if (event.target?.parentNode?.parentNode?.parentNode?.id !== this.props.id) {
      return;
    }
    // Remove Tab stop from previous cell in table that has focus and set it to the cell that was clicked.
    this.grid.rows[this.focussedRow].cells[this.focussedCol].setAttribute('tabIndex', '-1');
    this.focussedRow = event.target.parentElement.rowIndex;
    this.focussedCol = event.target.cellIndex;
    const clickedCell = event.target;
    clickedCell.setAttribute('tabIndex', '0');
    clickedCell.focus();
    event.preventDefault();
  }

  getNumberOfHeaderRows() {
    return this.props.columnHeaders?.pinnedColumns?.length > 0 ? 1 : 0;
  }

  getCellData(cell, cellColumnIndex) {
    const tabIndex = { tabIndex: '-1' };
    return this.props.rowHeaderIndex === cellColumnIndex ? (<th {...tabIndex} role="rowheader">{cell.cellContent}</th>) : (<td {...tabIndex}>{cell.cellContent}</td>);
  }

  buildColumnHeaders(colHeader) {
    if (colHeader?.pinnedColumns?.length > 0) {
      return (
        <tr height={this.props.columnHeaderHeight}>
          {colHeader.pinnedColumns.map(columnData => (this.buildSingleColumnHeading(columnData)))}
        </tr>
      );
    }
    return undefined;
  }

  buildSingleColumnHeading(columnData) {
    const width = columnData.width || this.props.columnHeaderDefaultWidth;
    const height = columnData.height || this.props.columnHeaderHeight;
    return (
      /* eslint-disable react/forbid-dom-props */
      <th id={columnData.id} role="columnheader" tabIndex="-1" style={{ width, height }}>{columnData.displayName}</th>
    );
  }

  buildSingleRow(row, rowIndex) {
    const backgroundClassName = classNames(cx({ striped: !!(rowIndex % 2) }));
    return (
      <tr className={backgroundClassName} height={row.height || this.props.rowDefaultHeight}>
        {row.cells.map((cell, cellColumnIndex) => (
          this.getCellData(cell, cellColumnIndex)
        ))}
      </tr>
    );
  }

  buildRows(rows) {
    return (
      rows.map((element, index) => (this.buildSingleRow(element, index)))
    );
  }

  render() {
    const {
      id,
      ariaLabelledby,
      ariaLabel,
      columnHeaders,
      rows,
      columnHeaderDefaultWidth,
      ...customProps
    } = this.props;

    const theme = this.context;

    const gridClassNames = classNames(cx('data', theme.className), customProps.className);

    return (
      <div className={cx(['container'])}>
        <table
          id={id}
          role="grid"
          aria-labelledby={ariaLabelledby}
          aria-label={ariaLabel}
          className={gridClassNames}
        >
          <tbody>
            {this.buildColumnHeaders(columnHeaders)}
            {this.buildRows(rows)}
          </tbody>
        </table>
      </div>
    );
  }
}

WorklistDataGrid.propTypes = propTypes;
WorklistDataGrid.contextType = ThemeContext;
WorklistDataGrid.defaultProps = defaultProps;

export default WorklistDataGrid;
