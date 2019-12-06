import React from 'react';
import AbstractModal from 'terra-abstract-modal';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DialogModal.module.scss';

const cx = classNames.bind(styles);

const widthFromSize = {
  320: 320,
  640: 640,
  960: 960,
  1120: 1120,
  1280: 1280,
  1600: 1600,
};

const propTypes = {
  /**
  * Aria Label of the dialog modal.
  */
  ariaLabel: PropTypes.string.isRequired,
  /**
  * Header of the dialog modal.
  */
  header: PropTypes.element.isRequired,
  /**
  * Footer of the dialog modal.
  */
  footer: PropTypes.element.isRequired,
  /**
  * Contents of the dialog modal.
  */
  children: PropTypes.node,
  /**
   * Callback function indicating a close condition was met.
   */
  onRequestClose: PropTypes.func.isRequired,
  /**
   * Toggle to show dialog modal or not.
   */
  isOpen: PropTypes.bool,
  /**
   * Width of the dialog modal. Allows one of `320`, `640`, `960`, `1120`, `1280`, or `1600`.
   *
   * _(Uses same sizes as terra-modal-manager: tiny:320, small:640, medium:960, default:1120, large:1280, huge:1600)_
   */
  width: PropTypes.oneOf(Object.keys(widthFromSize)),
  /**
   * If set to true, the modal will close when a mouse click is triggered outside the modal.
   */
  closeOnOutsideClick: PropTypes.bool,
  /**
   * Used to select the root mount DOM node. This is used to help prevent focus from shifting outside of the DialogModal when it is opened.
   */
  rootSelector: PropTypes.string,
};

const defaultProps = {
  children: null,
  isOpen: false,
  width: '1120',
  closeOnOutsideClick: false,
  rootSelector: '#root',
};

const DialogModal = (props) => {
  const {
    header,
    footer,
    children,
    onRequestClose,
    isOpen,
    ariaLabel,
    width,
    closeOnOutsideClick,
    rootSelector,
    ...customProps
  } = props;

  if (!isOpen) {
    return null;
  }

  const classArray = ['dialog-modal-wrapper'];

  if (width in widthFromSize) {
    classArray.push(`width-${widthFromSize[width]}`);
  } else {
    classArray.push('width-1120');
  }

  return (
    <AbstractModal ariaLabel={ariaLabel} role="dialog" classNameModal={cx(classArray)} isOpen={isOpen} onRequestClose={onRequestClose} zIndex="7000" closeOnOutsideClick={closeOnOutsideClick} rootSelector={rootSelector}>
      <div {...customProps} className={cx('dialog-modal-inner-wrapper', customProps.className)}>
        <div className={cx('dialog-modal-container')}>
          <div>{header}</div>
          {/* eslint-disable jsx-a11y/no-noninteractive-tabindex */}
          <div className={cx('dialog-modal-body')} tabIndex="0">{children}</div>
          <div>{footer}</div>
        </div>
      </div>
    </AbstractModal>
  );
};

DialogModal.propTypes = propTypes;
DialogModal.defaultProps = defaultProps;

export default DialogModal;
