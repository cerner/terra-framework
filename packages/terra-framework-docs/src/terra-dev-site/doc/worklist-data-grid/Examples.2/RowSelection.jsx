import React, { useState, useRef } from 'react';
import WorklistDataGrid from 'terra-worklist-data-grid';

const gridDataJSON = {
  cols: [
    { id: 'Column-0', displayName: 'Patient' },
    { id: 'Column-1', displayName: 'Location' },
    { id: 'Column-2', displayName: 'Illness Severity' },
    { id: 'Column-3', displayName: 'Visit' },
    { id: 'Column-4', displayName: 'Allergy' },
    { id: 'Column-5', displayName: 'Primary Contact' },
    { id: 'Column-6', displayName: 'Generic Order Counts' },
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
        { content: '', isMasked: true },
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

      ],
    },
    {
      id: '3',
      cells: [
        { content: 'Doe, John' },
        { content: '1007-MTN' },
        { content: 'Unstable' },
        { content: 'Inpatient, 2 months' },
        { content: '' },
        { content: 'Quinzell, Harleen' },
        { content: '' },

      ],
    },
    {
      id: '4',
      cells: [
        { content: 'Doe, Mary' },
        { content: '1007-MTN', isMasked: true },
        { content: 'Unstable' },
        { content: 'Inpatient, 2 months' },
        { content: '' },
        { content: 'Quinzell, Harleen' },
        { content: '' },
      ],
    },
    {
      id: '5',
      cells: [
        { content: 'Doe, Arthur' },
        { content: '1007-MTN' },
        { content: 'Unstable', isMasked: true },
        { content: 'Inpatient, 2 months' },
        { content: '' },
        { content: 'Quinzell, Harleen' },
        { content: '' },
      ],
    },
    {
      id: '6',
      cells: [
        { content: 'Doe, Alex' },
        { content: '1007-MTN' },
        { content: 'Unstable' },
        { content: 'Inpatient, 2 months' },
        { content: '' },
        { content: 'Quinzell, Harleen' },
        { content: '' },
      ],
    },
    {
      id: '7',
      cells: [
        { content: 'Doe, Test7' },
        { content: '1007-MTN' },
        { content: 'Unstable' },
        { content: 'Inpatient, 2 months' },
        { content: '' },
        { content: 'Quinzell, Harleen' },
        { content: '' },
      ],
    },
    {
      id: '8',
      cells: [
        { content: 'Doe, Test8' },
        { content: '1007-MTN' },
        { content: 'Unstable' },
        { content: 'Inpatient, 2 months' },
        { content: '' },
        { content: 'Quinzell, Harleen' },
        { content: '' },
      ],
    },
  ],
};

const RowSelection = () => {
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

  const enableSelectableRows = (rowIds) => {
    const rowsToSelect = rows.filter(e => rowIds.indexOf(e.id) >= 0);
    if (!rowSelectionModeRef.current.checked) {
      rowSelectionModeRef.current.checked = true;
    }
    rowsToSelect.forEach((r, index) => { rowsToSelect[index].isSelected = true; });
    setHasSelectableRows(true);
    setSelectedRows(rowsToSelect.map(r => r.id));
  };

  const disableSelectableRows = () => {
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
        columnWidth="180px"
        ariaLabel="Worklist Data Grid"
        hasSelectableRows={hasSelectableRows}
        onRowSelect={(rowId) => {
          const newRows = [];
          const selectedRow = rows.find(e => e.id === rowId);
          selectedRow.isSelected = !selectedRow.isSelected;
          rows.forEach(element => {
            if (element.isSelected) {
              newRows.push(element.id);
            }
          });
          setSelectedRows(determineSelectedRows(false, newRows));
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
        onEnableSelectableRows={(selectedRowIds, unSelectedRowIds) => {
          if (unSelectedRowIds) {
            rows.forEach((r, index) => { if (unSelectedRowIds.indexOf(r.id) >= 0) { rows[index].isSelected = false; } });
          }
          enableSelectableRows(selectedRowIds);
        }}
      />
    </React.Fragment>
  );
};

export default RowSelection;
