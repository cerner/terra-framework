import React from 'react';
import AbstractModal from 'terra-abstract-modal';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './DialogModal.scss';

const cx = classNames.bind(styles);

const widthFromSize = {
  320: 320,
  480: 480,
  640: 640,
  800: 800,
  960: 960,
  1120: 1120,
  1280: 1280,
  1440: 1440,
  1600: 1600,
  1760: 1760,
  1920: 1920,
};

const propTypes = {
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
  /*
   * Callback function indicating a close condition was met.
   */
  onRequestClose: PropTypes.func.isRequired,
  /*
   * Toggle to show dialog modal or not.
   */
  isOpen: PropTypes.bool,
  /**
   * A callback function to let the containing component (e.g. modal) to regain focus.
   */
  releaseFocus: PropTypes.func,
  /**
   * A callback function to request focus from the containing component (e.g. modal).
   */
  requestFocus: PropTypes.func,
  /**
   * Width of the dialog modal. Defaults to 480px.
   */
  width: PropTypes.oneOf(Object.keys(widthFromSize)),
};

const defaultProps = {
  children: null,
  isOpen: false,
  releaseFocus: null,
  requestFocus: null,
  width: '480',
};

class DialogModal extends React.Component {
  render() {
    const { header,
      footer,
      children,
      onRequestClose,
      isOpen,
      releaseFocus,
      requestFocus,
      width,
      ...customProps
    } = this.props;

    if (!this.props.isOpen) {
      return null;
    }

    const DialogModalClassNames = cx([
      'dialog-modal',
      customProps.className,
    ]);

    return (
      <div {...customProps} className={DialogModalClassNames}>
        <AbstractModal
          ariaLabel="DialogModal"
          classNameModal={cx('dialog-modal', `width-${widthFromSize[width]}`)}
          isOpen={this.props.isOpen}
          onRequestClose={this.props.onRequestClose}
          zIndex="8000"
        >
          <div className={cx('dialog-modal-header')}>{header}</div>
          <div className={cx('dialog-modal-body')}>{children}</div>
          <div className={cx('dialog-modal-footer')}>{footer}</div>
        </AbstractModal>
      </div>);
  }
}

DialogModal.propTypes = propTypes;
DialogModal.defaultProps = defaultProps;

export default DialogModal;
