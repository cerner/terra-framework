import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './PopupOverlay.module.scss';

const cx = classNamesBind.bind(styles);

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
    const theme = this.context;

    return (
      <React.Fragment>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
        <div
          onClick={this.handleOnClick}
          {...customProps}
          className={classNames(cx('popup-overlay', theme.className), customProps.className)}
        >
          <div className={cx('inner')} />
          {children}
        </div>
      </React.Fragment>
    );
  }
}

PopupOverlay.propTypes = propTypes;
PopupOverlay.defaultProps = defaultProps;
PopupOverlay.contextType = ThemeContext;

export default PopupOverlay;
