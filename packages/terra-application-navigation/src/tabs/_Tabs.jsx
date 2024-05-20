import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ResizeObserver from 'resize-observer-polyfill';
import LodashDebounce from 'lodash.debounce';
import { injectIntl } from 'react-intl';
import Popup from 'terra-popup';

import Tab from './_Tab';
import TabRollup from './_TabRollup';
import PopupMenu from '../common/_PopupMenu';
import { navigationItemId } from '../utils/helpers';

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
   * The base id used to generate ids of navigation, utility, and extension items
   */
  id: PropTypes.string,
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
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
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
    this.renderVisibleTabs = this.renderVisibleTabs.bind(this);
    this.updateSize = LodashDebounce(this.updateSize.bind(this), 100);
    this.resetCalculations = this.resetCalculations.bind(this);

    this.containerRef = React.createRef();
    this.rollupTabRef = React.createRef();
    this.rollupInnerRef = React.createRef();
    this.childRefs = [];
    this.previousNotifications = null;

    this.resetCalculations();

    this.state = {
      popupIsOpen: false,
    };
  }

  componentDidMount() {
    if (this.props.navigationItems && this.props.navigationItems.length) {
      this.resizeObserver = new ResizeObserver(entries => {
        this.contentWidth = entries[0].contentRect.width;
        if (!this.isCalculating) {
          this.animationFrameID = window.requestAnimationFrame(() => {
            // Resetting the cache so that all elements will be rendered face-up for width calculations
            this.updateSize();
          });
        }
      });
      this.resizeObserver.observe(this.containerRef.current);
      this.handleResize(this.contentWidth);
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
    const { activeTabKey } = this.props;
    const { popupIsOpen } = this.state;
    if (this.isCalculating) {
      this.isCalculating = false;
      this.handleResize(this.contentWidth);
    }

    if (activeTabKey !== prevProps.activeTabKey && popupIsOpen) {
      // If the active tab has changed between updates due to updates outside of Tabs, the popup is closed.
      this.closePopup();
    }
  }

  componentWillUnmount() {
    this.updateSize.cancel();
    window.cancelAnimationFrame(this.animationFrameID);
    if (this.containerRef.current) {
      this.resizeObserver.disconnect(this.containerRef.current);
    }
    this.containerRef.current = null;
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

  getRollupTabWidth() {
    if (!this.rollupTabRef.current) {
      return 0;
    }
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
    this.animationFrameID = null;
    this.hiddenStartIndex = -1;
    this.menuHidden = false;
    this.isCalculating = true;
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

  renderVisibleTabs(visibleTabs, useNotificationStyle, notifications, id) {
    const { activeTabKey, onTabSelect } = this.props;

    return visibleTabs.map((tab, index) => {
      const tabProps = {
        id: id && navigationItemId(id, tab.key),
        text: tab.text,
        key: tab.key,
        onTabSelect: onTabSelect ? onTabSelect.bind(null, tab.key, tab.metaData) : null,
        isActive: tab.key === activeTabKey,
        notificationCount: useNotificationStyle ? notifications[tab.key] : 0,
        hasCount: useNotificationStyle,
      };
      if (this.isCalculating) {
        const tabRef = React.createRef();
        this.childRefs[index] = tabRef;
        tabProps.tabRef = tabRef;
      }
      return <Tab {...tabProps} render={this.props.navigationRenderFunction} />;
    });
  }

  renderRollup(hiddenTabs, useNotificationStyle, notifications) {
    const { activeTabKey, intl } = this.props;

    const tabRollupIsSelected = hiddenTabs.some(tab => tab.key === activeTabKey);
    const hasChildNotifications = hiddenTabs.some(tab => notifications[tab.key] > 0);

    return (
      <TabRollup
        hasCount={useNotificationStyle}
        isPulsed={hasChildNotifications && !this.isCalculating && this.shouldPulse(hiddenTabs, notifications)}
        onTabSelect={() => {
          this.setState({ popupIsOpen: true });
        }}
        tabRef={this.rollupTabRef}
        innerRef={this.rollupInnerRef}
        text={intl.formatMessage({ id: 'Terra.applicationNavigation.tabs.rollupButtonTitle' })}
        isSelected={tabRollupIsSelected}
        hasChildNotifications={hasChildNotifications}
        data-application-tabs-more
      />
    );
  }

  renderPopup(hiddenTabs, notifications, id) {
    const {
      activeTabKey, onTabSelect, intl,
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
        isHeaderDisabled
      >
        <PopupMenu
          title={intl.formatMessage({ id: 'Terra.applicationNavigation.tabs.rollupMenuHeaderTitle' })}
          role="list"
          menuItems={hiddenTabs.map(tab => ({
            id: id && navigationItemId(id, tab.key),
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
      notifications,
      id,
    } = this.props;
    if (!navigationItems || !navigationItems.length) {
      return <Tab isPlaceholder text="W" tabKey="" aria-hidden="true" />;
    }

    const { popupIsOpen } = this.state;
    const { visibleTabs, hiddenTabs } = this.sliceTabs(navigationItems);
    const useNotificationStyle = !!Object.keys(notifications).length;

    return (
      <nav
        className={cx('tabs-container', { 'is-calculating': this.isCalculating })}
        ref={this.containerRef}
      >
        {this.renderVisibleTabs(visibleTabs, useNotificationStyle, notifications, id)}
        {!this.menuHidden ? this.renderRollup(hiddenTabs, useNotificationStyle, notifications) : null}
        {popupIsOpen ? this.renderPopup(hiddenTabs, notifications, id) : null}
      </nav>
    );
  }
}

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;

export default injectIntl(Tabs);
