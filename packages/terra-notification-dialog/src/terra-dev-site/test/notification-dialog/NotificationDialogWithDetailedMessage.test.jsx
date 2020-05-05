import React, { useState } from 'react';
import Button from 'terra-button';
import NotificationDialog, { NotificationDialogVariants } from '../../../NotificationDialog';

const clickConfirm = () => {
  alert('You clicked confirm'); // eslint-disable-line no-alert
};

const CompleteNotificationDialog = () => {
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
        variant={NotificationDialogVariants.ALERT}
        isOpen={isOpen}
        title="Make sure that the title relates directly to the choices."
        startMessage="The Main Instruction is text used to provide more detail or define terminology. Don’t repeat the title verbatim."
        content={(
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        )}
        endMessage="The End Message is text used to provide any other additional info."
        acceptAction={{
          text: 'accept',
          onClick: clickConfirm,
        }}
        rejectAction={{
          text: 'reject',
          onClick: handleCloseModal,
        }}
        buttonOrder="acceptFirst"
        emphasizedAction="accept"
      />
      <Button id="trigger-notification-dialog" text="Trigger NotificationDialog" onClick={handleOpenModal} />
    </>
  );
};

export default CompleteNotificationDialog;
