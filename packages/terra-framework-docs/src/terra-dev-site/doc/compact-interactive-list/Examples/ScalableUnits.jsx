/* eslint-disable react/forbid-dom-props */
import React from 'react';
import CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';
import { IconDocuments, IconFeaturedOutline, IconImage } from 'terra-icon';

const rows = [
  {
    id: 'row_1',
    cells: [
      { content: <IconDocuments a11yLabel="Documents" height="1.5em" width="1.5em" /> },
      { content: 'Discern Care Set (1)' },
      { content: <IconFeaturedOutline a11yLabel="Featured" height="1.5em" width="1.5em" /> },
    ],
  },
  {
    id: 'row_2',
    cells: [
      { content: <IconImage a11yLabel="Picture" height="1.5em" width="1.5em" /> },
      { content: 'Initial observation Care/Day High Severity 99220 (2)' },
      { content: <IconFeaturedOutline a11yLabel="Featured" height="1.5em" width="1.5em" /> },
    ],
  },
  {
    id: 'row_3',
    cells: [
      { content: <IconImage a11yLabel="Picture" height="1.5em" width="1.5em" /> },
      { content: 'Arterial Sheath Care (3)' },
      { content: <IconFeaturedOutline a11yLabel="Featured" height="1.5em" width="1.5em" /> },
    ],
  },
  {
    id: 'row_4',
    cells: [
      { content: ' ' },
      { content: 'Sbsq Observation Care/Day High Severity 99226 (4)' },
      { content: ' ' },
    ],
  },
  {
    id: 'row_5',
    cells: [
      { content: <IconImage a11yLabel="Picture" height="1.5em" width="1.5em" /> },
      { content: 'Arterial Sheath Care (5)' },
      { content: <IconFeaturedOutline a11yLabel="Featured" height="1.5em" width="1.5em" /> },
    ],
  },
];

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
