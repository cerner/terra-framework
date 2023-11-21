import React from 'react';
import CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';
import { ActiveBreakpointContext } from 'terra-breakpoints';
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

const getNumberOfColumns = (activeBreakpoint) => {
  switch (activeBreakpoint) {
    case 'enormous': return 4;
    case 'huge': return 3;
    case 'large': return 2;
    case 'medium': return 2;
    case 'small': return 1;
    case 'tiny': return 1;
    default: return 1;
  }
};

const getRowHeight = (activeBreakpoint) => {
  switch (activeBreakpoint) {
    case 'enormous': return '60px';
    case 'huge': return '60px';
    case 'large': return '60px';
    case 'medium': return '60px';
    case 'small': return '40px';
    case 'tiny': return '40px';
    default: return '40px';
  }
};

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
    width: '200px', // will be disregarded bacause of flexGrow prop.
    flexGrow: true, // flexGrow prop has to be set here, as with width set, without that prop the column would not grow.
  },
  {
    id: 'Column-2',
    displayName: 'Col_3',
    width: '60px', // there is no widthUnit prop set in the component, so it will default to px
    align: alignTypes.CENTER,
  },
];

const VerticalFlow = () => {
  const activeBreakpoint = React.useContext(ActiveBreakpointContext);
  return (
    <CompactInteractiveList
      id="with-breakpoints"
      rows={rows}
      columns={cols}
      numberOfColumns={getNumberOfColumns(activeBreakpoint)}
      rowHeight={getRowHeight(activeBreakpoint)}
    />
  );
};

export default VerticalFlow;
