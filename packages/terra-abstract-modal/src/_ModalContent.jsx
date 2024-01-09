import React, { forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
// eslint-disable-next-line import/no-extraneous-dependencies
import FocusTrap from 'focus-trap-react';
import ThemeContext from 'terra-theme-context';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import ModalOverlay from './_ModalOverlay';
import { hideModalDomUpdates, showModalDomUpdates } from './inertHelpers';
import styles from './ModalContent.module.scss';

const cx = classNamesBind.bind(styles);

const zIndexes = ['6000', '7000', '8000', '9000'];

const propTypes = {
  /**
   * String that labels the modal for screen readers.
   */
  ariaLabel: PropTypes.string,
  /**
   * String that labels the modal for screen readers.
   */
  ariaLabelledBy: PropTypes.string,
  /**
   * String that labels the modal for screen readers.
   */
  ariaDescribedBy: PropTypes.string,
  /**
   * Content inside the modal dialog.
   */
  children: PropTypes.node.isRequired,
  /**
   * CSS classnames that are appended to the modal.
   */
  classNameModal: PropTypes.string,
  /**
   * CSS classnames that are appended to the overlay.
   */
  classNameOverlay: PropTypes.string,
  /**
   * If set to true, the modal will close when a mouseclick is triggered outside the modal.
   */
  closeOnOutsideClick: PropTypes.bool,
  /**
   * Callback function indicating a close condition was met, should be combined with isOpen for state management.
   */
  onRequestClose: PropTypes.func.isRequired,
  /**
   * If set to true, the modal will be fullscreen on all breakpoint sizes.
   */
  isFullscreen: PropTypes.bool,
  /**
   * If set to true, the modal dialog with have overflow-y set to scroll.
   */
  isScrollable: PropTypes.bool,
  /**
   * Role attribute on the modal dialog.
   */
  role: PropTypes.string,
  /**
   * Allows assigning of root element custom data attribute for easy selecting of document base component.
   */
  rootSelector: PropTypes.string,
  /**
   * Z-Index layer to apply to the ModalContent and ModalOverlay.
   */
  zIndex: PropTypes.oneOf(zIndexes),
  /**
   * @private
   * Callback function to set the reference of the element that will receive focus when the Slide content is visible.
   */
  setModalFocusElementRef: PropTypes.func,
  /**
   * @private
   * If set to true, the AbstractModal is rendered inside a NotificationDialog.
   */
  isCalledFromNotificationDialog: PropTypes.bool,
};

const defaultProps = {
  classNameModal: null,
  classNameOverlay: null,
  closeOnOutsideClick: true,
  isFullscreen: false,
  isScrollable: false,
  role: 'dialog',
  rootSelector: '#root',
  zIndex: '6000',
  isCalledFromNotificationDialog: false,
};

const ModalContent = forwardRef((props, ref) => {
  const {
    ariaLabel,
    ariaLabelledBy,
    ariaDescribedBy,
    children,
    classNameModal,
    classNameOverlay,
    closeOnOutsideClick,
    onRequestClose,
    role,
    isFullscreen,
    isScrollable,
    rootSelector,
    zIndex,
    setModalFocusElementRef,
    isCalledFromNotificationDialog,
    ...customProps
  } = props;

  useEffect(() => {
    // Store element that was last focused prior to modal opening
    const modalTrigger = document.activeElement;
    showModalDomUpdates(ref.current, rootSelector);

    return () => {
      hideModalDomUpdates(modalTrigger, rootSelector);
    };
  }, [ref, rootSelector]);

  let zIndexLayer = '6000';
  if (zIndexes.indexOf(zIndex) >= 0) {
    zIndexLayer = zIndex;
  }
  const theme = React.useContext(ThemeContext);
  const modalClassName = classNames(cx(
    'abstract-modal',
    { 'is-fullscreen': isFullscreen },
    `layer-${zIndexLayer}`,
    theme.className,
  ),
  classNameModal);
  const modalContainerClassName = classNames(cx('abstract-modal-container'));

  // Delete the closePortal prop that comes from react-portal.
  delete customProps.closePortal;
  delete customProps.fallbackFocus;

  const platformIsiOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

  /*
    When an aria-label is set and tabIndex is set to 0, VoiceOver will read
    the aria-label value when the modal is opened
  */
  const modalContent = (
    <div
      {...customProps}
      tabIndex={platformIsiOS || isCalledFromNotificationDialog ? '-1' : '0'}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      className={modalClassName}
      role={role}
      ref={ref}
    >
      <div className={modalContainerClassName} ref={setModalFocusElementRef} data-terra-abstract-modal-begin tabIndex="-1">
        {(!isCalledFromNotificationDialog) && (
        <FormattedMessage id="Terra.AbstractModal.BeginModalDialog">
          {text => {
            // In the latest version of react-intl this param is an array, when previous versions it was a string.
            let useText = text;
            if (Array.isArray(text)) {
              useText = text.join('');
            }
            return (
              <VisuallyHiddenText text={useText} />
            );
          } }
        </FormattedMessage>
        )}
        {children}
        {(!isCalledFromNotificationDialog) && (
        <FormattedMessage id="Terra.AbstractModal.EndModalDialog">
          {text => {
            // In the latest version of react-intl this param is an array, when previous versions it was a string.
            let useText = text;
            if (Array.isArray(text)) {
              useText = text.join('');
            }
            return (
              <VisuallyHiddenText text={useText} />
            );
          } }
        </FormattedMessage>
        )}
      </div>
    </div>
  );

  if (isCalledFromNotificationDialog) {
    return (
      <>
        <ModalOverlay
          onClick={closeOnOutsideClick ? onRequestClose : null}
          className={classNameOverlay}
          zIndex={zIndexLayer}
        />
        {modalContent}
      </>
    );
  }

  return (
    <>
      <ModalOverlay
        onClick={closeOnOutsideClick ? onRequestClose : null}
        className={classNameOverlay}
        zIndex={zIndexLayer}
      />
      <FocusTrap
        focusTrapOptions={{
          escapeDeactivates: true,
          clickOutsideDeactivates: true,
        }}
      >
        <div>
          {modalContent}
        </div>
      </FocusTrap>
    </>
  );
});

ModalContent.propTypes = propTypes;
ModalContent.defaultProps = defaultProps;

export default ModalContent;
