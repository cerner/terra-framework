/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useState, useCallback, useEffect, useRef,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ResizeObserver from 'resize-observer-polyfill';
import ColumnHeaderCell from './ColumnHeaderCell';
import columnShape from '../proptypes/columnShape';
import styles from './ColumnHeader.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Unique identifier for the parent table
   */
  tableId: PropTypes.string.isRequired,

  /**
   * Data for columns. By default, columns will be presented in the order given.
   */
  columns: PropTypes.arrayOf(columnShape).isRequired,

  /**
   * String that specifies the column header height. Any valid CSS height value accepted.
   */
  headerHeight: PropTypes.string.isRequired,

  /**
  * Number that specifies the height of the table in pixels.
  */
  tableHeight: PropTypes.number,

  /**
   * Column index for cell that can receive tab focus.
   */
  activeColumnIndex: PropTypes.number,

  /**
   * Row index for cell that can receive tab focus.
   */
  focusedRowIndex: PropTypes.number,

  /**
   * CallBack to trigger re-focusing when focused row or col didn't change, but focus update is needed
   */
  triggerFocus: PropTypes.func,

  /**
   * Specifies if resize handle should be active.
   */
  isActiveColumnResizing: PropTypes.bool,
  /**
   * Numeric increment in pixels to adjust column width when resizing via the keyboard.
   */
  columnResizeIncrement: PropTypes.number,

  /**
   * Function that is called when a selectable header cell is selected. Parameters:
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
   * Boolean indicating whether or not the table columns should be displayed.
   */
  hasVisibleColumnHeaders: PropTypes.bool,

  /**
   * A Boolean value specifying whether the table has actions in column headers.
   */
  hasColumnHeaderActions: PropTypes.bool,
};

const defaultProps = {
  hasVisibleColumnHeaders: true,
};

const ColumnHeader = (props) => {
  const {
    tableId,
    activeColumnIndex,
    focusedRowIndex,
    triggerFocus,
    isActiveColumnResizing,
    columnResizeIncrement,
    columns,
    headerHeight,
    tableHeight,
    onColumnSelect,
    onResizeMouseDown,
    onResizeHandleChange,
    hasVisibleColumnHeaders,
    hasColumnHeaderActions,
  } = props;

  // Header container height observer ---------------

  const headerRef = useRef();
  const [headerContainerHeight, setHeaderContainerHeight] = useState(0);
  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      const heightOffset = hasColumnHeaderActions ? 2 : 1; // needs 2 pixels if actions row exists in headers to avoid scroll
      setHeaderContainerHeight(headerRef.current.offsetHeight - heightOffset);
    });
    resizeObserver.observe(headerRef.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [headerRef]);

  // Active resize handle management -------------------

  // The active column and neighbour cell have to be known to both header and action cells as they share resize handle.
  const [activeResizeHandlerColumnId, setActiveResizeHandlerColumnId] = useState();
  const resizeHandleStateSetter = useCallback((columnId) => {
    if (columnId !== activeResizeHandlerColumnId) {
      setActiveResizeHandlerColumnId(columnId);
    }
  }, [activeResizeHandlerColumnId]);

  // Is needed to adjust the header column resize handler to accommodate actions header height
  const initialHeight = hasColumnHeaderActions ? `${headerContainerHeight}px` : undefined;

  return (
    <thead ref={headerRef}>
      <tr
        aria-rowindex={1}
        data-row-id={`${tableId}-header-row`}
        className={cx('column-header-row', { hidden: !hasVisibleColumnHeaders })}
        height={hasVisibleColumnHeaders ? headerHeight : undefined}
      >
        {columns.map((column, columnIndex) => (
          <ColumnHeaderCell
            key={`${column.id}-headerCell`}
            id={`${column.id}-headerCell`}
            tableId={tableId}
            columnId={column.id}
            columnIndex={columnIndex}
            displayName={column.displayName}
            isDisplayVisible={column.isDisplayVisible}
            width={column.width}
            minimumWidth={column.minimumWidth}
            maximumWidth={column.maximumWidth}
            headerHeight={headerHeight}
            isResizable={hasVisibleColumnHeaders && column.isResizable}
            initialHeight={initialHeight}
            isResizeHandleActive={activeResizeHandlerColumnId === column.id}
            resizeHandleStateSetter={resizeHandleStateSetter}
            isSelectable={hasVisibleColumnHeaders && column.isSelectable}
            tableHeight={tableHeight}
            triggerFocus={triggerFocus}
            isActive={activeColumnIndex === columnIndex && focusedRowIndex === 0} // can be 2 rows in header
            isResizeActive={activeColumnIndex === columnIndex && isActiveColumnResizing}
            columnResizeIncrement={columnResizeIncrement}
            hasError={column.hasError}
            sortIndicator={column.sortIndicator}
            onColumnSelect={onColumnSelect}
            onResizeMouseDown={onResizeMouseDown}
            onResizeHandleChange={onResizeHandleChange}
            columnHighlightColor={column.columnHighlightColor}
            columnHighlightDescription={column.columnHighlightDescription}
          />
        ))}
      </tr>
      {/* Actions row */}
      {hasColumnHeaderActions && hasVisibleColumnHeaders && (
        <tr
          aria-rowindex={2}
          data-row-id={`${tableId}-header-actions-row`}
          className={cx('column-actions-row', { hidden: !hasVisibleColumnHeaders })}
        >
          {columns.map((column, columnIndex) => (
            <ColumnHeaderCell
              key={`${column.id}-actionCell`}
              id={`${column.id}-actionCell`}
              tableId={tableId}
              columnId={column.id}
              isActionCell
              action={column.action}
              columnIndex={columnIndex}
              isDisplayVisible={column.isDisplayVisible}
              width={column.width}
              minimumWidth={column.minimumWidth}
              maximumWidth={column.maximumWidth}
              headerHeight={headerHeight}
              isResizable={hasVisibleColumnHeaders && column.isResizable}
              ownsResizeHandle={focusedRowIndex === 1}
              isResizeHandleActive={activeResizeHandlerColumnId === column.id}
              resizeHandleStateSetter={resizeHandleStateSetter}
              // does not need isSelectable prop for actions row
              isActive={activeColumnIndex === columnIndex && focusedRowIndex === 1}
              isResizeActive={activeColumnIndex === columnIndex && isActiveColumnResizing}
            />
          ))}
        </tr>
      )}
    </thead>
  );
};

ColumnHeader.propTypes = propTypes;
ColumnHeader.defaultProps = defaultProps;
export default React.memo(ColumnHeader);
