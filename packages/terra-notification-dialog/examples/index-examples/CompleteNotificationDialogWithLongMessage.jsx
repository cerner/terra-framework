import React from 'react';
import Button from 'terra-button';
import NotificationDialog from '../../src/NotificationDialog';

const clickOK = () => {
  alert('You clicked OK');  // eslint-disable-line no-alert
};

class CompleteNotificationDialogWithLongMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      showNotificationDialog: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showNotificationDialog: true });
  }

  handleCloseModal() {
    this.setState({ showNotificationDialog: false });
  }

  render() {
    return (
      <div>
        <NotificationDialog
          variant={NotificationDialog.Opts.Variants.SUCCESS}
          showNotificationDialog={this.state.showNotificationDialog}
          onRequestClose={this.handleCloseModal}
          title="This is the titleThis is the titleThis is the titleThis is the titleThis is the titleThis is the titleThis is the titleThis is the title"
          message="This is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the message"
          actions={[
            {
              key: 'action',
              text: 'Ok',
              onClick: clickOK,
            },
            {
              key: 'dismiss',
              text: 'Close',
              onClick: this.handleCloseModal,
            },
          ]}
        />
        <Button text="Trigger Notification Dialog" onClick={this.handleOpenModal} />
      </div>
    );
  }
}

export default CompleteNotificationDialogWithLongMessage;
