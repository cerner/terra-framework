/* eslint-disable react/forbid-dom-props */
import React from 'react';
import CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';
import rows from './rowsData';

const cols = [
  {
    id: 'Column-0',
    displayName: 'Col_1',
    maximumWidth: '4.5em',
    align: alignTypes.CENTER,
  },
  {
    id: 'Column-1',
    displayName: 'Col_2',
    maximumWidth: '25em',
    minimumWidth: '7em',
  },
  {
    id: 'Column-2',
    displayName: 'Col_3',
    maximumWidth: '5em',
    align: alignTypes.CENTER,
  },
];

const ScalableUnits = () => (
  <div style={{ fontSize: '1.25em' }}>
    <CompactInteractiveList
      id="growing-columns"
      rows={rows}
      columns={cols}
      numberOfColumns={2}
    />
  </div>
);

export default ScalableUnits;
