import React, { useState, useRef } from 'react';
import Button from 'terra-button';
import NotificationDialog from 'terra-notification-dialog';

const NotificationDialogNoTitle = () => {
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
          variant="error"
          startMessage="The Main Instruction is text used to provide more detail or define terminology. Don’t repeat the title verbatim."
          onRequestClose={handleCloseModal}
          acceptAction={{
            text: 'Close',
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

export default NotificationDialogNoTitle;
