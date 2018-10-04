import React from 'react';
import { injectIntl, intlShape } from 'terra-base';
import Button from 'terra-button';
import { NotificationDialogVariants, mountNotificationDialog } from '../../../ConfirmNotificationDialog';

class ConfirmNotificationDialogExample extends React.Component {
  constructor() {
    super();

    this.renderNotificationDialog = this.renderNotificationDialog.bind(this);

    this.state = {
      actionTaken: undefined,
    };
  }

  renderNotificationDialog() {
    new Promise((resolve, reject) => {
      mountNotificationDialog({
        variant: NotificationDialogVariants.WARNING,
        title: 'ConfirmNotificationDialog',
        message: 'Click an action button to dismiss.',
        primaryAction: {
          text: 'OK',
          onClick: () => {
            resolve();
          },
        },
        secondaryAction: {
          text: 'Cancel',
          onClick: () => {
            reject();
          },
        },
      }, 'confirm-notification-dialog-example-container', this.props.intl.locale);
    }).then(() => {
      this.setState({ actionTaken: 'OK' });
    }, () => {
      this.setState({ actionTaken: 'Cancel' });
    });
  }

  render() {
    const { actionTaken } = this.state;

    return (
      <div>
        <Button text="Trigger ConfirmNotificationDialog" onClick={this.renderNotificationDialog} />
        {actionTaken ? (
          <p>
            Action Taken:
            {' '}
            {actionTaken}
          </p>
        ) : undefined}
      </div>
    );
  }
}

ConfirmNotificationDialogExample.propTypes = {
  intl: intlShape,
};

export default injectIntl(ConfirmNotificationDialogExample);
