import React from 'react';
import WorklistDataGrid from 'terra-worklist-data-grid';

const gridDataJSON = {
  cols: [
    { id: 'Column-0', displayName: 'Patient', isSelectable: true },
    { id: 'Column-1', displayName: 'Location', isSelectable: true },
    { id: 'Column-2', displayName: 'Illness Severity', isSelectable: true },
    { id: 'Column-3', displayName: 'Visit', isSelectable: true },
    { id: 'Column-4', displayName: 'Allergy', isSelectable: true },
    { id: 'Column-5', displayName: 'Primary Contact', isSelectable: true },
    { id: 'Column-6', displayName: 'Generic Order Counts', isSelectable: true },
    { id: 'Column-7', displayName: 'Patient Age', isSelectable: true },
    { id: 'Column-8', displayName: 'Medication History', isSelectable: true },
    { id: 'Column-9', displayName: 'My Relationship', isSelectable: true },
    { id: 'Column-10', displayName: 'Not Selectable' },
  ],
  rows: [
    {
      id: 1,
      cells: [
        { content: 'Fleck, Arthur', isSelectable: true },
        { content: '1007-MTN', isSelectable: true },
        { content: 'Unstable', isSelectable: true },
        { content: 'Inpatient, 2 months', isSelectable: true },
        { content: '', isSelectable: true },
        { content: 'Quinzell, Harleen', isSelectable: true },
        { content: '', isSelectable: true },
        { isMasked: true, isSelectable: true },
        { isMasked: true },
        { content: 'Admitting Physician', isSelectable: true },
        { content: '' },
      ],
    },
    {
      id: 2,
      cells: [
        { content: 'Wayne, Bruce', isSelectable: true },
        { content: '1007-MTN-DR', isSelectable: true },
        { content: 'Stable', isSelectable: true },
        { content: 'Outpatient, 2 days', isSelectable: true },
        { content: 'Phytochemicals', isSelectable: true },
        { content: 'Grayson, Richard', isSelectable: true },
        { content: '', isSelectable: true },
        { content: '', isSelectable: true },
        { isMasked: true },
        { content: 'Admitting Physician', isSelectable: true },
        { content: '' },
      ],
    },
  ],
};

const WorklistDataGridWithSelections = () => {
  const { cols, rows } = gridDataJSON;

  return (
    <React.Fragment>
      <WorklistDataGrid
        id="terra-worklist-data-grid-with-selections"
        columns={cols}
        rows={rows}
        rowHeight="50px"
        columnWidth="50px"
        columnHeaderHeight="50px"
        ariaLabel="Worklist Data Grid"
      />
    </React.Fragment>
  );
};

export default WorklistDataGridWithSelections;
