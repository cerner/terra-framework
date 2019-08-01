import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames/bind';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import ModalOverlay from './_ModalOverlay';
import styles from './AbstractModal.module.scss';

const cx = classNames.bind(styles);

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
   * Z-Index layer to apply to the ModalContent and ModalOverlay.
   */
  zIndex: PropTypes.oneOf(zIndexes),
};

const defaultProps = {
  classNameModal: null,
  classNameOverlay: null,
  closeOnOutsideClick: true,
  isFullscreen: false,
  isScrollable: false,
  role: 'dialog',
  zIndex: '6000',
};

const ModalContent = React.forwardRef((props, ref) => {
  const {
    ariaLabel,
    children,
    classNameModal,
    classNameOverlay,
    closeOnOutsideClick,
    onRequestClose,
    role,
    isFullscreen,
    isScrollable,
    zIndex,
    ...customProps
  } = props;
  let zIndexLayer = '6000';

  if (zIndexes.indexOf(zIndex) >= 0) {
    zIndexLayer = zIndex;
  }

  const modalClassName = cx(['abstract-modal', {
    'is-fullscreen': isFullscreen,
  }, `layer-${zIndexLayer}`, classNameModal]); // Delete the closePortal prop that comes from react-portal.

  delete customProps.closePortal;
  delete customProps.fallbackFocus;

  const platformIsiOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
  return (
    <React.Fragment>
      <ModalOverlay
        onClick={closeOnOutsideClick ? onRequestClose : null}
        className={classNameOverlay}
        zIndex={zIndex}
      />
      {
        /*
          When an aria-label is set and tabIndex is set to 0, VoiceOver will read
          the aria-label value when the modal is opened
        */
      }
      <div
        {...customProps}
        tabIndex={platformIsiOS ? '-1' : '0'}
        aria-label={ariaLabel}
        className={modalClassName}
        role={role}
        ref={ref}
      >
        <FormattedMessage id="Terra.AbstractModal.BeginModalDialog">
          {text => (
            <VisuallyHiddenText data-terra-abstract-modal-begin tabIndex="-1" text={text} />
          )}
        </FormattedMessage>
        {children}
        <FormattedMessage id="Terra.AbstractModal.EndModalDialog">
          {text => (
            <VisuallyHiddenText text={text} />
          )}
        </FormattedMessage>
      </div>
    </React.Fragment>
  );
});

ModalContent.propTypes = propTypes;
ModalContent.defaultProps = defaultProps;

export default ModalContent;
