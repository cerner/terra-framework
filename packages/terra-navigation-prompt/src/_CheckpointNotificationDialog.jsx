import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import NotificationDialog from 'terra-notification-dialog';

const propTypes = {
  /**
   * A function executed when the Confirm primary action is selected within the NotificationDialog.
   */
  onConfirm: PropTypes.func,
  /**
   * A function executed when the Cancel primary action is selected within the NotificationDialog.
   */
  onCancel: PropTypes.func,
  /**
   * A string rendered as the title of the NotificationDialog. If not provided, a default string will be rendered.
   */
  customTitle: PropTypes.string,
  /**
   * A string rendered as the message of the NotificationDialog. If not provided, a default string will be rendered.
   */
  customMessage: PropTypes.string,
  /**
   * @private
   * The intl object provided by injectIntl.
   */
  intl: intlShape,
};

const CheckpointNotificationDialog = injectIntl(({
  intl, onConfirm, onCancel, customTitle, customMessage,
}) => {
  let title = customTitle;
  if (!title) {
    title = intl.formatMessage({ id: 'Terra.navigationPromptCheckpoint.promptTitle' });
  }

  let message = customMessage;
  if (!message) {
    message = intl.formatMessage({ id: 'Terra.navigationPromptCheckpoint.promptMessage' });
  }

  return (
    <NotificationDialog
      isOpen
      title={title}
      message={message}
      primaryAction={{
        text: intl.formatMessage({ id: 'Terra.navigationPromptCheckpoint.confirmPromptText' }),
        onClick: onConfirm,
      }}
      secondaryAction={{
        text: intl.formatMessage({ id: 'Terra.navigationPromptCheckpoint.denyPromptText' }),
        onClick: onCancel,
      }}
      variant="warning"
    />
  );
});

CheckpointNotificationDialog.propTypes = propTypes;

export default CheckpointNotificationDialog;
