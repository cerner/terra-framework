import React, { useContext, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './ColumnResizeHandle.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Text of the column associated with the divider.
   */
  columnText: PropTypes.string.isRequired,
  /**
   * Number that specifies the Width of the associated column in pixels.
   */
  columnWidth: PropTypes.number.isRequired,
  /**
   * Number that specifies the height of the resize handle in pixels.
   */
  height: PropTypes.number.isRequired,
  /**
   * Number that specifies the minimum column width in pixels.
   */
  minimumWidth: PropTypes.number.isRequired,
  /**
   * Number that specifies the maximum column width in pixels.
   */
  maximumWidth: PropTypes.number.isRequired,
  /**
   * Function that is called when onMouseDown event is triggered for the resize handle
   */
  onResizeMouseDown: PropTypes.func.isRequired,
};

const ColumnResizeHandle = (props) => {
  const {
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
    // Set focus to resize handle DOM element
    resizeHandle.current.focus();

    // Execute callback function to notify consumer of mouse down event
    onResizeMouseDown(event);

    // Prevent event bubbling since necessary actions are handled by this component
    event.stopPropagation();
    // Prevent default dragging behavior
    event.preventDefault();
  };

  return (
    /* eslint-disable react/forbid-dom-props */
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/interactive-supports-focus
    <div
      ref={resizeHandleRef}
      draggable
      role="slider"
      tabIndex={-1}
      aria-valuemin={minimumWidth}
      aria-valuenow={columnWidth}
      aria-valuemax={maximumWidth}
      aria-label={columnText}
      aria-valuetext={`${columnWidth} pixels column width`}
      style={{ height: `${height}px` }}
      onMouseDown={onMouseDown}
      className={cx('resize-handle', theme.className)}
    />
  );
};

ColumnResizeHandle.propTypes = propTypes;
export default injectIntl(ColumnResizeHandle);
