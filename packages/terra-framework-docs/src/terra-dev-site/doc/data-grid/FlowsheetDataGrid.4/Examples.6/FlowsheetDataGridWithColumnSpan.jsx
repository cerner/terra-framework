import React from 'react';
import { FlowsheetDataGrid } from 'terra-data-grid';

const gridDataJSON = {
  cols: [
    { id: 'Column-0', displayName: 'Vitals' },
    { id: 'Column-1', displayName: 'March 16', columnSpan: 2 },
    { id: 'Column-2', displayName: 'March 17', columnSpan: 3 },
    { id: 'Column-3', displayName: 'March 18' },
  ],
  rows: [
    {
      id: '1',
      cells: [
        { content: 'Heart Rate Monitored (bpm)' },
        { content: '68' },
        { content: '69' },
        { content: '66' },
        { content: '68' },
        { content: '69' },
        { content: '67' },
      ],
    },
    {
      id: '2',
      cells: [
        { content: 'Temperature Oral (degC)' },
        { content: '36.7' },
        { content: '36.9' },
        { content: '36.7' },
        { content: '37' },
        { content: '36.7' },
        { content: '37' },
      ],
    },
    {
      id: '3',
      cells: [
        { content: 'Cardiac Index (L/min/m2)' },
        { content: '2.25' },
        { content: '2.28' },
        { content: '2.25' },
        { content: '2.8' },
        { content: '2.25' },
        { content: '2.8' },
      ],
    },
    {
      id: '4',
      cells: [
        { content: 'ICP (mmHg)' },
        { content: '11' },
        { content: '12' },
        { content: '11' },
        { content: '12' },
        { content: '13' },
        { content: '14' },
      ],
    },
    {
      id: '5',
      cells: [
        { content: 'CPP (mmHg)' },
        { content: '63' },
        { content: '47' },
        { content: '63' },
        { content: '48' },
        { content: '63' },
        { content: '47' },
      ],
    },
  ],
};

const FlowsheetDataGridWithColumnSpan = () => {
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

export default FlowsheetDataGridWithColumnSpan;
