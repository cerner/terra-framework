import React, { useState } from 'react';
import WorklistDataGrid from 'terra-worklist-data-grid';
import gridDataJSON from './gridDataWithRowSelection.json';

const WorklistDataGridWithRowSelection = () => {
  const rowHeaderIndex = 0;
  const { cols, rows } = gridDataJSON;
  const [selectedRows, setSelectedRows] = useState([]);
  const [hasSelectableRows, setHasSelectableRows] = useState(true);

  const determineSelectedRows = (allRowsSelected, userSelectedRow) => {
    if (!userSelectedRow) {
      return [];
    }

    let remainingSelectedRow = [];
    if (allRowsSelected) {
      remainingSelectedRow = userSelectedRow;
    } else if (selectedRows.includes(userSelectedRow[0])) {
      // Row Deselect so remove this rowId.
      remainingSelectedRow = selectedRows.filter(e => (e !== userSelectedRow[0]));
    } else {
      // Row Selected so add this rowId.
      remainingSelectedRow = remainingSelectedRow.concat(selectedRows);
      remainingSelectedRow.push(userSelectedRow[0]);
    }
    return remainingSelectedRow;
  };

  const clearRowSelection = () => {
    // eslint-disable-next-line no-param-reassign
    rows.forEach(r => { if (r.isSelected) { r.isSelected = false; } });
    setSelectedRows([]);
  };

  const disableSelectableRows = () => {
    setHasSelectableRows(false);
    clearRowSelection();
  };

  return (
    <WorklistDataGrid
      id="default-terra-worklist-data-grid"
      overflowColumns={cols}
      rows={[...rows]}
      rowHeaderIndex={rowHeaderIndex}
      ariaLabel="Worklist Data Grid"
      hasSelectableRows={hasSelectableRows}
      onRowSelect={(toggledRows) => {
        toggledRows.forEach((toggledRow) => {
          if (!toggledRow.isSelected) {
            const row = rows.find(e => e.id === toggledRow.rowId);
            row.isSelected = false;
          }
        });

        toggledRows.forEach((toggledRow) => {
          if (toggledRow.isSelected) {
            const row = rows.find(e => e.id === toggledRow.rowId);
            row.isSelected = true;
          }
        });

        const rowIdsToSelect = [];
        rows.forEach(element => {
          if (element.isSelected) {
            rowIdsToSelect.push(element.id);
          }
        });

        setSelectedRows(determineSelectedRows(false, rowIdsToSelect));
      }}
      onRowSelectAll={() => {
        const newRows = [];
        rows.forEach(e => { e.isSelected = true; newRows.push(e.id); });
        setSelectedRows(determineSelectedRows(true, newRows));
      }}
      onClearSelectedRows={() => {
        clearRowSelection();
      }}
      onDisableSelectableRows={() => {
        disableSelectableRows();
      }}
      onEnableRowSelection={() => {
        setHasSelectableRows(true);
      }}
    />

  );
};

export default WorklistDataGridWithRowSelection;
