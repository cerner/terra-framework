import React from 'react';
import CompactInteractiveList from 'terra-compact-interactive-list';
import rows from './rowsData';

const cols = [
  {
    id: 'Column-0',
    displayName: 'Col_1',
  },
  {
    id: 'Column-1',
    displayName: 'Col_2',
    maximumWidth: 320,
  },
  {
    id: 'Column-2',
    displayName: 'Col_3',
  },
];

const GrowingColumnsUnknownWidthMaxWidth = () => (
  <CompactInteractiveList
    id="interactive-compact-list-with-max-width"
    rows={rows}
    columns={cols}
    numberOfColumns={2}
    minimumColumnWidth={40}
    columnMaximumWidth={60}
  />
);

export default GrowingColumnsUnknownWidthMaxWidth;
