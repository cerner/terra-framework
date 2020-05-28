import React, { useState } from 'react';
import Button from 'terra-button';
import NotificationDialog from 'terra-notification-dialog';

const ReversedActionNotificationDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <NotificationDialog
        variant="alert"
        isOpen={isOpen}
        dialogTitle="Use a Title That Relates Directly to The Choices"
        startMessage="The Main Instruction is text used to provide more detail or define terminology. Don’t repeat the title verbatim."
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
      <Button text="Trigger Notification Dialog" onClick={handleOpenModal} />
    </>
  );
};

export default ReversedActionNotificationDialog;
