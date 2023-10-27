import React, {
  useContext, useState, useRef, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import * as KeyCode from 'keycode-js';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './Cell.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * String identifier of the row in which the Cell will be rendered.
   */
  rowId: PropTypes.string.isRequired,

  /**
   * String identifier of the column in which the Cell will be rendered.
   */
  columnId: PropTypes.string.isRequired,

  /**
   * The cell's row position in the grid. This is zero based.
   */
  rowIndex: PropTypes.number,

  /**
   * The cell's column position in the grid. This is zero based.
   */
  columnIndex: PropTypes.number,

  /**
   * Content that will be rendered within the Cell.
   */
  children: PropTypes.node,

  /**
   * Boolean indicating whether the Cell is currently selected.
   */
  isSelected: PropTypes.bool,

  /**
   * String that labels the cell for accessibility.
   */
  ariaLabel: PropTypes.string,

  /**
   * Callback function that will be called when this cell is selected.
   */
  onCellSelect: PropTypes.func,

  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
  style: PropTypes.any,
};

const defaultProps = {
  isSelected: false,
};

function Cell(props) {
  const {
    rowId,
    columnId,
    rowIndex,
    columnIndex,
    ariaLabel,
    isSelected,
    children,
    onCellSelect,
    style,
    // intl,
  } = props;

  const cellRef = useRef();
  const [isInteractable, setInteractable] = useState(false);
  const theme = useContext(ThemeContext);
  // const columnContext = useContext(ColumnContext);

  /**
   * Determine if cell has focusable elements
   */
  const hasFocusableElements = () => {
    const focusableElementSelector = "a[href]:not([tabindex='-1']), area[href]:not([tabindex='-1']), input:not([disabled]):not([tabindex='-1']), "
    + "select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']), "
    + "iframe:not([tabindex='-1']), [tabindex]:not([tabindex='-1']), [contentEditable=true]:not([tabindex='-1'])";

    const focusableElements = [...cellRef.current.querySelectorAll(`${focusableElementSelector}`)].filter(el => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden'));

    return focusableElements.length > 0;
  };

  useEffect(() => {
    setInteractable(hasFocusableElements());
  }, []);

  /**
   * Handles mouse down event for cell
   */
  const onMouseDown = ((event) => {
    onCellSelect({
      rowId, columnId, rowIndex, columnIndex, isShiftPressed: event.shiftKey, isCellSelectable: true,
    });
  });

  /**
   * Keyboard event handler
   */
  const handleKeyDown = (event) => {
    const key = event.keyCode;

    switch (key) {
      case KeyCode.KEY_RETURN:
        // Lock focus into component
        if (hasFocusableElements()) {
          // columnContext.setCellAriaLiveMessage(intl.formatMessage({ id: 'Terra.dataGrid.cell-focus-trapped' }));
          event.stopPropagation();
          event.preventDefault();
        }
        break;
      case KeyCode.KEY_SPACE:
        if (onCellSelect) {
          onCellSelect({
            rowId, columnId, rowIndex, columnIndex, isShiftPressed: event.shiftKey, isCellSelectable: true,
          });
        }
        event.preventDefault(); // prevent the default scrolling
        break;
      default:
    }
  };

  const className = cx('cell', {
    selected: isSelected,
  }, theme.className);

  return (

    <div
      role="gridcell"
      className={className}
      ref={cellRef}
      aria-selected={isSelected}
      aria-label={ariaLabel}
      tabIndex={isInteractable ? null : -1}
      onMouseDown={onCellSelect ? onMouseDown : undefined}
      onKeyDown={handleKeyDown}
      // eslint-disable-next-line react/forbid-dom-props
      style={style}
    >
      {children}
    </div>
  );
}

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

export default React.memo(injectIntl(Cell));
