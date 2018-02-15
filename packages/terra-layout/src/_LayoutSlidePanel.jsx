import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Overlay from 'terra-overlay';
import OverlayContainer from 'terra-overlay/lib/OverlayContainer';

import 'terra-base/lib/baseStyles';

import HoverTarget from './_HoverTarget';
import styles from './LayoutSlidePanel.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Enables animations for panel state transitions.
   */
  isAnimated: PropTypes.bool,
  /**
   * Enables panel visibility.
   */
  isOpen: PropTypes.bool,
  /**
   * Enables toggling for the panel.
   */
  isToggleEnabled: PropTypes.bool,
  /**
   * The element to display in the main content area.
   */
  children: PropTypes.element,
  /**
   * The style of panel presentation. One of `overlay`, `squish`.
   */
  panelBehavior: PropTypes.oneOf(['overlay', 'squish']),
  /**
   * The component to display in the panel content area.
   */
  panelContent: PropTypes.node,
  /**
   * Current breakpoint size.
   */
  size: PropTypes.string.isRequired,
  /**
   * The function called when panel state changes are desired.
   */
  onToggle: PropTypes.func,
  /**
   * String to display on menu hover target.
   */
  toggleText: PropTypes.string,
};

const defaultProps = {
  isAnimated: false,
  isOpen: false,
  isToggleEnabled: false,
  panelBehavior: 'overlay',
};

class LayoutSlidePanel extends React.Component {
  constructor(props) {
    super(props);
    this.setPanelNode = this.setPanelNode.bind(this);
    this.setContentNode = this.setContentNode.bind(this);
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
    this.preparePanelForTransition = this.preparePanelForTransition.bind(this);

    this.isHidden = !props.isOpen;
  }

  componentDidMount() {
    if (this.panelNode) {
      this.panelNode.addEventListener('transitionend', this.handleTransitionEnd);
    }
  }

  componentDidUpdate() {
    this.lastIsOpen = this.props.isOpen;
  }

  componentWillUnmount() {
    if (this.panelNode) {
      this.panelNode.removeEventListener('transitionend', this.handleTransitionEnd);
    }
  }

  setPanelNode(node) {
    this.panelNode = node;
  }

  setContentNode(node) {
    this.contentNode = node;
  }

  handleTransitionEnd() {
    if (!this.props.isOpen && this.contentNode) {
      this.contentNode.setAttribute('aria-hidden', true);
      this.isHidden = true;
    }
  }

  preparePanelForTransition() {
    // React 16.3 will be deprecating componentWillRecieveProps and componentWillUpdate, and removed in 17, so code execution prior to render becomes difficult.
    // As a result of this change, we are executing the code in the render block.
    if (this.props.isOpen && !this.lastIsOpen && this.panelNode) {
      // If the panel is opening remove the hidden attribute so the animation performs correctly.
      this.contentNode.setAttribute('aria-hidden', 'false');
      this.isHidden = false;
    }
  }

  render() {
    const {
      isAnimated,
      isOpen,
      isToggleEnabled,
      children,
      panelBehavior,
      panelContent,
      size,
      onToggle,
      toggleText,
      ...customProps
    } = this.props;

    this.preparePanelForTransition();

    const isTiny = size === 'tiny';
    const isSmall = size === 'small';
    const compactSize = isTiny || isSmall;
    const isOverlay = compactSize ? true : panelBehavior === 'overlay';
    const isOverlayOpen = isOpen && isOverlay;
    const overlayBackground = compactSize ? 'dark' : 'clear';

    const slidePanelClassNames = cx([
      'layout-slide-panel',
      { 'is-open': isOpen },
      { 'is-overlay': isOverlay },
      { 'is-squish': !isOverlay },
      { 'hover-toggle-enabled': !compactSize && isToggleEnabled },
      customProps.className,
    ]);

    const panelClasses = cx([
      'panel',
      { 'is-tiny': isTiny },
      { 'is-small': isSmall },
      { 'is-animated': isAnimated && isOverlay && !!panelContent },
    ]);

    const panel = (
      <div className={panelClasses} aria-hidden={!isOpen ? 'true' : null} ref={this.setPanelNode}>
        <HoverTarget
          isContentHidden={this.isHidden}
          contentRefCallback={this.setContentNode}
          text={toggleText}
          isOpen={isOpen || !isToggleEnabled}
          hoverIsEnabled={!compactSize && isOverlay}
          onHoverOff={() => { if (isOpen) { onToggle(); } }}
          onHoverOn={() => { if (!isOpen) { onToggle(); } }}
          onClick={onToggle}
        >
          {panelContent}
        </HoverTarget>
      </div>
    );

    return (
      <div
        {...customProps}
        className={slidePanelClassNames}
      >
        {panel}
        <OverlayContainer className={cx('content')}>
          <Overlay isRelativeToContainer onRequestClose={onToggle} isOpen={isOverlayOpen} backgroundStyle={overlayBackground} />
          {children}
        </OverlayContainer>
      </div>
    );
  }
}

LayoutSlidePanel.propTypes = propTypes;
LayoutSlidePanel.defaultProps = defaultProps;

export default LayoutSlidePanel;
