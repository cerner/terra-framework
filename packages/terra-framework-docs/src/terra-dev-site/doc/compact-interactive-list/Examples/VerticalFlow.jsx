import React from 'react';
import CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';
import { ActiveBreakpointContext } from 'terra-breakpoints';
import rows from './rowsData';

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
    case 'enormous': return 60;
    case 'huge': return 60;
    case 'large': return 60;
    case 'medium': return 60;
    case 'small': return 40;
    case 'tiny': return 40;
    default: return 40;
  }
};

const cols = [
  {
    id: 'Column-0',
    displayName: 'Col_1',
    width: 60, // there is no widthUnit prop set in the component, so it will default to px
    align: alignTypes.CENTER,
  },
  {
    id: 'Column-1',
    displayName: 'Col_2',
    width: 200, // there is no widthUnit prop set in the component, so it will default to px
    flexGrow: true, // flexGrow prop has to be set here, as with width set, without that prop the column would not grow.
  },
  {
    id: 'Column-2',
    displayName: 'Col_3',
    width: 60, // there is no widthUnit prop set in the component, so it will default to px
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
