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
          variant="hazard-high"
          dialogTitle="Risk for Allergic Reaction"
          startMessage="The patient is allergic to an ingredient in the the medication you have prescribed. Please choose an alternative medication for treatment."
          acceptAction={{
            text: 'ok',
            onClick: handleCloseModal,
          }}
          emphasizedAction="accept"
        />
      )}
      <Button text="Trigger Notification Dialog" onClick={handleOpenModal} />
    </>
  );
};

export default NotificationDialogExample;
