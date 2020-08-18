import React, { useState } from 'react';
import Button from 'terra-button';
import NotificationDialog from 'terra-notification-dialog';

const NotificationDialogExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      {isOpen && (
        <NotificationDialog
          variant="error"
          dialogTitle="Use a Title That Relates Directly to The Choices"
          startMessage="The Main Instruction is text used to provide more detail or define terminology. Don’t repeat the title verbatim."
          acceptAction={{
            text: 'accept',
            onClick: handleCloseModal,
          }}
          rejectAction={{
            text: 'reject',
            onClick: handleCloseModal,
          }}
          buttonOrder="acceptFirst"
          emphasizedAction="accept"
        />
      )}
      <Button text="Trigger Notification Dialog" onClick={handleOpenModal} />
    </>
  );
};

export default NotificationDialogExample;
