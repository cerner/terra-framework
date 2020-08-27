import React, { useState } from 'react';
import Button from 'terra-button';
import NotificationDialog from 'terra-notification-dialog';

const NoVariantNotificationDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonOrder, setButtonOrder] = useState();

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal = (buttonOrderClicked) => {
    setButtonOrder(buttonOrderClicked);
    setIsOpen(true);
  };

  return (
    <>
      {isOpen && (
        <NotificationDialog
          buttonOrder={buttonOrder}
          variant="hazard-low"
          dialogTitle="Use a Title That Relates Directly to The Choices"
          startMessage="The Main Instruction is text used to provide more detail or define terminology. Don’t repeat the title verbatim."
          acceptAction={{
            text: 'accept',
            onClick: handleCloseModal,
          }}
          rejectAction={{
            text: 'reject',
            onClick: handleCloseModal,
          }}
        />
      )}
      <Button text="Accept Button First" onClick={() => handleOpenModal('acceptFirst')} />
      <Button text="Reject Button First" onClick={() => handleOpenModal('rejectFirst')} />
    </>
  );
};

export default NoVariantNotificationDialog;
