import React, { useState } from 'react';
import { WorklistDataGrid } from 'terra-data-grid';
import NotificationDialog from 'terra-notification-dialog';

const WorklistDataGridAutoFocusableCell = () => {
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
  const anchorCell = <a href="https://www.oracle.com/" aria-label="Visit Oracle">Visit Oracle</a>;

  const gridDataJSON = {
    cols: [
      { id: 'Column-0', displayName: 'Patient' },
      { id: 'Column-1', displayName: 'Action A' },
      { id: 'Column-2', displayName: 'Action B' },
    ],
    rows: [
      {
        id: '1',
        cells: [
          { content: 'Fleck, Arthur' },
          { content: buttonCell },
          { content: anchorCell },
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
        isAutoFocusEnabled
      />
    </>
  );
};

export default WorklistDataGridAutoFocusableCell;
