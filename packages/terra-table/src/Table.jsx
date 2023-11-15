import React, {
  useState, useContext, useRef, useCallback, useEffect, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { v4 as uuidv4 } from 'uuid';
import * as KeyCode from 'keycode-js';
import classNames from 'classnames/bind';
import ResizeObserver from 'resize-observer-polyfill';
import ThemeContext from 'terra-theme-context';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import Section from './subcomponents/Section';
import ColumnHeader from './subcomponents/ColumnHeader';
import ColumnContext from './utils/ColumnContext';
import { columnShape } from './proptypes/columnShape';
import ERRORS from './utils/constants';
import GridContext, { GridConstants } from './utils/GridContext';
import rowShape from './proptypes/rowShape';
import validateRowHeaderIndex from './proptypes/validators';

import styles from './Table.module.scss';
import sectionShape from './proptypes/sectionShape';
import getFocusableElements from './utils/focusManagement';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Unique id used to identify the table.
   */
  id: PropTypes.string.isRequired,

  /**
  * Data for content in the body of the table when sections do not exist. Rows will be rendered in the order given.
  * The sections prop will text precedence over this prop.
  */
  rows: PropTypes.arrayOf(rowShape),

  /**
  * Data for content in the body of the table. Sections will be rendered in the order given.
  */
  sections: PropTypes.arrayOf(sectionShape),

  /**
   * String that identifies the element (or elements) that labels the table.
   */
  ariaLabelledBy: PropTypes.string,

  /**
   * String that labels the table for accessibility. If ariaLabelledBy is specified, ariaLabel will not be used.
   */
  ariaLabel: PropTypes.string,

  /**
   * @private
   * Column index for cell that can receive tab focus.
   */
  activeColumnIndex: PropTypes.number,
  /**
   * @private
   * Specifies if resize handle should be active.
   */
  isActiveColumnResizing: PropTypes.bool,

  /**
   * Numeric increment in pixels to adjust column width when resizing via the keyboard.
   */
  columnResizeIncrement: PropTypes.number,

  /**
   * Data for pinned columns. Pinned columns are the stickied leftmost columns of the table.
   * Columns will be presented in the order given.
   */
  pinnedColumns: PropTypes.arrayOf(columnShape),

  /**
   * Data for overflow columns. Overflow columns are rendered in the table's horizontal overflow.
   * Columns will be presented in the order given.
   */
  overflowColumns: PropTypes.arrayOf(columnShape),

  /**
   * Number indicating the default column width in px. This value will be used if no overriding width value is provided on a per-column basis.
   */
  defaultColumnWidth: PropTypes.number,

  /**
   * String that specifies the column height. Any valid CSS height value is accepted.
   */
  columnHeaderHeight: PropTypes.string,

  /**
   * String that specifies the height for the rows in the table. Any valid CSS value is accepted.
   */
  rowHeight: PropTypes.string,

  /**
   * Number indicating the index of the column that represents row header. Index is 0 based and cannot exceed one less than the number of columns in the table.
   */
  rowHeaderIndex: validateRowHeaderIndex,

  /**
   * Function that is called when a resizable column is resized. Parameters:
   * @param {string} columnId columnId
   * @param {string} requestedWidth requestedWidth
   */
  onColumnResize: PropTypes.func,

  /**
   * Callback function that is called when a selectable cell is selected. Parameters:
   * @private
   * @param {string} rowId rowId
   * @param {string} columnId columnId
   */
  onCellSelect: PropTypes.func,

  /**
   * Callback function that is called when one or more rows are selected or unselected. Parameters:
   * @param {string} rowId row id of the selected row
   */
  onRowSelect: PropTypes.func,

  /**
   * Callback function that is called when a selectable column is selected. Parameters:
   *  @param {string} columnId columnId
   */
  onColumnSelect: PropTypes.func,

  /**
   * Function that is called when a collapsible section is selected. Parameters: `onSectionSelect(sectionId)`
   */
  onSectionSelect: PropTypes.func,

  /*
   * Callback function that is called when the row selection column header is selected. Parameters:
   *  @param {string} columnId columnId
   */
  onRowSelectionHeaderSelect: PropTypes.func,

  /**
   * Boolean indicating whether or not the table should allow entire rows to be selectable. An additional column will be
   * rendered to allow for row selection to occur.
   */
  hasSelectableRows: PropTypes.bool,

  /**
   * Boolean indicating whether or not the table columns should be displayed. Setting the value to false will hide the columns,
   * but the voice reader will use the column header values for a11y.
   */
  hasVisibleColumnHeaders: PropTypes.bool,

  /*
   * Boolean specifying whether or not the table should have zebra striping for rows.
   */
  isStriped: PropTypes.bool,

  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const defaultProps = {
  rowHeaderIndex: 0,
  defaultColumnWidth: 200,
  columnHeaderHeight: '2.5rem',
  rowHeight: '2.5rem',
  pinnedColumns: [],
  overflowColumns: [],
  rows: [],
  hasVisibleColumnHeaders: true,
};

const defaultColumnMinimumWidth = 60;
const defaultColumnMaximumWidth = 300;

function Table(props) {
  const {
    id,
    ariaLabelledBy,
    ariaLabel,
    activeColumnIndex,
    isActiveColumnResizing,
    columnResizeIncrement,
    rows,
    sections,
    pinnedColumns,
    overflowColumns,
    onColumnResize,
    defaultColumnWidth,
    columnHeaderHeight,
    rowHeight,
    onColumnSelect,
    onCellSelect,
    onSectionSelect,
    onRowSelect,
    onRowSelectionHeaderSelect,
    hasSelectableRows,
    hasVisibleColumnHeaders,
    isStriped,
    rowHeaderIndex,
    intl,
  } = props;

  if (pinnedColumns.length === 0) {
    // eslint-disable-next-line no-console
    console.warn(ERRORS.PINNED_COLUMNS_UNDEFINED);
  }

  // Manage column resize
  const [tableHeight, setTableHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const activeColumnPageX = useRef(0);
  const activeColumnWidth = useRef(200);
  const tableWidth = useRef(0);

  const [pinnedColumnOffsets, setPinnedColumnOffsets] = useState([0]);

  const tableContainerRef = useRef();
  const tableRef = useRef();
  const [isTableScrollable, setTableScrollable] = useState(false);

  const theme = useContext(ThemeContext);

  const gridContext = useContext(GridContext);
  const isGridContext = gridContext.role === GridConstants.GRID;

  const rowSelectionEffectTriggered = useRef(false);
  const selectedRows = useRef([]);
  const [rowSelectionAriaLiveMessage, setRowSelectionAriaLiveMessage] = useState(null);
  const [rowSelectionModeAriaLiveMessage, setRowSelectionModeAriaLiveMessage] = useState(null);

  // Aria live region message management
  const [columnHeaderAriaLiveMessage, setColumnHeaderAriaLiveMessage] = useState(null);

  const columnContextValue = useMemo(() => ({ pinnedColumnOffsets, setColumnHeaderAriaLiveMessage }), [pinnedColumnOffsets]);

  // Initialize column width properties
  const initializeColumn = (column) => ({
    ...column,
    width: column.width || defaultColumnWidth,
    minimumWidth: column.minimumWidth || defaultColumnMinimumWidth,
    maximumWidth: column.maximumWidth || defaultColumnMaximumWidth,
  });

  // Create row selection column object
  const tableRowSelectionColumn = {
    id: 'table-rowSelectionColumn',
    width: 40,
    isSelectable: !!onRowSelectionHeaderSelect,
    isResizable: false,
  };

  const displayedColumns = (hasSelectableRows ? [tableRowSelectionColumn] : []).concat(pinnedColumns).concat(overflowColumns);
  const [tableColumns, setTableColumns] = useState(displayedColumns.map((column) => initializeColumn(column)));

  const defaultSectionRef = useRef(uuidv4());

  // Create section array from props
  const tableSections = useMemo(() => {
    if (sections) {
      return [...sections];
    }

    return [{ id: defaultSectionRef.current, rows }];
  }, [rows, sections]);

  // Calculate total table row count
  const tableSectionReducer = (rowCount, currentSection) => {
    if (currentSection.id !== defaultSectionRef.current) {
      // eslint-disable-next-line no-param-reassign
      currentSection.sectionRowIndex = rowCount + 1;
      return rowCount + currentSection.rows.length + 1;
    }

    // eslint-disable-next-line no-param-reassign
    currentSection.sectionRowIndex = 0;
    return rowCount + currentSection.rows.length;
  };
  const tableRowCount = tableSections.reduce(tableSectionReducer, 1);

  // -------------------------------------
  // functions

  const handleCellSelection = useCallback((selectionDetails) => {
    if (!isGridContext && onRowSelect) {
      onRowSelect(selectionDetails.rowId);
      return;
    }

    if (onCellSelect) {
      onCellSelect(selectionDetails);
    }
  }, [isGridContext, onCellSelect, onRowSelect]);

  // -------------------------------------
  // useEffect Hooks

  useEffect(() => {
    if (!rowSelectionEffectTriggered.current) {
      rowSelectionEffectTriggered.current = true;
      return;
    }

    // Since the row selection mode has changed, the row selection mode needs to be updated.
    setRowSelectionModeAriaLiveMessage(intl.formatMessage({ id: hasSelectableRows ? 'Terra.table.row-selection-mode-enabled' : 'Terra.table.row-selection-mode-disabled' }));

    setTableColumns(displayedColumns.map((column) => initializeColumn(column)));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasSelectableRows]);

  // useEffect for row updates
  useEffect(() => {
    const previousSelectedRows = [...selectedRows.current];
    const selectableRows = tableSections.flatMap(section => (section.rows.map(row => (row))));
    selectedRows.current = selectableRows.filter((row) => row.isSelected).map(row => (row.id));

    if (previousSelectedRows.length > 0 && selectedRows.current.length === 0) {
      setRowSelectionAriaLiveMessage(intl.formatMessage({ id: 'Terra.table.all-rows-unselected' }));
    } else if (selectedRows.current.length === selectableRows.length) {
      setRowSelectionAriaLiveMessage(intl.formatMessage({ id: 'Terra.table.all-rows-selected' }));
    } else {
      const rowSelectionsAdded = selectedRows.current.filter(row => !previousSelectedRows.includes(row));
      const rowSelectionsRemoved = previousSelectedRows.filter(row => !selectedRows.current.includes(row));
      let selectionUpdateAriaMessage = '';

      if (rowSelectionsAdded.length === 1) {
        const selectedRowLabel = tableRef.current.querySelector(`tr[data-row-id='${rowSelectionsAdded[0]}']`).getAttribute('aria-rowindex');
        selectionUpdateAriaMessage = intl.formatMessage({ id: 'Terra.table.row-selection-template' }, { row: selectedRowLabel });
      } else if (rowSelectionsAdded.length > 1) {
        selectionUpdateAriaMessage = intl.formatMessage({ id: 'Terra.table.multiple-rows-selected' }, { rowCount: rowSelectionsAdded.length });
      }

      if (rowSelectionsRemoved.length === 1) {
        const unselectedRowLabel = tableRef.current.querySelector(`tr[data-row-id='${rowSelectionsRemoved[0]}']`).getAttribute('data-row-id');
        selectionUpdateAriaMessage += intl.formatMessage({ id: 'Terra.table.row-selection-cleared-template' }, { row: unselectedRowLabel });
      } else if (rowSelectionsRemoved.length > 1) {
        selectionUpdateAriaMessage += intl.formatMessage({ id: 'Terra.table.multiple-rows-unselected' }, { rowCount: rowSelectionsRemoved.length });
      }

      if (selectionUpdateAriaMessage) {
        setRowSelectionAriaLiveMessage(selectionUpdateAriaMessage);
      }
    }
  }, [intl, tableSections]);

  // useEffect for row displayed columns
  useEffect(() => {
    setTableColumns(displayedColumns.map((column) => initializeColumn(column)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pinnedColumns, overflowColumns]);

  // useEffect to calculate pinned column offsets
  useEffect(() => {
    const offsetArray = [];
    let cumulativeOffset = 0;
    let lastPinnedColumnIndex;

    // if table has selectable rows but no pinned columns, then set the offset of the first column to 0
    if (hasSelectableRows && pinnedColumns.length === 0) {
      lastPinnedColumnIndex = 0;
      offsetArray.push(cumulativeOffset);
      setPinnedColumnOffsets(offsetArray);
      return;
    }

    if (pinnedColumns.length > 0) {
      offsetArray.push(cumulativeOffset);

      lastPinnedColumnIndex = hasSelectableRows ? pinnedColumns.length : pinnedColumns.length - 1;

      tableColumns.slice(0, lastPinnedColumnIndex).forEach((pinnedColumn) => {
        cumulativeOffset += pinnedColumn.width;
        offsetArray.push(cumulativeOffset);
      });
    }
    setPinnedColumnOffsets(offsetArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tableColumns]);

  // useEffect for managing the table height.
  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      setTableHeight(tableRef.current.offsetHeight - 1);

      const tableContainer = tableContainerRef.current;
      setTableScrollable(tableContainer.scrollWidth > tableContainer.clientWidth
                        || tableContainer.scrollHeight > tableContainer.clientHeight);
    });

    resizeObserver.observe(tableRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [tableRef]);

  // -------------------------------------

  const handleTableRef = useCallback((node) => {
    if (gridContext.tableRef) {
      gridContext.tableRef.current = node;
    }
    tableRef.current = node;
  }, [gridContext.tableRef]);

  const handleContainerRef = useCallback((node) => {
    if (gridContext.tableContainerRef) {
      gridContext.tableContainerRef.current = node;
    }
    tableContainerRef.current = node;
  }, [gridContext.tableContainerRef]);

  // -------------------------------------
  // event handlers

  const handleColumnSelect = useCallback((columnId) => {
    if (columnId === tableRowSelectionColumn.id) {
      if (onRowSelectionHeaderSelect) {
        onRowSelectionHeaderSelect();
      }
    } else if (onColumnSelect) {
      onColumnSelect(columnId);
    }
  }, [onColumnSelect, onRowSelectionHeaderSelect, tableRowSelectionColumn.id]);

  const onResizeMouseDown = useCallback((event, index, resizeColumnWidth) => {
    // Store current table and column values for resize calculations
    tableWidth.current = tableRef.current.offsetWidth;
    activeColumnPageX.current = event.pageX;
    activeColumnWidth.current = resizeColumnWidth;

    // Set the active index to the selected column
    setActiveIndex(index);
  }, []);

  const onMouseMove = (event) => {
    if (activeIndex == null) {
      return;
    }

    // Ensure the new column width falls within the range of the minimum and maximum values
    const diffX = event.pageX - activeColumnPageX.current;
    const { minimumWidth, maximumWidth } = tableColumns[activeIndex];
    const newColumnWidth = Math.min(Math.max(activeColumnWidth.current + diffX, minimumWidth), maximumWidth);

    // Update the width for the column in the state variable
    const newColumns = [...tableColumns];
    newColumns[activeIndex].width = newColumnWidth;
    setTableColumns(newColumns);

    // Update the column and table width
    tableRef.current.style.width = `${tableWidth + (newColumnWidth - activeColumnWidth.current)}px`;
  };

  const onMouseUp = () => {
    if (onColumnResize) {
      onColumnResize(tableColumns[activeIndex].id, tableColumns[activeIndex].width);
    }
    // Remove active index
    setActiveIndex(null);
  };

  const onResizeHandleChange = useCallback((columnIndex, increment) => {
    const { minimumWidth, maximumWidth, width } = tableColumns[columnIndex];
    const newColumnWidth = Math.min(Math.max(width + increment, minimumWidth), maximumWidth);

    // Update the width for the column in the state variable
    const newGridColumns = [...tableColumns];
    newGridColumns[columnIndex].width = newColumnWidth;
    setTableColumns(newGridColumns);

    // Update the column and table width
    tableRef.current.style.width = `${tableRef.current.offsetWidth + (newColumnWidth - width)}px`;

    // Notify consumers of the new column width
    if (onColumnResize) {
      onColumnResize(tableColumns[columnIndex].id, tableColumns[columnIndex].width);
    }
  }, [tableColumns, onColumnResize]);

  /**
   *
   * @param {HTMLElement} element - The element to check if it is a text input
   * @returns True if the element is a text input.  Otherwise, false.
   */
  const isTextInput = (element) => {
    const { tagName } = element;
    if (tagName.toLowerCase() === 'input') {
      const validTypes = ['text', 'password', 'number', 'email', 'tel', 'url', 'search', 'date', 'datetime', 'datetime-local', 'time', 'month', 'week'];
      const inputType = element.type;
      return validTypes.indexOf(inputType) >= 0;
    }

    return false;
  };

  const onKeyDown = (event) => {
    const targetElement = event.target;

    // Allow default behavior if the event target is an editable field
    if (event.keyCode !== KeyCode.KEY_TAB
        && (isTextInput(targetElement)
            || ['textarea', 'select'].indexOf(targetElement.tagName.toLowerCase()) >= 0
            || (targetElement.hasAttribute('contentEditable') && targetElement.getAttribute('contentEditable') !== false))) {
      return;
    }

    // Handle home and end key navigation in table
    let focusableTableElements;
    if (event.keyCode === KeyCode.KEY_HOME) {
      focusableTableElements = getFocusableElements(tableRef.current);
      if (focusableTableElements) {
        focusableTableElements[0].focus();
      }
    } else if (event.keyCode === KeyCode.KEY_END) {
      focusableTableElements = getFocusableElements(tableRef.current);
      if (focusableTableElements) {
        focusableTableElements[focusableTableElements.length - 1].focus();
      }
    }
  };

  // -------------------------------------

  return (
    <div
      ref={handleContainerRef}
      className={cx('table-container')}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={!isGridContext && isTableScrollable ? 0 : undefined}
    >
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <table
        ref={handleTableRef}
        id={id}
        role={gridContext.role}
        aria-labelledby={ariaLabelledBy}
        aria-label={ariaLabel}
        aria-rowcount={tableRowCount}
        className={cx('table', theme.className, { headerless: !hasVisibleColumnHeaders })}
        onKeyDown={!isGridContext ? onKeyDown : undefined}
        {...(activeIndex != null && { onMouseUp, onMouseMove, onMouseLeave: onMouseUp })}
      >
        <ColumnContext.Provider
          value={columnContextValue}
        >
          <colgroup>
            {tableColumns.map((column) => (
              // eslint-disable-next-line react/forbid-dom-props
              <col key={column.id} style={{ width: `${column.width}px` }} />
            ))}
          </colgroup>

          <ColumnHeader
            tableId={id}
            isActiveColumnResizing={isActiveColumnResizing}
            activeColumnIndex={activeColumnIndex}
            columns={tableColumns}
            hasVisibleColumnHeaders={hasVisibleColumnHeaders}
            headerHeight={columnHeaderHeight}
            columnResizeIncrement={columnResizeIncrement}
            tableHeight={tableHeight}
            onResizeMouseDown={onResizeMouseDown}
            onColumnSelect={handleColumnSelect}
            onResizeHandleChange={onResizeHandleChange}
          />
          {tableSections.map((section) => (
            <Section
              id={section.id}
              tableId={id}
              key={section.id}
              sectionRowIndex={section.sectionRowIndex}
              isCollapsible={section.isCollapsible}
              isCollapsed={section.isCollapsed}
              isHidden={section.id === defaultSectionRef.current}
              isTableStriped={isStriped}
              text={section.text}
              rows={section.rows}
              rowHeight={rowHeight}
              hasRowSelection={hasSelectableRows}
              displayedColumns={displayedColumns}
              rowHeaderIndex={rowHeaderIndex}
              onCellSelect={isGridContext || hasSelectableRows ? handleCellSelection : undefined}
              onSectionSelect={onSectionSelect}
            />
          ))}
        </ColumnContext.Provider>
      </table>
      <VisuallyHiddenText aria-live="polite" text={rowSelectionModeAriaLiveMessage} />
      <VisuallyHiddenText aria-live="polite" text={rowSelectionAriaLiveMessage} />
      <VisuallyHiddenText aria-live="polite" aria-atomic="true" text={columnHeaderAriaLiveMessage} />
    </div>
  );
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default React.memo(injectIntl(Table));
