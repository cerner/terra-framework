import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { checkIfColumnIsResponsive } from '../utils/utils';
import formattedColumnShape from '../proptypes/formattedColumnShape';
import { widthUnitTypes, alignTypes } from '../utils/constants';
import styles from './Cell.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Content that will be rendered within the Cell.
   */
  children: PropTypes.node,

  /**
   * A column data.
   */
  column: formattedColumnShape,

  /**
   * Columns minimum width in units set by widthUnit prop.
   */
  columnMinimumWidth: PropTypes.number,

  /**
   * Columns maximum width in units set by widthUnit prop.
   */
  columnMaximumWidth: PropTypes.number,

  /**
   * The type of width value. Defaults to px.
   */
  widthUnit: PropTypes.oneOf([
    widthUnitTypes.PX,
    widthUnitTypes.EM,
    widthUnitTypes.REM,
  ]).isRequired,

  /**
   * Callback function that will be called on click on the cell.
   */
  onCellSelect: PropTypes.func,
};

const Cell = (props) => {
  const {
    children,
    column,
    columnMinimumWidth,
    columnMaximumWidth,
    widthUnit,
    onCellSelect,
  } = props;

  const theme = useContext(ThemeContext);
  const className = cx('cell', theme.className);

  const {
    rowHeader,
    width,
    flexGrow,
    maximumWidth,
    minimumWidth,
    align,
  } = column;

  const isResponsive = checkIfColumnIsResponsive(flexGrow, width);

  const style = {
    justifyContent: align || alignTypes.LEFT,
    textAlign: align || alignTypes.LEFT,
  };
  if (isResponsive) {
    // flex and minimumWidth props required for responsive cells
    style.flex = `1 1 ${width || minimumWidth || columnMinimumWidth}${widthUnit}`;
    style.minWidth = `${(minimumWidth || columnMinimumWidth)}${widthUnit}`;
    // assign maxWidth prop only if such exist
    if ((maximumWidth || columnMaximumWidth)) {
      style.maxWidth = `${(maximumWidth || columnMaximumWidth)}${widthUnit}`;
    }
  } else {
    // width prop is required for fixed width cells
    style.width = `${width}${widthUnit}`;
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      role={rowHeader ? 'rowheader' : 'gridcell'}
      className={className}
      tabIndex={-1}
      // eslint-disable-next-line react/forbid-dom-props
      style={style}
      onMouseDown={onCellSelect}
    >
      {children}
    </div>
  );
};

Cell.propTypes = propTypes;

export default React.memo(Cell);
