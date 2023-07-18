import React from 'react';
import { DisclosureManagerContext } from 'terra-disclosure-manager';
import WorklistDataGrid from 'terra-worklist-data-grid';
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
      ariaLabel: 'First Row',
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
      ariaLabel: 'Second Row',
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
const CellSelection = () => {
  const rowHeaderIndex = 0;
  const { cols, rows } = gridDataJSON;
  const disclosureManager = React.useContext(DisclosureManagerContext);

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
    <WorklistDataGrid
      id="worklist-data-grid-row-selection"
      columns={cols}
      rows={[...rows]}
      rowHeaderIndex={rowHeaderIndex}
      rowHeight="50px"
      defaultColumnWidth={100}
      columnHeaderHeight="100px"
      ariaLabel="Worklist Data Grid With Cell Selection"
      onCellSelect={onCellSelect}
    />
  );
};

export default CellSelection;
