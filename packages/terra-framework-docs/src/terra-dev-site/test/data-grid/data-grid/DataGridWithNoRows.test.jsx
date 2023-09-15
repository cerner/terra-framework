import React from 'react';
import DataGrid from 'terra-data-grid/lib/DataGrid';

const DataGridWithNoRows = () => {
  const cols = [
    { id: 'Column-0', displayName: 'Vitals', isSelectable: false },
    { id: 'Column-1', displayName: 'March 16' },
    { id: 'Column-2', displayName: 'March 17' },
    { id: 'Column-3', displayName: 'March 18' },
  ];

  return (
    <React.Fragment>
      <DataGrid
        id="terra-data-grid-with-no-rows"
        overflowColumns={cols}
        rows={[]}
        rowHeaderIndex={0}
        columnHeaderHeight="50px"
        ariaLabel="Data Grid"
        hasSelectableRows
      />
    </React.Fragment>
  );
};

export default DataGridWithNoRows;
