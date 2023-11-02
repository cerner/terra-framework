import React from 'react';
import { IconDocuments, IconFeaturedOutline, IconImage } from 'terra-icon';

// Source rows data for tests
const rows = [
  {
    id: 'row_1',
    cells: [
      { id: 'row_1-cell_1', content: <IconDocuments height="1.5em" width="1.5em" /> },
      { id: 'row_1-cell_2', content: 'Discern Care Set (1)' },
      { id: 'row_1-cell_3', content: <IconFeaturedOutline height="1.5em" width="1.5em" /> },
    ],
  },
  {
    id: 'row_2',
    cells: [
      { id: 'row_2-cell_1', content: <IconImage height="1.5em" width="1.5em" /> },
      { id: 'row_2-cell_2', content: 'Initial observation Care/Day High Severity 99220 (2)' },
      { id: 'row_2-cell_3', content: <IconFeaturedOutline height="1.5em" width="1.5em" /> },
    ],
  },
  {
    id: 'row_3',
    cells: [
      { id: 'row_3-cell_1', content: <IconImage height="1.5em" width="1.5em" /> },
      { id: 'row_3-cell_2', content: 'Arterial Sheath Care (3)' },
      { id: 'row_3-cell_3', content: <IconFeaturedOutline height="1.5em" width="1.5em" /> },
    ],
  },
  {
    id: 'row_4',
    cells: [
      { id: 'row_4-cell_1', content: ' ' },
      { id: 'row_4-cell_2', content: 'Sbsq Observation Care/Day High Severity 99226 (4)' },
      { id: 'row_4-cell_3', content: ' ' },
    ],
  },
  {
    id: 'row_5',
    cells: [
      { id: 'row_5-cell_1', content: <IconImage height="1.5em" width="1.5em" /> },
      { id: 'row_5-cell_2', content: 'Arterial Sheath Care (5)' },
      { id: 'row_5-cell_3', content: <IconFeaturedOutline height="1.5em" width="1.5em" /> },
    ],
  },
  {
    id: 'row_6',
    cells: [
      { id: 'row_6-cell_1', content: ' ' },
      { id: 'row_6-cell_2', content: 'Sbsq Observation Care/Day High Severity 99226 (6)' },
      { id: 'row_6-cell_3', content: ' ' },
    ],
  },
];

export default rows;
