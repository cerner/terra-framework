import React, { useState } from 'react';
import Button from 'terra-button';
import NotificationDialog, { NotificationDialogVariants } from '../../../NotificationDialog';

const clickConfirm = () => {
  console.log('You clicked confirm'); // eslint-disable-line no-console
};

const ContentNotificationDialog = () => {
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
        startMessage="The Start Message is text used to provide more detail or define terminology at the beginning of the dialog body. Don’t repeat the title verbatim."
        content={(
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        )}
        endMessage="The End Message is text used to provide more detail or define terminology at the end of the dialog body. Don’t repeat the title verbatim."
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
      <Button text="Trigger NotificationDialog" onClick={handleOpenModal} />
    </>
  );
};

export default ContentNotificationDialog;
