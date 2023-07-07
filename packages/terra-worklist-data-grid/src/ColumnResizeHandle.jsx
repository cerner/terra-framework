import React, { useContext, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import * as KeyCode from 'keycode-js';
import ThemeContext from 'terra-theme-context';
import styles from './ColumnResizeHandle.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Data for columns. By default, columns will be presented in the order given.
   */
  columnIndex: PropTypes.number.isRequired,
  /**
   * String that specifies the default width for columns in the grid. Any valid CSS width value is accepted.
   */
  height: PropTypes.string.isRequired,
  /**
   * Number that specifies the pixel change during keyboard resizing.
   */
  resizeIncrement: PropTypes.number.isRequired,
};

const ColumnResizeContext = React.createContext();

const ColumnResizeHandle = (props) => {
  const {
    columnIndex,
    height,
    resizeIncrement,
  } = props;

  // Retrieve current theme from context
  const theme = useContext(ThemeContext);
  // Retrieve column resize context
  const columnResizeContext = useContext(ColumnResizeContext);
  // Ref variable for native resize handle element
  const resizeHandle = useRef();

  // Ref callback to obtain the native resize handle element
  const resizeHandleRef = useCallback((node) => {
    resizeHandle.current = node;
  }, []);

  // Mouse down event listener to give focus to resize handler and notify the provider
  const onMouseDown = (event) => {
    resizeHandle.current.focus();
    columnResizeContext.onMouseDown(event, columnIndex);
    event.stopPropagation();
    event.preventDefault();
  };

  // Key event listener to communicate column width increment change
  const onKeyDown = (event) => {
    const key = event.keyCode;
    switch (key) {
      case KeyCode.KEY_LEFT:
        columnResizeContext.onColumnResizeHandleChange(columnIndex, -resizeIncrement);
        break;
      case KeyCode.KEY_RIGHT:
        columnResizeContext.onColumnResizeHandleChange(columnIndex, resizeIncrement);
        break;
      default:
        return;
    }

    event.stopPropagation();
    event.preventDefault();
  };

  const onClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };

  return (
  /* eslint-disable react/forbid-dom-props */
    <div
      ref={resizeHandleRef}
      role="slider"
      aria-valuemin="60"
      aria-valuenow={columnResizeContext.activeResizeWidth}
      aria-valuemax="300"
      aria-label="Vitals"
      tabIndex={0}
      style={{ height }}
      onMouseDown={onMouseDown}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={cx('resize-handle', theme.className, { active: (columnResizeContext.activeIndex === columnIndex) })}
    />
  );
};

ColumnResizeHandle.propTypes = propTypes;
export default ColumnResizeHandle;
export { ColumnResizeContext };
