import React from 'react';
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
        { content: '', isMasked: true },
      ],
    },
    {
      id: '2',
      cells: [
        { content: 'Wayne, Bruce' },
        { content: '1107-MTN-DR' },
        { content: 'Stable' },
        { content: 'Outpatient, 2 days' },
        { content: 'Phytochemicals' },
        { content: 'Grayson, Richard' },
        { content: '' },

      ],
    },
    {
      id: '3',
      cells: [
        { content: 'Carr, Alicia' },
        { content: '1007-MTN' },
        { content: 'Unstable' },
        { content: 'Inpatient, 3 months' },
        { content: '' },
        { content: 'Quinzell, Harleen' },
        { content: '' },

      ],
    },
    {
      id: '4',
      cells: [
        { content: 'McMurphy, Donald' },
        { content: '1024-MTN', isMasked: true },
        { content: 'Stable' },
        { content: 'Inpatient, 5 months' },
        { content: '' },
        { content: 'Quinzell, Harleen' },
        { content: '' },
      ],
    },
    {
      id: '5',
      cells: [
        { content: 'Peters, Timothy' },
        { content: '1207-MTN' },
        { content: 'Unstable', isMasked: true },
        { content: 'Outpatient, 15 days' },
        { content: '' },
        { content: 'Quinzell, Harleen' },
        { content: '' },
      ],
    },
    {
      id: '6',
      cells: [
        { content: 'Jones, Becky' },
        { content: '1007-MTN' },
        { content: 'Unstable' },
        { content: 'Inpatient, 2 months' },
        { content: '' },
        { content: 'Quinzell, Harleen' },
        { content: '' },
      ],
    },
    {
      id: '7',
      cells: [
        { content: 'Williams, Peter' },
        { content: '1002-KTN' },
        { content: 'Unstable' },
        { content: 'Outpatient, 9 days' },
        { content: '' },
        { content: 'Quinzell, Harleen' },
        { content: '' },
      ],
    },
    {
      id: '8',
      cells: [
        { content: 'Pratt, Michaela' },
        { content: '2108-NTN' },
        { content: 'Stable' },
        { content: 'Outpatient, 45 days' },
        { content: '' },
        { content: 'Quinzell, Harleen' },
        { content: '' },
      ],
    },
    {
      id: '9',
      cells: [
        { content: 'Styris, Scott' },
        { content: '1007-MTN', isMasked: true },
        { content: 'Unstable' },
        { content: 'Inpatient, 2 months' },
        { content: '' },
        { content: 'Quinzell, Harleen' },
        { content: '' },
      ],
    },
    {
      id: '10',
      cells: [
        { content: 'Cook, Allan' },
        { content: '1700-SKB' },
        { content: 'Stable' },
        { content: 'Inpatient, 4 months' },
        { content: '' },
        { content: 'Quinzell, Harleen' },
        { content: '' },
      ],
    },
    {
      id: '11',
      cells: [
        { content: 'Lahey, Nathaniel' },
        { content: '1348-DRS' },
        { content: 'Unstable' },
        { content: 'Inpatient, 1 months' },
        { content: '' },
        { content: 'Quinzell, Harleen' },
        { content: '' },
      ],
    },
    {
      id: '12',
      cells: [
        { content: 'Harris, Isabella' },
        { content: '1809-MTN' },
        { content: 'Stable' },
        { content: 'Inpatient, 6 months' },
        { content: '' },
        { content: 'Quinzell, Harleen' },
        { content: '' },
      ],
    },
    {
      id: '13',
      cells: [
        { content: 'Millstone, Asher' },
        { content: '4133-MZN' },
        { content: 'Unstable' },
        { content: 'Inpatient, 9 months' },
        { content: '' },
        { content: 'Quinzell, Harleen' },
        { content: '' },
      ],
    },
  ],
};

const DataGridStickyHeaderWithActions = () => {
  const rowHeaderIndex = 0;
  const { cols, rows } = gridDataJSON;

  // Add actions to first 5 columns
  cols.forEach((col, columnIndex) => {
    if (columnIndex < 5) {
      // eslint-disable-next-line no-param-reassign
      col.action = {
        label: `${col.displayName} action`,
        // eslint-disable-next-line no-alert
        onClick: () => alert(`${col.displayName} action called`),
      };
    }
  });

  return (
    // eslint-disable-next-line react/forbid-dom-props
    <div style={{ height: '250px' }}>
      <DataGrid
        id="terra-data-grid-sticky-with-actions"
        overflowColumns={cols}
        rows={[...rows]}
        rowHeaderIndex={rowHeaderIndex}
        columnWidth="180px"
        ariaLabel="Data Grid"
      />
    </div>
  );
};

export default DataGridStickyHeaderWithActions;
