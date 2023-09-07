import React, { useState, useRef, useCallback } from 'react';
import WorklistDataGrid from 'terra-worklist-data-grid';

const gridDataJSON = {
  cols: [
    { id: 'Column-0', displayName: 'Patient' },
    { id: 'Column-1', displayName: 'Location' },
    { id: 'Column-2', displayName: 'Illness Severity' },
    { id: 'Column-3', displayName: 'Visit' },
    { id: 'Column-4', displayName: 'Allergy' },
    { id: 'Column-5', displayName: 'Primary Contact' },
    { id: 'Column-6', displayName: 'Generic Order Counts' },
    { id: 'Column-7', displayName: 'Patient Age' },
    { id: 'Column-8', displayName: 'Medication History' },
    { id: 'Column-9', displayName: 'My Relationship' },
    { id: 'Column-10', displayName: 'Not Selectable', isSelectable: false },
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
        { content: '', isSelectable: false },
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
        { content: '', isSelectable: false },
      ],
    },
  ],
};

const RowSelection = () => {
  const rowSelectionModeRef = useRef();
  const rowHeaderIndex = 0;
  const { cols, rows } = gridDataJSON;
  const [rowData, setRowData] = useState(rows);
  const [hasSelectableRows, setHasSelectableRows] = useState(false);

  const clearRowSelection = useCallback(() => {
    const newRowData = [...rowData];
    // eslint-disable-next-line no-return-assign, no-param-reassign
    newRowData.forEach(row => (row.isSelected = false));
    setRowData(newRowData);
  }, [rowData]);

  const disableSelectableRows = useCallback(() => {
    rowSelectionModeRef.current.checked = false;
    setHasSelectableRows(false);
    clearRowSelection();
  }, [clearRowSelection]);

  const onRowSelect = useCallback((rowsToSelectAndUnSelect) => {
    // Remove current selections
    const newRowData = [...rowData];

    rowsToSelectAndUnSelect.forEach((updatedRow) => {
      const dataRowToUpdate = newRowData.find(row => row.id === updatedRow.id);
      if (dataRowToUpdate) {
        dataRowToUpdate.isSelected = updatedRow.selected;
      }
    });

    setRowData(newRowData);
  }, [rowData]);

  const onRowSelectAll = useCallback(() => {
    const newRowData = [...rowData];
    // eslint-disable-next-line no-return-assign, no-param-reassign
    newRowData.forEach(row => (row.isSelected = true));
    setRowData(newRowData);
  }, [rowData]);

  const onRowSelectionModeChange = (event) => {
    if (!event.target.checked) {
      clearRowSelection();
    }
    setHasSelectableRows(event.target.checked);
  };

  const enableRowSelection = useCallback(() => {
    if (!rowSelectionModeRef.current.checked) {
      rowSelectionModeRef.current.checked = true;
    }
    setHasSelectableRows(true);
  }, []);

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
      <WorklistDataGrid
        id="pinned-columns-with-row-selection"
        pinnedColumns={cols.slice(0, 3)}
        overflowColumns={cols.slice(3)}
        rows={rowData}
        rowHeaderIndex={rowHeaderIndex}
        defaultColumnWidth={180}
        ariaLabel="Worklist Data Grid with Pinned Columns and Row Selection"
        hasSelectableRows={hasSelectableRows}
        onRowSelect={onRowSelect}
        onRowSelectAll={onRowSelectAll}
        onClearSelectedRows={clearRowSelection}
        onDisableSelectableRows={disableSelectableRows}
        onEnableRowSelection={enableRowSelection}
      />
    </React.Fragment>
  );
};

export default RowSelection;
