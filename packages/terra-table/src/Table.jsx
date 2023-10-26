import React, {
  useState, useContext, useRef, useCallback, useEffect, useMemo, forwardRef, useImperativeHandle,
} from 'react';
import { injectIntl } from 'react-intl';
import classNames from 'classnames/bind';
import ResizeObserver from 'resize-observer-polyfill';

import ThemeContext from 'terra-theme-context';

import ColumnHeader from './subcomponents/ColumnHeader';
import ColumnContext from './utils/ColumnContext';
import ERRORS from './utils/constants';
import GridContext, { GridConstants } from './utils/GridContext';
import Row from './subcomponents/Row';
import RowSelectionUtils from './utils/rowSelectionUtils';
import styles from './Table.module.scss';
import { tableShape, defaultProps } from './TablePropTypes';

const cx = classNames.bind(styles);

const defaultColumnMinimumWidth = 60;
const defaultColumnMaximumWidth = 300;

const Table = injectIntl((props) => {
  const {
    id,
    ariaLabelledBy,
    ariaLabel,
    rows,
    pinnedColumns,
    overflowColumns,
    onColumnResize,
    defaultColumnWidth,
    columnHeaderHeight,
    rowHeight,
    onColumnSelect,
    onCellSelect,
    hasSelectableRows,
    hasColumnHeaders,
    isStriped,
    rowHeaderIndex,
  } = props;

  if (pinnedColumns.length === 0) {
    // eslint-disable-next-line no-console
    console.warn(ERRORS.PINNED_COLUMNS_UNDEFINED);
  }

  // Manage column resize
  const [tableHeight, setTableHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  const [pinnedColumnOffsets, setPinnedColumnOffsets] = useState([0]);

  const activeColumnPageX = useRef(0);
  const activeColumnWidth = useRef(200);
  const tableWidth = useRef(0);

  const tableContainerRef = useRef();
  const tableRef = useRef();
  const [isTableScrollable, setTableScrollable] = useState(false);

  const gridContext = useContext(GridContext);
  const theme = useContext(ThemeContext);

  const isGridContext = gridContext.role === GridConstants.GRID;
  const columnContextValue = useMemo(() => ({ pinnedColumnOffsets }), [pinnedColumnOffsets]);

  // Initialize column width properties
  const initializeColumn = (column) => ({
    ...column,
    width: column.width || defaultColumnWidth,
    minimumWidth: column.minimumWidth || defaultColumnMinimumWidth,
    maximumWidth: column.maximumWidth || defaultColumnMaximumWidth,
  });

  const displayedColumns = (hasSelectableRows ? [RowSelectionUtils.ROW_SELECTION_COLUMN] : []).concat(pinnedColumns).concat(overflowColumns);
  const [tableColumns, setTableColumns] = useState(displayedColumns.map((column) => initializeColumn(column)));
  // -------------------------------------
  // functions

  const handleCellSelection = useCallback((selectionDetails) => {
    if (onCellSelect) {
      onCellSelect(selectionDetails);
    }
  }, [onCellSelect]);

  // -------------------------------------
  // useEffect Hooks

  useImperativeHandle(props.tableRefs, () => ({
    tableRef: tableRef.current,
    containerRef: tableContainerRef.current,
  }), [tableRef, tableContainerRef]);

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
    if (onColumnSelect) {
      onColumnSelect(columnId);
    }
  }, [onColumnSelect]);

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
                onCellSelect={isGridContext ? handleCellSelection : undefined}
                isSelected={row.isSelected}
                isTableStriped={isStriped}
              />
            ))}
          </tbody>
        </ColumnContext.Provider>
      </table>
    </div>
  );
});

Table.propTypes = tableShape;
Table.defaultProps = defaultProps;

export default React.memo(forwardRef((props, ref) => <Table {...props} tableRefs={ref} />));
