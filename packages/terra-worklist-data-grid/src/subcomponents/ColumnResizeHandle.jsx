import React, {
  useContext, useRef, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import * as KeyCode from 'keycode-js';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import '../_elementPolyfill';
import styles from './ColumnResizeHandle.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The cell's column position in the grid. This is zero based.
   */
  columnIndex: PropTypes.number,
  /**
   * Text of the column associated with the divider.
   */
  columnText: PropTypes.string.isRequired,
  /**
   * Number that specifies the Width of the associated column in pixels.
   */
  columnWidth: PropTypes.number.isRequired,
  /**
   * Numeric increment in pixels to adjust column width when resizing via the keyboard
   */
  columnResizeIncrement: PropTypes.number,
  /**
   * Control is the active element
   */
  isActive: PropTypes.bool,
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
  /**
   * Function that is called when the the keyboard is used to adjust the column size
   */
  onResizeHandleChange: PropTypes.func,
  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const defaultProps = {
  columnResizeIncrement: 10,
};

const ColumnResizeHandle = (props) => {
  const {
    columnIndex,
    columnText,
    columnWidth,
    columnResizeIncrement,
    isActive,
    minimumWidth,
    maximumWidth,
    onResizeMouseDown,
    onResizeHandleChange,
    intl,
  } = props;

  // Retrieve current theme from context
  const theme = useContext(ThemeContext);
  // Ref variable for native resize handle element
  const resizeHandleRef = useRef();

  const [isNavigationEnabled, setNavigationEnabled] = useState(true);

  useEffect(() => {
    if (isActive) {
      resizeHandleRef.current.focus();
    } else {
      resizeHandleRef.current.blur();
    }
  }, [isActive]);

  // Mouse down event listener to give focus to resize handler and notify the provider
  const onMouseDown = (event) => {
    // Set focus to resize handle DOM element
    resizeHandleRef.current.focus();

    // Execute callback function to notify consumer of mouse down event
    onResizeMouseDown(event);

    // Prevent event bubbling since necessary actions are handled by this component
    event.stopPropagation();
    // Prevent default dragging behavior
    event.preventDefault();
  };

  const fitToTable = () => {
    // Find parent table element
    const parentTable = resizeHandleRef.current.closest('table');

    // Update resize handle height to match parent table height
    if (parentTable) {
      resizeHandleRef.current.style.height = `${parentTable.offsetHeight}px`;
    }
  };

  const onMouseLeave = () => {
    if (document.activeElement !== resizeHandleRef.current) {
      resizeHandleRef.current.style.height = '100%';
    }
  };

  // Handle column resize handle keyboard navigation
  const onKeyDown = (event) => {
    const key = event.keyCode;
    switch (key) {
      case KeyCode.KEY_SPACE:
      case KeyCode.KEY_RETURN:
        // Lock focus into component
        resizeHandleRef.current.focus();
        setNavigationEnabled(false);
        event.stopPropagation();
        event.preventDefault();
        break;
      case KeyCode.KEY_ESCAPE:
        // Release focus lock
        setNavigationEnabled(true);
        break;
      case KeyCode.KEY_RIGHT:
        if (onResizeHandleChange && !isNavigationEnabled) {
          // Increase column width
          onResizeHandleChange(columnIndex, columnResizeIncrement);
        }
        break;
      case KeyCode.KEY_LEFT:
        if (onResizeHandleChange && !isNavigationEnabled) {
          // Decrease column width
          onResizeHandleChange(columnIndex, -columnResizeIncrement);
        }
        break;
      default:
    }

    if (!isNavigationEnabled) {
      event.stopPropagation();
      event.preventDefault();
    }
  };

  // Prevent click event propagation
  const onClick = (event) => {
    // Prevent event bubbling since necessary actions are handled by this component
    event.stopPropagation();
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <div
      ref={resizeHandleRef}
      draggable
      role="slider"
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={isActive ? 0 : -1}
      aria-hidden={!isActive}
      aria-valuemin={minimumWidth}
      aria-valuenow={columnWidth}
      aria-valuemax={maximumWidth}
      aria-label={intl.formatMessage({ id: 'Terra.worklist-data-grid.resize-handle-template' }, { columnText })}
      // aria-valuetext={intl.formatMessage({ id: 'Terra.worklist-data-grid.resize-handle-template' }, { columnText })}
      onMouseDown={onMouseDown}
      onMouseEnter={fitToTable}
      onMouseLeave={onMouseLeave}
      onKeyDown={onKeyDown}
      onClick={onClick}
      onFocus={fitToTable}
      onBlur={() => { setNavigationEnabled(true); }}
      className={cx('resize-handle', theme.className)}
    />
  );
};

ColumnResizeHandle.propTypes = propTypes;
ColumnResizeHandle.defaultProps = defaultProps;
export default injectIntl(ColumnResizeHandle);
