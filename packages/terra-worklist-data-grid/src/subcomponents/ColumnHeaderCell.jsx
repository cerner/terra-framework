import React, { useContext, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl } from 'react-intl';
import ThemeContext from 'terra-theme-context';
import IconUp from 'terra-icon/lib/icon/IconUp';
import IconDown from 'terra-icon/lib/icon/IconDown';
import IconError from 'terra-icon/lib/icon/IconError';
import * as KeyCode from 'keycode-js';
import WorklistDataGridPropTypes from '../proptypes/WorklistDataGridPropTypes';
import styles from './ColumnHeaderCell.module.scss';
import WorklistDataGridUtils from '../utils/WorklistDataGridUtils';
import ColumnResizeHandle from './ColumnResizeHandle';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Required string representing a unique identifier for the column header cell.
   */
  id: PropTypes.string.isRequired,
  /**
   * String of text to render within the column header cell.
   */
  displayName: PropTypes.string,
  /**
   * A string indicating which sorting indicator should be rendered. If not provided, no sorting indicator will be rendered.
   * If a `component` value is specified, `sortIndicator` will be ignored. One of `ascending`, `descending`.
   */
  sortIndicator: PropTypes.oneOf(Object.values(WorklistDataGridPropTypes.SortIndicators)),
  /**
   * Boolean value indicating whether or not the column has an error in the data.
   */
  hasError: PropTypes.bool,
  /**
   * Number that specifies the minimum column width in pixels.
   */
  minimumWidth: PropTypes.number,
  /**
   * Number that specifies the maximum column width in pixels.
   */
  maximumWidth: PropTypes.number,
  /**
   * Boolean value indicating whether or not the column header is selectable.
  */
  isSelectable: PropTypes.bool,
  /**
   * Boolean value indicating whether or not the column header is resizable.
   */
  isResizable: PropTypes.bool,
  /**
   * Height of the parent table
   */
  tableHeight: PropTypes.number,
  /**
   * String that specifies the default width for columns in the grid. Any valid CSS width value is accepted.
   */
  width: PropTypes.number.isRequired,
  /**
   * String that specifies the column height. Any valid CSS height value accepted.
  */
  headerHeight: PropTypes.string.isRequired,
  /**
   * The cell's row position in the grid. This is zero based.
   */
  rowIndex: PropTypes.number,
  /**
   * The cell's column position in the grid. This is zero based.
   */
  columnIndex: PropTypes.number,
  /**
   * Boolean value to indicate if the cell is the tab stop on the grid. The grid will have only one tab stop.
   */
  isTabStop: PropTypes.bool,
  /**
   * Function that is called when a selectable header cell is selected. Parameters:
   * @param {string} rowId rowId
   * @param {string} columnId columnId
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
  isTabStop: false,
  hasError: false,
  isSelectable: true,
  isResizable: true,
};

const ColumnHeaderCell = (props) => {
  const {
    id,
    displayName,
    sortIndicator,
    hasError,
    isSelectable,
    isResizable,
    tableHeight,
    width,
    minimumWidth,
    maximumWidth,
    headerHeight,
    onColumnSelect,
    intl,
    rowIndex,
    columnIndex,
    onResizeMouseDown,
    isTabStop,
  } = props;

  const columnHeaderCell = useRef();

  const columnHeaderCellRef = useCallback((node) => {
    columnHeaderCell.current = node;
  }, []);

  const onResizeHandleMouseDown = useCallback((event) => {
    if (onResizeMouseDown) {
      onResizeMouseDown(event, columnIndex, columnHeaderCell.current.offsetWidth);
    }
  }, [columnIndex, onResizeMouseDown]);

  // Handle column header selection via the mouse click.
  const handleMouseDown = (event) => {
    onColumnSelect(id, { row: rowIndex, col: columnIndex });
    event.stopPropagation();
  };

  // Handle column header selection via the space bar.
  const handleKeyDown = (event) => {
    const key = event.keyCode;
    switch (key) {
      case KeyCode.KEY_SPACE:
      case KeyCode.KEY_RETURN:
        onColumnSelect(id, { row: rowIndex, col: columnIndex });
        event.stopPropagation();
        event.preventDefault(); // prevent the default scrolling
        break;
      case KeyCode.KEY_C:
        if (event.ctrlKey || event.metaKey) {
          WorklistDataGridUtils.writeToClipboard(event.target.textContent);
        }
        break;
      default:
    }
  };

  let sortIndicatorIcon;
  const errorIcon = hasError && <IconError a11yLabel={intl.formatMessage({ id: 'Terra.worklistDataGrid.columnError' })} className={cx('error-icon')} />;

  // Add the sort indicator based on the sort direction
  if (sortIndicator === WorklistDataGridPropTypes.SortIndicators.ASCENDING) {
    sortIndicatorIcon = <IconUp />;
  } else if (sortIndicator === WorklistDataGridPropTypes.SortIndicators.DESCENDING) {
    sortIndicatorIcon = <IconDown />;
  }

  // Retrieve current theme from context
  const theme = useContext(ThemeContext);

  return (
  /* eslint-disable react/forbid-dom-props */
    <th
      ref={(columnHeaderCellRef)}
      key={id}
      className={cx('column-header', theme.className, { selectable: isSelectable })}
      tabIndex={isTabStop ? 0 : -1}
      role="columnheader"
      scope="col"
      aria-sort={sortIndicator}
      onMouseDown={(isSelectable && onColumnSelect) ? handleMouseDown : undefined}
      onKeyDown={(isSelectable && onColumnSelect) ? handleKeyDown : undefined}
      style={{ width: `${width}px`, height: headerHeight }}
    >
      <div className={cx('header-container')} role={displayName && 'button'}>
        {errorIcon}
        <span>{displayName}</span>
        {sortIndicatorIcon}
      </div>
      { isResizable && (
      <ColumnResizeHandle
        columnIndex={columnIndex}
        columnText={displayName}
        columnWidth={width}
        height={tableHeight}
        minimumWidth={minimumWidth}
        maximumWidth={maximumWidth}
        onResizeMouseDown={onResizeHandleMouseDown}
      />
      )}
    </th>
  );
};

ColumnHeaderCell.propTypes = propTypes;
ColumnHeaderCell.defaultProps = defaultProps;
export default injectIntl(ColumnHeaderCell);
