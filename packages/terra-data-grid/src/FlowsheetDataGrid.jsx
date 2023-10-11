import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';

import VisuallyHiddenText from 'terra-visually-hidden-text';

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
   */
  rowHeight: PropTypes.string,

  /**
   * Callback function that is called when a selectable cell is selected. Parameters:
   * @param {string} rowId rowId
   * @param {string} columnId columnId
   */
  onCellSelect: PropTypes.func,

  /**
   * Callback function that is called when all selected cells need to be unselected. Parameters: none.
   */
  onClearSelectedCells: PropTypes.func,

  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const defaultProps = {
  defaultColumnWidth: 200,
  columnHeaderHeight: '2.5rem',
  rowHeight: '2.5rem',
  rows: [],
  columns: [],
};

function FlowsheetDataGrid(props) {
  const {
    id,
    ariaLabelledBy,
    ariaLabel,
    rows,
    columns,
    defaultColumnWidth,
    columnHeaderHeight,
    rowHeight,
    onCellSelect,
    onClearSelectedCells,
    intl,
  } = props;

  // Replace each non-header cell that contains no content with a dash indicating "No results".
  const parsedRows = rows.map(
    (row) => ({
      ...row,
      cells: row.cells.map(
        (cell, index) => ((!cell.content && index !== 0) ? {
          ...cell,
          content: (
            <>
              <span aria-hidden>{intl.formatMessage({ id: 'Terra.flowsheetDataGrid.no-result-display' })}</span>
              <VisuallyHiddenText text={intl.formatMessage({ id: 'Terra.flowsheetDataGrid.no-result' })} />
            </>
          ),
        } : cell),
      ),
    }),
  );

  // Make all columns not resizable.
  const nonResizablePinnedColumns = columns.length ? [{ ...columns[0], isResizable: false }] : [];
  const nonResizableOverflowColumns = columns.length > 1 ? columns.slice(1).map(column => ({ ...column, isResizable: false })) : [];

  return (
    <div className={cx('flowsheet-data-grid-container')}>
      <DataGrid
        id={id}
        ariaLabel={ariaLabel}
        ariaLabelledBy={ariaLabelledBy}
        rows={parsedRows}
        rowHeight={rowHeight}
        rowHeaderIndex={0}
        pinnedColumns={nonResizablePinnedColumns}
        overflowColumns={nonResizableOverflowColumns}
        defaultColumnWidth={defaultColumnWidth}
        columnHeaderHeight={columnHeaderHeight}
        onCellSelect={onCellSelect}
        onClearSelectedCells={onClearSelectedCells}
      />
    </div>
  );
}

FlowsheetDataGrid.propTypes = propTypes;
FlowsheetDataGrid.defaultProps = defaultProps;

export default injectIntl(FlowsheetDataGrid);
