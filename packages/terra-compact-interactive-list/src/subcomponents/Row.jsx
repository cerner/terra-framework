import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from 'terra-theme-context';
import classNames from 'classnames/bind';
import styles from './Row.module.scss';
import Cell from './Cell';
import cellShape from '../proptypes/cellShape';
import formattedColumnShape from '../proptypes/formattedColumnShape';
import { widthUnitTypes } from '../utils/constants';
import unitShape from '../proptypes/unitShape';

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
  columns: PropTypes.arrayOf(formattedColumnShape).isRequired,

  /**
   * A number for column minimum width.
   */
  columnMinimumWidth: PropTypes.number,

  /**
   * A number for column maximum width.
   */
  columnMaximumWidth: PropTypes.number,

  /**
   * Number of visual columns.
   */
  numberOfColumns: PropTypes.number.isRequired,

  /**
   * Indicates if the column is flex growing column (can grow wider or shrink).
   */
  isResponsive: PropTypes.bool.isRequired,

  /**
   * Row's width in units set by widthUnit prop, such as `px`, `em`, or `rem`.
   * Disregarded if flexGrow is set to true.
   */
  rowWidth: PropTypes.number,

  /**
   * Row's maximum width for flex growing rows in units set by widthUnit prop, such as `px`, `em`, or `rem`.
   * Will have no effect if row width is set and flexGrow is omitted or false.
   */
  rowMaximumWidth: PropTypes.number,

  /**
   * Row's minimum width for flex growing rows in units set by widthUnit prop, such as `px`, `em`, or `rem`.
   * Will have no effect if row width is set and flexGrow is omitted or false.
   */
  rowMinimumWidth: PropTypes.number,

  /**
   * The type of width value. One of `px`, `em`, `rem`. Defaults to 'px'.
   */
  widthUnit: PropTypes.oneOf([
    widthUnitTypes.PX,
    widthUnitTypes.EM,
    widthUnitTypes.REM,
  ]).isRequired,

  /**
   * By default the items go from top to bottom, then break to the next column.
   * If flowHorizontally prop is set to true, items will flow left to right, then break to the next row.
   */
  flowHorizontally: PropTypes.bool,

  /**
   * A valid css string, px, em, or rem supported.
   */
  rowHeight: unitShape,

  /**
   * Indicates if the row is located in the top visual row and needs a top border.
   */
  isTopmost: PropTypes.bool,

  /**
   * Indicates if the row is located in the left visual column and needs a left border.
   */
  isLeftmost: PropTypes.bool,
};

const Row = (props) => {
  const {
    id,
    cells,
    columns,
    columnMinimumWidth,
    columnMaximumWidth,
    numberOfColumns,
    isResponsive,
    rowMaximumWidth,
    rowMinimumWidth,
    rowWidth,
    widthUnit,
    flowHorizontally,
    rowHeight,
    isTopmost,
    isLeftmost,
  } = props;

  const theme = useContext(ThemeContext);

  const style = isResponsive ? {
    width: flowHorizontally ? null : `${Math.min(100 / numberOfColumns)}%`,
    flex: flowHorizontally ? `1 1 ${Math.min(100 / numberOfColumns)}%` : null,
    maxWidth: rowMaximumWidth ? `${rowMaximumWidth}${widthUnit}` : null,
    minWidth: rowMinimumWidth ? `${rowMinimumWidth}${widthUnit}` : null,
  } : { width: `${rowWidth}${widthUnit}` };
  if (rowHeight) {
    style.height = `${rowHeight?.value}${rowHeight?.unitType}`;
  }

  const activeRow = cells && cells.length > 0;

  return (
    <div
      id={id}
      role={activeRow ? 'row' : null}
      aria-hidden={activeRow ? null : true}
      className={cx('row', isTopmost && 'row-topmost', isLeftmost && 'row-leftmost', !activeRow && 'row-placeholder', theme.className)}
      // eslint-disable-next-line react/forbid-dom-props
      style={style}
    >
      {activeRow && cells.map((cellData, index) => (
        <Cell
          key={`row-${id}-col-${columns[index].id}`}
          column={columns[index]}
          columnMinimumWidth={columnMinimumWidth}
          columnMaximumWidth={columnMaximumWidth}
          widthUnit={widthUnit}
        >
          {cellData.content}
        </Cell>
      ))}
    </div>
  );
};

Row.propTypes = propTypes;

export default React.memo(Row);
