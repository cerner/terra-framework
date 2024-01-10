import React, {
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import * as KeyCode from 'keycode-js';
import classNames from 'classnames/bind';
import FocusTrap from 'focus-trap-react';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';

import ThemeContext from 'terra-theme-context';
import VisuallyHiddenText from 'terra-visually-hidden-text';

import ColumnContext from '../utils/ColumnContext';
import GridContext, { GridConstants } from '../utils/GridContext';
import getFocusableElements from '../utils/focusManagement';
import styles from './Cell.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,

  /**
   * String identifier of the row in which the Cell will be rendered.
   */
  rowId: PropTypes.string.isRequired,

  /**
   * String identifier of the column in which the Cell will be rendered.
   */
  columnId: PropTypes.string.isRequired,

  /**
   * The cell's row position in the table. This is zero based.
   */
  rowIndex: PropTypes.number,

  /**
   * The cell's column position in the table. This is zero based.
   */
  columnIndex: PropTypes.number,

  /**
   * An identifier for the section.
   */
  sectionId: PropTypes.string,

  /**
   * Unique identifier for the parent table
   */
  tableId: PropTypes.string.isRequired,

  /**
   * Content that will be rendered within the Cell.
   */
  children: PropTypes.node,

  /**
   *  Boolean indicating if cell contents are masked.
   */
  isMasked: PropTypes.bool,

  /**
   * Provides a custom string for masked cells to be read by screen readers. This value is only applied if the cell is masked.
   */
  maskedLabel: PropTypes.string,

  /**
   * Boolean value indicating whether or not the column header is selectable.
   */
  isSelectable: PropTypes.bool,

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
   * Boolean indicating that the cell has been highlighted.
   */
  isHighlighted: PropTypes.bool,

  /**
   * Callback function that will be called when this cell is selected.
   */
  onCellSelect: PropTypes.func,

  /**
   * String that specifies the height of the cell. Any valid CSS value is accepted.
   */
  height: PropTypes.string,
};

const defaultProps = {
  isRowHeader: false,
  isSelectable: false,
  isMasked: false,
  sectionId: '',
};

