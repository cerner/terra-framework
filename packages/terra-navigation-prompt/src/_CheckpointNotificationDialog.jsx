import React from 'react';
import NotificationDialog from 'terra-notification-dialog';

class CheckpointNotificationDialog extends React.Component {
  constructor() {
    super();

    this.showDialog = this.showDialog.bind(this);
    this.hideDialog = this.hideDialog.bind(this);

    this.state = {
      dialogProps: undefined,
    };
  }

  showDialog(dialogProps) {
    this.setState({
      dialogProps,
    });
  }

  hideDialog(callback) {
    this.setState({
      dialogProps: undefined,
    }, callback);
  }

  render() {
    const { dialogProps } = this.state;

    if (!dialogProps) {
      return null;
    }

    return (
      <NotificationDialog
        isOpen
        title={dialogProps.title}
        message={dialogProps.message}
        primaryAction={{
          text: dialogProps.rejectButtonText,
          onClick: this.hideDialog.bind(null, dialogProps.onReject),
        }}
        secondaryAction={{
          text: dialogProps.acceptButtonText,
          onClick: this.hideDialog.bind(null, dialogProps.onAccept),
        }}
        variant="warning"
      />
    );
  }
}

export default CheckpointNotificationDialog;
