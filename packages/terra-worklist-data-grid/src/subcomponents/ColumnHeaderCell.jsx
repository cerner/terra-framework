import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl } from 'react-intl';
import ThemeContext from 'terra-theme-context';
import IconUp from 'terra-icon/lib/icon/IconUp';
import IconDown from 'terra-icon/lib/icon/IconDown';
import IconError from 'terra-icon/lib/icon/IconError';
import * as KeyCode from 'keycode-js';
import WorklistDataGridPropTypes from '../proptypes/WorklistDataGridPropTypes';
import '../_elementPolyfill';
import styles from './ColumnHeaderCell.module.scss';
import WorklistDataGridUtils from '../utils/WorklistDataGridUtils';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Data for columns. By default, columns will be presented in the order given.
   */
  column: WorklistDataGridPropTypes.columnShape.isRequired,
  /**
   * String that specifies the default width for columns in the grid. Any valid CSS width value is accepted.
   */
  width: PropTypes.string.isRequired,
  /**
   * String that specifies the column height. Any valid CSS height value accepted.
  */
  headerHeight: PropTypes.string.isRequired,
  /**
   * Function that is called when a selectable header cell is selected. Parameters: `onColumnSelect(columnId)`
   */
  onColumnSelect: PropTypes.func,
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
   * @private
   * Object containing intl APIs
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }),
};

const defaultProps = {
  isTabStop: false,
};

const ColumnHeaderCell = (props) => {
  const {
    column,
    width,
    headerHeight,
    onColumnSelect,
    intl,
    rowIndex,
    columnIndex,
    isTabStop,
  } = props;

  // Handle column header selection via the mouse click.
  const handleMouseDown = (event) => {
    onColumnSelect(column.id, { row: rowIndex, col: columnIndex });
    event.stopPropagation();
  };

  // Handle column header selection via the space bar.
  const handleKeyDown = (event) => {
    const key = event.keyCode;
    switch (key) {
      case KeyCode.KEY_SPACE:
        if (onColumnSelect) {
          onColumnSelect(column.id, { row: rowIndex, col: columnIndex });
          event.stopPropagation();
          event.preventDefault(); // prevent the default scrolling
        }
        break;
      default:
    }
  };

  const handleCopy = (event) => {
    WorklistDataGridUtils.writeToClipboard(event.target.textContent);
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
      key={column.id}
      className={cx('column-header', theme.className, { selectable: !(column.isSelectable === false) })}
      tabIndex={isTabStop ? 0 : -1}
      role="columnheader"
      scope="col"
      aria-sort={column.sortIndicator}
      onMouseDown={(!(column.isSelectable === false) && onColumnSelect) ? handleMouseDown : undefined}
      onKeyDown={(!(column.isSelectable === false) && onColumnSelect) ? handleKeyDown : undefined}
      onCopy={handleCopy}
      style={{ width: column.width || width, height: headerHeight }}
    >
      <div className={cx('header-container')}>
        {errorIcon}
        <span role={column.displayName && 'button'}>{column.displayName}</span>
        {sortIndicatorIcon}
      </div>
    </th>
  );
};

ColumnHeaderCell.propTypes = propTypes;
ColumnHeaderCell.defaultProps = defaultProps;
export default injectIntl(ColumnHeaderCell);
