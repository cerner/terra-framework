import React from 'react';
import PropTypes from 'prop-types';
import AbstractModal from 'terra-abstract-modal';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import { elementType } from 'airbnb-prop-types';
import styles from './NotificationDialog.scss';

const cx = classNames.bind(styles);

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
   * Array of buttons. Restricted to terra-button.
   */
  actions: PropTypes.arrayOf(elementType(Button)),
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
      title,
      message,
      actions,
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
          zIndex="8000"
        >
          <div className={cx('notification-dialog-body')}>
            <div className={cx('title')}>{title}</div>
            <div className={cx('message')}>{message}</div>
            {actionSection(actions)}
          </div>
        </AbstractModal>
      </div>
    );
  }
}

NotificationDialog.propTypes = propTypes;
NotificationDialog.defaultProps = defaultProps;
export default NotificationDialog;
