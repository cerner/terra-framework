/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './CompactInteractiveList.module.scss';
import rowShape from './proptypes/rowShape';
import VisualRow from './subcomponents/VisualRow';
import columnShape from './proptypes/columnShape';

const getVisualRows = (rows, numberOfColumns) => {
  const result = [];
  for (let i = 0; i < rows.length; i += numberOfColumns) result.push(rows.slice(i, i + numberOfColumns));
  return result;
};

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * String that will be used to identify the table. If multiple tables are on the same page, each table should have
   * a unique id.
   */
  id: PropTypes.string.isRequired,

  /**
   * String that identifies the element (or elements) that labels the table.
   */
  ariaLabelledBy: PropTypes.string,

  /**
   * String that labels the table for accessibility. If ariaLabelledBy is specified, ariaLabel will not be used.
   */
  ariaLabel: PropTypes.string,
  /**
   * Data for content in the body of the Grid. Rows will be rendered in the order given.
   */
  columns: PropTypes.arrayOf(columnShape),
  rows: PropTypes.arrayOf(rowShape),
  numberOfColumns: PropTypes.number,
};

// const defaultColumnMinimumWidth = 60;
// const defaultColumnMaximumWidth = 300;

const defaultProps = {
  rows: [],
  numberOfColumns: 2,
};

const CompactInteractiveList = (props) => {
  const {
    id,
    ariaLabelledBy,
    ariaLabel,
    columns,
    rows,
    numberOfColumns,
  } = props;

  const theme = useContext(ThemeContext);
  const visualRows = getVisualRows(rows, numberOfColumns);

  return (
    <div
      className={cx('compact-interactive-list-container')}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
    >
      <div
        id={id}
        role="grid"
        aria-labelledby={ariaLabelledBy}
        aria-label={ariaLabel}
        className={cx('compact-interactive-list', theme.className)}
      >
        {visualRows.map((visualRow, index) => (
          <VisualRow
              // key={`visual-row-${index}`}
            id={`visual-row-${index}`}
            rows={visualRow}
            columns={columns}
          />
        ))}
      </div>
    </div>
  );
};

CompactInteractiveList.propTypes = propTypes;
CompactInteractiveList.defaultProps = defaultProps;

export default injectIntl(CompactInteractiveList);
