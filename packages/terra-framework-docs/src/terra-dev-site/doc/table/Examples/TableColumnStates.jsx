import React, { useState, useCallback } from 'react';
import Table from 'terra-table';

const tableDataJSON = {
  cols: [
    {
      id: 'Column-0', displayName: 'Patient', sortIndicator: 'ascending', hasError: true, isSelectable: true, // This column header will be rendered with a sort indicator and an error icon by default.
    },
    { id: 'Column-1', displayName: 'Location', isSelectable: true },
    { id: 'Column-2', displayName: 'Illness Severity', isSelectable: true },
    { id: 'Column-3', displayName: 'Visit', isSelectable: true },
    { id: 'Column-4', displayName: 'Allergy', hasError: true }, // Use hasError property to display an error icon in the column header
    { id: 'Column-5', displayName: 'Primary Contact', isSelectable: true },
  ],
  rows: [
    {
      id: '1',
      cells: [
        { content: 'Fleck, Arthur' },
        { content: '1007-MTN' },
        { content: 'Unstable' },
        { content: 'Inpatient, 2 months' },
        { content: '' },
        { content: 'Quinzell, Harleen' },
      ],
    },
    {
      id: '2',
      cells: [
        { content: 'Wayne, Bruce' },
        { content: '1007-MTN-DR' },
        { content: 'Stable' },
        { content: 'Outpatient, 2 days' },
        { content: 'Phytochemicals' },
        { content: 'Grayson, Richard' },
      ],
    },
  ],
};

const TableWithColumnStates = () => {
  const rowHeaderIndex = 0;
  const { cols, rows } = tableDataJSON;

  const [tableColumns, setTableColumns] = useState(cols);
  const [tableRows, setTableRows] = useState(rows);

  // The onColumnSelect will sort the rows and toggle the current sort indicator.
  const onColumnSelect = useCallback((columnId) => {
    const newColumnArray = tableColumns.map((column, columnIndex) => {
      const newColumn = { ...column };

      if (column.id === columnId) {
        newColumn.sortIndicator = column.sortIndicator === 'ascending' ? 'descending' : 'ascending';

        const newGridRows = [...tableRows];
        newGridRows.sort((rowA, rowB) => {
          const firstRowContent = rowA.cells[columnIndex].content || '';
          const secondRowContent = rowB.cells[columnIndex].content || '';

          if (newColumn.sortIndicator === 'ascending') {
            return firstRowContent.localeCompare(secondRowContent);
          }
          return secondRowContent.localeCompare(firstRowContent);
        });

        setTableRows(newGridRows);
      } else {
        newColumn.sortIndicator = undefined;
      }

      return newColumn;
    });

    setTableColumns(newColumnArray);
  }, [tableColumns, tableRows]);

  return (
    <Table
      id="terra-table-with-column-states"
      overflowColumns={tableColumns}
      rows={tableRows}
      rowHeaderIndex={rowHeaderIndex}
      rowHeight="50px"
      defaultColumnWidth={100}
      columnHeaderHeight="50px"
      onColumnSelect={onColumnSelect} // Consumer must provide this callback to the Worklist Data Grid for it to call when the user selects a column header.
      ariaLabel="Table"
    />
  );
};

export default TableWithColumnStates;
