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
  const [selectedRows, setSelectedRows] = useState([]);
  const [hasSelectableRows, setHasSelectableRows] = useState(false);

  const determineSelectedRows = useCallback((allRowsSelected, userSelectedRow) => {
    if (!userSelectedRow) {
      return [];
    }

    let remainingSelectedRow = [];
    if (allRowsSelected) {
      remainingSelectedRow = userSelectedRow;
    } else if (selectedRows.includes(userSelectedRow[0])) {
      // Row Deselected so remove this rowId.
      remainingSelectedRow = selectedRows.filter(row => (row !== userSelectedRow[0]));
    } else {
      // Row Selected so add this rowId.
      remainingSelectedRow = remainingSelectedRow.concat(selectedRows);
      remainingSelectedRow.push(userSelectedRow[0]);
    }
    return remainingSelectedRow;
  }, [selectedRows]);

  const clearRowSelection = useCallback(() => {
    // eslint-disable-next-line no-param-reassign
    rows.forEach(r => { if (r.isSelected) { r.isSelected = false; } });
    setSelectedRows([]);
  }, [rows]);

  const disableSelectableRows = useCallback(() => {
    rowSelectionModeRef.current.checked = false;
    setHasSelectableRows(false);
    clearRowSelection();
  }, [clearRowSelection]);

  const onRowSelect = useCallback((rowsToSelectAndUnSelect) => {
    rowsToSelectAndUnSelect.forEach((changedRow) => {
      const dataRowToUpdate = rows.find(row => row.id === changedRow.id);
      if (dataRowToUpdate) {
        dataRowToUpdate.isSelected = changedRow.selected;
      }
    });
  }, [rows]);

  const onRowSelectAll = useCallback(() => {
    const newRows = [];
    // eslint-disable-next-line no-param-reassign
    rows.forEach(row => { row.isSelected = true; newRows.push(row.id); });
    setSelectedRows(determineSelectedRows(true, newRows));
  }, [determineSelectedRows, rows]);

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
        rows={[...rows]}
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
