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
    // flexGrow prop is not set here, but as there is no width set, the column will be flex growing anyway
  },
  {
    id: 'Column-2',
    displayName: 'Col_3',
    width: 60,
    alignToCenter: true,
  },
];

const GrowingColumnsFixedColumnNumber = () => (
  <CompactInteractiveList
    id="interactive-compact-list-fixed-column-number"
    rows={rows}
    columns={cols}
    numberOfColumns={2}
  />
);

export default GrowingColumnsFixedColumnNumber;
