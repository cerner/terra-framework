import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ResizeObserver from 'resize-observer-polyfill';
import LodashDebounce from 'lodash.debounce';
import { injectIntl, intlShape } from 'react-intl';
import Popup from 'terra-popup';

import Tab from './_Tab';
import TabRollup from './_TabRollup';
import PopupMenu from '../common/_PopupMenu';

import {
  navigationItemsPropType,
} from '../utils/propTypes';

import styles from './Tabs.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * An array of configuration objects with information specifying the creation of navigation items.
   */
  navigationItems: navigationItemsPropType,
  /**
   * A function to be executed for the render of each navigation item.
   */
  navigationRenderFunction: PropTypes.func,
  /**
   * A string identifying the currently active tab.
   */
  activeTabKey: PropTypes.string,
  /**
   * A function to be executed upon selection of a tab.
   */
  onTabSelect: PropTypes.func,
  /**
   * Key/Value pairs associating a string key entry to a numerical notification count.
   */
  notifications: PropTypes.object,
  /**
   * @private
   * Object containing intl APIs.
   */
  intl: intlShape.isRequired,
};

const defaultProps = {
  navigationItems: [],
  notifications: {},
};

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.getRollupTabWidth = this.getRollupTabWidth.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.renderRollup = this.renderRollup.bind(this);
    this.renderPopup = this.renderPopup.bind(this);
    this.buildVisibleChildren = this.buildVisibleChildren.bind(this);
    this.updateSize = LodashDebounce(this.updateSize.bind(this), 100);
    this.initializeResize = this.initializeResize.bind(this);
    this.removeResize = this.removeResize.bind(this);

    this.containerRef = React.createRef();
    this.rollupTabRef = React.createRef();
    this.rollupInnerRef = React.createRef();
    this.childRefs = [];
    this.previousNotifications = null;
    this.resizeListenerAdded = false;

    this.resetCalculations();

    this.state = {
      popupIsOpen: false,
    };
  }

  componentDidMount() {
    if (this.props.navigationItems && this.props.navigationItems.length) {
      this.initializeResize();
    } else {
      this.removeResize();
    }
  }

  shouldComponentUpdate(nextProps) {
    const { navigationItems, activeTabKey, notifications } = this.props;

    if (navigationItems.length !== nextProps.navigationItems.length || activeTabKey !== nextProps.activeTabKey) {
      this.resetCalculations();
    }
    this.previousNotifications = notifications;

    return true;
  }

  componentDidUpdate(prevProps) {
    const { activeTabKey, navigationItems } = this.props;
    const { popupIsOpen } = this.state;

    if (navigationItems && navigationItems.length) {
      this.initializeResize();
      if (this.isCalculating) {
        this.isCalculating = false;
        this.handleResize(this.contentWidth);
      }
    } else {
      this.removeResize();
    }

    if (activeTabKey !== prevProps.activeTabKey && popupIsOpen) {
      // If the active tab has changed between updates due to updates outside of Tabs, the popup is closed.
      // eslint-disable-next-line react/no-did-update-set-state
      this.closePopup();
    }
  }

  componentWillUnmount() {
    this.updateSize.cancel();
    this.removeResize();
  }

  getRollupTabWidth() {
    return this.rollupTabRef.current.getBoundingClientRect().width;
  }

  closePopup(callback) {
    this.setState({
      popupIsOpen: false,
    }, callback);
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

  initializeResize() {
    if (!this.resizeListenerAdded) {
      this.resizeObserver = new ResizeObserver((entries) => {
        this.contentWidth = entries[0].contentRect.width;
        this.updateSize();
      });
      this.resizeObserver.observe(this.containerRef.current);
      this.resizeListenerAdded = true;
    }
  }

  removeResize() {
    if (this.resizeListenerAdded) {
      this.resizeObserver.disconnect(this.containerRef.current);
      this.resizeListenerAdded = false;
    }
  }

  handleResize(width) {
    // Calculate hide index
    const childrenCount = this.props.navigationItems.length;
    const moreWidth = width - this.getRollupTabWidth();
    let newHideIndex = childrenCount;
    let isMenuHidden = true;

    let calcMinWidth = 0;
    for (let i = 0; i < childrenCount; i += 1) {
      calcMinWidth += this.childRefs[i].current.getBoundingClientRect().width;
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
        onTabSelect: onTabSelect ? onTabSelect.bind(null, tab.key, tab.metaData) : null,
        isActive: tab.key === activeTabKey,
        notificationCount: hasNotifications ? notifications[tab.key] : 0,
        hasCount: hasNotifications,
      };
      if (this.isCalculating) {
        const tabRef = React.createRef();
        this.childRefs[index] = tabRef;
        tabProps.tabRef = tabRef;
      }
      return <Tab {...tabProps} render={this.props.navigationRenderFunction} />;
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

  renderRollup(hiddenTabs, hasNotifications, hasHiddenNotification) {
    const { activeTabKey, notifications, intl } = this.props;

    const tabRollupIsSelected = hiddenTabs.some(tab => tab.key === activeTabKey);

    return (
      <TabRollup
        hasCount={hasNotifications}
        isPulsed={hasHiddenNotification && !this.isCalculating && this.shouldPulse(hiddenTabs, notifications)}
        onTabSelect={() => {
          this.setState({ popupIsOpen: true });
        }}
        tabRef={this.rollupTabRef}
        innerRef={this.rollupInnerRef}
        text={intl.formatMessage({ id: 'Terra.applicationNavigation.tabs.rollupButtonTitle' })}
        isSelected={tabRollupIsSelected}
        hasChildNotifications={hasHiddenNotification}
        data-application-tabs-more
      />
    );
  }

  renderPopup(hiddenTabs) {
    const {
      activeTabKey, onTabSelect, notifications, intl,
    } = this.props;

    return (
      <Popup
        contentHeight="auto"
        contentWidth="320"
        onRequestClose={() => {
          this.closePopup();
        }}
        targetRef={() => this.rollupInnerRef.current}
        isOpen
        isArrowDisplayed
        isContentFocusDisabled
      >
        <PopupMenu
          title={intl.formatMessage({ id: 'Terra.applicationNavigation.tabs.rollupMenuHeaderTitle' })}
          role="list"
          menuItems={hiddenTabs.map(tab => ({
            key: tab.key,
            text: tab.text,
            icon: tab.icon,
            notificationCount: notifications[tab.key],
            metaData: tab.metaData,
            isActive: tab.key === activeTabKey,
          }))}
          onSelectMenuItem={(itemKey, itemMetaData) => {
            this.closePopup(() => {
              if (onTabSelect) {
                onTabSelect(itemKey, itemMetaData);
              }
            });
          }}
          showSelections
        />
      </Popup>
    );
  }

  render() {
    const {
      navigationItems,
      activeTabKey,
      onTabSelect,
      notifications,
    } = this.props;
    if (!navigationItems || !navigationItems.length) {
      return <Tab isPlaceholder text="W" tabKey="" aria-hidden="true" />;
    }

    const { popupIsOpen } = this.state;
    const { visibleTabs, hiddenTabs } = this.sliceTabs(navigationItems);
    const hasVisibleNotification = visibleTabs.some(tab => !!notifications[tab.key]);
    const hasHiddenNotification = hiddenTabs.some(tab => !!notifications[tab.key]);
    const hasNotifications = hasVisibleNotification || hasHiddenNotification;

    return (
      <nav
        className={cx('tabs-container', { 'is-calculating': this.isCalculating })}
        ref={this.containerRef}
      >
        {this.buildVisibleChildren(visibleTabs, hasNotifications, onTabSelect, activeTabKey, notifications)}
        {!this.menuHidden ? this.renderRollup(hiddenTabs, hasNotifications, hasHiddenNotification) : null}
        {popupIsOpen ? this.renderPopup(hiddenTabs) : null}
      </nav>
    );
  }
}

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;

export default injectIntl(Tabs);
