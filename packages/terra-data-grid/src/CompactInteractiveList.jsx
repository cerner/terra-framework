import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import DataGrid from './DataGrid';
import rowShape from './proptypes/rowShape';
import { columnShape } from './proptypes/columnShape';
import styles from './subcomponents/Cell.module.scss';
// eslint-disable-next-line import/named
import { getColumns, getRows } from './utils/CompactInteractiveListUtils';

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
   * Data for columns. Columns will be presented in the order given.
   * The first column, pinned to the leftmost side of the grid, will contain row headers.
   * The remaining columns will be rendered in the horizontal overflow.
   */
  columns: PropTypes.arrayOf(columnShape),

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
   * will be disregarded if fitContentRowHight prop set to true.
   */
  rowHeight: PropTypes.string,
  fitContentRowHight: PropTypes.bool,
  hideColumnHeader: PropTypes.bool,
  zebraPatternOn: PropTypes.bool,
  numberOfColumns: PropTypes.number,
};

const defaultProps = {
  defaultColumnWidth: 200,
  columnHeaderHeight: '2.5rem',
  rowHeight: '2.5rem',
  rows: [],
  columns: [],
  fitContentRowHight: true,
  hideColumnHeader: true,
  numberOfColumns: 1,
};

const CompactInteractiveList = (props) => {
  const {
    id,
    ariaLabelledBy,
    ariaLabel,
    rows,
    columns,
    defaultColumnWidth,
    columnHeaderHeight,
    numberOfColumns,
    rowHeight,
    fitContentRowHight,
    hideColumnHeader,
    zebraPatternOn,
  } = props;

  return (
    <div className={cx('compact-intercative-list-container')}>
      <DataGrid
        id={id}
        ariaLabel={ariaLabel}
        ariaLabelledBy={ariaLabelledBy}
        rows={getRows(rows, numberOfColumns)}
        rowHeight={rowHeight}
        rowHeaderIndex={0}
        overflowColumns={getColumns(columns, numberOfColumns)}
        defaultColumnWidth={defaultColumnWidth}
        columnHeaderHeight={columnHeaderHeight}
        // onCellSelect={onCellSelect}
        // onClearSelectedCells={onClearSelectedCells}
        hideColumnHeader={hideColumnHeader}
        fitContentRowHight={fitContentRowHight}
        hasSelectableRows={false}
        zebraPatternOn={zebraPatternOn}
      />
    </div>
  );
};

CompactInteractiveList.propTypes = propTypes;
CompactInteractiveList.defaultProps = defaultProps;

export default CompactInteractiveList;
