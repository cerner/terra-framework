import React, { useState } from 'react';
import CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';
import {
  IconFeaturedOff, IconFeatured, IconMultipleResultsNormal, IconMultipleResultsNotNormal, IconMultipleResultsCritical,
} from 'terra-icon';

// eslint-disable-next-line no-alert
const buttonCell = <button type="button" aria-label="Learn more button" onClick={() => alert('Learn more button was clicked')}>Learn more</button>;
const anchorCell = <a href="https://www.oracle.com/" aria-label="Documentation">Documentation</a>;
const iconFeaturedOff = <IconFeaturedOff a11yLabel="Featured off" height="1.5em" width="1.5em" />;
const iconFeatured = <IconFeatured a11yLabel="Featured" height="1.5em" width="1.5em" />;
const iconResultsNormal = <IconMultipleResultsNormal a11yLabel="Results normal" height="1.5em" width="1.5em" />;
const iconResultsNotNormal = <IconMultipleResultsNotNormal a11yLabel="Results not normal" height="1.5em" width="1.5em" />;
const iconResultsCritical = <IconMultipleResultsCritical a11yLabel="Results critical" height="1.5em" width="1.5em" />;

const updateRows = (rowsToUpdate, columns, selectionDetails) => {
  const columnIndex = columns.findIndex(column => selectionDetails?.columnId === column.id);
  return [...rowsToUpdate.map(row => {
    const newRow = {
      ...row,
      cells: [...row.cells.map((cell, index) => {
        const isSelectedCell = selectionDetails?.rowId === row.id && index === columnIndex;
        // eslint-disable-next-line no-nested-ternary
        const isSelected = isSelectedCell ? !cell.isSelected : false;
        let newContent = cell.content;
        if (index === 3) {
          newContent = isSelected ? iconFeatured : iconFeaturedOff;
        }
        return { ...cell, isSelected, content: newContent };
      })],
    };
    return newRow;
  })];
};

const rows = [
  {
    id: 'row_1',
    cells: [
      { content: iconResultsNormal },
      { content: 'Discern Care Set (1)' },
      { content: buttonCell },
      { content: iconFeaturedOff },
    ],
  },
  {
    id: 'row_2',
    cells: [
      { content: iconResultsNormal },
      { content: 'Initial observation Care/Day High Severity 99220 (2)' },
      { content: anchorCell },
      { content: iconFeaturedOff },
    ],
  },
  {
    id: 'row_3',
    cells: [
      { content: iconResultsNotNormal },
      { content: 'Arterial Sheath Care (3)' },
      { content: anchorCell },
      { content: iconFeaturedOff },
    ],
  },
  {
    id: 'row_4',
    cells: [
      { content: ' ' },
      { content: 'Sbsq Observation Care/Day High Severity 99226 (4)' },
      { content: buttonCell },
      { content: iconFeaturedOff },
    ],
  },
  {
    id: 'row_5',
    cells: [
      { content: iconResultsCritical },
      { content: 'Arterial Sheath Care (5)' },
      { content: anchorCell },
      { content: iconFeaturedOff },
    ],
  },
];

const cols = [
  {
    id: 'Column-0',
    displayName: 'Icon',
    width: '50px',
    align: alignTypes.CENTER,
    isSelectable: true,
  },
  {
    id: 'Column-1',
    displayName: 'Service name',
    width: '250px', // will be used as a css flexBasis
    flexGrow: true, // makes the column grow or shrink
    maximumWidth: '350px',
    minimumWidth: '100px',
    isSelectable: true,
  },
  {
    id: 'Column-2',
    displayName: 'Details',
    width: '150px',
    align: alignTypes.RIGHT,
    isSelectable: true,
  },
  {
    id: 'Column-3',
    displayName: 'Featured',
    width: '50px',
    align: alignTypes.CENTER,
    isSelectable: true,
  },
];

const CellContent = () => {
  const [displayedRows, setDisplayedRows] = useState(updateRows(rows, cols));

  const onCellSelect = ({ rowId, columnId }) => {
    setDisplayedRows(updateRows(displayedRows, cols, { rowId, columnId }));
  };

  const onClearSelection = () => {
    setDisplayedRows(updateRows(rows, cols));
  };

  return (
    <CompactInteractiveList
      id="with-breakpoints"
      ariaLabel="Compact Interactive List"
      rows={displayedRows}
      columns={cols}
      numberOfColumns={2}
      columnMinimumWidth="234px"
      onCellSelect={onCellSelect} // a callback function for cell selection
      onClearSelection={onClearSelection}
      rowHeaderIndex={1}
    />
  );
};

export default CellContent;
