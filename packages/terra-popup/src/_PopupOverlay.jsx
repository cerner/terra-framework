import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './PopupOverlay.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * @private
   * Callback function indicating a close condition was met.
   */
  onRequestClose: PropTypes.func,
  /**
   * The string representation of the index.
   */
  children: PropTypes.node,
};

const defaultProps = {
  children: [],
};

class PopupOverlay extends React.Component {
  constructor() {
    super();
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount() {
    // Disable scrolling on the page when Overlay is displayed
    this.overlayStyle = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    // Enable scrolling on the page since Overlay has gone away
    document.documentElement.style.overflow = this.overlayStyle;
  }


  handleOnClick(event) {
    event.stopPropagation();
    if (this.props.onRequestClose) {
      this.props.onRequestClose(event);
    }
  }

  render() {
    const { children, ...customProps } = this.props;
    // Delete the closePortal prop that comes from react-portal.
    delete customProps.closePortal;
    // Delete onRequestClose prop we use to close popup.
    delete customProps.onRequestClose;

    return (
      <React.Fragment>
        {
          // Usage of tabIndex="0" to allow users to focus on potentially scrollable content
          /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-tabindex */
        }
        <div
          onClick={this.handleOnClick}
          {...customProps}
          className={cx(['popup-overlay', customProps.className])}
          tabIndex="0"
        >
          <div className={cx('inner')} />
          {children}
        </div>
        {/* eslint-enable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-tabindex */}
      </React.Fragment>
    );
  }
}

PopupOverlay.propTypes = propTypes;
PopupOverlay.defaultProps = defaultProps;

export default PopupOverlay;
