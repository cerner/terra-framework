/* eslint-disable react/forbid-dom-props */
import React, { useState } from 'react';
import DataGrid from 'terra-data-grid/lib/DataGrid';
import NotificationDialog from 'terra-notification-dialog';

const DataGridFocusableCell = () => {
  const rowHeaderIndex = 0;

  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleButtonOpenModal = () => {
    setIsOpen(true);
  };

  const buttonCell = <button type="button" aria-label="Alert" onClick={handleButtonOpenModal}>Alert</button>;
  // eslint-disable-next-line react/forbid-dom-props
  const inputCell = <input type="text" aria-label="Text Input" style={{ width: '100px', height: '25px', display: 'inline' }} />;
  const anchorCell = <a href="https://www.oracle.com/" aria-label="Visit Oracle">Visit Oracle</a>;
  const textAreaCell = <textarea name="textArea" aria-label="Text Area" rows="1" cols="15" value="Text Area" />;
  const selectCell = (
    <select name="specialties" id="specialties" aria-label="Select Specialty">
      <option value="ambulatory">Ambulatory</option>
      <option value="cardiology">Cardiology</option>
      <option value="radiology">Radiology</option>
      <option value="neurology">Neurology</option>
    </select>
  );

  const gridDataJSON = {
    cols: [
      { id: 'Column-0', displayName: 'Patient' },
      { id: 'Column-1', displayName: 'Location' },
      { id: 'Column-2', displayName: 'Illness Severity' },
      { id: 'Column-3', displayName: 'Visit' },
    ],
    rows: [
      {
        id: '1',
        cells: [
          { content: 'Fleck, Arthur' },
          { content: buttonCell },
          { content: inputCell },
          { content: anchorCell },
        ],
      },
      {
        id: '2',
        cells: [
          { content: 'Wayne, Bruce' },
          {
            content: (<div>
              {buttonCell}
              {inputCell}
              {/* eslint-disable-next-line react/jsx-closing-tag-location */}
            </div>),
          },
          { content: selectCell },
          { content: textAreaCell },
        ],
      },
    ],
  };

  const { cols, rows } = gridDataJSON;

  return (
    <>
      {isOpen && (
      <NotificationDialog
        variant="hazard-low"
        dialogTitle="Button from Focusable Cell"
        startMessage="Button Selected"
        acceptAction={{
          text: 'OK',
          onClick: handleCloseModal,
        }}
      />
      )}
      <button id="previous-focus-button" type="button" aria-label="Previous Element">Test Previous</button>
      <div style={{ display: 'none' }}>
        <button id="hidden-button" type="button">Hidden</button>
      </div>
      <div style={{ visibility: 'hidden' }}>
        <button id="hidden-button2" type="button">Hidden2</button>
      </div>
      <div inert="">
        <button id="inert-child-button" type="button">Inert Child</button>
      </div>
      <div style={{ margin: '10px' }}>
        <DataGrid
          id="default-terra-data-grid-focusable-cell"
          overflowColumns={cols}
          defaultColumnWidth={170}
          rows={rows}
          rowHeaderIndex={rowHeaderIndex}
          ariaLabel="Data Grid"
        />
      </div>
      <button id="next-focus-button" type="button" aria-label="Next Element">Test Next</button>
    </>
  );
};

export default DataGridFocusableCell;
