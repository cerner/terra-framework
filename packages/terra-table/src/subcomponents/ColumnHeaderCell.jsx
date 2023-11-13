import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import * as KeyCode from 'keycode-js';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { IconUp, IconDown, IconError } from 'terra-icon';

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
   * Boolean value indicating whether or not the column header is selectable.
  */
  isSelectable: PropTypes.bool,

  /**
   * Boolean value indicating whether or not the column header is resizable.
   */
  isResizable: PropTypes.bool,

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
   * The cell's row position in the grid. This is zero based.
   */
  rowIndex: PropTypes.number,

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
  isResizable: false,
  isResizeActive: false,
};

const ColumnHeaderCell = (props) => {
  const {
    id,
    tableId,
    displayName,
    sortIndicator,
    hasError,
    isActive,
    isSelectable,
    isResizable,
    tableHeight,
    isResizeActive,
    columnResizeIncrement,
    width,
    minimumWidth,
    maximumWidth,
    headerHeight,
    onColumnSelect,
    intl,
    rowIndex,
    columnIndex,
    onResizeMouseDown,
    onResizeHandleChange,
  } = props;

  const columnContext = useContext(ColumnContext);
  const gridContext = useContext(GridContext);

  const columnHeaderCellRef = useRef();

  const [isResizeHandleActive, setResizeHandleActive] = useState(false);

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
  const handleMouseDown = (event) => {
    onColumnSelect(id, { row: rowIndex, col: columnIndex });
    event.stopPropagation();
  };

  // Handle column header selection via the space bar.
  const handleKeyDown = (event) => {
    const key = event.keyCode;
    switch (key) {
      case KeyCode.KEY_SPACE:
      case KeyCode.KEY_RETURN:
        if (isSelectable && onColumnSelect) {
          onColumnSelect(id, { row: rowIndex, col: columnIndex }, isSelectable);
        }
        event.stopPropagation();
        event.preventDefault(); // prevent the default scrolling
        break;
      case KeyCode.KEY_LEFT:
        if (isResizable && isResizeHandleActive && isGridContext) {
          columnHeaderCellRef.current.focus();
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

  let sortIndicatorIcon;
  const errorIcon = hasError && <IconError a11yLabel={intl.formatMessage({ id: 'Terra.table.columnError' })} className={cx('error-icon')} />;

  // Add the sort indicator based on the sort direction
  if (sortIndicator === SortIndicators.ASCENDING) {
    sortIndicatorIcon = <IconUp />;
  } else if (sortIndicator === SortIndicators.DESCENDING) {
    sortIndicatorIcon = <IconDown />;
  }

  // Retrieve current theme from context
  const theme = useContext(ThemeContext);

  const cellLeftEdge = (columnIndex < columnContext.pinnedColumnOffsets.length) ? columnContext.pinnedColumnOffsets[columnIndex] : null;
  const dividerLeftEdge = width - 1;

  const pinnedColumnsDivider = columnIndex === columnContext.pinnedColumnOffsets.length - 1
    ? (
      <div
        className={cx('pinned-columns-divider')}
        style={{ height: tableHeight, left: dividerLeftEdge }} // eslint-disable-line react/forbid-dom-props
      />
    )
    : null;

  // For tables, we want elements to be tabbable when selectable, but not anytime else.
  let buttonTabIndex = isSelectable ? 0 : undefined;
  if (isGridContext) {
    // For grids, we only want 1 tab stop. We then define the focus behavior in DataGrid.
    buttonTabIndex = isSelectable && displayName ? -1 : undefined;
  }

  // Determine if button element is required for column header
  const hasButtonElement = isSelectable && displayName;

  return (
  /* eslint-disable react/forbid-dom-props */
    <th
      ref={!hasButtonElement ? columnHeaderCellRef : undefined}
      id={`${tableId}-${id}`}
      key={id}
      className={cx('column-header', theme.className, {
        selectable: isSelectable,
        pinned: columnIndex < columnContext.pinnedColumnOffsets.length,
      })}
      tabIndex={isGridContext && !hasButtonElement ? -1 : undefined}
      role="columnheader"
      scope="col"
      title={displayName}
      aria-sort={sortIndicator}
      onMouseDown={isSelectable && onColumnSelect ? handleMouseDown : undefined}
      onKeyDown={(isSelectable || isResizable) ? handleKeyDown : undefined}
      style={{ width: `${width}px`, height: headerHeight, left: cellLeftEdge }} // eslint-disable-line react/forbid-dom-props
    >
      <div
        className={cx('header-container')}
        {...hasButtonElement && { ref: columnHeaderCellRef, role: 'button' }}
        tabIndex={buttonTabIndex}
      >
        {errorIcon}
        <span>{displayName}</span>
        {sortIndicatorIcon}
      </div>
      { isResizable && (
      <ColumnResizeHandle
        columnIndex={columnIndex}
        columnText={displayName}
        columnWidth={width}
        columnResizeIncrement={columnResizeIncrement}
        isActive={isResizeHandleActive}
        setIsActive={setResizeHandleActive}
        height={tableHeight}
        minimumWidth={minimumWidth}
        maximumWidth={maximumWidth}
        onResizeMouseDown={onResizeHandleMouseDown}
        onResizeMouseUp={onResizeHandleMouseUp}
        onResizeHandleChange={onResizeHandleChange}
      />
      )}
      {pinnedColumnsDivider}
    </th>
  );
};

ColumnHeaderCell.propTypes = propTypes;
ColumnHeaderCell.defaultProps = defaultProps;
export default React.memo(injectIntl(ColumnHeaderCell));
