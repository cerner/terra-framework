import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import ResizeObserver from 'resize-observer-polyfill';
import * as KeyCode from 'keycode-js';
import TabMenu from './_TabMenu';
import styles from './Tabs.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Key of the current active tab.
   */
  activeKey: PropTypes.string.isRequired,

  /**
   * Index of the current active tab.
   */
  activeIndex: PropTypes.number.isRequired,

  /**
   * Tabs to be displayed in the collapsible tab bar.
   */
  children: PropTypes.node.isRequired,

  /**
   * Tabs style. One of: "modular-centered", "modular-left-aligned", or "structural".
   */
  variant: PropTypes.oneOf(['modular-centered', 'modular-left-aligned', 'structural']).isRequired,

  /**
   * Callback function when selection has changed.
   * Parameters: 1. Event 2. Selected pane element
   */
  onChange: PropTypes.func.isRequired,

  /**
   * Callback function when label truncation state has changed.
   * Parameters: 1. Bool indicating if any of the tab labels have been truncated.
   */
  onTruncationChange: PropTypes.func,
};

class CollapsibleTabs extends React.Component {
  constructor(props) {
    super(props);
    this.setContainer = this.setContainer.bind(this);
    this.setMenuRef = this.setMenuRef.bind(this);
    this.resetCache = this.resetCache.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleSelectionAnimation = this.handleSelectionAnimation.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    this.handleMenuOnKeyDown = this.handleMenuOnKeyDown.bind(this);
    this.resetCache();
  }

  componentDidMount() {
    this.resizeObserver = new ResizeObserver((entries) => {
      this.contentWidth = entries[0].contentRect.width;
      if (!this.isCalculating) {
        this.animationFrameID = window.requestAnimationFrame(() => {
          // Resetting the cache so that all elements will be rendered face-up for width calculations
          this.resetCache();
          this.forceUpdate();
        });
      }
    });
    this.resizeObserver.observe(this.container);
    this.handleResize(this.contentWidth);
    this.handleSelectionAnimation();
  }

