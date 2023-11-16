import React, { useState, useCallback } from 'react';
import { FlowsheetDataGrid } from 'terra-data-grid';

const CellSelection = () => {
  const gridDataJSON = {
    cols: [
      { id: 'Column-0', displayName: 'Vitals', isSelectable: false },
      { id: 'Column-1', displayName: 'March 16' },
      { id: 'Column-2', displayName: 'March 17' },
      { id: 'Column-3', displayName: 'March 18' },
    ],
    rows: [
      {
        id: '1',
        cells: [
          { content: 'Heart Rate Monitored (bpm)' },
          { content: '68' },
          { content: '66' },
          { content: '67' },
        ],
      },
      {
        id: '2',
        cells: [
          { content: 'Temperature Oral (degC)' },
          { content: '36.7' },
          { content: '36.9' },
          { content: '37' },
        ],
      },
      {
        id: '3',
        cells: [
          { content: 'Cardiac Index (L/min/m2)' },
          { content: '2.25' },
          { content: '2.28' },
          { content: '2.8' },
        ],
      },
      {
        id: '4',
        cells: [
          { content: 'ICP (mmHg)' },
          { content: '11' },
          { content: '11' },
          { content: '12' },
        ],
      },
      {
        id: '5',
        cells: [
          { content: 'CPP (mmHg)' },
          { content: '63' },
          { content: '47' },
          { content: '48' },
        ],
      },
    ],
  };

  const { cols, rows } = gridDataJSON;
  const [rowData, setRowData] = useState(rows);
  const [selectedRow, setSelectedRow] = useState(undefined);

  const clearSelectedRow = useCallback(() => {
    if (selectedRow) {
      setSelectedRow(undefined);
    }
  }, [selectedRow]);

  const onCellSelect = useCallback((rowId, columnId) => {
    if (rowId && columnId) {
      const rowIndex = rowData.findIndex(e => e.id === rowId);
      const columnIndex = cols.findIndex(e => e.id === columnId);
      let otherSelectionsExist = false;

      // Remove cell selections, excluding current cell
      const newRowData = [...rowData];
      for (let row = 0; row < rowData.length; row += 1) {
        for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {
          const currentCell = rowData[row].cells[cell];
          if (currentCell.isSelected && !(row === rowIndex && cell === columnIndex)) {
            currentCell.isSelected = false;
            otherSelectionsExist = true;
          }
        }
      }

      // If the current cell is a row header, toggle selection of entire row of cells.
      if (columnIndex === 0) {
        if (selectedRow !== rowId) {
          newRowData[rowIndex].cells = newRowData[rowIndex].cells.map((cell) => ({ ...cell, isSelected: cell.isSelectable }));
          setSelectedRow(rowId);
        } else {
          newRowData[rowIndex].cells = newRowData[rowIndex].cells.map((cell) => ({ ...cell, isSelected: false }));
          clearSelectedRow();
        }
      } else {
        // If the current cell is the only selected cell, toggle it to unselected. Otherwise, set it to selected.
        newRowData[rowIndex].cells[columnIndex].isSelected = !rowData[rowIndex].cells[columnIndex].isSelected || otherSelectionsExist;
        clearSelectedRow();
      }
      setRowData(newRowData);
    }
  }, [clearSelectedRow, cols, rowData, selectedRow]);

  const onClearSelectedCells = useCallback(() => {
    // Remove current selections
    const newRowData = [...rowData];
    for (let row = 0; row < rowData.length; row += 1) {
      for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {
        newRowData[row].cells[cell].isSelected = false;
      }
    }

    clearSelectedRow();
    setRowData(newRowData);
  }, [clearSelectedRow, rowData]);

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
      const columnIndex = cols.findIndex(e => e.id === cell.columnId);

      newRowData[rowIndex].cells[columnIndex].isSelected = true;
    });

    clearSelectedRow();
    setRowData(newRowData);
  }, [clearSelectedRow, cols, rowData]);

  return (
    <FlowsheetDataGrid
      id="default-terra-flowsheet-data-grid"
      columns={cols}
      rows={rowData}
      ariaLabel="Flowsheet Data Grid"
      onCellSelect={onCellSelect}
      onClearSelectedCells={onClearSelectedCells}
      onCellRangeSelect={onCellRangeSelect}
    />
  );
};

export default CellSelection;
