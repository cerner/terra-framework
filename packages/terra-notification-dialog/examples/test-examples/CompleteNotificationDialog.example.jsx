import React from 'react';
import Button from 'terra-button';
import NotificationDialog from '../../src/NotificationDialog';

const clickOK = () => {
  alert('You clicked OK');  // eslint-disable-line no-alert
};

class CompleteNotificationDialog extends React.Component {
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
          variant={NotificationDialog.Opts.Variants.ALERT}
          showNotificationDialog={this.state.showNotificationDialog}
          onRequestClose={this.handleCloseModal}
          title="Make sure that the title relates directly to the choices."
          message="The Main Instruction is text used to provide more detail or define terminology. Don’t repeat the title verbatim."
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
        <Button text="Trigger NotificationDialog" onClick={this.handleOpenModal} />
      </div>
    );
  }
}

export default CompleteNotificationDialog;
