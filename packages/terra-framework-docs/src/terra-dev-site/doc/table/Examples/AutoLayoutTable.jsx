import React from 'react';
import Table from 'terra-table';

const tableData = {
  cols: [
    { id: 'Column-0', displayName: 'Patient', width: '35%' },
    { id: 'Column-1', displayName: 'Location', width: '25%' },
    { id: 'Column-2', displayName: 'Illness Severity', width: '15%' },
    { id: 'Column-3', displayName: 'Visit', width: '25%' },
  ],
  rows: [
    {
      id: '1',
      cells: [
        { content: 'Fleck, Arthur' },
        { content: '1007-MTN' },
        { content: 'Unstable' },
        { content: 'Inpatient, 2 months' },
      ],
    },
    {
      id: '2',
      cells: [
        { content: 'Wayne, Bruce' },
        { content: '1007-MTN-DR' },
        { content: 'Stable' },
        { content: 'Outpatient, 2 days' },
      ],
    },
  ],
};

const AutoLayoutTable = () => (
  <Table
    id="my-table-id"
    isAutoLayout
    overflowColumns={tableData.cols}
    rows={tableData.rows}
    ariaLabel="Table"
  />
);

export default AutoLayoutTable;
