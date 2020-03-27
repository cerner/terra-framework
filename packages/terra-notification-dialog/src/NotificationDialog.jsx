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

const shouldAddVariantClass = (variant) => Object.values(variants).indexOf(variant) >= 0;

const actionSection = (acceptAction, rejectAction, buttonOrder, emphasizedAction) => {
  let acceptButton = null;
  let rejectButton = null;

  if (!acceptAction && !rejectAction) {
    return null;
  }

  if (acceptAction) {
    const buttonVariant = emphasizedAction === 'accept' ? { variant: ButtonVariants.EMPHASIS } : {};

    acceptButton = <Button {...buttonVariant} text={acceptAction.text} onClick={acceptAction.onClick} />;
  }

  if (rejectAction) {
    const buttonVariant = emphasizedAction === 'reject' ? { variant: ButtonVariants.EMPHASIS } : {};
    rejectButton = <Button {...buttonVariant} text={rejectAction.text} onClick={rejectAction.onClick} />;
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
  let icon;

  if (variants.CUSTOM === variant) {
    icon = customIcon;
  } else if (shouldAddVariantClass(variant)) {
    icon = <span className={cx(['icon', `${variant}-icon`])} />;
  }

  let iconContent;
  if (icon) {
    iconContent = (
      <div className={cx('icon-container')}>
        {icon}
      </div>
    );
  }
  return iconContent;
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
  let headerContent = null;
  if (header || defaultHeader) {
    headerContent = <div id="notification-dialog-header">{header || defaultHeader}</div>;
  }

  let titleContent = null;
  if (title) {
    titleContent = <div id="notification-dialog-title" className={cx('title')}>{title}</div>;
  }

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
            <div className={cx(['header-container', { [`${variant}`]: shouldAddVariantClass(variant) }])}>
              <div className={cx(['header-body'])}>
                {getIcon(variant, customIcon)}
                <div>
                  {headerContent}
                  {titleContent}
                </div>
              </div>
            </div>
            <div className={cx('notification-dialog-body')}>
              {(startMessage || message)
                && <div className={cx('message')}>{(startMessage || message)}</div>}
              {content
                && <div>{content}</div>}
              {endMessage
                && <div className={cx('message')}>{endMessage}</div>}
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
