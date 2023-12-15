import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import AbstractModal from 'terra-abstract-modal';
import Button from 'terra-button';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import { injectIntl } from 'react-intl';
import ThemeContext from 'terra-theme-context';

import NotificationIcon from './_NotificationIcon';
import ContentLayoutAsList from './_ContentLayoutAsList';

import styles from './NotificationDialog.module.scss';

const cx = classNamesBind.bind(styles);

const variants = [
  'hazard-high',
  'hazard-medium',
  'hazard-low',
  'error',
  'custom',
];

const propTypes = {
  /**
   * The variant of notification to be rendered. This renders the dialog with the corresponding header and icon to the
   * variant concept.
   */
  variant: PropTypes.oneOf(variants).isRequired,
  /**
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue)
   * The title to describe the high-level overview of why the notification-dialog is being displayed to the user. Use a title that relates directly to the
   * message/actions provided in the dialog. Adding a title, while optional, is always best practice.
   */
  dialogTitle: PropTypes.string,
  /**
   * The text to provide more detail or defined terminology to be displayed at the start of the notification dialog body. Don’t repeat the title verbatim.
   */
  startMessage: PropTypes.string,
  /**
   * The text to provide more detail or defined terminology to be displayed at the end of the notification dialog body. Don’t repeat the title verbatim.
   */
  endMessage: PropTypes.string,
  /**
   *  The content to be inserted after `startMessage` and/or before `endMessage` to provide more details to the user in the dialog body. Don’t repeat the title verbatim.
   */
  content: PropTypes.node,
  /**
   * The button text and onclick values of the accept button.
   */
  acceptAction: PropTypes.shape({
    text: PropTypes.string,
    onClick: PropTypes.func,
  }),
  /**
   * The button text and onclick values of the reject button.
   */
  rejectAction: PropTypes.shape({
    text: PropTypes.string,
    onClick: PropTypes.func,
  }),
  /**
   * Determines the order of notification action buttons.
   */
  buttonOrder: PropTypes.oneOf([
    'acceptFirst',
    'rejectFirst',
  ]),
  /**
   * Determines whether acceptAction, rejectAction or neither is emphasizedAction
   */
  emphasizedAction: PropTypes.oneOf([
    'none',
    'accept',
    'reject',
  ]),
  /**
   * The pieces to populate a notification-dialog when `variant="custom"`.
   */
  custom: PropTypes.shape({
    /**
     * The keyword used to represent & emphasis the intention of dialog message that is being shown to the user.
     */
    signalWord: PropTypes.string,
    /**
     * The class name used to set the icon as the background image to be used as the icon in the notification-dialog.
     */
    iconClassName: PropTypes.string,
  }),
  /**
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }),
};

const defaultProps = {
  buttonOrder: 'acceptFirst',
  emphasizedAction: 'none',
  custom: {},
};

const actionSection = (acceptAction, rejectAction, buttonOrder, emphasizedAction, refCallback) => {
  if (!acceptAction && !rejectAction) {
    return null;
  }

  const actionButtons = [];
  if (acceptAction) {
    const buttonVariant = emphasizedAction === 'accept' ? { variant: 'emphasis' } : {};
    if (buttonOrder === 'acceptFirst' || !rejectAction) {
      actionButtons.push(<Button {...buttonVariant} refCallback={refCallback} tabIndex="0" data-terra-notification-dialog-button="accept" key="accept" text={acceptAction.text} onClick={acceptAction.onClick} />);
    } else {
      actionButtons.push(<Button {...buttonVariant} data-terra-notification-dialog-button="accept" key="accept" text={acceptAction.text} onClick={acceptAction.onClick} />);
    }
  }

  if (rejectAction) {
    const buttonVariant = emphasizedAction === 'reject' ? { variant: 'emphasis' } : {};
    if (acceptAction && buttonOrder === 'acceptFirst') {
      actionButtons.push(<Button {...buttonVariant} data-terra-notification-dialog-button="reject" key="reject" text={rejectAction.text} onClick={rejectAction.onClick} />);
    } else {
      actionButtons.push(<Button refCallback={refCallback} tabIndex="0" {...buttonVariant} data-terra-notification-dialog-button="reject" key="reject" text={rejectAction.text} onClick={rejectAction.onClick} />);
    }
  }

  return (
    <div className={cx('actions')}>
      {buttonOrder === 'acceptFirst' ? actionButtons : actionButtons.reverse()}
    </div>
  );
};

const NotificationDialog = (props) => {
  const theme = React.useContext(ThemeContext);
  const notificationDialogRef = useRef();

  const setNotificationDialogRef = (node) => {
    notificationDialogRef.current = node;
  };

  useEffect(() => {
    notificationDialogRef.current.focus();
  }, []);

  const {
    dialogTitle,
    startMessage,
    endMessage,
    content,
    acceptAction,
    rejectAction,
    variant,
    buttonOrder,
    emphasizedAction,
    custom,
    intl,
    ...customProps
  } = props;

  if ((typeof acceptAction !== 'object' && typeof rejectAction !== 'object') || (acceptAction === undefined && rejectAction === undefined)) {
    throw new Error('Either the `acceptAction` or `rejectAction` props must be provided for Notification dialog');
  }

  if (variant === undefined) {
    throw new Error('The variant must be provided to the Notification dialog');
  }

  const signalWord = variant === 'custom' ? custom.signalWord : intl.formatMessage({ id: `Terra.notification.dialog.${variant}` });

  /* eslint-disable jsx-a11y/no-noninteractive-tabindex */
  return (
    <AbstractModal
      ariaLabelledBy="header-container"
      ariaDescribedBy="dialogBody"
      role={variant === 'custom' ? 'dialog' : 'alertdialog'}
      classNameModal={classNames(cx('notification-dialog', theme.className), customProps.className)}
      isOpen
      closeOnOutsideClick={false}
      zIndex="9000"
      isCalledFromNotificationDialog
    >
      <div className={cx('notification-dialog-inner-wrapper')}>
        <div className={cx('notification-dialog-container')} tabIndex="-1" data-terra-notification-dialog>
          <div className={cx(['floating-header-background', variant])} />
          <div className={cx(['header'])}>
            <div className={cx(['header-content'])}>
              <NotificationIcon variant={variant} iconClassName={custom.iconClassName} />
              <div id="header-container" className={cx('header-container')}>
                <h2 id="notification-dialog-signal-word" className={cx('signal-word')}>{signalWord}</h2>
                <div id="notification-dialog-title" className={cx('title')}>{dialogTitle}</div>
              </div>
            </div>
          </div>
          <div id="dialogBody" className={cx('body')}>
            {(startMessage)
              && <div className={cx('message')}>{(startMessage)}</div>}
            {content
              && <div className={cx('message')}>{content}</div>}
            {endMessage
              && <div className={cx('message')}>{endMessage}</div>}
          </div>
          <div className={cx('footer')}>
            {actionSection(
              acceptAction,
              rejectAction,
              buttonOrder,
              emphasizedAction,
              setNotificationDialogRef,
            )}
          </div>
        </div>
      </div>
    </AbstractModal>
  );
  /* eslint-enable jsx-a11y/no-noninteractive-tabindex */
};

NotificationDialog.propTypes = propTypes;
NotificationDialog.defaultProps = defaultProps;

export { ContentLayoutAsList };
export default injectIntl(NotificationDialog);
