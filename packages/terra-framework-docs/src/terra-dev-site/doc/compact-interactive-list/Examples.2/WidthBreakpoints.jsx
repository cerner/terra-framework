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
    width: 60, // there is no widthUnit prop set in the component, so it will default to px
    alignToCenter: true,
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
    alignToCenter: true,
  },
];

const WidthBreakpoints = () => {
  const activeBreakpoint = React.useContext(ActiveBreakpointContext);
  return (
    <CompactInteractiveList
      id="with-breakpoints"
      rows={rows}
      columns={cols}
      numberOfColumns={getNumberOfColumns(activeBreakpoint)}
      // there is no widthUnit prop set, so it will default to px
    />
  );
};

export default WidthBreakpoints;
