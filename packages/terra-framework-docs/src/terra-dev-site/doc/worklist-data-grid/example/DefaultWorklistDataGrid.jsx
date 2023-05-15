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
        columnHeaders={cols}
        rows={rows}
        rowHeaderIndex={rowHeaderIndex}
        rowDefaultHeight="50px"
        columnHeaderDefaultWidth="50px"
        columnHeaderHeight="50px"
        ariaLabel="aria label"
      />
    </React.Fragment>
  );
};

export default DefaultWorklistDataGrid;
