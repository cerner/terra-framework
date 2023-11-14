import React, { useCallback, useState } from 'react';
import { WorklistDataGrid } from 'terra-data-grid';
import gridDataJSON from './gridDataWithRowSelection.json';

const WorklistDataGridDeleteRows = () => {
  const rowHeaderIndex = 0;
  const { cols, rows } = gridDataJSON;
  const [rowData, setRowData] = useState(rows);

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
    const newRowData = rowData.map(row => ({ ...row, isSelected: true }));
    setRowData(newRowData);
  }, [rowData]);

  return (
    <div>
      <div>
        <button type="button" id="delete-rows-button" onClick={() => setRowData(rowData.filter(row => !row.isSelected))}>Delete Rows</button>
        <button type="button" id="filter-rows-button" onClick={() => setRowData(rowData.filter(row => row.isSelected))}>Filter Rows</button>
      </div>
      <WorklistDataGrid
        id="worklist-data-grid-delete-rows"
        overflowColumns={cols}
        rows={rowData}
        rowHeaderIndex={rowHeaderIndex}
        ariaLabel="Worklist Data Grid Delete Rows"
        hasSelectableRows
        onRowSelect={onRowSelect}
        onRowSelectAll={onRowSelectAll}
      />
    </div>
  );
};

export default WorklistDataGridDeleteRows;
