/* eslint-disable no-alert */
import React from 'react';
import Table from 'terra-table';

const tableDataJSON = {
  cols: [
    {
      id: 'Column-0',
      displayName: 'Patient',
      action: {
        label: 'Patient action',
        onClick: () => alert('Patient action clicked'),
      },
    },
    {
      id: 'Column-1',
      displayName: 'Location',
      action: {
        label: 'Location action',
        onClick: () => alert('Location action clicked'),
      },
    },
    { id: 'Column-2', displayName: 'Illness Severity' },
    { id: 'Column-3', displayName: 'Visit' },
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
        { content: 'Inpatient, 2 months' },
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
        { content: 'Outpatient, 2 days' },
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

const TableRowSelection = () => (
  <Table
    id="table-with-actions"
    pinnedColumns={tableDataJSON.cols.slice(0, 2)}
    overflowColumns={tableDataJSON.cols.slice(2)}
    rows={tableDataJSON.rows}
    ariaLabel="Table with pinned columns"
  />
);

export default TableRowSelection;
