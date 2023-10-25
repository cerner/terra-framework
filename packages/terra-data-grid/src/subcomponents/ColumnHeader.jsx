import React from 'react';
import PropTypes from 'prop-types';

import { columnShape } from '../proptypes/columnShape';
import ColumnHeaderCell from './ColumnHeaderCell';

const propTypes = {
  /**
   * Data for columns. By default, columns will be presented in the order given.
   */
  columns: PropTypes.arrayOf(columnShape).isRequired,

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
  activeColumnIndex: PropTypes.number,
  /**
   * Specifies if resize handle should be active.
   */
  isActiveColumnResizing: PropTypes.bool,
  /**
   * Numeric increment in pixels to adjust column width when resizing via the keyboard.
   */
  columnResizeIncrement: PropTypes.number,
  /**
   * Function that is called when a selectable header cell is selected. Parameters:
   * @param {string} columnId columnId
   */
  onColumnSelect: PropTypes.func,
  /**
   * Function that is called when the mouse down event is triggered on the column resize handle.
   */
  onResizeMouseDown: PropTypes.func,
  /**
   * Function that is called when the the keyboard is used to adjust the column size.
   */
  onResizeHandleChange: PropTypes.func,
};

const ColumnHeader = (props) => {
  const {
    columns,
    headerHeight,
    tableHeight,
    activeColumnIndex,
    isActiveColumnResizing,
    columnResizeIncrement,
    onColumnSelect,
    onResizeMouseDown,
    onResizeHandleChange,
  } = props;

  // Create ColumnHeaderCell component for each column
  const buildColumn = (column, columnIndex) => (
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
      isResizable={column.isResizable}
      isSelectable={column.isSelectable}
      tableHeight={tableHeight}
      isActive={activeColumnIndex === columnIndex}
      isResizeActive={activeColumnIndex === columnIndex && isActiveColumnResizing}
      columnResizeIncrement={columnResizeIncrement}
      hasError={column.hasError}
      sortIndicator={column.sortIndicator}
      onColumnSelect={onColumnSelect}
      onResizeMouseDown={onResizeMouseDown}
      onResizeHandleChange={onResizeHandleChange}
    />
  );

  return (
    <thead>
      <tr className="column-header-row" height={headerHeight}>
        {columns.map((column, columnIndex) => (buildColumn(column, columnIndex)))}
      </tr>
    </thead>
  );
};

ColumnHeader.propTypes = propTypes;
export default React.memo(ColumnHeader);
