import React, {
  useState, useContext, useRef, useCallback, useEffect, useMemo, forwardRef, useImperativeHandle,
} from 'react';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';
import ResizeObserver from 'resize-observer-polyfill';
import ThemeContext from 'terra-theme-context';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import ColumnHeader from './subcomponents/ColumnHeader';
import ColumnContext from './utils/ColumnContext';
import ERRORS from './utils/constants';
import GridContext, { GridConstants } from './utils/GridContext';
import Row from './subcomponents/Row';
import styles from './Table.module.scss';
import { defaultProps, tableShape } from './TablePropTypes';

const cx = classNames.bind(styles);

const defaultColumnMinimumWidth = 60;
const defaultColumnMaximumWidth = 300;

export const Table = injectIntl((props) => {
  const {
    id,
    ariaLabelledBy,
    ariaLabel,
    columnResizeIncrement,
    rows,
    pinnedColumns,
    overflowColumns,
    onColumnResize,
    defaultColumnWidth,
    columnHeaderHeight,
    rowHeight,
    onColumnSelect,
    onCellSelect,
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

  useImperativeHandle(props.tableRefs, () => ({
    tableRef: tableRef.current,
    containerRef: tableContainerRef.current,
  }), [tableRef, tableContainerRef]);

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
            columnResizeIncrement={columnResizeIncrement}
            tableHeight={tableHeight}
            onResizeMouseDown={onResizeMouseDown}
            onColumnSelect={handleColumnSelect}
          />
          <tbody>
            {rows.map((row, index) => (
              <Row
                rowIndex={index + 1}
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
        </ColumnContext.Provider>
      </table>
      <VisuallyHiddenText aria-live="polite" text={rowSelectionModeAriaLiveMessage} />
      <VisuallyHiddenText aria-live="polite" text={rowSelectionAriaLiveMessage} />
    </div>
  );
});

Table.propTypes = tableShape;
Table.defaultProps = defaultProps;

export default React.memo(forwardRef((props, ref) => <Table {...props} tableRefs={ref} />));
