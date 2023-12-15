import React, { useState } from 'react';
import CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';
import {
  IconFeaturedOff, IconFeatured, IconMultipleResultsNormal, IconMultipleResultsNotNormal, IconMultipleResultsCritical,
} from 'terra-icon';

// eslint-disable-next-line no-alert
const buttonCell = <button type="button" aria-label="Learn more button" onClick={() => alert('Learn more button was clicked')}>Learn more</button>;
// eslint-disable-next-line react/forbid-dom-props
const inputCell = <input type="text" aria-label="Text Input" style={{ width: '100px', height: '25px', display: 'inline' }} />;
const anchorCell = <a href="https://www.oracle.com/" aria-label="Documentation">Documentation</a>;
const textAreaCell = <textarea name="textArea" aria-label="Text Area" rows="1" cols="15" />;
const selectCell = (
  <select name="specialties" id="specialties" aria-label="Select Specialty">
    <option value="ambulatory">Ambulatory</option>
    <option value="cardiology">Cardiology</option>
    <option value="radiology">Radiology</option>
    <option value="neurology">Neurology</option>
  </select>
);

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
      { content: buttonCell },
      { content: '' },
    ],
  },
  {
    id: 'row_2',
    cells: [
      { content: iconResultsNormal },
      { content: 'Initial observation Care/Day High Severity 99220 (2)' },
      { content: inputCell },
      { content: '' },
    ],
  },
  {
    id: 'row_3',
    cells: [
      { content: iconResultsNotNormal },
      { content: 'Arterial Sheath Care (3)' },
      { content: anchorCell },
      { content: '' },
    ],
  },
  {
    id: 'row_4',
    cells: [
      { content: ' ' },
      { content: 'Sbsq Observation Care/Day High Severity 99226 (4)' },
      { content: textAreaCell },
      { content: '' },
    ],
  },
  {
    id: 'row_5',
    cells: [
      { content: iconResultsCritical },
      { content: 'Arterial Sheath Care (5)' },
      { content: selectCell },
      { content: '' },
    ],
  },
];

const calculateRows = (featuredRowsIds) => {
  const calculatedRows = [...rows];
  return calculatedRows.map(row => {
    const newRow = { ...row, cells: [...row.cells] };
    if (featuredRowsIds.indexOf(row.id) >= 0) {
      newRow.cells[3] = { ...row.cells[3], content: iconFeatured };
    } else { newRow.cells[3] = { ...row.cells[3], content: iconFeaturedOff }; }
    return newRow;
  });
};

const cols = [
  {
    id: 'Column-0',
    displayName: 'Icon',
    width: '50px',
    align: alignTypes.CENTER,
  },
  {
    id: 'Column-1',
    displayName: 'Service name',
    width: '250px', // will be used as a css flexBasis
    flexGrow: true, // makes the column grow or shrink
    maximumWidth: '350px',
    minimumWidth: '100px',
  },
  {
    id: 'Column-2',
    displayName: 'Details',
    width: '150px',
    align: alignTypes.RIGHT,
  },
  {
    id: 'Column-3',
    displayName: 'Featured',
    width: '50px',
    align: alignTypes.CENTER,
  },
];

const CellContent = () => {
  const [featuredRowsIds, setFeaturedRowsIds] = useState([]);
  const [selectedColumn, setSelectedColumn] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const displayedRows = calculateRows(featuredRowsIds);

  const onCellSelect = ({ rowId, columnId }) => {
    if (columnId === cols[3].id) {
      const newSelectedRows = [...featuredRowsIds];
      const index = newSelectedRows.findIndex(row => row === rowId);
      if (index >= 0) {
        newSelectedRows.splice(index, 1);
      } else {
        newSelectedRows.push(rowId);
      }
      setFeaturedRowsIds(newSelectedRows);
    }
    setSelectedColumn(columnId);
    setSelectedRow(rowId);
  };

  const onClearSelection = () => {
    setFeaturedRowsIds([]);
    setSelectedColumn(undefined);
    setSelectedRow(undefined);
  };

  return (
    <>
      <p>{selectedColumn && selectedRow ? `Selected cell id: ${selectedColumn}, selected row id: ${selectedRow}.` : 'There are no celected cells at the moment.'}</p>
      <CompactInteractiveList
        id="with-breakpoints"
        rows={displayedRows}
        columns={cols}
        numberOfColumns={2}
        columnMinimumWidth="234px"
        onCellSelect={onCellSelect} // a callback function for cell selection
        onClearSelection={onClearSelection}
        rowHeaderIndex={1}
      />
    </>
  );
};

export default CellContent;
