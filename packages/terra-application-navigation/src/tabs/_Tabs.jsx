import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ResizeObserver from 'resize-observer-polyfill';
import LodashDebounce from 'lodash.debounce';
import { injectIntl, intlShape } from 'react-intl';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';
import ActionHeader from 'terra-action-header';
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

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.setContainerNode = this.setContainerNode.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.setMenuRef = this.setMenuRef.bind(this);
    this.setChildRef = this.setChildRef.bind(this);
    this.getMoreWidth = this.getMoreWidth.bind(this);
    this.getChildWidth = this.getChildWidth.bind(this);
    this.renderRollup = this.renderRollup.bind(this);
    this.renderPopup = this.renderPopup.bind(this);

    this.updateSize = LodashDebounce(this.updateSize.bind(this), 100);
    this.buildVisibleChildren = this.buildVisibleChildren.bind(this);
    this.resetCalculations();
    this.childRefs = [];
    this.previousNotifications = null;

    this.state = {
      popupIsOpen: false,
    };
  }

  componentDidMount() {
    this.resizeObserver = new ResizeObserver((entries) => {
      this.contentWidth = entries[0].contentRect.width;
      this.updateSize();
    });
    this.resizeObserver.observe(this.container);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.navigationItems.length !== nextProps.navigationItems.length || this.props.activeTabKey !== nextProps.activeTabKey) {
      this.resetCalculations();
    }
    this.previousNotifications = this.props.notifications;
    return true;
  }

  componentDidUpdate(prevProps) {
    if (this.isCalculating) {
      this.isCalculating = false;
      this.handleResize(this.contentWidth);
    }

    if (prevProps.activeTabKey !== this.props.activeTabKey) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ popupIsOpen: false });
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
    const childrenCount = this.props.navigationItems.length;
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
        onTabClick: () => {
          if (onTabSelect) {
            onTabSelect(tab.key, tab.metaData);
          }
        },
        isActive: tab.key === activeTabKey,
        notificationCount: hasNotifications ? notifications[tab.key] : 0,
        hasCount: hasNotifications,
        metaData: tab.metaData,
      };
      if (this.isCalculating) {
        tabProps.refCallback = ref => this.setChildRef(ref, index);
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
        isIconOnly={!this.isCalculating && this.contentWidth <= this.getMoreWidth()}
        hasCount={hasNotifications}
        isPulsed={hasHiddenNotification && !this.isCalculating && this.shouldPulse(hiddenTabs, notifications)}
        onClick={() => {
          this.setState({
            popupIsOpen: true,
          });
        }}
        onKeyDown={(event) => {
          if ((event.nativeEvent.keyCode === KEY_RETURN || event.nativeEvent.keyCode === KEY_SPACE) && !this.state.popupIsOpen) {
            this.setState({ popupIsOpen: true });
          }
        }}
        refCallback={this.setMenuRef}
        text={intl.formatMessage({ id: 'Terra.application.tabs.more' })}
        isSelected={tabRollupIsSelected}
        data-application-tabs-more
        showNotificationRollup={hasHiddenNotification}
      />
    );
  }

  renderPopup(hiddenTabs) {
    const { activeTabKey, onTabSelect, notifications } = this.props;

    return (
      <Popup
        contentHeight="auto"
        contentWidth="240"
        onRequestClose={() => {
          this.setState({ popupIsOpen: false });
        }}
        targetRef={() => this.moreRef}
        isOpen
        isArrowDisplayed
      >
        <PopupMenu
          header={<ActionHeader title="Title TBD" />}
          menuItems={hiddenTabs.map(tab => ({
            key: tab.key,
            text: tab.text,
            icon: tab.icon,
            notificationCount: notifications[tab.key],
            metaData: tab.metaData,
            isActive: tab.key === activeTabKey,
          }))}
          onSelectMenuItem={(itemKey, itemMetaData) => {
            if (onTabSelect) {
              onTabSelect(itemKey, itemMetaData);
            }
            this.setState({
              popupIsOpen: false,
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

    const { popupIsOpen } = this.state;

    const { visibleTabs, hiddenTabs } = this.sliceTabs(navigationItems);

    const hasVisibleNotification = visibleTabs.some(tab => !!notifications[tab.key]);
    const hasHiddenNotification = hiddenTabs.some(tab => !!notifications[tab.key]);
    const hasNotifications = hasVisibleNotification || hasHiddenNotification;

    return (
      <div className={cx('tabs-wrapper')} ref={this.setContainerNode}>
        <div
          className={cx(['tabs-container', { 'is-calculating': this.isCalculating }])}
          role="tablist"
        >
          {this.buildVisibleChildren(visibleTabs, hasNotifications, onTabSelect, activeTabKey, notifications)}
          {!this.menuHidden ? this.renderRollup(hiddenTabs, hasNotifications, hasHiddenNotification) : null}
          {popupIsOpen ? this.renderPopup(hiddenTabs) : null}
          <div className={cx(['divider-after-last-tab'])} />
        </div>
      </div>
    );
  }
}

Tabs.propTypes = propTypes;

export default injectIntl(Tabs);
