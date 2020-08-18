import React, { useState } from 'react';
import Button from 'terra-button';
import NotificationDialog, { ContentLayoutAsList } from 'terra-notification-dialog';

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
      {isOpen && (
        <NotificationDialog
          variant="hazard-medium"
          dialogTitle="Use a Title That Relates Directly to The Choices"
          startMessage="The Start Message is text used to provide more detail or define terminology at the beginning of the dialog body. Don’t repeat the title verbatim."
          content={<ContentLayoutAsList items={['item 1', 'item2 ']} />}
          endMessage="The End Message is text used to provide more detail or define terminology at the end of the dialog body. Don’t repeat the title verbatim."
          acceptAction={{
            text: 'accept',
            onClick: handleCloseModal,
          }}
          rejectAction={{
            text: 'reject',
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

export default ContentNotificationDialog;
