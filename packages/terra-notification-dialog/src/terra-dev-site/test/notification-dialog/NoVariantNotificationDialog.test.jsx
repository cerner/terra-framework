import React from 'react';
import Button from 'terra-button';
import NotificationDialog from '../../../NotificationDialog';

const clickOK = () => {
  alert('You clicked OK'); // eslint-disable-line no-alert
};

class NoVariantNotificationDialog extends React.Component {
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
    return (
      <div>
        <NotificationDialog
          header="No Variant for this dialog"
          isOpen={this.state.isOpen}
          onRequestClose={this.handleCloseModal}
          title="Make sure that the title relates directly to the choices."
          message="The Main Instruction is text used to provide more detail or define terminology. Don’t repeat the title verbatim."
          primaryAction={{
            text: 'OK',
            onClick: clickOK,
          }}
          secondaryAction={{
            text: 'Close',
            onClick: this.handleCloseModal,
          }}
        />
        <Button id="trigger-notification-dialog" text="Trigger Notification Dialog" onClick={this.handleOpenModal} />
      </div>
    );
  }
}

export default NoVariantNotificationDialog;
