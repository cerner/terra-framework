/* eslint-disable react/forbid-dom-props */
import React from 'react';
import CompactInteractiveList from 'terra-compact-interactive-list';
import rows from './rowsData';

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
    maximumWidth: 25,
    minimunWidth: 7,
  },
  {
    id: 'Column-2',
    displayName: 'Col_3',
    width: 5,
    alignToCenter: true,
  },
];

const ScalableUnits = () => (
  <div style={{ fontSize: '1.25em' }}>
    <CompactInteractiveList
      id="growing-columns"
      rows={rows}
      columns={cols}
      numberOfColumns={2}
      widthUnit="em"
    />
  </div>
);

export default ScalableUnits;
