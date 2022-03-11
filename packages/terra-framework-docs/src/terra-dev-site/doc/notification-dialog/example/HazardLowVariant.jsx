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
          variant="hazard-low"
          dialogTitle="Protocol Treatment Period Advisory"
          startMessage="oxyCODONE cannot be included because the associated days of treatment are completed, discontinued, or skipped."
          endMessage="Resolve the associated days to include in the Protocol treatment period."
          acceptAction={{
            text: 'OK',
            onClick: handleCloseModal,
          }}
        />
      )}
      <Button text="Trigger Notification Dialog" onClick={handleOpenModal} />
    </>
  );
};

export default NotificationDialogExample;
