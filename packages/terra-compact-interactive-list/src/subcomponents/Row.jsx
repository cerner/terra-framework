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

const Row = (props) => {
  const {
    id,
    cells,
    columns,
    columnMinimumWidth,
    columnMaximumWidth,
    numberOfColumns,
  } = props;

  const theme = useContext(ThemeContext);

  return (
    <div
      id={id}
      role="row"
      className={cx('row', theme.className)}
      // eslint-disable-next-line react/forbid-dom-props
      style={{
        flex: `1 1 ${Math.min(100 / numberOfColumns)}%`,
      }}
    >
      {cells.map((cellData, index) => (
        <Cell
          key={cellData.id}
          width={columns[index].width}
          flexGrow={columns[index].flexGrow}
          alignToCenter={columns[index].alignToCenter}
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
