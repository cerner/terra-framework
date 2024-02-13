import React, { useState, useCallback, useEffect } from 'react';
import { WorklistDataGrid } from 'terra-data-grid';

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

const WorklistDataGridColumnActions = () => {
  const rowHeaderIndex = 0;
  const { cols } = gridDataJSON;
  const [rowData, setRowData] = useState([]);

  // Change row data for data grid to validate that pinned column border resizes correctly.
  useEffect(() => {
    setRowData(gridDataJSON.rows);
  }, []);

  // Add actions to first 5 columns
  cols.forEach((col, columnIndex) => {
    if (columnIndex < 5) {
      // eslint-disable-next-line no-param-reassign
      col.action = {
        label: `${col.displayName} action`,
        // eslint-disable-next-line no-alert
        onClick: () => alert(`${col.displayName} action called`),
      };
    }
  });

  const onCellSelect = useCallback((rowId, columnId) => {
    if (rowId && columnId) {
      const rowIndex = rowData.findIndex(row => row.id === rowId);
      const columnIndex = cols.findIndex(column => column.id === columnId);

      // Remove current selections
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
    }
  }, [cols, rowData]);

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
      id="column-actions-pinned-columns-worklist-data-grid"
      pinnedColumns={cols.slice(0, 3)}
      overflowColumns={cols.slice(3)}
      rows={rowData}
      rowHeaderIndex={rowHeaderIndex}
      onCellSelect={onCellSelect}
      onClearSelectedCells={onClearSelectedCells}
      ariaLabel="Worklist Data Grid"
    />
  );
};

export default WorklistDataGridColumnActions;
