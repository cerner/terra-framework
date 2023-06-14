import React, { useRef, useState } from 'react';
import WorklistDataGrid from 'terra-worklist-data-grid';
import gridDataJSON from './gridData.json';

const DefaultWorklistDataGrid = () => {
  const rowSelectionModeRef = useRef();
  const rowHeaderIndex = 0;
  const { cols, rows } = gridDataJSON;
  const [selectedRows, setSelectedRows] = useState([]);
  const [hasSelectableRows, setHasSelectableRows] = useState(false);

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
    rowSelectionModeRef.current.checked = false;
    setHasSelectableRows(false);
    clearRowSelection();
  };

  const onRowSelectionModeChange = (event) => {
    if (!event.target.checked) {
      clearRowSelection();
    }
    setHasSelectableRows(event.target.checked);
  };

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
        id="default-terra-worklist-data-grid"
        columns={cols}
        rows={[...rows]}
        rowHeaderIndex={rowHeaderIndex}
        rowHeight="50px"
        columnWidth="50px"
        columnHeaderHeight="50px"
        ariaLabel="Worklist Data Grid"
        hasSelectableRows={hasSelectableRows}
        onRowSelect={(selectAllRows, rowId) => {
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
        onClearSelectedRows={() => {
          clearRowSelection();
        }}
        onClearRowSelectionMode={() => {
          setRowSelectionMode();
        }}
      />
    </React.Fragment>
  );
};

export default DefaultWorklistDataGrid;
