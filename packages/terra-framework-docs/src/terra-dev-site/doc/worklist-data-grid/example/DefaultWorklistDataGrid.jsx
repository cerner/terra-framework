import React from 'react';
import WorklistDataGrid from 'terra-worklist-data-grid';
import gridDataJSON from './gridData.json';

const { cols, rows } = gridDataJSON;

const DefaultWorklistDataGrid = () => (
  <WorklistDataGrid
    id="default-terra-worklist-data-grid"
    columns={cols}
    rows={[...rows]}
    rowHeight="50px"
    columnWidth="50px"
    columnHeaderHeight="50px"
    ariaLabel="Worklist Data Grid"
  />
);

export default DefaultWorklistDataGrid;
