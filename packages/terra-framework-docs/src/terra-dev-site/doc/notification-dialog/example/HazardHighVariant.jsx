import React, { useState, useRef } from 'react';
import Button from 'terra-button';
import NotificationDialog from 'terra-notification-dialog';

const NotificationDialogExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonElement = useRef();

  const setButtonNode = (node) => {
    buttonElement.current = node;
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    document.querySelector('#root').removeAttribute('inert');
    buttonElement.current.focus();
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      {isOpen && (
        <NotificationDialog
          variant="hazard-high"
          dialogTitle="Drug Dosage Risk"
          startMessage="A wrong drug dosage can occur if the suggested cycle (e.g. daily) does not match the intended cycle (e.g. weekly)."
          endMessage="Change the suggested cycle or the intended cycle so they match."
          onRequestClose={handleCloseModal}
          acceptAction={{
            text: 'OK',
            onClick: handleCloseModal,
          }}
          emphasizedAction="accept"
        />
      )}
      <Button text="Trigger Notification Dialog" onClick={handleOpenModal} refCallback={setButtonNode} />
    </>
  );
};

export default NotificationDialogExample;
