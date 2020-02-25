import React, { createRef, useLayoutEffect, useEffect } from 'react';
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
  ariaLabel: PropTypes.string.isRequired,
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
};

const AbstractModal = (props) => {
  const {
    ariaLabel,
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
    ...customProps
  } = props;

  const modalElementRef = createRef();

  useLayoutEffect(() => {
    // eslint-disable-next-line no-prototype-builtins
    if (!Element.prototype.hasOwnProperty('inert')) {
      // IE10 throws an error if wicg-inert is imported too early, as wicg-inert tries to set an observer on document.body which may not exist on import
      // eslint-disable-next-line global-require
      require('wicg-inert/dist/inert');
    }
  }, []);

  useEffect(() => {
    function handleKeydown(e) {
      if (e.keyCode === KEY_ESCAPE && closeOnEsc && isOpen) {
        if (modalElementRef.current) {
          const body = document.querySelector('body');
          if (e.target === modalElementRef.current || modalElementRef.current.contains(e.target) || e.target === body) {
            onRequestClose();
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeydown);

    return (() => {
      document.removeEventListener('keydown', handleKeydown);
    });
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
        classNameModal={classNameModal}
        classNameOverlay={classNameOverlay}
        role={role}
        isFullscreen={isFullscreen}
        onRequestClose={onRequestClose}
        rootSelector={rootSelector}
        zIndex={zIndex}
        aria-modal="true"
        ref={modalElementRef}
      >
        {children}
      </ModalContent>
    </Portal>
  );
};

AbstractModal.propTypes = propTypes;
AbstractModal.defaultProps = defaultProps;

export default AbstractModal;
