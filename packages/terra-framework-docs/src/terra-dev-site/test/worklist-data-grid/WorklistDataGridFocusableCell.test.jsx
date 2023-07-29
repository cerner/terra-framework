import React, { useState } from 'react';
import WorklistDataGrid from 'terra-worklist-data-grid';
import NotificationDialog from 'terra-notification-dialog';

const WorklistDataGridFocusableCell = () => {
  const rowHeaderIndex = 0;

  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleButtonOpenModal = () => {
    setIsOpen(true);
  };

  const buttonCell = <button type="button" aria-label="Button Element" onClick={handleButtonOpenModal}>Alert</button>;
  // eslint-disable-next-line react/forbid-dom-props
  const inputCell = <input type="text" aria-label="Text Input Element" style={{ width: '100px', height: '25px', display: 'inline' }} />;
  const anchorCell = <a href="https://www.oracle.com/" aria-label="Anchor Element">Visit Oracle</a>;
  const textAreaCell = <textarea name="textArea" aria-label="Text Area Element" readOnly rows="1" cols="15" value="Text Area" />;
  const selectCell = (
    <select name="specialties" id="specialties" aria-label="Select Element">
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
      <WorklistDataGrid
        id="default-terra-worklist-data-grid-focusable-cell"
        columns={cols}
        defaultColumnWidth={170}
        rows={rows}
        rowHeaderIndex={rowHeaderIndex}
        ariaLabel="Worklist Data Grid"
      />
    </>
  );
};

export default WorklistDataGridFocusableCell;
