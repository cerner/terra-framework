import React from 'react';
import { DataGrid } from 'terra-data-grid';
import gridDataJSON from '../worklist-data-grid/gridData.json';

const DefaultDataGrid = () => {
  const rowHeaderIndex = 0;
  const { cols, rows } = gridDataJSON;

  return (
    <React.Fragment>
      <DataGrid
        id="default-terra-data-grid"
        overflowColumns={cols}
        rows={rows}
        rowHeaderIndex={rowHeaderIndex}
        columnHeaderHeight="50px"
        ariaLabel="Data Grid"
      />
    </React.Fragment>
  );
};

export default DefaultDataGrid;
