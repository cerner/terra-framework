import React from 'react';
import DataGrid from 'terra-data-grid/lib/DataGrid';

const gridDataJSON = {
  cols: [
    { id: 'Column-0', displayName: 'Vitals' },
    { id: 'Column-1', displayName: 'Fixed'  },
    { id: 'Column-2', displayName: 'March 17', isResizable: false  },
    { id: 'Column-3', displayName: 'March 18' },
  ],
  rows: [
    {
      id: '1',
      cells: [
        { content: 'Heart Rate Monitored (bpm)' },
        { content: '68' },
        { content: '66' },
        { content: '67' },
      ],
    },
    {
      height: '150px',
      id: '2',
      cells: [
        { content: 'Temperature Oral (degC)' },
        { content: '36.7' },
        { content: '36.9' },
        { content: '37' },
      ],
    },
    {
      id: '3',
      cells: [
        { content: 'Cardiac Index (L/min/m2)' },
        { content: '2.25' },
        { content: '2.28' },
        { content: '2.8' },
      ],
    },
    {
      id: '4',
      cells: [
        { content: 'ICP (mmHg)' },
        { content: '11' },
        { content: '11' },
        { content: '12' },
      ],
    },
    {
      id: '5',
      cells: [
        { content: 'CPP (mmHg)' },
        { content: '63' },
        { content: '47' },
        { content: '48' },
      ],
    },
  ],
};

const DataGridWithColumnResizing = () => {
  const rowHeaderIndex = 0;
  const { cols, rows } = gridDataJSON;

  return (
    <DataGrid
      id="terra-data-grid-with-column-resizing"
      overflowColumns={cols}
      rows={rows}
      rowHeaderIndex={rowHeaderIndex}
      rowHeight="50px"
      columnHeaderHeight="50px"
      ariaLabel="Data Grid With Column Resizing"
    />
  );
};

export default DataGridWithColumnResizing;
