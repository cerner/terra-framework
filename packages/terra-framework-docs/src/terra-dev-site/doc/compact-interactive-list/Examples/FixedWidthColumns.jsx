import React from 'react';
import CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';
import rows from './rowsData';

// Source data for tests
const cols = [
  {
    id: 'Column-0',
    displayName: 'Col_1',
    width: '5em',
    align: alignTypes.CENTER,
  },
  {
    id: 'Column-1',
    displayName: 'Col_2',
    width: '20em',
  },
  {
    id: 'Column-2',
    displayName: 'Col_3',
    width: '5em',
    align: alignTypes.CENTER,
  },
];

const FixedWidthColumns = () => (
  <CompactInteractiveList
    id="interactive-compact-columns-width"
    rows={rows}
    columns={cols}
    numberOfColumns={2}
  />
);

export default FixedWidthColumns;
