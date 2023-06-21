import React, { useState } from 'react';
import WorklistDataGrid from 'terra-worklist-data-grid';
import gridDataJSON from './gridData.json';

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

  const setRowSelectionMode = () => {
    setHasSelectableRows(false);
    clearRowSelection();
  };

  return (
    <WorklistDataGrid
      id="worklist-data-grid-row-selection"
      columns={cols}
      rows={[...rows]}
      rowHeaderIndex={rowHeaderIndex}
      rowHeight="50px"
      columnWidth="50px"
      columnHeaderHeight="50px"
      ariaLabel="Worklist Data Grid"
      hasSelectableRows={hasSelectableRows}
      onRowSelect={(rowId, selectAllRows) => {
        if (!selectAllRows) {
          const selectedRow = rows.find(e => e.id === rowId);
          selectedRow.isSelected = !selectedRow.isSelected;
        } else {
          rows.forEach(e => { e.isSelected = true; });
        }
        const newRows = [];
        rows.forEach(element => {
          if (element.isSelected) {
            newRows.push(element.id);
          }
        });
        setSelectedRows(determineSelectedRows(selectAllRows, newRows));
      }}
      onCellSelect={(rowId, columnId) => {
        console.log(`Selected cell: ${rowId} ${columnId}`);
        // TODO: Implement Slidepanel in Cell selection story.
      }}
      onClearSelectedRows={() => {
        clearRowSelection();
      }}
      onClearRowSelectionMode={() => {
        setRowSelectionMode();
      }}
    />
  );
};

export default WorklistDataGridWithRowSelection;
