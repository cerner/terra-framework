import React from 'react';
import CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';

import rows from './rowsData';

// Source data for tests
const cols = [
  {
    id: 'Column-0',
    displayName: 'Col_1',
    width: '60px',
    align: alignTypes.CENTER,
  },
  {
    id: 'Column-1',
    displayName: 'Col_2',
    flexGrow: true,
  },
  {
    id: 'Column-2',
    displayName: 'Col_3',
    width: '60px',
    align: alignTypes.CENTER,
  },
];

const FixedWidthColumns = () => (
  <CompactInteractiveList
    id="compact-interactive-list-fixed-width-columns2"
    rows={rows}
    columns={cols}
    numberOfColumns={2}
  />
);

export default FixedWidthColumns;
