import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ResizeObserver from 'resize-observer-polyfill';
import LodashDebounce from 'lodash.debounce';
import Tab from './_Tab';
import TabMenu from './_TabMenu';
import styles from './Tabs.module.scss';
import {
  navigationConfigPropType,
} from '../utils/propTypes';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Array of objects representing the tabs.
   */
  navigationConfig: navigationConfigPropType,
  /**
   * A string identifying the currently active tab.
   */
  activeTabKey: PropTypes.string,
  /**
   * A function to be executed upon selection of a tab.
   */
  onTabSelect: PropTypes.func,
  notifications: PropTypes.object,
};

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.setContainerNode = this.setContainerNode.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.setMenuRef = this.setMenuRef.bind(this);
    this.setChildRef = this.setChildRef.bind(this);
    this.getMoreWidth = this.getMoreWidth.bind(this);
    this.getChildWidth = this.getChildWidth.bind(this);
    this.updateSize = LodashDebounce(this.updateSize.bind(this), 100);
    this.buildVisibleChildren = this.buildVisibleChildren.bind(this);
    this.resetCalculations();
    this.childRefs = [];
    this.previousNotifications = null;
  }

  componentDidMount() {
    this.resizeObserver = new ResizeObserver((entries) => {
      this.contentWidth = entries[0].contentRect.width;
      this.updateSize();
    });
    this.resizeObserver.observe(this.container);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.navigationConfig.navigationItems.length !== nextProps.navigationConfig.navigationItems.length || this.props.activeTabKey !== nextProps.activeTabKey) {
      this.resetCalculations();
    }
    this.previousNotifications = this.props.notifications;
    return true;
  }

  componentDidUpdate() {
    if (this.isCalculating) {
      this.isCalculating = false;
      this.handleResize(this.contentWidth);
    }
  }

  componentWillUnmount() {
    this.updateSize.cancel();
    this.resizeObserver.disconnect(this.container);
    this.container = null;
  }

  setContainerNode(node) {
    if (node === null) { return; } // Ref callbacks happen on mount and unmount, element will be null on unmount
    this.container = node;
  }

  setChildRef(ref, index) {
    if (!ref) { return; }
    this.childRefs[index] = ref;
  }

  setMenuRef(ref) {
    if (!ref) { return; }
    this.moreRef = ref;
  }

  getMoreWidth() {
    return this.moreRef.getBoundingClientRect().width;
  }

  getChildWidth(index) {
    return this.childRefs[index].getBoundingClientRect().width;
  }

  updateSize() {
    this.resetCalculations();
    this.forceUpdate();
  }

  resetCalculations() {
    this.hiddenStartIndex = -1;
    this.menuHidden = false;
    this.isCalculating = true;
  }

  handleResize(width) {
    // Calculate hide index
    const { navigationItems } = this.props.navigationConfig;
    const childrenCount = navigationItems.length;
    const moreWidth = width - this.getMoreWidth();
    let newHideIndex = childrenCount;
    let isMenuHidden = true;

    let calcMinWidth = 0;
    for (let i = 0; i < childrenCount; i += 1) {
      calcMinWidth += this.getChildWidth(i);
      if (calcMinWidth > moreWidth && !(i === childrenCount - 1 && calcMinWidth <= width)) {
        newHideIndex = i;
        isMenuHidden = false;
        break;
      }
    }

    if (this.hiddenStartIndex !== newHideIndex) {
      this.hiddenStartIndex = newHideIndex;
      this.menuHidden = isMenuHidden;
      this.forceUpdate();
    }
  }

  shouldPulse(navigationItems, notifications) {
    let shouldPulse = false;

    if (this.previousNotifications) {
      for (let i = 0; i < navigationItems.length; i += 1) {
        const item = navigationItems[i];
        const previousCount = this.previousNotifications[item.key];
        const newCount = notifications[item.key];
        if (newCount && (!previousCount || newCount > previousCount)) {
          shouldPulse = true;
          break;
        }
      }
    }

    return shouldPulse;
  }

  buildVisibleChildren(visibleTabs, hasNotifications, onTabSelect, activeTabKey, notifications) {
    return visibleTabs.map((tab, index) => {
      const tabProps = {
        text: tab.text,
        key: tab.key,
        tabKey: tab.key,
        onTabClick: () => { if (onTabSelect) { onTabSelect(tab.key); } },
        isActive: tab.key === activeTabKey,
        notificationCount: hasNotifications ? notifications[tab.key] : 0,
        hasCount: hasNotifications,
        icon: tab.icon,
      };
      if (this.isCalculating) {
        tabProps.refCallback = ref => this.setChildRef(ref, index);
      }
      return <Tab {...tabProps} render={tab.renderFunction} />;
    });
  }

  sliceTabs(navigationItems) {
    if (this.hiddenStartIndex >= 0) {
      return {
        visibleTabs: navigationItems.slice(0, this.hiddenStartIndex),
        hiddenTabs: navigationItems.slice(this.hiddenStartIndex),
      };
    }
    return {
      visibleTabs: navigationItems,
      hiddenTabs: [],
    };
  }

  render() {
    const {
      navigationConfig,
      activeTabKey,
      onTabSelect,
      notifications,
    } = this.props;

    const { navigationItems } = navigationConfig;
    const { visibleTabs, hiddenTabs } = this.sliceTabs(navigationItems);

    const hasVisibleNotification = visibleTabs.some(tab => !!notifications[tab.key]);
    const hasHiddenNotification = hiddenTabs.some(tab => !!notifications[tab.key]);

    const hasNotifications = hasVisibleNotification || hasHiddenNotification;
    const visibleChildren = this.buildVisibleChildren(visibleTabs, hasNotifications, onTabSelect, activeTabKey, notifications);

    // const showNotificationRollup = hasNotifications && hiddenTabs.some(tab => tab.notificationCount > 0);

    return (
      <div className={cx(['tabs-wrapper'])} ref={this.setContainerNode}>
        <div
          className={cx(['tabs-container', { 'is-calculating': this.isCalculating }])}
          role="tablist"
        >
          {visibleChildren}
          <TabMenu
            isIconOnly={!this.isCalculating && this.contentWidth <= this.getMoreWidth()}
            hasCount={hasNotifications}
            hiddenTabs={hiddenTabs}
            onTabSelect={onTabSelect}
            isPulsed={hasHiddenNotification && !this.isCalculating && this.shouldPulse(hiddenTabs, notifications)}
            isHidden={this.menuHidden}
            activeTabKey={activeTabKey}
            menuRefCallback={this.setMenuRef}
            showNotificationRollup={hasHiddenNotification}
            notifications={notifications}
          />
          <div className={cx(['divider-after-last-tab'])} />
        </div>
      </div>
    );
  }
}

Tabs.propTypes = propTypes;

export default Tabs;
