import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl } from 'react-intl';
import ThemeContext from 'terra-theme-context';
import WorklistDataGridPropTypes from '../proptypes/WorklistDataGridPropTypes';
import ColumnHeaderCell from './ColumnHeaderCell';
import styles from './ColumnHeader.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Data for columns. By default, columns will be presented in the order given.
   */
  columns: PropTypes.arrayOf(WorklistDataGridPropTypes.columnShape).isRequired,
  /**
   * String that specifies the column header height. Any valid CSS height value accepted.
   */
  headerHeight: PropTypes.string.isRequired,
  /**
   * Number that specifies the height of the data grid in pixels.
   */
  tableHeight: PropTypes.number,
  /**
   * Column index for cell that can receive tab focus
   */
  tabStopColumnIndex: PropTypes.number,
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
    columns,
    headerHeight,
    tableHeight,
    tabStopColumnIndex,
    onColumnSelect,
    onResizeMouseDown,
  } = props;

  // Retrieve current theme from context
  const theme = useContext(ThemeContext);

  // Create ColumnHeaderCell component for each column
  const buildColumn = (column, columnIndex) => (
    <ColumnHeaderCell
      key={column.id}
      rowIndex={0}
      columnIndex={columnIndex}
      width={column.width}
      minimumWidth={column.minimumWidth}
      maximumWidth={column.maximumWidth}
      headerHeight={headerHeight}
      isResizable={column.isResizable}
      isSelectable={column.isSelectable}
      tableHeight={tableHeight}
      isTabStop={tabStopColumnIndex === columnIndex}
      {...column}
      onColumnSelect={onColumnSelect}
      onResizeMouseDown={onResizeMouseDown}
    />
  );

  return (
    <thead>
      <tr className={cx('column-header-row', theme.className)} height={headerHeight}>
        {columns.map((column, columnIndex) => (buildColumn(column, columnIndex)))}
      </tr>
    </thead>
  );
};

ColumnHeader.propTypes = propTypes;
export default injectIntl(ColumnHeader);
