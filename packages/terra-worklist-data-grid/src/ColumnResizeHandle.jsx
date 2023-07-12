import React, { useContext, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './ColumnResizeHandle.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  active: PropTypes.bool,
  /**
   * Text of the column associated with the divider
   */
  columnText: PropTypes.string.isRequired,
  /**
   * Width of the column associated with the divider
   */
  columnWidth: PropTypes.number.isRequired,
  /**
   * String that specifies the default width for columns in the grid. Any valid CSS width value is accepted.
   */
  height: PropTypes.number.isRequired,
  /**
   * String that specifies the minimum column width in pixels
   */
  minimumWidth: PropTypes.number.isRequired,
  /**
   * String that specifies the minimum column width in pixels
   */
  maximumWidth: PropTypes.number.isRequired,
  /**
   * Function that is called when a selectable header cell is selected. Parameters: `onColumnSelect(columnId)`
   */
  onResizeMouseDown: PropTypes.func.isRequired,
};

const ColumnResizeHandle = (props) => {
  const {
    active,
    columnText,
    columnWidth,
    height,
    minimumWidth,
    maximumWidth,
    onResizeMouseDown,
  } = props;

  // Retrieve current theme from context
  const theme = useContext(ThemeContext);
  // Ref variable for native resize handle element
  const resizeHandle = useRef();

  // Ref callback to obtain the native resize handle element
  const resizeHandleRef = useCallback((node) => {
    resizeHandle.current = node;
  }, []);

  // Mouse down event listener to give focus to resize handler and notify the provider
  const onMouseDown = (event) => {
    resizeHandle.current.tabIndex = 0;
    resizeHandle.current.focus();

    onResizeMouseDown(event);

    event.stopPropagation();
    event.preventDefault();
  };

  const onClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };

  return (
  /* eslint-disable react/forbid-dom-props */
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/interactive-supports-focus
    <div
      ref={resizeHandleRef}
      draggable
      role="slider"
      aria-valuemin={minimumWidth}
      aria-valuenow={columnWidth}
      aria-valuemax={maximumWidth}
      aria-label={columnText}
      aria-valuetext={`${columnWidth} pixels column width`}
      style={{ height: `${height}px` }}
      onMouseDown={onMouseDown}
      onClick={onClick}
      className={cx('resize-handle', theme.className, { active })}
    />
  );
};

ColumnResizeHandle.propTypes = propTypes;
export default injectIntl(ColumnResizeHandle);
