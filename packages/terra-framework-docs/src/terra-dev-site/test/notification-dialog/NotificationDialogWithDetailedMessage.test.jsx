import React, { useState, useRef } from 'react';
import Button from 'terra-button';
import NotificationDialog, { ContentLayoutAsList } from 'terra-notification-dialog';

const clickConfirm = () => {
  alert('You clicked confirm'); // eslint-disable-line no-alert
};

const CompleteNotificationDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonElement = useRef();

  const setButtonNode = (node) => {
    buttonElement.current = node;
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    document.querySelector('#root').removeAttribute('inert');
    buttonElement.current.focus();
  };

  return (
    <>
      {isOpen && (
        <NotificationDialog
          variant="hazard-high"
          dialogTitle="Make sure that the title relates directly to the choices."
          startMessage="The Main Instruction is text used to provide more detail or define terminology. Don’t repeat the title verbatim."
          content={(<ContentLayoutAsList items={['item1', 'item2']} />)}
          endMessage="The End Message is text used to provide any other additional info."
          onRequestClose={handleCloseModal}
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
      )}
      <Button id="trigger-notification-dialog" text="Trigger NotificationDialog" onClick={handleOpenModal} refCallback={setButtonNode} />
    </>
  );
};

export default CompleteNotificationDialog;
