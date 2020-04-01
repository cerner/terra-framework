import React, { useState } from 'react';
import Button from 'terra-button';
import NotificationDialog from 'terra-notification-dialog';

const CompleteNotificationDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [variant, setVariant] = useState();

  const handleCloseModal = (actionClicked) => {
    alert(`You clicked the ${actionClicked} action.`); // eslint-disable-line no-alert
    setIsOpen(false);
  };

  const handleOpenModal = (triggerVariant) => {
    setVariant(triggerVariant);
    setIsOpen(true);
  };

  return (
    <>
      <NotificationDialog
        variant={variant}
        isOpen={isOpen}
        title="Make sure that the title relates directly to the choices."
        startMessage="The Main Instruction is text used to provide more detail or define terminology. Don’t repeat the title verbatim."
        acceptAction={{
          text: 'accept',
          onClick: () => {
            handleCloseModal('accept');
          },
        }}
        rejectAction={{
          text: 'reject',
          onClick: () => {
            handleCloseModal('reject');
          },
        }}
        buttonOrder="acceptFirst"
        emphasizedAction="accept"
      />
      <Button text="Show Alert Dialog" onClick={() => handleOpenModal('alert')} />
      <Button text="Show Error Dialog" onClick={() => handleOpenModal('error')} />
      <Button text="Show Warning Dialog" onClick={() => handleOpenModal('warning')} />
      <Button text="Show Success Dialog" onClick={() => handleOpenModal('success')} />
      <Button text="Show Info Dialog" onClick={() => handleOpenModal('info')} />
      <Button text="Show Custom Dialog" onClick={() => handleOpenModal('custom')} />
    </>
  );
};

export default CompleteNotificationDialog;
