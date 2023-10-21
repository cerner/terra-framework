/* eslint-disable react/forbid-dom-props */
import React from 'react';
import Table from 'terra-table';

const tableData = {
  cols: [
    { id: 'Column-0', displayName: 'Vitals' },
    { id: 'Column-1', displayName: 'March 16' },
    { id: 'Column-2', displayName: 'March 17' },
  ],
  rows: [
    {
      id: '1',
      cells: [
        { content: 'Heart Rate Monitored (bpm)' },
        { content: '68' },
        { content: '66' },
      ],
    },
    {
      height: '150px',
      id: '2',
      cells: [
        { content: 'Temperature Oral (degC)' },
        { content: '36.7', isMasked: true },
        { content: '36.9', isMasked: true },
      ],
    },
    {
      id: '3',
      cells: [
        { content: 'Cardiac Index (L/min/m2)' },
        { content: '2.25' },
        { content: '2.28' },
      ],
    },
    {
      id: '4',
      cells: [
        { content: 'ICP (mmHg)', isMasked: true },
        { content: '11' },
        { content: '11' },
      ],
    },
    {
      id: '5',
      cells: [
        { content: 'CPP (mmHg)' },
        { content: '63' },
        { content: '47' },
      ],
    },
  ],
};

const DefaultTable = () => {
  const { cols, rows } = tableData;

  return (
    <div id="scroll-test-container" style={{ padding: '10px' }}>
      <div style={{ height: '200px', marginBottom: '20px' }}>
        <Table
          id="scroll-test-1"
          overflowColumns={cols}
          rows={rows}
          rowHeaderIndex={0}
          columnHeaderHeight="50px"
          ariaLabel="table"
        />
      </div>
      <div style={{ height: '300px', marginBottom: '20px' }}>
        <Table
          id="scroll-test-2"
          overflowColumns={cols}
          rows={rows}
          rowHeaderIndex={0}
          columnHeaderHeight="50px"
          ariaLabel="table"
        />
      </div>
      <div style={{ width: '400px' }}>
        <Table
          id="scroll-test-3"
          overflowColumns={cols}
          rows={rows}
          rowHeaderIndex={0}
          columnHeaderHeight="50px"
          ariaLabel="table"
        />
      </div>
    </div>
  );
};

export default DefaultTable;
