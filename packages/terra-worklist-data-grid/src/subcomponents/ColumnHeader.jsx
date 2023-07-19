import React from 'react';
import PropTypes from 'prop-types';
import WorklistDataGridPropTypes from '../proptypes/WorklistDataGridPropTypes';
import ColumnHeaderCell from './ColumnHeaderCell';

const propTypes = {
  /**
   * Data for pinned columns. Pinned columns are the stickied leftmost columns of the grid.
   * Columns will be presented in the order given.
   */
  pinnedColumns: PropTypes.arrayOf(WorklistDataGridPropTypes.columnShape),

  /**
   * Data for overflow columns. Overflow columns are rendered in the Worklist Data Grid's horizontal overflow.
   * Columns will be presented in the order given.
   */
  overflowColumns: PropTypes.arrayOf(WorklistDataGridPropTypes.columnShape),

  /**
   * String that specifies the column header height. Any valid CSS height value accepted.
   */
  headerHeight: PropTypes.string.isRequired,

  /**
   * Number that specifies the height of the data grid in pixels.
   */
  tableHeight: PropTypes.number,

  /**
   * Column index for cell that can receive tab focus.
   */
  tabStopColumnIndex: PropTypes.number,

  /**
   * Function that is called when a selectable header cell is selected. Parameters:
   * @param {string} columnId columnId
   */
  onColumnSelect: PropTypes.func,

  /**
   * Function that is called when the mouse down event is triggered on the column resize handle.
   */
  onResizeMouseDown: PropTypes.func,
};

const defaultProps = {
  pinnedColumns:[],
  overflowColumns: [],
};

const ColumnHeader = (props) => {
  const {
    pinnedColumns,
    overflowColumns,
    headerHeight,
    tableHeight,
    tabStopColumnIndex,
    onColumnSelect,
    onResizeMouseDown,
  } = props;

  // Create ColumnHeaderCell component for each column
  const buildColumn = (column, columnIndex, isPinned = false) => (
    <ColumnHeaderCell
      key={column.id}
      id={column.id}
      rowIndex={0}
      columnIndex={columnIndex}
      displayName={column.displayName}
      width={column.width}
      minimumWidth={column.minimumWidth}
      maximumWidth={column.maximumWidth}
      headerHeight={headerHeight}
      isPinned={isPinned}
      isResizable={column.isResizable}
      isSelectable={column.isSelectable}
      tableHeight={tableHeight}
      isTabStop={tabStopColumnIndex === columnIndex}
      hasError={column.hasError}
      sortIndicator={column.sortIndicator}
      onColumnSelect={onColumnSelect}
      onResizeMouseDown={onResizeMouseDown}
    />
  );

  return (
    <thead>
      <tr className="column-header-row" height={headerHeight}>
        {pinnedColumns.map((column, columnIndex) => (buildColumn(column, columnIndex, true)))}
        {overflowColumns.map((column, columnIndex) => (buildColumn(column, columnIndex)))}
      </tr>
    </thead>
  );
};

ColumnHeader.propTypes = propTypes;
ColumnHeader.defaultProps = defaultProps;

export default ColumnHeader;
