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
   * Data for columns.
   */
  columns: PropTypes.arrayOf(columnShape),

  /**
   * Data for rows (list items) content.
   */
  rows: PropTypes.arrayOf(rowShape),

  /**
   * A number of visual columns. Defaults to 1.
   */
  numberOfColumns: PropTypes.number,

  /**
   * A string for container's width. Any valid css string. Defaults to '100%'.
   */
  width: PropTypes.string,

  /**
   * A number for container's minimum width in px. Defaults to '500px'.
   */
  minimumWidth: PropTypes.number,

  /**
   * A number for container's maximum width in px. Defaults to '500px'.
   */
  maximumWidth: PropTypes.number,

  /**
   * A number for columns' minimum width in px. Defaults to 60.
   */
  columnMinimumWidth: PropTypes.number,

  /**
   * A number for columns' minimum width in px.
   */
  columnMaximumWidth: PropTypes.number,
};

const defaultProps = {
  rows: [],
  numberOfColumns: 1,
  width: '100%',
  minimumWidth: 500,
  columnMinimumWidth: 60,
};

const CompactInteractiveList = (props) => {
  const {
    id,
    ariaLabelledBy,
    ariaLabel,
    columns,
    rows,
    numberOfColumns,
    width,
    minimumWidth,
    maximumWidth,
    columnMinimumWidth,
    columnMaximumWidth,
  } = props;

  const theme = useContext(ThemeContext);
  const visualRows = getVisualRows(rows, numberOfColumns);

  const style = {
    width,
    minWidth: `${minimumWidth}px`,
    maximumWidth: maximumWidth ? `${maximumWidth}px` : null,
  };

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
        // eslint-disable-next-line react/forbid-dom-props
        style={style}
      >
        {visualRows.map((visualRow, index) => (
          <VisualRow
            key={`visual-row-${index}`}
            id={`visual-row-${index}`}
            rows={visualRow}
            columns={columns}
            columnMinimumWidth={columnMinimumWidth}
            columnMaximumWidth={columnMaximumWidth}
            numberOfColumns={numberOfColumns}
          />
        ))}
      </div>
    </div>
  );
};

CompactInteractiveList.propTypes = propTypes;
CompactInteractiveList.defaultProps = defaultProps;

export default injectIntl(CompactInteractiveList);
