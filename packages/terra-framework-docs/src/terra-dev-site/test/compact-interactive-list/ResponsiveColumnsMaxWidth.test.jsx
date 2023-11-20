import React from 'react';
import CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';

import rows from './rowsData';

// Source data for tests
const cols = [
  {
    id: 'Column-0',
    displayName: 'Col_1',
    width: '6em',
    align: alignTypes.CENTER,
  },
  {
    id: 'Column-1',
    displayName: 'Col_2',
    width: '60em',
    flexGrow: true,
    minimumWidth: '10em',
    maximumWidth: '30em',
  },
  {
    id: 'Column-2',
    displayName: 'Col_3',
    width: '6em',
    align: alignTypes.CENTER,
  },
];

const ResponsiveColumnsMaxWidth = () => (
  <CompactInteractiveList
    id="compact-interactive-list-responsive-columns"
    rows={rows}
    columns={cols}
    numberOfColumns={2}
  />
);

export default ResponsiveColumnsMaxWidth;
