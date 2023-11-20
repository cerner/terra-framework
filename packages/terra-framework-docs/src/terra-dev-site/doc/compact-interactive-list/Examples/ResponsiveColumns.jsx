import React from 'react';
import CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';
import rows from './rowsData';

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
    width: '200px', // will be disregarded because of the flexGrow prop
    flexGrow: true, // flexGrow prop has to be set here, as with width set, without that prop the column would not grow.
  },
  {
    id: 'Column-2',
    displayName: 'Col_3',
    width: '60px',
    align: alignTypes.CENTER,
  },
];

const ResponsiveColumns = () => (
  <CompactInteractiveList
    id="with-breakpoints"
    rows={rows}
    columns={cols}
    numberOfColumns={2}
  />
);

export default ResponsiveColumns;
