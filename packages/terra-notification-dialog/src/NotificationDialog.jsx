import React from 'react';
import PropTypes from 'prop-types';
import AbstractModal from 'terra-abstract-modal';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './NotificationDialog.scss';

const cx = classNames.bind(styles);

const NotificationTypes = {
  ALERT: 'alert',
  ERROR: 'error',
  WARNING: 'warning',
  ADVISORY: 'advisory',
  INFO: 'info',
  SUCCESS: 'success',
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
   * Array of buttons. Restricted to terra-button.
   */
  actions: PropTypes.arrayOf(PropTypes.instanceOf(Button)),
  /**
   *
   */
  type: PropTypes.oneOf(NotificationTypes),
  /**
   * Toggle to show notification-dialog or not.
   */
  showNotificationDialog: PropTypes.bool.isRequired,
  /**
   * Callback function indicating a close condition was met, should be combined with showNotificationDialog for state management.
   */
  onRequestClose: PropTypes.func.isRequired,
};

const defaultProps = {
  header: null,
  title: null,
  message: null,
  actions: [],
};

const actionSection = (actions) => {
  if (!actions || !actions.length) {
    return null;
  }
  return <div className={cx('actions')}>{actions}</div>;
};

class NotificationDialog extends React.Component {
  render() {
    if (!this.props.showNotificationDialog) {
      return null;
    }

    const {
      header,
      title,
      message,
      actions,
      type,
      showNotificationDialog,
      onRequestClose,
      ...customProps
    } = this.props;

    return (
      <div {...customProps} className={cx('notification-dialog')}>
        <AbstractModal
          ariaLabel="NotificationDialog"
          classNameModal={cx('notification-dialog')}
          isOpen={this.props.showNotificationDialog}
          onRequestClose={this.props.onRequestClose}
          closeOnEsc={false}
          closeOnOutsideClick={false}
          zIndex="8000"
        >
          <div className={cx('header-body')}>{header}</div>
          <div className={cx('notification-dialog-body')}>
            <div className={cx('title')}>{title}</div>
            <div className={cx('message')}>{message}</div>
          </div>
          <div className={cx('footer-body')}>{actionSection(actions)}</div>
        </AbstractModal>
      </div>
    );
  }
}

NotificationDialog.propTypes = propTypes;
NotificationDialog.defaultProps = defaultProps;
export default NotificationDialog;
