import React from 'react';
import WorklistDataGrid from 'terra-worklist-data-grid';
import gridDataJSON from './gridDataWithSelections.json';

const WorklistDataGridWithSelections = () => {
  const rowHeaderIndex = 0;
  const { cols, rows } = gridDataJSON;

  return (
    <React.Fragment>
      <WorklistDataGrid
        id="terra-worklist-data-grid-with-selections"
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

export default WorklistDataGridWithSelections;
