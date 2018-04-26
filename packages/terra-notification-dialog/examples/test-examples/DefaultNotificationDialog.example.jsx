import React from 'react';
import Button from 'terra-button';
import NotificationDialog from '../../src/NotificationDialog';

class DefaultNotificationDialog extends React.Component {
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
          onRequestClose={this.state.showNotificationDialog}
        />
        <Button id="trigger-notification-dialog" text="Trigger NotificationDialog" onClick={this.handleOpenNotificationDialog} />
      </div>
    );
  }
}

export default DefaultNotificationDialog;
