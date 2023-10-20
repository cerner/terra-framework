import React from 'react';
import Table from 'terra-table';

const tableDataJSON = {
  cols: [
    { id: 'Column-0', displayName: 'Patient' },
    { id: 'Column-1', displayName: 'Location' },
    { id: 'Column-2', displayName: 'Illness Severity' },
    { id: 'Column-3', displayName: 'Visit' },
    { id: 'Column-4', displayName: 'Allergy' },
    { id: 'Column-5', displayName: 'Primary Contact' },
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
      ],
    },
    {
      id: '2',
      isSelected: true,
      cells: [
        { content: 'Wayne, Bruce' },
        { content: '1007-MTN-DR' },
        { content: 'Stable' },
        { content: 'Outpatient, 2 days' },
        { content: 'Phytochemicals' },
        { content: 'Grayson, Richard' },
      ],
    },
    {
      id: '3',
      cells: [
        { content: 'Parker, Peter' },
        { content: '1018-MTN-DR' },
        { content: 'Severe' },
        { content: 'Inpatient, 2 days' },
        { content: 'Aspirin' },
        { content: 'Grayson, Richard' },
      ],
    },
  ],
};

const TableWithoutHeaders = () => {
  const { cols, rows } = tableDataJSON;

  return (
    <Table
      id="table-without-headers"
      overflowColumns={cols}
      rows={rows}
      hasColumnHeaders={false}
    />
  );
};

export default TableWithoutHeaders;
