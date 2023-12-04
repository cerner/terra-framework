import React, { useState } from 'react';
import CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';
import { IconDocuments, IconFeaturedOutline, IconImage } from 'terra-icon';

const buttonCell = <button type="button" aria-label="Learn more button" onClick={() => alert('Button was clicked')}>Learn more</button>;
// eslint-disable-next-line react/forbid-dom-props
const inputCell = <input type="text" aria-label="Text Input" style={{ width: '100px', height: '25px', display: 'inline' }} />;
const anchorCell = <a href="https://www.oracle.com/" aria-label="Visit Oracle">Visit Oracle</a>;
const textAreaCell = <textarea name="textArea" aria-label="Text Area" rows="1" cols="15" />;
const selectCell = (
  <select name="specialties" id="specialties" aria-label="Select Specialty">
    <option value="ambulatory">Ambulatory</option>
    <option value="cardiology">Cardiology</option>
    <option value="radiology">Radiology</option>
    <option value="neurology">Neurology</option>
  </select>
);

const rows = [
  {
    id: 'row_1',
    cells: [
      { content: <IconDocuments a11yLabel="Documents" height="1.5em" width="1.5em" /> },
      { content: 'Discern Care Set (1)' },
      { content: buttonCell },
      { content: <IconFeaturedOutline a11yLabel="Featured" height="1.5em" width="1.5em" /> },
    ],
  },
  {
    id: 'row_2',
    cells: [
      { content: <IconImage a11yLabel="Picture" height="1.5em" width="1.5em" /> },
      { content: 'Initial observation Care/Day High Severity 99220 (2)' },
      { content: inputCell },
      { content: <IconFeaturedOutline a11yLabel="Featured" height="1.5em" width="1.5em" /> },
    ],
  },
  {
    id: 'row_3',
    cells: [
      { content: <IconImage a11yLabel="Picture" height="1.5em" width="1.5em" /> },
      { content: 'Arterial Sheath Care (3)' },
      { content: anchorCell },
      { content: <IconFeaturedOutline a11yLabel="Featured" height="1.5em" width="1.5em" /> },
    ],
  },
  {
    id: 'row_4',
    cells: [
      { content: ' ' },
      { content: 'Sbsq Observation Care/Day High Severity 99226 (4)' },
      { content: textAreaCell },
      { content: ' ' },
    ],
  },
  {
    id: 'row_5',
    cells: [
      { content: <IconImage a11yLabel="Picture" height="1.5em" width="1.5em" /> },
      { content: 'Arterial Sheath Care (5)' },
      { content: selectCell },
      { content: <IconFeaturedOutline a11yLabel="Featured" height="1.5em" width="1.5em" /> },
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
    width: '200px', // will be disregarded because of flexGrow prop
    flexGrow: true, // flexGrow prop has to be set here, as with width set, without that prop the column would not grow.
    maximumWidth: '300px',
    minimumWidth: '100px',
    rowHeader: true, // needed for assistive technologies for row context
  },
  {
    id: 'Column-2',
    displayName: 'Details',
    width: '200px',
    align: alignTypes.RIGHT,
  },
  {
    id: 'Column-3',
    displayName: 'Featured',
    width: '60px',
    align: alignTypes.CENTER,
  },
];

const ResponsiveColumnsMaxWidth = () => {
  const [selectedCell, setSelectedCell] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const onCellSelect = (rowId, colId) => {
    setSelectedCell(colId);
    setSelectedRow(rowId);
  };

  const onClearSelection = () => {
    setSelectedCell(undefined);
    setSelectedRow(undefined);
  };

  return (
    <>
      <p>{selectedCell && selectedRow ? `Selected cell id: ${selectedCell}, selected rell id: ${selectedRow}` : 'There are no celected cells at the moment'}</p>
      <CompactInteractiveList
        id="with-breakpoints"
        rows={rows}
        columns={cols}
        numberOfColumns={2}
        columnMinimumWidth="234px"
        onCellSelect={onCellSelect} // For cell selection, a callback function must be provided so that the Worklist Data Grid can invoke it when a cell is selective.
        onClearSelection={onClearSelection}
      />
    </>
  );
};

export default ResponsiveColumnsMaxWidth;
