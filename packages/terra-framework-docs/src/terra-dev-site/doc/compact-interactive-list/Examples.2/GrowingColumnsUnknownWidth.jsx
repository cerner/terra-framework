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
  },
  {
    id: 'Column-2',
    displayName: 'Col_3',
  },
];

const GrowingColumnsUnknownWidth = () => (
  <CompactInteractiveList
    id="interactive-compact-list-unknown-width"
    rows={rows}
    columns={cols}
    numberOfColumns={2}
  />
);

export default GrowingColumnsUnknownWidth;
