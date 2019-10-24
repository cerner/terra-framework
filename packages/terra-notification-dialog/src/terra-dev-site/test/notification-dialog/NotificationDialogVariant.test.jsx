import React from 'react';
import Button from 'terra-button';
import PropTypes from 'prop-types';
import NotificationDialog, { NotificationDialogVariants } from '../../../NotificationDialog';

const clickConfirm = () => {
  alert('You clicked confirm'); // eslint-disable-line no-alert
};

const propTypes = {
  variant: PropTypes.oneOf(Object.values(NotificationDialogVariants)), // eslint-disable-line compat/compat
};

class NotificationDialogVariant extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ isOpen: true });
  }

  handleCloseModal() {
    this.setState({ isOpen: false });
  }

  render() {
    const { variant } = this.props;

    return (
      <div>
        <NotificationDialog
          variant={variant}
          isOpen={this.state.isOpen}
          title="Make sure that the title relates directly to the choices."
          startMessage="The Main Instruction is text used to provide more detail or define terminology. Don’t repeat the title verbatim."
          acceptAction={{
            text: 'Confirm',
            onClick: clickConfirm,
          }}
          rejectAction={{
            text: 'Close',
            onClick: this.handleCloseModal,
          }}
          buttonOrder="acceptFirst"
          emphasizedAction="accept"
        />
        <Button id="trigger-notification-dialog" text="Trigger NotificationDialog" onClick={this.handleOpenModal} />
      </div>
    );
  }
}

NotificationDialogVariant.propTypes = propTypes;
export default NotificationDialogVariant;
