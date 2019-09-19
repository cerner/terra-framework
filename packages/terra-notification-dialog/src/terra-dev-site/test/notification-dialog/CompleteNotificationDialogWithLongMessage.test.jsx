import React from 'react';
import Button from 'terra-button';
import NotificationDialog, { NotificationDialogVariants } from '../../../NotificationDialog';

const clickConfirm = () => {
  alert('You clicked confirm'); // eslint-disable-line no-alert
};

class CompleteNotificationDialogWithLongMessage extends React.Component {
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
          variant={NotificationDialogVariants.SUCCESS}
          isOpen={this.state.isOpen}
          title="This is the titleThis is the titleThis is the titleThis is the titleThis is the titleThis is the titleThis is the titleThis is the title"
          startMessage="This is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the message"
          acceptAction={{
            text: 'Confirm',
            onClick: clickConfirm,
            isEmphasized: true,
          }}
          rejectAction={{
            text: 'Close',
            onClick: this.handleCloseModal,
          }}
        />
        <Button id="trigger-notification-dialog" text="Trigger NotificationDialog" onClick={this.handleOpenModal} />
      </div>
    );
  }
}

export default CompleteNotificationDialogWithLongMessage;
