import React from 'react';
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

class AbstractModal extends React.Component {
  constructor() {
    super();
    this.handleKeydown = this.handleKeydown.bind(this);
    this.showModalDomUpdates = this.showModalDomUpdates.bind(this);
    this.hideModalDomUpdates = this.hideModalDomUpdates.bind(this);
    this.modalElement = React.createRef();
    this.modalTrigger = undefined;
  }

  componentDidMount() {
    // eslint-disable-next-line no-prototype-builtins
    if (!Element.prototype.hasOwnProperty('inert')) {
      // IE10 throws an error if wicg-inert is imported too early, as wicg-inert tries to set an observer on document.body which may not exist on import
      // eslint-disable-next-line global-require
      require('wicg-inert/dist/inert');
    }

    document.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  showModalDomUpdates() {
    // Store element that was last focused prior to modal opening
    this.modalTrigger = document.activeElement;

    const mainDocumentElement = document.querySelector(this.props.rootSelector);
    if (mainDocumentElement) {
      const dataOverlayCount = +mainDocumentElement.getAttribute('data-abstract-modal-overlay-count');

      if (dataOverlayCount < 1) {
        mainDocumentElement.setAttribute('inert', 'true');
      }

      mainDocumentElement.setAttribute('data-abstract-modal-overlay-count', `${dataOverlayCount + 1}`);

      // Handle focus shift for VoiceOver on iOS
      if ('ontouchstart' in window) {
        this.modalElement.current.querySelector('[data-terra-abstract-modal-begin]').focus();
      } else {
        // Shift focus to modal dialog
        this.modalElement.current.focus();
      }
    }
  }

  hideModalDomUpdates() {
    const mainDocumentElement = document.querySelector(this.props.rootSelector);

    if (mainDocumentElement) {
      const dataOverlayCount = +mainDocumentElement.getAttribute('data-abstract-modal-overlay-count');

      if (dataOverlayCount === 1) {
        mainDocumentElement.removeAttribute('data-abstract-modal-overlay-count');
        mainDocumentElement.removeAttribute('inert');
      } else if (dataOverlayCount && dataOverlayCount > 1) {
        mainDocumentElement.setAttribute('data-abstract-modal-overlay-count', `${dataOverlayCount - 1}`);
      }
    }

    // Allows inert processing to finish or focus will not shift back
    Promise.resolve().then(() => {
      if (this.modalTrigger && this.modalTrigger.focus) {
        // Shift focus back to element that was last focused prior to opening the modal
        this.modalTrigger.focus();
      } else {
        // In some cases on IE, when the focus cannot be restored on the element (SVG element, for instance)
        // that was last focused prior to opening the modal, place the focus on the HTML body element to repro
        // the behavior noticed on other major browsers.
        document.querySelector('body').focus();
      }
    });
  }

  handleKeydown(e) {
    if (e.keyCode === KEY_ESCAPE && this.props.closeOnEsc && this.props.isOpen) {
      if (this.modalElement.current) {
        const body = document.querySelector('body');
        if (e.target === this.modalElement.current || this.modalElement.current.contains(e.target) || e.target === body) {
          this.props.onRequestClose();
        }
      }
    }
  }

  render() {
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
    } = this.props;

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
          showModalDomUpdates={this.showModalDomUpdates}
          hideModalDomUpdates={this.hideModalDomUpdates}
          onRequestClose={onRequestClose}
          zIndex={zIndex}
          aria-modal="true"
          ref={this.modalElement}
        >
          {children}
        </ModalContent>
      </Portal>
    );
  }
}

AbstractModal.propTypes = propTypes;
AbstractModal.defaultProps = defaultProps;

export default AbstractModal;
