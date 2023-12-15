import React, { useState } from 'react';
import CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';
import {
  IconFeaturedOff, IconFeatured,
} from 'terra-icon';

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

const texts = [
  'Discern Care Set 1',
  'Initial observation Care 2',
  'Arterial Sheath Care 3',
  'Sbsq Observation Care 4',
  'Arterial Sheath Care 5',
];

const getCellContent = (text) => (
  <div>
    {/* eslint-disable-next-line react/forbid-dom-props */}
    <div style={{ display: 'flex', flexFlow: 'column' }}>
      <span>{text}</span>
      <span>Comments/ --</span>
    </div>
  </div>
);

const rows = [
  {
    id: 'row_1',
    cells: [
      { content: getCellContent(texts[0]) },
      { content: ' ' },
      { content: '' },
    ],
  },
  {
    id: 'row_2',
    cells: [
      { content: getCellContent(texts[1]) },
      { content: inputCell },
      { content: '' },
    ],
  },
  {
    id: 'row_3',
    cells: [
      { content: getCellContent(texts[2]) },
      { content: anchorCell },
      { content: '' },
    ],
  },
  {
    id: 'row_4',
    cells: [
      { content: getCellContent(texts[3]) },
      { content: textAreaCell },
      { content: '' },
    ],
  },
  {
    id: 'row_5',
    cells: [
      { content: getCellContent(texts[4]) },
      { content: selectCell },
      { content: '' },
    ],
  },
];

const cols = [
  {
    id: 'Column-0',
    displayName: 'Service name',
    width: '250px', // will be used as a css flexBasis
    flexGrow: true, // makes the column grow or shrink
    maximumWidth: '350px',
    minimumWidth: '100px',
  },
  {
    id: 'Column-1',
    displayName: 'Details',
    width: '150px',
    align: alignTypes.RIGHT,
  },
  {
    id: 'Column-2',
    displayName: 'Featured',
    width: '50px',
    align: alignTypes.CENTER,
  },
];

const RowHeaderIndexZero = () => {
  // eslint-disable-next-line react/prop-types
  const [featuredRowsIds, setFeaturedRowsIds] = useState([]);

  const toggle = (rowId) => {
    const newSelectedRows = [...featuredRowsIds];
    const index = newSelectedRows.findIndex(row => row === rowId);
    if (index >= 0) {
      newSelectedRows.splice(index, 1);
    } else {
      newSelectedRows.push(rowId);
    }
    setFeaturedRowsIds(newSelectedRows);
  };

  const getButtonCellFeaturedOn = (rowId) => (
    <button type="button" aria-label="Learn more button" onClick={() => toggle(rowId)}>
      <IconFeatured a11yLabel="Featured" height="1.5em" width="1.5em" />
    </button>
  );

  const getButtonCellFeaturedOff = (rowId) => (
    <button type="button" aria-label="Learn more button" onClick={() => toggle(rowId)}>
      <IconFeaturedOff a11yLabel="Featured off" height="1.5em" width="1.5em" />
    </button>
  );

  const calculateRows = () => {
    const calculatedRows = [...rows];
    return calculatedRows.map(row => {
      const newRow = { ...row, cells: [...row.cells] };
      if (featuredRowsIds.indexOf(row.id) >= 0) {
        newRow.cells[2] = { ...row.cells[2], content: getButtonCellFeaturedOn(row.id) };
      } else { newRow.cells[2] = { ...row.cells[2], content: getButtonCellFeaturedOff(row.id) }; }
      return newRow;
    });
  };
  const displayedRows = calculateRows(featuredRowsIds);

  const onClearSelection = () => {
    setFeaturedRowsIds([]);
  };

  return (
    <CompactInteractiveList
      id="with-breakpoints"
      rows={displayedRows}
      columns={cols}
      numberOfColumns={2}
      columnMinimumWidth="234px"
      onClearSelection={onClearSelection}
      rowHeaderIndex={0}
    />
  );
};

export default RowHeaderIndexZero;
