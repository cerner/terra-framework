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
          variant="hazard-medium"
          dialogTitle="Sensitive Information - Pediatric Progress Note"
          startMessage="You are about to view a note that is marked as sensitive. You must acknowledge its sensitivity to continue."
          endMessage="How do you want to proceed?"
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
      <Button text="Trigger Notification Dialog" onClick={handleOpenModal} />
    </>
  );
};

export default NotificationDialogExample;
