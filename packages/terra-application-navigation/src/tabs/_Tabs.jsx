import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ResizeObserver from 'resize-observer-polyfill';

import Tab from './_Tab';
import TabMenu from './_TabMenu';
import styles from './Tabs.module.scss';
import { navigationAlignmentPropType } from '../utils/propTypes';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Alignment of the navigational tabs. ( e.g start, center, end )
   */
  alignment: navigationAlignmentPropType,
  /**
   * Array of objects representing the tabs.
   */
  tabs: PropTypes.arrayOf(PropTypes.shape({
    /**
     * The identifier for the tab.
     */
    key: PropTypes.string.isRequired,
    /**
     * The display text for the tab.
     */
    text: PropTypes.string.isRequired,
    /**
     * The display text for the tab.
     */
    noficationCount: PropTypes.number,
    /**
     * The display text for the tab.
     */
    hasNotifications: PropTypes.bool,
  })),
  /**
   * A string identifying the currently active tab.
   */
  activeTabKey: PropTypes.string,
  /**
   * A function to be executed upon selection of a tab.
   */
  onTabSelect: PropTypes.func,
};

const defaultProps = {
  alignment: 'center',
  tabs: [],
};

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.setContainerNode = this.setContainerNode.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.setMenuRef = this.setMenuRef.bind(this);
    this.setChildRef = this.setChildRef.bind(this);
    this.resetCalculations();
    this.childWidths = [];
  }

  componentDidMount() {
    this.resizeObserver = new ResizeObserver((entries) => {
      this.contentWidth = entries[0].contentRect.width;
      if (!this.isCalculating) {
        this.animationFrameID = window.requestAnimationFrame(() => {
          // Resetting the calculations so that all elements will be rendered face-up for width calculations
          this.resetCalculations();
          this.forceUpdate();
        });
      }
    });
    this.resizeObserver.observe(this.container);
    this.handleResize(this.contentWidth);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.tabs.length !== nextProps.tabs.length || this.props.activeTabKey !== nextProps.activeTabKey) {
      this.resetCalculations();
    }
    return true;
  }

  componentDidUpdate() {
    if (this.isCalculating) {
      this.isCalculating = false;
      this.handleResize(this.contentWidth);
    }
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationFrameID);
    this.resizeObserver.disconnect(this.container);
    this.container = null;
  }

  setContainerNode(node) {
    if (node === null) { return; } // Ref callbacks happen on mount and unmount, element will be null on unmount
    this.container = node;
  }

  setChildRef(ref, index) {
    if (!ref) { return; }
    this.childWidths[index] = ref.getBoundingClientRect().width;
  }

  setMenuRef(ref) {
    if (!ref) { return; }
    this.moreWidth = ref.getBoundingClientRect().width;
  }

  resetCalculations() {
    this.animationFrameID = null;
    this.hiddenStartIndex = -1;
    this.menuHidden = false;
    this.isCalculating = true;
  }

  handleResize(width) {
    // Calculate hide index
    const { tabs } = this.props;
    const childrenCount = tabs.length;
    const moreWidth = width - this.moreWidth;
    let newHideIndex = childrenCount;
    let isMenuHidden = true;

    let calcMinWidth = 0;
    for (let i = 0; i < childrenCount; i += 1) {
      calcMinWidth += this.childWidths[i];
      if (calcMinWidth > moreWidth) {
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

  render() {
    const {
      alignment,
      tabs,
      activeTabKey,
      onTabSelect,
    } = this.props;

    const visibleChildren = [];
    const hiddenChildren = [];

    let showNotificationRollup = false;
    tabs.forEach((tab, index) => {
      const tabProps = {
        text: tab.text,
        key: tab.key,
        tabKey: tab.key,
        onTabClick: () => {
          if (onTabSelect) {
            onTabSelect(tab.key);
          }
        },
        isActive: tab.key === activeTabKey,
        notificationCount: tab.notificationCount,
        hasCount: tab.hasNotifications,
      };

      if (this.hiddenStartIndex < 0) {
        if (tab.notificationCount > 0) {
          showNotificationRollup = true;
        }
        visibleChildren.push(<Tab {...tabProps} refCallback={ref => this.setChildRef(ref, index)} />);
        hiddenChildren.push(<Tab {...tabProps} isCollapsed />);
      } else if (index < this.hiddenStartIndex) {
        visibleChildren.push(<Tab {...tabProps} />);
      } else {
        if (tab.notificationCount > 0) {
          showNotificationRollup = true;
        }
        hiddenChildren.push(<Tab {...tabProps} isCollapsed />);
      }
    });

    return (
      <div className={cx(['tabs-wrapper'])}>
        <div
          className={cx(['tabs-container', { 'is-calculating': this.isCalculating }, alignment])}
          role="tablist"
          ref={this.setContainerNode}
        >
          {visibleChildren}
          <TabMenu isHidden={this.menuHidden} activeTabKey={activeTabKey} menuRefCallback={this.setMenuRef} showNotificationRollup={showNotificationRollup}>
            {hiddenChildren}
          </TabMenu>
          <div className={cx(['divider-after-last-tab'])} />
        </div>
      </div>
    );
  }
}

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;

export default Tabs;
