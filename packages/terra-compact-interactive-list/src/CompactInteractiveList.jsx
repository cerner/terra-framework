/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './CompactInteractiveList.module.scss';
import rowShape from './proptypes/rowShape';
import Row from './subcomponents/Row';
import columnShape from './proptypes/columnShape';
import { checkIfRowNeedsMaxWidth, checkIfRowHasFlexColumns } from './subcomponents/utils/utils';

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

  const isFlexGrow = checkIfRowHasFlexColumns(columns);
  const rowNeedsMaxWidth = checkIfRowNeedsMaxWidth(columns, columnMaximumWidth);

  const getRowWidthSum = (total, column) => total + (column.width || column.maximumWidth || columnMaximumWidth);
  const rowWidth = columns.reduce(getRowWidthSum, 0);
  const listWidth = Math.round(rowWidth * numberOfColumns);

  console.log("maximumWidth: ", maximumWidth);

  const style = {
    width: isFlexGrow ? width : `${listWidth}px`,
    minWidth: `${minimumWidth}px`,
    maxWidth: isFlexGrow && rowNeedsMaxWidth ? `${listWidth}px` : null,
  };

  return (
    <div
      className={cx('compact-interactive-list-container', theme.className)}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
    >
      <div
        id={id}
        role="grid"
        aria-labelledby={ariaLabelledBy}
        aria-label={ariaLabel}
        className={cx('compact-interactive-list')}
        // eslint-disable-next-line react/forbid-dom-props
        style={style}
      >
        {rows.map((row, index) => (
          <Row
            rowIndex={index + 1}
            key={row.id}
            id={row.id}
            cells={row.cells}
            ariaLabel={row.ariaLabel}
            columns={columns}
            columnMinimumWidth={columnMinimumWidth}
            columnMaximumWidth={columnMaximumWidth}
            numberOfColumns={numberOfColumns}
            rowWidth={!rowNeedsMaxWidth && rowWidth}
            isFlexGrow={isFlexGrow}
            rowMaxWidth={rowNeedsMaxWidth && rowWidth}
          />
        ))}
      </div>
    </div>
  );
};

CompactInteractiveList.propTypes = propTypes;
CompactInteractiveList.defaultProps = defaultProps;

export default injectIntl(CompactInteractiveList);
