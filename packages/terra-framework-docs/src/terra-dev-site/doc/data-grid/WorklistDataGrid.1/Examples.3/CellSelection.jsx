import React, { useState, useCallback } from 'react';
import { DisclosureManagerContext } from 'terra-disclosure-manager';
import { WorklistDataGrid } from 'terra-data-grid';
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
      ariaLabel: 'First Row',
      cells: [
        { content: 'Fleck, Arthur' },
        { content: '1007-MTN' },
        { content: 'Unstable' },
        { content: 'Inpatient, 2 months' },
        { content: '' },
        { content: 'Quinzell, Harleen' },
        { content: '' },
        { isMasked: true }, // This cell's content will be masked
        { isMasked: true },
        { content: 'Admitting Physician' },
        { content: '', isSelectable: false }, // This cell cannot be selected via click but can receive focus when navigating through keyboard
      ],
    },
    {
      id: '2',
      ariaLabel: 'Second Row',
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

const CellSelection = () => {
  const rowHeaderIndex = 0;
  const { cols, rows } = gridDataJSON;
  const disclosureManager = React.useContext(DisclosureManagerContext);

  const [rowData, setRowData] = useState(rows);

  const onCellSelect = useCallback((rowId, columnId) => {
    if (rowId && columnId) {
      const rowIndex = rowData.findIndex(e => e.id === rowId);
      const columnIndex = cols.findIndex(e => e.id === columnId);

      // Remove current selections as the Worklist Data Grid can have only one selected cell at any instance.
      const newRowData = [...rowData];
      for (let row = 0; row < rowData.length; row += 1) {
        for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {
          const currentCell = rowData[row].cells[cell];
          if (currentCell.isSelected && !(row === rowIndex && cell === columnIndex)) {
            currentCell.isSelected = false;
          }
        }
      }

      // Toggle selection state of selected cell
      newRowData[rowIndex].cells[columnIndex].isSelected = !rowData[rowIndex].cells[columnIndex].isSelected;
      setRowData(newRowData);

      // Example illustrates implementation of a Disclosure Manager on selection of a cell.
      disclosureManager.disclose({
        preferredType: 'panel',
        size: 'tiny',
        content: {
          component: (
            <DisclosureComponent
              columnHeader={cols[columnIndex].displayName}
              rowHeader={rowData[rowIndex].cells[0].content}
              content={rowData[rowIndex].cells[columnIndex].content}
              name={cols[columnIndex].displayName}
            />
          ),
        },
      });
    }
  }, [cols, disclosureManager, rowData]);

  const onClearSelectedCells = useCallback(() => {
    // Remove current selections
    const newRowData = [...rowData];
    for (let row = 0; row < rowData.length; row += 1) {
      for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {
        newRowData[row].cells[cell].isSelected = false;
      }
    }

    setRowData(newRowData);
  }, [rowData]);

  return (
    <WorklistDataGrid
      id="worklist-data-grid-row-selection"
      overflowColumns={cols} // Column Headers
      rows={rowData} // Rows with cell data
      rowHeaderIndex={rowHeaderIndex}
      rowHeight="50px"
      defaultColumnWidth={100}
      columnHeaderHeight="100px"
      ariaLabel="Worklist Data Grid With Cell Selection"
      onCellSelect={onCellSelect} // For cell selection, a callback function must be provided so that the Worklist Data Grid can invoke it when a cell is selective.
      onClearSelectedCells={onClearSelectedCells} // To clear the selection of a cell, a callback function must be provided so that the Worklist Data Grid can execute it to clear the selection.
    />
  );
};

export default CellSelection;
