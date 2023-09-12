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
          variant="hazard-medium"
          dialogTitle="Sensitive Information - Pediatric Progress Note"
          startMessage="You are about to view a note that is marked as sensitive. You must acknowledge its sensitivity to continue."
          endMessage="How do you want to proceed?"
          onRequestClose={handleCloseModal}
          acceptAction={{
            text: 'Acknowledge and View Note',
            onClick: handleCloseModal,
          }}
          rejectAction={{
            text: 'Cancel',
            onClick: handleCloseModal,
          }}
          buttonOrder="acceptFirst"
        />
      )}
      <Button text="Trigger Notification Dialog" onClick={handleOpenModal} refCallback={setButtonNode} />
    </>
  );
};

export default NotificationDialogExample;
