import React, { useState } from 'react';
import Button from 'terra-button';
import NotificationDialog from 'terra-notification-dialog';

const NotificationDialogExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = (actionClicked) => {
    alert(`You clicked the ${actionClicked} action.`); // eslint-disable-line no-alert
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <NotificationDialog
        variant="hazard-high"
        isOpen={isOpen}
        dialogTitle="Risk for Allergic Reaction"
        startMessage="The patient is allergic to an ingredient in the the medication you have prescribed. Please choose an alternative medication for treatment."
        acceptAction={{
          text: 'ok',
          onClick: () => {
            handleCloseModal('accept');
          },
        }}
        emphasizedAction="accept"
      />
      <Button text="Trigger Notification Dialog" onClick={handleOpenModal} />
    </>
  );
};

export default NotificationDialogExample;
