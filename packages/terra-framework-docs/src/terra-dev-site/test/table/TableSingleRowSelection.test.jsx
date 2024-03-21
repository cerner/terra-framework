import React, { useState, useCallback } from 'react';
import Table from 'terra-table';

const tableDataJSON = {
  cols: [
    { id: 'Column-0', displayName: 'Patient' },
    { id: 'Column-1', displayName: 'Location' },
    { id: 'Column-2', displayName: 'Illness Severity' },
  ],
  rows: [
    {
      id: '1',
      isSelectable: true,
      cells: [
        { content: 'Fleck, Arthur' },
        { content: '1007-MTN' },
        { content: <button id="button" type="button" aria-label="Alert">Alert</button> },
      ],
    },
    {
      id: '2',
      isSelectable: true,
      cells: [
        { content: 'Wayne, Bruce' },
        { content: '1107-MTN-DR' },
        { content: 'Stable' },

      ],
    },
    {
      id: '3',
      isSelectable: true,
      cells: [
        { content: 'Carr, Alicia' },
        { content: '1007-MTN' },
        { content: 'Unstable' },

      ],
    },
    {
      id: '4',
      isSelectable: true,
      cells: [
        { content: 'McMurphy, Donald' },
        { content: '1024-MTN', isMasked: true },
        { content: 'Stable' },
      ],
    },
    {
      id: '5',
      isSelectable: true,
      cells: [
        { content: 'Peters, Timothy' },
        { content: '1207-MTN' },
        { content: 'Unstable', isMasked: true },
      ],
    },
  ],
};

const TableSingleRowSelection = () => {
  const rowHeaderIndex = 0;
  const { cols, rows } = tableDataJSON;
  const [rowData, setRowData] = useState(rows);

  const onRowSelect = useCallback((rowSelection) => {
    const { rowId } = rowSelection;

    const newRowData = [...rowData];

    const dataRowToUpdate = newRowData.find(row => row.id === rowId);

    newRowData.forEach((row) => {
      if (row.id !== dataRowToUpdate.id) {
        // eslint-disable-next-line no-return-assign, no-param-reassign
        row.isSelected = false;
      }
    });

    dataRowToUpdate.isSelected = !dataRowToUpdate.isSelected;

    setRowData(newRowData);
  }, [rowData]);

  const onRowSelectionHeaderSelect = useCallback(() => {
    // eslint-disable-next-line no-alert
    alert('Row Selection Header Clicked');
  }, []);

  return (
    <Table
      id="table-with-single-row-selection"
      overflowColumns={cols}
      rows={rowData}
      rowHeaderIndex={rowHeaderIndex}
      columnWidth="180px"
      ariaLabel="Table with Single Row Selection"
      rowSelectionMode="single" // Prop to turn row selection mode on/off
      onRowSelect={onRowSelect} // For row selection, consumer must provide a callback that the Worklist Data Grid will call when the user selects one or more rows.
      onRowSelectionHeaderSelect={onRowSelectionHeaderSelect}
    />
  );
};

export default TableSingleRowSelection;
