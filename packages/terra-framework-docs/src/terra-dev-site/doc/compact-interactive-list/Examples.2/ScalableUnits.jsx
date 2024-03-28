/* eslint-disable react/forbid-dom-props */
import React, { useState } from 'react';
import CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';
import {
  IconFeaturedOff, IconFeatured, IconMultipleResultsNormal, IconMultipleResultsNotNormal, IconMultipleResultsCritical,
} from 'terra-icon';
import Button from 'terra-button';

const FeaturedIcon = () => {
  const [isFeatured, setIsFeatured] = useState(false);
  const onButtonClick = () => setIsFeatured(!isFeatured);
  return (
    isFeatured ? <Button variant="utility" text="Unfavorite item" icon={<IconFeatured />} onClick={onButtonClick} /> : <Button variant="utility" text="Favorite item" icon={<IconFeaturedOff />} onClick={onButtonClick} />
  );
};
const iconResultsNormal = <IconMultipleResultsNormal a11yLabel="Results normal" height="1.5em" width="1.5em" />;
const iconResultsNotNormal = <IconMultipleResultsNotNormal a11yLabel="Results not normal" height="1.5em" width="1.5em" />;
const iconResultsCritical = <IconMultipleResultsCritical a11yLabel="Results critical" height="1.5em" width="1.5em" />;

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
    width: '5em',
    align: alignTypes.CENTER,
  },
  {
    id: 'Column-1',
    displayName: 'Service name',
    // flexGrow prop is not set here, but as there is no width set, the column will be flex growing
    maximumWidth: '25em',
    minimumWidth: '7em',
  },
  {
    id: 'Column-2',
    displayName: 'Featured',
    width: '5em',
    align: alignTypes.CENTER,
  },
];

const ScalableUnits = () => (
  <div style={{ fontSize: '1.25em' }}>
    <CompactInteractiveList
      id="compact-interactive-list-scalable-units"
      ariaLabel="Compact Interactive List"
      rows={rows}
      columns={cols}
      numberOfColumns={2}
      rowHeaderIndex={1}
    />
  </div>
);

export default ScalableUnits;
