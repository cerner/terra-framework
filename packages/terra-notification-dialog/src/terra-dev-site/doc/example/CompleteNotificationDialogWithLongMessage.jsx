import React, { useState } from 'react';
import Button from 'terra-button';
import NotificationDialog, { NotificationDialogVariants } from 'terra-notification-dialog';

const clickConfirm = () => {
  console.log('You clicked confirm'); // eslint-disable-line no-console
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
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare odio quis turpis viverra, volutpat laoreet magna porta."
        startMessage="Quisque egestas ullamcorper velit vitae volutpat. Quisque vestibulum nulla nunc, eget pharetra massa semper ac. In sit amet felis tincidunt, laoreet tortor nec, tempus ipsum."
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
      <Button text="Trigger Notification Dialog" onClick={handleOpenModal} />
    </>
  );
};

export default CompleteNotificationDialogWithLongMessage;
