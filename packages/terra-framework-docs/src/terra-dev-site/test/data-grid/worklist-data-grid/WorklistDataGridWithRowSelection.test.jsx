import React, { useCallback, useState } from 'react';
import { WorklistDataGrid } from 'terra-data-grid';
import gridDataJSON from './gridDataWithRowSelection.json';

const WorklistDataGridWithRowSelection = () => {
  const rowHeaderIndex = 0;
  const { cols, rows } = gridDataJSON;
  const [rowData, setRowData] = useState(rows);
  const [hasSelectableRows, setHasSelectableRows] = useState(true);

  const clearRowSelection = useCallback(() => {
    const newRowData = [...rowData];
    // eslint-disable-next-line no-return-assign, no-param-reassign
    newRowData.forEach(row => (row.isSelected = false));
    setRowData(newRowData);
  }, [rowData]);

  const disableSelectableRows = () => {
    setHasSelectableRows(false);
    clearRowSelection();
  };

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

  return (
    <WorklistDataGrid
      id="default-terra-worklist-data-grid"
      overflowColumns={cols}
      rows={rowData}
      rowHeaderIndex={rowHeaderIndex}
      ariaLabel="Worklist Data Grid"
      hasSelectableRows={hasSelectableRows}
      onRowSelect={onRowSelect}
      onRowSelectAll={onRowSelectAll}
      onClearSelectedRows={clearRowSelection}
      onDisableSelectableRows={disableSelectableRows}
      onEnableRowSelection={() => {
        setHasSelectableRows(true);
      }}
    />

  );
};

export default WorklistDataGridWithRowSelection;
