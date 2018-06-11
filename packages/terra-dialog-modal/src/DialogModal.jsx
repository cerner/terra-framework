import React from 'react';
import AbstractModal from 'terra-abstract-modal';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './DialogModal.scss';

const cx = classNames.bind(styles);

const widthFromSize = {
  320: 320,
  640: 640,
  960: 960,
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
  /*
   * Callback function indicating a close condition was met.
   */
  onRequestClose: PropTypes.func.isRequired,
  /*
   * Toggle to show dialog modal or not.
   */
  isOpen: PropTypes.bool,
  /*
   * Toggle to focus on dialog modal or not.
   */
  isFocused: PropTypes.bool,
  /**
   * A callback function to let the containing component (e.g. modal) to regain focus.
   */
  releaseFocus: PropTypes.func,
  /**
   * A callback function to request focus from the containing component (e.g. modal).
   */
  requestFocus: PropTypes.func,
  /**
   * Width of the dialog modal. Defaults to 640px. Allows 320, 640, 960, 1280 and 1600.
   */
  width: PropTypes.oneOf(Object.keys(widthFromSize)),
};

const defaultProps = {
  children: null,
  isOpen: false,
  isFocused: false,
  releaseFocus: null,
  requestFocus: null,
  width: '640',
};

class DialogModal extends React.Component {
  componentDidMount() {
    if (this.props.isFocused && this.props.isOpen && this.props.requestFocus) {
      this.props.requestFocus();
    }
  }

  componentDidUpdate() {
    if (this.props.isOpen) {
      if (this.props.requestFocus) {
        this.props.requestFocus();
      }
    } else if (this.props.releaseFocus) {
      this.props.releaseFocus();
    }
  }

  componentWillUnmount() {
    if (this.props.releaseFocus) {
      this.props.releaseFocus();
    }
  }

  render() {
    const { header,
      footer,
      children,
      onRequestClose,
      isOpen,
      releaseFocus,
      requestFocus,
      ariaLabel,
      isFocused,
      width,
      ...customProps
    } = this.props;

    if (!this.props.isOpen) {
      return null;
    }

    return (
      <AbstractModal
        ariaLabel={this.props.ariaLabel}
        classNameModal={cx('dialog-modal-wrapper', `width-${widthFromSize[width]}`)}
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
        zIndex="8000"
      >
        <div {...customProps} className={cx('dialog-modal-inner-wrapper', customProps.className)}>
          <div className={cx('dialog-modal-container')}>
            <div className={cx('dialog-modal-header')}>{header}</div>
            <div className={cx('dialog-modal-main')}>{children}</div>
            <div className={cx('dialog-modal-footer')}>{footer}</div>
          </div>
        </div>
      </AbstractModal>
    );
  }
}

DialogModal.propTypes = propTypes;
DialogModal.defaultProps = defaultProps;

export default DialogModal;
