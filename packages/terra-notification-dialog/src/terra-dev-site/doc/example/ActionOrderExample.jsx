import React, { useState } from 'react';
import Button from 'terra-button';
import NotificationDialog from 'terra-notification-dialog';

const NoVariantNotificationDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonOrder, setButtonOrder] = useState();

  const handleCloseModal = (actionClicked) => {
    alert(`You clicked the ${actionClicked} action.`); // eslint-disable-line no-alert
    setIsOpen(false);
  };

  const handleOpenModal = (buttonOrderClicked) => {
    setButtonOrder(buttonOrderClicked);
    setIsOpen(true);
  };

  return (
    <>
      <NotificationDialog
        header="Variant was not set for this dialog"
        buttonOrder={buttonOrder}
        isOpen={isOpen}
        title="Make sure that the title relates directly to the choices."
        startMessage="The Main Instruction is text used to provide more detail or define terminology. Don’t repeat the title verbatim."
        acceptAction={{
          text: 'accept',
          onClick: () => {
            handleCloseModal('Accept');
          },
        }}
        rejectAction={{
          text: 'reject',
          onClick: () => {
            handleCloseModal('reject');
          },
        }}
      />
      <Button text="Accept Button First" onClick={() => handleOpenModal('acceptFirst')} />
      <Button text="Reject Button First" onClick={() => handleOpenModal('rejectFirst')} />
    </>
  );
};

export default NoVariantNotificationDialog;
