import React, { useContext, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl } from 'react-intl';
import ThemeContext from 'terra-theme-context';
import IconUp from 'terra-icon/lib/icon/IconUp';
import IconDown from 'terra-icon/lib/icon/IconDown';
import IconError from 'terra-icon/lib/icon/IconError';
import ColumnResizeHandle from './ColumnResizeHandle';
import WorklistDataGridPropTypes from './proptypes/WorklistDataGridPropTypes';
import styles from './ColumnHeaderCell.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Data for columns. By default, columns will be presented in the order given.
   */
  column: WorklistDataGridPropTypes.columnShape.isRequired,
  /**
   * Data for columns. By default, columns will be presented in the order given.
   */
  columnIndex: PropTypes.number.isRequired,
  /**
   * String that specifies the default width for columns in the grid. Any valid CSS width value is accepted.
   */
  width: PropTypes.number.isRequired,
  /**
   * String that specifies the column height. Any valid CSS height value accepted.
   */
  headerHeight: PropTypes.string.isRequired,
  /**
   * A boolean indicating whether or not the column header is resizable.
   */
  isResizable: PropTypes.bool,
  /**
   * Boolean value indicating whether or not the column header is selectable.
   */
  isSelectable: PropTypes.bool,
  /**
   * Height of the parent table
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
  /**
   * @private
   * Object containing intl APIs
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }),
};

const defaultProps = {
  isSelectable: true,
  isResizable: true,
};

const ColumnHeaderCell = (props) => {
  const {
    column,
    columnIndex,
    width,
    headerHeight,
    isResizable,
    isSelectable,
    tableHeight,
    onColumnSelect,
    onResizeMouseDown,
    intl,
  } = props;

  const columnHeaderCell = useRef();
  const titleContainer = useRef();

  const columnHeaderCellRef = useCallback((node) => {
    columnHeaderCell.current = node;
  }, []);

  const titleContainerRef = useCallback((node) => {
    titleContainer.current = node;
  }, []);

  // Handle column header selection
  const onHeaderSelect = () => {
    if (onColumnSelect) {
      onColumnSelect(column.id);
    }
  };

  const onResizeHandleMouseDown = (event) => {
    if (onResizeMouseDown) {
      onResizeMouseDown(event, columnIndex, columnHeaderCell.current.offsetWidth);
    }
  };

  let sortIndicatorIcon;
  let errorIcon;

  // Add error icon when column error exists
  if (column.hasError) {
    errorIcon = <IconError a11yLabel={intl.formatMessage({ id: 'Terra.worklistDataGrid.columnError' })} className={cx('error-icon')} />;
  }

  // Add the sort indicator based on the sort direction
  if (column.sortIndicator === WorklistDataGridPropTypes.SortIndicators.ASCENDING) {
    sortIndicatorIcon = <IconUp />;
  } else if (column.sortIndicator === WorklistDataGridPropTypes.SortIndicators.DESCENDING) {
    sortIndicatorIcon = <IconDown />;
  }

  // Retrieve current theme from context
  const theme = useContext(ThemeContext);

  return (
  /* eslint-disable react/forbid-dom-props */
    <th
      ref={(columnHeaderCellRef)}
      key={column.id}
      className={cx('column-header', theme.className, { selectable: isSelectable })}
      tabIndex="-1"
      role="columnheader"
      scope="col"
      aria-sort={column.sortIndicator}
      onMouseDown={(isSelectable) ? onHeaderSelect : undefined}
      style={{ width: `${width}px`, height: headerHeight }}
    >
      <div className={cx('header-container')} ref={titleContainerRef} role="button">
        {errorIcon}
        <span>{column.displayName}</span>
        {sortIndicatorIcon}
      </div>
      { isResizable && (
      <ColumnResizeHandle
        columnIndex={columnIndex}
        columnText={column.displayName}
        columnWidth={width}
        height={tableHeight}
        minimumWidth={column.minimumWidth}
        maximumWidth={column.maximumWidth}
        onResizeMouseDown={onResizeHandleMouseDown}
      />
      )}
    </th>
  );
};

ColumnHeaderCell.propTypes = propTypes;
ColumnHeaderCell.defaultProps = defaultProps;
export default injectIntl(ColumnHeaderCell);
