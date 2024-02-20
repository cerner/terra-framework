/* eslint-disable no-param-reassign */
import React from 'react';
import { WorklistDataGrid } from 'terra-data-grid';
import { DisclosureManagerContext } from 'terra-disclosure-manager';
import DisclosureComponent from './disclosure/DisclosureComponent';

const gridDataJSON = {
  cols: [
    { id: 'Column-0', displayName: 'Patient' }, // column action prop is added later inside the component
    { id: 'Column-1', displayName: 'Location' }, // column action prop is added later inside the component
    { id: 'Column-2', displayName: 'Illness Severity' }, // column action prop is added later inside the component
    { id: 'Column-3', displayName: 'Visit' }, // column action prop is added later inside the component
    { id: 'Column-4', displayName: 'Allergy' }, // column action prop is added later inside the component
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

const ColumnActions = () => {
  const rowHeaderIndex = 0;
  const { cols, rows } = gridDataJSON;
  const disclosureManager = React.useContext(DisclosureManagerContext);

  // Add actions props to first 5 columns
  cols.forEach((col, columnIndex) => {
    if (columnIndex < 5) {
      col.action = {
        label: `${col.displayName} action`,
        onClick: () => disclosureManager.disclose({
          preferredType: 'panel',
          size: 'small',
          content: {
            component: (
              <DisclosureComponent
                columnHeader={col.displayName}
                rowHeader="Detailed Info"
                content="According to the Journal of Healthcare Management/American College of Healthcare Executives, a 500-bed hospital loses over $4 million annually due to clinical communication inefficiencies. A unified clinical communication strategy can help health systems begin to close the gap."
                name={col.displayName}
              />
            ),
          },
        }),
      };
    }
  });

  return (
    <WorklistDataGrid
      id="worklist-data-grid-with-column-actions"
      pinnedColumns={cols.slice(0, 3)}
      overflowColumns={cols.slice(3)}
      rows={rows}
      rowHeaderIndex={rowHeaderIndex}
      defaultColumnWidth={180}
      ariaLabel="Worklist Data Grid with Column Actions"
    />
  );
};

export default ColumnActions;
