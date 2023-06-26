import React from 'react';
import WorklistDataGrid from 'terra-worklist-data-grid';
import gridDataJSON from './gridMaskedCellData.json';

const WorklistDataGridMaskedCell = () => {
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
        columnWidth="100px"
        columnHeaderHeight="50px"
        ariaLabel="Worklist Data Grid"
      />
    </React.Fragment>
  );
};

export default WorklistDataGridMaskedCell;
