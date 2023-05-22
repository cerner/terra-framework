import React from 'react';
import WorklistDataGrid from 'terra-worklist-data-grid';
import gridDataJSON from './gridData.json';

const DefaultWorklistDataGrid = () => {
  const rowHeaderIndex = 0;
  const { cols, rows } = gridDataJSON;

  return (
    <React.Fragment>
      <WorklistDataGrid
        id="default-terra-worklist-data-grid"
        columns={cols}
        rows={rows}
        rowHeaderIndex={rowHeaderIndex}
        rowHeight="50px"
        columnWidth="50px"
        columnHeight="50px"
        ariaLabel="aria label"
      />
    </React.Fragment>
  );
};

export default DefaultWorklistDataGrid;
