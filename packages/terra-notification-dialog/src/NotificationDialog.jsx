import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AbstractModal from 'terra-abstract-modal';
import FocusTrap from 'focus-trap-react';
import { KEY_ESCAPE } from 'keycode-js';
import Button, { ButtonVariants } from 'terra-button';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import { FormattedMessage } from 'react-intl';

import styles from './NotificationDialog.module.scss';

const cx = classNamesBind.bind(styles);

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
   * **Deprecated**, Message of the notification-dialog. Resolves to `startMessage`.
   */
  message: PropTypes.string,
  /**
   * Message to be displayed at the start of the notification dialog body.
   */
  startMessage: PropTypes.string,
  /**
   * Message to be displayed at the end of the notification dialog body.
   */
  endMessage: PropTypes.string,
  /**
   *  Non-plain text content to be inserted after `startMessage` and/or before `endMessage`
   */
  content: PropTypes.node,
  /**
   * **Deprecated**, The Action of the primary button. Resolves to `acceptAction`
   */
  primaryAction: PropTypes.shape({
    text: PropTypes.string,
    onClick: PropTypes.func,
  }),
  /**
   * The Action of the accept button.
   */
  acceptAction: PropTypes.shape({
    text: PropTypes.string,
    onClick: PropTypes.func,
  }),
  /**
   * **Deprecated**, The Action of the secondary button. Resolves to `rejectAction`.
   */
  secondaryAction: PropTypes.shape({
    text: PropTypes.string,
    onClick: PropTypes.func,
  }),
  /**
   * The Action of the reject button.
   */
  rejectAction: PropTypes.shape({
    text: PropTypes.string,
    onClick: PropTypes.func,
  }),
  /**
   * The variant of notification to be rendered.
   * Use one of `alert`, `error`, `warning`, `info`, `success`, `custom`.
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
   * Determines the order of notification action buttons.
   * Use one of `acceptFirst`, `rejectFirst`.
   */
  buttonOrder: PropTypes.oneOf([
    'acceptFirst',
    'rejectFirst',
  ]),
  /**
   * Determines whether acceptAction, rejectAction or neither is emphasizedAction
   * Use one of `none`, `accept` or `reject`.
   */
  emphasizedAction: PropTypes.oneOf([
    'none',
    'accept',
    'reject',
  ]),
};

const defaultProps = {
  title: null,
  startMessage: null,
  endMessage: null,
  content: null,
  variant: variants.CUSTOM,
  buttonOrder: 'acceptFirst',
  emphasizedAction: 'none',
};

const actionSection = (acceptAction, rejectAction, buttonOrder, emphasizedAction) => {
  let acceptButton = null;
  let rejectButton = null;
  if (!acceptAction && !rejectAction) {
    return null;
  }
  if (acceptAction) {
    acceptButton = (emphasizedAction === 'accept')
      ? <Button text={acceptAction.text} variant={ButtonVariants.EMPHASIS} onClick={acceptAction.onClick} />
      : <Button text={acceptAction.text} onClick={acceptAction.onClick} />;
  }
  if (rejectAction) {
    rejectButton = (emphasizedAction === 'reject')
      ? <Button text={rejectAction.text} variant={ButtonVariants.EMPHASIS} onClick={rejectAction.onClick} />
      : <Button text={rejectAction.text} onClick={rejectAction.onClick} />;
  }

  if (buttonOrder === 'rejectFirst') {
    return (
      <div className={cx('actions')}>
        {rejectButton}
        {acceptButton}
      </div>
    );
  }

  return (
    <div className={cx('actions')}>
      {acceptButton}
      {rejectButton}
    </div>
  );
};

const getIcon = (variant, customIcon = null) => {
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

const NotificationDialog = (props) => {
  useEffect(() => {
    function handleKeydown(e) {
      const notificationDialog = document.querySelector('[data-terra-notification-dialog]');

      if (e.keyCode === KEY_ESCAPE) {
        if (notificationDialog) {
          if (e.target === notificationDialog || notificationDialog.contains(e.target)) {
            e.stopImmediatePropagation();
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeydown);

    return (() => {
      document.removeEventListener('keydown', handleKeydown);
    });
  });

  const {
    header,
    title,
    startMessage,
    endMessage,
    content,
    acceptAction,
    rejectAction,
    variant,
    customIcon,
    isOpen,
    buttonOrder,
    emphasizedAction,
    primaryAction,
    secondaryAction,
    message,
    ...customProps
  } = props;

  if (process.env.NODE_ENV !== 'production' && acceptAction === undefined && primaryAction === undefined && rejectAction === undefined && secondaryAction === undefined) {
    // eslint-disable-next-line no-console
    console.warn('At least one of the props `acceptAction`,`primaryAction`,`rejectAction`, or `secondaryAction` must be provided to the Notification dialog');
  }

  const defaultHeader = variant === variants.CUSTOM ? '' : <FormattedMessage id={`Terra.notification.dialog.${variant}`} />;

  /* eslint-disable jsx-a11y/no-noninteractive-tabindex */
  return (
    <AbstractModal
      ariaLabel="Notification Dialog"
      aria-labelledby="notification-dialog-header"
      aria-describedby={title ? 'notification-dialog-title' : 'notification-dialog-header'}
      role="alertdialog"
      classNameModal={classNames(cx('notification-dialog'), customProps.className)}
      isOpen={isOpen}
      onRequestClose={() => {}}
      closeOnEsc={false}
      closeOnOutsideClick={false}
      zIndex="9000"
      data-terra-notification-dialog
    >
      <FocusTrap focusTrapOptions={{ returnFocusOnDeactivate: true, clickOutsideDeactivates: false, escapeDeactivates: false }}>
        <div className={cx('notification-dialog-inner-wrapper')}>
          <div className={cx('notification-dialog-container')} tabIndex="0">
            <div id="notification-dialog-header" className={cx('header-body')}>{header || defaultHeader}</div>
            <div className={cx('notification-dialog-body')}>
              {variant
                && <div className={cx('icon-container')}>{getIcon(variant, customIcon)}</div>}
              <div className={cx('text-wrapper')}>
                {title
                  && <div id="notification-dialog-title" className={cx('title')}>{title}</div>}
                {(startMessage || message)
                  && <div className={cx('message')}>{(startMessage || message)}</div>}
                {content
                  && <div>{content}</div>}
                {endMessage
                  && <div className={cx('message')}>{endMessage}</div>}
              </div>
            </div>
            <div className={cx('footer-body')}>
              {actionSection(
                acceptAction || primaryAction,
                rejectAction || secondaryAction,
                buttonOrder,
                emphasizedAction,
              )}
            </div>
          </div>
        </div>
      </FocusTrap>
    </AbstractModal>
  );
  /* eslint-enable jsx-a11y/no-noninteractive-tabindex */
};

NotificationDialog.propTypes = propTypes;
NotificationDialog.defaultProps = defaultProps;

export { variants as NotificationDialogVariants };
export default NotificationDialog;
