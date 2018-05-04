import React from 'react';
import PropTypes from 'prop-types';
import AbstractModal from 'terra-abstract-modal';
import Button from 'terra-button';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconError from 'terra-icon/lib/icon/IconError';
import IconWarning from 'terra-icon/lib/icon/IconWarning';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import IconSuccess from 'terra-icon/lib/icon/IconSuccess';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './NotificationDialog.scss';

const cx = classNames.bind(styles);

const variants = {
  ALERT: 'Alert',
  ERROR: 'Error',
  WARNING: 'Warning',
  ADVISORY: 'Advisory',
  INFO: 'Info',
  SUCCESS: 'Success',
  CUSTOM: 'Custom',
};

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
   * Array of buttons. Restricted to two buttons.
   */
  actions: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.oneOf(['action', 'dismiss']),
    text: PropTypes.string,
    onClick: PropTypes.func,
  })),
  /**
   * The variant of notification to be rendered.
   * Use the Notification.Opts.Variants attribute of the Notification component for access to these variant strings.
   */
  variant: PropTypes.oneOf([
    variants.ALERT,
    variants.ERROR,
    variants.WARNING,
    variants.ADVISORY,
    variants.INFO,
    variants.SUCCESS,
    variants.CUSTOM,
  ]),
  /**
   * The icon to be used for a notification of type custom. This will not be used for any other notification types.
   */
  customIcon: PropTypes.element,
  /**
   * Toggle to show notification-dialog or not.
   */
  isOpen: PropTypes.bool.isRequired,
  /**
   * Callback function indicating a close condition was met, should be combined with isOpen for state management.
   */
  onRequestClose: PropTypes.func.isRequired,
};

const defaultProps = {
  title: null,
  message: null,
  actions: [],
  variant: variants.CUSTOM,
};

const actionSection = (actions) => {
  let actionButton = null;
  let dismissButton = null;
  if (!actions || !actions.length) {
    return null;
  }

  for (let i = 0; i < actions.length; i += 1) {
    const action = actions[i];
    if (action.key === 'action') {
      actionButton = <Button text={action.text} variant={Button.Opts.Variants.EMPHASIS} onClick={action.onClick} />;
    }
    if (action.key === 'dismiss') {
      dismissButton = <Button text={action.text} onClick={action.onClick} />;
    }
  }
  return <div className={cx('actions')}>{actionButton}{dismissButton}</div>;
};

const getIcon = (variant, customIcon = null) => {
  switch (variant) {
    case variants.ALERT:
      return (<IconAlert />);
    case variants.ERROR:
      return (<IconError />);
    case variants.WARNING:
      return (<IconWarning />);
    case variants.ADVISORY:
      return null;
    case variants.INFO:
      return (<IconInformation />);
    case variants.SUCCESS:
      return (<IconSuccess />);
    case variants.CUSTOM:
      return customIcon;
    default:
      return null;
  }
};

class NotificationDialog extends React.Component {
  render() {
    if (!this.props.isOpen) {
      return null;
    }

    const {
      header,
      title,
      message,
      actions,
      variant,
      customIcon,
      isOpen,
      onRequestClose,
      ...customProps
    } = this.props;

    const defaultHeader = variant === variants.CUSTOM ? '' : `${variant}`;
    const notificationDialogClassNames = cx('notification-dialog', customProps.className);

    return (
      <AbstractModal
        ariaLabel="NotificationDialog"
        classNameModal={notificationDialogClassNames}
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        closeOnEsc={false}
        closeOnOutsideClick={false}
        zIndex="8000"
      >
        <div className={cx('header-body')}>{header || defaultHeader}</div>
        <div className={cx('notification-dialog-body')}>
          {variant &&
            <div className={cx('icon-div')}>{getIcon(variant, customIcon)}</div>
          }
          <div className={cx('notification-dialog-body-text')}>
            <div className={cx('title')}>{title}</div>
            <div className={cx('message')}>{message}</div>
          </div>
        </div>
        <div className={cx('footer-body')}>{actionSection(actions)}</div>
      </AbstractModal>
    );
  }
}

NotificationDialog.propTypes = propTypes;
NotificationDialog.defaultProps = defaultProps;
NotificationDialog.Opts = {};
NotificationDialog.Opts.Variants = variants;

export default NotificationDialog;
