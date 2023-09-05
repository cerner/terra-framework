import React, { useState, useRef, useCallback } from 'react';
import WorklistDataGrid from 'terra-worklist-data-grid';
import WorklistDataGridUtils from 'terra-worklist-data-grid/src/utils/WorklistDataGridUtils';

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
        { content: '1107-MTN-DR' },
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
        { content: 'Carr, Alicia' },
        { content: '1007-MTN' },
        { content: 'Unstable' },
        { content: 'Inpatient, 3 months' },
        { content: '' },
        { content: 'Quinzell, Harleen' },
        { content: '' },

      ],
    },
    {
      id: '4',
      cells: [
        { content: 'McMurphy, Donald' },
        { content: '1024-MTN', isMasked: true },
        { content: 'Stable' },
        { content: 'Inpatient, 5 months' },
        { content: '' },
        { content: 'Quinzell, Harleen' },
        { content: '' },
      ],
    },
    {
      id: '5',
      cells: [
        { content: 'Peters, Timothy' },
        { content: '1207-MTN' },
        { content: 'Unstable', isMasked: true },
        { content: 'Outpatient, 15 days' },
        { content: '' },
        { content: 'Quinzell, Harleen' },
        { content: '' },
      ],
    },
    {
      id: '6',
      cells: [
        { content: 'Jones, Becky' },
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
        { content: 'Williams, Peter' },
        { content: '1002-KTN' },
        { content: 'Unstable' },
        { content: 'Outpatient, 9 days' },
        { content: '' },
        { content: 'Quinzell, Harleen' },
        { content: '' },
      ],
    },
    {
      id: '8',
      cells: [
        { content: 'Pratt, Michaela' },
        { content: '2108-NTN' },
        { content: 'Stable' },
        { content: 'Outpatient, 45 days' },
        { content: '' },
        { content: 'Quinzell, Harleen' },
        { content: '' },
      ],
    },
    {
      id: '9',
      cells: [
        { content: 'Styris, Scott' },
        { content: '1007-MTN', isMasked: true },
        { content: 'Unstable' },
        { content: 'Inpatient, 2 months' },
        { content: '' },
        { content: 'Quinzell, Harleen' },
        { content: '' },
      ],
    },
    {
      id: '10',
      cells: [
        { content: 'Cook, Allan' },
        { content: '1700-SKB' },
        { content: 'Stable' },
        { content: 'Inpatient, 4 months' },
        { content: '' },
        { content: 'Quinzell, Harleen' },
        { content: '' },
      ],
    },
    {
      id: '11',
      cells: [
        { content: 'Lahey, Nathaniel' },
        { content: '1348-DRS' },
        { content: 'Unstable' },
        { content: 'Inpatient, 1 months' },
        { content: '' },
        { content: 'Quinzell, Harleen' },
        { content: '' },
      ],
    },
    {
      id: '12',
      cells: [
        { content: 'Harris, Isabella' },
        { content: '1809-MTN' },
        { content: 'Stable' },
        { content: 'Inpatient, 6 months' },
        { content: '' },
        { content: 'Quinzell, Harleen' },
        { content: '' },
      ],
    },
    {
      id: '13',
      cells: [
        { content: 'Millstone, Asher' },
        { content: '4133-MZN' },
        { content: 'Unstable' },
        { content: 'Inpatient, 9 months' },
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
  const [rowData, setRowData] = useState(rows);
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

  const clearRowSelection = useCallback(() => {
    // eslint-disable-next-line no-param-reassign
    rows.forEach(r => { if (r.isSelected) { r.isSelected = false; } });
    setSelectedRows([]);
  }, [rows]);

  const disableSelectableRows = useCallback(() => {
    rowSelectionModeRef.current.checked = false;
    setHasSelectableRows(false);
    clearRowSelection();
  }, [clearRowSelection]);

  const onRowSelectionModeChange = useCallback((event) => {
    if (!event.target.checked) {
      clearRowSelection();
    }
    setHasSelectableRows(event.target.checked);
  }, [clearRowSelection]);

  const onColumnSelect = useCallback((columnId) => {
    if (columnId === WorklistDataGridUtils.ROW_SELECTION_COLUMN.id) {
      // eslint-disable-next-line no-alert
      alert('Row Selection Header Clicked');
    }
  }, []);

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

  const enableRowSelection = useCallback(() => {
    if (!rowSelectionModeRef.current.checked) {
      rowSelectionModeRef.current.checked = true;
    }
    setHasSelectableRows(true);
  }, []);

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
        overflowColumns={cols}
        rows={rowData}
        rowHeaderIndex={rowHeaderIndex}
        columnWidth="180px"
        ariaLabel="Worklist Data Grid"
        hasSelectableRows={hasSelectableRows}
        onRowSelect={onRowSelect}
        onRowSelectAll={() => {
          const newRows = [];
          rows.forEach(e => { e.isSelected = true; newRows.push(e.id); });
          setSelectedRows(determineSelectedRows(true, newRows));
        }}
        onClearSelectedRows={clearRowSelection}
        onDisableSelectableRows={disableSelectableRows}
        onColumnSelect={onColumnSelect}
        onEnableRowSelection={enableRowSelection}
      />
    </React.Fragment>
  );
};

export default RowSelection;
