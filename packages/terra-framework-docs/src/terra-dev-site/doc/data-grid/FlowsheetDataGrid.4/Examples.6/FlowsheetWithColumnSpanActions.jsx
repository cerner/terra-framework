import React, { useState, useCallback } from 'react';
import { FlowsheetDataGrid } from 'terra-data-grid';

const gridDataJSON = {
  cols: [
    { id: 'Column-0', displayName: 'Vitals' },
    {
      id: 'Column-1',
      displayName: 'March 16',
      columnSpan: 2,
      action: {
        label: 'March 16 action',
        // eslint-disable-next-line no-alert
        onClick: () => alert('March 16 action called'),
      },
    },
    {
      id: 'Column-2',
      displayName: 'March 17',
      columnSpan: 2,
      action: {
        label: 'March 17 action',
        // eslint-disable-next-line no-alert
        onClick: () => alert('March 17 action called'),
      },
    },
    { id: 'Column-3', displayName: 'March 18', columnSpan: 3 },
    { id: 'Column-4', displayName: 'March 19' },
    { id: 'Column-5', displayName: 'March 20' },
    { id: 'Column-6', displayName: 'March 21' },
    { id: 'Column-7', displayName: 'March 22' },
  ],
  rows: [
    {
      id: '1',
      cells: [
        { content: 'Heart Rate Monitored (bpm)' },
        { content: '68' },
        { content: '69' },
        { content: '66' },
        { content: '68' },
        { content: '69' },
        { content: '67' },
        { content: '69' },
        { content: '68' },
        { content: '69' },
        { content: '67' },
        { content: '69' },
      ],
    },
    {
      id: '2',
      cells: [
        { content: 'Temperature Oral (degC)' },
        { content: '36.7' },
        { content: '36.9' },
        { content: '36.7' },
        { content: '37' },
        { content: '36.7' },
        { content: '37' },
        { content: '36.7' },
        { content: '37' },
        { content: '36.7' },
        { content: '37' },
        { content: '36.7' },
      ],
    },
    {
      id: '3',
      cells: [
        { content: 'Cardiac Index (L/min/m2)' },
        { content: '2.25' },
        { content: '2.28' },
        { content: '2.25' },
        { content: '2.8' },
        { content: '2.25' },
        { content: '2.8' },
        { content: '2.25' },
        { content: '2.8' },
        { content: '2.25' },
        { content: '2.8' },
        { content: '2.25' },
      ],
    },
    {
      id: '4',
      cells: [
        { content: 'ICP (mmHg)' },
        { content: '11' },
        { content: '12' },
        { content: '11' },
        { content: '12' },
        { content: '13' },
        { content: '14' },
        { content: '13' },
        { content: '12' },
        { content: '13' },
        { content: '14' },
        { content: '13' },
      ],
    },
    {
      id: '5',
      cells: [
        { content: 'CPP (mmHg)' },
        { content: '63' },
        { content: '47' },
        { content: '63' },
        { content: '48' },
        { content: '63' },
        { content: '47' },
        { content: '63' },
        { content: '48' },
        { content: '63' },
        { content: '47' },
        { content: '63' },
      ],
    },
  ],
};

const FlowsheetWithColumnSpan = () => {
  const { cols, rows } = gridDataJSON;

  const [rowData, setRowData] = useState(rows);

  const onCellSelect = useCallback((selectedCell) => {
    if (selectedCell.rowId && selectedCell.columnId) {
      const rowIndex = rowData.findIndex(e => e.id === selectedCell.rowId);
      const { columnIndex } = selectedCell;
      let otherSelectionsExist = false;
      // Remove cell selections, excluding current cell
      const newRowData = [...rowData];
      for (let row = 0; row < rowData.length; row += 1) {
        for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {
          const currentCell = rowData[row].cells[cell];
          if (currentCell.isSelected && !(row === rowIndex && cell === columnIndex) && !selectedCell.isMetaPressed) {
            currentCell.isSelected = false;
            otherSelectionsExist = true;
          }
        }
      }

      // If the current cell is the only selected cell, toggle it to unselected. Otherwise, set it to selected.
      newRowData[rowIndex].cells[columnIndex].isSelected = !rowData[rowIndex].cells[columnIndex].isSelected || otherSelectionsExist;
      setRowData(newRowData);
    }
  }, [rowData]);

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

  const onCellRangeSelect = useCallback((cells) => {
    const newRowData = [...rowData];

    // Remove current selections
    for (let row = 0; row < rowData.length; row += 1) {
      for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {
        newRowData[row].cells[cell].isSelected = false;
      }
    }

    cells.forEach((cell) => {
      const rowIndex = rowData.findIndex(e => e.id === cell.rowId);
      const { columnIndex } = cell;

      newRowData[rowIndex].cells[columnIndex].isSelected = true;
    });

    setRowData(newRowData);
  }, [rowData]);

  return (
    <FlowsheetDataGrid
      id="flowsheet-with-column-span-actions"
      columns={cols}
      rows={rowData}
      ariaLabel="Flowsheet Data Grid"
      onCellSelect={onCellSelect}
      onClearSelectedCells={onClearSelectedCells}
      onCellRangeSelect={onCellRangeSelect}
    />
  );
};

export default FlowsheetWithColumnSpan;
