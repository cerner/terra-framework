import React, { useState } from 'react';
import CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';
import { ActiveBreakpointContext } from 'terra-breakpoints';
import {
  IconFeaturedOff, IconFeatured, IconMultipleResultsNormal, IconMultipleResultsNotNormal, IconMultipleResultsCritical,
} from 'terra-icon';

const iconFeaturedOff = <IconFeaturedOff a11yLabel="Featured off" height="1.5em" width="1.5em" />;
const iconFeatured = <IconFeatured a11yLabel="Featured" height="1.5em" width="1.5em" />;
const iconResultsNormal = <IconMultipleResultsNormal a11yLabel="Results normal" height="1.5em" width="1.5em" />;
const iconResultsNotNormal = <IconMultipleResultsNotNormal a11yLabel="Results not normal" height="1.5em" width="1.5em" />;
const iconResultsCritical = <IconMultipleResultsCritical a11yLabel="Results critical" height="1.5em" width="1.5em" />;

const rows = [
  {
    id: 'row_1',
    cells: [
      { content: iconResultsNormal },
      { content: 'Discern Care Set (1)' },
      { content: '' },
    ],
  },
  {
    id: 'row_2',
    cells: [
      { content: iconResultsNormal },
      { content: 'Initial observation Care/Day High Severity 99220 (2)' },
      { content: '' },
    ],
  },
  {
    id: 'row_3',
    cells: [
      { content: iconResultsNotNormal },
      { content: 'Arterial Sheath Care (3)' },
      { content: '' },
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
      { content: iconResultsCritical },
      { content: 'Arterial Sheath Care (5)' },
      { content: '' },
    ],
  },
  {
    id: 'row_6',
    cells: [
      { content: iconResultsNormal },
      { content: 'Arterial Sheath Care (6)' },
      { content: '' },
    ],
  },
  {
    id: 'row_7',
    cells: [
      { content: ' ' },
      { content: 'Sbsq Observation Care/Day High Severity 99226 (7)' },
      { content: ' ' },
    ],
  },
  {
    id: 'row_8',
    cells: [
      { content: iconResultsNormal },
      { content: 'Arterial Sheath Care (8)' },
      { content: ' ' },
    ],
  },
  {
    id: 'row_9',
    cells: [
      { content: iconResultsNormal },
      { content: 'Arterial Sheath Care (9)' },
      { content: ' ' },
    ],
  },
  {
    id: 'row_10',
    cells: [
      { content: iconResultsNormal },
      { content: 'Arterial Sheath Care (10)' },
      { content: ' ' },
    ],
  },
];

const calculateRows = (featuredRowsIds) => {
  const calculatedRows = [...rows];
  return calculatedRows.map(row => {
    const newRow = { ...row, cells: [...row.cells] };
    if (featuredRowsIds.indexOf(row.id) >= 0) {
      newRow.cells[2] = { ...row.cells[2], content: iconFeatured };
    } else { newRow.cells[2] = { ...row.cells[2], content: iconFeaturedOff }; }
    return newRow;
  });
};

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
    width: '200px', // will be used as a css flexBasis
    flexGrow: true, // makes the column grow or shrink
  },
  {
    id: 'Column-2',
    displayName: 'Featured',
    width: '60px',
    align: alignTypes.CENTER,
  },
];

const HorizontalFlow = () => {
  const activeBreakpoint = React.useContext(ActiveBreakpointContext);
  const [featuredRowsIds, setFeaturedRowsIds] = useState([]);
  const displayedRows = calculateRows(featuredRowsIds);

  const onCellSelect = ({ rowId, columnId }) => {
    if (columnId === cols[2].id) {
      const newSelectedRows = [...featuredRowsIds];
      const index = newSelectedRows.findIndex(row => row === rowId);
      if (index >= 0) {
        newSelectedRows.splice(index, 1);
      } else {
        newSelectedRows.push(rowId);
      }
      setFeaturedRowsIds(newSelectedRows);
    }
  };

  const onClearSelection = () => {
    setFeaturedRowsIds([]);
  };

  return (
    <CompactInteractiveList
      id="with-breakpoints"
      rows={displayedRows}
      columns={cols}
      numberOfColumns={getNumberOfColumns(activeBreakpoint)}
      rowHeaderIndex={1}
      onCellSelect={onCellSelect}
      onClearSelection={onClearSelection}
      flowHorizontally
    />
  );
};

export default HorizontalFlow;
