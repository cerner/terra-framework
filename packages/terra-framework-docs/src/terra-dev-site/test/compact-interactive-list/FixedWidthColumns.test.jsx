import React from 'react';
import CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';
import { IconDocuments, IconFeaturedOutline, IconImage } from 'terra-icon';

// Source data for tests

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
    displayName: 'Icon',
    width: '60px',
    align: alignTypes.CENTER,
  },
  {
    id: 'Column-1',
    displayName: 'Service name',
    width: '350px',
    rowHeader: true,
  },
  {
    id: 'Column-2',
    displayName: 'Featured',
    width: '60px',
    align: alignTypes.CENTER,
  },
];

const FixedWidthColumns = () => (
  <CompactInteractiveList
    id="compact-interactive-list-fixed-width-columns"
    rows={rows}
    columns={cols}
    numberOfColumns={2}
    columnMinimumWidth="20px" // should have no effect of fixed columns
    columnMaximumWidth="200px" // should have no effect of fixed columns
  />
);

export default FixedWidthColumns;
