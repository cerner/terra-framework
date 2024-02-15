import React, {
  useContext, useRef, useState, useEffect,
} from 'react';
import classNames from 'classnames/bind';
import { injectIntl } from 'react-intl';
import * as KeyCode from 'keycode-js';
import PropTypes from 'prop-types';

import ThemeContext from 'terra-theme-context';

import ColumnContext from '../utils/ColumnContext';
import GridContext, { GridConstants } from '../utils/GridContext';
import styles from './ColumnResizeHandle.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  id: PropTypes.string,
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
   * String that specifies the init height for the resize handler to accomodate actions row.
   */
  resizeHandlerInitHeight: PropTypes.string,

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
    id,
    columnIndex,
    columnResizeIncrement,
    columnText,
    columnWidth,
    height,
    intl,
    isActive,
    maximumWidth,
    minimumWidth,
    resizeHandlerInitHeight,
    onResizeHandleChange,
    onResizeMouseDown,
    onResizeMouseUp,
    setIsActive,
  } = props;

  const theme = useContext(ThemeContext);
  const gridContext = useContext(GridContext);

  const columnContext = useContext(ColumnContext);
  const isGridContext = gridContext.role === GridConstants.GRID;

  // Ref variable for native resize handle element
  const resizeHandleRef = useRef();

  const [isNavigationEnabled, setNavigationEnabled] = useState(true);

  useEffect(() => {
    if (isActive) {
      resizeHandleRef.current.focus();
    }
  }, [isActive]);

  const onMouseDown = (event) => {
    // Set focus to resize handle DOM element
    resizeHandleRef.current.focus();

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
  };

  const onMouseLeave = () => {
    if (document.activeElement !== resizeHandleRef.current) {
      resizeHandleRef.current.style.height = resizeHandlerInitHeight || '100%';
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

        // Assistive technologies should make announcement for focus locked
        columnContext.setColumnHeaderAriaLiveMessage(intl.formatMessage({ id: 'Terra.table.cell-focus-trapped' }));
        event.stopPropagation();
        event.preventDefault();
        break;
      case KeyCode.KEY_ESCAPE:
        // Release focus lock
        columnContext.setColumnHeaderAriaLiveMessage(intl.formatMessage({ id: 'Terra.table.resume-navigation' }));
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
    setIsActive(false);
  };

  return (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-static-element-interactions
    <div
      id={id}
      ref={resizeHandleRef}
      draggable
      role={isNavigationEnabled ? null : 'slider'}
      tabIndex={isGridContext ? -1 : 0}
      aria-hidden={isGridContext ? !isActive : false}
      aria-valuemin={isActive ? minimumWidth : null}
      aria-valuenow={isActive ? columnWidth : null}
      aria-valuemax={isActive ? maximumWidth : null}
      aria-label={isActive && isNavigationEnabled ? intl.formatMessage({ id: 'Terra.table.resize-handle-template' }, { columnText }) : null}
      aria-valuetext={!isNavigationEnabled ? intl.formatMessage({ id: 'Terra.table.resize-handle-value-text' }, { columnWidth }) : null}
      // eslint-disable-next-line react/forbid-dom-props
      style={{ height: resizeHandlerInitHeight || '100%' }}
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
