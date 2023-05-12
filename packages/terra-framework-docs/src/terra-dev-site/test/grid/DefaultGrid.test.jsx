import React from 'react';
import Grid from 'terra-grid';
import gridDataJSON from './gridData.json';

const DefaultGrid = () => {
  const rowHeaderIndex = 0;
  const { cols, rows } = gridDataJSON;

  return (
    <React.Fragment>
      <Grid
        id="terra-default-grid"
        columnHeaders={cols}
        rows={rows}
        rowHeaderIndex={rowHeaderIndex}
        rowDefaultHeight="50px"
        columnHeaderDefaultWidth="50px"
        columnHeaderHeight="50px"
        ariaLabel="ariaLabel"
      />
    </React.Fragment>
  );
};

export default DefaultGrid;
