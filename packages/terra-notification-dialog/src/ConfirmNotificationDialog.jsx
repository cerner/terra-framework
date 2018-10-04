import React from 'react';
import PropTypes from 'prop-types';

import NotificationDialog, { NotificationDialogVariants } from './NotificationDialog';
import transientUtils from './_transientUtils';

/**
 * Renders an instance of the ConfirmNotificationDialog to the DOM.
 * @param {Object} props The prop values to apply to the ConfirmNotificationDialog.
 * @param {String} id An id that will be used to create the element to which the ConfirmNotificationDialog will be mounted.
 * @param {String} locale The string locale used to load translated messages.
 * @param {Object} customMessages The object containing custom messages for the given locale.
 * @returns {Promise} A Promise is returned. If a ConfirmNotificationDialog is already mounted for the given id value,
 *                    the Promise will be rejected. Otherwise, the Promise will be resolved after the ConfirmNotificationDialog
 *                    has been mounted.
 */
const mountNotificationDialog = (props, id, locale, customMessages) => transientUtils.mount((
  <InjectedConfirmNotificationDialog {...props} />
), id, locale, customMessages);

/**
 * Unmounts a currently presented ConfirmNotificationDialog instance.
 * @param {String} id The id string used to identify the element containing the ConfirmNotificationDialog.
 * @returns {Promise} A Promise is returned. The Promise will be resolved after the component is unmounted, or the Promise will
 *                    be rejected if the id does match a currently presented transient component.
 */
const unmountNotificationDialog = id => transientUtils.unmount(id);

const propTypes = {
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
  /**
   * A callback function to let the containing component (e.g. modal) to regain focus.
   */
  releaseFocus: PropTypes.func,
  /**
   * A callback function to request focus from the containing component (e.g. modal).
   */
  requestFocus: PropTypes.func,
  /**
   * Object containing data relevant to management of the ConfirmNotificationDialog's presentation state.
   */
  transientComponent: PropTypes.shape({
    containerId: PropTypes.string,
  }).isRequired,
};

class ConfirmNotificationDialog extends React.Component {
  /**
   * The ConfirmNotificationDialog will not be closed unless an action is selected.
   * onRequestClose is a required prop of the NotificationDialog. This static is defined for
   * rendering efficiency.
   */
  static handleRequestClose() {}

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

    unmountNotificationDialog(transientComponent.containerId);
  }

  handleSecondaryAction() {
    const { secondaryAction, transientComponent } = this.props;

    if (secondaryAction.onClick) {
      secondaryAction.onClick();
    }

    unmountNotificationDialog(transientComponent.containerId);
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
        onRequestClose={ConfirmNotificationDialog.handleRequestClose}
      />
    );
  }
}

ConfirmNotificationDialog.propTypes = propTypes;

const InjectedConfirmNotificationDialog = transientUtils.injectTransientComponent(ConfirmNotificationDialog);

export default InjectedConfirmNotificationDialog;
export {
  NotificationDialogVariants,
  mountNotificationDialog,
  unmountNotificationDialog,
};
