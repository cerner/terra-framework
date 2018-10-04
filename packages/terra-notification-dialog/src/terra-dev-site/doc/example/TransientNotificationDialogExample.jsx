import React from 'react';
import { injectIntl, intlShape } from 'terra-base';
import Button from 'terra-button';
import { NotificationDialogVariants, mount } from '../../../TransientNotificationDialog';

class TransientNotificationDialogExample extends React.Component {
  constructor() {
    super();

    this.renderNotificationDialog = this.renderNotificationDialog.bind(this);
  }

  renderNotificationDialog() {
    mount({
      variant: NotificationDialogVariants.WARNING,
      title: 'Transient NotificationDialog',
      message: 'Click an action button to dismiss.',
      primaryAction: {
        text: 'OK',
        onClick: () => {
          alert('You clicked OK. The TransientNotificationDialog will now close.'); // eslint-disable-line no-alert
        },
      },
      secondaryAction: {
        text: 'Cancel',
        onClick: () => {
          alert('You clicked Cancel. The TransientNotificationDialog will now close.'); // eslint-disable-line no-alert
        },
      },
    }, 'transient-notification-dialog-example-container', this.props.intl.locale);
  }

  render() {
    return (
      <div>
        <Button text="Trigger Transient Notification Dialog" onClick={this.renderNotificationDialog} />
      </div>
    );
  }
}

TransientNotificationDialogExample.propTypes = {
  intl: intlShape,
};

export default injectIntl(TransientNotificationDialogExample);
