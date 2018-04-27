import React from 'react';
import Button from 'terra-button';
import NotificationDialog from '../../src/NotificationDialog';

const clickOK = () => {
  alert('You clicked OK'); // eslint-disable-line no-alert
};

class CompleteNotificationDialog extends React.Component {
  constructor() {
    super();

    this.state = {
      showNotificationDialog: false,
    };

    this.handleOpenNotificationDialog = this.handleOpenNotificationDialog.bind(this);
    this.handleCloseNotificationDialog = this.handleCloseNotificationDialog.bind(this);
  }

  handleOpenNotificationDialog() {
    this.setState({ showNotificationDialog: true });
  }

  handleCloseNotificationDialog() {
    this.setState({ showNotificationDialog: false });
  }

  render() {
    return (
      <div>
        <NotificationDialog
          showNotificationDialog={this.state.showNotificationDialog}
          onRequestClose={this.handleCloseNotificationDialog}
          title="Title goes here"
          message="Click ok to show alert and Close to go back."
          actions={[
            <Button
              id="notification-dialog-ok"
              text="Ok"
              onClick={clickOK}
            />,
            <Button
              id="notification-dialog-close"
              text="Close"
              onClick={this.handleCloseNotificationDialog}
            />,
          ]}
        />
        <Button id="trigger-notification-dialog" text="Trigger NotificationDialog" onClick={this.handleOpenNotificationDialog} />
      </div>
    );
  }
}

export default CompleteNotificationDialog;
