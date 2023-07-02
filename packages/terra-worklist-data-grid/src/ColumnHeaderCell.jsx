import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl } from 'react-intl';
import ThemeContext from 'terra-theme-context';
import IconUp from 'terra-icon/lib/icon/IconUp';
import IconDown from 'terra-icon/lib/icon/IconDown';
import IconError from 'terra-icon/lib/icon/IconError';
import WorklistDataGridPropTypes from './proptypes/WorklistDataGridPropTypes';
import './_elementPolyfill';
import styles from './ColumnHeaderCell.module.scss';

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
   * @private
   * Object containing intl APIs
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }),
};

const ColumnHeaderCell = (props) => {
  const {
    column,
    width,
    headerHeight,
    onColumnSelect,
    intl,
  } = props;

  // Handle column header selection
  const onHeaderSelect = () => {
    onColumnSelect(column.id);
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
      tabIndex="-1"
      role="columnheader"
      scope="col"
      aria-sort={column.sortIndicator}
      onClick={(!(column.isSelectable === false) && onColumnSelect) ? onHeaderSelect : undefined}
      style={{ width, height: headerHeight }}
    >
      <div className={cx('header-container')}>
        {errorIcon}
        <span role="button">{column.displayName}</span>
        {sortIndicatorIcon}
      </div>
    </th>
  );
};

ColumnHeaderCell.propTypes = propTypes;
export default injectIntl(ColumnHeaderCell);
