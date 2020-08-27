import React, { useState } from 'react';
import Button from 'terra-button';
import NotificationDialog from '../../../NotificationDialog';

const NotificationDialogNoMessage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <NotificationDialog
          variant="hazard-low"
          dialogTitle="There is no message here."
          acceptAction={{
            text: 'Close',
            onClick: handleCloseModal,
          }}
          buttonOrder="acceptFirst"
          emphasizedAction="accept"
        />
      )}
      <Button id="trigger-notification-dialog" text="Trigger NotificationDialog" onClick={handleOpenModal} />
    </>
  );
};

export default NotificationDialogNoMessage;
