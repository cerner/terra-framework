import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Overlay from 'terra-overlay';
import 'terra-base/lib/baseStyles';

import HoverTarget from './_HoverTarget';
import styles from './LayoutSlidePanel.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Whether or not the panel transitions should be animated.
   */
  isAnimated: PropTypes.bool,
  /**
   * Whether or not the panel should be displayed.
   */
  isOpen: PropTypes.bool,
  /**
   * Whether or not panel toggling is enabled.
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

const LayoutSlidePanel = ({
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
  }) => {
  const isTiny = size === 'tiny';
  const isSmall = size === 'small';
  const compactSize = isTiny || isSmall;
  const isOverlay = compactSize ? true : panelBehavior === 'overlay';
  const isOverlayOpen = isOpen && isOverlay && isToggleEnabled;
  const overlayBackground = compactSize ? 'dark' : 'clear';

  const slidePanelClassNames = cx([
    'layout-slide-panel',
    { 'is-open': isOpen && isToggleEnabled },
    { 'is-overlay': isOverlay },
    { 'is-squish': !isOverlay },
    { 'hover-toggle-enabled': !compactSize && isToggleEnabled },
    customProps.className,
  ]);

  const panelClasses = cx([
    'panel',
    { 'is-tiny': isTiny },
    { 'is-small': isSmall },
    { 'is-animated': isAnimated },
  ]);

  let panel;
  if (isToggleEnabled) {
    panel = (
      <div className={panelClasses} aria-hidden={!isOpen ? 'true' : null}>
        <HoverTarget
          text={toggleText}
          isOpen={isOpen}
          hoverIsEnabled={!compactSize && isOverlay}
          onHoverOff={() => { if (isOpen) { onToggle(); } }}
          onHoverOn={() => { if (!isOpen) { onToggle(); } }}
          onClick={onToggle}
        >
          {panelContent}
        </HoverTarget>
      </div>
    );
  }

  return (
    <div
      {...customProps}
      className={slidePanelClassNames}
    >
      {panel}
      <div className={cx('content')}>
        <Overlay isRelativeToContainer onRequestClose={onToggle} isOpen={isOverlayOpen} backgroundStyle={overlayBackground} />
        {children}
      </div>
    </div>
  );
};

LayoutSlidePanel.propTypes = propTypes;
LayoutSlidePanel.defaultProps = defaultProps;

export default LayoutSlidePanel;
