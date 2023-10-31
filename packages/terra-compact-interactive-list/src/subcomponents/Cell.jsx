import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
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
   * A string for columns' minimum width. Any valid css string. Defaults to '20px'.
   */
  columnMinimumWidth: PropTypes.string,

  /**
   * A string for columns' maximum width. Any valid css string. Defaults to '300px'.
   */
  columnMaximumWidth: PropTypes.string,

  /**
   * Cell width
   */
  width: PropTypes.number,

  /**
   * Allows the cell to grow.
   */
  flexGrow: PropTypes.boolean,

  /**
   * Allows the centrally allign within the cell.
   */
  alignToCenter: PropTypes.boolean,
};

const defaultProps = {
  flexGrow: false,
  alignToCenter: false,
};

const Cell = (props) => {
  const {
    id,
    children,
    width,
    flexGrow,
    columnMinimumWidth,
    columnMaximumWidth,
    alignToCenter,
  } = props;

  const theme = useContext(ThemeContext);
  const className = cx('cell', theme.className);

  return (

    <div
      id={id}
      role="gridcell"
      className={className}
      tabIndex={-1}
      // eslint-disable-next-line react/forbid-dom-props
      style={{
        flex: `${flexGrow ? 1 : 0} 0 ${width}px`,
        justifyContent: `${alignToCenter ? 'center' : 'left'}`,
        minWidth: columnMinimumWidth,
        maxWidth: columnMaximumWidth,
      }}
    >
      {children}
    </div>
  );
};

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

export default React.memo(Cell);
