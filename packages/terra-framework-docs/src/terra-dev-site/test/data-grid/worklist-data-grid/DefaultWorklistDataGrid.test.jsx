import React, { useCallback, useState } from 'react';
import { WorklistDataGrid } from 'terra-data-grid';
import gridDataJSON from './gridData.json';

const DefaultWorklistDataGrid = () => {
  const rowHeaderIndex = 0;
  const { cols, rows } = gridDataJSON;

  const [rowData, setRowData] = useState(rows);

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
    <React.Fragment>
      <WorklistDataGrid
        id="default-terra-worklist-data-grid"
        overflowColumns={cols}
        rows={rowData}
        rowHeaderIndex={rowHeaderIndex}
        onCellSelect={onCellSelect}
        onClearSelectedCells={onClearSelectedCells}
        ariaLabel="Worklist Data Grid"
      />
    </React.Fragment>
  );
};

export default DefaultWorklistDataGrid;
