import React, { useState } from 'react';
import WorklistDataGrid from 'terra-worklist-data-grid';

const gridDataJSON = {
  cols: [
    {
      id: 'Column-0', displayName: 'Patient', sortIndicator: 'ascending', hasError: true,
    },
    { id: 'Column-1', displayName: 'Location' },
    { id: 'Column-2', displayName: 'Illness Severity' },
    { id: 'Column-3', displayName: 'Visit' },
    { id: 'Column-4', displayName: 'Allergy', hasError: true },
    { id: 'Column-5', displayName: 'Primary Contact' },
    { id: 'Column-6', displayName: 'Generic Order Counts' },
    { id: 'Column-7', displayName: 'Patient Age' },
    { id: 'Column-8', displayName: 'Medication History' },
    { id: 'Column-9', displayName: 'My Relationship' },
    { id: 'Column-10', displayName: 'Not Selectable', isSelectable: false },
  ],
  rows: [
    {
      id: '1',
      cells: [
        { content: 'Fleck, Arthur' },
        { content: '1007-MTN' },
        { content: 'Unstable' },
        { content: 'Inpatient, 2 months' },
        { content: '' },
        { content: 'Quinzell, Harleen' },
        { content: '' },
        { isMasked: true },
        { isMasked: true },
        { content: 'Admitting Physician' },
        { content: '', isSelectable: false },
      ],
    },
    {
      id: '2',
      cells: [
        { content: 'Wayne, Bruce' },
        { content: '1007-MTN-DR' },
        { content: 'Stable' },
        { content: 'Outpatient, 2 days' },
        { content: 'Phytochemicals' },
        { content: 'Grayson, Richard' },
        { content: '' },
        { content: '' },
        { isMasked: true },
        { content: 'Admitting Physician' },
        { content: '', isSelectable: false },
      ],
    },
  ],
};

const DefaultWorklistDataGrid = () => {
  const rowHeaderIndex = 0;
  const { cols, rows } = gridDataJSON;

  const [gridColumns, setGridColumns] = useState(cols);
  const [gridRows, setGridRows] = useState(rows);

  const onColumnSelect = (columnId) => {
    const newColumnArray = gridColumns.map((column, columnIndex) => {
      const newColumn = { ...column };

      if (column.id === columnId) {
        newColumn.sortIndicator = column.sortIndicator === 'ascending' ? 'descending' : 'ascending';

        const newGridRows = [...gridRows];
        newGridRows.sort((rowA, rowB) => {
          const firstRowContent = rowA.cells[columnIndex].content || '';
          const secondRowContent = rowB.cells[columnIndex].content || '';

          if (newColumn.sortIndicator === 'ascending') {
            return firstRowContent.localeCompare(secondRowContent);
          }
          return secondRowContent.localeCompare(firstRowContent);
        });

        setGridRows(newGridRows);
      } else {
        newColumn.sortIndicator = undefined;
      }

      return newColumn;
    });

    setGridColumns(newColumnArray);
  };

  return (
    <React.Fragment>
      <WorklistDataGrid
        id="default-terra-worklist-data-grid"
        overflowColumns={gridColumns}
        rows={gridRows}
        rowHeaderIndex={rowHeaderIndex}
        rowHeight="50px"
        defaultColumnWidth={100}
        columnHeaderHeight="50px"
        onColumnSelect={onColumnSelect}
        ariaLabel="Worklist Data Grid"
      />
    </React.Fragment>
  );
};

export default DefaultWorklistDataGrid;
