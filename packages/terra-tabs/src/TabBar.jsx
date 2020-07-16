import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import ResizeObserver from 'resize-observer-polyfill';
import NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';
import styles from './Tabs.module.scss';
import Tab from './Tab';

const cx = classNames.bind(styles);

// TODO: Roll into single prop type file
const tabPropType = PropTypes.shape({
  /**
   * The id of the tab to be used in mapping.
   */
  id: PropTypes.string.isRequired,
  /**
   * The id of the tab pane element associated to this tab.
   */
  associatedPaneId: PropTypes.string.isRequired,
  /**
   * Icon to be displayed on the tab.
   */
  icon: PropTypes.element,
  /**
   * Text to be displayed on the tab.
   */
  label: PropTypes.string.isRequired,
  /**
   * A custom display for the tab. Component will fallback to label text when collapsed into the menu.
   */
  customDisplay: PropTypes.node,
  /**
   * Indicates if the pane should be disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * Indicates if the pane label should only display the icon. When tab collapses into menu the label text will be used.
   */
  isIconOnly: PropTypes.bool,
  /**
   * Indicates if the tab is currently selected.
   */
  isSelected: PropTypes.bool,
  /**
   * Callback function triggering on selection.
   */
  onSelect: PropTypes.func,
  /**
   * Object to be returned in the onSelect.
   */
  metaData: PropTypes.object,
});

const propTypes = {
  /**
   * Data object for building tabs.
   */
  tabData: PropTypes.arrayOf(tabPropType).isRequired,
};


class TabBar extends React.Component {
  constructor(props) {
    super(props);
    this.resetCache = this.resetCache.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleSelectionAnimation = this.handleSelectionAnimation.bind(this);
    this.renderVisibleTabs = this.renderVisibleTabs.bind(this);
    this.renderRollUp = this.renderRollUp.bind(this);
    this.handleOnSelect = this.handleOnSelect.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.containerRef = React.createRef();
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
    this.resizeObserver.observe(this.containerRef.current);
    this.handleResize(this.containerRef.current.getBoundingClientRect().width);
    this.handleSelectionAnimation();
  }

  componentDidUpdate(prevProps) {
    if (this.isCalculating) {
      this.handleResize(this.contentWidth);
    } else if (this.props.tabData.length !== prevProps.tabData.length) {
      this.resetCache();
      this.forceUpdate();
    } else if (!this.showDropDown) {
      this.handleSelectionAnimation();
    }
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationFrameID);
    this.resizeObserver.disconnect(this.containerRef.current);
    this.containerRef.current = null;
  }

  resetCache() {
    this.animationFrameID = null;
    this.isCalculating = true;
    this.showDropDown = false;
  }

  handleResize(width) {
    // Calculate whether tabs should collapse
    const lastTab = this.containerRef.current.children[this.props.tabData.length - 1];
    const lastTabRect = lastTab.getBoundingClientRect();
    const showDropDown = lastTab.offsetLeft < 0 || + lastTab.offsetLeft + lastTabRect.width > width;
    if (this.isCalculating || this.showDropDown !== showDropDown) {
      this.isCalculating = false;
      this.showDropDown = showDropDown;
      this.forceUpdate();
    }
  }

  handleSelectionAnimation() {
    if (this.selectionBar && window.getComputedStyle(this.selectionBar, null).getPropertyValue('transition-property').includes('transform')) {
      const selectedTab = this.containerRef.current.querySelector('[aria-selected="true]');
      if (selectedTab) {
        const isRTL = document.getElementsByTagName('html')[0].getAttribute('dir') === 'rtl';
        const tabRect = selectedTab.getBoundingClientRect();
        const barWidth = tabRect.width;
        let barLeft = tabRect.left - this.containerRef.current.getBoundingClientRect().left;
        if (isRTL) {
          barLeft = tabRect.right - this.containerRef.current.getBoundingClientRect().right;
        }

        this.selectionBar.style.width = `${barWidth}px`;
        this.selectionBar.style.transform = `translate3d(${barLeft}px,0,0)`;
      }
    }
  }

  handleOnSelect(onSelect) {
    return (metaData) => {
      this.setState({ isOpen: false });
      onSelect(metaData);
    };
  }

  handleOnChange(event) {
    const value = event.currentTarget.value;
    const selectedTab = this.props.tabData.find(tab => tab.key === value);
    selectedTab.onSelect(selectedTab.metaData);
  }

  renderVisibleTabs(tabData, theme) {
    const ids = tabData.map(tab => tab.id);
    return tabData.map((tab, index) => (
      <Tab
        {...tab}
        index={index}
        tabIds={ids}
        onSelect={this.handleOnSelect(tab.onSelect)}
      />
    ));
  }

  renderRollUp(tabData, theme) {
    let selectedTab;
    const selectOptions = tabData.map(tab => {
      if (tab.isSelected) {
        selectedTab = tab;
      }
      return { value: tab.key, display: tab.label };
    });

    return (
      <NativeSelect
        attrs={{ 'aria-controls': selectedTab.associatedPaneId }}
        ariaDescribedBy="Select a Tab from the Drop Down"
        ariaLabel="Tab Drop Down"
        id={selectedTab.id}
        isFilterStyle
        onChange={this.handleOnChange}
        options={selectOptions}
        value={selectedTab.key}
      />
    );
  }

  render() {
    const theme = this.context;
    const showTabList = this.isCalculating || !this.showDropDown;

    let content;
    if (showTabList) {
      content = this.renderVisibleTabs(this.props.tabData);
    } else {
      content = this.renderRollUp(this.props.tabData);
    }

    return (
      <div
        key="terra-tabs-container"
        role={showTabList ? "tablist" : undefined}
        className={cx('collapsible-tabs-container', { 'is-calculating': this.isCalculating }, theme.className)}
        ref={this.containerRef}
      >
        {content}
      </div>
    );
  }
};

TabBar.propTypes = propTypes;
TabBar.contextType = ThemeContext;

export default TabBar;
