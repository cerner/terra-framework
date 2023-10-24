import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ColumnHeaderCell from './ColumnHeaderCell';
import { columnShape } from '../proptypes/columnShape';
import styles from './ColumnHeader.module.scss';

const cx = classNames.bind(styles);

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
   * Number that specifies the height of the table in pixels.
   */
  tableHeight: PropTypes.number,

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
   * Boolean indicating whether or not the table columns should be displayed.
   */
  hasColumnHeaders: PropTypes.bool,
};

const defaultProps = {
  hasColumnHeaders: true,
};

const ColumnHeader = (props) => {
  const {
    columns,
    headerHeight,
    tableHeight,
    onColumnSelect,
    onResizeMouseDown,
    hasColumnHeaders,
  } = props;

  return (
    <thead>
      <tr
        className={cx('column-header-row', { hidden: !hasColumnHeaders })}
        height={hasColumnHeaders ? headerHeight : undefined}
      >
        {columns.map((column, columnIndex) => (
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
            isResizable={hasColumnHeaders && column.isResizable}
            isSelectable={hasColumnHeaders && column.isSelectable}
            tableHeight={tableHeight}
            hasError={column.hasError}
            sortIndicator={column.sortIndicator}
            onColumnSelect={onColumnSelect}
            onResizeMouseDown={onResizeMouseDown}
          />
        ))}
      </tr>
    </thead>
  );
};

ColumnHeader.propTypes = propTypes;
ColumnHeader.defaultProps = defaultProps;
export default React.memo(ColumnHeader);
