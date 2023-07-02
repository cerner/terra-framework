import React, { useState, useRef } from 'react';
import WorklistDataGrid from 'terra-worklist-data-grid';
import { DisclosureManagerContext } from 'terra-disclosure-manager';
import DisclosureComponent from './disclosure/DisclosureComponent';

const gridDataJSON = {
  cols: [
    { id: 'Column-0', displayName: 'Patient' },
    { id: 'Column-1', displayName: 'Location' },
    { id: 'Column-2', displayName: 'Illness Severity' },
    { id: 'Column-3', displayName: 'Visit' },
    { id: 'Column-4', displayName: 'Allergy' },
    { id: 'Column-5', displayName: 'Primary Contact' },
    { id: 'Column-6', displayName: 'Generic Order Counts' },
    { id: 'Column-7', displayName: 'Patient Age' },
    { id: 'Column-8', displayName: 'Medication History' },
    { id: 'Column-9', displayName: 'My Relationship' },
    { id: 'Column-10', displayName: 'Not Selectable', isSelectable: false },
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
        { content: '' },
        { isMasked: true },
        { isMasked: true },
        { content: 'Admitting Physician' },
        { content: '', isSelectable: false },
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
        { content: '' },
        { isMasked: true },
        { content: 'Admitting Physician' },
        { content: '', isSelectable: false },
      ],
    },
  ],
};

const WDGWithRowSelectionModeToggleAndCellSelectionDisclosure = () => {
  const rowSelectionModeRef = useRef();
  const rowHeaderIndex = 0;
  const { cols, rows } = gridDataJSON;
  const [selectedRows, setSelectedRows] = useState([]);
  const [hasSelectableRows, setHasSelectableRows] = useState(false);

  const disclosureManager = React.useContext(DisclosureManagerContext);

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

  const onCellSelect = (rowId, columnId) => {
    if (rowId && columnId) {
      const rowIndex = rows.findIndex(e => e.id === rowId);
      const colIndex = cols.findIndex(e => e.id === columnId);
      disclosureManager.disclose({
        preferredType: 'panel',
        size: 'tiny',
        content: {
          component: (
            <DisclosureComponent
              columnHeader={cols[colIndex].displayName}
              rowHeader={rows[rowIndex].cells[0].content}
              content={rows[rowIndex].cells[colIndex].content}
              name={cols[colIndex].displayName}
            />
          ),
        },
      });
    }
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
        onCellSelect={onCellSelect}
        onClearSelectedRows={() => {
          clearRowSelection();
        }}
        onDisableSelectableRows={() => {
          disableSelectableRows();
        }}
      />
    </React.Fragment>
  );
};

export default WDGWithRowSelectionModeToggleAndCellSelectionDisclosure;
