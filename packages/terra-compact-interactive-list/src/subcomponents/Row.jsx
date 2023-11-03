import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from 'terra-theme-context';
import classNames from 'classnames/bind';
import styles from './Row.module.scss';
import Cell from './Cell';
import cellShape from '../proptypes/cellShape';
import columnShape from '../proptypes/columnShape';
import { WidthValueTypes } from '../utils/constants';

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
   * A number for columns' minimum width. Defaults to 60.
   */
  columnMinimumWidth: PropTypes.number,

  /**
   * A number for columns' minimum width.
   */
  columnMaximumWidth: PropTypes.number,

  /**
   * A number of visual columns.
   */
  numberOfColumns: PropTypes.number,

  /**
   * Indicates if the column is flex growing column (can grow wider or shrink).
   */
  isFlexGrow: PropTypes.bool,

  /**
   * Row's width in units set by widthValue prop, such as `px`, `em`, or `rem`.
   * If flexGrow is set to true, will be used as a flex basis rather than fixed width.
   */
  rowWidth: PropTypes.number,

  /**
   * Row's maximum width for flex growing rows in units set by widthValue prop, such as `px`, `em`, or `rem`.
   * Will have no effect if the width is set and flexGrow is omitted or false.
   */
  rowMaximumWidth: PropTypes.number,

  /**
   * Row's maximum width for flex growing rows in units set by widthValue prop, such as `px`, `em`, or `rem`.
   * Will have no effect if the width is set and flexGrow is omitted or false.
   */
  rowMinimumWidth: PropTypes.number,

  /**
   * The type of width value. One of `px`, `em`, `rem`. Defaults to 'px'.
   */
  widthValue: PropTypes.oneOf([
    WidthValueTypes.PX,
    WidthValueTypes.EM,
    WidthValueTypes.REM,
  ]),
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
    rowMaximumWidth,
    rowMinimumWidth,
    rowWidth,
    widthValue,
  } = props;

  const theme = useContext(ThemeContext);

  const style = isFlexGrow ? {
    flex: `1 1 ${Math.min(100 / numberOfColumns)}%`,
    maxWidth: rowMaximumWidth ? `${rowMaximumWidth}${widthValue}` : null,
    minWidth: rowMinimumWidth ? `${rowMinimumWidth}${widthValue}` : null,
  } : { width: `${rowWidth}${widthValue}` };

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
          widthValue={widthValue}
        >
          {cellData.content}
        </Cell>
      ))}
    </div>
  );
};

Row.propTypes = propTypes;

export default React.memo(Row);
