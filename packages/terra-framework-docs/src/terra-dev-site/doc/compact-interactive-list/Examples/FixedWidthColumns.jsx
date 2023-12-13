import React, { useState } from 'react';
import CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';
import {
  IconFeaturedOff, IconFeatured, IconMultipleResultsNormal, IconMultipleResultsNotNormal, IconMultipleResultsCritical,
} from 'terra-icon';

const iconFeaturedOff = <IconFeaturedOff a11yLabel="Featured off" height="1.5em" width="1.5em" />;
const iconFeatured = <IconFeatured a11yLabel="Featured" height="1.5em" width="1.5em" />;
const iconResultsNormal = <IconMultipleResultsNormal a11yLabel="Results normal" height="1.5em" width="1.5em" />;
const iconResultsNotNormal = <IconMultipleResultsNotNormal a11yLabel="Results not normal" height="1.5em" width="1.5em" />;
const iconResultsCritical = <IconMultipleResultsCritical a11yLabel="Results critical" height="1.5em" width="1.5em" />;

// Source rows data for tests
const rows = [
  {
    id: 'row_1',
    cells: [
      { content: iconResultsNormal },
      { content: 'Discern Care Set (1)' },
      { content: ' ' },
    ],
  },
  {
    id: 'row_2',
    cells: [
      { content: iconResultsNormal },
      { content: 'Initial observation Care/Day High Severity 99220 (2)' },
      { content: ' ' },
    ],
  },
  {
    id: 'row_3',
    cells: [
      { content: iconResultsNotNormal },
      { content: 'Arterial Sheath Care (3)' },
      { content: ' ' },
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
      { content: ' ' },
    ],
  },
];

// Select Featured or FeaturedOff icon to be displayed in the last visual column
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
    width: '20em',
  },
  {
    id: 'Column-2',
    displayName: 'Featured',
    width: '5em',
    align: alignTypes.CENTER,
  },
];

const FixedWidthColumns = () => {
  const [featuredRowsIds, setFeaturedRowsIds] = useState([]);
  const displayedRows = calculateRows(featuredRowsIds);

  const onCellSelect = ({ rowId, columnId }) => {
    // per featured column selection
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
      id="interactive-compact-columns-width"
      rows={displayedRows}
      columns={cols}
      numberOfColumns={2}
      rowHeaderIndex={1}
      onCellSelect={onCellSelect}
      onClearSelection={onClearSelection}
    />
  );
};

export default FixedWidthColumns;
