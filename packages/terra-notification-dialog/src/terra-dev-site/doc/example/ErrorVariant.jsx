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
          dialogTitle="Unable to Save"
          startMessage="We're sorry, we cannot save your entry at this time."
          endMessage="Click Submit to try again. If you continue to see this message, contact your support team."
          acceptAction={{
            text: 'Submit',
            onClick: handleCloseModal,
          }}
          rejectAction={{
            text: 'Cancel',
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
