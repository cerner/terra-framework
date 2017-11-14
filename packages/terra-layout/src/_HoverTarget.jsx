import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import debounce from 'lodash.debounce';
import IconChevronRight from 'terra-icon/lib/icon/IconChevronRight';
import 'terra-base/lib/baseStyles';

import styles from './HoverTarget.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The component to display in the panel content area.
   */
  children: PropTypes.node,
  /**
   * Enables the hover functionality.
   */
  hoverIsEnabled: PropTypes.bool,
  /**
   * Disables the hover bar.
   */
  isOpen: PropTypes.bool,
  /**
   * Function callback to trigger when the hover section is clicked on mobile.
   */
  onClick: PropTypes.func,
  /**
   * Function callback to trigger when the mouse leaves.
   */
  onHoverOff: PropTypes.func,
  /**
   * Function callback to trigger when the mouse enters.
   */
  onHoverOn: PropTypes.func,
  /**
   * String text to display.
   */
  text: PropTypes.string,
};

const defaultProps = {
  children: [],
  hoverIsEnabled: false,
};

class HoverTarget extends React.Component {
  constructor(props) {
    super(props);
    this.setHoverNode = this.setHoverNode.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);

    this.debouncedUpdateSize = debounce(this.updateSize, 250);

    this.listenersAdded = false;
    this.isMouseEnterActive = false;
  }

  componentDidMount() {
    window.addEventListener('resize', this.debouncedUpdateSize);

    this.updateSize();

    if (this.hoverNode) {
      this.listenersAdded = this.updateListenersOnNode(this.hoverNode);
    }
  }

  componentDidUpdate() {
    this.updateSize();

    if (this.hoverNode) {
      this.listenersAdded = this.updateListenersOnNode(this.hoverNode);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debouncedUpdateSize);

    if (this.hoverNode) {
      this.listenersAdded = this.removeListenersFromNode(this.hoverNode);
    }
  }

  setHoverNode(node) {
    this.hoverNode = node;
  }

  updateSize() {
    // Due to the nature of the rotated text and therefore inverted coordinates, we need to update
    // the width of the text element to match the available height of the container.
    if (this.textElement) {
      this.textElement.style.width = `${this.textContainerElement.offsetHeight}px`;
    }
  }

  updateListenersOnNode(node) {
    if (this.props.hoverIsEnabled) {
      return this.addListenersToNode(node);
    } else if (!this.props.hoverIsEnabled) {
      return this.removeListenersFromNode(node);
    }
    return false;
  }

  addListenersToNode(node) {
    if (!this.listenersAdded) {
      node.addEventListener('mouseenter', this.handleMouseEnter);
      node.addEventListener('mouseleave', this.handleMouseLeave);
      this.isMouseEnterActive = false;
    }
    return true;
  }

  removeListenersFromNode(node) {
    if (this.listenersAdded) {
      node.removeEventListener('mouseenter', this.handleMouseEnter);
      node.removeEventListener('mouseleave', this.handleMouseLeave);
      this.isMouseEnterActive = false;
    }
    return false;
  }

  handleMouseEnter(event) {
    if (this.props.onHoverOn && !this.isMouseEnterActive) {
      this.props.onHoverOn(event);
    }
    this.isMouseEnterActive = true;
  }

  handleMouseLeave(event) {
    if (this.props.onHoverOff) {
      this.props.onHoverOff(event);
    }
    this.isMouseEnterActive = false;
  }

  handleOnClick(event) {
    if (this.props.onClick) {
      this.props.onClick(event);
    }
  }

  render() {
    const {
      children,
      hoverIsEnabled,
      isOpen,
      onClick,
      onHoverOff,
      onHoverOn,
      text,
      ...customProps
    } = this.props;

    const hoverClasses = cx([
      'hover-target',
      { 'is-hover-disabled': !hoverIsEnabled },
      { 'is-hover-tab-hidden': isOpen },
      customProps.className,
    ]);

    return (
      <div {...customProps} className={hoverClasses} ref={this.setHoverNode}>
        <div className={cx('content-section')}>
          {children}
        </div>
        <button className={cx('hover-section')} onClick={this.handleOnClick}>
          <div className={cx('hover-section-wrapper')}>
            <div className={cx('hover-section-icon')}>
              <IconChevronRight className={cx('hover-icon')} />
            </div>
            <div ref={(element) => { this.textContainerElement = element; }} className={cx('hover-section-text')}>
              <h3 ref={(element) => { this.textElement = element; }} className={cx('hover-text')}>{text}</h3>
            </div>
          </div>
        </button>
      </div>
    );
  }
}

HoverTarget.propTypes = propTypes;
HoverTarget.defaultProps = defaultProps;

export default HoverTarget;
