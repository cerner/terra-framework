/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import * as KeyCode from 'keycode-js';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import Button from 'terra-button';
import { IconUp, IconDown, IconError } from 'terra-icon';
import { validateAction } from '../proptypes/validators';
import ColumnResizeHandle from './ColumnResizeHandle';
import GridContext, { GridConstants } from '../utils/GridContext';
import { SortIndicators } from '../proptypes/columnShape';
import ColumnContext from '../utils/ColumnContext';
import styles from './ColumnHeaderCell.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Required string representing a unique identifier for the column header cell.
   */
  id: PropTypes.string.isRequired,

  /**
   * Unique identifier for the parent table
   */
  tableId: PropTypes.string.isRequired,

  /**
   * Unique identifier for the column
   */
  columnId: PropTypes.string.isRequired,

  /**
   * String of text to render within the column header cell.
   */
  displayName: PropTypes.string,

  /**
   * A string indicating which sorting indicator should be rendered. If not provided, no sorting indicator will be rendered.
   * If a `component` value is specified, `sortIndicator` will be ignored. One of `ascending`, `descending`.
   */
  sortIndicator: PropTypes.oneOf(Object.values(SortIndicators)),

  /**
   * Boolean value indicating whether or not the column has an error in the data.
   */
  hasError: PropTypes.bool,

  /**
   * Number that specifies the minimum column width in pixels.
   */
  minimumWidth: PropTypes.number,

  /**
   * Number that specifies the maximum column width in pixels.
   */
  maximumWidth: PropTypes.number,

  /**
   * Boolean value indicating whether or not the header cell is focused.
   */
  isActive: PropTypes.bool,

  /**
   * Boolean value indicating whether or not the header cell text is displayed in the cell.
   */
  isDisplayVisible: PropTypes.bool,

  /**
   * Boolean value indicating whether or not the column header is selectable.
   */
  isSelectable: PropTypes.bool,

  /**
   * Boolean value indicating whether or not the column header cell is an action cell.
   * The action cell might be a placeholder cell without actual action button
   */
  isActionCell: PropTypes.bool,

  /**
   * Data for action cell.
   */
  action: validateAction,

  /**
   * Boolean value indicating whether or not the column header is resizable.
   */
  isResizable: PropTypes.bool,

  /**
   * Boolean value indicating whether or not the column resize handle is active.
   */
  isResizeHandleActive: PropTypes.bool,

  /**
   * A function to be executed upon the resize handler activation to pass its data to parent component.
   * @param {element} leftNeighborCell - `columnHeaderCellRef.current`
   * Skip both parameters to indicate that there is no active resize handle at the moment.
   */
  resizeHandleStateSetter: PropTypes.func,

  /**
   * String that specifies the init height for the resize handler to accomodate actions row.
   */
  resizeHandlerInitHeight: PropTypes.string,

  /**
   * A `ref current` for neighbouring the active resize handle element, which needs to get focus on left arrow key event.
   */
  activeResizeHandlerNeighborCell: PropTypes.object,

  /**
   * Height of the parent table.
   */
  tableHeight: PropTypes.number,

  /**
   * Boolean value indicating whether or not the column header is resizable.
   */
  isResizeActive: PropTypes.bool,

  /**
   * Numeric increment in pixels to adjust column width when resizing via the keyboard.
   */
  columnResizeIncrement: PropTypes.number,

  /**
   * String that specifies the default width for columns in the grid. Any valid CSS width value is accepted.
   */
  width: PropTypes.number.isRequired,

  /**
   * String that specifies the column height. Any valid CSS height value accepted.
  */
  headerHeight: PropTypes.string.isRequired,

  /**
   * The cell's column position in the grid. This is zero based.
   */
  columnIndex: PropTypes.number,

  /**
   * Function that is called when a selectable header cell is selected. Parameters:
   * @param {string} rowId rowId
   * @param {string} columnId columnId
   */
  onColumnSelect: PropTypes.func,

  /**
   * Function that is called when the mouse down event is triggered on the column resize handle.
   */
  onResizeMouseDown: PropTypes.func,

  /**
   * Function that is called when the the keyboard is used to adjust the column size.
   */
  onResizeHandleChange: PropTypes.func,

  /**
   * @private
   * Object containing intl APIs
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }),
};

const defaultProps = {
  hasError: false,
  isSelectable: false,
  isActive: false,
  isDisplayVisible: true,
  isResizable: false,
  isResizeActive: false,
};

const ColumnHeaderCell = (props) => {
  const {
    id,
    tableId,
    isActionCell,
    action,
    displayName,
    sortIndicator,
    hasError,
    isActive,
    isDisplayVisible,
    isSelectable,
    isResizable,
    isResizeHandleActive,
    resizeHandleStateSetter,
    resizeHandlerInitHeight,
    activeResizeHandlerNeighborCell,
    columnId,
    tableHeight,
    isResizeActive,
    columnResizeIncrement,
    width,
    minimumWidth,
    maximumWidth,
    headerHeight,
    onColumnSelect,
    intl,
    columnIndex,
    onResizeMouseDown,
    onResizeHandleChange,
  } = props;

  const columnContext = useContext(ColumnContext);
  const gridContext = useContext(GridContext);

  const columnHeaderCellRef = useRef();

  const setResizeHandleActive = useCallback((setActive) => {
    if (setActive) {
      resizeHandleStateSetter(columnId, columnHeaderCellRef?.current);
    } else {
      resizeHandleStateSetter();
    }
  }, [columnId, resizeHandleStateSetter]);

  const isGridContext = gridContext.role === GridConstants.GRID;

  useEffect(() => {
    if (isActive) {
      if (isResizable && isResizeActive) {
        setResizeHandleActive(true);
      } else {
        columnHeaderCellRef.current.focus();
        setResizeHandleActive(false);
      }
    } else {
      setResizeHandleActive(false);
    }
  }, [isActive, isResizable, isResizeActive]);

  const onResizeHandleMouseDown = useCallback((event) => {
    event.stopPropagation();
    if (onResizeMouseDown) {
      onResizeMouseDown(event, columnIndex, columnHeaderCellRef.current.offsetWidth);
    }
  }, [columnIndex, onResizeMouseDown]);

  // Restore focus to column header after resize action is completed.
  const onResizeHandleMouseUp = useCallback(() => {
    columnHeaderCellRef.current.focus();
    setResizeHandleActive(false);
  }, []);

  // Handle column header selection via the mouse click.
  const handleMouseDown = () => {
    onColumnSelect(columnId);
  };

  // Handle column header selection via the space bar.
  const handleKeyDown = (event, callback) => {
    const key = event.keyCode;
    switch (key) {
      case KeyCode.KEY_SPACE:
      case KeyCode.KEY_RETURN:
        if (callback) {
          // for action button
          callback();
          break;
        } else if (isSelectable && onColumnSelect) {
          onColumnSelect(columnId);
        }
        event.stopPropagation();
        event.preventDefault(); // prevent the default scrolling
        break;
      case KeyCode.KEY_LEFT:
        if (isResizable && isResizeHandleActive && isGridContext) {
          activeResizeHandlerNeighborCell?.focus();
          setResizeHandleActive(false);
          event.stopPropagation();
          event.preventDefault();
        }
        break;
      case KeyCode.KEY_RIGHT:
        if (isResizable && !isResizeHandleActive && isGridContext) {
          setResizeHandleActive(true);
          event.stopPropagation();
          event.preventDefault();
        }
        break;
      default:
    }
  };

  const errorIcon = hasError && <IconError className={cx('error-icon')} />;

  // Add the sort indicator based on the sort direction
  let sortIndicatorIcon;
  let sortDescription = '';
  if (sortIndicator === SortIndicators.ASCENDING) {
    sortIndicatorIcon = <IconUp />;
    sortDescription = intl.formatMessage({ id: 'Terra.table.sort-ascending' });
  } else if (sortIndicator === SortIndicators.DESCENDING) {
    sortIndicatorIcon = <IconDown />;
    sortDescription = intl.formatMessage({ id: 'Terra.table.sort-descending' });
  }

  // Retrieve current theme from context
  const theme = useContext(ThemeContext);

  // Calculate cell left position for pinned columns due to their sticky position style
  const cellLeftEdge = (columnIndex < columnContext.pinnedColumnOffsets.length) ? columnContext.pinnedColumnOffsets[columnIndex] : null;

  // For tables, we want elements to be tabbable when selectable, but not anytime else.
  let buttonTabIndex = isSelectable ? 0 : undefined;
  if (isGridContext) {
    // For grids, we only want 1 tab stop. We then define the focus behavior in DataGrid.
    buttonTabIndex = isSelectable && displayName ? -1 : undefined;
  }

  // Determine if button element is required for column header
  const hasButtonElement = isSelectable && displayName;

  // Format header description for screenreader
  let headerDescription = displayName;
  headerDescription += errorIcon ? `, ${intl.formatMessage({ id: 'Terra.table.columnError' })}` : '';
  headerDescription += sortDescription ? `, ${sortDescription}` : '';

  // set focus in action cell to either button or resize handler
  /*
  const distributeFocusWithinActionCell = () => {
    columnHeaderCellRef?.current?.childNodes[0].focus();
    columnHeaderCellRef?.current?.childNodes[0].setAttribute('aria-hidden', false);
  };

  const onBlur = () => {
    columnHeaderCellRef?.current?.childNodes[0].setAttribute('aria-hidden', true);
  }; */

  const isPinnedColumn = columnIndex < columnContext.pinnedColumnOffsets.length;
  const CellTag = !isActionCell ? 'th' : 'td';

  // Create cell content
  let cellContent;
  if (isActionCell) {
    if (action) {
      cellContent = (
        <Button
          variant="de-emphasis"
          ref={columnHeaderCellRef}
          isCompact
          onClick={action.onClick}
          onKeyDown={(event) => handleKeyDown(event, action?.onClick)}
          text={action.label}
        />
      );
    } else {
      cellContent = (
        <span className={cx('display-text', 'hidden')}>
          {intl.formatMessage({ id: 'Terra.table.noAction' })}
        </span>
      );
    }
  } else {
    cellContent = (
      <div
        className={cx('header-container')}
        {...hasButtonElement && { ref: columnHeaderCellRef, role: 'button' }}
        tabIndex={buttonTabIndex}
      >
        {errorIcon}
        <span aria-hidden className={cx('display-text', { hidden: !isDisplayVisible })}>{displayName}</span>
        {sortIndicatorIcon}
        <VisuallyHiddenText text={headerDescription} />
      </div>
    );
  }

  return (
  /* eslint-disable react/forbid-dom-props */
    <CellTag
      ref={!hasButtonElement ? columnHeaderCellRef : undefined}
      id={`${tableId}-${id}`}
      key={id}
      className={cx('column-header', theme.className, {
        'action-cell': isActionCell,
        selectable: isSelectable,
        pinned: isPinnedColumn,
        'last-pinned-column': columnIndex === columnContext.pinnedColumnOffsets.length - 1,
      })}
      tabIndex={isGridContext && !hasButtonElement ? -1 : undefined}
      role={!isActionCell ? 'columnheader' : undefined}
      scope={!isActionCell ? 'col' : undefined}
      aria-owns={!isActionCell ? `${columnId}-actionCell` : undefined}
      title={!isActionCell ? displayName : action?.label}
      onMouseDown={isSelectable && onColumnSelect ? handleMouseDown : undefined}
      onKeyDown={(isSelectable || isResizable) ? handleKeyDown : undefined}
      // eslint-disable-next-line react/forbid-component-props
      style={{ width: `${width}px`, height: isActionCell ? 'auto' : headerHeight, left: cellLeftEdge }}
      // onFocus={isActionCell ? distributeFocusWithinActionCell : undefined}
      // onBlur={isActionCell ? onBlur : undefined}
    >
      {cellContent}
      { isResizable && !isActionCell && (
      <ColumnResizeHandle
        columnIndex={columnIndex}
        columnText={displayName}
        columnWidth={width}
        columnResizeIncrement={columnResizeIncrement}
        isActive={isResizeHandleActive}
        setIsActive={setResizeHandleActive}
        height={tableHeight}
        resizeHandlerInitHeight={resizeHandlerInitHeight}
        minimumWidth={minimumWidth}
        maximumWidth={maximumWidth}
        onResizeMouseDown={onResizeHandleMouseDown}
        onResizeMouseUp={onResizeHandleMouseUp}
        onResizeHandleChange={onResizeHandleChange}
      />
      )}
    </CellTag>
  );
};

ColumnHeaderCell.propTypes = propTypes;
ColumnHeaderCell.defaultProps = defaultProps;
export default React.memo(injectIntl(ColumnHeaderCell));
