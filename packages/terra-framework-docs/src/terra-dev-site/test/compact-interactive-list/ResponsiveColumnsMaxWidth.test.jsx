import React from 'react';
import CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';

import rows from './rowsData';

// Source data for tests
const cols = [
  {
    id: 'Column-0',
    displayName: 'Col_1',
    width: 6,
    align: alignTypes.CENTER,
  },
  {
    id: 'Column-1',
    displayName: 'Col_2',
    width: 20,
    flexGrow: true,
    minimumWidth: 10,
    maximumWidth: 30,
  },
  {
    id: 'Column-2',
    displayName: 'Col_3',
    width: 6,
    align: alignTypes.CENTER,
  },
];

const ResponsiveColumnsMaxWidth = () => (
  <CompactInteractiveList
    id="compact-interactive-list-id"
    rows={rows}
    columns={cols}
    numberOfColumns={2}
    widthUnit="em"
  />
);

export default ResponsiveColumnsMaxWidth;
