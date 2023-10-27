import React from 'react';
import CompactInteractiveList from 'terra-compact-interactive-list';
import { IconDocuments, IconFeaturedOutline } from 'terra-icon';

// Source data for tests
const dataFile = {
  cols: [
    { id: 'Column-0', displayName: 'Col_1', style: { flex: '0 0 60px' } },
    { id: 'Column-1', displayName: 'Col_2', style: { flex: '1 1 auto' } },
    { id: 'Column-2', displayName: 'Col_3', style: { flex: '0 0 60px' } },
  ],
  rows: [
    {
      id: '1',
      cells: [
        { content: <IconDocuments /> },
        { content: 'Discern Care Set' },
        { content: <IconFeaturedOutline /> },
      ],
    },
    {
      id: '2',
      cells: [
        { content: <IconDocuments /> },
        { content: 'Initial observation Care/Day High Severity 99220' },
        { content: <IconFeaturedOutline /> },
      ],
    },
    {
      id: '3',
      cells: [
        { content: '' },
        { content: 'Arterial Sheath Care' },
        { content: <IconFeaturedOutline /> },
      ],
    },
    {
      id: '4',
      cells: [
        { content: '' },
        { content: 'Sbsq Observation Care/Day High Severity 99226' },
        { content: '' },
      ],
    },
  ],
};

const DefaultCompactInteractiveList = () => (
  <CompactInteractiveList rows={dataFile.rows} columns={dataFile.cols} />
);

export default DefaultCompactInteractiveList;
