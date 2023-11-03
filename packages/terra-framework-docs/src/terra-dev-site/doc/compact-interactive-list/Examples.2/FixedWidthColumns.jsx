import React from 'react';
import CompactInteractiveList from 'terra-compact-interactive-list';
import rows from './rowsData';

// Source data for tests
const cols = [
  {
    id: 'Column-0',
    displayName: 'Col_1',
    width: 5,
    alignToCenter: true,
  },
  {
    id: 'Column-1',
    displayName: 'Col_2',
    width: 20,
  },
  {
    id: 'Column-2',
    displayName: 'Col_3',
    width: 5,
    alignToCenter: true,
  },
];

const FixedWidthColumns = () => (
  <CompactInteractiveList
    id="interactive-compact-columns-width"
    rows={rows}
    columns={cols}
    numberOfColumns={2}
    widthUnit="em"
  />
);

export default FixedWidthColumns;
