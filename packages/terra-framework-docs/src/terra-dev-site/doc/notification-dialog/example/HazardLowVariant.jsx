import React, { useState, useRef } from 'react';
import Button from 'terra-button';
import NotificationDialog from 'terra-notification-dialog';

const NotificationDialogExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonElement = useRef();

  const setButtonNode = (node) => {
    buttonElement.current = node;
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    document.querySelector('#root').removeAttribute('inert');
    buttonElement.current.focus();
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      {isOpen && (
        <NotificationDialog
          variant="hazard-low"
          dialogTitle="Protocol Treatment Period Advisory"
          startMessage="oxyCODONE cannot be included because the associated days of treatment are completed, discontinued, or skipped."
          endMessage="Resolve the associated days to include in the Protocol treatment period."
          onRequestClose={handleCloseModal}
          acceptAction={{
            text: 'OK',
            onClick: handleCloseModal,
          }}
        />
      )}
      <Button text="Trigger Notification Dialog" onClick={handleOpenModal} refCallback={setButtonNode} />
    </>
  );
};

export default NotificationDialogExample;
