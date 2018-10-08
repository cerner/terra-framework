import React from 'react';
import PropTypes from 'prop-types';
import AbstractModal from 'terra-abstract-modal';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './NotificationDialog.module.scss';

const cx = classNames.bind(styles);

const variants = {
  ALERT: 'alert',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
  SUCCESS: 'success',
  CUSTOM: 'custom',
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
    variants.ALERT,
    variants.ERROR,
    variants.WARNING,
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
  /**
   * A callback function to let the containing component (e.g. modal) to regain focus.
   */
  releaseFocus: PropTypes.func,
  /**
   * A callback function to request focus from the containing component (e.g. modal).
   */
  requestFocus: PropTypes.func,
};

const defaultProps = {
  title: null,
  message: null,
  variant: variants.CUSTOM,
};

const actionSection = (primaryAction, secondaryAction) => {
  let actionButton = null;
  let dismissButton = null;
  if (!primaryAction && !secondaryAction) {
    return null;
  }
  if (primaryAction) {
    actionButton = <Button text={primaryAction.text} variant={Button.Opts.Variants.EMPHASIS} onClick={primaryAction.onClick} />;
  }
  if (secondaryAction) {
    dismissButton = <Button text={secondaryAction.text} onClick={secondaryAction.onClick} />;
  }

  return (
    <div className={cx('actions')}>
      {actionButton}
      {dismissButton}
    </div>
  );
};

const getIcon = (intl, variant, customIcon = null) => {
  switch (variant) {
    case variants.ALERT:
      return (<span className={cx(['icon', 'alert'])} />);
    case variants.ERROR:
      return (<span className={cx(['icon', 'error'])} />);
    case variants.WARNING:
      return (<span className={cx(['icon', 'warning'])} />);
    case variants.INFO:
      return (<span className={cx(['icon', 'info'])} />);
    case variants.SUCCESS:
      return (<span className={cx(['icon', 'success'])} />);
    case variants.CUSTOM:
      return customIcon;
    default:
      return null;
  }
};

const contextTypes = {
  /* eslint-disable consistent-return */
  intl: (context) => {
    if (context.intl === undefined) {
      return new Error('Please add locale prop to Base component to load translations');
    }
  },
};

class NotificationDialog extends React.Component {
  componentDidMount() {
    if (this.props.isOpen && this.props.requestFocus) {
      this.props.requestFocus();
    }
  }

  componentDidUpdate() {
    if (this.props.isOpen) {
      if (this.props.requestFocus) {
        this.props.requestFocus();
      }
    } else if (this.props.releaseFocus) {
      this.props.releaseFocus();
    }
  }

  componentWillUnmount() {
    if (this.props.releaseFocus) {
      this.props.releaseFocus();
    }
  }

  render() {
    if (!this.props.isOpen) {
      return null;
    }

    const {
      header,
      title,
      message,
      primaryAction,
      secondaryAction,
      variant,
      customIcon,
      isOpen,
      onRequestClose,
      releaseFocus,
      requestFocus,
      ...customProps
    } = this.props;

    const { intl } = this.context;

    const defaultHeader = variant === variants.CUSTOM ? '' : intl.formatMessage({ id: `Terra.notification.dialog.${variant}` });
    const notificationDialogClassNames = cx('notification-dialog', customProps.className);

    return (
      <AbstractModal
        ariaLabel="Notification Dialog"
        aria-labelledby="notification-dialog-header"
        aria-describedby={title ? 'notification-dialog-title' : 'notification-dialog-header'}
        role="alertdialog"
        classNameModal={notificationDialogClassNames}
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        closeOnEsc={false}
        closeOnOutsideClick={false}
        zIndex="9000"
      >
        <div className={cx('notification-dialog-inner-wrapper')}>
          <div className={cx('notification-dialog-container')}>
            <div id="notification-dialog-header" className={cx('header-body')}>{header || defaultHeader}</div>
            <div className={cx('notification-dialog-body')}>
              {variant
                && <div className={cx('icon-container')}>{getIcon(intl, variant, customIcon)}</div>
              }
              <div>
                {title
                  && <div id="notification-dialog-title" className={cx('title')}>{title}</div>
                }
                {message
                  && <div className={cx('message')}>{message}</div>
                }
              </div>
            </div>
            <div className={cx('footer-body')}>{actionSection(primaryAction, secondaryAction)}</div>
          </div>
        </div>
      </AbstractModal>
    );
  }
}

NotificationDialog.propTypes = propTypes;
NotificationDialog.defaultProps = defaultProps;
NotificationDialog.contextTypes = contextTypes;

export { variants as NotificationDialogVariants };
export default NotificationDialog;
