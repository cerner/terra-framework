import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from 'terra-theme-context';
import classNames from 'classnames/bind';
import styles from './Row.module.scss';
import Cell from './Cell';
import cellShape from '../proptypes/cellShape';
import columnShape from '../proptypes/columnShape';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * An identifier to uniquely identify the row.
   */
  id: PropTypes.string.isRequired,

  /**
   * Data to be displayed in the cells of the row. Cells will be rendered in the row in the order given.
   */
  cells: PropTypes.arrayOf(cellShape),

  /**
   * Data for columns.
   */
  columns: PropTypes.arrayOf(columnShape),

  /**
   * A number for columns' minimum width in px. Defaults to 60.
   */
  columnMinimumWidth: PropTypes.number,

  /**
   * A number for columns' minimum width in px.
   */
  columnMaximumWidth: PropTypes.number,

  /**
   * A number of visual columns.
   */
  numberOfColumns: PropTypes.number,

  /**
   * Indicates if the column is flex growing column.
   */
  isFlexGrow: PropTypes.bool,

  /**
   * Row's maximum width in px
   */
  rowMaxWidth: PropTypes.number,

  /**
   * Row's width in px
   */
  rowWidth: PropTypes.number,
};

const Row = (props) => {
  const {
    id,
    cells,
    columns,
    columnMinimumWidth,
    columnMaximumWidth,
    numberOfColumns,
    isFlexGrow,
    rowMaxWidth,
    rowWidth,
  } = props;

  const theme = useContext(ThemeContext);

  const style = isFlexGrow ? {
    flex: `1 1 ${Math.min(100 / numberOfColumns)}%`,
    maxWidth: rowMaxWidth ? `${rowMaxWidth}px` : null,
  } : { width: `${rowWidth}px` };

  return (
    <div
      id={id}
      role="row"
      className={cx('row', theme.className)}
      // eslint-disable-next-line react/forbid-dom-props
      style={style}
    >
      {cells.map((cellData, index) => (
        <Cell
          key={cellData.id}
          column={columns[index]}
          columnMinimumWidth={columnMinimumWidth}
          columnMaximumWidth={columnMaximumWidth}
        >
          {cellData.content}
        </Cell>
      ))}
    </div>
  );
};

Row.propTypes = propTypes;

export default React.memo(Row);
