import React, { useCallback, useState } from 'react';
import Table from 'terra-table';

const tableData = {
  cols: [
    {
      id: 'Column-0', displayName: 'Patient', sortIndicator: 'ascending', isSelectable: true,
    },
    {
      id: 'Column-1', displayName: 'Location', isSelectable: true,
    },
    { id: 'Column-2', displayName: 'Illness Severity', isSelectable: true },
    { id: 'Column-3', displayName: 'Visit' },
    { id: 'Column-4', displayName: 'Allergy' },
    { id: 'Column-5', displayName: 'Primary Contact' },
    { id: 'Column-6', displayName: 'Generic Order Counts' },
    { id: 'Column-7', displayName: 'Patient Age' },
    { id: 'Column-8', displayName: 'Medication History' },
    { id: 'Column-9', displayName: 'My Relationship' },
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
        { content: '' },
        { isMasked: true },
        { isMasked: true },
        { content: 'Admitting Physician' },
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
        { content: '' },
        { content: '' },
        { isMasked: true },
        { content: 'Admitting Physician' },
      ],
    },
  ],
};

const SortableTable = () => {
  const [tableColumns, setTableColumns] = useState(tableData.cols);
  const [tableRows, setTableRows] = useState(tableData.rows);
  const handleColumnSelect = useCallback((columnId) => {
    const newColumns = [...tableColumns].map((col) => {
      const newCol = { ...col };
      if (columnId === col.id) {
        newCol.sortIndicator = col.sortIndicator === 'ascending' ? 'descending' : 'ascending';
      } else {
        newCol.sortIndicator = undefined;
      }
      return newCol;
    });

    const newRows = [...tableRows];

    const columnIndex = newColumns.findIndex(col => col.id === columnId);
    if (columnIndex > -1) {
      const { sortIndicator } = newColumns[columnIndex];
      newRows.sort((rowA, rowB) => {
        const firstRowContent = rowA.cells[columnIndex].content || '';
        const secondRowContent = rowB.cells[columnIndex].content || '';

        if (sortIndicator === 'ascending') {
          return firstRowContent.localeCompare(secondRowContent);
        }
        return secondRowContent.localeCompare(firstRowContent);
      });
    }

    setTableColumns(newColumns);
    setTableRows(newRows);
  }, [tableColumns, tableRows]);

  return (
    <Table
      id="my-table-id"
      overflowColumns={tableColumns}
      rows={tableRows}
      onColumnSelect={handleColumnSelect}
      ariaLabel="Sortable Table"
    />
  );
};

export default SortableTable;
