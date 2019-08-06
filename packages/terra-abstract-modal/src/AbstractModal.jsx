import React from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';
import KeyCode from 'keycode-js';
import 'mutationobserver-shim';
import './_contains-polyfill';
import './_matches-polyfill';
import 'wicg-inert';
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
    this.state = {
      modalTrigger: undefined,
    };
    this.handleKeydown = this.handleKeydown.bind(this);
    this.showModalDomUpdates = this.showModalDomUpdates.bind(this);
    this.hideModalDomUpdates = this.hideModalDomUpdates.bind(this);
    this.modalElement = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);

    if (this.props.isOpen) {
      this.showModalDomUpdates();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.isOpen) {
      if (!prevProps.isOpen) {
        this.showModalDomUpdates();
      }
    } else if (prevProps.isOpen) {
      this.hideModalDomUpdates();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
    this.hideModalDomUpdates();
  }

  showModalDomUpdates() {
    const mainDocumentElement = document.querySelector(this.props.rootSelector);
    // Store element that was last focused prior to modal opening
    this.setState({ modalTrigger: document.activeElement });

    if (mainDocumentElement) {
      const inert = +mainDocumentElement.getAttribute('data-overlay-count');

      if (!mainDocumentElement.hasAttribute('data-overlay-count')) {
        mainDocumentElement.setAttribute('data-overlay-count', '1');
        mainDocumentElement.setAttribute('inert', '');
      } else if (mainDocumentElement && mainDocumentElement.hasAttribute('data-overlay-count')) {
        mainDocumentElement.setAttribute('data-overlay-count', `${inert + 1}`);
      }

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
      const inert = +mainDocumentElement.getAttribute('data-overlay-count');

      if (inert === 1) {
        mainDocumentElement.removeAttribute('data-overlay-count');
        mainDocumentElement.removeAttribute('inert');
      } else if (inert && inert > 1) {
        mainDocumentElement.setAttribute('data-overlay-count', `${inert - 1}`);
      }
    }

    setTimeout(() => {
      if (this.state.modalTrigger) {
        // Shift focus back to element that was last focused prior to opening the modal
        this.state.modalTrigger.focus();
      }
    }, 0); // Allows inert processing to finish before shifting focus back
  }

  handleKeydown(e) {
    const body = document.querySelector('body');
    if (e.keyCode === KeyCode.KEY_ESCAPE && this.props.isOpen && this.props.closeOnEsc) {
      if (this.modalElement.current) {
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
