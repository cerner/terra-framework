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
   * An identifier to uniquely identify the row within the grid.
   */
  // id: PropTypes.string.isRequired,

  /**
   * The row's position in the Grid. This is zero based.
   */
  // rowIndex: PropTypes.number,

  /**
   * Data to be displayed in the cells of the row. Cells will be rendered in the row in the order given.
   */
  cells: PropTypes.arrayOf(cellShape),

  // columnId: PropTypes.string,
  columns: PropTypes.arrayOf(columnShape),
};

function Row(props) {
  const {
    // rowIndex,
    // id,
    cells,
    columns,
  } = props;

  const theme = useContext(ThemeContext);

  return (
    <div
      role="row"
      className={cx('row', theme.className)}
    >
      {cells.map((cellData, index) => (
        <Cell
        // rowId={rowId}
        // columnId={columnId}
        // rowIndex={cellRowIndex}
        // columnIndex={cellColumnIndex}
          key={cellData.id}
          // eslint-disable-next-line react/forbid-component-props
          style={columns[index].style}
        >
          {cellData.content}
        </Cell>
      ))}
    </div>
  );
}

Row.propTypes = propTypes;

export default React.memo(Row);
