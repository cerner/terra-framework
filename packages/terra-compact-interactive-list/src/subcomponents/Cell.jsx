import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { checkIfColumnIsResponsive } from '../utils/utils';
import columnShape from '../proptypes/columnShape';
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
  column: columnShape,

  /**
   * Columns minimum width in units set by widthUnit prop, such as `px`, `em`, or `rem`.
   */
  columnMinimumWidth: PropTypes.number,

  /**
   * Columns maximum width in units set by widthUnit prop, such as `px`, `em`, or `rem`.
   */
  columnMaximumWidth: PropTypes.number,

  /**
   * The type of width value. One of `px`, `em`, `rem`. Defaults to 'px'.
   */
  widthUnit: PropTypes.oneOf([
    widthUnitTypes.PX,
    widthUnitTypes.EM,
    widthUnitTypes.REM,
  ]).isRequired,
};

const Cell = (props) => {
  const {
    children,
    column,
    columnMinimumWidth,
    columnMaximumWidth,
    widthUnit,
  } = props;

  const theme = useContext(ThemeContext);
  const className = cx('cell', theme.className);

  const {
    width,
    flexGrow,
    maximumWidth,
    minimumWidth,
    align,
  } = column;

  const isResponsive = checkIfColumnIsResponsive(flexGrow, width);

  const style = {
    flex: isResponsive ? `1 1 ${width || columnMinimumWidth}${widthUnit}` : null,
    width: isResponsive ? null : `${width}${widthUnit}`,
    justifyContent: align || alignTypes.LEFT,
    textAlign: align || alignTypes.LEFT,
    maxWidth: isResponsive && `${Math.min(maximumWidth, columnMaximumWidth)}${widthUnit}`,
    minWidth: isResponsive && `${Math.max(minimumWidth, columnMinimumWidth)}${widthUnit}`,
  };

  return (
    <div
      role="gridcell"
      className={className}
      tabIndex={-1}
      // eslint-disable-next-line react/forbid-dom-props
      style={style}
    >
      {children}
    </div>
  );
};

Cell.propTypes = propTypes;

export default React.memo(Cell);
