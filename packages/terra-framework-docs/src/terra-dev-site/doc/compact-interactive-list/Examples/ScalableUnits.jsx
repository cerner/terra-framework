/* eslint-disable react/forbid-dom-props */
import React from 'react';
import CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';
import rows from './rowsData';

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
    // flexGrow prop is not set here, but as there is no width set, the column will be flex growing anyway
    maximumWidth: '25em', // maximumWidth is reccomended for flex growing columns so that they don't grow beyond reasonable.
    minimumWidth: '7em', // minimumWidth is reccomended for flex growing columns so that they don't squish beyond reasonable.
  },
  {
    id: 'Column-2',
    displayName: 'Col_3',
    width: '5em',
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
