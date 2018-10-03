import React from 'react';
import PropTypes from 'prop-types';

import NotificationDialog, { NotificationDialogVariants } from './NotificationDialog';
import transientUtils from './_transientUtils';

const propTypes = {
  /**
   * Header of the notification-dialog.
   */
  header: PropTypes.string,
  /**
   * Title of the notification-dialog.
   */
  title: PropTypes.string,
  /**
   * Message of the notification-dialog.
   */
  message: PropTypes.string,
  /**
   * The Action of the primary button.
   */
  primaryAction: PropTypes.shape({
    text: PropTypes.string,
    onClick: PropTypes.func,
  }).isRequired,
  /**
   * The Action of the secondary button.
   */
  secondaryAction: PropTypes.shape({
    text: PropTypes.string,
    onClick: PropTypes.func,
  }),
  /**
   * The variant of notification to be rendered.
   * Use one of alert, error, warning, info, success, custom.
   */
  variant: PropTypes.oneOf([
    NotificationDialogVariants.ALERT,
    NotificationDialogVariants.ERROR,
    NotificationDialogVariants.WARNING,
    NotificationDialogVariants.INFO,
    NotificationDialogVariants.SUCCESS,
    NotificationDialogVariants.CUSTOM,
  ]),
  /**
   * The icon to be used for a notification of type custom. This will not be used for any other notification types.
   */
  customIcon: PropTypes.element,
  transientComponent: PropTypes.shape({
    containerId: PropTypes.string,
    remove: PropTypes.func,
  }),
};

class TransientNotificationDialog extends React.Component {
  /**
   * The TransientNotificationDialog will not be closed unless an action is selected.
   * onRequestClose is a required prop of the NotificationDialog. This static is defined for
   * rendering efficiency.
   */
  static handleRequestClose() {}

  /**
   * Renders an instance of the TransientNotificationDialog to the DOM.
   * @param {Object} props The prop values to apply to the TransientNotificationDialog.
   * @param {String} id An id that will be used to create the element to which the TransientNotificationDialog will be mounted.
   * @param {String} locale The string locale used to load translated messages.
   * @param {Object} customMessages The object containing custom messages for the given locale.
   * @returns {Promise} A Promise is returned. If a TransientNotificationDialog is already mounted for the given id value,
   *                    the Promise will be rejected. Otherwise, the Promise will be resolved after the TransientNotificationDialog
   *                    has been mounted.
   */
  static present(props, id, locale, customMessages) {
    return transientUtils.presentTransientComponent((
      <TransientNotificationDialog {...props} />
    ), id, locale, customMessages);
  }

  static remove(id) {
    return transientUtils.removeTransientComponent(id);
  }

  constructor(props) {
    super(props);

    this.handlePrimaryAction = this.handlePrimaryAction.bind(this);
    this.handleSecondaryAction = this.handleSecondaryAction.bind(this);
  }

  handlePrimaryAction() {
    const { primaryAction, transientComponent } = this.props;

    if (primaryAction.onClick) {
      primaryAction.onClick();
    }

    transientComponent.remove();
  }

  handleSecondaryAction() {
    const { secondaryAction, transientComponent } = this.props;

    if (secondaryAction.onClick) {
      secondaryAction.onClick();
    }

    transientComponent.remove();
  }

  render() {
    const {
      transientComponent,
      ...notificationDialogProps
    } = this.props;

    let wrappedPrimaryAction;
    if (notificationDialogProps.primaryAction) {
      wrappedPrimaryAction = {
        text: notificationDialogProps.primaryAction.text,
        onClick: this.handlePrimaryAction,
      };
    }

    let wrappedSecondaryAction;
    if (notificationDialogProps.secondaryAction) {
      wrappedSecondaryAction = {
        text: notificationDialogProps.secondaryAction.text,
        onClick: this.handleSecondaryAction,
      };
    }

    return (
      <NotificationDialog
        {...notificationDialogProps}
        primaryAction={wrappedPrimaryAction}
        secondaryAction={wrappedSecondaryAction}
        isOpen
        onRequestClose={TransientNotificationDialog.handleRequestClose}
      />
    );
  }
}

TransientNotificationDialog.propTypes = propTypes;

export default TransientNotificationDialog;
