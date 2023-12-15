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
      cells: [
        { content: 'Fleck, Arthur' },
        { content: '1007-MTN' },
        { content: 'Unstable' },
      ],
    },
    {
      id: '2',
      cells: [
        { content: 'Wayne, Bruce' },
        { content: '1107-MTN-DR' },
        { content: 'Stable' },

      ],
    },
    {
      id: '3',
      cells: [
        { content: 'Carr, Alicia' },
        { content: '1007-MTN' },
        { content: 'Unstable' },

      ],
    },
    {
      id: '4',
      cells: [
        { content: 'McMurphy, Donald' },
        { content: '1024-MTN', isMasked: true },
        { content: 'Stable' },
      ],
    },
    {
      id: '5',
      cells: [
        { content: 'Peters, Timothy' },
        { content: '1207-MTN' },
        { content: 'Unstable', isMasked: true },
      ],
    },
  ],
};

// eslint-disable-next-line compat/compat
const params = new URLSearchParams(window.location.search);
const rowSelectionHeaderSelectable = params ? params.get('header-select') : false;

const TableRowSelection = () => {
  const { cols, rows } = tableDataJSON;
  const [rowData, setRowData] = useState(rows);

  const onRowSelect = useCallback((rowSelection) => {
    const { rowId } = rowSelection;

    // Remove current selections
    const newRowData = [...rowData];

    const dataRowToUpdate = newRowData.find(row => row.id === rowId);
    if (dataRowToUpdate) {
      dataRowToUpdate.isSelected = !dataRowToUpdate.isSelected;
    }

    setRowData(newRowData);
  }, [rowData]);

  return (
    <Table
      id="table-with-row-selections"
      overflowColumns={cols}
      rows={rowData}
      rowHeaderIndex={1}
      columnWidth="180px"
      ariaLabel="Table with Row Selections"
      rowSelectionMode="multiple"
      onRowSelect={onRowSelect}
      onRowSelectionHeaderSelect={rowSelectionHeaderSelectable ? () => {} : undefined}
    />
  );
};

export default TableRowSelection;
