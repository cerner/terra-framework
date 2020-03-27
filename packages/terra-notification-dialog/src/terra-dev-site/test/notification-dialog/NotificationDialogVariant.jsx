import React, { useState } from 'react';
import Button from 'terra-button';
import PropTypes from 'prop-types';
import NotificationDialog, { NotificationDialogVariants } from '../../../NotificationDialog';

const clickConfirm = () => {
  alert('You clicked confirm'); // eslint-disable-line no-alert
};

const propTypes = {
  variant: PropTypes.oneOf(Object.values(NotificationDialogVariants)), // eslint-disable-line compat/compat
};

const NotificationDialogVariant = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const { variant } = props;

  return (
    <>
      <NotificationDialog
        variant={variant}
        isOpen={isOpen}
        title="Make sure that the title relates directly to the choices."
        startMessage="The Main Instruction is text used to provide more detail or define terminology. Don’t repeat the title verbatim."
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
      <Button id="trigger-notification-dialog" text="Trigger NotificationDialog" onClick={handleOpenModal} />
    </>
  );
};

NotificationDialogVariant.propTypes = propTypes;
export default NotificationDialogVariant;
