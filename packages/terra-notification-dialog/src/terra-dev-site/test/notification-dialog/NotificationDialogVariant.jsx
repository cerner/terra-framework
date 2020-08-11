import React, { useState } from 'react';
import Button from 'terra-button';
import PropTypes from 'prop-types';
import NotificationDialog from '../../../NotificationDialog';

const clickConfirm = () => {
  alert('You clicked confirm'); // eslint-disable-line no-alert
};

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

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const { variant, ...customProps } = props;

  return (
    <>
      <NotificationDialog
        {...customProps}
        variant={variant}
        isOpen={isOpen}
        dialogTitle="The title relates directly to the choices."
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
