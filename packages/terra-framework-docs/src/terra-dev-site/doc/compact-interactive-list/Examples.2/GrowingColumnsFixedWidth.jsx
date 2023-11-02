import React from 'react';
import CompactInteractiveList from 'terra-compact-interactive-list';
import rows from './rowsData';

const cols = [
  {
    id: 'Column-0',
    displayName: 'Col_1',
    width: 60,
    alignToCenter: true,
  },
  {
    id: 'Column-1',
    displayName: 'Col_2',
    width: 200,
    flexGrow: true,
  },
  {
    id: 'Column-2',
    displayName: 'Col_3',
    width: 60,
    alignToCenter: true,
  },
];

const GrowingColumnsFixedWidth = () => (
  <CompactInteractiveList
    id="interactive-compact-list-fixed-width"
    rows={rows}
    columns={cols}
    numberOfColumns={2}
    width="800px"
  />
);

export default GrowingColumnsFixedWidth;
