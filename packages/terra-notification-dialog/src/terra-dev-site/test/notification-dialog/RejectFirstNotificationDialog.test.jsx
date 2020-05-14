import React, { useState } from 'react';
import Button from 'terra-button';
import NotificationDialog from '../../../NotificationDialog';

const clickConfirm = () => {
  alert('You clicked confirm'); // eslint-disable-line no-alert
};

const RejectFirstNotificationDialog = () => {
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
        dialogTitle="Make sure that the title relates directly to the choices."
        startMessage="The Main Instruction is text used to provide more detail or define terminology. Don’t repeat the title verbatim."
        acceptAction={{
          text: 'accept',
          onClick: clickConfirm,
        }}
        rejectAction={{
          text: 'reject',
          onClick: handleCloseModal,
        }}
        buttonOrder="rejectFirst"
        emphasizedAction="reject"
      />
      <Button id="trigger-notification-dialog" text="Trigger NotificationDialog" onClick={handleOpenModal} />
    </>
  );
};

export default RejectFirstNotificationDialog;
