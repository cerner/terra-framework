import React from 'react';
import CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';
import { ActiveBreakpointContext } from 'terra-breakpoints';
import rows from './rowsData';

const getNumberOfColumns = (activeBreakpoint) => {
  switch (activeBreakpoint) {
    case 'enormous': return 5;
    case 'huge': return 4;
    case 'large': return 3;
    case 'medium': return 2;
    case 'small': return 1;
    case 'tiny': return 1;
    default: return 1;
  }
};

const cols = [
  {
    id: 'Column-0',
    displayName: 'Col_1',
    width: 60,
    align: alignTypes.CENTER,
  },
  {
    id: 'Column-1',
    displayName: 'Col_2',
    width: 200,
    flexGrow: true,
  },
  {
    id: 'Column-2',
    displayName: 'Col_3',
    width: 60,
    align: alignTypes.CENTER,
  },
];

const WidthBreakpointsHorizontalFlow = () => {
  const activeBreakpoint = React.useContext(ActiveBreakpointContext);
  return (
    <CompactInteractiveList
      id="with-breakpoints"
      rows={rows}
      columns={cols}
      numberOfColumns={getNumberOfColumns(activeBreakpoint)}
      flowHorizontally
      // there is no widthUnit prop set, so it will default to px
    />
  );
};

export default WidthBreakpointsHorizontalFlow;
