import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
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
  activeRowIndex: PropTypes.number,
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
  hasColumnHeaderActions: true, // TODO - remove this to accomodate actual actions
};

const ColumnHeader = (props) => {
  const {
    tableId,
    activeColumnIndex,
    activeRowIndex,
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

  // TODO - remove this once actual actions added
  const defaultAction = {
    label: 'action label',
    onCall: () => alert('Action called!'),
  };

  return (
    <thead>
      <tr
        aria-rowindex={1}
        data-row-id={`${tableId}-header-row`}
        className={cx('column-header-row', { hidden: !hasVisibleColumnHeaders })}
        height={hasVisibleColumnHeaders ? headerHeight : undefined}
      >
        {columns.map((column, columnIndex) => (
          <ColumnHeaderCell
            key={column.id}
            id={column.id}
            tableId={tableId}
            hasColumnHeaderActions={hasColumnHeaderActions}
            columnIndex={columnIndex}
            displayName={column.displayName}
            isDisplayVisible={column.isDisplayVisible}
            width={column.width}
            minimumWidth={column.minimumWidth}
            maximumWidth={column.maximumWidth}
            headerHeight={headerHeight}
            isResizable={hasVisibleColumnHeaders && column.isResizable}
            isSelectable={hasVisibleColumnHeaders && column.isSelectable}
            tableHeight={tableHeight}
            isActive={activeColumnIndex === columnIndex && activeRowIndex === 0} // can be 2 rows in header
            isResizeActive={activeColumnIndex === columnIndex && isActiveColumnResizing}
            columnResizeIncrement={columnResizeIncrement}
            hasError={column.hasError}
            sortIndicator={column.sortIndicator}
            onColumnSelect={onColumnSelect}
            onResizeMouseDown={onResizeMouseDown}
            onResizeHandleChange={onResizeHandleChange}
          />
        ))}
      </tr>
      {/* Actions row */}
      {hasColumnHeaderActions && hasVisibleColumnHeaders && (
        <tr
          aria-rowindex={2}
          data-row-id={`${tableId}-header-actions-row`}
          className={cx('column-header-row', { hidden: !hasVisibleColumnHeaders })}
          // TODO - check if needs height prop
        >
          {columns.map((column, columnIndex) => (
            <ColumnHeaderCell
              key={`column-${column.id}-action`}
              id={`column-${column.id}-action`}
              tableId={tableId}
              // TODO if needs hasColumnHeaderActions prop add here
              isActionCell
              action={column.action || (columnIndex % 2 === 0 ? undefined : defaultAction)}
              columnIndex={columnIndex}
              // TOD - for now displayName is passed as action prop, check if needs change
              isDisplayVisible={column.isDisplayVisible}
              width={column.width}
              minimumWidth={column.minimumWidth}
              maximumWidth={column.maximumWidth}
              headerHeight={headerHeight}
              isResizable={hasVisibleColumnHeaders && column.isResizable}
              // TODO - remove when finished if doesn't need isSelectable prop
              tableHeight={tableHeight}
              isActive={activeColumnIndex === columnIndex && activeRowIndex === 1}
              isResizeActive={activeColumnIndex === columnIndex && isActiveColumnResizing}
              columnResizeIncrement={columnResizeIncrement}
              // TODO - remove when finished if doesn't need hasError prop
              // TODO - remove when finished if doesn't need sortIndicator prop
              // TODO - remove when finished if doesn't need onColumnSelect prop
              onResizeMouseDown={onResizeMouseDown}
              onResizeHandleChange={onResizeHandleChange}
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
