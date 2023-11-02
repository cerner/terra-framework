import React from 'react';
import CompactInteractiveList from 'terra-compact-interactive-list';
import { ActiveBreakpointContext } from 'terra-breakpoints';
import rows from './rowsData';

const getNumberOfColumns = (activeBreakpoint) => {
  switch (activeBreakpoint) {
    case 'enormous': return 3;
    case ('huge' || 'large' || 'medium'): return 2;
    case 'small': return 1;
    default: return 1;
  }
};

const cols = [
  {
    id: 'Column-0',
    displayName: 'Col_1',
    width: 60,
    alignToCenter: true,
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
    alignToCenter: true,
  },
];

const GrowingColumnsWithBreakpoints = () => {
  const activeBreakpoint = React.useContext(ActiveBreakpointContext);
  return (
    <CompactInteractiveList
      id="interactive-compact-list-with-breakpoints"
      rows={rows}
      columns={cols}
      numberOfColumns={getNumberOfColumns(activeBreakpoint)}
    />
  );
};

export default GrowingColumnsWithBreakpoints;
