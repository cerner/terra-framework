import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from 'terra-theme-context';
import classNames from 'classnames/bind';
import styles from './VisualRow.module.scss';
import rowShape from '../proptypes/rowShape';
import Row from './Row';
import columnShape from '../proptypes/columnShape';
import { checkIfRowNeedsMaxWidth, checkIfRowHasFlexColumns } from './utils/utils';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Data for columns.
   */
  columns: PropTypes.arrayOf(columnShape),

  /**
   * Data for rows (list items) content.
   */
  rows: PropTypes.arrayOf(rowShape),

  /**
   * A number of visual columns.
   */
  numberOfColumns: PropTypes.number,

  /**
   * A number for columns' minimum width in px. Defaults to 60.
   */
  columnMinimumWidth: PropTypes.number,

  /**
   * A number for columns' minimum width in px.
   */
  columnMaximumWidth: PropTypes.number,
};

const VisualRow = (props) => {
  const {
    rows,
    columns,
    columnMinimumWidth,
    columnMaximumWidth,
    numberOfColumns,
  } = props;

  const theme = useContext(ThemeContext);

  const isFlexGrow = checkIfRowHasFlexColumns(columns);
  const rowNeedsMaxWidth = checkIfRowNeedsMaxWidth(columns, columnMaximumWidth);

  const getRowWidthSum = (total, column) => total + (column.width || column.maximumWidth || columnMaximumWidth);
  const rowWidth = columns.reduce(getRowWidthSum, 0);
  const visualRowWidth = Math.round(rowWidth * numberOfColumns);

  const style = isFlexGrow ? {
    maxWidth: rowNeedsMaxWidth ? `${visualRowWidth}px` : null,
  } : { width: `${visualRowWidth}px` };

  return (
    <div
      className={cx('visual-row', theme.className)}
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
  );
};

VisualRow.propTypes = propTypes;

export default React.memo(VisualRow);
