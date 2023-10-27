import React, {
  useState, useContext, useRef, useCallback, useEffect, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';
import ResizeObserver from 'resize-observer-polyfill';
import ThemeContext from 'terra-theme-context';
import Row from './subcomponents/Row';
import Section from './subcomponents/Section';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import ColumnHeader from './subcomponents/ColumnHeader';
import ColumnContext from './utils/ColumnContext';
import { columnShape } from './proptypes/columnShape';
import ERRORS from './utils/constants';
import GridContext, { GridConstants } from './utils/GridContext';
import rowShape from './proptypes/rowShape';
import validateRowHeaderIndex from './proptypes/validators';
import styles from './Table.module.scss';
import sectionShape from './proptypes/sectionShape';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * String that will be used to identify the table. If multiple tables are on the same page, each table should have
   * a unique id.
   */
  id: PropTypes.string.isRequired,

  /**
  * Data for content in the body of the table. Rows will be rendered in the order given.
  */
  rows: PropTypes.arrayOf(rowShape),

  /**
  * Data for content in the body of the table. Rows will be rendered in the order given.
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
  hasColumnHeaders: PropTypes.bool,

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
  hasColumnHeaders: true,
};

const defaultColumnMinimumWidth = 60;
const defaultColumnMaximumWidth = 300;

function Table(props) {
  const {
    id,
    ariaLabelledBy,
    ariaLabel,
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
    hasColumnHeaders,
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
  const columnContextValue = useMemo(() => ({ pinnedColumnOffsets }), [pinnedColumnOffsets]);

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
    selectedRows.current = rows.filter((row) => row.isSelected).map(row => (row.id));

    if (previousSelectedRows.length > 0 && selectedRows.current.length === 0) {
      setRowSelectionAriaLiveMessage(intl.formatMessage({ id: 'Terra.table.all-rows-unselected' }));
    } else if (selectedRows.current.length === rows.length) {
      setRowSelectionAriaLiveMessage(intl.formatMessage({ id: 'Terra.table.all-rows-selected' }));
    } else {
      const rowSelectionsAdded = selectedRows.current.filter(row => !previousSelectedRows.includes(row));
      const rowSelectionsRemoved = previousSelectedRows.filter(row => !selectedRows.current.includes(row));
      let selectionUpdateAriaMessage = '';

      if (rowSelectionsAdded.length === 1) {
        const newRowIndex = rows.findIndex(row => row.id === rowSelectionsAdded[0]);
        const selectedRowLabel = rows[newRowIndex].ariaLabel || newRowIndex + 2; // Accounts for header row and zero-based index
        selectionUpdateAriaMessage = intl.formatMessage({ id: 'Terra.table.row-selection-template' }, { row: selectedRowLabel });
      } else if (rowSelectionsAdded.length > 1) {
        selectionUpdateAriaMessage = intl.formatMessage({ id: 'Terra.table.multiple-rows-selected' }, { rowCount: rowSelectionsAdded.length });
      }

      if (rowSelectionsRemoved.length === 1) {
        const removedRowIndex = rows.findIndex(row => row.id === rowSelectionsRemoved[0]);
        const unselectedRowLabel = rows[removedRowIndex].ariaLabel || removedRowIndex + 2; // Accounts for header row and zero-based index
        selectionUpdateAriaMessage += intl.formatMessage({ id: 'Terra.table.row-selection-cleared-template' }, { row: unselectedRowLabel });
      } else if (rowSelectionsRemoved.length > 1) {
        selectionUpdateAriaMessage += intl.formatMessage({ id: 'Terra.table.multiple-rows-unselected' }, { rowCount: rowSelectionsRemoved.length });
      }

      if (selectionUpdateAriaMessage) {
        setRowSelectionAriaLiveMessage(selectionUpdateAriaMessage);
      }
    }
  }, [intl, rows]);

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

  // -------------------------------------

  return (
    <div
      ref={tableContainerRef}
      className={cx('table-container')}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={!isGridContext && isTableScrollable ? 0 : undefined}
    >
      <table
        ref={tableRef}
        id={id}
        role={gridContext.role}
        aria-labelledby={ariaLabelledBy}
        aria-label={ariaLabel}
        className={cx('table', theme.className, { headerless: !hasColumnHeaders })}
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
            columns={tableColumns}
            hasColumnHeaders={hasColumnHeaders}
            headerHeight={columnHeaderHeight}
            tableHeight={tableHeight}
            onResizeMouseDown={onResizeMouseDown}
            onColumnSelect={handleColumnSelect}
          />
          {sections ? sections.map((section, sectionIndex) => (
            <Section
              id={section.id}
              key={section.id}
              sectionIndex={sectionIndex + 1}
              isCollapsible={section.isCollapsible}
              isCollapsed={section.isCollapsed}
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
          )) : (
            <tbody>
              {rows.map((row, rowIndex) => (
                <Row
                  rowIndex={rowIndex + 1}
                  key={row.id}
                  height={rowHeight}
                  id={row.id}
                  cells={row.cells}
                  ariaLabel={row.ariaLabel}
                  hasRowSelection={hasSelectableRows}
                  displayedColumns={displayedColumns}
                  rowHeaderIndex={rowHeaderIndex}
                  onCellSelect={isGridContext || hasSelectableRows ? handleCellSelection : undefined}
                  isSelected={row.isSelected}
                  isTableStriped={isStriped}
                />
              ))}
            </tbody>
          )}
        </ColumnContext.Provider>
      </table>
      <VisuallyHiddenText aria-live="polite" text={rowSelectionModeAriaLiveMessage} />
      <VisuallyHiddenText aria-live="polite" text={rowSelectionAriaLiveMessage} />
    </div>
  );
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default React.memo(injectIntl(Table));
