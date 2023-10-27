import React, {
  useContext, useRef, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import * as KeyCode from 'keycode-js';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import ColumnContext from '../utils/ColumnContext';
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
    * Number that specifies the height of the resize handle in pixels.
    */
  height: PropTypes.number.isRequired,
  /**
   * Numeric increment in pixels to adjust column width when resizing via the keyboard.
   */
  columnResizeIncrement: PropTypes.number,
  /**
   * Control is the active element
   */
  isActive: PropTypes.bool,
  /**
   * Handler function to update isActive for parent.
   */
  setIsActive: PropTypes.func,
  /**
   * Number that specifies the minimum column width in pixels.
   */
  minimumWidth: PropTypes.number.isRequired,
  /**
   * Number that specifies the maximum column width in pixels.
   */
  maximumWidth: PropTypes.number.isRequired,
  /**
   * Function that is called when onMouseDown event is triggered for the resize handle.
   */
  onResizeMouseDown: PropTypes.func.isRequired,
  /**
   * Function that is called when onMouseDown event is triggered for the resize handle.
   */
  onResizeMouseUp: PropTypes.func.isRequired,
  /**
   * Function that is called when the the keyboard is used to adjust the column size.
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
    columnResizeIncrement,
    columnText,
    columnWidth,
    height,
    intl,
    isActive,
    maximumWidth,
    minimumWidth,
    onResizeHandleChange,
    onResizeMouseDown,
    onResizeMouseUp,
    setIsActive,
  } = props;

  // Retrieve current theme from context
  const theme = useContext(ThemeContext);
  const columnContext = useContext(ColumnContext);

  // Ref variable for native resize handle element
  const resizeHandleRef = useRef();

  const [isAriaLabel, setIsAriaLabel] = useState(false);
  const [isAriaValueText, setIsAriaValueText] = useState(false);
  const [isNavigationEnabled, setNavigationEnabled] = useState(true);

  useEffect(() => {
    if (isActive) {
      resizeHandleRef.current.focus();
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

  const onMouseUp = () => {
    onResizeMouseUp();
  };

  const fitToTable = () => {
    // Update resize handle height to match parent table height
    resizeHandleRef.current.style.height = `${height}px`;

    // Assistive technologies should announce aria-label text once focused
    setIsAriaLabel(true);
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
        setNavigationEnabled(false);
        // Lock focus into component
        resizeHandleRef.current.focus();

        // Assistive technologies should avoid announcing aria-label while focus locked, but announce aria-valueText instead
        setIsAriaLabel(false);
        setIsAriaValueText(true);
        // Assistive technologies should make announcement for focus locked
        columnContext.setColumnHeaderAriaLiveMessage(intl.formatMessage({ id: 'Terra.worklist-data-grid.cell-focus-trapped' }));
        event.stopPropagation();
        event.preventDefault();
        break;
      case KeyCode.KEY_ESCAPE:
        // Assistive technologies should stop announcing aria-valueText once focus unlocked
        setIsAriaValueText(false);
        // Release focus lock
        columnContext.setColumnHeaderAriaLiveMessage(intl.formatMessage({ id: 'Terra.worklist-data-grid.resume-navigation' }));
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

  const onBlur = () => {
    setNavigationEnabled(true);
    setIsAriaLabel(false);
    setIsActive(false);
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-static-element-interactions
    <div
      ref={resizeHandleRef}
      draggable
      role={isNavigationEnabled ? null : 'slider'}
      tabIndex={-1}
      aria-hidden={!isActive}
      aria-valuemin={isActive ? minimumWidth : null}
      aria-valuenow={isActive ? columnWidth : null}
      aria-valuemax={isActive ? maximumWidth : null}
      aria-label={isAriaLabel ? intl.formatMessage({ id: 'Terra.worklist-data-grid.resize-handle-template' }, { columnText }) : null}
      aria-valuetext={isAriaValueText ? intl.formatMessage({ id: 'Terra.worklist-data-grid.resize-handle-value-text' }, { columnWidth }) : null}
      style={{ height: `${height}px` }} // eslint-disable-line react/forbid-dom-props
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseEnter={fitToTable}
      onMouseLeave={onMouseLeave}
      onKeyDown={onKeyDown}
      onClick={onClick}
      onFocus={fitToTable}
      onBlur={onBlur}
      className={cx('resize-handle', theme.className, { 'resize-handle-selected': !isNavigationEnabled })}
    />
  );
};

ColumnResizeHandle.propTypes = propTypes;
ColumnResizeHandle.defaultProps = defaultProps;
export default injectIntl(ColumnResizeHandle);
