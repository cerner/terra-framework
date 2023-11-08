import React, { useState, useEffect } from 'react';
import DataGrid from 'terra-data-grid/lib/DataGrid';

const gridDataJSON = {
  cols: [
    {
      id: 'Column-0', displayName: 'Patient', isSelectable: true, isResizable: true,
    },
    {
      id: 'Column-1', displayName: 'Location', isSelectable: true, isResizable: true,
    },
    {
      id: 'Column-2', displayName: 'Illness Severity', isSelectable: true, isResizable: true,
    },
    {
      id: 'Column-3', displayName: 'Visit', isSelectable: true, isResizable: true,
    },
    {
      id: 'Column-4', displayName: 'Allergy', isSelectable: true, isResizable: true,
    },
    {
      id: 'Column-5', displayName: 'Primary Contact', isSelectable: true, isResizable: true,
    },
    {
      id: 'Column-6', displayName: 'Generic Order Counts', isSelectable: true, isResizable: true,
    },
    {
      id: 'Column-7', displayName: 'Patient Age', isSelectable: true, isResizable: true,
    },
    {
      id: 'Column-8', displayName: 'Medication History', isSelectable: true, isResizable: true,
    },
    {
      id: 'Column-9', displayName: 'My Relationship', isSelectable: true, isResizable: true,
    },
    {
      id: 'Column-10', displayName: 'Not Selectable', isSelectable: false, isResizable: true,
    },
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

const DataGridPinnedColumns = () => {
  const rowHeaderIndex = 0;
  const { cols } = gridDataJSON;
  const [rowData, setRowData] = useState([]);

  // Change row data for data grid to validate that pinned column border resizes correctly.
  useEffect(() => {
    setRowData(gridDataJSON.rows);
  }, []);

  return (
    <DataGrid
      id="data-grid-pinned-columns"
      pinnedColumns={cols.slice(0, 3)}
      overflowColumns={cols.slice(3)}
      rows={rowData}
      rowHeaderIndex={rowHeaderIndex}
      ariaLabel="Data Grid"
    />
  );
};

export default DataGridPinnedColumns;
