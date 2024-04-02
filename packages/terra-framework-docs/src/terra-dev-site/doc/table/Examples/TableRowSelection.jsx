import React, { useState, useRef, useCallback } from 'react';
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

const TableRowSelection = () => {
  const rowSelectionModeRef = useRef();
  const rowHeaderIndex = 0;
  const { cols, rows } = tableDataJSON;
  const [rowData, setRowData] = useState(rows);
  const [hasSelectableRows, setHasSelectableRows] = useState(false);

  const clearRowSelection = useCallback(() => {
    const newRowData = [...rowData];
    // eslint-disable-next-line no-return-assign, no-param-reassign
    newRowData.forEach(row => (row.isSelected = false));
    setRowData(newRowData);
  }, [rowData]);

  const onRowSelectionModeChange = useCallback((event) => {
    if (!event.target.checked) {
      clearRowSelection();
    }
    setHasSelectableRows(event.target.checked);
  }, [clearRowSelection]);

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
    <React.Fragment>
      <div>
        <label htmlFor="rowSelectionMode"><b>Row Selection Mode</b></label>
        <input
          id="rowSelectionMode"
          type="checkbox"
          ref={rowSelectionModeRef}
          onChange={onRowSelectionModeChange}
        />
      </div>
      <Table
        id="table-with-row-selections"
        overflowColumns={cols}
        rows={rowData}
        rowHeaderIndex={rowHeaderIndex}
        columnWidth="180px"
        ariaLabel="Table with Row Selections"
        rowSelectionMode={hasSelectableRows ? 'multiple' : undefined} // Prop to turn row selection mode on/off
        onRowSelect={onRowSelect} // For row selection, consumer must provide a callback that the Worklist Data Grid will call when the user selects one or more rows.
      />
    </React.Fragment>
  );
};

export default TableRowSelection;
