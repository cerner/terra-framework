import React from 'react';
import DataGrid from 'terra-data-grid/lib/DataGrid';

const DefaultDataGrid = () => {
  const gridDataJSON = {
    cols: [
      {
        id: 'Column-0', displayName: 'Vitals', isSelectable: false, isResizable: true,
      },
      {
        id: 'Column-1', displayName: 'March 16', isSelectable: true, isResizable: true,
      },
      {
        id: 'Column-2', displayName: 'March 17', isSelectable: true, isResizable: true,
      },
      {
        id: 'Column-3', displayName: 'March 18', isSelectable: true, isResizable: true,
      },
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
          { content: '36.7', isMasked: true },
          { content: '36.9', isMasked: true },
          { content: '37', isMasked: true },
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
          { content: 'ICP (mmHg)', isMasked: true },
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

  const { cols, rows } = gridDataJSON;

  return (
    <React.Fragment>
      <DataGrid
        id="default-terra-data-grid"
        overflowColumns={cols}
        rows={rows}
        rowHeaderIndex={0}
        ariaLabel="Data Grid"
      />
    </React.Fragment>
  );
};

export default DefaultDataGrid;
