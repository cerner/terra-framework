import React from 'react';
import { FlowsheetDataGrid } from 'terra-data-grid';

const gridDataJSON = {
  cols: [
    { id: 'Column-0', displayName: 'Vitals', isSelectable: false },
    { id: 'Column-1', displayName: 'March 16' },
    { id: 'Column-2', displayName: 'March 17' },
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

const DefaultFlowsheetDataGrid = () => {
  const { cols, rows } = gridDataJSON;

  return (
    <FlowsheetDataGrid
      id="default-terra-flowsheet-data-grid"
      columns={cols}
      rows={rows}
      ariaLabel="Flowsheet Data Grid"
    />
  );
};

export default DefaultFlowsheetDataGrid;