function Cell(props) {
  const {
    rowId,
    columnId,
    rowIndex,
    columnIndex,
    sectionId,
    tableId,
    ariaLabel,
    isMasked,
    maskedLabel,
    isRowHeader,
    isSelectable,
    isSelected,
    isHighlighted,
    children,
    onCellSelect,
    height,
    intl,
  } = props;

  const cellRef = useRef();
  const theme = useContext(ThemeContext);
  const gridContext = useContext(GridContext);
  const columnContext = useContext(ColumnContext);

  const [isInteractable, setIsInteractable] = useState(false);
  const [isFocusTrapEnabled, setIsFocusTrapEnabled] = useState(false);

  const isGridContext = gridContext.role === GridConstants.GRID;

  /**
   * Determine if cell has focusable elements
   */
  const hasFocusableElements = () => {
    const focusableElements = getFocusableElements(cellRef.current);
    return focusableElements.length > 0;
  };

  useEffect(() => {
    if (isGridContext) {
      setIsInteractable(hasFocusableElements());
    }
  }, [isGridContext]);

  /**
   * Handles the onDeactivate callback for FocusTrap component
   */
  const deactivateFocusTrap = () => {
    setIsFocusTrapEnabled(false);
    if (gridContext.setCellAriaLiveMessage) {
      gridContext.setCellAriaLiveMessage(intl.formatMessage({ id: 'Terra.table.resume-navigation' }));
    }
  };

  const onMouseDown = ((event) => {
    if (!isFocusTrapEnabled) {
      onCellSelect({
        sectionId, rowId, rowIndex: (rowIndex - 1), columnId, columnIndex, isShiftPressed: event.shiftKey, isMetaPressed: event.metaKey || event.ctrlKey, isCellSelectable: (!isMasked && isSelectable),
      });
    }
  });

  /**
   *
   * @param {HTMLElement} element - The element to check if it is a text input
   * @returns True if the element is a editable field.  Otherwise, false.
   */
  const isEditableField = (element) => {
    const { tagName } = element;

    // Check if text input field
    if (tagName.toLowerCase() === 'input') {
      const validTypes = ['text', 'password', 'number', 'email', 'tel', 'url', 'search', 'date', 'datetime', 'datetime-local', 'time', 'month', 'week'];
      const inputType = element.type;
      return validTypes.indexOf(inputType) >= 0;
    }

    // Check if textarea or select element
    if (['textarea', 'select'].indexOf(tagName.toLowerCase()) >= 0) {
      return true;
    }

    // Check if content editable div
    if (element.hasAttribute('contentEditable') && element.getAttribute('contentEditable') !== false) {
      return true;
    }

    return false;
  };

  const handleKeyDown = (event) => {
    const key = event.keyCode;
    const targetElement = event.target;

    if (isFocusTrapEnabled) {
      switch (key) {
        case KeyCode.KEY_ESCAPE:
          deactivateFocusTrap();
          break;
        default:
      }
      event.stopPropagation();
    } else {
      switch (key) {
        case KeyCode.KEY_RETURN:
          // Lock focus into component
          if (isGridContext && hasFocusableElements()) {
            setIsFocusTrapEnabled(true);
            if (gridContext.setCellAriaLiveMessage) {
              gridContext.setCellAriaLiveMessage(intl.formatMessage({ id: 'Terra.table.cell-focus-trapped' }));
            }
            event.stopPropagation();
            event.preventDefault();
          }
          break;
        case KeyCode.KEY_SPACE:
          if (onCellSelect) {
            onCellSelect({
              sectionId, rowId, rowIndex: (rowIndex - 1), columnId, columnIndex, isShiftPressed: event.shiftKey, isMetaPressed: event.metaKey || event.ctrlKey, isCellSelectable: (!isMasked && isSelectable),
            });
          }

          // Allow default behavior if the event target is an editable field
          if (!isEditableField(targetElement)) {
            event.preventDefault(); // prevent the default scrolling
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
        {maskedLabel || intl.formatMessage({ id: 'Terra.table.maskedCell' })}
      </span>
    );
  } else if (!children) {
    cellContent = (
      <span className={cx('no-data-cell', theme.className)}>
        {intl.formatMessage({ id: 'Terra.table.blank' })}
      </span>
    );
  } else {
    cellContent = children;
  }

  const className = cx('cell', {
    masked: isMasked,
    pinned: columnIndex < columnContext.pinnedColumnOffsets.length,
    'last-pinned-column': columnIndex === columnContext.pinnedColumnOffsets.length - 1,
    selectable: isSelectable && !isMasked,
    selected: isSelected && !isMasked,
    highlighted: isHighlighted,
    blank: !children,
  }, theme.className);

  const cellLeftEdge = (columnIndex < columnContext.pinnedColumnOffsets.length) ? columnContext.pinnedColumnOffsets[columnIndex] : null;

  const CellTag = isRowHeader ? 'th' : 'td';

  // eslint-disable-next-line react/forbid-dom-props
  let cellContentComponent = <div className={cx('cell-content', theme.className)} style={{ height }}>{cellContent}</div>;
  // Render FocusTrap container when within a grid context
  if (isGridContext) {
    cellContentComponent = (
      <FocusTrap
        active={isFocusTrapEnabled}
        focusTrapOptions={{
          returnFocusOnDeactivate: true, clickOutsideDeactivates: true, escapeDeactivates: false, onDeactivate: deactivateFocusTrap,
        }}
      >
        {cellContentComponent}
      </FocusTrap>
    );
  }

  // Determine table cell header attribute values
  const sectionHeaderId = sectionId ? `${tableId}-${sectionId} ` : '';
  const rowHeaderId = !isRowHeader ? `${tableId}-rowheader-${rowId} ` : '';
  const columnHeaderId = `${tableId}-${columnId}`;

  return (
    <CellTag
      id={isRowHeader ? `${tableId}-rowheader-${rowId}` : undefined}
      ref={isGridContext ? cellRef : undefined}
      aria-selected={isSelected || undefined}
      aria-label={ariaLabel}
      headers={`${sectionHeaderId}${rowHeaderId}${columnHeaderId}`}
      tabIndex={isGridContext ? -1 : undefined}
      className={className}
      {...(isRowHeader && { scope: 'row', role: 'rowheader' })}
      onMouseDown={onCellSelect ? onMouseDown : undefined}
      onKeyDown={handleKeyDown}
      // eslint-disable-next-line react/forbid-component-props
      style={{ left: cellLeftEdge }}
    >
      {cellContentComponent}
      {isInteractable && <VisuallyHiddenText text={intl.formatMessage({ id: 'Terra.table.cell-interactable' })} />}
    </CellTag>
  );
}

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

export default React.memo(injectIntl(Cell));
