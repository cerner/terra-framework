import React from 'react';
import Table from 'terra-table';

const tableData = {
  cols: [
    { id: 'Column-0', displayName: 'Patient', isResizable: true },
    { id: 'Column-1', displayName: 'Location', isResizable: true },
    { id: 'Column-2', displayName: 'Illness Severity', isResizable: true },
    { id: 'Column-3', displayName: 'Visit Details', columnSpan: 2, isResizable: true },
    { id: 'Column-4', displayName: 'Allergy' },
    { id: 'Column-5', displayName: 'Primary Contact' },
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
        { content: '' },
        { content: 'Quinzell, Harleen' },
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
        { content: 'Outpatient' },
        { content: '2 days' },
        { content: 'Phytochemicals' },
        { content: 'Grayson, Richard' },
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
    id="table-with-column-span"
    overflowColumns={tableData.cols}
    rows={tableData.rows}
    ariaLabel="Table"
  />
);

export default TableColumnSpan;
