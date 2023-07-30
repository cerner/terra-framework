import React, {
  useContext, useCallback, useState, useRef, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import * as KeyCode from 'keycode-js';
import '../_elementPolyfill';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import FocusTrap from 'focus-trap-react';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import WorklistDataGridUtils from '../utils/WorklistDataGridUtils';
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
   *  Boolean indicating if cell contents are masked.
   */
  isMasked: PropTypes.bool,

  /**
   * Boolean value indicating whether or not the column header is selectable.
   */
  isSelectable: PropTypes.bool,

  /**
   * Boolean value to indicate if the cell is the tab stop on the grid. At any given time, the grid has only one tab stop.
   */
  isTabStop: PropTypes.bool,

  /**
   * Boolean indicating whether the Cell is currently selected.
   */
  isSelected: PropTypes.bool,

  /**
   * String that labels the cell for accessibility.
   */
  ariaLabel: PropTypes.string,

  /**
   * Boolean indicating that the cell is a row header.
   */
  isRowHeader: PropTypes.bool,

  /**
   * Callback function that will be called when this cell is selected.
   */
  onCellSelect: PropTypes.func,

  /**
   * String that specifies the height of the cell. Any valid CSS value is accepted.
   */
  height: PropTypes.string,

  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const defaultProps = {
  isTabStop: false,
  isRowHeader: false,
  isSelected: false,
  isSelectable: true,
  isMasked: false,
};

function Cell(props) {
  const {
    rowId,
    columnId,
    rowIndex,
    columnIndex,
    isTabStop,
    ariaLabel,
    isRowHeader,
    isSelected,
    isMasked,
    isSelectable,
    children,
    onCellSelect,
    height,
    intl,
  } = props;

  const cellRef = useRef();
  const [isFocusTrapEnabled, setFocusTrapEnabled] = useState(false);
  const [ariaLiveText, setAriaLiveText] = useState(null);
  const theme = useContext(ThemeContext);

  /**
   * Determine if cell has focusable elements
   */
  const hasFocusableElements = () => {
    const focusableElements = [...cellRef.current.querySelectorAll(
      'a[href], button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])',
    )].filter(el => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden'));

    return focusableElements.length > 0;
  };

  useEffect(() => {
    if (hasFocusableElements()) {
      setAriaLiveText(intl.formatMessage({ id: 'Terra.worklist-data-grid.cell-interactable' }));
    }
  }, [intl]);

  /**
   * Handles click event for cell
   */
  const onClick = useCallback(() => {
    if (!isFocusTrapEnabled) {
      onCellSelect({ rowId, columnId }, { row: rowIndex, col: columnIndex });
    }
  }, [isFocusTrapEnabled, onCellSelect, rowId, columnId, rowIndex, columnIndex]);

  /**
   * Hnadles the onDeactivate callback for FocusTrap component
   */
  const deactiveFocusTrap = () => {
    setFocusTrapEnabled(false);
    setAriaLiveText(intl.formatMessage({ id: 'Resume grid navigation' }));
  };

  /**
   * Keyboard event handler
   */
  const handleKeyDown = (event) => {
    const key = event.keyCode;

    if (isFocusTrapEnabled) {
      switch (key) {
        case KeyCode.KEY_ESCAPE:
          deactiveFocusTrap();
          break;
        default:
      }

      event.stopPropagation();
    } else {
      switch (key) {
        case KeyCode.KEY_RETURN:
          // Lock focus into component
          if (hasFocusableElements()) {
            setFocusTrapEnabled(true);
            setAriaLiveText(intl.formatMessage({ id: 'Terra.worklist-data-grid.cell-focus-trapped' }));
            event.stopPropagation();
            event.preventDefault();
          }
          break;
        case KeyCode.KEY_SPACE:
          if (!isMasked && isSelectable && onCellSelect) {
            onCellSelect({ rowId, columnId }, { row: rowIndex, col: columnIndex });
          }
          event.preventDefault(); // prevent the default scrolling
          break;
        case KeyCode.KEY_C:
          if (event.ctrlKey || event.metaKey) {
            WorklistDataGridUtils.writeToClipboard(event.target.textContent);
          }
          break;
        default:
      }
    }
  };

  // Create cell content for masked and blank cells
  let cellContent;
  if (isMasked) {
    cellContent = (
      <span className={cx('no-data-cell', theme.className)}>
        {intl.formatMessage({ id: 'Terra.worklistDataGrid.maskedCell' })}
      </span>
    );
  } else if (!children) {
    cellContent = (
      <span className={cx('no-data-cell', theme.className)}>
        {intl.formatMessage({ id: 'Terra.worklistDataGrid.blank' })}
      </span>
    );
  } else {
    cellContent = children;
  }

  const className = cx('worklist-data-grid-cell', {
    masked: isMasked,
    selectable: isSelectable && !isMasked,
    selected: isSelected && !isMasked,
    blank: !children,
  }, theme.className);

  const CellTag = isRowHeader ? 'th' : 'td';
  return (
    <CellTag
      ref={cellRef}
      aria-selected={isSelected}
      aria-label={ariaLabel}
      tabIndex={isTabStop ? 0 : -1}
      className={className}
      {...(isRowHeader && { scope: 'row', role: 'rowheader' })}
      onClick={onCellSelect ? onClick : undefined}
      onKeyDown={handleKeyDown}
    >
      {/* Wrap cell content with focus trap */}
      <FocusTrap
        active={isFocusTrapEnabled}
        focusTrapOptions={{
          returnFocusOnDeactivate: true, clickOutsideDeactivates: true, escapeDeactivates: false, onDeactivate: deactiveFocusTrap,
        }}
      >
        {/* eslint-disable-next-line react/forbid-dom-props */}
        <div className={cx('cell-content', theme.className)} style={{ height }}>{cellContent}</div>
      </FocusTrap>
      <VisuallyHiddenText aria-live="polite" text={ariaLiveText} />
    </CellTag>
  );
}

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

export default injectIntl(Cell);
