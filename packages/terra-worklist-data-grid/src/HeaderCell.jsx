import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl } from 'react-intl';
import IconUp from 'terra-icon/lib/icon/IconUp';
import IconDown from 'terra-icon/lib/icon/IconDown';
import IconError from 'terra-icon/lib/icon/IconError';
import WorklistDataGridPropTypes from './proptypes/WorklistDataGridPropTypes';
import './_elementPolyfill';
import styles from './HeaderCell.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Data for columns. By default, columns will be presented in the order given.
   */
  column: WorklistDataGridPropTypes.columnShape,
  /**
   * String that specifies the default width for columns in the grid. Any valid CSS width value is accepted.
   * To override the default value, provide width for the column that needs to be overridden.
   */
  width: PropTypes.string,
  /**
     * String that specifies the column height. Any valid CSS height value is accepted.
     */
  headerHeight: PropTypes.string,
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

const HeaderCell = (props) => {
  const {
    column,
    width,
    headerHeight,
    onColumnSelect,
    intl,
  } = props;

  let sortIndicatorIcon;
  let errorIcon;

  if (column.hasError) {
    errorIcon = <IconError a11yLabel={intl.formatMessage({ id: 'Terra.worklistDataGrid.error' })} />;
  }

  if (column.sortIndicator === WorklistDataGridPropTypes.SortIndicators.ASCENDING) {
    sortIndicatorIcon = <IconUp />;
  } else if (column.sortIndicator === WorklistDataGridPropTypes.SortIndicators.DESCENDING) {
    sortIndicatorIcon = <IconDown />;
  }

  return (
  /* eslint-disable react/forbid-dom-props */
    <th
      key={column.id}
      className={cx('column-header')}
      tabIndex="-1"
      role="columnheader"
      scope="col"
      aria-sort={column.sortIndicator}
      {...(column.isSelectable && onColumnSelect && { onClick: () => { onColumnSelect(column.id); } })}
      style={{ width, height: headerHeight }}
    >
      <div className={cx('header-container')}>
        {errorIcon}
        <button type="button" tabIndex={-1}>
          {column.displayName}
        </button>
        {sortIndicatorIcon}
      </div>
    </th>
  );
};

HeaderCell.propTypes = propTypes;
export default injectIntl(HeaderCell);
