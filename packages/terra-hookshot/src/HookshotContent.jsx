import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import onClickOutside from 'react-onclickoutside';
import ResizeObserver from 'resize-observer-polyfill';
import styles from './HookshotContent.module.scss';

const cx = classNames.bind(styles);
/**
 * Key code value for the escape key.
 */
const KEYCODES = {
  ESCAPE: 27,
};

const propTypes = {
  /**
   * The children to be displayed as content within the content.
   */
  children: PropTypes.node.isRequired,
  /**
   * The function callback when a child content resize event occurs.
   */
  onContentResize: PropTypes.func,
  /**
   * The function callback when am escape keydown event occurs.
   */
  onEsc: PropTypes.func,
  /**
   * The function callback when a click outside event occurs.
   */
  onOutsideClick: PropTypes.func,
  /**
   * The function callback when a resize event occurs.
   */
  onResize: PropTypes.func,
  /**
   * The function returning the frame html reference.
   */
  refCallback: PropTypes.func,
};


// shim for SVGElement classList for IE 10 / IE 11
// More info: https://github.com/Pomax/react-onclickoutside#ie-does-not-support-classlist-for-svg-elements
if (typeof SVGElement !== 'undefined' && !('classList' in SVGElement.prototype)) {
  Object.defineProperty(SVGElement.prototype, 'classList', {
    get() {
      return {
        contains: className => this.className.baseVal.split(' ').indexOf(className) !== -1,
      };
    },
  });
}

class HookshotContent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.handleResize = this.debounce(this.handleResize.bind(this), 100);
    this.enableEscListener = this.enableEscListener.bind(this);
    this.disableEscListener = this.disableEscListener.bind(this);
    this.enableResizeListener = this.enableResizeListener.bind(this);
    this.disableResizeListener = this.disableResizeListener.bind(this);
    this.enableContentResizeListener = this.enableContentResizeListener.bind(this);
    this.disableContentResizeListener = this.disableContentResizeListener.bind(this);
    this.updateListeners = this.updateListeners.bind(this);
    this.animationFrameID = null;
  }

  componentDidMount() {
    this.updateListeners();
  }

  componentDidUpdate() {
    this.updateListeners();
  }

  componentWillUnmount() {
    this.disableEscListener();
    this.disableResizeListener();
    this.disableContentResizeListener();
  }

  handleResize(event) {
    if (this.props.onResize) {
      this.props.onResize(event);
    }
  }

  handleClickOutside(event) {
    if (this.props.onOutsideClick) {
      this.props.onOutsideClick(event);
    }
  }

  handleKeydown(event) {
    if (event.keyCode === KEYCODES.ESCAPE) {
      event.preventDefault();
      this.props.onEsc(event);
    }
  }

  updateListeners() {
    if (this.props.onEsc) {
      this.enableEscListener();
    } else {
      this.disableEscListener();
    }

    if (this.props.onResize) {
      this.enableResizeListener();
    } else {
      this.disableResizeListener();
    }

    if (this.props.onContentResize) {
      this.enableContentResizeListener();
    } else {
      this.disableContentResizeListener();
    }
  }

  enableEscListener() {
    if (!this.escListenerAdded) {
      document.addEventListener('keydown', this.handleKeydown);
      this.escListenerAdded = true;
    }
  }

  disableEscListener() {
    if (this.escListenerAdded) {
      document.removeEventListener('keydown', this.handleKeydown);
      this.escListenerAdded = false;
    }
  }

  enableResizeListener() {
    if (!this.resizeListenerAdded) {
      window.addEventListener('resize', this.handleResize);
      this.resizeListenerAdded = true;
    }
  }

  disableResizeListener() {
    if (this.resizeListenerAdded) {
      window.removeEventListener('resize', this.handleResize);
      this.resizeListenerAdded = false;
    }
  }

  enableContentResizeListener() {
    if (!this.contentResizeListenerAdded) {
      this.resizeObserver = new ResizeObserver((entries) => {
        this.animationFrameID = window.requestAnimationFrame(() => {
          this.props.onContentResize(entries[0].contentRect);
        });
      });
      this.resizeObserver.observe(this.contentNode);
      this.contentResizeListenerAdded = true;
    }
  }

  disableContentResizeListener() {
    if (this.contentResizeListenerAdded) {
      window.cancelAnimationFrame(this.animationFrameID);
      this.resizeObserver.disconnect(this.contentNode);
      this.contentNode = null;
      this.contentResizeListenerAdded = false;
    }
  }

  debounce(fn, delay) {
    let timer = null;
    return (...args) => {
      const context = this;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    };
  }

  render() {
    const {
      children,
      onContentResize,
      onEsc,
      onOutsideClick,
      onResize,
      refCallback,
      ...customProps
    } = this.props;

    // Delete the unnecessary props that come from react-onclickoutside.
    delete customProps.disableOnClickOutside;
    delete customProps.enableOnClickOutside;
    delete customProps.eventTypes;
    delete customProps.excludeScrollbar;
    delete customProps.outsideClickIgnoreClass;
    delete customProps.preventDefault;
    delete customProps.stopPropagation;
    // Delete the closePortal prop that comes from react-portal.
    delete customProps.closePortal;

    return (
      <div {...customProps} className={cx(['content', customProps.className])} ref={(element) => { this.contentNode = element; refCallback(element); }}>
        {children}
      </div>
    );
  }
}

HookshotContent.propTypes = propTypes;
const onClickOutsideContent = onClickOutside(HookshotContent);

export default onClickOutsideContent;
