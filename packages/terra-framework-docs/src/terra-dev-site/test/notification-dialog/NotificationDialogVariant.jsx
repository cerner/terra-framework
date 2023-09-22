import React, { useState, useRef } from 'react';
import Button from 'terra-button';
import PropTypes from 'prop-types';
import NotificationDialog from 'terra-notification-dialog';

const propTypes = {
  variant: PropTypes.oneOf([
    'hazard-high',
    'hazard-medium',
    'hazard-low',
    'error',
    'custom',
  ]),
};

const NotificationDialogVariant = (props) => {
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

  const { variant, ...customProps } = props;

  return (
    <>
      {isOpen && (
        <NotificationDialog
          {...customProps}
          variant={variant}
          dialogTitle="The title relates directly to the choices."
          startMessage="The Main Instruction is text used to provide more detail or define terminology. Don’t repeat the title verbatim."
          onRequestClose={handleCloseModal}
          acceptAction={{
            text: 'Confirm',
            onClick: handleCloseModal,
          }}
          rejectAction={{
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

NotificationDialogVariant.propTypes = propTypes;
export default NotificationDialogVariant;
