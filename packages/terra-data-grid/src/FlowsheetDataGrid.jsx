import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import DataGrid from './DataGrid';
import rowShape from './proptypes/rowShape';
import { columnShape } from './proptypes/columnShape';
import styles from './FlowsheetDataGrid.module.scss';

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
   * Data for content in the body of the Grid. Rows will be rendered in the order given. The first cell in each row will be the row header.
   */
  rows: PropTypes.arrayOf(rowShape),

  /**
   * The column containing row headers. This column will be pinned to the leftmost side of the grid.
   */
  rowHeaderColumn: columnShape,

  /**
   * Data for overflow columns. Overflow columns are rendered in the Flowsheet Data Grid's horizontal overflow.
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
};

const defaultProps = {
  defaultColumnWidth: 200,
  columnHeaderHeight: '2.5rem',
  rowHeight: '2.5rem',
  rowHeaderColumn: {},
  overflowColumns: [],
};

function FlowsheetDataGrid(props) {
  const {
    id,
    ariaLabelledBy,
    ariaLabel,
    rows,
    rowHeaderColumn,
    overflowColumns,
    defaultColumnWidth,
    columnHeaderHeight,
    rowHeight,
  } = props;

  return (
    <div className={cx('flowsheet-data-grid-container')}>
      <DataGrid
        id={id}
        ariaLabel={ariaLabel}
        ariaLabelledBy={ariaLabelledBy}
        rows={rows}
        rowHeight={rowHeight}
        rowHeaderIndex={0}
        pinnedColumns={[{ ...rowHeaderColumn, isResizable: false }]}
        overflowColumns={overflowColumns.map(column => ({ ...column, isResizable: false }))}
        defaultColumnWidth={defaultColumnWidth}
        columnHeaderHeight={columnHeaderHeight}
      />
    </div>
  );
}

FlowsheetDataGrid.propTypes = propTypes;
FlowsheetDataGrid.defaultProps = defaultProps;

export default FlowsheetDataGrid;
