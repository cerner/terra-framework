import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ResizeObserver from 'resize-observer-polyfill';

import 'terra-base/lib/baseStyles';

import Tab from './_Tab';
import TabMenu from './_TabMenu';
import styles from './ApplicationTabs.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Alignment of the navigational tabs. ( e.g start, center, end )
   */
  alignment: PropTypes.oneOf(['start', 'center', 'end']),
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

class ApplicationTabs extends React.Component {
  constructor(props) {
    super(props);
    this.setContainerNode = this.setContainerNode.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.resetCalculations();
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

  componentWillReceiveProps(newProps) {
    if (this.props.tabs.length !== newProps.tabs.length) {
      this.resetCalculations();
    }
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

  resetCalculations() {
    this.animationFrameID = null;
    this.hiddenStartIndex = -1;
    this.menuHidden = false;
    this.isCalculating = true;
  }

  handleResize(width) {
    // Calculate hide index
    const childrenCount = this.props.tabs.length;
    const tabWidth = childrenCount > 1 ? this.container.children[0].getBoundingClientRect().width : 0;
    const availableWidth = width - tabWidth;

    let newHideIndex = childrenCount;
    let calcMinWidth = 0;
    let isMenuHidden = true;
    for (let i = 0; i < childrenCount; i += 1) {
      calcMinWidth += tabWidth;
      if (calcMinWidth > availableWidth && !(i === childrenCount - 1 && calcMinWidth <= width)) {
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
      };

      if (this.hiddenStartIndex < 0) {
        visibleChildren.push(<Tab {...tabProps} />);
        hiddenChildren.push(<Tab {...tabProps} isCollapsed />);
      } else if (index < this.hiddenStartIndex) {
        visibleChildren.push(<Tab {...tabProps} />);
      } else {
        hiddenChildren.push(<Tab {...tabProps} isCollapsed />);
      }
    });

    return (
      <div className={cx(['application-tabs'])}>
        <div
          className={cx(['tabs-container', { 'is-calculating': this.isCalculating }, alignment])}
          role="tablist"
          ref={this.setContainerNode}
        >
          {visibleChildren}
          <TabMenu isHidden={this.menuHidden} activeTabKey={activeTabKey}>
            {hiddenChildren}
          </TabMenu>
        </div>
      </div>
    );
  }
}

ApplicationTabs.propTypes = propTypes;
ApplicationTabs.defaultProps = defaultProps;

export default ApplicationTabs;
