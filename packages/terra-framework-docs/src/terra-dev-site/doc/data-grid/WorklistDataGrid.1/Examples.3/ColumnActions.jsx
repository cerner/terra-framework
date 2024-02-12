/* eslint-disable no-param-reassign */
import React, { useState, useRef, useCallback } from 'react';
import { WorklistDataGrid } from 'terra-data-grid';
import { DisclosureManagerContext } from 'terra-disclosure-manager';
import DisclosureComponent from './disclosure/DisclosureComponent';

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

const ColumnActions = () => {
  const rowSelectionModeRef = useRef();
  const rowHeaderIndex = 0;
  const { cols, rows } = gridDataJSON;
  const [rowData, setRowData] = useState(rows);
  const [hasSelectableRows, setHasSelectableRows] = useState(false);
  const disclosureManager = React.useContext(DisclosureManagerContext);

  // Add actions to first 5 columns
  cols.forEach((col, columnIndex) => {
    if (columnIndex < 5) {
      col.action = {
        label: `${col.displayName} action`,
        onCall: () => disclosureManager.disclose({
          preferredType: 'panel',
          size: 'small',
          content: {
            component: (
              <DisclosureComponent
                columnHeader={cols[columnIndex].displayName}
                rowHeader="Detailed Info"
                content="According to the Journal of Healthcare Management/American College of Healthcare Executives, a 500-bed hospital loses over $4 million annually due to clinical communication inefficiencies. A unified clinical communication strategy can help health systems begin to close the gap."
                name={cols[columnIndex].displayName}
              />
            ),
          },
        }),
      };
    }
  });

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

  const onColumnSelect = useCallback((columnId) => {
    // eslint-disable-next-line no-alert
    alert(`Column Selection Header for ${columnId} Clicked`);
  }, []);

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
        id="worklist-data-grid-with-column-actions"
        pinnedColumns={cols.slice(0, 3)} // Consumer must specify pinnedColumns prop to display columns that need to pinned (stickied).
        overflowColumns={cols.slice(3)} // Consumer must specify overflowColumns prop to display columns that do not need to be stickied and can scroll horizontally.
        rows={rowData}
        rowHeaderIndex={rowHeaderIndex}
        defaultColumnWidth={180}
        ariaLabel="Worklist Data Grid with Column Actions"
        onColumnSelect={onColumnSelect}
        hasSelectableRows={hasSelectableRows} // Prop to turn row selection mode on/off
        onRowSelect={onRowSelect} // For row selection, consumer must provide a callback that the Worklist Data Grid will call when the user selects one or more rows.
        onRowSelectAll={onRowSelectAll} // For row selection, consumer must provide a callback that the Worklist Data Grid will call when the user selects all rows.
        onClearSelectedRows={clearRowSelection} // To clear selected rows, consumer must provide a callback that the Worklist Data Grid will call to clear the selection.
        onDisableSelectableRows={disableSelectableRows} // Consumer must provide a callback that the Worklist Data Grid will call to turn off the row selection mode.
        onEnableRowSelection={enableRowSelection} // Consumer must provide a callback that the Worklist Data Grid will call to turn on the row selection mode.
      />
    </React.Fragment>
  );
};

export default ColumnActions;
