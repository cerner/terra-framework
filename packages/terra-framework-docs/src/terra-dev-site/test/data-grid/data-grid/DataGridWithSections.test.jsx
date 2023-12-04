import React from 'react';
import DataGrid from 'terra-data-grid/lib/DataGrid';

const DataGridWithSections = () => {
  const gridDataJSON = {
    cols: [
      {
        id: 'Column-0', displayName: 'Patient', sortIndicator: 'ascending', isSelectable: true,
      },
      {
        id: 'Column-1', displayName: 'Location', isSelectable: true,
      },
      { id: 'Column-2', displayName: 'Illness Severity', isSelectable: true },
      { id: 'Column-3', displayName: 'Visit' },
      { id: 'Column-4', displayName: 'Allergy' },
      { id: 'Column-5', displayName: 'Primary Contact' },
    ],
    sections: [{
      id: 'section-0',
      isCollapsible: true,
      text: 'Test Section',
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
          ],
        },
      ],
    },
    {
      id: 'section-1',
      text: 'Test Section #2',
      rows: [
        {
          id: '3',
          cells: [
            { content: 'Parker, Peter' },
            { content: '1007-MTN' },
            { content: 'Unstable' },
            { content: 'Inpatient, 2 months' },
            { content: '' },
            { content: 'Octopus, Doctor' },
          ],
        },
        {
          id: '4',
          cells: [
            { content: 'Stark, Tony' },
            { content: '1007-MTN-DR' },
            { content: 'Stable' },
            { content: 'Outpatient, 2 days' },
            { content: 'Phytochemicals' },
            { content: 'America, Captain' },
          ],
        },
      ],
    }],
  };

  const { cols, sections } = gridDataJSON;

  return (
    <React.Fragment>
      <DataGrid
        id="default-terra-data-grid"
        overflowColumns={cols}
        sections={sections}
        rowHeaderIndex={0}
        ariaLabel="Data Grid"
      />
    </React.Fragment>
  );
};

export default DataGridWithSections;
