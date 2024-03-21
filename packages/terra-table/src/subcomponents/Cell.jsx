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
import { ColumnHighlightColor } from '../proptypes/columnShape';
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

  /**
   * String that specifies the minimum height for the rows on the table. rowHeight takes precedence if valid CSS value is passed.
   * With this property the height of the cell will grow to fit the cell content.
   */
  rowMinimumHeight: PropTypes.string,

  /**
   * A zero-based index indicating which column represents the row header.
   * Index can be set to -1 if row headers are not required.
   */
  rowHeaderIndex: PropTypes.number,

  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
  /**
   * @private
   * Id of the first row in table
   */
  firstRowId: PropTypes.string,

  /**
   * @private
   * Id of the last row in table
   */
  lastRowId: PropTypes.string,

  /**
   * @private
   * The color to be used for highlighting a column.
   */
  columnHighlightColor: PropTypes.oneOf(Object.values(ColumnHighlightColor)),

  /**
   * @private
   * The column span value for a column.
   */
  columnSpan: PropTypes.number,
  
  /**
   * Enables row selection capabilities for the table.
   * Use 'single' for single row selection and 'multiple' for multi-row selection.
   */
  rowSelectionMode: PropTypes.string,
};

const defaultProps = {
  isMasked: false,
  isRowHeader: false,
  isSelectable: false,
  sectionId: '',
};

function Cell(props) {
  const {
    ariaLabel,
    children,
    columnId,
    columnIndex,
    height,
    intl,
    isHighlighted,
    isMasked,
    isRowHeader,
    isSelectable,
    isSelected,
    maskedLabel,
    onCellSelect,
    rowHeaderIndex,
    rowId,
    rowIndex,
    rowMinimumHeight,
    sectionId,
    tableId,
    firstRowId,
    lastRowId,
    columnHighlightColor,
    columnSpan,
    rowSelectionMode,
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

  /**
  * Determine if a cell only has a single button or hyperlink
  * @param {HTMLElement} element - The element to check if it contains only a button or hyperlink
  * @returns True if the element only has a single button or hyperlink. Otherwise, false.
  */
  const hasOnlySingleButtonOrHyperlink = (node) => {
    const focusableElements = getFocusableElements(node);
    if (focusableElements.length > 1) {
      return false;
    }

    return node.querySelector('a, button');
  };

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

  /**
   * Handles the onDeactivate callback for FocusTrap component
   */
  const deactivateFocusTrap = () => {
    setIsFocusTrapEnabled(false);
    if (gridContext.setCellAriaLiveMessage) {
      gridContext.setCellAriaLiveMessage(intl.formatMessage({ id: 'Terra.table.resume-navigation' }));
    }
  };

  useEffect(() => {
    if (isGridContext) {
      setIsInteractable(hasFocusableElements());
    }
  }, [isGridContext]);

  const handleMouseDown = (event) => {
    if (rowSelectionMode && (event.button === 2 || hasFocusableElements())) {
      return;
    }
    if (!isFocusTrapEnabled) {
      onCellSelect({
        sectionId,
        rowId,
        rowIndex: (rowIndex - 1),
        columnId,
        columnIndex,
        isShiftPressed: event.shiftKey,
        isMetaPressed: event.metaKey || event.ctrlKey,
        isCellSelectable: (!isMasked && isSelectable),
      }, event);
    }
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
            // If the current cell has only a single button or hyperlink component, do not enable focus trap
            if (hasOnlySingleButtonOrHyperlink(cellRef.current)) {
              break;
            }

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
            if (rowSelectionMode && hasFocusableElements()) {
              return;
            }
            onCellSelect({
              sectionId,
              rowId,
              rowIndex: (rowIndex - 1),
              columnId,
              columnIndex,
              isShiftPressed: event.shiftKey,
              isMetaPressed: event.metaKey || event.ctrlKey,
              isCellSelectable: (!isMasked && isSelectable),
            }, event);
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

  // Added to check if rowHeight is defined, it will take precedence. Otherwise the minimum row height would be used.
  const heightProperties = (height) ? {
    height,
  } : { minHeight: rowMinimumHeight };

  // eslint-disable-next-line react/forbid-dom-props
  let cellContentComponent = (<div className={cx('cell-content', theme.className)} style={{ ...heightProperties }}>{cellContent}</div>);

  // Render FocusTrap container when within a grid context
  if (isGridContext) {
    cellContentComponent = (
      <FocusTrap
        active={isFocusTrapEnabled}
        focusTrapOptions={{
          returnFocusOnDeactivate: true,
          clickOutsideDeactivates: true,
          escapeDeactivates: false,
          onDeactivate: deactivateFocusTrap,
        }}
      >
        {cellContentComponent}
      </FocusTrap>
    );
  }

  // Determine table cell header attribute values
  const cellLeftEdge = (columnIndex < columnContext.pinnedColumnOffsets.length) ? columnContext.pinnedColumnOffsets[columnIndex] : null;
  const CellTag = isRowHeader ? 'th' : 'td';
  const columnHeaderId = `${tableId}-${columnId.split('_')[0]}-headerCell`;
  const rowHeaderId = !isRowHeader && rowHeaderIndex !== -1 ? `${tableId}-rowheader-${rowId} ` : '';
  const sectionHeaderId = sectionId ? `${tableId}-${sectionId} ` : '';

  let columnHighlight = {};
  // Column highlighting is not supported for multiple column spans
  if (columnHighlightColor && (!columnSpan || columnSpan === 1)) {
    columnHighlight = {
      [`column-highlight-${columnHighlightColor.toLowerCase()}`]: true,
      [`first-highlight-${columnHighlightColor.toLowerCase()}`]: rowId === firstRowId,
      [`last-highlight-${columnHighlightColor.toLowerCase()}`]: rowId === lastRowId,
    };
  }

  const className = cx('cell', {
    masked: isMasked,
    pinned: columnIndex < columnContext.pinnedColumnOffsets.length,
    'last-pinned-column': columnIndex === columnContext.pinnedColumnOffsets.length - 1,
    selectable: isSelectable && !isMasked,
    selected: isSelected && !isMasked,
    highlighted: isHighlighted,
    blank: !children,
    ...columnHighlight,
  }, theme.className);

  return (
    <CellTag
      id={isRowHeader ? `${tableId}-rowheader-${rowId}` : undefined}
      ref={isGridContext || rowSelectionMode ? cellRef : undefined}
      aria-selected={isSelected || undefined}
      aria-label={ariaLabel}
      headers={`${sectionHeaderId}${rowHeaderId}${columnHeaderId}`}
      tabIndex={isGridContext ? -1 : undefined}
      className={className}
      onMouseDown={onCellSelect ? handleMouseDown : undefined}
      onKeyDown={handleKeyDown}
      // eslint-disable-next-line react/forbid-component-props
      style={{ left: cellLeftEdge }}
      {...(isRowHeader && { scope: 'row', role: 'rowheader' })}
    >
      {cellContentComponent}
      {isInteractable && <VisuallyHiddenText text={intl.formatMessage({ id: 'Terra.table.cell-interactable' })} />}
    </CellTag>
  );
}

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

export default React.memo(injectIntl(Cell));
