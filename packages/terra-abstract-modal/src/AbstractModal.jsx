// React-focus-on uses native promises which isn't available in IE11
import 'promise-polyfill/dist/polyfill.min';
import React, {
  useLayoutEffect, useEffect, useRef, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';
import { KEY_ESCAPE } from 'keycode-js';
import 'mutationobserver-shim';
import './_contains-polyfill';
import './_matches-polyfill';
import ModalContent from './_ModalContent';

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
   * If set to true, the modal will close when the esc key is pressed.
   */
  closeOnEsc: PropTypes.bool,
  /**
   * If set to true, the modal will close when a mouse click is triggered outside the modal.
   */
  closeOnOutsideClick: PropTypes.bool,
  /**
   * If set to true, the modal will be fullscreen on all breakpoint sizes.
   */
  isFullscreen: PropTypes.bool,
  /**
   * If set to true, the modal will rendered as opened.
   */
  isOpen: PropTypes.bool.isRequired,
  /**
   * Callback function indicating a close condition was met, should be combined with isOpen for state management.
   */
  onRequestClose: PropTypes.func.isRequired,
  /**
   * Role attribute on the modal dialog.
   */
  role: PropTypes.string,
  /**
   * Allows assigning of root element custom data attribute for easy selecting of document base component.
   */
  rootSelector: PropTypes.string,
  /**
   * Z-Index layer to apply to the ModalContent and ModalOverlay. Valid values are the standard modal layer: '6000', and the max layer: '8000'.
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
  /**
   * If set to true, then the focus lock will get enabled.
   */
  shouldTrapFocus: PropTypes.bool,
};

const defaultProps = {
  classNameModal: null,
  classNameOverlay: null,
  closeOnEsc: true,
  closeOnOutsideClick: true,
  isFullscreen: false,
  role: 'dialog',
  rootSelector: '#root',
  zIndex: '6000',
  isCalledFromNotificationDialog: false,
  shouldTrapFocus: false,
};

const AbstractModal = (props) => {
  const {
    ariaLabel,
    ariaLabelledBy,
    ariaDescribedBy,
    children,
    classNameModal,
    classNameOverlay,
    closeOnEsc,
    closeOnOutsideClick,
    isFullscreen,
    isOpen,
    role,
    rootSelector,
    onRequestClose,
    zIndex,
    isCalledFromNotificationDialog,
    shouldTrapFocus,
    ...customProps
  } = props;

  const modalElementRef = useRef();

  useLayoutEffect(() => {
    // eslint-disable-next-line no-prototype-builtins
    if (!Element.prototype.hasOwnProperty('inert')) {
      // IE10 throws an error if wicg-inert is imported too early, as wicg-inert tries to set an observer on document.body which may not exist on import
      // eslint-disable-next-line global-require
      require('wicg-inert/dist/inert');
    }
  }, []);

  useEffect(() => {
    function handleDocumentKeydown(e) {
      if (e.keyCode === KEY_ESCAPE && closeOnEsc && isOpen) {
        const body = document.querySelector('body');
        if (e.target === body) {
          onRequestClose();
        }
      }
    }
    document.addEventListener('keydown', handleDocumentKeydown);
    return (() => {
      document.removeEventListener('keydown', handleDocumentKeydown);
    });
  }, [closeOnEsc, isOpen, onRequestClose]);

  const handleKeydown = useCallback(e => {
    if (e.keyCode === KEY_ESCAPE && closeOnEsc && isOpen) {
      const currentModalNode = modalElementRef.current;
      if (currentModalNode && (e.target === currentModalNode || currentModalNode.contains(e.target))) {
        if (e.target === modalElementRef.current || modalElementRef.current.contains(e.target)) {
          onRequestClose();
        }
      }
    }
  }, [closeOnEsc, isOpen, onRequestClose, modalElementRef]);

  if (!isOpen) {
    return null;
  }

  return (
    <Portal
      isOpened={isOpen}
    >
      <ModalContent
        {...customProps}
        closeOnOutsideClick={closeOnOutsideClick}
        ariaLabel={ariaLabel}
        ariaLabelledBy={ariaLabelledBy}
        ariaDescribedBy={ariaDescribedBy}
        classNameModal={classNameModal}
        classNameOverlay={classNameOverlay}
        role={role}
        isFullscreen={isFullscreen}
        onRequestClose={onRequestClose}
        rootSelector={rootSelector}
        zIndex={zIndex}
        aria-modal="true"
        ref={modalElementRef}
        onKeyDown={handleKeydown}
        isCalledFromNotificationDialog={isCalledFromNotificationDialog}
        shouldTrapFocus={shouldTrapFocus}
      >
        {children}
      </ModalContent>
    </Portal>
  );
};

AbstractModal.propTypes = propTypes;
AbstractModal.defaultProps = defaultProps;

export default AbstractModal;
