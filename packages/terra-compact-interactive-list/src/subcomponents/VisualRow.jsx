import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from 'terra-theme-context';
import classNames from 'classnames/bind';
import styles from './VisualRow.module.scss';
import rowShape from '../proptypes/rowShape';
import Row from './Row';
import columnShape from '../proptypes/columnShape';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * An identifier to uniquely identify the row within the grid.
   */
  id: PropTypes.string.isRequired,

  /**
   * Data for columns.
   */
  columns: PropTypes.arrayOf(columnShape),

  /**
     * Data for rows (list items) content.
     */
  rows: PropTypes.arrayOf(rowShape),

  /**
   * A string for columns' minimum width. Any valid css string. Defaults to '20px'.
   */
  columnMinimumWidth: PropTypes.string,

  /**
     * A string for columns' maximum width. Any valid css string. Defaults to '300px'.
     */
  columnMaximumWidth: PropTypes.string,

  /**
   * A number of visual columns.
   */
  numberOfColumns: PropTypes.number,
};

const VisualRow = (props) => {
  const {
    id,
    rows,
    columns,
    columnMinimumWidth,
    columnMaximumWidth,
    numberOfColumns,
  } = props;

  const theme = useContext(ThemeContext);

  return (
    <div
      className={cx('visual-row', theme.className)}
      id={id}
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
        />
      ))}
    </div>
  );
};

VisualRow.propTypes = propTypes;

export default React.memo(VisualRow);
