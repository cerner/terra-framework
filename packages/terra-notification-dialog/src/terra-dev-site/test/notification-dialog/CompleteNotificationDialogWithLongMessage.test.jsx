import React, { useState } from 'react';
import Button from 'terra-button';
import NotificationDialog, { NotificationDialogVariants } from '../../../NotificationDialog';

const clickConfirm = () => {
  alert('You clicked confirm'); // eslint-disable-line no-alert
};

const CompleteNotificationDialogWithLongMessage = () => {
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
        variant={NotificationDialogVariants.SUCCESS}
        isOpen={isOpen}
        title="This is the titleThis is the titleThis is the titleThis is the titleThis is the titleThis is the titleThis is the titleThis is the title"
        startMessage="This is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the message"
        acceptAction={{
          text: 'Confirm',
          onClick: clickConfirm,
        }}
        rejectAction={{
          text: 'Close',
          onClick: handleCloseModal,
        }}
        buttonOrder="acceptFirst"
        emphasizedAction="accept"
      />
      <Button id="trigger-notification-dialog" text="Trigger NotificationDialog" onClick={handleOpenModal} />
    </>
  );
};

export default CompleteNotificationDialogWithLongMessage;
