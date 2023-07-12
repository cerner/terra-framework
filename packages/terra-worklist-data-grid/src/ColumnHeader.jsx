import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl } from 'react-intl';
import ThemeContext from 'terra-theme-context';
import WorklistDataGridPropTypes from './proptypes/WorklistDataGridPropTypes';
import ColumnHeaderCell from './ColumnHeaderCell';
import styles from './ColumnHeader.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Data for columns. By default, columns will be presented in the order given.
   */
  activeResizeIndex: PropTypes.number,
  /**
   * Data for columns. By default, columns will be presented in the order given.
   */
  columns: PropTypes.arrayOf(WorklistDataGridPropTypes.columnShape).isRequired,
  /**
   * String that specifies the column height. Any valid CSS height value accepted.
   */
  headerHeight: PropTypes.string.isRequired,
  /**
   * A number (in px) specifying the height of the data grid.
   */
  tableHeight: PropTypes.number,
  /**
   * Function that is called when a selectable header cell is selected. Parameters: `onColumnSelect(columnId)`.
   */
  onColumnSelect: PropTypes.func,
  /**
   * Function that is called when the mouse down event is triggered on the column resize handle.
   */
  onResizeMouseDown: PropTypes.func,
};

const ColumnHeader = (props) => {
  const {
    activeResizeIndex,
    columns,
    headerHeight,
    tableHeight,
    onColumnSelect,
    onResizeMouseDown,
  } = props;

  // Retrieve current theme from context
  const theme = useContext(ThemeContext);

  const buildColumn = (column, columnIndex) => (
    <ColumnHeaderCell
      key={column.id}
      activeResizeColumn={activeResizeIndex === columnIndex}
      column={column}
      columnIndex={columnIndex}
      width={column.width}
      minimumWidth={column.minimumWidth}
      maximumWidth={column.maximumWidth}
      headerHeight={headerHeight}
      isResizable={column.isResizable}
      isSelectable={column.isSelectable}
      tableHeight={tableHeight}
      onColumnSelect={onColumnSelect}
      onResizeMouseDown={onResizeMouseDown}
    />
  );

  return (
  /* eslint-disable react/forbid-dom-props */
    <tr className={cx('column-header-row', theme.className)} height={headerHeight}>
      {columns.map((column, columnIndex) => (buildColumn(column, columnIndex)))}
    </tr>
  );
};

ColumnHeader.propTypes = propTypes;
export default injectIntl(ColumnHeader);
