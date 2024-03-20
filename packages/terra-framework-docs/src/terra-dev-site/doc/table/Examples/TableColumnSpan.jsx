import React from 'react';
import Table from 'terra-table';

const tableData = {
  cols: [
    { id: 'Column-0', displayName: 'Patient' },
    { id: 'Column-1', displayName: 'Location' },
    { id: 'Column-2', displayName: 'Illness Severity' },
    { id: 'Column-3', displayName: 'Visit Details', columnSpan: 3 },
    { id: 'Column-4', displayName: 'Allergy' },
    { id: 'Column-5', displayName: 'Primary Contact', columnSpan: 2 },
    { id: 'Column-6', displayName: 'Generic Order Counts' },
    { id: 'Column-7', displayName: 'Patient Age' },
    { id: 'Column-8', displayName: 'Medication History' },
    { id: 'Column-9', displayName: 'My Relationship' },
  ],
  rows: [
    {
      id: '1',
      cells: [
        { content: 'Fleck, Arthur' },
        { content: '1007-MTN' },
        { content: 'Unstable' },
        { content: 'Inpatient' },
        { content: '2 months' },
        { content: 'x months' },
        { content: '' },
        { content: 'Quinzell, Harleen' },
        { content: 'x, y' },
        { content: '' },
        { isMasked: true, maskedLabel: 'Age Hidden' },
        { isMasked: true },
        { content: 'Admitting Physician' },
      ],
    },
    {
      id: '2',
      cells: [
        { content: 'Wayne, Bruce' },
        { content: '1007-MTN-DR' },
        { content: 'Stable' },
        { content: 'Outpatient'},
        {content: '2 days' },
        { content: 'x months' },
        { content: 'Phytochemicals' },
        { content: 'Grayson, Richard' },
        { content: 'x, y' },
        { content: '' },
        { content: '' },
        { isMasked: true },
        { content: 'Admitting Physician' },
      ],
    },
  ],
};

const TableColumnSpan = () => (
  <Table
    id="my-table-id"
    overflowColumns={tableData.cols}
    rows={tableData.rows}
    ariaLabel="Table"
  />
);

export default TableColumnSpan;