  componentDidUpdate(prevProps) {
    if (this.isCalculating) {
      this.isCalculating = false;
      this.handleResize(this.contentWidth);
    } else if (React.Children.count(this.props.children) !== React.Children.count(prevProps.children)) {
      this.resetCache();
      this.forceUpdate();
    } else {
      this.handleSelectionAnimation();
    }
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationFrameID);
    this.resizeObserver.disconnect(this.container);
    this.container = null;
  }

  handleResize(width) {
    const menuMarginLeft = parseInt(window.getComputedStyle(this.menuRef, null).getPropertyValue('margin-left'), 10);
    const menuMarginRight = parseInt(window.getComputedStyle(this.menuRef, null).getPropertyValue('margin-right'), 10);
    const menuToggleWidth = this.menuRef.getBoundingClientRect().width + menuMarginLeft + menuMarginRight;
    const availableWidth = width - menuToggleWidth;

    // Calculate hide index
    const childrenCount = React.Children.count(this.props.children);
    let newHideIndex = childrenCount;
    let calcMinWidth = 0;
    let isMenuHidden = true;
    for (let i = 0; i < this.props.children.length; i += 1) {
      const tab = this.container.children[i];
      const tabMarginLeft = parseFloat(window.getComputedStyle(this.menuRef, null).getPropertyValue('margin-left'));
      const tabMarginRight = parseFloat(window.getComputedStyle(this.menuRef, null).getPropertyValue('margin-right'));
      const minWidth = parseFloat(window.getComputedStyle(tab, null).getPropertyValue('min-width'));
      calcMinWidth += (minWidth + tabMarginLeft + tabMarginRight);
      if (calcMinWidth > availableWidth && !(i === childrenCount - 1 && calcMinWidth <= width)) {
        newHideIndex = i;
        isMenuHidden = false;
        break;
      }
    }

    // Calculate if label will be truncated
    let isLabelTruncated = false;
    let calcWidth = 0;
    for (let i = 0; i < newHideIndex; i += 1) {
      const tab = this.container.children[i];
      calcWidth += tab.getBoundingClientRect().width;
      if ((isMenuHidden && calcWidth > width) || (!isMenuHidden && calcWidth > availableWidth)) {
        isLabelTruncated = true;
        break;
      }
    }

    this.props.onTruncationChange(isLabelTruncated);

    if (this.menuHidden !== isMenuHidden || this.hiddenStartIndex !== newHideIndex) {
      this.menuHidden = isMenuHidden;
      this.hiddenStartIndex = newHideIndex;
      this.forceUpdate();
    }
  }

  handleSelectionAnimation() {
    if (this.selectionBar && window.getComputedStyle(this.selectionBar, null).getPropertyValue('transition-property').includes('transform')) {
      const activeIndex = this.props.activeIndex > this.hiddenStartIndex ? this.hiddenStartIndex : this.props.activeIndex;
      const selectedTab = this.container.children[activeIndex];

      if (selectedTab) {
        const isRTL = document.getElementsByTagName('html')[0].getAttribute('dir') === 'rtl';
        const tabRect = selectedTab.getBoundingClientRect();
        const barWidth = tabRect.width;
        let barLeft = tabRect.left - this.container.getBoundingClientRect().left;
        if (isRTL) {
          barLeft = tabRect.right - this.container.getBoundingClientRect().right;
        }

        this.selectionBar.style.width = `${barWidth}px`;
        this.selectionBar.style.transform = `translate3d(${barLeft}px,0,0)`;
      }
    }
  }

  handleOnKeyDown(event) {
    // If there are less than 2 children we don't need to worry about keyboard navigation
    if (React.Children.count(this.props.children) < 2) {
      return;
    }

    // We don't want menu keydown events to propagate and conflict when the tabs keydown events
    // Instead of stopping menu key event propagation, we whitelist event.targets so we do tab focus mgmt only on tab based event targets
    const tabList = event.target.getAttribute('role') === 'tab';
    const isRTL = document.getElementsByTagName('html')[0].getAttribute('dir') === 'rtl';
    const nextKey = !isRTL ? KeyCode.KEY_RIGHT : KeyCode.KEY_LEFT;
    const previousKey = !isRTL ? KeyCode.KEY_LEFT : KeyCode.KEY_RIGHT;
    let tabPanes = this.container.querySelectorAll('[role="tab"]');
    tabPanes = (Array.from(tabPanes).filter((pane) => pane.hasAttribute('data-terra-tabs-show-focus-styles') && pane.getAttribute('data-terra-tabs-show-focus-styles') === 'true'));
    const index = tabPanes.indexOf(event.target);
    if (tabList) {
      if ((event.nativeEvent.keyCode === KeyCode.KEY_RETURN || event.nativeEvent.keyCode === KeyCode.KEY_SPACE) && !event.target.getAttribute('data-terra-tabs-menu')) {
        event.preventDefault();
        this.props.onChange(event, this.props.children[event.target.getAttribute('index')]);
      }
    }
    if (event.nativeEvent.keyCode === nextKey && tabPanes[index + 1]) {
      tabPanes[index + 1].focus();
    } else if (event.nativeEvent.keyCode === previousKey && tabPanes[index - 1]) {
      tabPanes[index - 1].focus();
    }
  }

  /* eslint class-methods-use-this: ["error", { "exceptMethods": ["handleMenuOnKeyDown"] }] */
  handleMenuOnKeyDown(event) {
    // Prevent menu key events from propagating up to CollabsibleTabs handleOnKeyDown listener
    // This prevents left / right arrow key usage in menu from shifting to different tabs
    event.stopPropagation();
  }

  setContainer(node) {
    if (node === null) { return; } // Ref callbacks happen on mount and unmount, element will be null on unmount
    this.container = node;
  }

  setMenuRef(node) {
    if (node === null) { return; }
    this.menuRef = node;
  }

  resetCache() {
    this.animationFrameID = null;
    this.hiddenStartIndex = -1;
    this.isCalculating = true;
    this.menuHidden = false;
  }

  render() {
    const visibleChildren = [];
    const hiddenChildren = [];

    React.Children.forEach(this.props.children, (child, index) => {
      if (index < this.hiddenStartIndex || this.hiddenStartIndex < 0) {
        visibleChildren.push(child);
      } else {
        hiddenChildren.push(child);
      }
    });

    const theme = this.context;
    const selectedTab = this.props.children[this.props.activeIndex];

    const menu = this.menuHidden ? null : (
      <TabMenu
        onKeyDown={this.handleMenuOnKeyDown}
        refCallback={this.setMenuRef}
        activeKey={this.props.activeKey}
        selectedTab={selectedTab}
      >
        {hiddenChildren}
      </TabMenu>
    );

    const selectionBar = this.props.variant === 'modular-centered' || this.props.variant === 'modular-left-aligned' ? (
      <div className={cx('selection-bar')} ref={(node) => { if (node) { this.selectionBar = node; } }} />
    ) : null;

    return (
      <div>
        <div
          tabIndex="-1"
          className={cx('collapsible-tabs-container', { 'is-calculating': this.isCalculating }, theme.className)}
          ref={this.setContainer}
          onKeyDown={this.handleOnKeyDown}
          role="tablist"
        >
          {visibleChildren}
          {menu}
        </div>
        {selectionBar}
      </div>
    );
  }
}

CollapsibleTabs.propTypes = propTypes;
CollapsibleTabs.contextType = ThemeContext;

export default CollapsibleTabs;
