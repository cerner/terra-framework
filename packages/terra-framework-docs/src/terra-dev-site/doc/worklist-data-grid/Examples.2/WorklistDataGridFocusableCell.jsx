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

  const buttonCell = <button type="button" aria-label="Alert Button" onClick={handleButtonOpenModal}>Alert</button>;
  // eslint-disable-next-line react/forbid-dom-props
  const inputCell = <input type="text" aria-label="Text Input Element" style={{ width: '100px', height: '25px', display: 'inline' }} />;
  const anchorCell = <a href="https://www.oracle.com/" aria-label="Visit Oracle">Visit Oracle</a>;
  const textAreaCell = <textarea name="textArea" aria-label="Text Area" readOnly rows="1" cols="15" value="Text Area" />;
  const selectCell = (
    <select name="specialties" id="specialties" aria-label="Specialty Dropdown">
      <option value="ambulatory">Ambulatory</option>
      <option value="cardiology">Cardiology</option>
      <option value="radiology">Radiology</option>
      <option value="neurology">Neurology</option>
    </select>
  );

  const gridDataJSON = {
    cols: [
      { id: 'Column-0', displayName: 'Patient' },
      { id: 'Column-1', displayName: 'Column 1' },
      { id: 'Column-2', displayName: 'Column 2' },
      { id: 'Column-3', displayName: 'Column 3' },
    ],
    rows: [
      {
        id: '1',
        cells: [
          { content: 'Fleck, Arthur' },
          {
            content: <>
              {buttonCell}
              <div>Non-Focusable Text</div>
              {/* eslint-disable-next-line react/jsx-closing-tag-location */}
            </>,
          },
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
        overflowColumns={cols}
        defaultColumnWidth={170}
        rows={rows}
        rowHeaderIndex={rowHeaderIndex}
        rowHeight="50px"
        ariaLabel="Worklist Data Grid"
      />
    </>
  );
};

export default WorklistDataGridFocusableCell;
