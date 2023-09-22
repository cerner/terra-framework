import React, { useState, useRef } from 'react';
import Button from 'terra-button';
import NotificationDialog from 'terra-notification-dialog';

const ReversedActionNotificationDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonElement = useRef();

  const setButtonNode = (node) => {
    buttonElement.current = node;
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    document.querySelector('#root').removeAttribute('inert');
    buttonElement.current.focus();
  };

  return (
    <>
      {isOpen && (
        <NotificationDialog
          variant="hazard-high"
          dialogTitle="Use a Title That Relates Directly to The Choices"
          startMessage="The Main Instruction is text used to provide more detail or define terminology. Don’t repeat the title verbatim."
          onRequestClose={handleCloseModal}
          acceptAction={{
            text: 'Confirm',
            onClick: handleCloseModal,
          }}
          rejectAction={{
            text: 'Close',
            onClick: handleCloseModal,
          }}
          buttonOrder="acceptFirst"
          emphasizedAction="reject"
        />
      )}
      <Button text="Trigger Notification Dialog" onClick={handleOpenModal} refCallback={setButtonNode} />
    </>
  );
};

export default ReversedActionNotificationDialog;
