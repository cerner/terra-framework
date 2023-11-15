import React from 'react';
import { IconDocuments, IconFeaturedOutline, IconImage } from 'terra-icon';

// Source rows data for tests
const rows = [
  {
    id: 'row_1',
    cells: [
      { content: <IconDocuments height="1.5em" width="1.5em" /> },
      { content: 'Discern Care Set (1)' },
      { content: <IconFeaturedOutline height="1.5em" width="1.5em" /> },
    ],
  },
  {
    id: 'row_2',
    cells: [
      { content: <IconImage height="1.5em" width="1.5em" /> },
      { content: 'Initial observation Care/Day High Severity 99220 (2)' },
      { content: <IconFeaturedOutline height="1.5em" width="1.5em" /> },
    ],
  },
  {
    id: 'row_3',
    cells: [
      { content: <IconImage height="1.5em" width="1.5em" /> },
      { content: 'Arterial Sheath Care (3)' },
      { content: <IconFeaturedOutline height="1.5em" width="1.5em" /> },
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
      { content: <IconImage height="1.5em" width="1.5em" /> },
      { content: 'Arterial Sheath Care (5)' },
      { content: <IconFeaturedOutline height="1.5em" width="1.5em" /> },
    ],
  },
];

export default rows;
