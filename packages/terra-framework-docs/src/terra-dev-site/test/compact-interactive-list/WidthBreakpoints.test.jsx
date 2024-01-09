import React, { useState } from 'react';
import CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';
import { ActiveBreakpointContext } from 'terra-breakpoints';

import {
  IconFeaturedOff, IconFeatured, IconMultipleResultsNormal, IconMultipleResultsNotNormal, IconMultipleResultsCritical,
} from 'terra-icon';
import Button from 'terra-button';

const FeaturedIcon = () => {
  const [isFeatured, setIsFeatured] = useState(false);
  const onButtonClick = () => setIsFeatured(!isFeatured);
  return (
    isFeatured ? <Button variant="utility" text="Featured button" icon={<IconFeatured />} onClick={onButtonClick} /> : <Button variant="utility" text="Featured off button" icon={<IconFeaturedOff />} onClick={onButtonClick} />
  );
};
const iconResultsNormal = <IconMultipleResultsNormal a11yLabel="Results normal" height="1.5em" width="1.5em" />;
const iconResultsNotNormal = <IconMultipleResultsNotNormal a11yLabel="Results not normal" height="1.5em" width="1.5em" />;
const iconResultsCritical = <IconMultipleResultsCritical a11yLabel="Results critical" height="1.5em" width="1.5em" />;

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

const rows = [
  {
    id: 'row_1',
    cells: [
      { content: iconResultsNormal },
      { content: 'Discern Care Set (1)' },
      { content: <FeaturedIcon /> },
    ],
  },
  {
    id: 'row_2',
    cells: [
      { content: iconResultsNormal },
      { content: 'Initial observation Care/Day High Severity 99220 (2)' },
      { content: <FeaturedIcon /> },
    ],
  },
  {
    id: 'row_3',
    cells: [
      { content: iconResultsNotNormal },
      { content: 'Arterial Sheath Care (3)' },
      { content: <FeaturedIcon /> },
    ],
  },
  {
    id: 'row_4',
    cells: [
      { content: ' ' },
      { content: 'Sbsq Observation Care/Day High Severity 99226 (4)' },
      { content: <FeaturedIcon /> },
    ],
  },
  {
    id: 'row_5',
    cells: [
      { content: iconResultsCritical },
      { content: 'Arterial Sheath Care (5)' },
      { content: <FeaturedIcon /> },
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
    width: '200px',
    flexGrow: true,
  },
  {
    id: 'Column-2',
    displayName: 'Featured',
    width: '60px',
    align: alignTypes.CENTER,
  },
];

const WidthBreakpoints = () => {
  const activeBreakpoint = React.useContext(ActiveBreakpointContext);
  return (
    <CompactInteractiveList
      id="with-breakpoints"
      ariaLabel="Compact Interactive List"
      rows={rows}
      columns={cols}
      numberOfColumns={getNumberOfColumns(activeBreakpoint)}
      rowHeaderIndex={1}
    />
  );
};

export default WidthBreakpoints;
