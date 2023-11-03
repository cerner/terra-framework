import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { checkIfColumnIsFlex } from '../utils/utils';
import columnShape from '../proptypes/columnShape';
import { WidthValueTypes } from '../utils/constants';
import styles from './Cell.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * An identifier to uniquely identify the cell.
   */
  id: PropTypes.string.isRequired,

  /**
   * Content that will be rendered within the Cell.
   */
  children: PropTypes.node,

  /**
   * A column data.
   */
  column: PropTypes.instanceOf(columnShape),

  /**
   * Columns' minimum width in units set by widthValue prop, such as `px`, `em`, or `rem`.
   */
  columnMinimumWidth: PropTypes.number,

  /**
   * Columns' maximum width in units set by widthValue prop, such as `px`, `em`, or `rem`.
   */
  columnMaximumWidth: PropTypes.number,

  /**
   * The type of width value. One of `px`, `em`, `rem`. Defaults to 'px'.
   */
  widthValue: PropTypes.oneOf([
    WidthValueTypes.PX,
    WidthValueTypes.EM,
    WidthValueTypes.REM,
  ]),
};

const Cell = (props) => {
  const {
    id,
    children,
    column,
    columnMinimumWidth,
    columnMaximumWidth,
    widthValue,
  } = props;

  const theme = useContext(ThemeContext);
  const className = cx('cell', theme.className);

  const {
    width, flexGrow, alignToCenter, maximumWidth,
  } = column;
  const isFlexGrow = checkIfColumnIsFlex(flexGrow, width);
  const maxWidth = maximumWidth || columnMaximumWidth;

  const style = {
    flex: isFlexGrow ? `1 1 ${width || columnMinimumWidth}${widthValue}` : null,
    width: isFlexGrow ? null : `${width}${widthValue}`,
    justifyContent: `${alignToCenter ? 'center' : 'left'}`,
    maxWidth: isFlexGrow && maxWidth ? `${maxWidth}${widthValue}` : null,
  };

  return (

    <div
      id={id}
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
